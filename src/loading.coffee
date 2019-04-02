###
Configuration related to loading of assets
###

# Deps
import Vue from 'vue'
import throttle from 'lodash/throttle'

# DRY load validation options
loadRules = (val) -> val in [ false, true, 'visible' ]

# The mixin
export default

	##############################################################################
	props:

		# How to load
		load:       { type: [String, Boolean], default: true, validator: loadRules }
		loadPoster: { type: [String, Boolean], default: null, validator: loadRules }
		loadImage:  { type: [String, Boolean], default: null, validator: loadRules }
		loadVideo:  { type: [String, Boolean], default: null, validator: loadRules }

		# Loader config
		loader:         [String, Object]
		loaderThrottle: { type: Number, default: 100 }

	##############################################################################
	data: ->
		posterLoading:   false
		posterLoaded:    false
		imageLoading:    false
		imageLoaded:     false
		videoLoading:    false
		videoLoaded:     false
		fallbackLoading: false
		fallbackLoaded:  false

	##############################################################################
	mounted: ->

		# Loop through asset types and create load watchers
		['poster', 'image', 'video', 'fallback'].forEach (asset) =>
			@$watch asset+'ShouldLoad'
			, ((ready) => @loadAsset(asset) if ready)
			, immediate: true

	##############################################################################
	destroyed: ->

		# Remove image loaders
		for asset in ['poster', 'image', 'fallback']
			@removeImgAssetLoader asset

		# Remove video loaders
		@removeVideoAssetLoader()

	##############################################################################
	computed:

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Asset conditionals

		# Test whether poster is ready to load
		posterShouldLoad: -> @assetReadyToLoad 'poster'

		# Test whether image is ready to load
		imageShouldLoad: -> switch
			when @poster and !@posterLoaded then false # Wait for poster
			else @assetReadyToLoad 'image'

		# Test whether video is ready to load
		videoShouldLoad: -> switch
			when @videoLoading or @videoLoaded then true # If already loading, don't reset
			when (@poster and !@posterLoaded) or (@image and !@imageLoaded) then false
			when @useFallback then false
			when @playng then true # If someone manually starts playing it
			else @assetReadyToLoad 'video'

		# Test whether the fallback is ready to load
		fallbackShouldLoad: -> switch
			when (@poster and !@posterLoaded) or (@image and !@imageLoaded) then false
			when not @useFallback then false
			else @assetReadyToLoad 'fallback'

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Loading state

		# Are any assets currenting loading.
		loading: -> @posterLoading or @imageLoading or @videoLoading or @fallbackLoading
		loaded: -> @posterLoaded or @imageLoaded or @videoLoaded or @fallbackLoaded

		# Try to reduce the loading state flickering back and forth when one asset
		# finishes and the next begins.  Also will prevent the loader showing for
		# super quck loads.
		loadingThrottled: throttle (-> @loading), @loaderThrottle
		loadedThrottled: throttle (-> @loaded), @loaderThrottle

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Loader

		# Show the loader if the Visual is currently loading, optionally using a
		# throttled check
		showLoader: -> switch
			when not @loader then false
			when @throttleLoader then @loadingThrottled
			else @loading

		# Take loader prop and make component instances
		loaderComponent: -> switch typeof @loader
			when 'string' then Vue.component @loader
			when 'object' then @loader

	##############################################################################
	watch:

		# Fire events when assets finish loading
		loading:         (bool) -> @$emit 'loading' if bool
		loaded:          (bool) -> @$emit 'loaded' if bool
		posterLoading:   (bool) -> @$emit 'poster-loading' if bool
		posterLoaded:    (bool) -> @$emit 'poster-loaded' if bool
		imageLoading:    (bool) -> @$emit 'image-loading' if bool
		imageLoaded:     (bool) -> @$emit 'image-loaded' if bool
		videoLoading:    (bool) -> @$emit 'video-loading' if bool
		videoLoaded:     (bool) -> @$emit 'video-loaded' if bool
		fallbackLoading: (bool) -> @$emit 'fallback-loading' if bool
		fallbackLoaded:  (bool) -> @$emit 'fallback-loaded' if bool

	##############################################################################
	methods:

		# DRY per-asset logic for determining whetehr an asset is ready to load.
		# Once it is loaded, this continues to be true because v-if's in the
		# template depend on this.
		assetReadyToLoad: (asset) ->
			alreadyLoading = @[asset+'Loading'] or @[asset+'Loaded']
			loadNow = @assetPropVal(asset, 'load') == true
			loadWhenVisible = @assetPropVal(asset, 'load') == 'visible'
			switch
				when alreadyLoading then true # Already loading or loaded
				when not @[asset+'Src'] then false # Require asset src
				when loadNow then true
				when loadWhenVisible and @[@inViewportProp(asset)] then true

		# Get inViewport property to use.  The fallback should use video's
		inViewportProp: (asset) -> switch asset
			when 'fallback' then 'videoInViewport'
			else asset+'InViewport'

		# Load an asset
		loadAsset: (asset) -> switch asset
			when @[asset+'Loaded'] then true # Don't load twice
			when 'video' then @loadVideoAsset()
			else @loadImgAsset asset

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Image loading

		# Load an image-based by watching the load on an image instance
		loadImgAsset: (asset) ->

			# Create loader
			@[asset+'Loading'] = true
			@[asset+'Loader'] = new Image()

			# Create load handler
			@[asset+'Loader'].addEventListener 'load', @[asset+'OnLoad'] = =>
				@[asset+'Loading'] = false
				@[asset+'Loaded'] = true
				@removeImgAssetLoader asset

			# Trigger the load
			@[asset+'Loader'].src = @[asset+'Src']

		# Cleanup image asset loading
		removeImgAssetLoader: (asset) ->
			if @[asset+'Loader'] and @[asset+'OnLoad']
				@[asset+'Loader'].removeEventListener 'load', @[asset+'OnLoad']

		# Reset the loading of an asset, like in response to responsive breaks
		resetImgAsset: (asset) ->
			@removeImgAssetLoader asset
			@[asset+'Loading'] = false
			@[asset+'Loaded'] = false

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Video loading

		# Load a video based assset
		loadVideoAsset: ->

			# Update loading status for video
			@videoLoading = true
			@$refs.video.addEventListener 'canplaythrough', @videoOnCanplaythrough = =>
				@videoLoading = false
				@videoLoaded = true
				if @$refs.video # Check that Visual hasn't been removed since started
					@$refs.video.removeEventListener 'canplaythrough', @videoOnCanplaythrough

			# Store the native size of the video in case of `background: cover`
			@$refs.video.addEventListener 'loadedmetadata', @videoOnLoadedmetadata = =>
				@videoNativeWidth = @$refs.video.videoWidth
				@videoNativeHeight = @$refs.video.videoHeight
				if @$refs.video # Check that Visual hasn't been removed since started
					@$refs.video.removeEventListener 'loadedmetadata', @videoOnLoadedmetadata

			# Start loading
			@$refs.video.load()

		# Cleanup video asset loading
		removeVideoAssetLoader: (asset) ->
			return unless @$refs.video
			if @videoOnCanplaythrough
				removeEventListener 'canplaythrough', @videoOnCanplaythrough
			if @videoOnLoadedmetadata
				removeEventListener 'loadedmetadata', @videoOnLoadedmetadata
