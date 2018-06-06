(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("is-numeric"), require("scrollmonitor"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "is-numeric", "scrollmonitor"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue"), require("is-numeric"), require("scrollmonitor")) : factory(root["vue"], root["is-numeric"], root["scrollmonitor"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_147__) {
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
	  __webpack_require__(150),
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
	  mixins: [__webpack_require__(5), __webpack_require__(6), __webpack_require__(8), __webpack_require__(23), __webpack_require__(25), __webpack_require__(144), __webpack_require__(145), __webpack_require__(146)],
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
	    }
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
	      return this.video;
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
	      if (asset === 'poster' && this.posterFromImage && typeof this.image === 'object') {
	        imageBreaks = sortObjByKey(this.image);
	        return imageBreaks[Object.keys(imageBreaks)[0]];
	      }
	      if (!this[asset]) {
	        return;
	      }
	      if (typeof this[asset] === 'string') {
	        return this[asset];
	      }
	      breaks = sortObjByKey(this[asset]);
	      for (width in breaks) {
	        src = breaks[width];
	        choice = src;
	        if (width >= this.containerWidth) {
	          return choice;
	        }
	      }
	      return choice;
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

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(11),
	    isObject = __webpack_require__(12);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12),
	    now = __webpack_require__(13),
	    toNumber = __webpack_require__(16);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(14);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(15);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12),
	    isSymbol = __webpack_require__(17);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObjectLike = __webpack_require__(22);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    getRawTag = __webpack_require__(20),
	    objectToString = __webpack_require__(21);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(14);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to sizing of the component
	 */
	var aspectFromString, isNumeric;

	isNumeric = __webpack_require__(24);

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
	  computed: {
	    shouldWatchComponentSize: function() {
	      switch (false) {
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
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to styling the component as well as the computed
	properties that add classes to the component.
	 */
	var isNumeric, pickBy, size;

	isNumeric = __webpack_require__(24);

	pickBy = __webpack_require__(26);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(27),
	    baseIteratee = __webpack_require__(28),
	    basePickBy = __webpack_require__(133),
	    getAllKeysIn = __webpack_require__(138);

	/**
	 * Creates an object composed of the `object` properties `predicate` returns
	 * truthy for. The predicate is invoked with two arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function} [predicate=_.identity] The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pickBy(object, _.isNumber);
	 * // => { 'a': 1, 'c': 3 }
	 */
	function pickBy(object, predicate) {
	  if (object == null) {
	    return {};
	  }
	  var props = arrayMap(getAllKeysIn(object), function(prop) {
	    return [prop];
	  });
	  predicate = baseIteratee(predicate);
	  return basePickBy(object, props, function(value, path) {
	    return predicate(value, path[0]);
	  });
	}

	module.exports = pickBy;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(29),
	    baseMatchesProperty = __webpack_require__(115),
	    identity = __webpack_require__(129),
	    isArray = __webpack_require__(84),
	    property = __webpack_require__(130);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(30),
	    getMatchData = __webpack_require__(112),
	    matchesStrictComparable = __webpack_require__(114);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(31),
	    baseIsEqual = __webpack_require__(68);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(32),
	    stackClear = __webpack_require__(40),
	    stackDelete = __webpack_require__(41),
	    stackGet = __webpack_require__(42),
	    stackHas = __webpack_require__(43),
	    stackSet = __webpack_require__(44);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(33),
	    listCacheDelete = __webpack_require__(34),
	    listCacheGet = __webpack_require__(37),
	    listCacheHas = __webpack_require__(38),
	    listCacheSet = __webpack_require__(39);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(36);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(32);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}

	module.exports = stackClear;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(32),
	    Map = __webpack_require__(45),
	    MapCache = __webpack_require__(53);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(14);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(47),
	    getValue = __webpack_require__(52);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(48),
	    isMasked = __webpack_require__(49),
	    isObject = __webpack_require__(12),
	    toSource = __webpack_require__(51);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObject = __webpack_require__(12);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(50);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(14);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(54),
	    mapCacheDelete = __webpack_require__(62),
	    mapCacheGet = __webpack_require__(65),
	    mapCacheHas = __webpack_require__(66),
	    mapCacheSet = __webpack_require__(67);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(55),
	    ListCache = __webpack_require__(32),
	    Map = __webpack_require__(45);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(56),
	    hashDelete = __webpack_require__(58),
	    hashGet = __webpack_require__(59),
	    hashHas = __webpack_require__(60),
	    hashSet = __webpack_require__(61);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(57);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(63);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(64);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(63);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(63);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(63);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(69),
	    isObjectLike = __webpack_require__(22);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(31),
	    equalArrays = __webpack_require__(70),
	    equalByTag = __webpack_require__(76),
	    equalObjects = __webpack_require__(80),
	    getTag = __webpack_require__(107),
	    isArray = __webpack_require__(84),
	    isBuffer = __webpack_require__(93),
	    isTypedArray = __webpack_require__(97);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);

	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;

	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(71),
	    arraySome = __webpack_require__(74),
	    cacheHas = __webpack_require__(75);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(53),
	    setCacheAdd = __webpack_require__(72),
	    setCacheHas = __webpack_require__(73);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    Uint8Array = __webpack_require__(77),
	    eq = __webpack_require__(36),
	    equalArrays = __webpack_require__(70),
	    mapToArray = __webpack_require__(78),
	    setToArray = __webpack_require__(79);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(14);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(81);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(82),
	    getSymbols = __webpack_require__(85),
	    keys = __webpack_require__(88);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(83),
	    isArray = __webpack_require__(84);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(86),
	    stubArray = __webpack_require__(87);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};

	module.exports = getSymbols;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = arrayFilter;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(89),
	    baseKeys = __webpack_require__(102),
	    isArrayLike = __webpack_require__(106);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(90),
	    isArguments = __webpack_require__(91),
	    isArray = __webpack_require__(84),
	    isBuffer = __webpack_require__(93),
	    isIndex = __webpack_require__(96),
	    isTypedArray = __webpack_require__(97);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(92),
	    isObjectLike = __webpack_require__(22);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isObjectLike = __webpack_require__(22);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(14),
	    stubFalse = __webpack_require__(95);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(98),
	    baseUnary = __webpack_require__(100),
	    nodeUtil = __webpack_require__(101);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(18),
	    isLength = __webpack_require__(99),
	    isObjectLike = __webpack_require__(22);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(15);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(94)(module)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(103),
	    nativeKeys = __webpack_require__(104);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(105);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(48),
	    isLength = __webpack_require__(99);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(108),
	    Map = __webpack_require__(45),
	    Promise = __webpack_require__(109),
	    Set = __webpack_require__(110),
	    WeakMap = __webpack_require__(111),
	    baseGetTag = __webpack_require__(18),
	    toSource = __webpack_require__(51);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(14);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(14);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(14);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(14);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(113),
	    keys = __webpack_require__(88);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(68),
	    get = __webpack_require__(116),
	    hasIn = __webpack_require__(126),
	    isKey = __webpack_require__(119),
	    isStrictComparable = __webpack_require__(113),
	    matchesStrictComparable = __webpack_require__(114),
	    toKey = __webpack_require__(125);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(117);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(118),
	    toKey = __webpack_require__(125);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(84),
	    isKey = __webpack_require__(119),
	    stringToPath = __webpack_require__(120),
	    toString = __webpack_require__(123);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(84),
	    isSymbol = __webpack_require__(17);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(121);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(122);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(53);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(124);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(19),
	    arrayMap = __webpack_require__(27),
	    isArray = __webpack_require__(84),
	    isSymbol = __webpack_require__(17);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(17);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(127),
	    hasPath = __webpack_require__(128);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(118),
	    isArguments = __webpack_require__(91),
	    isArray = __webpack_require__(84),
	    isIndex = __webpack_require__(96),
	    isLength = __webpack_require__(99),
	    toKey = __webpack_require__(125);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(131),
	    basePropertyDeep = __webpack_require__(132),
	    isKey = __webpack_require__(119),
	    toKey = __webpack_require__(125);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(117);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(117),
	    baseSet = __webpack_require__(134),
	    castPath = __webpack_require__(118);

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} paths The property paths to pick.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, paths, predicate) {
	  var index = -1,
	      length = paths.length,
	      result = {};

	  while (++index < length) {
	    var path = paths[index],
	        value = baseGet(object, path);

	    if (predicate(value, path)) {
	      baseSet(result, castPath(path, object), value);
	    }
	  }
	  return result;
	}

	module.exports = basePickBy;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(135),
	    castPath = __webpack_require__(118),
	    isIndex = __webpack_require__(96),
	    isObject = __webpack_require__(12),
	    toKey = __webpack_require__(125);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(136),
	    eq = __webpack_require__(36);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(137);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(82),
	    getSymbolsIn = __webpack_require__(139),
	    keysIn = __webpack_require__(141);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(83),
	    getPrototype = __webpack_require__(140),
	    getSymbols = __webpack_require__(85),
	    stubArray = __webpack_require__(87);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(105);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(89),
	    baseKeysIn = __webpack_require__(142),
	    isArrayLike = __webpack_require__(106);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(12),
	    isPrototype = __webpack_require__(103),
	    nativeKeysIn = __webpack_require__(143);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ }),
/* 144 */
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
	        case !!this[asset]:
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
/* 145 */
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
	        case !navigator.userAgent.match(/BlackBerry/i):
	          return false;
	        case !(navigator.userAgent.match(/(iPhone|iPod)/gi) && !('playsInline' in document.createElement('video'))):
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
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	
	/*
	Configuration related to the relationship between the component and the viewport
	 */
	var fireWhenReady, resizeAllVms, resizingVms, scrollMonitor, throttle;

	scrollMonitor = __webpack_require__(147);

	throttle = __webpack_require__(10);

	fireWhenReady = __webpack_require__(148);

	__webpack_require__(149);

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
	          window.dispatchEvent(new CustomEvent('scroll'));
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
	      if (this.video) {
	        return this.containerHeight = this.$el.offsetHeight;
	      }
	    }
	  }
	};


/***/ }),
/* 147 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_147__;

/***/ }),
/* 148 */
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
/* 149 */
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
/* 150 */
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