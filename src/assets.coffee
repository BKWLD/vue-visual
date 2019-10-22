###
Configuration related to the specification of assets
###

# Deps
import sortObjByKey from './utils/sort-obj-by-key'

# The mixin
export default

	##############################################################################
	props:
		poster:          [String, Object]
		image:           [String, Object]
		video:           [String, Object]
		fallback:        [String, Object]
		posterFromImage: { type: Boolean, default: false }
		requireAutoplay: { type: Boolean, default: true }
		assetMutator:     Function

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
		videoSrc: -> @applyAssetMutation 'video', @video

		# Return whether a fallback image should be shown
		useFallback: -> switch
			when not @canPlayVideo then true
			when @requireAutoplay and !@canAutoplayVideo then true

	##############################################################################
	methods:

		# Get the source of images, which may be using breakpoints
		imgSrc: (asset) ->
			
			# Get the src
			src = @applyAssetMutation asset, @[asset]

			# Optionally read the poster from the image prop
			if asset == 'poster' and @posterFromImage and typeof src == 'object'
					imageBreaks = sortObjByKey src
					return imageBreaks[Object.keys(imageBreaks)[0]]

			# Otherwise, require an asset
			return unless src
			
			# Return simple string urls
			return src if typeof src == 'string'

			# Loop through breaks and find the src for the largest src for the width
			breaks = sortObjByKey src
			for width, src of breaks
				choice = src
				return choice if width >= @containerWidth
			return choice # Return the largest one when end is reached

		# Apply mutations if they were defined
		applyAssetMutation: (asset, src) ->
			if @assetMutator
			then @assetMutator asset, src, @
			else src
