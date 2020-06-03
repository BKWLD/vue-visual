###
Use intersection observer to lazy load.  Not using vue-in-viewport-mixin since
needs are simpler and I want more control.
###
export default

	props:
		intersectionOptions: 
			type: Object
			default: -> {}

	data: -> inViewport: false

	# Start observing on init
	mounted: -> @startObserving()
		
	computed:

		# Conditions where the viewport is watched
		shouldObserve: -> @lazyload or @autopause

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
				options.root = document.querySelector options.root
			return options

		# Store when in viewport
		onInViewport: (entries) ->
			@inViewport = entries[0].isIntersecting
			if @inViewport and @shouldObserveOnce
				@observer?.disconnect() 
				delete @observer
