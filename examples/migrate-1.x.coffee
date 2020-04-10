import Visual from 'vue-visual'
Vue.component 'visual', 
	name: 'VueVisual'

	# Support Vue 1.* props that a different type signature in 2.x
	props:
		alt: String
		poster: String|Object
		image: String|Object
		video: String|Object
		fallback: String|Object
		posterFromImage: Boolean
		requireAutoplay: Boolean
		assetMutator: Function
		load: String|Boolean
		loadPoster: String|Boolean
		loadImage: String|Boolean
		loadVideo: String|Boolean
		loader: String|Object 
		loaderThrottle: Number
		width: String|Number
		height: String|Number
		aspect: String|Number
		fill: Boolean
		align: String 
		background: String 
		backgroundPosition: String
		transition: String
		transitionPoster: String
		transitionImage: String
		transitionVideo: String
		transitionLoader: String
		autoplay: String|Boolean
		autopause: String
		loop: Boolean
		muted: Boolean
		controls: Boolean
		inViewportActive: Boolean
		inViewportOnce: Boolean
		inViewportRootMargin: Number|String
		inViewportRoot: String|Function|Object
		inViewportThreshold: Number|Array

	functional: true
	render: (create, { props, data, children }) ->

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
		create Visual, {...data, props, children }
