/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

	'visual should use new default': function (browser) { browser
		.url('http://localhost:8080/set-defaults/')
		.waitForElementVisible('#app', 1000)

		.assert.cssClassPresent('.uses-default .vv-transition', 'long-fade-enter-active')
	},

	'default should be overrideable': function (browser) { browser
		.assert.cssClassNotPresent('.overrides-default .vv-transition', 'long-fade-enter-active')
		.end()
	},

}
