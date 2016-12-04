###
Configuration related to styling the component as well as the computed
properties that add classes to the component.
###

# Deps
isNumeric = require 'is-numeric'

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

		# Assemble inline styles of container div
		containerStyles: ->
			width: size @width
			height: size @height

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

			# Offset
			'vv-poster-in-viewport': @posterInViewport
			'vv-image-in-viewport': @imageInViewport
			'vv-video-in-viewport': @videoInViewport

			# Video playback
			'vv-playing': @playing

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
			'vv-align-left': @align.indexOf('left') != -1 and @$slots.default
			'vv-align-center': @align.indexOf('center') != -1 and @$slots.default
			'vv-align-right': @align.indexOf('right') != -1 and @$slots.default
			'vv-align-bottom': @align.indexOf('bottom') != -1 and @$slots.default
			'vv-align-middle': @align.indexOf('middle') != -1 and @$slots.default
			'vv-align-top': @align.indexOf('top') != -1 and @$slots.default

		# Shim classes
		shimClasses: ->
			'vv-align-bottom': @align.indexOf('bottom') != -1 and @$slots.default
			'vv-align-middle': @align.indexOf('middle') != -1 and @$slots.default
			'vv-align-top': @align.indexOf('top') != -1 and @$slots.default

	##############################################################################
	methods:

		# Make background style for an asset
		backgroundStyles: (asset) ->
			backgroundImage: "url('#{@[asset+'Src']}')"
			backgroundPosition: @backgroundPosition