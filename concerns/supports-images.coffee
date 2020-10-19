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
			when @videoLoaded then false

			# Render immediately if no transition and no video.  If there is a video,
			# the video should be the one to be immediately rendered.
			when !@transition and !@video then true

			# Image has finished loading
			when @imageLoaded then true

