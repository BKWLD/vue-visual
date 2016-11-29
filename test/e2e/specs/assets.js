/**
 * The loads happen much quicker than Nightwatch can pull, so we're testing the aftermath of the successive loads
 */
module.exports = {

  'it should create poster image': function (browser) { browser
	  .url('http://localhost:8080/assets/')
    .waitForElementVisible('#app', 1000)

    .assert.attributeContains('.test-poster .vv-poster', 'src', 'poster.png')
  },

  'then it should create the image': function (browser) { browser
    .assert.attributeContains('.test-image .vv-image', 'src', 'image.png')
    .assert.elementNotPresent('.test-image .vv-poster')
  },

  'then it should create the video': function (browser) { browser
    .assert.attributeContains('.test-video .vv-video', 'src', 'video.mp4')
    .assert.elementNotPresent('.test-image .vv-poster')
    .assert.elementNotPresent('.test-image .vv-image')

    .end()
  },

}
