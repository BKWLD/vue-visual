<!-- Vue Visual -->

<template lang='pug'>

//- Root container
.vv-visual(
	:class='containerClasses'
	:style='dimensionStyles')

	//- Set the aspect ratio
	.vv-aspect-shim(
		v-if='hasAspect && !expand'
		:style='{ paddingTop: aspectPadding }'
		:class='shimAlignClasses')

	//- Show a placeholder shape until an asset is loaded
	transition(:name='transition')
		.vv-placeholder(
			v-if='placeholderColor && !showImage'
			:style='{ backgroundColor: placeholderColor }')

	//- Image asset
	//- The wrapper constainer is needed for the object-fit polyfill
	.vv-wrapper(v-if='image && shouldLoad')
		transition(:name='transition')
			picture.vv-picture(v-show='showImage')

				//- Webp sources
				source(
					v-if='webpSrcset'
					type='image/webp'
					:srcset='webpSrcset'
					:sizes='sizes')

				//- Slotted sources
				slot(name='image-source')

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
		transition(:name='transition')

			//- Video tag.
			//- Preload because it is only rendered if it's load time.
			video.vv-asset.vv-video(
				v-show='showVideo'
				ref='video'
				playsinline
				preload='auto'
				:autoplay='shouldAutoplay'
				:loop='loop'
				:muted='muted'
				:controls='controls'
				:aria-label='alt'
				:style='assetStyles'
				@canplaythrough='onAssetLoad("video")')

				//- Generated sources
				source(
					v-for='{src, type} in videoSources'
					:key='type'
					:src='src + `#t=01`'
					:type='type')

				//- Slotted sources
				slot(name='video-source')

	//- Render content after the assets
	.vv-slot(
		v-if='$slots.default'
		:class='slotAlignClasses'): slot

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import fitsAssets from './concerns/fits-assets.coffee'
import loadsAssets from './concerns/loads-assets.coffee'
import observesViewport from './concerns/observes-viewport'
import slotsContent from './concerns/slots-content.coffee'
import supportsImages from './concerns/supports-images'
import supportsVideos from './concerns/supports-videos'
export default
	name: 'VueVisual'

	mixins: [
		fitsAssets
		loadsAssets
		observesViewport
		slotsContent
		supportsImages
		supportsVideos
	]

	props: alt: String

	computed:

		# Classes that get added to the visual container
		containerClasses: -> [
			@slotsContentContainerClasses
			@fitsAssetsContainerClasses
			@loadsAssetsContainerClasses
		].filter (val) -> !!val

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<!-- Intentionally unscoped so they can be more easily overriden -->
<style lang='stylus'>

// Default container sizes
.vv-visual
	position relative
	overflow hidden
	font-size 0 // For slot alignment and clearing of line-height

// Fill the parent
.vv-expand
	position absolute
	left 0
	top 0
	width 100%
	height 100%

// Uses to prop block open when an aspect is passed in
.vv-aspect-shim
	display inline-block
	height 100%

// Expand the image if using an aspect-shim or if expanding the container
.vv-has-aspect, .vv-expand
	.vv-wrapper, .vv-picture, .vv-asset
		@extend .vv-expand

// Fill the space with a placeholder shape
.vv-placeholder
	position absolute
	left 0
	top 0
	width 100%
	height 100%

// Slot container
.vv-slot
	font-size 1rem // Restore font size
	position relative // Layer above position:absolute backgrounds
	display inline-block // Prep for vetical centering
	max-width 100% // Prevent wrapping lines pushing slot below shim

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
	transition-delay 0.3s // Let video transition ontop
.vv-fade-enter, .vv-fade-leave-to
	opacity 0

</style>
