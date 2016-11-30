module.exports = {

	'images should be rendered using background-size': function (browser) { browser
		.url('http://localhost:8080/bkgd/')
		.waitForElementVisible('#app', 1000)

		.assert.attributeContains('.test-image-cover .vv-image', 'style', 'image.png')
		.assert.cssProperty('.test-image-cover .vv-image', 'background-size', 'cover')

		.assert.attributeContains('.test-image-contain .vv-image', 'style', 'image.png')
		.assert.cssProperty('.test-image-contain .vv-image', 'background-size', 'contain')
	},

	'videos should have proper class applied': function (browser) { browser
		.assert.cssClassPresent('.test-letter-video-cover', 'vv-video-letterbox')
		.assert.cssClassPresent('.test-letter-video-contain', 'vv-video-letterbox')
		.assert.cssClassPresent('.test-pillar-video-cover', 'vv-video-pillarbox')
		.assert.cssClassPresent('.test-pillar-video-contain', 'vv-video-pillarbox')
	},

	'videos should work with fixed size': function (browser) { browser
		.assert.cssClassPresent('.test-fixed-size', 'vv-video-letterbox')
		
		.end()
	},

}
