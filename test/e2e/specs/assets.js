module.exports = {

  'it should create poster image': function (browser) { browser
	  .url('http://localhost:8080/assets/')
    .waitForElementVisible('#app', 1000)

    .assert.attributeContains('.vv-asset-poster', 'src', 'poster.png')
  },

  'then it should create the image': function (browser) { browser
    .pause(1)
    .assert.attributeContains('.vv-asset-image', 'src', 'image.png')
  },

  'then it should create the video': function (browser) { browser
    .pause(1)
    .assert.attributeContains('.vv-asset-image', 'src', 'video.mp4')
  },

}
