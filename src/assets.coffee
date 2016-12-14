###
Configuration related to the specification of assets
###

# Deps
sortObjByKey = require './utils/sort-obj-by-key'

# The mixin
module.exports =

	##############################################################################
	props:
		poster:          [String, Object]
		image:           [String, Object]
		video:           [String, Object]
		fallback:        [String, Object]
		requireAutoplay: { type: Boolean, default: true }

	##############################################################################
	mounted: ->

		# If the src of an image changes, trigger a reload
		['poster', 'image', 'fallback'].forEach (asset) =>
			@$watch asset+'Src', =>
				@resetImgAsset asset
				@loadAsset(asset) if @[asset+'ShouldLoad']

	##############################################################################
	computed:

		# Determine which image to show given the different ways the src can be
		# passed in
		posterSrc: -> @imgSrc 'poster'
		imageSrc: -> @imgSrc 'image'
		fallbackSrc: -> @imgSrc 'fallback'

		# Return whether a fallback image should be shown
		useFallback: -> switch
			when not @canPlayVideo then true
			when @requireAutoplay and !@canAutoplayVideo then true

	##############################################################################
	methods:

		# Get the source of images, which may be using breakpoints
		imgSrc: (asset) ->
			return unless @[asset] # Require an asset
			return @[asset] if typeof @[asset] == 'string'

			# Loop through breaks and find the src for the largest src for the width
			breaks = sortObjByKey @[asset]
			for width, src of breaks
				choice = src
				return choice if width >= @windowWidth
			return choice # Return the largest one when end is reached
