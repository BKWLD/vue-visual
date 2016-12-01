module.exports = {

	'spinner should appear on load': function (browser) { browser
		.url('http://localhost:8080/loader/')
		.waitForElementVisible('#app', 1000)


	},

	'spinner should remove when loading finished': function (browser) { browser


		.end()
	},

}
