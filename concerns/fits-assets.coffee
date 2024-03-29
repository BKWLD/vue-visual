###
Logic related to the positioning of the asset within the container, like
using object-fit.
###
export default

	props:

		# Size
		width: Number|String
		height: Number|String
		maxWidth: Number|String
		aspect: Number
		expand: Boolean

		# Layout
		objectFit:
			type: String
			default: 'cover'
		objectPosition:
			type: String
			default: '50% 50%'

	computed:

		# Make the shim padding style
		aspectPadding: -> "#{1 / @aspect * 100}%" if @hasAspect
		hasAspect: -> !!@aspect

		# Styles that get added to the parent container
		dimensionStyles: -> {
			...(if @width then width: @autoUnit @width else {})
			...(if @height then height: @autoUnit @height else {})
			...(if @maxWidth then maxWidth: @autoUnit @maxWidth else {})
		}

		# Styles that go on the asset tags
		assetStyles: -> {
			@objectFit
			@objectPosition

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
			@$refs[assetType].dataset.objectFit = @objectFit
			@$refs[assetType].dataset.objectPosition = @objectPosition
			setTimeout =>
				return unless el = @$refs[assetType]?.$el
				window.objectFitPolyfill el
			, 0

		# Support plain numbers for px units
		autoUnit: (val) -> if String(val).match /^\d+$/ then "#{val}px" else val
