module.exports = {

	'spinner should not exist initially': function (browser) { browser
		.url('http://localhost:8080/loader/')
		.waitForElementVisible('#app', 1000)

		.assert.elementNotPresent('.vv-loader')
	},

	'spinner should appear when loading starts': function (browser) { browser
		.execute('App.load = true')
		.assert.elementPresent('.vv-loader')
	},

	'spinner should remove when loading finished': function (browser) { browser
		.waitForElementPresent('.vv-loaded', 1000)
		.waitForElementNotPresent('.vv-loader', 5000) // Wait for animation
		.end()
	},

}
