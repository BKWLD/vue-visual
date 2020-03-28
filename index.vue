<!-- Vue Visual -->

<template lang='pug'>

.vv-visual(
	:class='containerClasses'
	:style='containerStyles')
	
	//- Set the aspect ratio
	.vv-aspect-shim(v-if='aspect' :style='{ paddingTop: aspectPadding }')
	
	//- Image asset. The wrapper constainer is needed for the object-fit polyfill
	.vv-wrapper(v-if='image && shouldLoad')
		transition(name='vv-fade')
			picture(v-show='imageLoaded')

				//- Webp sources
				//- source(
				//- 	v-if='webpSrcset' 
				//- 	type='image/webp' 
				//- 	:srcset='webpSrcset'
				//- 	:sizes='sizes')

				//- The main image asset
				img.vv-asset.vv-image(
					:src='image'
					:alt='alt'
					@load='onAssetLoad("image")')


		//- v-lazy-image.image(
		//- 	ref='image'
		//- 	:src='image'
		//- 	:srcset='srcset'
		//- 	:sizes='sizes'
		//- 	:style='assetStyles'
		//- 	:alt='alt'
		//- 	@load='onLoad')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	data: -> 
		shouldLoad: @autoLoad
		imageLoaded: false
		videoLoaded: false

	props:

		# Size
		width: Number|String
		height: Number|String
		aspect: Number
		maxWidth: Number
		
		# Presentation
		backgroundSize: 
			type: String
			default: 'cover'
		backgroundPosition: 
			type: String
			default: '50% 50%'

		# Image asset
		image: String
		srcset: String
		webpSrcset: String
		sizes: String
		alt: String

		# Video asset
		video: String
		
		# Loading
		lazyLoad: Boolean
		autoLoad: 
			type: Boolean
			default: true
		transition: 
			type: String
			default: 'vv-fade'

		# Accessibility
		alt: String

	computed:

		# Make the shim padding style
		aspectPadding: -> "#{1 / @aspect * 100}%" if @aspect

		# Classes that get added to the visual container
		containerClasses: -> 
			'vv-has-aspect': !!@aspect
			'vv-image-loaded': @imageLoaded
			'vv-video-loaded': @videoLoaded
			'vv-loaded': @allLoaded

		# Determine whether all assets have been loaded
		allLoaded: ->
			return false if @image and not @imageLoaded
			return false if @video and not @videoLoaded
			return true

		# Styles that get added to the parent container
		containerStyles: ->
			width: @autoUnit @width
			height: @autoUnit @height
			'max-width': @autoUnit @maxWidth

		# Styles that go on the asset tags
		assetStyles: ->
			objectFit: @backgroundSize
			objectPosition: @backgroundPosition
	
	watch:

		# If the asset srcs change, reset the loading state
		image: -> @imageLoaded = false
		video: -> @videoLoaded = false

		# When an asset loads, apply the polyfill
		imageLoaded: (loaded) -> @applyPolyfill 'image' if loaded
		videoLoaded: (loaded) -> @applyPolyfill 'video' if loaded
	
	methods:

		# Handle an asset being loaded
		onAssetLoad: (assetType) -> @["#{assetType}Loaded"] = true

		# Enable the polyfill if it was loaded
		applyPolyfill: (assetType) -> 
			return unless window.objectFitPolyfill
			@$refs[assetType].dataset.objectFit = @backgroundSize
			@$refs[assetType].dataset.objectPosition = @backgroundPosition
			window.objectFitPolyfill @$refs[assetType].$el

		# Support plain numbers for px units
		autoUnit: (val) -> if val?.match /^\d+$/ then "#{val}px" else val

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<!-- Intentionally unscoped so they can be more easily overriden -->
<style lang='stylus'>

// Default container sizes
.vv-visual
	position relative
	line-height 0
	overflow hidden

// Uses to prop block open when an aspect is passed in
.vv-aspect-shim
	display inline-block
	height 100%

// Expand the image if using an aspect-shim
.vv-has-aspect
	.vv-wrapper, .vv-asset
		position absolute
		left 0
		top 0
		right 0
		bottom 0

// A simple, defualt, transition
.vv-fade-enter-active, .vv-fade-leave-active
	transition opacity .3s
.vv-fade-enter, .vv-fade-leave-to
	opacity 0

</style>
