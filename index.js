(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("is-numeric"));
	else if(typeof define === 'function' && define.amd)
		define(["is-numeric"], factory);
	else if(typeof exports === 'object')
		exports["vue-visual"] = factory(require("is-numeric"));
	else
		root["vue-visual"] = factory(root["is-numeric"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(1)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/reinhard/Work/Coachella/Site/wp-content/themes/coachella2017/src/workbench/vue-visual/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-252cd8aa", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-252cd8aa", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var aspectFromString, isNumeric, size;

	isNumeric = __webpack_require__(3);

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

	aspectFromString = function(str) {
	  var parts;
	  parts = str.split(':');
	  return parseInt(parts[0], 10) / parseInt(parts[1], 10);
	};

	module.exports = {
	  props: {
	    poster: [String, Object],
	    image: [String, Object],
	    video: [String, Object],
	    fallback: [String, Object],
	    width: [String, Number],
	    height: [String, Number],
	    aspect: [String, Number]
	  },
	  computed: {
	    containerStyles: function() {
	      return {
	        width: size(this.width),
	        height: size(this.height)
	      };
	    },
	    containerClasses: function() {
	      return [this.width ? 'vv-has-width' : void 0, this.height ? 'vv-has-height' : void 0, this.aspect ? 'vv-has-aspect' : void 0];
	    },
	    aspectPerc: function() {
	      switch (false) {
	        case !isNumeric(this.aspect):
	          return this.aspect;
	        case !this.aspect.match(':'):
	          return aspectFromString(this.aspect);
	      }
	    },
	    aspectPadding: function() {
	      return (1 / this.aspectPerc * 100) + '%';
	    }
	  }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "vv-container",
	    class: _vm.containerClasses,
	    style: (_vm.containerStyles)
	  }, [(_vm.aspect) ? _h('div', {
	    staticClass: "vv-aspect-shim",
	    style: ({
	      paddingTop: _vm.aspectPadding
	    })
	  }) : _vm._e(), (_vm.image) ? _h('img', {
	    staticClass: "vv-asset vv-image",
	    attrs: {
	      "src": _vm.image
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-252cd8aa", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;