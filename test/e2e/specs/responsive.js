module.exports = {

  'the image src should change according to breakpoints': function (browser) { browser

		.url('http://localhost:8080/responsive/')
    .waitForElementVisible('#app', 1000)

		.resizeWindow(320, 320)
		.assert.attributeContains('.vv-asset', 'src', 'poster.png')

		.resizeWindow(768, 768)
		.assert.attributeContains('.vv-asset', 'src', 'image.png')

		.end()
  },

}
