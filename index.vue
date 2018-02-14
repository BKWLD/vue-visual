<template lang='jade'>

.vv-visual(
	:style='containerStyles'
	:class='containerClasses')

	//- Prop aspect-based sizing open
	.vv-shim(
		v-if='showShim'
		:style='{ paddingTop: aspectPadding }'
		:class='shimClasses')

	//- Optional prepending slot
	.vv-slot-prepend(v-if='$slots.prepend')
		slot(name='prepend')

	//- Poster asset
	transition(:name='assetPropVal("poster", "transition")')
		.vv-transition.vv-poster-transition(
			v-if='posterShouldRender'
			:class='transitionClasses')
			img.vv-asset.vv-poster(
				v-if='!background'
				:src='posterSrc'
				:class='assetClasses'
				:alt='alt')
			.vv-asset.vv-poster(
				v-else-if='background'
				:style='backgroundStyles("poster")'
				:class='assetClasses'
				:aria-label='alt')

	//- Image asset
	transition(:name='assetPropVal("image", "transition")')
		.vv-transition.vv-image-transition(
			v-if='imageShouldRender'
			:class='transitionClasses')
			img.vv-asset.vv-image(
				v-if='!background'
				:src='imageSrc'
				:class='assetClasses'
				:alt='alt')
			.vv-asset.vv-image(
				v-else-if='background'
				:style='backgroundStyles("image")'
				:class='assetClasses'
				:aria-label='alt')

	//- Fallback asset
	transition(:name='assetPropVal("video", "transition")')
		.vv-transition.vv-fallback-transition(
			v-if='fallbackShouldRender'
			:class='transitionClasses')
			img.vv-asset.vv-fallback(
				v-if='!background'
				:src='fallbackSrc'
				:class='assetClasses'
				:alt='alt')
			.vv-asset.vv-fallback(
				v-else-if='background'
				:style='backgroundStyles("fallback")'
				:class='assetClasses'
				:aria-label='alt')

	//- Video asset
	//- Rendering a video asset effectively loads it; setting preload to false
	//- has cause issues in some browser. So the v-if here is based on load
	//- and we keep it display:none until ready to transition in.
	transition(:name='assetPropVal("video", "transition")')
		.vv-transition.vv-video-transition(
			v-show='videoShouldRender'
			v-if='videoShouldLoad'
			:class='transitionClasses')

			//- The video tag
			video.vv-asset.vv-video(
				:class='assetClasses'
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
	.vv-slot(
		v-if='filledSlot'
		:class='slotClasses')
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
ucfirst = require './src/utils/ucfirst'

# The component definition
module.exports =
	name: 'VueVisual'

	# The src code has been broken up into modules to make it eaier to read
	mixins: [
		require './src/accessibility'
		require './src/assets'
		require './src/loading'
		require './src/size'
		require './src/style'
		require './src/transition'
		require './src/video'
		require './src/viewport'
	]

	# Shared utility methods
	methods:

		# Get value of a prop that has an asset-level override.  For instance,
		# `render` may be overrode by `renderPoster`
		assetPropVal: (asset, prop) ->

			# For some props, fallback uses the video prop
			if asset == 'fallback' and prop in ['load', 'offset', 'transition']
				asset = 'video'

			# Make the prop attribute, ie: renderPoster
			assetProp = prop + ucfirst(asset)

			# Default to general prop if not defined
			@[assetProp] ? @[prop]

	# Merge config as prop defaults
	setDefaults: (config) -> @props[key].default = val for key, val of config

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

/**
 * Styles are all single selectors that don't use inheritance so that
 * Visuals that reside within Visuals don't inherit parent parent values
 * inadvertently.  I didn't want to use direct descendent selectors because
 * overriding would be a pain.
 */

// Display using inline-block like an img or video tag
.vv-visual
	display inline-block
	font-size 0 // Don't let line-height inflate size and prepare for pseudo-center

	// For background-cover videos
	overflow hidden
	position relative

// If aspect or if it has a background, dispaly block
.vv-block
	display block

// If a width was set, make assets fill to it
.vv-has-width
	width 100%

// If a height was set, make assets fill to it
.vv-has-height
	height 100%

// This shim props open aspect-based sizes
.vv-shim
	display inline-block
	height 100%

// Fill the container
.vv-fill
	display block
	position absolute
	top 0
	bottom 0
	left 0
	right 0

// Using width and height here so that <img>s will fill their container
.vv-fill-asset
	position absolute // Needed for <img>
	width 100%
	height 100%

// Don't tile assets using background positioning
.vv-asset[class*='vv-background-']
	background-repeat no-repeat

// Apply background-size properties
.vv-background-cover
	background-size cover
.vv-background-contain
	background-size contain

// Apply background effecs to videos
.vv-video

	// Center the video
	&.vv-background-cover
	&.vv-background-contain
		position absolute
		top 50%
		left 50%
		transform translate(-50%, -50%)

	// Apply letterboxing effect
	&.vv-background-cover.vv-video-pillarbox
	&.vv-background-contain.vv-video-letterbox
		width calc(100% + 1px) // Cover rounding errors
		height auto

	// Apply pillarboxing effect
	&.vv-background-cover.vv-video-letterbox
	&.vv-background-contain.vv-video-pillarbox
		width auto
		height calc(100% + 1px) // Cover rounding errors

// Slot containrs
.vv-slot, .vv-slot-prepend
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

// The standard fading transition
.vv-fade-enter
	opacity 0
.vv-fade-enter-active
	transition opacity .3s
.vv-fade-leave-active
	transition-delay .31s

</style>
