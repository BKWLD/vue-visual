<template lang='jade'>

.vv-container(
	:style='containerStyles'
	:class='containerClasses')

	//- Prop aspect-based sizing open
	.vv-aspect-shim(
		v-if='aspect'
		:style='{ paddingTop: aspectPadding }')

	//- Poster asset
	img.vv-asset.vv-poster(
		v-if='posterShouldRender'
		:src='poster')

	//- Image asset
	img.vv-asset.vv-image(
		v-if='imageShouldRender'
		:src='image')

	//- Video asset
	video.vv-asset.vv-video(
		v-show='videoShouldRender'
		v-if='videoShouldRender || videoShouldLoad'
		:controls='controls'
		:loop='loop'
		:muted='muted'
		ref='video'
		preload='auto')

		//- Video sources list
		source(
			v-for='url in videoSources'
			key='url'
			:src='url'
			:type='mime(url)')

	//- Fallback asset
	img.vv-asset.vv-fallback(
		v-if='fallbackShouldRender'
		:src='fallback')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>

# Deps
isNumeric = require 'is-numeric'
scrollMonitor = require 'scrollmonitor'

# The component definition
module.exports =

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

		# Rendering
		render:       String
		renderPoster: String
		renderImage:  String
		renderVideo:  String

		# Load
		load:        { default: true, type: [String, Boolean] }
		loadPoster:  { default: undefined, type: [String, Boolean] }
		loadImage:   { default: undefined, type: [String, Boolean] }
		loadVideo:   { default: undefined, type: [String, Boolean] }

		# Video
		autoplay:        [String, Boolean]
		autopause:       String
		loop:            Boolean
		muted:           Boolean
		controls:        Boolean
		requireAutoplay: Boolean

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
		posterInViewport: undefined
		imageInViewport:  undefined
		videoInViewport:  undefined

	# Loop through asset types and create load watchers
	created: ->
		['poster', 'image', 'video', 'fallback'].forEach (asset) =>
			@$watch (=> @[asset+'ShouldLoad'])
			, ((ready) => @loadAsset(asset) if ready)
			, immediate: true


	# Loop through asset types and create scroll watchers.  Note, fallback
	# shares the video scroll listener.
	mounted: ->
		['poster', 'image', 'video'].forEach (asset) =>
			@$watch (=> @assetScrollId(asset))
			, ((active) =>
				if active
				then @addScrollListeners(asset)
				else @removeScrollListeners(asset))
			, immediate: true

	# Remove scroll watchers
	destroyed: ->
		@removeScrollListeners asset for asset in ['poster', 'image', 'video']

	computed:

		# Assemble inline styles of container div
		containerStyles: ->
			width: size @width
			height: size @height

		# Assemble additional classes
		containerClasses: ->
			'vv-has-width': @width
			'vv-has-height': @height
			'vv-has-aspect': @aspect
			'vv-poster-loading': @posterLoading
			'vv-poster-loaded': @posterLoaded
			'vv-image-loading': @imageLoading
			'vv-image-loaded': @imageLoaded
			'vv-video-loading': @videoLoading
			'vv-video-loaded': @videoLoaded
			'vv-fallback-loading': @fallbackLoading
			'vv-fallback-loaded': @fallbackLoaded

		# Test whether the poster is ready to be shown
		posterShouldRender: -> switch
			when @imageShouldRender or @videoShouldRender or @fallbackShouldRender then false
			else @assetShouldRender 'poster'

		# Test whether poster is ready to load
		posterShouldLoad: -> @assetReadyToLoad('poster')

		# Test whether the image is ready to be shown
		imageShouldRender: -> switch
			when @videoShouldRender or @fallbackShouldRender then false
			else @assetShouldRender 'image'

		# Test whether image is ready to load
		imageShouldLoad: -> switch
			when @poster and !@posterLoaded then false # Wait for poster
			else @assetReadyToLoad('image')

		# Test whether video should render
		videoShouldRender: -> switch
			when @useFallback then false
			else @assetShouldRender 'video'

		# Test whether video is ready to load
		videoShouldLoad: -> switch
			when (@poster and !@posterLoaded) or (@image and !@imageLoaded) then false
			when @useFallback then false
			else @assetReadyToLoad('video')

		# Test whether the fallback is ready to be shown
		fallbackShouldRender: -> switch
			when not @useFallback then false
			else @assetShouldRender 'fallback'

		# Test whether the fallback is ready to load
		fallbackShouldLoad: -> switch
			when (@poster and !@posterLoaded) or (@image and !@imageLoaded) then false
			when not @useFallback then false
			else @assetReadyToLoad('fallback')

		# Return whether a fallback image should be shown
		useFallback: -> switch
			when not @fallback then false
			when not @canPlayVideo then true
			when @requireAutoplay and !canAutoplayVideo() then true

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

		# Turn aspect variable into aspect percentage
		aspectPerc: -> switch
			when !@aspect then undefined
			when isNumeric @aspect then @aspect
			when @aspect.match ':' then aspectFromString @aspect
		aspectPadding: -> (1 / @aspectPerc * 100) + '%' if @aspectPerc

	methods:

		###
		Rendering
		###

		# DRY per-asset logic for determining whether an asset is ready to render
		assetShouldRender: (asset) ->
			renderOnLoad = @assetPropVal(asset, 'render') == 'load'
			switch
				when not @[asset] then false # Require asset src
				when not renderOnLoad then true # Can be rendered immediately
				when renderOnLoad and @[asset+'Loaded'] then true # Wait for load

		###
		Loading
		###

		# DRY per-asset logic for determining whetehr an asset is ready to load
		assetReadyToLoad: (asset) ->
			alreadyLoading = @[asset+'Loading'] or @[asset+'Loaded']
			loadNow = @assetPropVal(asset, 'load') == true
			loadWhenVisible = @assetPropVal(asset, 'load') == 'visible'
			switch
				when alreadyLoading then false # Already loading
				when loadNow then true
				when loadWhenVisible and @[asset+'InViewport'] then true

		# Load an asset
		loadAsset: (asset) -> switch asset
			when 'video' then @loadVideoAsset asset
			else @loadImgAsset asset

		# Load a video based assset
		loadVideoAsset: (asset) ->
			return unless @[asset]
			@[asset+'Loading'] = true
			@$refs.video.oncanplaythrough = =>
				@[asset+'Loading'] = false
				@[asset+'Loaded'] = true
				delete @$refs.video.oncanplaythrough

		# Load an image-based by watching the load on an image instance
		loadImgAsset: (asset) ->
			return unless @[asset]
			@[asset+'Loading'] = true
			img = new Image()
			img.src = @[asset]
			img.onload = =>
				@[asset+'Loading'] = false
				@[asset+'Loaded'] = true
				delete img.onload

		###
		Scroll
		###

		# Per-asset value that triggers scrollMonitor to re-init.  The id is just
		# the stringified offset (which will trigger re-init if the offset changes)
		# if there is scrolling or null if there is no scroll listening.
		assetScrollId: (asset) ->
			if @assetUsesScroll(asset)
				offset = @assetPropVal asset, 'offset'
				return JSON.stringify offset

		# Per-asset check that an asset cares about inViewport
		assetUsesScroll: (asset) -> switch
			when @assetPropVal(asset, 'load') == 'visible' then true
			when asset == 'video' and @autoplay == 'visible' then true
			when asset == 'video' and @autopause == 'visible' then true

		# Create (or re-init) the scrollMonitor
		addScrollListeners: (asset) ->

			# Cleanup old scroll monitor
			@removeScrollListeners asset
			return unless @$el

			# Create new scroll monitor
			offset = @assetPropVal asset, 'offset'
			@[asset+'scrollMonitor'] = scrollMonitor.create @$el, offset

			# Set initial state and listen for updates
			@[asset+'inViewport'] = @[asset+'scrollMonitor'].isInViewport
			@posterScrollMonitor.on 'visibilityChange', =>
				@[asset+'inViewport'] = @[asset+'scrollMonitor'].isInViewport

		# Destroy scrollMonitor
		removeScrollListeners: (asset) ->
			@[asset+'scrollMonitor'].destroy() if @[asset+'scrollMonitor']

		###
		Utils
		###

		# Get value of a prop that has an asset-level override.  For instance,
		# `render` may be overrode by `renderPoster`
		assetPropVal: (asset, prop) ->
			assetProp = prop + ucfirst(asset) # ie: renderPoster
			@[assetProp] ? @[prop]

		# Passthrough to general mime util so it can be called from template
		mime: (url) -> mime(url)


###
General utils
###

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

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Display using inline-block like an img or video tag
.vv-container
	display inline-block

// If a width was set, make assets fill to it
.vv-has-width .vv-asset
	width 100%

// If a height was set, make assets fill to it
.vv-has-height .vv-asset
	height 100%

// If an aspect ratio was set make assets make them fill. CSS-based aspect
// ratio solve requires display: block
.vv-has-aspect
	position relative
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

</style>
