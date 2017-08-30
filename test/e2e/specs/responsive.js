module.exports = {

	'the image src should change according to breakpoints': function (browser) { browser

		.url('http://localhost:8080/responsive/')
		.waitForElementVisible('#app', 1000)
		
		.resizeWindow(400, 400, function() {
			this.assert.attributeContains('.vv-image', 'src', 'poster.png')
		})

		.resizeWindow(600, 600, function() {
			this.assert.attributeContains('.vv-image', 'src', 'image.png')
		})

		.end()
	},

}
