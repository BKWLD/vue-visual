###
Configuration related to styling the component as well as the computed
properties that add classes to the component.
###

# Deps
isNumeric = require 'is-numeric'
pickBy = require 'lodash/pickBy'

# Make a size value from a string or number input
size = (val) ->
	return unless val
	if isNumeric val then val+'px' else val

# The mixin
module.exports =

	##############################################################################
	props:
		align:      { type: String, default: 'center middle'  }
		background: { type: String, validator: (val) -> val in ['cover', 'contain', ''] }
		backgroundPosition: { type: String, default: 'center center' }

	##############################################################################
	computed:

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# CSS classes

		# Assemble inline styles of container div, where the value is not empty
		containerStyles: -> pickBy
				width: size @width
				height: size @height
			, (val) -> !!val

		# Assemble additional classes
		containerClasses: ->

			# Dimension
			'vv-block': @displayBlock
			'vv-fill': @fill

			# Load
			'vv-loading': @loadingThrottled
			'vv-loaded': @loadedThrottled
			'vv-poster-loading': @posterLoading
			'vv-poster-loaded': @posterLoaded
			'vv-image-loading': @imageLoading
			'vv-image-loaded': @imageLoaded
			'vv-video-loading': @videoLoading
			'vv-video-loaded': @videoLoaded
			'vv-fallback-loading': @fallbackLoading
			'vv-fallback-loaded': @fallbackLoaded

			# Video playback
			'vv-playing': @playing

			# Centering
			'vv-align-left': @align.indexOf('left') != -1 and @filledSlot
			'vv-align-center': @align.indexOf('center') != -1 and @filledSlot
			'vv-align-right': @align.indexOf('right') != -1 and @filledSlot

		# Asset classes
		assetClasses: ->

			# Dimension
			'vv-has-width': @width
			'vv-has-height': @height
			'vv-fill-asset': @shouldFill

			# Render
			'vv-background-cover': @background == 'cover'
			'vv-background-contain': @background == 'contain'
			'vv-video-letterbox': @videoContainEffect == 'letterbox'
			'vv-video-pillarbox': @videoContainEffect == 'pillarbox'

		# Transition classes
		transitionClasses: ->
			'vv-fill': @shouldFill

		# Slot classes
		slotClasses: ->
			'vv-align-bottom': @align.indexOf('bottom') != -1 and @filledSlot
			'vv-align-middle': @align.indexOf('middle') != -1 and @filledSlot
			'vv-align-top': @align.indexOf('top') != -1 and @filledSlot

		# Shim classes
		shimClasses: ->
			'vv-align-bottom': @align.indexOf('bottom') != -1 and @filledSlot
			'vv-align-middle': @align.indexOf('middle') != -1 and @filledSlot
			'vv-align-top': @align.indexOf('top') != -1 and @filledSlot

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Utils

		# Whether to display:block
		displayBlock: -> @aspect or @background

		# Whether the visual is filling it's container
		shouldFill: -> @fill or @aspect or @background

		# Check whether the shim is needed
		showShim: -> switch
			when @aspect then true
			when @filledSlot and @hasVerticalAlign then true

		# Has slottted content
		filledSlot: -> !!@$slots.default

		# Check if vertical-alignment choice was made
		hasVerticalAlign: ->
			@align.indexOf('bottom') or
			@align.indexOf('middle') or
			@align.indexOf('top')

	##############################################################################
	methods:

		# Make background style for an asset
		backgroundStyles: (asset) ->
			backgroundImage: "url('#{@[asset+'Src']}')"
			backgroundPosition: @backgroundPosition
