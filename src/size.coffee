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
		width:    [String, Number]
		height:   [String, Number]
		aspect:   [String, Number]
		fill:      Boolean
		watchSize: Boolean # Force watching size

	##############################################################################
	computed:

		# Does this visual need to keep track of it's own width / height
		shouldWatchComponentSize: -> switch
			when @watchSize then true
			when @hasResponsiveAsset then true
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
