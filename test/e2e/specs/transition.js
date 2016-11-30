/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

	'visual should use new default': function (browser) { browser
		.url('http://localhost:8080/transition/')
		.waitForElementVisible('#app', 1000)

		.assert.cssClassPresent('.vv-poster-transition', 'long-scale-leave-active')
		.assert.cssClassPresent('.vv-image-transition', 'long-scale-leave-active')
		.assert.cssClassPresent('.vv-video-transition', 'long-scale-enter-active')
		
		.end()
	},

}
