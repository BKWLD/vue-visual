<!-- Vue Visual -->

<template lang='pug'>

//- Root container
.vv-visual(
	:class='containerClasses'
	:style='dimensionStyles')
	
	//- Set the aspect ratio
	.vv-aspect-shim(
		v-if='hasAspect' 
		:style='{ paddingTop: aspectPadding }'
		:class='shimAlignClasses')

	//- Show a placeholder shape until an asset is loaded
	transition(name='vv-fade')
		.vv-placeholder(
			v-if='placeholderColor && !imageLoaded && !videoLoaded'
			:style='{ backgroundColor: placeholderColor }')
	
	//- Image asset
	//- The wrapper constainer is needed for the object-fit polyfill
	.vv-wrapper(v-if='image && shouldLoad')
		transition(name='vv-fade')
			picture(v-show='imageLoaded && !videoLoaded')

				//- Webp sources
				source(
					v-if='webpSrcset' 
					type='image/webp' 
					:srcset='webpSrcset'
					:sizes='sizes')

				//- Img tag /w srcset support
				img.vv-asset.vv-image(
					ref='image'
					:src='image'
					:srcset='srcset'
					:sizes='sizes'
					:alt='alt'
					:style='assetStyles'
					@load='onAssetLoad("image")')
	
	//- Video asset
	.vv-wrapper(v-if='video && shouldLoad')
		transition(name='vv-fade')

			//- Video tag
			video.vv-asset.vv-video(
				v-show='videoLoaded'
				ref='video'
				playsinline
				preload='autoload ? "auto" : "none"'
				autoplay='autoplay'
				:loop='loop'
				:muted='muted'
				:controls='controls'
				:aria-label='alt'
				:style='assetStyles'
				@canplaythrough='onAssetLoad("video")')
				source(
					v-for='{src, type} in videoSources'
					:key='type'
					:src='src'
					:type='type')
	
	//- Render content after the assets
	.vv-slot(:class='slotAlignClasses'): slot

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import fitsAssets from './concerns/fits-assets.coffee'
import loadsAssets from './concerns/loads-assets.coffee'
import slotsContent from './concerns/slots-content.coffee'
import supportsImages from './concerns/supports-images'
import supportsVideos from './concerns/supports-videos'
export default

	mixins: [
		fitsAssets
		loadsAssets
		slotsContent
		supportsImages
		supportsVideos
	]

	props:
		alt: String
		placeholderColor: String

	computed:

		# Classes that get added to the visual container
		containerClasses: -> [
			@slotsContentContainerClasses
			@fitsAssetsContainerClasses
			@loadsAssetsContainerClasses
		]
		
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<!-- Intentionally unscoped so they can be more easily overriden -->
<style lang='stylus'>

// Default container sizes
.vv-visual
	position relative
	overflow hidden
	font-size 0 // For slot alignment and clearing of line-height

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
		width 100%
		height 100%

// Fill the space with a placeholder shape
.vv-placeholder
	position absolute
	left 0
	top 0
	width 100%
	height 100%

// Slot containrs
.vv-slot
	font-size 1rem // Restore font size
	position relative // Layer above position:absolute backgrounds
	display inline-block // Prep for vetical centering

// Add vertical align rules
.vv-align-bottom
	vertical-align bottom
.vv-align-middle
	vertical-align middle
.vv-align-top
	vertical-align top

// Add horizontal align rules
.vv-align-left
	text-align left
.vv-align-center
	text-align center
.vv-align-right
	text-align right

// A simple, defualt, transition
.vv-fade-enter-active, .vv-fade-leave-active
	transition opacity .3s
.vv-fade-leave-active
	position absolute // Crossfade when new asset is revealed
.vv-fade-enter, .vv-fade-leave-to
	opacity 0

</style>
