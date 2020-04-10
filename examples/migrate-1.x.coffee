import Visual from 'vue-visual'
Vue.component 'visual', 
	name: 'VueVisual'

	# Support Vue 1.* props that a different type signature in 2.x
	props:
		autoplay: String|Boolean
		autopause: String|Boolean

	functional: true
	render: (create, { props, data }) ->

		# Clone the props
		props = { ...props }

		# Handle lazy-loading values differently
		if props.autoplay == 'visible'
			props.autopause = true
			delete props.autoplay
		if props.load == 'visible'
			props.lazyLoad = true
			delete props.load
		else if props.load == true
			props.lazyLoad = false

		# Renamed props
		[ ['load', 'autoload']
			['background', 'objectFit']
			['backgroundPosition', 'objectPosition']
			['fill', 'expand']
		].forEach ([ from,  to]) ->
			return unless props[from]
			props[to] = props[from]
			delete props[from]
		
		# Remove unsupported props
		[ 'poster'
			'fallback'
			'requireAutoplay'
			'assetMutator'
			'loadPoster'
			'loadImage'
			'loadVideo'
			'loader'
			'loaderThrottle'
			'transitionPoster'
			'transitionImage'
			'transitionVideo'
			'transitionLoader'
			'inViewportActive'
			'inViewportOnce'
			'inViewportRootMargin'
			'inViewportRoot'
			'inViewportThreshold'
		].forEach (key) -> delete props[key]
		
		# Create Visual 2.x instance
		create Visual, {...data, props }
