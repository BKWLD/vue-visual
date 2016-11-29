/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

	'it should use poster prop': function (browser) { browser
		.url('http://localhost:8080/assets/')
		.waitForElementVisible('#app', 1000)

		.assert.attributeContains('.test-poster .vv-poster', 'src', 'poster.png')
	},

	'it should use image prop': function (browser) { browser
		.assert.attributeContains('.test-image .vv-image', 'src', 'image.png')
		.assert.elementNotPresent('.test-image .vv-poster')
	},

	'it should use video prop': function (browser) { browser
		.assert.attributeContains('.test-video .vv-video source', 'src', 'video.mp4')
		.assert.elementNotPresent('.test-video .vv-poster')
		.assert.elementNotPresent('.test-video .vv-image')
	},

	'it should use fallback prop': function (browser) { browser

		// Force the user agent to a mobile one
		// .execute('navigator.__defineGetter__("userAgent", function(){ return "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1";})')

		.assert.attributeContains('.test-fallback .vv-fallback', 'src', 'fallback.png')
		.assert.elementNotPresent('.test-fallback .vv-poster')
		.assert.elementNotPresent('.test-fallback .vv-image')
		.assert.elementNotPresent('.test-fallback .vv-video')

		.end()
	},

}
