###
Logic related to loading assets
###
export default

	props:
		autoload:
			type: Boolean
			default: true
		lazyload: Boolean
		nativeLazyload:
			type: Boolean
			default: true
		placeholderColor: String
		transition:
			type: String
			default: 'vv-fade'

	data: ->
		shouldLoad: @autoload and not @lazyload
		imageLoaded: false
		videoLoaded: false

	# Set loaded to true immediately if loaded before the load event fires
	mounted: ->
		@imageLoaded = true if @$refs.image?.complete
		@videoLoaded = true if @$refs.video?.readyState > 3

	computed:

		# Determine whether all assets have been loaded
		allLoaded: ->
			return false if @image and not @imageLoaded
			return false if @video and not @videoLoaded
			return true

		# Container classes
		loadsAssetsContainerClasses: ->
			'vv-image-loaded': @imageLoaded
			'vv-video-loaded': @videoLoaded
			'vv-loaded': @allLoaded

		# Should we use native lazyloading (if it's supported on the device)
		shouldNativeLazyload: -> @lazyload and @nativeLazyload

		# Make the img loading attribute value
		imgLoadingAttr: -> 'lazy' if @shouldNativeLazyload

		# Should we render the img tag, which will trigger loading
		shouldRenderImage: -> @image and @shouldLoad or @shouldNativeLazyload

		# Should we render the video tag, which will trigger loading
		shouldRenderVideo: -> @video and @shouldLoad

	watch:

		# If the asset srcs change, reset the loading state
		image: -> @imageLoaded = false
		video: -> @videoLoaded = false

		# Trigger side effects of assets loading
		imageLoaded: (loaded) ->
			if loaded
				@applyObjectFitPolyfill 'image'
				@$emit 'loaded:image'
		videoLoaded: (loaded) ->
			if loaded
				@applyObjectFitPolyfill 'video'
				@$emit 'loaded:video'
		allLoaded: (loaded) ->
			if loaded
				@$emit 'loaded'

	methods:

		# Handle an asset being loaded. If the element was removed before the load
		# finished, don't continue.  I've seen this in edge cases but not sure
		# what scenario actually lead to that case.
		onAssetLoad: (assetType) ->
			return unless @$refs[assetType]
			@["#{assetType}Loaded"] = true

		# Manually start loading
		load: -> @shouldLoad = true
