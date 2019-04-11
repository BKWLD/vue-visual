module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("is-numeric");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash/pickBy");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-in-viewport-mixin");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6de5ab34&lang=pug&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "vv-visual",
      class: _vm.containerClasses,
      style: _vm.containerStyles
    },
    [
      _vm.showShim
        ? _c("div", {
            staticClass: "vv-shim",
            class: _vm.shimClasses,
            style: { paddingTop: _vm.aspectPadding }
          })
        : _vm._e(),
      _vm.$slots.prepend
        ? _c("div", { staticClass: "vv-slot-prepend" }, [_vm._t("prepend")], 2)
        : _vm._e(),
      _c(
        "transition",
        { attrs: { name: _vm.assetPropVal("poster", "transition") } },
        [
          _vm.posterShouldRender
            ? _c(
                "div",
                {
                  staticClass: "vv-transition vv-poster-transition",
                  class: _vm.transitionClasses
                },
                [
                  !_vm.background
                    ? _c("img", {
                        staticClass: "vv-asset vv-poster",
                        class: _vm.assetClasses,
                        attrs: { src: _vm.posterSrc, alt: _vm.alt }
                      })
                    : _vm.background
                    ? _c("div", {
                        staticClass: "vv-asset vv-poster",
                        class: _vm.assetClasses,
                        style: _vm.backgroundStyles("poster"),
                        attrs: { "aria-label": _vm.alt }
                      })
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      ),
      _c(
        "transition",
        { attrs: { name: _vm.assetPropVal("image", "transition") } },
        [
          _vm.imageShouldRender
            ? _c(
                "div",
                {
                  staticClass: "vv-transition vv-image-transition",
                  class: _vm.transitionClasses
                },
                [
                  !_vm.background
                    ? _c("img", {
                        staticClass: "vv-asset vv-image",
                        class: _vm.assetClasses,
                        attrs: { src: _vm.imageSrc, alt: _vm.alt }
                      })
                    : _vm.background
                    ? _c("div", {
                        staticClass: "vv-asset vv-image",
                        class: _vm.assetClasses,
                        style: _vm.backgroundStyles("image"),
                        attrs: { "aria-label": _vm.alt }
                      })
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      ),
      _c(
        "transition",
        { attrs: { name: _vm.assetPropVal("video", "transition") } },
        [
          _vm.fallbackShouldRender
            ? _c(
                "div",
                {
                  staticClass: "vv-transition vv-fallback-transition",
                  class: _vm.transitionClasses
                },
                [
                  !_vm.background
                    ? _c("img", {
                        staticClass: "vv-asset vv-fallback",
                        class: _vm.assetClasses,
                        attrs: { src: _vm.fallbackSrc, alt: _vm.alt }
                      })
                    : _vm.background
                    ? _c("div", {
                        staticClass: "vv-asset vv-fallback",
                        class: _vm.assetClasses,
                        style: _vm.backgroundStyles("fallback"),
                        attrs: { "aria-label": _vm.alt }
                      })
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      ),
      _c(
        "transition",
        { attrs: { name: _vm.assetPropVal("video", "transition") } },
        [
          _vm.videoShouldLoad
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.videoShouldRender,
                      expression: "videoShouldRender"
                    }
                  ],
                  staticClass: "vv-transition vv-video-transition",
                  class: _vm.transitionClasses
                },
                [
                  _c(
                    "video",
                    {
                      ref: "video",
                      staticClass: "vv-asset vv-video",
                      class: _vm.assetClasses,
                      attrs: {
                        controls: _vm.controls,
                        loop: _vm.loop,
                        playsinline: "",
                        preload: "auto",
                        "aria-label": _vm.alt
                      },
                      domProps: { muted: _vm.muted }
                    },
                    _vm._l(_vm.videoSources, function(url) {
                      return _c("source", {
                        key: "url",
                        attrs: { src: url, type: _vm.mime(url) }
                      })
                    }),
                    0
                  )
                ]
              )
            : _vm._e()
        ]
      ),
      _vm.filledSlot
        ? _c(
            "div",
            { staticClass: "vv-slot", class: _vm.slotClasses },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
      _c(
        "transition",
        { attrs: { name: _vm.assetPropVal("loader", "transition") } },
        [
          _vm.showLoader
            ? _c(_vm.loaderComponent, {
                tag: "component",
                staticClass: "vv-loader"
              })
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./index.vue?vue&type=template&id=6de5ab34&lang=pug&

// CONCATENATED MODULE: ./src/utils/ucfirst.coffee
// Uppercase first letter of string
/* harmony default export */ var ucfirst_coffee = (function (str) {
  return str && str[0].toUpperCase() + str.slice(1);
});
;
// CONCATENATED MODULE: ./src/accessibility.coffee
/*
Configuration related accessibilty support
*/
/* harmony default export */ var accessibility_coffee = ({
  //#############################################################################
  // The mixin
  props: {
    alt: String
  }
});
// CONCATENATED MODULE: ./src/utils/sort-obj-by-key.coffee
// Sort object by keys
/* harmony default export */ var sort_obj_by_key_coffee = (function (obj) {
  var ordered;
  ordered = {};
  Object.keys(obj).sort().forEach(function (key) {
    return ordered[key] = obj[key];
  });
  return ordered;
});
;
// CONCATENATED MODULE: ./src/assets.coffee
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Configuration related to the specification of assets
*/

/* harmony default export */ var assets_coffee = ({
  //#############################################################################
  // The mixin
  props: {
    poster: [String, Object],
    image: [String, Object],
    video: [String, Object],
    fallback: [String, Object],
    posterFromImage: {
      type: Boolean,
      default: false
    },
    requireAutoplay: {
      type: Boolean,
      default: true
    },
    assetMutator: Function
  },
  //#############################################################################
  mounted: function mounted() {
    var _this = this;

    // If the src of an image changes, trigger a reload
    return ['poster', 'image', 'fallback'].forEach(function (asset) {
      return _this.$watch(asset + 'Src', function () {
        _this.resetImgAsset(asset);

        if (_this[asset + 'ShouldLoad']) {
          return _this.loadAsset(asset);
        }
      });
    });
  },
  //#############################################################################
  computed: {
    // Determine which image to show given the different ways the src can be
    // passed in
    posterSrc: function posterSrc() {
      return this.imgSrc('poster');
    },
    imageSrc: function imageSrc() {
      return this.imgSrc('image');
    },
    fallbackSrc: function fallbackSrc() {
      return this.imgSrc('fallback');
    },
    videoSrc: function videoSrc() {
      return this.applyAssetMutation('video', this.video);
    },
    // Return whether a fallback image should be shown
    useFallback: function useFallback() {
      switch (false) {
        case !!this.canPlayVideo:
          return true;

        case !(this.requireAutoplay && !this.canAutoplayVideo):
          return true;
      }
    }
  },
  //#############################################################################
  methods: {
    // Get the source of images, which may be using breakpoints
    imgSrc: function imgSrc(asset) {
      var breaks, choice, imageBreaks, src, width; // Get the src

      src = this.applyAssetMutation(asset, this[asset]); // Optionally read the poster from the image prop

      if (asset === 'poster' && this.posterFromImage && _typeof(src) === 'object') {
        imageBreaks = sort_obj_by_key_coffee(src);
        return imageBreaks[Object.keys(imageBreaks)[0]];
      } // Otherwise, require an asset


      if (!src) {
        return;
      }

      if (typeof src === 'string') {
        // Return simple string urls
        return src;
      } // Loop through breaks and find the src for the largest src for the width


      breaks = sort_obj_by_key_coffee(src);

      for (width in breaks) {
        src = breaks[width];
        choice = src;

        if (width >= this.containerWidth) {
          return choice;
        }
      }

      return choice; // Return the largest one when end is reached
    },
    // Apply mutations if they were defined
    applyAssetMutation: function applyAssetMutation(asset, src) {
      if (this.assetMutator) {
        return this.assetMutator(asset, src, this);
      } else {
        return src;
      }
    }
  }
});
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__(0);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./src/loading.coffee
function loading_coffee_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { loading_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { loading_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return loading_coffee_typeof(obj); }

/*
Configuration related to loading of assets
*/
var loadRules;

 // DRY load validation options

loadRules = function loadRules(val) {
  return val === false || val === true || val === 'visible';
};

/* harmony default export */ var loading_coffee = ({
  //#############################################################################
  // The mixin
  props: {
    // How to load
    load: {
      type: [String, Boolean],
      default: true,
      validator: loadRules
    },
    loadPoster: {
      type: [String, Boolean],
      default: null,
      validator: loadRules
    },
    loadImage: {
      type: [String, Boolean],
      default: null,
      validator: loadRules
    },
    loadVideo: {
      type: [String, Boolean],
      default: null,
      validator: loadRules
    },
    // Loader config
    loader: [String, Object],
    loaderThrottle: {
      type: Number,
      default: 100
    }
  },
  //#############################################################################
  data: function data() {
    return {
      posterLoading: false,
      posterLoaded: false,
      imageLoading: false,
      imageLoaded: false,
      videoLoading: false,
      videoLoaded: false,
      fallbackLoading: false,
      fallbackLoaded: false,
      loadingThrottled: false,
      loadedThrottled: false
    };
  },
  //#############################################################################
  mounted: function mounted() {
    var _this = this;

    // Loop through asset types and create load watchers
    return ['poster', 'image', 'video', 'fallback'].forEach(function (asset) {
      return _this.$watch(asset + 'ShouldLoad', function (ready) {
        if (ready) {
          return _this.loadAsset(asset);
        }
      }, {
        immediate: true
      });
    });
  },
  //#############################################################################
  destroyed: function destroyed() {
    var asset, i, len, ref;
    ref = ['poster', 'image', 'fallback']; // Remove image loaders

    for (i = 0, len = ref.length; i < len; i++) {
      asset = ref[i];
      this.removeImgAssetLoader(asset);
    } // Remove video loaders


    return this.removeVideoAssetLoader();
  },
  //#############################################################################
  computed: {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Asset conditionals
    // Test whether poster is ready to load
    posterShouldLoad: function posterShouldLoad() {
      return this.assetReadyToLoad('poster');
    },
    // Test whether image is ready to load
    imageShouldLoad: function imageShouldLoad() {
      switch (false) {
        case !(this.poster && !this.posterLoaded):
          return false;
        // Wait for poster

        default:
          return this.assetReadyToLoad('image');
      }
    },
    // Test whether video is ready to load
    videoShouldLoad: function videoShouldLoad() {
      switch (false) {
        case !(this.videoLoading || this.videoLoaded):
          return true;
        // If already loading, don't reset

        case !(this.poster && !this.posterLoaded || this.image && !this.imageLoaded):
          return false;

        case !this.useFallback:
          return false;

        case !this.playng:
          return true;
        // If someone manually starts playing it

        default:
          return this.assetReadyToLoad('video');
      }
    },
    // Test whether the fallback is ready to load
    fallbackShouldLoad: function fallbackShouldLoad() {
      switch (false) {
        case !(this.poster && !this.posterLoaded || this.image && !this.imageLoaded):
          return false;

        case !!this.useFallback:
          return false;

        default:
          return this.assetReadyToLoad('fallback');
      }
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Loading state
    // Are any assets currenting loading.
    loading: function loading() {
      return this.posterLoading || this.imageLoading || this.videoLoading || this.fallbackLoading;
    },
    loaded: function loaded() {
      return this.posterLoaded || this.imageLoaded || this.videoLoaded || this.fallbackLoaded;
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Loader
    // Show the loader if the Visual is currently loading, optionally using a
    // throttled check
    showLoader: function showLoader() {
      switch (false) {
        case !!this.loader:
          return false;

        case !this.throttleLoader:
          return this.loadingThrottled;

        default:
          return this.loading;
      }
    },
    // Take loader prop and make component instances
    loaderComponent: function loaderComponent() {
      switch (loading_coffee_typeof(this.loader)) {
        case 'string':
          return external_vue_default.a.component(this.loader);

        case 'object':
          return this.loader;
      }
    }
  },
  //#############################################################################
  watch: {
    // Create throttling functions
    loaderThrottle: {
      immediate: true,
      handler: function handler(amount) {
        var _this2 = this;

        this.getLoadingThrottled = throttle_default()(function () {
          return _this2.loading;
        }, amount);
        return this.getLoadedThrottled = throttle_default()(function () {
          return _this2.loaded;
        }, amount);
      }
    },
    // Fire general loading/loaded events as well as trigger changes to throttled
    // properties
    loading: function loading(bool) {
      if (bool) {
        this.$emit('loading');
      }

      return this.loadingThrottled = this.getLoadingThrottled();
    },
    loaded: function loaded(bool) {
      if (bool) {
        this.$emit('loaded');
      }

      return this.loadedThrottled = this.getLoadedThrottled();
    },
    // Fire events when assets finish loading
    posterLoading: function posterLoading(bool) {
      if (bool) {
        return this.$emit('poster-loading');
      }
    },
    posterLoaded: function posterLoaded(bool) {
      if (bool) {
        return this.$emit('poster-loaded');
      }
    },
    imageLoading: function imageLoading(bool) {
      if (bool) {
        return this.$emit('image-loading');
      }
    },
    imageLoaded: function imageLoaded(bool) {
      if (bool) {
        return this.$emit('image-loaded');
      }
    },
    videoLoading: function videoLoading(bool) {
      if (bool) {
        return this.$emit('video-loading');
      }
    },
    videoLoaded: function videoLoaded(bool) {
      if (bool) {
        return this.$emit('video-loaded');
      }
    },
    fallbackLoading: function fallbackLoading(bool) {
      if (bool) {
        return this.$emit('fallback-loading');
      }
    },
    fallbackLoaded: function fallbackLoaded(bool) {
      if (bool) {
        return this.$emit('fallback-loaded');
      }
    }
  },
  //#############################################################################
  methods: {
    // DRY per-asset logic for determining whetehr an asset is ready to load.
    // Once it is loaded, this continues to be true because v-if's in the
    // template depend on this.
    assetReadyToLoad: function assetReadyToLoad(asset) {
      var alreadyLoading, loadNow, loadWhenVisible;
      alreadyLoading = this[asset + 'Loading'] || this[asset + 'Loaded'];
      loadNow = this.assetPropVal(asset, 'load') === true;
      loadWhenVisible = this.assetPropVal(asset, 'load') === 'visible';

      switch (false) {
        case !alreadyLoading:
          return true;
        // Already loading or loaded

        case !!this[asset + 'Src']:
          return false;
        // Require asset src

        case !loadNow:
          return true;

        case !(loadWhenVisible && this.inViewport.now):
          return true;
      }
    },
    // Load an asset
    loadAsset: function loadAsset(asset) {
      switch (asset) {
        case this[asset + 'Loaded']:
          return true;
        // Don't load twice

        case 'video':
          return this.loadVideoAsset();

        default:
          return this.loadImgAsset(asset);
      }
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Image loading
    // Load an image-based by watching the load on an image instance
    loadImgAsset: function loadImgAsset(asset) {
      var _this3 = this;

      // Create loader
      this[asset + 'Loading'] = true;
      this[asset + 'Loader'] = new Image(); // Create load handler

      this[asset + 'Loader'].addEventListener('load', this[asset + 'OnLoad'] = function () {
        _this3[asset + 'Loading'] = false;
        _this3[asset + 'Loaded'] = true;
        return _this3.removeImgAssetLoader(asset);
      }); // Trigger the load

      return this[asset + 'Loader'].src = this[asset + 'Src'];
    },
    // Cleanup image asset loading
    removeImgAssetLoader: function removeImgAssetLoader(asset) {
      if (this[asset + 'Loader'] && this[asset + 'OnLoad']) {
        return this[asset + 'Loader'].removeEventListener('load', this[asset + 'OnLoad']);
      }
    },
    // Reset the loading of an asset, like in response to responsive breaks
    resetImgAsset: function resetImgAsset(asset) {
      this.removeImgAssetLoader(asset);
      this[asset + 'Loading'] = false;
      return this[asset + 'Loaded'] = false;
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Video loading
    // Load a video based assset
    loadVideoAsset: function loadVideoAsset() {
      var _this4 = this;

      // Update loading status for video
      this.videoLoading = true;
      this.$refs.video.addEventListener('canplaythrough', this.videoOnCanplaythrough = function () {
        _this4.videoLoading = false;
        _this4.videoLoaded = true;

        if (_this4.$refs.video) {
          // Check that Visual hasn't been removed since started
          return _this4.$refs.video.removeEventListener('canplaythrough', _this4.videoOnCanplaythrough);
        }
      }); // Store the native size of the video in case of `background: cover`

      this.$refs.video.addEventListener('loadedmetadata', this.videoOnLoadedmetadata = function () {
        if (_this4.$refs.video) {
          // Check that Visual hasn't been removed since started
          _this4.videoNativeWidth = _this4.$refs.video.videoWidth;
          _this4.videoNativeHeight = _this4.$refs.video.videoHeight;
          return _this4.$refs.video.removeEventListener('loadedmetadata', _this4.videoOnLoadedmetadata);
        }
      }); // Start loading

      return this.$refs.video.load();
    },
    // Cleanup video asset loading
    removeVideoAssetLoader: function removeVideoAssetLoader(asset) {
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
});
// EXTERNAL MODULE: external "is-numeric"
var external_is_numeric_ = __webpack_require__(2);
var external_is_numeric_default = /*#__PURE__*/__webpack_require__.n(external_is_numeric_);

// CONCATENATED MODULE: ./src/size.coffee
function size_coffee_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { size_coffee_typeof = function _typeof(obj) { return typeof obj; }; } else { size_coffee_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return size_coffee_typeof(obj); }

/*
Configuration related to sizing of the component
*/
var aspectFromString;
 // Make an aspect fraction from an aspect ratio string

aspectFromString = function aspectFromString(str) {
  var parts;
  parts = str.split(':');
  return parseInt(parts[0], 10) / parseInt(parts[1], 10);
};

/* harmony default export */ var size_coffee = ({
  //#############################################################################
  // The mixin
  props: {
    width: [String, Number],
    height: [String, Number],
    aspect: [String, Number],
    fill: Boolean
  },
  // Force watching size
  data: function data() {
    return {
      watchSize: false
    };
  },
  //#############################################################################
  computed: {
    // Does this visual need to keep track of it's own width / height
    shouldWatchComponentSize: function shouldWatchComponentSize() {
      switch (false) {
        case !this.watchSize:
          return true;

        case !this.hasResponsiveAsset:
          return true;

        case !this.aspect:
          return false;

        case !(this.video && this.background):
          return true;
        // For Backgrounded vidoes
      }
    },
    // Is at least one asset type a responsive object
    hasResponsiveAsset: function hasResponsiveAsset() {
      var asset, i, len, ref;
      ref = ['poster', 'image', 'fallback'];

      for (i = 0, len = ref.length; i < len; i++) {
        asset = ref[i];

        if (size_coffee_typeof(this[asset]) === 'object') {
          return true;
        }
      }
    },
    // Get the container aspect, which may come from different sources
    containerAspect: function containerAspect() {
      switch (false) {
        case !this.aspect:
          return this.aspectProp;

        default:
          return this.containerWidth / this.containerHeight;
      }
    },
    // Turn aspect prop into a percentage
    aspectProp: function aspectProp() {
      switch (false) {
        case !!this.aspect:
          return void 0;

        case !external_is_numeric_default()(this.aspect):
          return this.aspect;

        case !this.aspect.match(':'):
          return aspectFromString(this.aspect);
      }
    },
    aspectPadding: function aspectPadding() {
      if (this.aspectProp) {
        return 1 / this.aspectProp * 100 + '%';
      }
    }
  }
});
// EXTERNAL MODULE: external "lodash/pickBy"
var pickBy_ = __webpack_require__(4);
var pickBy_default = /*#__PURE__*/__webpack_require__.n(pickBy_);

// CONCATENATED MODULE: ./src/style.coffee
/*
Configuration related to styling the component as well as the computed
properties that add classes to the component.
*/
var style_coffee_size;

 // Make a size value from a string or number input

style_coffee_size = function size(val) {
  if (!val) {
    return;
  }

  if (external_is_numeric_default()(val)) {
    return val + 'px';
  } else {
    return val;
  }
};

/* harmony default export */ var style_coffee = ({
  //#############################################################################
  // The mixin
  props: {
    align: {
      type: String,
      default: 'center middle'
    },
    background: {
      type: String,
      validator: function validator(val) {
        return val === 'cover' || val === 'contain' || val === '';
      }
    },
    backgroundPosition: {
      type: String,
      default: 'center center'
    }
  },
  //#############################################################################
  computed: {
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // CSS classes
    // Assemble inline styles of container div, where the value is not empty
    containerStyles: function containerStyles() {
      return pickBy_default()({
        width: style_coffee_size(this.width),
        height: style_coffee_size(this.height)
      }, function (val) {
        return !!val;
      });
    },
    // Assemble additional classes
    containerClasses: function containerClasses() {
      return {
        // Dimension
        'vv-block': this.displayBlock,
        'vv-fill': this.fill,
        // Load
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
        // Video playback
        'vv-playing': this.playing,
        // Centering
        'vv-align-left': this.align.indexOf('left') !== -1 && this.filledSlot,
        'vv-align-center': this.align.indexOf('center') !== -1 && this.filledSlot,
        'vv-align-right': this.align.indexOf('right') !== -1 && this.filledSlot
      };
    },
    // Asset classes
    assetClasses: function assetClasses() {
      return {
        // Dimension
        'vv-has-width': this.width,
        'vv-has-height': this.height,
        'vv-fill-asset': this.shouldFill,
        // Render
        'vv-background-cover': this.background === 'cover',
        'vv-background-contain': this.background === 'contain',
        'vv-video-letterbox': this.videoContainEffect === 'letterbox',
        'vv-video-pillarbox': this.videoContainEffect === 'pillarbox'
      };
    },
    // Transition classes
    transitionClasses: function transitionClasses() {
      return {
        'vv-fill': this.shouldFill
      };
    },
    // Slot classes
    slotClasses: function slotClasses() {
      return {
        'vv-align-bottom': this.align.indexOf('bottom') !== -1 && this.filledSlot,
        'vv-align-middle': this.align.indexOf('middle') !== -1 && this.filledSlot,
        'vv-align-top': this.align.indexOf('top') !== -1 && this.filledSlot
      };
    },
    // Shim classes
    shimClasses: function shimClasses() {
      return {
        'vv-align-bottom': this.align.indexOf('bottom') !== -1 && this.filledSlot,
        'vv-align-middle': this.align.indexOf('middle') !== -1 && this.filledSlot,
        'vv-align-top': this.align.indexOf('top') !== -1 && this.filledSlot
      };
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Utils
    // Whether to display:block
    displayBlock: function displayBlock() {
      return this.aspect || this.background;
    },
    // Whether the visual is filling it's container
    shouldFill: function shouldFill() {
      return this.fill || this.aspect || this.background;
    },
    // Check whether the shim is needed
    showShim: function showShim() {
      switch (false) {
        case !this.aspect:
          return true;

        case !(this.filledSlot && this.hasVerticalAlign):
          return true;
      }
    },
    // Has slottted content
    filledSlot: function filledSlot() {
      return !!this.$slots.default;
    },
    // Check if vertical-alignment choice was made
    hasVerticalAlign: function hasVerticalAlign() {
      return this.align.indexOf('bottom') || this.align.indexOf('middle') || this.align.indexOf('top');
    }
  },
  //#############################################################################
  methods: {
    // Make background style for an asset
    backgroundStyles: function backgroundStyles(asset) {
      return {
        backgroundImage: "url('".concat(this[asset + 'Src'], "')"),
        backgroundPosition: this.backgroundPosition
      };
    }
  }
});
// CONCATENATED MODULE: ./src/transition.coffee
/*
Configuration related to animation between loading states
*/
/* harmony default export */ var transition_coffee = ({
  //#############################################################################
  // The mixin
  props: {
    transition: String,
    transitionPoster: String,
    transitionImage: String,
    transitionVideo: String,
    transitionLoader: String
  },
  //#############################################################################
  computed: {
    // Test whether the poster is ready to be shown
    posterShouldRender: function posterShouldRender() {
      switch (false) {
        case !(this.imageShouldRender && this.imageLoaded || this.videoShouldRender && this.videoLoaded || this.fallbackShouldRender && this.fallbackLoaded):
          return false;

        default:
          return this.assetShouldRender('poster');
      }
    },
    // Test whether the image is ready to be shown
    imageShouldRender: function imageShouldRender() {
      switch (false) {
        case !(this.videoShouldRender && this.videoLoaded || this.fallbackShouldRender && this.fallbackLoaded):
          return false;

        default:
          return this.assetShouldRender('image');
      }
    },
    // Test whether video should render
    videoShouldRender: function videoShouldRender() {
      switch (false) {
        case !this.useFallback:
          return false;

        default:
          return this.assetShouldRender('video');
      }
    },
    // Test whether the fallback is ready to be shown
    fallbackShouldRender: function fallbackShouldRender() {
      switch (false) {
        case !!this.useFallback:
          return false;

        default:
          return this.assetShouldRender('fallback');
      }
    }
  },
  //#############################################################################
  methods: {
    // DRY per-asset logic for determining whether an asset is ready to render.
    // Rendering is delayed for the load to finish for the following conditions:
    // - There is a transition set on the asset
    // - The `load` was not set to load right now
    assetShouldRender: function assetShouldRender(asset) {
      var hasDelayedLoad, hasTransition;
      hasTransition = !!this.assetPropVal(asset, 'transition');
      hasDelayedLoad = this.assetReadyToLoad(asset) !== true;

      switch (false) {
        case !!this[asset + 'Src']:
          return false;
        // Require asset src

        case !hasTransition:
          return this[asset + 'Loaded'];

        case !hasDelayedLoad:
          return this[asset + 'Loaded'];

        default:
          return true;
        // Can be rendered immediately
      }
    }
  }
});
// CONCATENATED MODULE: ./src/video.coffee
/*
Configuration related to video support
*/
var canPlay, _mime; // Check for video support
// http://stackoverflow.com/a/3587475/59160


canPlay = function canPlay(url) {
  var video;
  video = typeof document !== "undefined" && document !== null ? document.createElement('video') : void 0;
  return !!(video != null ? typeof video.canPlayType === "function" ? video.canPlayType(_mime(url)).replace('no', '') : void 0 : void 0);
}; // Get the mimetupe of a video url given it's file extension


_mime = function mime(url) {
  var ref;

  switch ((ref = url.match(/\.(\w+)$/)) != null ? ref[1] : void 0) {
    case 'mp4':
      return 'video/mp4';

    case 'webm':
      return 'video/webm';

    case 'ogg':
      return 'video/ogg';
  }
};

/* harmony default export */ var video_coffee = ({
  //#############################################################################
  // The mixin
  props: {
    autoplay: [String, Boolean],
    autopause: String,
    loop: Boolean,
    muted: Boolean,
    controls: Boolean
  },
  //#############################################################################
  data: function data() {
    return {
      // Dimensions for implementing background cover
      videoNativeWidth: null,
      videoNativeHeight: null,
      // Playing status
      playing: false
    };
  },
  //#############################################################################
  computed: {
    // Loop though all video sources and check if at least one is playable on
    // the device
    canPlayVideo: function canPlayVideo() {
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
    // Test whether the device can autoplay video
    // https://stackoverflow.com/a/39885697/59160
    canAutoplayVideo: function canAutoplayVideo() {
      switch (false) {
        case !(typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent.match(/BlackBerry/i) : void 0):
          return false;

        case !((typeof navigator !== "undefined" && navigator !== null ? navigator.userAgent.match(/(iPhone|iPod)/gi) : void 0) && !('playsInline' in document.createElement('video'))):
          return false;

        default:
          return true;
      }
    },
    // Turn video sources into an array of URls
    videoSources: function videoSources() {
      switch (false) {
        case typeof this.video !== 'string':
          return [this.video];

        case typeof this.video !== 'array':
          return this.video;
      }
    },
    // Get the native aspect of the video
    videoNativeAspect: function videoNativeAspect() {
      return this.videoNativeWidth / this.videoNativeHeight;
    },
    // The masking affect applied to video when applying background-size
    videoContainEffect: function videoContainEffect() {
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
  //#############################################################################
  watch: {
    // Directly control video element
    playing: function playing() {
      var _this = this;

      var ref; // Only relevant if there is a video asset

      if (!this.video) {
        return;
      }

      if (!this.$refs.video) {
        // If the video isn't ready, it should be soon. At which point the
        // videoLoaded watcher will take over and trigger playback
        return this.playing = false;
      } // Control the video element, handling the case that the browser denied
      // the playback


      if (this.playing) {
        return (ref = this.$refs.video.play()) != null ? ref.catch(function (e) {
          console.error(e.message);
          console.error("Vue Visual: try setting `muted` to true");
          return _this.playing = false;
        }) : void 0;
      } else {
        return this.$refs.video.pause();
      }
    },
    // Respond to changes in autoplay/pause settings
    autoplay: function autoplay() {
      return this.respondToAutoplay();
    },
    autopause: function autopause() {
      return this.respondToAutopause();
    },
    // When video is ready to play, respond to autoplay sending
    videoLoaded: function videoLoaded() {
      return this.respondToAutoplay();
    },
    // Handle playback changes when the video moves in and out of viewport
    'inViewport.now': function inViewportNow(visible) {
      if (visible) {
        return this.respondToAutoplay();
      } else {
        return this.respondToAutopause();
      }
    }
  },
  //#############################################################################
  methods: {
    // Start playing video
    play: function play() {
      return this.playing = true;
    },
    // Pause the video
    pause: function pause() {
      return this.playing = false;
    },
    // Play the video from the beginning
    restart: function restart() {
      if (this.$refs.video) {
        this.$refs.video.currentTime = 0;
      }

      return this.play();
    },
    // Toggle video playing state
    togglePlayback: function togglePlayback() {
      var play = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (play = null) {
        return this.togglePlayback(!this.playing);
      }

      if (play) {
        return this.play();
      } else {
        return this.pause();
      }
    },
    // Control video playback based on autoplaying setting
    respondToAutoplay: function respondToAutoplay() {
      var ref;

      switch (false) {
        case (ref = this.autoplay) !== true && ref !== '':
          return this.play();

        case !(this.autoplay === 'visible' && this.inViewport.now):
          return this.play();
      }
    },
    // Control video playback based on autipause setting
    respondToAutopause: function respondToAutopause() {
      switch (false) {
        case !(this.autopause === 'visible' && !this.inViewport.now):
          return this.pause();
      }
    },
    // Passthrough to general mime util so it can be called from template
    mime: function mime(url) {
      return _mime(url);
    }
  }
});
// CONCATENATED MODULE: ./src/utils/fire-when-ready.coffee
// Fire a callback now, when document is interactive, and when complete
/* harmony default export */ var fire_when_ready_coffee = (function (cb) {
  var _handler;

  cb(); // If the document is still loading, add a listener for whent that changes

  if ((typeof document !== "undefined" && document !== null ? document.readyState : void 0) === 'loading') {
    return document.addEventListener('readystatechange', _handler = function handler() {
      cb(); // All content loaded, so done

      if (document.readyState === 'complete') {
        return document.removeEventListener('readystatechange', _handler);
      }
    });
  }
});
;
// EXTERNAL MODULE: external "vue-in-viewport-mixin"
var external_vue_in_viewport_mixin_ = __webpack_require__(5);
var external_vue_in_viewport_mixin_default = /*#__PURE__*/__webpack_require__.n(external_vue_in_viewport_mixin_);

// CONCATENATED MODULE: ./src/viewport.coffee
/*
Configuration related to the relationship between the component and the viewport
*/
var resizeAllVms, resizingVms;



 // Make a single window resize listener

resizingVms = [];

resizeAllVms = function resizeAllVms() {
  var i, len, results, vm;
  results = [];

  for (i = 0, len = resizingVms.length; i < len; i++) {
    vm = resizingVms[i];
    results.push(vm.handleWindowResizeThrottled());
  }

  return results;
};

if (typeof window !== "undefined" && window !== null) {
  window.addEventListener('resize', function () {
    return resizeAllVms();
  });
}

fire_when_ready_coffee(resizeAllVms);
/* harmony default export */ var viewport_coffee = ({
  // The mixin
  mixins: [external_vue_in_viewport_mixin_default.a],
  //#############################################################################
  props: {
    // Override the inViewportMixin's "active" prop and set the default value
    // automatically based on whether we need to monitor the scroll position.
    // The fallback asset is informed by the video setting here.  The "load"
    // value check replicates the assetPropVal which can't be used here.
    inViewportActive: {
      type: Boolean,
      default: function _default() {
        var asset, i, len, ref, ref1;
        ref = ['poster', 'image', 'video'];

        for (i = 0, len = ref.length; i < len; i++) {
          asset = ref[i];

          switch (false) {
            case !!this[asset]:
              continue;

            case ((ref1 = this["load".concat(ucfirst_coffee(asset))]) != null ? ref1 : this.load) !== 'visible':
              return true;

            case !(asset === 'video' && this.autoplay === 'visible'):
              return true;

            case !(asset === 'video' && this.autopause === 'visible'):
              return true;
          }
        }

        return false;
      }
    },
    // Override the inViewportMixin's "once" prop to set the default value based
    // on other props.  Basically, it can be "once" unless we're using the
    // visible status to toggle video playing state.
    inViewportOnce: {
      type: Boolean,
      default: function _default() {
        if (this.video) {
          return 'visible' === this.autoplay || 'visible' === this.autopause;
        } else {
          return true;
        }
      }
    }
  },
  //#############################################################################
  data: function data() {
    return {
      // Measure dimensions
      windowWidth: null,
      containerWidth: null,
      containerHeight: null
    };
  },
  //#############################################################################
  mounted: function mounted() {
    // Start listening to window resizing
    if (this.shouldWatchComponentSize) {
      resizingVms.push(this);
      this.handleWindowResize();
      return this.handleWindowResizeThrottled = throttle_default()(this.handleWindowResize, 100);
    }
  },
  //#############################################################################
  destroyed: function destroyed() {
    // Remove resizing reference
    return resizingVms.splice(resizingVms.indexOf(this), 1);
  },
  //#############################################################################
  methods: {
    // Update the internal measurement of the window size
    handleWindowResize: function handleWindowResize() {
      this.windowWidth = window.innerWidth;

      if (this.shouldWatchComponentSize) {
        return this.updateContainerSize();
      }
    },
    // Update the container size.  Note, if there is no video specified we don't
    // need to know the height.  This saves some CPU:
    // https://jsperf.com/does-reading-one-offset-improve-performance
    updateContainerSize: function updateContainerSize() {
      this.containerWidth = this.$el.offsetWidth;

      if (this.video || this.watchSize) {
        return this.containerHeight = this.$el.offsetHeight;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=coffee&
// Deps









/* harmony default export */ var lib_vue_loader_options_indexvue_type_script_lang_coffee_ = ({
  // The component definition
  name: 'VueVisual',
  // The src code has been broken up into modules to make it eaier to read
  mixins: [accessibility_coffee, assets_coffee, loading_coffee, size_coffee, style_coffee, transition_coffee, video_coffee, viewport_coffee],
  // Shared utility methods
  methods: {
    // Get value of a prop that has an asset-level override.  For instance,
    // `render` may be overrode by `renderPoster`
    assetPropVal: function assetPropVal(asset, prop) {
      var assetProp, ref; // For some props, fallback uses the video prop

      if (asset === 'fallback' && (prop === 'load' || prop === 'transition')) {
        asset = 'video';
      } // Make the prop attribute, ie: renderPoster


      assetProp = prop + ucfirst_coffee(asset); // Default to general prop if not defined

      return (ref = this[assetProp]) != null ? ref : this[prop];
    }
  },
  // Merge config as prop defaults
  setDefaults: function setDefaults(config) {
    var key, results, val;
    results = [];

    for (key in config) {
      val = config[key];
      results.push(this.props[key].default = val);
    }

    return results;
  }
});
// CONCATENATED MODULE: ./index.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var indexvue_type_script_lang_coffee_ = (lib_vue_loader_options_indexvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./index.vue?vue&type=style&index=0&lang=stylus&
var indexvue_type_style_index_0_lang_stylus_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./index.vue






/* normalize component */

var component = normalizeComponent(
  indexvue_type_script_lang_coffee_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "index.vue"
/* harmony default export */ var index = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);