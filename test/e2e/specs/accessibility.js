/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

	'alt text should work on div and img assets': function (browser) { browser
		.url('http://localhost:8080/accessibility/')
		.waitForElementVisible('#app', 1000)

		.assert.attributeEquals('.non-cover .vv-asset', 'alt', 'Test')
		.assert.attributeEquals('.cover .vv-asset', 'aria-label', 'Test')
		.end()
	},

}
