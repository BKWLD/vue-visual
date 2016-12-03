module.exports = {

  'it should support just width': function (browser) { browser
		.url('http://localhost:8080/size/')
    .waitForElementVisible('#app', 1000)
		.assert.cssProperty('.test-width', 'width', '200px')
  },

  'it should support just height': function (browser) { browser
		.assert.cssProperty('.test-height', 'height', '100px')
  },

	'it should support width and height': function (browser) { browser
		.assert.cssProperty('.test-width-and-height', 'width', '200px')
		.assert.cssProperty('.test-width-and-height', 'height', '100px')
  },

	'it should support aspect ratios strings': function (browser) { browser
		.assert.attributeContains('.test-ratio .vv-aspect-shim', 'style', `padding-top: ${9/16*100}%;`)
  },

  'it should support aspect fraction numbers': function (browser) { browser
		.assert.attributeContains('.test-fraction .vv-aspect-shim', 'style', `padding-top: ${9/16*100}%;`)
  },

	'it should support fill': function (browser) { browser
		.assert.cssProperty('.test-fill .vv-asset', 'height', '100px')
		.assert.cssProperty('.test-fill .vv-asset', 'width', '100px')
    .end()
  },


}
