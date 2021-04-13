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

		# When to render the video instance
		showVideo: -> switch

			# Render immediately if no transition
			when !@transition then true

			# Render when loaded
			when @videoLoaded then true

	watch:

		# If autopausing, play toggle playback based on viewport status
		inViewport: (visible) ->
			return unless @autopause
			if visible then @play() else @pause()

	methods:

		# Load (if not already) and start playing
		play: ->
			@load()
			@$nextTick => @playPromise = @$refs.video?.play()

		# Pause playback
		pause: ->
			await @playPromise if @playPromise
			@$refs.video?.pause()

		# Play the video from the beginning
		restart: ->
			@seek(0)
			@play()

		# Reset playhead to the beginning and pause
		reset: ->
			@pause()
			@seek(0)

		# Set playhead time to certin value
		seek: (time) -> @$refs.video?.currentTime = time
