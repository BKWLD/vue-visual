module.exports = {

  'it should support just width': function (browser) { browser
		.url('http://localhost:8080/size/')
    .waitForElementVisible('#app', 1000)
		.assert.cssProperty('.vv-has-width', 'width', '200px')
  },

  'it should support just height': function (browser) { browser
		.assert.cssProperty('.vv-has-height', 'height', '100px')
  },

	'it should support width and height': function (browser) { browser
		.assert.cssProperty('.vv-has-width.vv-has-height', 'width', '200px')
		.assert.cssProperty('.vv-has-width.vv-has-height', 'height', '100px')
  },

	'it should support aspect ratios strings': function (browser) { browser
		.assert.attributeContains('.aspect-ratio .vv-aspect-shim', 'style', `padding-top: ${9/16*100}%;`)
  },

  'it should support aspect fraction numbers': function (browser) { browser
		.assert.attributeContains('.aspect-fraction .vv-aspect-shim', 'style', `padding-top: ${9/16*100}%;`)
  },

	'it should support fill': function (browser) { browser
		.assert.cssProperty('.vv-fill .vv-asset', 'height', '100px')
		.assert.cssProperty('.vv-fill .vv-asset', 'width', '100px')
    .end()
  },


}
