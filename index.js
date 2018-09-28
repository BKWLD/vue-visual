(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("lodash/throttle"), require("is-numeric"), require("lodash/pickBy"), require("scrollmonitor"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "lodash/throttle", "is-numeric", "lodash/pickBy", "scrollmonitor"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue"), require("lodash/throttle"), require("is-numeric"), require("lodash/pickBy"), require("scrollmonitor")) : factory(root["vue"], root["lodash/throttle"], root["is-numeric"], root["lodash/pickBy"], root["scrollmonitor"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(1)

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(3),
	  /* template */
	  __webpack_require__(21),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/reinhard/Work/Open Source/vue-visual/index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-76b9e690", Component.options)
	  } else {
	    hotAPI.reload("data-v-76b9e690", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var ucfirst;

	ucfirst = __webpack_require__(4);

	module.exports = {
	  name: 'VueVisual',
	  mixins: [__webpack_require__(5), __webpack_require__(6), __webpack_require__(8), __webpack_require__(11), __webpack_require__(13), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17)],
	  methods: {
	    assetPropVal: function(asset, prop) {
	      var assetProp, ref;
	      if (asset === 'fallback' && (prop === 'load' || prop === 'offset' || prop === 'transition')) {
	        asset = 'video';
	      }
	      assetProp = prop + ucfirst(asset);
	      return (ref = this[assetProp]) != null ? ref : this[prop];
	    }
	  },
	  setDefaults: function(config) {
	    var key, results, val;
	    results = [];
	    for (key in config) {
	      val = config[key];
	      results.push(this.props[key]["default"] = val);
	    }
	    return results;
	  }
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = function(str) {
	  return str && str[0].toUpperCase() + str.slice(1);
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	
	/*
	Configuration related accessibilty support
	 */
	module.exports = {
	  props: {
	    alt: String
	  }
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to the specification of assets
	 */
	var sortObjByKey;

	sortObjByKey = __webpack_require__(7);

	module.exports = {
	  props: {
	    poster: [String, Object],
	    image: [String, Object],
	    video: [String, Object],
	    fallback: [String, Object],
	    posterFromImage: {
	      type: Boolean,
	      "default": false
	    },
	    requireAutoplay: {
	      type: Boolean,
	      "default": true
	    },
	    assetMutator: Function
	  },
	  mounted: function() {
	    return ['poster', 'image', 'fallback'].forEach((function(_this) {
	      return function(asset) {
	        return _this.$watch(asset + 'Src', function() {
	          _this.resetImgAsset(asset);
	          if (_this[asset + 'ShouldLoad']) {
	            return _this.loadAsset(asset);
	          }
	        });
	      };
	    })(this));
	  },
	  computed: {
	    posterSrc: function() {
	      return this.imgSrc('poster');
	    },
	    imageSrc: function() {
	      return this.imgSrc('image');
	    },
	    fallbackSrc: function() {
	      return this.imgSrc('fallback');
	    },
	    videoSrc: function() {
	      return this.applyAssetMutation('video', this.video);
	    },
	    useFallback: function() {
	      switch (false) {
	        case !!this.canPlayVideo:
	          return true;
	        case !(this.requireAutoplay && !this.canAutoplayVideo):
	          return true;
	      }
	    }
	  },
	  methods: {
	    imgSrc: function(asset) {
	      var breaks, choice, imageBreaks, src, width;
	      src = this.applyAssetMutation(asset, this[asset]);
	      if (asset === 'poster' && this.posterFromImage && typeof src === 'object') {
	        imageBreaks = sortObjByKey(src);
	        return imageBreaks[Object.keys(imageBreaks)[0]];
	      }
	      if (!src) {
	        return;
	      }
	      if (typeof src === 'string') {
	        return src;
	      }
	      breaks = sortObjByKey(src);
	      for (width in breaks) {
	        src = breaks[width];
	        choice = src;
	        if (width >= this.containerWidth) {
	          return choice;
	        }
	      }
	      return choice;
	    },
	    applyAssetMutation: function(asset, src) {
	      if (this.assetMutator) {
	        return this.assetMutator(asset, src, this);
	      } else {
	        return src;
	      }
	    }
	  }
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function(obj) {
	  var ordered;
	  ordered = {};
	  Object.keys(obj).sort().forEach((function(_this) {
	    return function(key) {
	      return ordered[key] = obj[key];
	    };
	  })(this));
	  return ordered;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to loading of assets
	 */
	var Vue, loadRules, throttle;

	Vue = __webpack_require__(9);

	throttle = __webpack_require__(10);

	loadRules = function(val) {
	  return val === false || val === true || val === 'visible';
	};

	module.exports = {
	  props: {
	    load: {
	      type: [String, Boolean],
	      "default": true,
	      validator: loadRules
	    },
	    loadPoster: {
	      type: [String, Boolean],
	      "default": null,
	      validator: loadRules
	    },
	    loadImage: {
	      type: [String, Boolean],
	      "default": null,
	      validator: loadRules
	    },
	    loadVideo: {
	      type: [String, Boolean],
	      "default": null,
	      validator: loadRules
	    },
	    loader: [String, Object],
	    loaderThrottle: {
	      type: Number,
	      "default": 100
	    }
	  },
	  data: function() {
	    return {
	      posterLoading: false,
	      posterLoaded: false,
	      imageLoading: false,
	      imageLoaded: false,
	      videoLoading: false,
	      videoLoaded: false,
	      fallbackLoading: false,
	      fallbackLoaded: false
	    };
	  },
	  mounted: function() {
	    return ['poster', 'image', 'video', 'fallback'].forEach((function(_this) {
	      return function(asset) {
	        return _this.$watch(asset + 'ShouldLoad', (function(ready) {
	          if (ready) {
	            return _this.loadAsset(asset);
	          }
	        }), {
	          immediate: true
	        });
	      };
	    })(this));
	  },
	  destroyed: function() {
	    var asset, i, len, ref;
	    ref = ['poster', 'image', 'fallback'];
	    for (i = 0, len = ref.length; i < len; i++) {
	      asset = ref[i];
	      this.removeImgAssetLoader(asset);
	    }
	    return this.removeVideoAssetLoader();
	  },
	  computed: {
	    posterShouldLoad: function() {
	      return this.assetReadyToLoad('poster');
	    },
	    imageShouldLoad: function() {
	      switch (false) {
	        case !(this.poster && !this.posterLoaded):
	          return false;
	        default:
	          return this.assetReadyToLoad('image');
	      }
	    },
	    videoShouldLoad: function() {
	      switch (false) {
	        case !(this.videoLoading || this.videoLoaded):
	          return true;
	        case !((this.poster && !this.posterLoaded) || (this.image && !this.imageLoaded)):
	          return false;
	        case !this.useFallback:
	          return false;
	        case !this.playng:
	          return true;
	        default:
	          return this.assetReadyToLoad('video');
	      }
	    },
	    fallbackShouldLoad: function() {
	      switch (false) {
	        case !((this.poster && !this.posterLoaded) || (this.image && !this.imageLoaded)):
	          return false;
	        case !!this.useFallback:
	          return false;
	        default:
	          return this.assetReadyToLoad('fallback');
	      }
	    },
	    loading: function() {
	      return this.posterLoading || this.imageLoading || this.videoLoading || this.fallbackLoading;
	    },
	    loaded: function() {
	      return this.posterLoaded || this.imageLoaded || this.videoLoaded || this.fallbackLoaded;
	    },
	    loadingThrottled: throttle((function() {
	      return this.loading;
	    }), this.loaderThrottle),
	    loadedThrottled: throttle((function() {
	      return this.loaded;
	    }), this.loaderThrottle),
	    showLoader: function() {
	      switch (false) {
	        case !!this.loader:
	          return false;
	        case !this.throttleLoader:
	          return this.loadingThrottled;
	        default:
	          return this.loading;
	      }
	    },
	    loaderComponent: function() {
	      switch (typeof this.loader) {
	        case 'string':
	          return Vue.component(this.loader);
	        case 'object':
	          return this.loader;
	      }
	    }
	  },
	  watch: {
	    loading: function(bool) {
	      if (bool) {
	        return this.$emit('loading');
	      }
	    },
	    loaded: function(bool) {
	      if (bool) {
	        return this.$emit('loaded');
	      }
	    },
	    posterLoading: function(bool) {
	      if (bool) {
	        return this.$emit('poster-loading');
	      }
	    },
	    posterLoaded: function(bool) {
	      if (bool) {
	        return this.$emit('poster-loaded');
	      }
	    },
	    imageLoading: function(bool) {
	      if (bool) {
	        return this.$emit('image-loading');
	      }
	    },
	    imageLoaded: function(bool) {
	      if (bool) {
	        return this.$emit('image-loaded');
	      }
	    },
	    videoLoading: function(bool) {
	      if (bool) {
	        return this.$emit('video-loading');
	      }
	    },
	    videoLoaded: function(bool) {
	      if (bool) {
	        return this.$emit('video-loaded');
	      }
	    },
	    fallbackLoading: function(bool) {
	      if (bool) {
	        return this.$emit('fallback-loading');
	      }
	    },
	    fallbackLoaded: function(bool) {
	      if (bool) {
	        return this.$emit('fallback-loaded');
	      }
	    }
	  },
	  methods: {
	    assetReadyToLoad: function(asset) {
	      var alreadyLoading, loadNow, loadWhenVisible;
	      alreadyLoading = this[asset + 'Loading'] || this[asset + 'Loaded'];
	      loadNow = this.assetPropVal(asset, 'load') === true;
	      loadWhenVisible = this.assetPropVal(asset, 'load') === 'visible';
	      switch (false) {
	        case !alreadyLoading:
	          return true;
	        case !!this[asset + 'Src']:
	          return false;
	        case !loadNow:
	          return true;
	        case !(loadWhenVisible && this[this.inViewportProp(asset)]):
	          return true;
	      }
	    },
	    inViewportProp: function(asset) {
	      switch (asset) {
	        case 'fallback':
	          return 'videoInViewport';
	        default:
	          return asset + 'InViewport';
	      }
	    },
	    loadAsset: function(asset) {
	      switch (asset) {
	        case this[asset + 'Loaded']:
	          return true;
	        case 'video':
	          return this.loadVideoAsset();
	        default:
	          return this.loadImgAsset(asset);
	      }
	    },
	    loadImgAsset: function(asset) {
	      this[asset + 'Loading'] = true;
	      this[asset + 'Loader'] = new Image();
	      this[asset + 'Loader'].addEventListener('load', this[asset + 'OnLoad'] = (function(_this) {
	        return function() {
	          _this[asset + 'Loading'] = false;
	          _this[asset + 'Loaded'] = true;
	          return _this.removeImgAssetLoader(asset);
	        };
	      })(this));
	      return this[asset + 'Loader'].src = this[asset + 'Src'];
	    },
	    removeImgAssetLoader: function(asset) {
	      if (this[asset + 'Loader'] && this[asset + 'OnLoad']) {
	        return this[asset + 'Loader'].removeEventListener('load', this[asset + 'OnLoad']);
	      }
	    },
	    resetImgAsset: function(asset) {
	      this.removeImgAssetLoader(asset);
	      this[asset + 'Loading'] = false;
	      return this[asset + 'Loaded'] = false;
	    },
	    loadVideoAsset: function() {
	      this.videoLoading = true;
	      this.$refs.video.addEventListener('canplaythrough', this.videoOnCanplaythrough = (function(_this) {
	        return function() {
	          _this.videoLoading = false;
	          _this.videoLoaded = true;
	          if (_this.$refs.video) {
	            return _this.$refs.video.removeEventListener('canplaythrough', _this.videoOnCanplaythrough);
	          }
	        };
	      })(this));
	      this.$refs.video.addEventListener('loadedmetadata', this.videoOnLoadedmetadata = (function(_this) {
	        return function() {
	          _this.videoNativeWidth = _this.$refs.video.videoWidth;
	          _this.videoNativeHeight = _this.$refs.video.videoHeight;
	          if (_this.$refs.video) {
	            return _this.$refs.video.removeEventListener('loadedmetadata', _this.videoOnLoadedmetadata);
	          }
	        };
	      })(this));
	      return this.$refs.video.load();
	    },
	    removeVideoAssetLoader: function(asset) {
	      if (!this.$refs.video) {
	        return;
	      }
	      if (this.videoOnCanplaythrough) {
	        removeEventListener('canplaythrough', this.videoOnCanplaythrough);
	      }
	      if (this.videoOnLoadedmetadata) {
	        return removeEventListener('loadedmetadata', this.videoOnLoadedmetadata);
	      }
	    }
	  }
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = require("vue");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("lodash/throttle");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to sizing of the component
	 */
	var aspectFromString, isNumeric;

	isNumeric = __webpack_require__(12);

	aspectFromString = function(str) {
	  var parts;
	  parts = str.split(':');
	  return parseInt(parts[0], 10) / parseInt(parts[1], 10);
	};

	module.exports = {
	  props: {
	    width: [String, Number],
	    height: [String, Number],
	    aspect: [String, Number],
	    fill: Boolean
	  },
	  data: function() {
	    return {
	      watchSize: false
	    };
	  },
	  computed: {
	    shouldWatchComponentSize: function() {
	      switch (false) {
	        case !this.watchSize:
	          return true;
	        case !this.hasResponsiveAsset:
	          return true;
	        case !this.aspect:
	          return false;
	        case !(this.video && this.background):
	          return true;
	      }
	    },
	    hasResponsiveAsset: function() {
	      var asset, i, len, ref;
	      ref = ['poster', 'image', 'fallback'];
	      for (i = 0, len = ref.length; i < len; i++) {
	        asset = ref[i];
	        if (typeof this[asset] === 'object') {
	          return true;
	        }
	      }
	    },
	    containerAspect: function() {
	      switch (false) {
	        case !this.aspect:
	          return this.aspectProp;
	        default:
	          return this.containerWidth / this.containerHeight;
	      }
	    },
	    aspectProp: function() {
	      switch (false) {
	        case !!this.aspect:
	          return void 0;
	        case !isNumeric(this.aspect):
	          return this.aspect;
	        case !this.aspect.match(':'):
	          return aspectFromString(this.aspect);
	      }
	    },
	    aspectPadding: function() {
	      if (this.aspectProp) {
	        return (1 / this.aspectProp * 100) + '%';
	      }
	    }
	  }
	};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("is-numeric");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to styling the component as well as the computed
	properties that add classes to the component.
	 */
	var isNumeric, pickBy, size;

	isNumeric = __webpack_require__(12);

	pickBy = __webpack_require__(14);

	size = function(val) {
	  if (!val) {
	    return;
	  }
	  if (isNumeric(val)) {
	    return val + 'px';
	  } else {
	    return val;
	  }
	};

	module.exports = {
	  props: {
	    align: {
	      type: String,
	      "default": 'center middle'
	    },
	    background: {
	      type: String,
	      validator: function(val) {
	        return val === 'cover' || val === 'contain' || val === '';
	      }
	    },
	    backgroundPosition: {
	      type: String,
	      "default": 'center center'
	    }
	  },
	  computed: {
	    containerStyles: function() {
	      return pickBy({
	        width: size(this.width),
	        height: size(this.height)
	      }, function(val) {
	        return !!val;
	      });
	    },
	    containerClasses: function() {
	      return {
	        'vv-block': this.displayBlock,
	        'vv-fill': this.fill,
	        'vv-loading': this.loadingThrottled,
	        'vv-loaded': this.loadedThrottled,
	        'vv-poster-loading': this.posterLoading,
	        'vv-poster-loaded': this.posterLoaded,
	        'vv-image-loading': this.imageLoading,
	        'vv-image-loaded': this.imageLoaded,
	        'vv-video-loading': this.videoLoading,
	        'vv-video-loaded': this.videoLoaded,
	        'vv-fallback-loading': this.fallbackLoading,
	        'vv-fallback-loaded': this.fallbackLoaded,
	        'vv-playing': this.playing,
	        'vv-align-left': this.align.indexOf('left') !== -1 && this.filledSlot,
	        'vv-align-center': this.align.indexOf('center') !== -1 && this.filledSlot,
	        'vv-align-right': this.align.indexOf('right') !== -1 && this.filledSlot
	      };
	    },
	    assetClasses: function() {
	      return {
	        'vv-has-width': this.width,
	        'vv-has-height': this.height,
	        'vv-fill-asset': this.shouldFill,
	        'vv-background-cover': this.background === 'cover',
	        'vv-background-contain': this.background === 'contain',
	        'vv-video-letterbox': this.videoContainEffect === 'letterbox',
	        'vv-video-pillarbox': this.videoContainEffect === 'pillarbox'
	      };
	    },
	    transitionClasses: function() {
	      return {
	        'vv-fill': this.shouldFill
	      };
	    },
	    slotClasses: function() {
	      return {
	        'vv-align-bottom': this.align.indexOf('bottom') !== -1 && this.filledSlot,
	        'vv-align-middle': this.align.indexOf('middle') !== -1 && this.filledSlot,
	        'vv-align-top': this.align.indexOf('top') !== -1 && this.filledSlot
	      };
	    },
	    shimClasses: function() {
	      return {
	        'vv-align-bottom': this.align.indexOf('bottom') !== -1 && this.filledSlot,
	        'vv-align-middle': this.align.indexOf('middle') !== -1 && this.filledSlot,
	        'vv-align-top': this.align.indexOf('top') !== -1 && this.filledSlot
	      };
	    },
	    displayBlock: function() {
	      return this.aspect || this.background;
	    },
	    shouldFill: function() {
	      return this.fill || this.aspect || this.background;
	    },
	    showShim: function() {
	      switch (false) {
	        case !this.aspect:
	          return true;
	        case !(this.filledSlot && this.hasVerticalAlign):
	          return true;
	      }
	    },
	    filledSlot: function() {
	      return !!this.$slots["default"];
	    },
	    hasVerticalAlign: function() {
	      return this.align.indexOf('bottom') || this.align.indexOf('middle') || this.align.indexOf('top');
	    }
	  },
	  methods: {
	    backgroundStyles: function(asset) {
	      return {
	        backgroundImage: "url('" + this[asset + 'Src'] + "')",
	        backgroundPosition: this.backgroundPosition
	      };
	    }
	  }
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("lodash/pickBy");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	
	/*
	Configuration related to animation between loading states
	 */
	module.exports = {
	  props: {
	    transition: String,
	    transitionPoster: String,
	    transitionImage: String,
	    transitionVideo: String,
	    transitionLoader: String
	  },
	  computed: {
	    posterShouldRender: function() {
	      switch (false) {
	        case !((this.imageShouldRender && this.imageLoaded) || (this.videoShouldRender && this.videoLoaded) || (this.fallbackShouldRender && this.fallbackLoaded)):
	          return false;
	        default:
	          return this.assetShouldRender('poster');
	      }
	    },
	    imageShouldRender: function() {
	      switch (false) {
	        case !((this.videoShouldRender && this.videoLoaded) || (this.fallbackShouldRender && this.fallbackLoaded)):
	          return false;
	        default:
	          return this.assetShouldRender('image');
	      }
	    },
	    videoShouldRender: function() {
	      switch (false) {
	        case !this.useFallback:
	          return false;
	        default:
	          return this.assetShouldRender('video');
	      }
	    },
	    fallbackShouldRender: function() {
	      switch (false) {
	        case !!this.useFallback:
	          return false;
	        default:
	          return this.assetShouldRender('fallback');
	      }
	    }
	  },
	  methods: {
	    assetShouldRender: function(asset) {
	      var hasDelayedLoad, hasTransition;
	      hasTransition = !!this.assetPropVal(asset, 'transition');
	      hasDelayedLoad = this.assetReadyToLoad(asset) !== true;
	      switch (false) {
	        case !!this[asset + 'Src']:
	          return false;
	        case !hasTransition:
	          return this[asset + 'Loaded'];
	        case !hasDelayedLoad:
	          return this[asset + 'Loaded'];
	        default:
	          return true;
	      }
	    }
	  }
	};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	
	/*
	Configuration related to video support
	 */
	var canPlay, mime;

	canPlay = function(url) {
	  var video;
	  video = typeof document !== "undefined" && document !== null ? document.createElement('video') : void 0;
	  return (video != null ? video.canPlayType(mime(url)) : void 0) !== 'no';
	};

	mime = function(url) {
	  var ref;
	  switch ((ref = url.match(/\.(\w+)/)) != null ? ref[1] : void 0) {
	    case 'mp4':
	      return 'video/mp4';
	    case 'webm':
	      return 'video/webm';
	    case 'ogg':
	      return 'video/ogg';
	  }
	};

	module.exports = {
	  props: {
	    autoplay: [String, Boolean],
	    autopause: String,
	    loop: Boolean,
	    muted: Boolean,
	    controls: Boolean
	  },
	  data: function() {
	    return {
	      videoNativeWidth: null,
	      videoNativeHeight: null,
	      playing: false
	    };
	  },
	  computed: {
	    canPlayVideo: function() {
	      var i, len, ref, video;
	      if (!this.video) {
	        return false;
	      }
	      ref = this.videoSources;
	      for (i = 0, len = ref.length; i < len; i++) {
	        video = ref[i];
	        if (canPlay(video)) {
	          return true;
	        }
	      }
	      return false;
	    },
	    canAutoplayVideo: function() {
	      switch (false) {
	        case !(typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent.match(/BlackBerry/i) : void 0):
	          return false;
	        case !((typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent.match(/(iPhone|iPod)/gi) : void 0) && !('playsInline' in document.createElement('video'))):
	          return false;
	        default:
	          return true;
	      }
	    },
	    videoSources: function() {
	      switch (false) {
	        case typeof this.video !== 'string':
	          return [this.video];
	        case typeof this.video !== 'array':
	          return this.video;
	      }
	    },
	    videoNativeAspect: function() {
	      return this.videoNativeWidth / this.videoNativeHeight;
	    },
	    videoContainEffect: function() {
	      if (!this.videoNativeAspect) {
	        return void 0;
	      }
	      if (this.containerAspect > this.videoNativeAspect) {
	        return 'pillarbox';
	      } else {
	        return 'letterbox';
	      }
	    }
	  },
	  watch: {
	    playing: function() {
	      if (!this.$refs.video) {
	        return this.playing = false;
	      }
	      if (this.playing) {
	        return this.$refs.video.play();
	      } else {
	        return this.$refs.video.pause();
	      }
	    },
	    autoplay: function() {
	      return this.respondToAutoplay();
	    },
	    autopause: function() {
	      return this.respondToAutopause();
	    },
	    videoLoaded: function() {
	      return this.respondToAutoplay();
	    },
	    videoInViewport: function(visible) {
	      if (visible) {
	        return this.respondToAutoplay();
	      } else {
	        return this.respondToAutopause();
	      }
	    }
	  },
	  methods: {
	    play: function() {
	      return this.playing = true;
	    },
	    pause: function() {
	      return this.playing = false;
	    },
	    restart: function() {
	      if (this.$refs.video) {
	        this.$refs.video.currentTime = 0;
	      }
	      return this.play();
	    },
	    togglePlayback: function(play) {
	      if (play == null) {
	        play = null;
	      }
	      if (play = null) {
	        return this.togglePlayback(!this.playing);
	      }
	      if (play) {
	        return this.play();
	      } else {
	        return this.pause();
	      }
	    },
	    respondToAutoplay: function() {
	      var ref;
	      switch (false) {
	        case (ref = this.autoplay) !== true && ref !== '':
	          return this.play();
	        case !(this.autoplay === 'visible' && this.videoInViewport):
	          return this.play();
	      }
	    },
	    respondToAutopause: function() {
	      switch (false) {
	        case !(this.autopause === 'visible' && !this.videoInViewport):
	          return this.pause();
	      }
	    },
	    mime: function(url) {
	      return mime(url);
	    }
	  }
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to the relationship between the component and the viewport
	 */
	var fireWhenReady, resizeAllVms, resizingVms, scrollMonitor, throttle;

	scrollMonitor = __webpack_require__(18);

	throttle = __webpack_require__(10);

	fireWhenReady = __webpack_require__(19);

	__webpack_require__(20);

	resizingVms = [];

	resizeAllVms = function() {
	  var i, len, results, vm;
	  results = [];
	  for (i = 0, len = resizingVms.length; i < len; i++) {
	    vm = resizingVms[i];
	    results.push(vm.handleWindowResizeThrottled());
	  }
	  return results;
	};

	if (typeof window !== "undefined" && window !== null) {
	  window.addEventListener('resize', function() {
	    return resizeAllVms();
	  });
	}

	fireWhenReady(resizeAllVms);

	module.exports = {
	  props: {
	    offset: {
	      type: [Number, String, Object],
	      "default": 0
	    },
	    offsetPoster: [Number, String, Object],
	    offsetImage: [Number, String, Object],
	    offsetVideo: [Number, String, Object]
	  },
	  data: function() {
	    return {
	      windowWidth: null,
	      containerWidth: null,
	      containerHeight: null,
	      posterInViewport: null,
	      imageInViewport: null,
	      videoInViewport: null
	    };
	  },
	  mounted: function() {
	    if (this.shouldWatchComponentSize) {
	      resizingVms.push(this);
	      this.handleWindowResize();
	      this.handleWindowResizeThrottled = throttle(this.handleWindowResize, 100);
	    }
	    return ['poster', 'image', 'video'].forEach((function(_this) {
	      return function(asset) {
	        return _this.$watch((function() {
	          return _this.assetScrollId(asset);
	        }), (function(active) {
	          if (active) {
	            return _this.addScrollListeners(asset);
	          } else {
	            return _this.removeScrollListeners(asset);
	          }
	        }), {
	          immediate: true
	        });
	      };
	    })(this));
	  },
	  destroyed: function() {
	    var asset, i, len, ref;
	    ref = ['poster', 'image', 'video'];
	    for (i = 0, len = ref.length; i < len; i++) {
	      asset = ref[i];
	      this.removeScrollListeners(asset);
	    }
	    return resizingVms.splice(resizingVms.indexOf(this), 1);
	  },
	  methods: {
	    assetScrollId: function(asset) {
	      var offset;
	      if (this.assetUsesScroll(asset)) {
	        offset = this.assetPropVal(asset, 'offset');
	        return JSON.stringify(offset);
	      }
	    },
	    assetUsesScroll: function(asset) {
	      switch (false) {
	        case !!this[asset]:
	          return false;
	        case this.assetPropVal(asset, 'load') !== 'visible':
	          return true;
	        case !(asset === 'video' && this.autoplay === 'visible'):
	          return true;
	        case !(asset === 'video' && this.autopause === 'visible'):
	          return true;
	      }
	    },
	    addScrollListeners: function(asset) {
	      var offset;
	      this.removeScrollListeners(asset);
	      if (!(this.$el && this[asset])) {
	        return;
	      }
	      offset = this.assetPropVal(asset, 'offset');
	      if (typeof offset === 'string') {
	        offset = parseInt(offset, 10);
	      }
	      this[asset + 'ScrollMonitor'] = scrollMonitor.create(this.$el, offset);
	      this[asset + 'ScrollMonitor'].on('stateChange', (function(_this) {
	        return function() {
	          return _this.updateInViewport(asset);
	        };
	      })(this));
	      return fireWhenReady((function(_this) {
	        return function() {
	          _this.$nextTick(function() {
	            return window.dispatchEvent(new CustomEvent('scroll'));
	          });
	          return _this.updateInViewport(asset);
	        };
	      })(this));
	    },
	    updateInViewport: function(asset) {
	      if (!this[asset + 'ScrollMonitor']) {
	        return;
	      }
	      this[asset + 'InViewport'] = this[asset + 'ScrollMonitor'].isInViewport;
	      if (this.canRemoveScrollListeners(asset)) {
	        return this.removeScrollListeners(asset);
	      }
	    },
	    canRemoveScrollListeners: function(asset) {
	      if (!this[asset + 'InViewport']) {
	        return false;
	      }
	      if (asset = 'video') {
	        return 'visible' === this.autoplay || 'visible' === this.autopause;
	      } else {
	        return true;
	      }
	    },
	    removeScrollListeners: function(asset) {
	      if (this[asset + 'ScrollMonitor']) {
	        this[asset + 'ScrollMonitor'].destroy();
	        return delete this[asset + 'ScrollMonitor'];
	      }
	    },
	    handleWindowResize: function() {
	      this.windowWidth = window.innerWidth;
	      if (this.shouldWatchComponentSize) {
	        return this.updateContainerSize();
	      }
	    },
	    updateContainerSize: function() {
	      this.containerWidth = this.$el.offsetWidth;
	      if (this.video || this.watchSize) {
	        return this.containerHeight = this.$el.offsetHeight;
	      }
	    }
	  }
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("scrollmonitor");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = function(cb) {
	  var handler;
	  cb();
	  if ((typeof document !== "undefined" && document !== null ? document.readyState : void 0) === 'loading') {
	    return document.addEventListener('readystatechange', handler = function() {
	      cb();
	      if (document.readyState === 'complete') {
	        return document.removeEventListener('readystatechange', handler);
	      }
	    });
	  }
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	/**
	 * CustomEvent polyfill for IE from MDN
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
	 */
	(function () {

	  if (typeof window === 'undefined' ||
	    typeof window.CustomEvent === "function" ) {
	    return false;
	  }

	  function CustomEvent ( event, params ) {
	    params = params || { bubbles: false, cancelable: false, detail: undefined };
	    var evt = document.createEvent( 'CustomEvent' );
	    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
	    return evt;
	   }

	  CustomEvent.prototype = window.Event.prototype;

	  window.CustomEvent = CustomEvent;
	})();


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vv-visual",
	    class: _vm.containerClasses,
	    style: (_vm.containerStyles)
	  }, [(_vm.showShim) ? _c('div', {
	    staticClass: "vv-shim",
	    class: _vm.shimClasses,
	    style: ({
	      paddingTop: _vm.aspectPadding
	    })
	  }) : _vm._e(), (_vm.$slots.prepend) ? _c('div', {
	    staticClass: "vv-slot-prepend"
	  }, [_vm._t("prepend")], 2) : _vm._e(), _c('transition', {
	    attrs: {
	      "name": _vm.assetPropVal("poster", "transition")
	    }
	  }, [(_vm.posterShouldRender) ? _c('div', {
	    staticClass: "vv-transition vv-poster-transition",
	    class: _vm.transitionClasses
	  }, [(!_vm.background) ? _c('img', {
	    staticClass: "vv-asset vv-poster",
	    class: _vm.assetClasses,
	    attrs: {
	      "src": _vm.posterSrc,
	      "alt": _vm.alt
	    }
	  }) : (_vm.background) ? _c('div', {
	    staticClass: "vv-asset vv-poster",
	    class: _vm.assetClasses,
	    style: (_vm.backgroundStyles("poster")),
	    attrs: {
	      "aria-label": _vm.alt
	    }
	  }) : _vm._e()]) : _vm._e()]), _c('transition', {
	    attrs: {
	      "name": _vm.assetPropVal("image", "transition")
	    }
	  }, [(_vm.imageShouldRender) ? _c('div', {
	    staticClass: "vv-transition vv-image-transition",
	    class: _vm.transitionClasses
	  }, [(!_vm.background) ? _c('img', {
	    staticClass: "vv-asset vv-image",
	    class: _vm.assetClasses,
	    attrs: {
	      "src": _vm.imageSrc,
	      "alt": _vm.alt
	    }
	  }) : (_vm.background) ? _c('div', {
	    staticClass: "vv-asset vv-image",
	    class: _vm.assetClasses,
	    style: (_vm.backgroundStyles("image")),
	    attrs: {
	      "aria-label": _vm.alt
	    }
	  }) : _vm._e()]) : _vm._e()]), _c('transition', {
	    attrs: {
	      "name": _vm.assetPropVal("video", "transition")
	    }
	  }, [(_vm.fallbackShouldRender) ? _c('div', {
	    staticClass: "vv-transition vv-fallback-transition",
	    class: _vm.transitionClasses
	  }, [(!_vm.background) ? _c('img', {
	    staticClass: "vv-asset vv-fallback",
	    class: _vm.assetClasses,
	    attrs: {
	      "src": _vm.fallbackSrc,
	      "alt": _vm.alt
	    }
	  }) : (_vm.background) ? _c('div', {
	    staticClass: "vv-asset vv-fallback",
	    class: _vm.assetClasses,
	    style: (_vm.backgroundStyles("fallback")),
	    attrs: {
	      "aria-label": _vm.alt
	    }
	  }) : _vm._e()]) : _vm._e()]), _c('transition', {
	    attrs: {
	      "name": _vm.assetPropVal("video", "transition")
	    }
	  }, [(_vm.videoShouldLoad) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.videoShouldRender),
	      expression: "videoShouldRender"
	    }],
	    staticClass: "vv-transition vv-video-transition",
	    class: _vm.transitionClasses
	  }, [_c('video', {
	    ref: "video",
	    staticClass: "vv-asset vv-video",
	    class: _vm.assetClasses,
	    attrs: {
	      "controls": _vm.controls,
	      "loop": _vm.loop,
	      "playsinline": "playsinline",
	      "preload": "auto",
	      "aria-label": _vm.alt
	    },
	    domProps: {
	      "muted": _vm.muted
	    }
	  }, _vm._l((_vm.videoSources), function(url) {
	    return _c('source', {
	      key: "url",
	      attrs: {
	        "src": url,
	        "type": _vm.mime(url)
	      }
	    })
	  }))]) : _vm._e()]), (_vm.filledSlot) ? _c('div', {
	    staticClass: "vv-slot",
	    class: _vm.slotClasses
	  }, [_vm._t("default")], 2) : _vm._e(), _c('transition', {
	    attrs: {
	      "name": _vm.assetPropVal("loader", "transition")
	    }
	  }, [(_vm.showLoader) ? _c(_vm.loaderComponent, {
	    tag: "component",
	    staticClass: "vv-loader"
	  }) : _vm._e()], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-76b9e690", module.exports)
	  }
	}

/***/ })
/******/ ])
});
;