<template lang='jade'>

.vv-container(
	:style='containerStyles'
	:class='containerClasses')

	//- Prop aspect-based sizing open
	.vv-aspect-shim(
		v-if='aspect'
		:style='{ paddingTop: aspectPadding }')

	//- Image asset
	img.vv-asset.vv-image(
		v-if='image'
		:src='image')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>

# Deps
isNumeric = require 'is-numeric'

# Make a size value from a string or number input
size = (val) ->
	return unless val
	if isNumeric val then val+'px' else val

# Make an aspect fraction from an aspect ratio string
aspectFromString = (str) ->
	parts = str.split ':'
	return parseInt(parts[0], 10) / parseInt(parts[1], 10)

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
		]

		# Durn aspect variable into aspect percentage
		aspectPerc: -> switch
			when isNumeric @aspect then @aspect
			when @aspect.match ':' then aspectFromString @aspect
		aspectPadding: -> (1 / @aspectPerc * 100) + '%'


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
