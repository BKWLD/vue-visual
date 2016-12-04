###
Configuration related to sizing of the component
###

# Deps
isNumeric = require 'is-numeric'

# Make an aspect fraction from an aspect ratio string
aspectFromString = (str) ->
	parts = str.split ':'
	return parseInt(parts[0], 10) / parseInt(parts[1], 10)

# The mixin
module.exports =

	##############################################################################
	props:
		width:  [String, Number]
		height: [String, Number]
		aspect: [String, Number]
		fill:   Boolean

	##############################################################################
	computed:

		# Whether to display:block
		displayBlock: -> @aspect or @background

		# Whether the visual is filling it's container
		shouldFill: -> @fill or @aspect or @background

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

	##############################################################################
	methods:

		# Update the internal measurement of the window size
		handleWindowResize: ->
			@windowWidth = window.innerWidth
			@updateContainerSize() if @shouldWatchComponentSize

		# Update the container size
		updateContainerSize: ->
			@containerWidth = @$el.offsetWidth
			@containerHeight = @$el.offsetHeight
