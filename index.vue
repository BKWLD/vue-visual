<!-- Vue Visual -->

<template lang='pug'>

//- Root container
.vv-visual(
	:class='containerClasses'
	:style='dimensionStyles')
	
	//- Set the aspect ratio
	.vv-aspect-shim(v-if='aspect' :style='{ paddingTop: aspectPadding }')
	
	//- Image asset. The wrapper constainer is needed for the object-fit polyfill
	.vv-wrapper(v-if='image && shouldLoad')
		transition(name='vv-fade'): picture(v-show='imageLoaded')

			//- Webp sources
			source(
				v-if='webpSrcset' 
				type='image/webp' 
				:srcset='webpSrcset'
				:sizes='sizes')

			//- The main img asset
			img.vv-asset.vv-image(
				ref='image'
				:src='image'
				:srcset='srcset'
				:sizes='sizes'
				:alt='alt'
				:style='assetStyles'
				@load='onAssetLoad("image")')

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
		aspectPadding: -> "#{1 / @aspect * 100}%" if @hasAspect
		hasAspect: -> !!@aspect

		# Classes that get added to the visual container
		containerClasses: -> 
			'vv-has-aspect': @hasAspect
			'vv-image-loaded': @imageLoaded
			'vv-video-loaded': @videoLoaded
			'vv-loaded': @allLoaded

		# Determine whether all assets have been loaded
		allLoaded: ->
			return false if @image and not @imageLoaded
			return false if @video and not @videoLoaded
			return true

		# Styles that get added to the parent container
		dimensionStyles: ->
			width: @autoUnit @width
			height: @autoUnit @height
			'max-width': @autoUnit @maxWidth

		# Styles that go on the asset tags
		assetStyles: -> {
			objectFit: @backgroundSize
			objectPosition: @backgroundPosition

			# If there isn't an aspect ratio, apply the container dimensions to
			# the asset as well. Necessary becauase the asset won't naturally match
			# the container div.
			...(unless @hasAspect then @dimensionStyles else {})
		}
	
	watch:

		# If the asset srcs change, reset the loading state
		image: -> @imageLoaded = false
		video: -> @videoLoaded = false

		# Trigger side effects of assets loading
		imageLoaded: (loaded) -> 
			if loaded
				@applyObjectFitPolyfill 'image' 
				@$emit 'loaded:image'
		videoLoaded: (loaded) -> 
			if loaded
				@applyObjectFitPolyfill 'video' 
				@$emit 'loaded:video'
		allLoaded: (loaded) -> 
			if loaded
				@$emit 'loaded'
	
	methods:

		# Handle an asset being loaded
		onAssetLoad: (assetType) -> @["#{assetType}Loaded"] = true

		# Enable the objectFitPolyfill if it was loaded
		applyObjectFitPolyfill: (assetType) -> 
			return unless window.objectFitPolyfill
			@$refs[assetType].dataset.objectFit = @backgroundSize
			@$refs[assetType].dataset.objectPosition = @backgroundPosition
			window.objectFitPolyfill @$refs[assetType].$el

		# Support plain numbers for px units
		autoUnit: (val) -> if val?.match /^\d+$/ then "#{val}px" else val

		# External API
		load: -> @shouldLoad = true
		play: -> # TODO
		pause: -> # TODO

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
