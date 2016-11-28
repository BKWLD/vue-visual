module.exports = {

  'it should create an a simple image tag': function (browser) { browser
	  .url('http://localhost:8080/image/')
    .waitForElementVisible('#app', 1000)
    .assert.elementPresent('img')
    .assert.attributeEquals('img', 'src', 'image.png')
    .end()
  }
}
