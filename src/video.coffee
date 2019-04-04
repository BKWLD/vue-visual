###
Configuration related to video support
###

# Check for video support
# http://stackoverflow.com/a/3587475/59160
canPlay = (url) ->
	video = document?.createElement 'video'
	return !!video?.canPlayType?(mime(url)).replace 'no', ''

# Get the mimetupe of a video url given it's file extension
mime = (url) -> switch url.match(/\.(\w+)/)?[1]
	when 'mp4' then 'video/mp4'
	when 'webm' then 'video/webm'
	when 'ogg' then 'video/ogg'

# The mixin
export default

	##############################################################################
	props:
		autoplay:        [String, Boolean]
		autopause:       String
		loop:            Boolean
		muted:           Boolean
		controls:        Boolean

	##############################################################################
	data: ->

		# Dimensions for implementing background cover
		videoNativeWidth:  null
		videoNativeHeight: null

		# Playing status
		playing: false

	##############################################################################
	computed:

		# Loop though all video sources and check if at least one is playable on
		# the device
		canPlayVideo: ->
			return false unless @video
			for video in @videoSources
				return true if canPlay video
			return false

		# Test whether the device can autoplay video
		# https://stackoverflow.com/a/39885697/59160
		canAutoplayVideo: -> switch
			when navigator?.userAgent.match(/BlackBerry/i) then false
			when navigator?.userAgent.match(/(iPhone|iPod)/gi) and
				not ('playsInline' of document.createElement('video')) then false
			else true

		# Turn video sources into an array of URls
		videoSources: -> switch
			when typeof @video == 'string' then [@video]
			when typeof @video == 'array' then @video

		# Get the native aspect of the video
		videoNativeAspect: -> @videoNativeWidth / @videoNativeHeight

		# The masking affect applied to video when applying background-size
		videoContainEffect: ->
			return undefined unless @videoNativeAspect
			if @containerAspect > @videoNativeAspect then 'pillarbox' else 'letterbox'

	##############################################################################
	watch:

		# Directly control video element
		playing: ->

			# If the video isn't ready, it should be soon. At which point the
			# videoLoaded watcher will take over and trigger playback
			return @playing = false if !@$refs.video

			# Control the video element
			if @playing 
			then @$refs.video.play()?.catch (e) -> 
				console.error e.message
				console.error "Vue Visual: try setting `muted` to true"
			else @$refs.video.pause()

		# Respond to changes in autoplay/pause settings
		autoplay: -> @respondToAutoplay()
		autopause: -> @respondToAutopause()

		# When video is ready to play, respond to autoplay sending
		videoLoaded: -> @respondToAutoplay()

		# Handle playback changes when the video moves in and out of viewport
		videoInViewport: (visible) ->
			if visible then @respondToAutoplay() else @respondToAutopause()

	##############################################################################
	methods:

		# Start playing video
		play: -> @playing = true

		# Pause the video
		pause: -> @playing = false

		# Play the video from the beginning
		restart: ->
			@$refs.video.currentTime = 0 if @$refs.video
			@play()

		# Toggle video playing state
		togglePlayback: (play = null) ->
			return @togglePlayback !@playing if play = null
			if play then @play() else @pause()

		# Control video playback based on autoplaying setting
		respondToAutoplay: -> switch
			when @autoplay in [true, ''] then @play()
			when @autoplay == 'visible' and @videoInViewport then @play()

		# Control video playback based on autipause setting
		respondToAutopause: -> switch
			when @autopause == 'visible' and !@videoInViewport then @pause()

		# Passthrough to general mime util so it can be called from template
		mime: (url) -> mime(url)
