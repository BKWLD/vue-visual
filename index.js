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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
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
      style: _vm.dimensionStyles
    },
    [
      _vm.hasAspect && !_vm.expand
        ? _c("div", {
            staticClass: "vv-aspect-shim",
            class: _vm.shimAlignClasses,
            style: { paddingTop: _vm.aspectPadding }
          })
        : _vm._e(),
      _c("transition", { attrs: { name: _vm.transition } }, [
        _vm.placeholderColor && !_vm.showImage
          ? _c("div", {
              staticClass: "vv-placeholder",
              style: { backgroundColor: _vm.placeholderColor }
            })
          : _vm._e()
      ]),
      _vm.image && _vm.shouldLoad
        ? _c(
            "div",
            { staticClass: "vv-wrapper" },
            [
              _c("transition", { attrs: { name: _vm.transition } }, [
                _c(
                  "picture",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showImage,
                        expression: "showImage"
                      }
                    ],
                    staticClass: "vv-picture"
                  },
                  [
                    _vm.webpSrcset
                      ? _c("source", {
                          attrs: {
                            type: "image/webp",
                            srcset: _vm.webpSrcset,
                            sizes: _vm.sizes
                          }
                        })
                      : _vm._e(),
                    _vm._t("image-source"),
                    _c("img", {
                      ref: "image",
                      staticClass: "vv-asset vv-image",
                      style: _vm.assetStyles,
                      attrs: {
                        src: _vm.image,
                        srcset: _vm.srcset,
                        sizes: _vm.sizes,
                        alt: _vm.alt
                      },
                      on: {
                        load: function($event) {
                          return _vm.onAssetLoad("image")
                        }
                      }
                    })
                  ],
                  2
                )
              ])
            ],
            1
          )
        : _vm._e(),
      _vm.video && _vm.shouldLoad
        ? _c(
            "div",
            { staticClass: "vv-wrapper" },
            [
              _c("transition", { attrs: { name: _vm.transition } }, [
                _c(
                  "video",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showVideo,
                        expression: "showVideo"
                      }
                    ],
                    ref: "video",
                    staticClass: "vv-asset vv-video",
                    style: _vm.assetStyles,
                    attrs: {
                      playsinline: "",
                      preload: "auto",
                      autoplay: _vm.shouldAutoplay,
                      loop: _vm.loop,
                      controls: _vm.controls,
                      "aria-label": _vm.alt
                    },
                    domProps: { muted: _vm.muted },
                    on: {
                      canplaythrough: function($event) {
                        return _vm.onAssetLoad("video")
                      }
                    }
                  },
                  [
                    _vm._l(_vm.videoSources, function(ref) {
                      var src = ref.src
                      var type = ref.type
                      return _c("source", {
                        key: type,
                        attrs: { src: src, type: type }
                      })
                    }),
                    _vm._t("video-source")
                  ],
                  2
                )
              ])
            ],
            1
          )
        : _vm._e(),
      _vm.$slots.default
        ? _c(
            "div",
            { staticClass: "vv-slot", class: _vm.slotAlignClasses },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./index.vue?vue&type=template&id=6de5ab34&lang=pug&

// CONCATENATED MODULE: ./concerns/fits-assets.coffee
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Logic related to the positioning of the asset within the container, like
using object-fit.
*/
/* harmony default export */ var fits_assets_coffee = ({
  props: {
    // Size
    width: Number | String,
    height: Number | String,
    maxWidth: Number | String,
    aspect: Number,
    expand: Boolean,
    // Layout
    objectFit: {
      type: String,
      default: 'cover'
    },
    objectPosition: {
      type: String,
      default: '50% 50%'
    }
  },
  computed: {
    // Make the shim padding style
    aspectPadding: function aspectPadding() {
      if (this.hasAspect) {
        return "".concat(1 / this.aspect * 100, "%");
      }
    },
    hasAspect: function hasAspect() {
      return !!this.aspect;
    },
    // Styles that get added to the parent container
    dimensionStyles: function dimensionStyles() {
      return _objectSpread(_objectSpread(_objectSpread({}, this.width ? {
        width: this.autoUnit(this.width)
      } : {}), this.height ? {
        height: this.autoUnit(this.height)
      } : {}), this.maxWidth ? {
        maxWidth: this.autoUnit(this.maxWidth)
      } : {});
    },
    // Styles that go on the asset tags
    assetStyles: function assetStyles() {
      // If there isn't an aspect ratio, apply the container dimensions to
      // the asset as well. Necessary becauase the asset won't naturally match
      // the container div.
      return _objectSpread({
        objectFit: this.objectFit,
        objectPosition: this.objectPosition
      }, !this.hasAspect ? this.dimensionStyles : {});
    },
    // Container classes
    fitsAssetsContainerClasses: function fitsAssetsContainerClasses() {
      return {
        'vv-has-aspect': this.hasAspect,
        'vv-expand': this.expand
      };
    }
  },
  methods: {
    // Enable the objectFitPolyfill if it was loaded
    applyObjectFitPolyfill: function applyObjectFitPolyfill(assetType) {
      var _this = this;

      if (!window.objectFitPolyfill) {
        return;
      }

      this.$refs[assetType].dataset.objectFit = this.objectFit;
      this.$refs[assetType].dataset.objectPosition = this.objectPosition;
      return setTimeout(function () {
        var el, ref;

        if (!(el = (ref = _this.$refs[assetType]) != null ? ref.$el : void 0)) {
          return;
        }

        return window.objectFitPolyfill(el);
      }, 0);
    },
    // Support plain numbers for px units
    autoUnit: function autoUnit(val) {
      if (String(val).match(/^\d+$/)) {
        return "".concat(val, "px");
      } else {
        return val;
      }
    }
  }
});
// CONCATENATED MODULE: ./concerns/loads-assets.coffee
/*
Logic related to loading assets
*/
/* harmony default export */ var loads_assets_coffee = ({
  props: {
    autoload: {
      type: Boolean,
      default: true
    },
    lazyload: Boolean,
    placeholderColor: String,
    transition: {
      type: String,
      default: 'vv-fade'
    }
  },
  data: function data() {
    return {
      shouldLoad: this.autoload && !this.lazyload,
      imageLoaded: false,
      videoLoaded: false
    };
  },
  // Set loaded to true immediately if loaded before the load event fires
  mounted: function mounted() {
    var ref, ref1;

    if ((ref = this.$refs.image) != null ? ref.complete : void 0) {
      this.imageLoaded = true;
    }

    if (((ref1 = this.$refs.video) != null ? ref1.readyState : void 0) > 3) {
      return this.videoLoaded = true;
    }
  },
  computed: {
    // Determine whether all assets have been loaded
    allLoaded: function allLoaded() {
      if (this.image && !this.imageLoaded) {
        return false;
      }

      if (this.video && !this.videoLoaded) {
        return false;
      }

      return true;
    },
    // Container classes
    loadsAssetsContainerClasses: function loadsAssetsContainerClasses() {
      return {
        'vv-image-loaded': this.imageLoaded,
        'vv-video-loaded': this.videoLoaded,
        'vv-loaded': this.allLoaded
      };
    }
  },
  watch: {
    // If the asset srcs change, reset the loading state
    image: function image() {
      return this.imageLoaded = false;
    },
    video: function video() {
      return this.videoLoaded = false;
    },
    // Trigger side effects of assets loading
    imageLoaded: function imageLoaded(loaded) {
      if (loaded) {
        this.applyObjectFitPolyfill('image');
        return this.$emit('loaded:image');
      }
    },
    videoLoaded: function videoLoaded(loaded) {
      if (loaded) {
        this.applyObjectFitPolyfill('video');
        return this.$emit('loaded:video');
      }
    },
    allLoaded: function allLoaded(loaded) {
      if (loaded) {
        return this.$emit('loaded');
      }
    }
  },
  methods: {
    // Handle an asset being loaded. If the element was removed before the load
    // finished, don't continue.  I've seen this in edge cases but not sure
    // what scenario actually lead to that case.
    onAssetLoad: function onAssetLoad(assetType) {
      if (!this.$refs[assetType]) {
        return;
      }

      return this["".concat(assetType, "Loaded")] = true;
    },
    // Manually start loading
    load: function load() {
      return this.shouldLoad = true;
    }
  }
});
// CONCATENATED MODULE: ./concerns/observes-viewport.coffee
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Use intersection observer to lazy load.  Not using vue-in-viewport-mixin since
needs are simpler and I want more control.
*/
var slice = [].slice;
/* harmony default export */ var observes_viewport_coffee = ({
  props: {
    intersectionOptions: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      inViewport: false
    };
  },
  // Start observing on init
  mounted: function mounted() {
    return this.startObserving();
  },
  computed: {
    // Conditions where the viewport is watched
    shouldObserve: function shouldObserve() {
      return this.lazyload || this.autopause;
    },
    // Conditions where we observe only once
    shouldObserveOnce: function shouldObserveOnce() {
      return !this.autopause;
    }
  },
  watch: {
    // Trigger load when in viewport
    inViewport: function inViewport(visible) {
      if (visible) {
        return this.load();
      }
    }
  },
  methods: {
    // Start observing if appropriate
    startObserving: function startObserving() {
      if (!(this.shouldObserve && typeof IntersectionObserver !== "undefined" && IntersectionObserver !== null)) {
        return;
      }

      if (this.observer) {
        // Don't make multiple observers
        return;
      }

      this.observer = new IntersectionObserver(this.onInViewport, this.makeIntersectionOptions());
      return this.observer.observe(this.$el);
    },
    // Parse interesection options
    makeIntersectionOptions: function makeIntersectionOptions() {
      var options;
      options = this.intersectionOptions;

      if (options.root && typeof options.root === 'string') {
        options.root = document.querySelector(options.root);
      }

      return options;
    },
    // Store when in viewport
    onInViewport: function onInViewport(arg) {
      var arg, entry, ref;

      var _slice$call = slice.call(arg, -1);

      var _slice$call2 = _slicedToArray(_slice$call, 1);

      entry = _slice$call2[0];
      this.inViewport = entry.isIntersecting;

      if (this.inViewport && this.shouldObserveOnce) {
        if ((ref = this.observer) != null) {
          ref.disconnect();
        }

        return delete this.observer;
      }
    }
  }
});
// CONCATENATED MODULE: ./concerns/slots-content.coffee
/*
Logic related to rendering slotted content
*/
/* harmony default export */ var slots_content_coffee = ({
  props: {
    align: {
      type: String,
      default: 'center middle'
    }
  },
  computed: {
    // Has slotted content
    filledSlot: function filledSlot() {
      return !!this.$slots.default;
    },
    // Make container alignment classes
    slotsContentContainerClasses: function slotsContentContainerClasses() {
      if (!this.filledSlot) {
        return;
      }

      if (this.horizontalAlign) {
        return "vv-align-".concat(this.horizontalAlign);
      }
    },
    // Make classes that go on the slot
    slotAlignClasses: function slotAlignClasses() {
      if (!this.filledSlot) {
        return;
      }

      if (this.verticalAlign) {
        return "vv-align-".concat(this.verticalAlign);
      }
    },
    // Make classes that go on the shim
    shimAlignClasses: function shimAlignClasses() {
      return this.slotAlignClasses;
    },
    // Get the vertical align rule
    verticalAlign: function verticalAlign() {
      var ref;
      return (ref = this.align.match(/bottom|middle|top/)) != null ? ref[0] : void 0;
    },
    // Get the horizontal align rule
    horizontalAlign: function horizontalAlign() {
      var ref;
      return (ref = this.align.match(/left|center|right/)) != null ? ref[0] : void 0;
    }
  }
});
// CONCATENATED MODULE: ./concerns/supports-images.coffee
/*
Logic related rendering images
*/
/* harmony default export */ var supports_images_coffee = ({
  props: {
    image: String,
    srcset: String,
    webpSrcset: String,
    sizes: String,
    preload: Boolean
  },
  // Add preload link tags
  head: function head() {
    var imagesrcset, preloadTag;

    if (!(this.preload && this.image)) {
      return;
    } // Create base link attributes


    preloadTag = {
      rel: 'preload',
      as: 'image',
      href: this.image
    }; // Add srcset support

    if (imagesrcset = this.webpSrcset || this.srcset) {
      preloadTag = Object.assign(preloadTag, {
        imagesrcset: imagesrcset,
        imagesizes: this.sizes || '' // Prevent "undefined" value

      });
    }

    return {
      // Add link tag
      link: [preloadTag]
    };
  },
  computed: {
    // Determines whether the image should be shown via v-show
    showImage: function showImage() {
      switch (false) {
        // Switch to video instance
        case !this.videoLoaded:
          return false;

        case !(!this.transition && !this.video):
          return true;
        // Image has finished loading

        case !this.imageLoaded:
          return true;
      }
    }
  }
});
// CONCATENATED MODULE: ./concerns/supports-videos.coffee
/*
Logic related video playback
*/
/* harmony default export */ var supports_videos_coffee = ({
  props: {
    video: String | Array,
    autoplay: Boolean,
    autopause: Boolean,
    loop: Boolean,
    muted: Boolean,
    controls: Boolean
  },
  computed: {
    // Make an easily parsed list of video soruces
    videoSources: function videoSources() {
      var sources;

      if (!this.video) {
        return;
      }

      sources = Array.isArray(this.video) ? this.video : [this.video];
      return sources.map(function (url) {
        return {
          src: url,
          type: function () {
            var ref;

            switch ((ref = url.match(/\.(\w+)$/)) != null ? ref[1] : void 0) {
              case 'mp4':
                return 'video/mp4';

              case 'webm':
                return 'video/webm';

              case 'ogg':
                return 'video/ogg';
            }
          }()
        };
      });
    },
    // Don't autoplay if set to autopause. We don't want to autoplay when a
    // video is offscreen
    shouldAutoplay: function shouldAutoplay() {
      return this.autoplay && !this.autopause;
    },
    // When to render the video instance
    showVideo: function showVideo() {
      switch (false) {
        case !!this.transition:
          return true;
        // Render when loaded

        case !this.videoLoaded:
          return true;
      }
    }
  },
  watch: {
    // If autopausing, play toggle playback based on viewport status
    inViewport: function inViewport(visible) {
      if (!this.autopause) {
        return;
      }

      if (visible) {
        return this.play();
      } else {
        return this.pause();
      }
    }
  },
  methods: {
    // Load (if not already) and start playing
    play: function play() {
      var _this = this;

      this.load();
      return this.$nextTick(function () {
        var e, ref;

        try {
          return _this.playPromise = (ref = _this.$refs.video) != null ? ref.play() : void 0;
        } catch (error) {
          e = error;
          return console.error(e);
        }
      });
    },
    // Pause playback
    pause: function pause() {
      var _this2 = this;

      var ref;

      if (this.playPromise) {
        return this.playPromise.then(function () {
          var ref;
          return (ref = _this2.$refs.video) != null ? ref.pause() : void 0;
        });
      } else {
        return (ref = this.$refs.video) != null ? ref.pause() : void 0; // For browsers that don't return a promise
      }
    },
    // Play the video from the beginning
    restart: function restart() {
      this.seek(0);
      return this.play();
    },
    // Reset playhead to the beginning and pause
    reset: function reset() {
      this.pause();
      return this.seek(0);
    },
    // Set playhead time to certin value
    seek: function seek(time) {
      var ref;
      return (ref = this.$refs.video) != null ? ref.currentTime = time : void 0;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/coffee-loader!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=coffee&






/* harmony default export */ var lib_vue_loader_options_indexvue_type_script_lang_coffee_ = ({
  name: 'VueVisual',
  mixins: [fits_assets_coffee, loads_assets_coffee, observes_viewport_coffee, slots_content_coffee, supports_images_coffee, supports_videos_coffee],
  props: {
    alt: String
  },
  computed: {
    // Classes that get added to the visual container
    containerClasses: function containerClasses() {
      return [this.slotsContentContainerClasses, this.fitsAssetsContainerClasses, this.loadsAssetsContainerClasses].filter(function (val) {
        return !!val;
      });
    }
  }
});
// CONCATENATED MODULE: ./index.vue?vue&type=script&lang=coffee&
 /* harmony default export */ var indexvue_type_script_lang_coffee_ = (lib_vue_loader_options_indexvue_type_script_lang_coffee_); 
// EXTERNAL MODULE: ./index.vue?vue&type=style&index=0&lang=stylus&
var indexvue_type_style_index_0_lang_stylus_ = __webpack_require__(1);

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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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