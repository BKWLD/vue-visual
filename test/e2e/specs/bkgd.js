module.exports = {

	'images should be rendered using background-size': function (browser) { browser
		.url('http://localhost:8080/bkgd/')
		.waitForElementVisible('#app', 1000)

		.assert.attributeContains('.test-image-cover .vv-image', 'style', 'image.png')
		.assert.cssProperty('.test-image-cover .vv-image', 'background-size', 'cover')

		.assert.attributeContains('.test-image-contain .vv-image', 'style', 'image.png')
		.assert.cssProperty('.test-image-contain .vv-image', 'background-size', 'contain')

		.end()
	},

}
