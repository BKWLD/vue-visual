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

	head: -> 
		srcset = @webpSrcset || @srcset

		if @preload and @srcset then return link: [{
			rel: 'preload'
			as: 'image'	
			imagesrcset: @webpSrcset || @srcset
			href: @image
			imagesizes: @sizes
		}] 

		else if @preload and @image then return link: [{
			rel: 'preload',
			as: 'image',
			href: @image
			imagesizes: @sizes
		}]

		else return {}

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