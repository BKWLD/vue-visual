###
Configuration related to the relationship between the component and the viewport
###

# Deps
scrollMonitor = require 'scrollmonitor'
throttle = require 'lodash/throttle'
fireWhenReady = require './utils/fire-when-ready'
require './utils/custom-event'

# Make a single window resize listener
resizingVms = []
resizeAllVms = -> vm.handleWindowResizeThrottled() for vm in resizingVms
window?.addEventListener 'resize', -> resizeAllVms()
fireWhenReady resizeAllVms

# The mixin
module.exports =

	##############################################################################
	props:
		offset:         { type: [Number, String, Object], default: 0 }
		offsetPoster:   [Number, String, Object]
		offsetImage:    [Number, String, Object]
		offsetVideo:    [Number, String, Object]

	##############################################################################
	data: ->

		# Measure dimensions
		windowWidth:       null
		containerWidth:    null
		containerHeight:   null

		# Whether asset is in viewport given offsets
		posterInViewport: null
		imageInViewport:  null
		videoInViewport:  null

	##############################################################################
	mounted: ->

		# Start listening to window resizing
		if @shouldWatchComponentSize
			resizingVms.push this
			@handleWindowResize()
			@handleWindowResizeThrottled = throttle @handleWindowResize, 100

		# Loop through asset types and create scroll watchers.  Note, fallback
		# shares the video scroll listener.
		['poster', 'image', 'video'].forEach (asset) =>
			@$watch (=> @assetScrollId(asset))
			, ((active) =>
				if active
				then @addScrollListeners(asset)
				else @removeScrollListeners(asset))
			, immediate: true

	##############################################################################
	destroyed: ->

		# Remove scroll watchers
		@removeScrollListeners asset for asset in ['poster', 'image', 'video']

		# Remove resizing reference
		resizingVms.splice(resizingVms.indexOf(this), 1)

	##############################################################################
	methods:

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Scrolling

		# Per-asset value that triggers scrollMonitor to re-init.  The id is just
		# the stringified offset (which will trigger re-init if the offset changes)
		# if there is scrolling or null if there is no scroll listening.
		assetScrollId: (asset) ->
			if @assetUsesScroll(asset)
				offset = @assetPropVal asset, 'offset'
				return JSON.stringify offset

		# Per-asset check that an asset cares about inViewport
		assetUsesScroll: (asset) -> switch
			when not @[asset] then false
			when @assetPropVal(asset, 'load') == 'visible' then true
			when asset == 'video' and @autoplay == 'visible' then true
			when asset == 'video' and @autopause == 'visible' then true

		# Create (or re-init) the scrollMonitor
		addScrollListeners: (asset) ->

			# Cleanup old scroll monitor
			@removeScrollListeners asset
			return unless @$el and @[asset]

			# Create new scroll monitor
			offset = @assetPropVal asset, 'offset'
			offset = parseInt(offset, 10) if typeof offset == 'string'
			@[asset+'ScrollMonitor'] = scrollMonitor.create @$el, offset

			# Set initial state and listen for updates
			@[asset+'ScrollMonitor'].on 'stateChange', => @updateInViewport asset

			# Trigger fake scrolls to get scrollMonitor to recalculate itself when
			# document becomes ready.  In addition, updateInViewport is manually being
			# fired because in some cases (seems to be when scroll is at top of the
			# page) the manual scroll event wasn't sufficient to recognize the inital
			# state.
			fireWhenReady =>
				@$nextTick -> window.dispatchEvent new CustomEvent 'scroll'
				@updateInViewport asset

		# Update whether asset is in the viewport
		updateInViewport: (asset) ->
			return unless @[asset+'ScrollMonitor']
			@[asset+'InViewport'] = @[asset+'ScrollMonitor'].isInViewport
			@removeScrollListeners asset if @canRemoveScrollListeners asset

		# Do we only need to listen to the initial entering into the viewport
		canRemoveScrollListeners: (asset) ->
			return false unless @[asset+'InViewport']
			if asset = 'video' then return 'visible' in [@autoplay, @autopause]
			else return true

		# Destroy scrollMonitor
		removeScrollListeners: (asset) ->
			if @[asset+'ScrollMonitor']
				@[asset+'ScrollMonitor'].destroy()
				delete @[asset+'ScrollMonitor']

		# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
		# Container sizing

		# Update the internal measurement of the window size
		handleWindowResize: ->
			@windowWidth = window.innerWidth
			@updateContainerSize() if @shouldWatchComponentSize

		# Update the container size.  Note, if there is no video specified we don't
		# need to know the height.  This saves some CPU:
		# https://jsperf.com/does-reading-one-offset-improve-performance
		updateContainerSize: ->
			@containerWidth = @$el.offsetWidth
			@containerHeight = @$el.offsetHeight if @video or @watchSize
