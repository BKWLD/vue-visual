###
Logic related to the positioning of the asset within the container, like
using object-fit.
###
export default

	props:

		# Size
		width: Number|String
		height: Number|String
		aspect: Number
		maxWidth: Number
		expand: Boolean

		# Layout
		backgroundSize: 
			type: String
			default: 'cover'
		backgroundPosition: 
			type: String
			default: '50% 50%'

	computed:

		# Make the shim padding style
		aspectPadding: -> "#{1 / @aspect * 100}%" if @hasAspect
		hasAspect: -> !!@aspect

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

		# Container classes
		fitsAssetsContainerClasses: -> 
			'vv-has-aspect': @hasAspect
			'vv-expand': @expand

	methods:

		# Enable the objectFitPolyfill if it was loaded
		applyObjectFitPolyfill: (assetType) -> 
			return unless window.objectFitPolyfill
			@$refs[assetType].dataset.objectFit = @backgroundSize
			@$refs[assetType].dataset.objectPosition = @backgroundPosition
			window.objectFitPolyfill @$refs[assetType].$el

		# Support plain numbers for px units
		autoUnit: (val) -> 
			return unless val
			if String(val).match /^\d+$/ then "#{val}px" else val
