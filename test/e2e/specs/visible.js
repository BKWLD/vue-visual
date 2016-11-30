/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

	'assets should not be rendered': function (browser) { browser
		.url('http://localhost:8080/visible/')
		.waitForElementVisible('#app', 1000)

		.assert.elementNotPresent('.vv-image')
		.assert.elementNotPresent('.vv-video')
	},

	'image should render when general offset reached': function (browser) { browser
		.execute('scrollTo(0, 1)')

		.assert.elementPresent('.vv-image')
		.assert.elementNotPresent('.vv-video')
	},

	'video should render when offset override reached': function (browser) { browser
		.execute('scrollTo(0, 200 + 1)')

		.assert.elementPresent('.vv-image')
		.assert.elementPresent('.vv-video')
	},

	'video should stop playing when scrolling back up': function (browser) { browser

		// Wait for video to start playing
		.waitForElementPresent('.vv-visual.vv-playing', 1000)

		.execute('scrollTo(0, 0)')
		.assert.cssClassNotPresent('.vv-visual', '.vv-playing')

		.end()
	},

}
