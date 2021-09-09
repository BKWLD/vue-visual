###
Use intersection observer to lazy load.  Not using vue-in-viewport-mixin since
needs are simpler and I want more control.
###
export default

	props:
		intersectionOptions:
			type: Object
			default: -> {}

	data: ->
		inViewport: false
		supportsNativeLazyload: null

	# Start observing on init
	mounted: ->
		@supportsNativeLazyload = 'loading' of HTMLImageElement.prototype
		@startObserving()

	computed:

		# Conditions where the viewport is watched
		shouldObserve: -> switch

			# If using native lazyload and there is no video, we don't need to
			# make an explicit intersection observer
			when @nativeLazyload and @supportsNativeLazyload and !@video then false

			# Otherwise, if explicitly enabled, add an observer
			when @lazyload then true

			# Or, if using the autopause feature, we need an observer
			when @autopause then true

		# Conditions where we observe only once
		shouldObserveOnce: -> not @autopause

	watch:

		# Trigger load when in viewport
		inViewport: (visible) -> @load() if visible

	methods:

		# Start observing if appropriate
		startObserving: ->
			return unless @shouldObserve and IntersectionObserver?
			return if @observer # Don't make multiple observers
			@observer = new IntersectionObserver @onInViewport,
				@makeIntersectionOptions()
			@observer.observe @$el

		# Parse interesection options
		makeIntersectionOptions: ->
			options = @intersectionOptions
			if options.root and typeof options.root == 'string'
			then options.root = document.querySelector options.root
			return options

		# Store when in viewport
		onInViewport: ([..., entry]) ->
			@inViewport = entry.isIntersecting
			if @inViewport and @shouldObserveOnce
				@observer?.disconnect()
				delete @observer
