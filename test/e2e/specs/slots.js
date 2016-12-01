/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

	'slot contents should be present': function (browser) { browser
		.url('http://localhost:8080/slots/')
		.waitForElementVisible('#app', 1000)

		.assert.elementPresent('.vv-slot h1')
		.end()
	},

}
