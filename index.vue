<template lang='jade'>

.vv-visual(
	:style='containerStyles'
	:class='containerClasses')

	//- Prop aspect-based sizing open
	.vv-aspect-shim(
		v-if='showShim'
		:style='{ paddingTop: aspectPadding }')

	//- Optional prepending slot
	.vv-slot-prepend(v-if='$slots.prepend')
		slot(name='prepend')

	//- Poster asset
	transition(:name='assetPropVal("poster", "transition")')
		.vv-transition.vv-poster-transition(v-if='posterShouldRender')
			img.vv-asset.vv-poster(
				v-if='!background'
				:src='posterSrc'
				:alt='alt')
			.vv-asset.vv-poster(
				v-else-if='background'
				:style='backgroundStyles("poster")'
				:aria-label='alt')

	//- Image asset
	transition(:name='assetPropVal("image", "transition")')
		.vv-transition.vv-image-transition(v-if='imageShouldRender')
			img.vv-asset.vv-image(
				v-if='!background'
				:src='imageSrc'
				:alt='alt')
			.vv-asset.vv-image(
				v-else-if='background'
				:style='backgroundStyles("image")'
				:aria-label='alt')

	//- Fallback asset
	transition(:name='assetPropVal("video", "transition")')
		.vv-transition.vv-fallback-transition(v-if='fallbackShouldRender')
			img.vv-asset.vv-fallback(
				v-if='!background'
				:src='fallbackSrc'
				:alt='alt')
			.vv-asset.vv-fallback(
				v-else-if='background'
				:style='backgroundStyles("fallback")'
				:aria-label='alt')

	//- Video asset
	//- Rendering a video asset effectively loads it; setting preload to false
	//- has cause issues in some browser. So the v-if here is based on load
	//- and we keep it display:none until ready to transition in.
	transition(:name='assetPropVal("video", "transition")')
		.vv-transition.vv-video-transition(
			v-show='videoShouldRender'
			v-if='videoShouldLoad')

			//- The video tag
			video.vv-asset.vv-video(
				:controls='controls'
				:loop='loop'
				:muted='muted'
				ref='video'
				preload='auto'
				:aria-label='alt')

				//- Video sources list
				source(
					v-for='url in videoSources'
					key='url'
					:src='url'
					:type='mime(url)')

	//- The main content slot
	.vv-slot(v-if='$slots.default')
		slot

	//- Insert the spinner using dynamic components
	transition(:name='assetPropVal("loader", "transition")')
		component.vv-loader(
			v-if='showLoader'
			:is='loaderComponent')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>

# Deps
Vue = require 'vue'
isNumeric = require 'is-numeric'
scrollMonitor = require 'scrollmonitor'
throttle = require 'lodash/throttle'

# Make a single window resize listener
resizingVms = []
window.onresize = -> vm.handleWindowResizeThrottled() for vm in resizingVms

# The component definition
module.exports =

	##############################################################################
	props:

		# Assets
		poster:   [String, Object]
		image:    [String, Object]
		video:    [String, Object]
		fallback: [String, Object]

		# Size
		width:  [String, Number]
		height: [String, Number]
		aspect: [String, Number]
		fill:   Boolean

		# Rendering
		render:       String
		renderPoster: String
		renderImage:  String
		renderVideo:  String
		background:   { type: String, validator: (val) -> val in ['cover', 'contain'] }
		backgroundPosition: { type: String, default: 'center center' }
		align:              { type: String, default: 'center middle'  }

		# Load
		load:           { type: [String, Boolean], default: true }
		loadPoster:     { type: [String, Boolean], default: null }
		loadImage:      { type: [String, Boolean], default: null }
		loadVideo:      { type: [String, Boolean], default: null }
		offset:         { type: [Number, String, Object], default: 0 }
		offsetPoster:   [Number, String, Object]
		offsetImage:    [Number, String, Object]
		offsetVideo:    [Number, String, Object]
		loader:         [String, Object]
		loaderThrottle: { type: Number, default: 100 }

		# Transition
		transition:       String
		transitionPoster: String
		transitionImage:  String
		transitionVideo:  String
		transitionLoader: String

		# Video
		autoplay:        [String, Boolean]
		autopause:       String
		loop:            Boolean
		muted:           Boolean
		controls:        Boolean
		requireAutoplay: Boolean

		# Accessibility
		alt: String

	##############################################################################
	data: ->

		# Load status
		posterLoading:   false
		posterLoaded:    false
		imageLoading:    false
		imageLoaded:     false
		videoLoading:    false
		videoLoaded:     false
		fallbackLoading: false
		fallbackLoaded:  false

		# In viewport statuses
		posterInViewport: null
		imageInViewport:  null
		videoInViewport:  null

		# Dimensions
		windowWidth:       null
		containerWidth:    null
		containerHeight:   null
		videoNativeWidth:  null
		videoNativeHeight: null

		# Video status
		playing: false


	##############################################################################
	mounted: ->

		# Start listening to window resizing
		if @shouldWatchComponentSize or @hasResponsiveAsset
			resizingVms.push this
			@handleWindowResize()
			@handleWindowResizeThrottled = throttle @handleWindowResize, 100

		# Loop through asset types and create load watchers
		['poster', 'image', 'video', 'fallback'].forEach (asset) =>
			@$watch asset+'ShouldLoad'
			, ((ready) => @loadAsset(asset) if ready)
			, immediate: true

		# Loop through asset types and create scroll watchers.  Note, fallback
		# shares the video scroll listener.
		['poster', 'image', 'video'].forEach (asset) =>
			@$watch (=> @assetScrollId(asset))
			, ((active) =>
				if active
				then @addScrollListeners(asset)
				else @removeScrollListeners(asset))
			, immediate: true

		# If the src of an image changes, trigger a reload
		['poster', 'image', 'fallback'].forEach (asset) =>
			@$watch asset+'Src', =>
				@resetImgAsset asset
				@loadAsset(asset) if @[asset+'ShouldLoad']

	##############################################################################
	destroyed: ->

		# Remove scroll watchers
		@removeScrollListeners asset for asset in ['poster', 'image', 'video']

		# Remove resizing reference
		resizingVms.splice(resizingVms.indexOf(this), 1)

		# Remove image loaders
		for asset in ['poster', 'image', 'fallback']
			@removeImgAssetLoader asset

		# Remove video loaders
		@removeVideoAssetLoader()


	##############################################################################
	computed:

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# CSS

		# Assemble inline styles of container div
		containerStyles: ->
			width: size @width
			height: size @height

		# Assemble additional classes
		containerClasses: ->

			# Dimension (used internally)
			'vv-has-width': @width
			'vv-has-height': @height
			'vv-has-aspect': @aspect
			'vv-fill': @fill

			# Render
			'vv-background-cover': @background == 'cover'
			'vv-background-contain': @background == 'contain'
			'vv-video-letterbox': @videoContainEffect == 'letterbox'
			'vv-video-pillarbox': @videoContainEffect == 'pillarbox'

			# Alignment
			'vv-align-left': @align.indexOf('left') != -1 and @$slots.default
			'vv-align-center': @align.indexOf('center') != -1 and @$slots.default
			'vv-align-right': @align.indexOf('right') != -1 and @$slots.default
			'vv-align-bottom': @align.indexOf('bottom') != -1 and @$slots.default
			'vv-align-middle': @align.indexOf('middle') != -1 and @$slots.default
			'vv-align-top': @align.indexOf('top') != -1 and @$slots.default

			# Load
			'vv-loading': @loadingThrottled
			'vv-loaded': @loadedThrottled
			'vv-poster-loading': @posterLoading
			'vv-poster-loaded': @posterLoaded
			'vv-image-loading': @imageLoading
			'vv-image-loaded': @imageLoaded
			'vv-video-loading': @videoLoading
			'vv-video-loaded': @videoLoaded
			'vv-fallback-loading': @fallbackLoading
			'vv-fallback-loaded': @fallbackLoaded

			# Offset
			'vv-poster-in-viewport': @posterInViewport
			'vv-image-in-viewport': @imageInViewport
			'vv-video-in-viewport': @videoInViewport

			# Video playback
			'vv-playing': @playing

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Asset render and load

		# Get the right image to show
		posterSrc: -> @imgSrc 'poster'

		# Test whether the poster is ready to be shown
		posterShouldRender: -> switch
			when (@imageShouldRender and @imageLoaded) or
				(@videoShouldRender and @videoLoaded) or
				(@fallbackShouldRender and @fallbackLoaded) then false
			else @assetShouldRender 'poster'

		# Test whether poster is ready to load
		posterShouldLoad: -> @assetReadyToLoad 'poster'

		# Get the right image to show
		imageSrc: -> @imgSrc 'image'

		# Test whether the image is ready to be shown
		imageShouldRender: -> switch
			when (@videoShouldRender and @videoLoaded) or
				(@fallbackShouldRender and @fallbackLoaded) then false
			else @assetShouldRender 'image'

		# Test whether image is ready to load
		imageShouldLoad: -> switch
			when @poster and !@posterLoaded then false # Wait for poster
			else @assetReadyToLoad 'image'

		# Test whether video should render
		videoShouldRender: -> switch
			when @useFallback then false
			else @assetShouldRender 'video'

		# Test whether video is ready to load
		videoShouldLoad: -> switch
			when (@poster and !@posterLoaded) or (@image and !@imageLoaded) then false
			when @useFallback then false
			when @playng then true # If someone manually starts playing it
			else @assetReadyToLoad 'video'

		# Get the right image to show
		fallbackSrc: -> @imgSrc 'fallback'

		# Test whether the fallback is ready to be shown
		fallbackShouldRender: -> switch
			when not @useFallback then false
			else @assetShouldRender 'fallback'

		# Test whether the fallback is ready to load
		fallbackShouldLoad: -> switch
			when (@poster and !@posterLoaded) or (@image and !@imageLoaded) then false
			when not @useFallback then false
			else @assetReadyToLoad 'fallback'

		# Return whether a fallback image should be shown
		useFallback: -> switch
			when not @fallback then false
			when not @canPlayVideo then true
			when @requireAutoplay and !canAutoplayVideo() then true

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Loading

		# Are any assets currenting loading.
		loading: -> @posterLoading or @imageLoading or @videoLoading or @fallbackLoading
		loaded: -> @posterLoaded or @imageLoaded or @videoLoaded or @fallbackLoaded

		# Try to reduce the loading state flickering back and forth when one asset
		# finishes and the next begins.  Also will prevent the loader showing for
		# super quck loads.
		loadingThrottled: throttle (-> @loading), @loaderThrottle
		loadedThrottled: throttle (-> @loaded), @loaderThrottle

		# Show the loader if the Visual is currently loading, optionally using a
		# throttled check
		showLoader: -> switch
			when not @loader then false
			when @throttleLoader then @loadingThrottled
			else @loading

		# Take loader prop and make component instances
		loaderComponent: -> switch typeof @loader
			when 'string' then Vue.component @loader
			when 'object' then @loader

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Video properties

		# Loop though all video sources and check if at least one is playable on
		# the device
		canPlayVideo: ->
			for video in @videoSources
				return true if canPlay video
			return false

		# Turn video sources into an array of URls
		videoSources: -> switch
			when !@video then []
			when typeof @video == 'string' then [@video]
			when typeof @video == 'array' then @video

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Dimensions

		# Check whether the shim is needed
		showShim: -> switch
			when @aspect then true
			when @$slots.default and @hasVerticalAlign then true

		# Check if vertical-alignment choice was made
		hasVerticalAlign: ->
			@align.indexOf('bottom') or
			@align.indexOf('middle') or
			@align.indexOf('top')

		# Does this visual need to keep track of it's own width / height
		shouldWatchComponentSize: -> switch
			when @aspect then false
			when @video and @background then true # For Backgrounded vidoes

		# Is at least one asset type a responsive object
		hasResponsiveAsset: ->
			for asset in ['poster', 'image', 'fallback']
				return true if typeof @[asset] == 'object'

		# Get the container aspect, which may come from different sources
		containerAspect: -> switch
			when @aspect then @aspectProp
			else @containerWidth / @containerHeight

		# Turn aspect prop into a percentage
		aspectProp: -> switch
			when !@aspect then undefined
			when isNumeric @aspect then @aspect
			when @aspect.match ':' then aspectFromString @aspect
		aspectPadding: -> (1 / @aspectProp * 100) + '%' if @aspectProp

		# Get the native aspect of the video
		videoNativeAspect: -> @videoNativeWidth / @videoNativeHeight

		# The masking affect applied to video when applying background-size
		videoContainEffect: ->
			return undefined unless @videoNativeAspect
			if @containerAspect > @videoNativeAspect then 'pillarbox' else 'letterbox'


	##############################################################################
	watch:

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Video

		# Directly control video element
		playing: ->

			# If the video isn't ready, it should be soon. At which point the
			# videoLoaded watcher will take over and trigger playback
			return @playing = false if !@$refs.video

			# Control the video element
			if @playing then @$refs.video.play() else @$refs.video.pause()

		# Respond to changes in autoplay/pause settings
		autoplay: -> @respondToAutoplay()
		autopause: -> @respondToAutopause()

		# When video is ready to play, respond to autoplay sending
		videoLoaded: -> @respondToAutoplay()

		# Handle playback changes when the video moves in and out of viewport
		videoInViewport: (visible) ->
			if visible then @respondToAutoplay() else @respondToAutopause()


	##############################################################################
	methods:

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Rendering

		# DRY per-asset logic for determining whether an asset is ready to render.
		# Rendering is delayed for the load to finish for the following conditions:
		# - User explicitly set `render` to `load`
		# - There is a transition set on the asset
		# - The `load` was not set to load right now
		assetShouldRender: (asset) ->
			renderOnLoad = @assetPropVal(asset, 'render') == 'load'
			hasTransition = !!@assetPropVal(asset, 'transition')
			hasDelayedLoad = @assetReadyToLoad(asset) != true
			switch
				when not @[asset] then false # Require asset src
				when renderOnLoad then @[asset+'Loaded'] # `render` set to `load`
				when hasTransition then @[asset+'Loaded'] # There is a transition
				when hasDelayedLoad then @[asset+'Loaded'] # Not loading right away
				else true # Can be rendered immediately

		# Make background style for an asset
		backgroundStyles: (asset) ->
			backgroundImage: "url('#{@[asset+'Src']}')"
			backgroundPosition: @backgroundPosition

		# Get the source of images, which may be using breakpoints
		imgSrc: (asset) ->
			return unless @[asset] # Require an asset
			return @[asset] if typeof @[asset] == 'string'

			# Loop through breaks and find the src for the largest src for the width
			breaks = sortObjByKey @[asset]
			choice = firstValOfObject breaks
			for width, src of breaks
				return choice if width >= @windowWidth
				choice = src
			return choice # Return the largest one when end is reached

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Loading

		# DRY per-asset logic for determining whetehr an asset is ready to load.
		# Once it is loaded, this continues to be true because v-if's in the
		# template depend on this.
		assetReadyToLoad: (asset) ->
			alreadyLoading = @[asset+'Loading'] or @[asset+'Loaded']
			loadNow = @assetPropVal(asset, 'load') == true
			loadWhenVisible = @assetPropVal(asset, 'load') == 'visible'
			switch
				when alreadyLoading then true # Already loading or loaded
				when not @[asset] then false # Require asset src
				when loadNow then true
				when loadWhenVisible and @[asset+'InViewport'] then true

		# Load an asset
		loadAsset: (asset) -> switch asset
			when @[asset+'Loaded'] then true # Don't load twice
			when 'video' then @loadVideoAsset()
			else @loadImgAsset asset

		# Load a video based assset
		loadVideoAsset: ->

			# Update loading status for video
			@videoLoading = true
			@$refs.video.addEventListener 'canplaythrough', @videoOnCanplaythrough = =>
				@videoLoading = false
				@videoLoaded = true
				if @$refs.video # Check that Visual hasn't been removed since started
					@$refs.video.removeEventListener 'canplaythrough', @videoOnCanplaythrough

			# Store the native size of the video in case of `background: cover`
			@$refs.video.addEventListener 'loadedmetadata', @videoOnLoadedmetadata = =>
				@videoNativeWidth = @$refs.video.videoWidth
				@videoNativeHeight = @$refs.video.videoHeight
				if @$refs.video # Check that Visual hasn't been removed since started
					@$refs.video.removeEventListener 'loadedmetadata', @videoOnLoadedmetadata

			# Start loading
			@$refs.video.load()

		# Cleanup video asset loading
		removeVideoAssetLoader: (asset) ->
			return unless @$refs.video
			if @videoOnCanplaythrough
				removeEventListener 'canplaythrough', @videoOnCanplaythrough
			if @videoOnLoadedmetadata
				removeEventListener 'loadedmetadata', @videoOnLoadedmetadata

		# Load an image-based by watching the load on an image instance
		loadImgAsset: (asset) ->

			# Create loader
			@[asset+'Loading'] = true
			@[asset+'Loader'] = new Image()

			# Create load handler
			@[asset+'Loader'].addEventListener 'load', @[asset+'OnLoad'] = =>
				@[asset+'Loading'] = false
				@[asset+'Loaded'] = true
				@removeImgAssetLoader asset

			# Trigger the load
			@[asset+'Loader'].src = @[asset+'Src']

		# Cleanup image asset loading
		removeImgAssetLoader: (asset) ->
			if @[asset+'Loader'] and @[asset+'OnLoad']
				@[asset+'Loader'].removeEventListener 'load', @[asset+'OnLoad']

		# Reset the loading of an asset, like in response to responsive breaks
		resetImgAsset: (asset) ->
			@removeImgAssetLoader asset
			@[asset+'Loading'] = false
			@[asset+'Loaded'] = false

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Scroll

		# Per-asset value that triggers scrollMonitor to re-init.  The id is just
		# the stringified offset (which will trigger re-init if the offset changes)
		# if there is scrolling or null if there is no scroll listening.
		assetScrollId: (asset) ->
			if @assetUsesScroll(asset)
				offset = @assetPropVal asset, 'offset'
				return JSON.stringify offset

		# Per-asset check that an asset cares about inViewport
		assetUsesScroll: (asset) -> switch
			when not @[asset] then false
			when @assetPropVal(asset, 'load') == 'visible' then true
			when asset == 'video' and @autoplay == 'visible' then true
			when asset == 'video' and @autopause == 'visible' then true

		# Create (or re-init) the scrollMonitor
		addScrollListeners: (asset) ->

			# Cleanup old scroll monitor
			@removeScrollListeners asset
			return unless @$el and @[asset]

			# Create new scroll monitor
			offset = @assetPropVal asset, 'offset'
			offset = parseInt(offset, 10) if typeof offset == 'string'
			@[asset+'ScrollMonitor'] = scrollMonitor.create @$el, offset

			# Set initial state and listen for updates
			@[asset+'InViewport'] = @[asset+'ScrollMonitor'].isInViewport
			@[asset+'ScrollMonitor'].on 'visibilityChange', =>
				@[asset+'InViewport'] = @[asset+'ScrollMonitor'].isInViewport

		# Destroy scrollMonitor
		removeScrollListeners: (asset) ->
			@[asset+'ScrollMonitor'].destroy() if @[asset+'ScrollMonitor']

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Size

		# Update the internal measurement of the window size
		handleWindowResize: ->
			@windowWidth = window.innerWidth
			@updateContainerSize() if @shouldWatchComponentSize

		# Update the container size
		updateContainerSize: ->
			@containerWidth = @$el.offsetWidth
			@containerHeight = @$el.offsetHeight

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Video

		# Start playing video
		play: -> @playing = true

		# Pause the video
		pause: -> @playing = false

		# Play the video from the beginning
		restart: ->
			@$refs.video.currentTime = 0 if @$refs.video
			@play()

		# Toggle video playing state
		togglePlayback: (play = null) ->
			return @togglePlayback !@playing if play = null
			if play then @play() else @pause()

		# Control video playback based on autoplaying setting
		respondToAutoplay: -> switch
			when @autoplay == true then @play()
			when @autoplay == 'visible' and @videoInViewport then @play()

		# Control video playback based on autipause setting
		respondToAutopause: -> switch
			when @autopause == 'visible' and !@videoInViewport then @pause()

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Utils

		# Get value of a prop that has an asset-level override.  For instance,
		# `render` may be overrode by `renderPoster`
		assetPropVal: (asset, prop) ->
			assetProp = prop + ucfirst(asset) # ie: renderPoster
			@[assetProp] ? @[prop]

		# Passthrough to general mime util so it can be called from template
		mime: (url) -> mime(url)


	##############################################################################
	# Component methods

	# Merge config as prop defaults
	setDefaults: (config) -> @props[key].default = val for key, val of config


################################################################################
# General utils

# Make a size value from a string or number input
size = (val) ->
	return unless val
	if isNumeric val then val+'px' else val

# Make an aspect fraction from an aspect ratio string
aspectFromString = (str) ->
	parts = str.split ':'
	return parseInt(parts[0], 10) / parseInt(parts[1], 10)

# Check for video support
# http://stackoverflow.com/a/3587475/59160
canPlay = (url) ->
	video = document.createElement 'video'
	return video?.canPlayType(mime(url)) != 'no'

# Get the mimetupe of a video url given it's file extension
mime = (url) -> switch url.match(/\.(\w+)/)?[1]
	when 'mp4' then 'video/mp4'
	when 'webm' then 'video/webm'
	when 'ogg' then 'video/ogg'

# Test whether the device can autoplay video
canAutoplayVideo = -> !navigator.userAgent.match /Mobile|Android|BlackBerry/i

# Uppercase first letter of string
ucfirst = (str) -> str && str[0].toUpperCase() + str.slice(1)

# Sort object by keys
sortObjByKey = (obj) ->
	ordered = {}
	Object.keys(obj).sort().forEach (key) => ordered[key] = obj[key]
	return ordered

# Get the firt value of an object
firstValOfObject = (obj) -> return val for key, val of obj

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Display using inline-block like an img or video tag
.vv-visual
	display inline-block
	font-size 0 // Don't let line-height inflate size and prepare for pseudo-center

	// For background-cover videos
	overflow hidden
	position relative

// If a width was set, make assets fill to it
.vv-has-width .vv-asset
	width 100%

// If a height was set, make assets fill to it
.vv-has-height .vv-asset
	height 100%

// If an aspect ratio was set make assets make them fill. CSS-based aspect
// ratio solve requires display: block
.vv-has-aspect
	display block
	.vv-asset
		position absolute
		left 0
		top 0
		width 100%
		height 100%

// This shim props open aspect-based sizes
.vv-aspect-shim
	display inline-block
	height 100%

	// Add vertical align rules
	.vv-align-bottom &
		vertical-align bottom
	.vv-align-middle &
		vertical-align middle
	.vv-align-top &
		vertical-align top

// Fill the container
.vv-fill
	display block
	position absolute
	top 0
	bottom 0
	left 0
	right 0
	.vv-asset
		width 100%
		height 100%
		position absolute // Needed for <img>

// If using background cover, assume that the visual will be display block to
// it fills the width of it's container
.vv-background-cover,
.vv-background-contain
	display block

// Don't tile assets using background positioning
.vv-asset
	background-repeat no-repeat

	// Apply background-size properties
	.vv-background-cover &
		background-size cover
	.vv-background-contain &
		background-size contain

// Apply background effecs to videos
.vv-video

	// Center the video
	.vv-background-cover &,
	.vv-background-contain &
		position absolute
		top 50%
		left 50%
		transform translate(-50%, -50%)

	// Apply letterboxing effect
	.vv-background-cover.vv-video-pillarbox &,
	.vv-background-contain.vv-video-letterbox &
		width calc(100% + 1px) // Cover rounding errors
		height auto

	// Apply pillarboxing effect
	.vv-background-cover.vv-video-letterbox &,
	.vv-background-contain.vv-video-pillarbox &
		width auto
		height calc(100% + 1px) // Cover rounding errors

// This container is used to apply transitioning styles without affecting
// styles on the assets that are necessary for them to render
.vv-transition

	// If the asset uses absolute positioning, the transition div must fill it's
	// container
	.vv-background-cover &,
	.vv-background-contain &,
	.vv-has-aspect &
		position absolute
		top 0
		left 0
		width 100%
		height 100%

// The standard fading transition
.vv-fade-enter-active, .vv-fade-leave-active
	transition opacity .3s
.vv-fade-enter, .vv-fade-leave-active
	opacity 0

// Alternative scale animation
.vv-scale-enter-active, .vv-scale-leave-active
	transition opacity .3s, transform .3s
.vv-scale-enter, .vv-scale-leave-active
	opacity 0
	transform scale(0.5)

// Slot containrs
.vv-slot, .vv-slot-prepend

	// Restore font size
	font-size 1rem

	// Make slots not have a lower z-index compared to position absolute background
	// cover assets
	position relative

	// Prep for vetical centering
	display inline-block

	// Add vertical align rules
	.vv-align-bottom &
		vertical-align bottom
	.vv-align-middle &
		vertical-align middle
	.vv-align-top &
		vertical-align top

// Add horizontal align rules
.vv-align-left
	text-align left
.vv-align-center
	text-align center
.vv-align-right
	text-align right

</style>
