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
		render:       null # "null" so it could be tested for undefined
		renderPoster: null
		renderImage:  null
		renderVideo:  null

		# Load
		load:       null # "null" so it could be tested for undefined
		loadPoster: null
		loadImage:  null
		loadVideo:  null

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

		###
		# POSTER
		###

		# Test whether the poster is ready to be shown
		posterShouldRender: -> switch
			when @imageReady then false
			when !@renderOnPosterLoad and @poster then true
			when @renderOnPosterLoad and @posterLoaded then true
		renderOnPosterLoad: ->
			@renderPoster == 'load' or (@renderPoster != false and @render == 'load')

		# Test whether the poster is ready to load
		posterReadyToLoad: -> switch
			when @posterLoader or @posterLoaded then false
			when @loadPoster == undefined and @load == undefined then true
			when @loadPoster == true then true
			when @loadPosterWhenVisible and @posterInViewport then true
		loadPosterWhenVisible: ->
			@loadPoster == 'visible' or (@loadPoster != false and @load == 'visible')

		# Make an id that triggers the poster scrollMonitor to regenerate
		posterScrollId: ->
			JSON.stringify @posterOffset if @loadPosterWhenVisible and @$el
		posterOffset: -> @offsetPoster ? @offset

		# Test whether the image is ready to be shown
		imageShouldRender: -> switch
			when @poster and !@posterLoaded then false
			when !@renderOnImageLoad and @image then true
			when @renderOnImageLoad and @imageLoaded then true
		renderOnImageLoad: ->
			@renderImage == 'load' or (@renderImage != false and @render == 'load')

		# Turn aspect variable into aspect percentage
		aspectPerc: -> switch
			when !@aspect then undefined
			when isNumeric @aspect then @aspect
			when @aspect.match ':' then aspectFromString @aspect
		aspectPadding: -> (1 / @aspectPerc * 100) + '%' if @aspectPerc

	watch:

		# Watch for when to trigger the poster to load
		posterReadyToLoad:
			immediate: true
			handler: (ready) ->
				return unless ready
				@posterLoader = @loadImg @poster, => @posterLoaded = true

		# Watch for whether the poster should respond to being in viewport
		posterScrollId:
			immediate: true
			handler: (active) ->

				# Cleanup old scroll monitor
				@posterScrollMonitor.destroy() if @posterScrollMonitor
				return unless active

				# Create new scroll monitor
				@posterScrollMonitor = scrollMonitor.create @$el, @posterOffset
				@posterInViewport = @posterScrollMonitor.isInViewport
				@posterScrollMonitor.on 'visibilityChange', =>
					@posterInViewport = @posterScrollMonitor.isInViewport

	methods:

		# Watch for an image to load
		loadImg: (src, cb) ->
			return unless src
			img = new Image()
			img.addEventListener 'load', cb
			img.src = src


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
