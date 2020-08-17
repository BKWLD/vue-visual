###
Logic related rendering images
###
export default
	props:
		image: String
		srcset: String
		webpSrcset: String
		sizes: String

	computed:

		# Determines whether the image should be shown via v-show
		showImage: -> switch

			# Switch to video instance
			when @videoLoaded then return false

			# Image has finished loading
			when @imageLoaded then return true

			# We're not lazyloading, so show asap
			when not @lazyload then return true
