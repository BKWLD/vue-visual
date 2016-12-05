/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

	'poster should render and load': function (browser) { browser
		.url('http://localhost:8080/assets/')
		.waitForElementVisible('#app', 1000)

		.assert.attributeContains('.test-poster .vv-poster', 'src', 'poster.png')
	},

	'image should render and load': function (browser) { browser
		.assert.attributeContains('.test-image .vv-image', 'src', 'image.png')
		.assert.elementNotPresent('.test-image .vv-poster')
	},

	'video should render and load': function (browser) { browser
		.assert.attributeContains('.test-video .vv-video source', 'src', 'video.mp4')
		.assert.visible('.test-video .vv-video')
		.assert.elementNotPresent('.test-video .vv-poster')
		.assert.elementNotPresent('.test-video .vv-image')
	},

	'fallback should render and load': function (browser) { browser
		.assert.attributeContains('.test-fallback .vv-fallback', 'src', 'fallback.png')
		.assert.elementNotPresent('.test-fallback .vv-poster')
		.assert.elementNotPresent('.test-fallback .vv-image')
		.assert.elementNotPresent('.test-fallback .vv-video')

		.end()
	},

}
