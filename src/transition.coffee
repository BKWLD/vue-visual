###
Configuration related to animation between loading states
###

# The mixin
module.exports =

	##############################################################################
	props:
		transition:       String
		transitionPoster: String
		transitionImage:  String
		transitionVideo:  String
		transitionLoader: String

	##############################################################################
	computed:

		# Test whether the poster is ready to be shown
		posterShouldRender: -> switch
			when (@imageShouldRender and @imageLoaded) or
				(@videoShouldRender and @videoLoaded) or
				(@fallbackShouldRender and @fallbackLoaded) then false
			else @assetShouldRender 'poster'

		# Test whether the image is ready to be shown
		imageShouldRender: -> switch
			when (@videoShouldRender and @videoLoaded) or
				(@fallbackShouldRender and @fallbackLoaded) then false
			else @assetShouldRender 'image'

		# Test whether video should render
		videoShouldRender: -> switch
			when @useFallback then false
			else @assetShouldRender 'video'

		# Test whether the fallback is ready to be shown
		fallbackShouldRender: -> switch
			when not @useFallback then false
			else @assetShouldRender 'fallback'

	##############################################################################
	methods:

		# DRY per-asset logic for determining whether an asset is ready to render.
		# Rendering is delayed for the load to finish for the following conditions:
		# - There is a transition set on the asset
		# - The `load` was not set to load right now
		assetShouldRender: (asset) ->
			hasTransition = !!@assetPropVal(asset, 'transition')
			hasDelayedLoad = @assetReadyToLoad(asset) != true
			switch
				when not @[asset+'Src'] then false # Require asset src
				when hasTransition then @[asset+'Loaded'] # There is a transition
				when hasDelayedLoad then @[asset+'Loaded'] # Not loading right away
				else true # Can be rendered immediately
