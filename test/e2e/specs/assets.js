module.exports = {

  'it should create an a simple image tag': function (browser) { browser
	  .url('http://localhost:8080/assets/')
    .waitForElementVisible('#app', 1000)
    .assert.elementPresent('img.vv-asset')
    .assert.attributeContains('img', 'src', 'image.png')
		.end()
  },

}
