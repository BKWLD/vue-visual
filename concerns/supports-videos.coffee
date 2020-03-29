###
Logic related video playback
###
export default

	props:
		video: String | Array
		autoplay: Boolean
		autopause: Boolean
		loop: Boolean
		muted: Boolean
		controls: Boolean

	computed:
	
		# Make an easily parsed list of video soruces
		videoSources: ->
			return unless @video
			sources = if Array.isArray @video then @video else [@video]
			sources.map (url) -> 
				src: url
				type: switch url.match(/\.(\w+)$/)?[1] # Check file ext
					when 'mp4' then 'video/mp4'
					when 'webm' then 'video/webm'
					when 'ogg' then 'video/ogg'

		# Don't autoplay if set to autopause. We don't want to autoplay when a 
		# video is offscreen
		shouldAutoplay: -> @autoplay and not @autopause

	watch: 

		# If autopausing, play toggle playback based on viewport status
		inViewport: (visible) ->
			return unless @autopause
			if visible then @play() else @pause()

	methods:

		# Load (if not already) and start playing
		play: -> 
			@load()
			@$nextTick => @$refs.video?.play()

		# Pause playback
		pause: -> @$refs.video?.pause()

		# Play the video from the beginning
		restart: -> 
			@$refs.video?.currentTime = 0
			@play()
