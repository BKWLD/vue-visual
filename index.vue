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

	data: ->

		# Load status
		posterLoaded:    false
		imageLoaded:     false
		videoLoaded:     false
		fallbackLoaded:  false

		# In viewport statuses
		posterInViewport: undefined
		imageInViewport:  undefined
		videoInViewport:  undefined

	# Loop through asset types and create load watchers
	created: ->
		['poster', 'image', 'video', 'fallback'].forEach (asset) =>
			@$watch (=> @assetReadyToLoad(asset))
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
		containerClasses: -> [
			if @width then 'vv-has-width'
			if @height then 'vv-has-height'
			if @aspect then 'vv-has-aspect'
		].filter (val) -> val

		# Test whether the poster is ready to be shown
		posterShouldRender: ->
			return false if @imageShouldRender # Hide when `image` is ready
			return @assetShouldRender 'poster'

		# Test whether the image is ready to be shown
		imageShouldRender: ->
			return false if @poster and !@posterLoaded # Wait for poster
			return @assetShouldRender 'image'

		# Turn aspect variable into aspect percentage
		aspectPerc: -> switch
			when !@aspect then undefined
			when isNumeric @aspect then @aspect
			when @aspect.match ':' then aspectFromString @aspect
		aspectPadding: -> (1 / @aspectPerc * 100) + '%' if @aspectPerc

	methods:

		# DRY per-asset logic for determining whether an asset is ready to render
		assetShouldRender: (asset) ->
			renderOnLoad = @assetPropVal(asset, 'render') == 'load'
			switch
				when not @[asset] then false # Require asset src
				when not renderOnLoad then true # Can be rendered immediately
				when renderOnLoad and @[asset+'Loaded'] then true # Wait for load

		# DRY per-asset logic for determining whetehr an asset is ready to load
		assetReadyToLoad: (asset) ->
			alreadyLoading = @[asset+'Loader'] or @[asset+'Loaded']
			loadNow = @assetPropVal('poster', 'load') == true
			loadWhenVisible = @assetPropVal('poster', 'load') == 'visible'
			switch
				when alreadyLoading then false # Already loading
				when loadNow then true
				when loadWhenVisible and @[asset+'InViewport'] then true

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

		# Get value of a prop that has an asset-level override.  For instance,
		# `render` may be overrode by `renderPoster`
		assetPropVal: (asset, prop) ->
			assetProp = prop + ucfirst(asset) # ie: renderPoster
			@[assetProp] ? @[prop]

		# Load an asset
		loadAsset: (asset) ->
			@[asset+'Loader'] = @loadImg @[asset], =>
				@[asset+'Loaded'] = true
				delete @[asset+'Loader']

		# Watch for an image to load
		loadImg: (src, cb) ->
			return unless src
			img = new Image()
			img.addEventListener 'load', cb
			img.src = src

###
Utils
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
canPlay = (mime) ->
	video = document.createElement 'video'
	return video?.canPlayType(mime) != 'no'

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
