###
Configuration related to the relationship between the component and the viewport
###

# Deps
import throttle from 'lodash/throttle'
import fireWhenReady from './utils/fire-when-ready'
import ucfirst from './utils/ucfirst'
import inViewportMixin from 'vue-in-viewport-mixin'

# Make a single window resize listener
resizingVms = []
resizeAllVms = -> vm.handleWindowResizeThrottled() for vm in resizingVms
window?.addEventListener 'resize', -> resizeAllVms()
fireWhenReady resizeAllVms

# The mixin
export default

	mixins: [ inViewportMixin ]

	##############################################################################
	props:
		
		# Override the inViewportMixin's "active" prop and set the default value
		# automatically based on whether we need to monitor the scroll position.
		# The fallback asset is informed by the video setting here.  The "load"
		# value check replicates the assetPropVal which can't be used here.
		inViewportActive:
			type: Boolean
			default: -> 
				for asset in ['poster', 'image', 'video']
					switch
						when not @[asset] then continue
						when (@["load#{ucfirst(asset)}"] ? @load) == 'visible' then return true
						when asset == 'video' and @autoplay == 'visible' then return true
						when asset == 'video' and @autopause == 'visible' then return true
				return false
		
		# Override the inViewportMixin's "once" prop to set the default value based
		# on other props.  Basically, it can be "once" unless we're using the
		# visible status to toggle video playing state.
		inViewportOnce:
			type: Boolean
			default: -> if @video then 'visible' in [@autoplay, @autopause] else true

	##############################################################################
	data: ->

		# Measure dimensions
		windowWidth:       null
		containerWidth:    null
		containerHeight:   null

	##############################################################################
	mounted: ->

		# Start listening to window resizing
		if @shouldWatchComponentSize
			resizingVms.push this
			@handleWindowResize()
			@handleWindowResizeThrottled = throttle @handleWindowResize, 100

	##############################################################################
	destroyed: ->

		# Remove resizing reference
		resizingVms.splice(resizingVms.indexOf(this), 1)

	##############################################################################
	methods:

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
