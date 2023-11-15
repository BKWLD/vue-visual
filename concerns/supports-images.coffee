###
Logic related rendering images
###
export default
	props:
		image: String
		srcset: String
		webpSrcset: String
		sizes: String
		preload: Boolean

	# Add preload link tags
	head: ->
		return unless @preload and @image

		# Create base link attributes
		preloadTag =
			rel: 'preload'
			as: 'image'
			href: @image

		# Add srcset support
		if imagesrcset = @webpSrcset || @srcset
		then preloadTag = Object.assign preloadTag, {
			imagesrcset
			imagesizes: @sizes || '' # Prevent "undefined" value
		}

		# Add link tag
		return link: [ preloadTag ]

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
