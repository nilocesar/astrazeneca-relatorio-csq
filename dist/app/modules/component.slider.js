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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/flamboyant/PluginJquery.js":
/*!****************************************!*\
  !*** ./src/flamboyant/PluginJquery.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function PluginJquery($) {\n  $.fn.slider = function (options) {\n    var $instancia = $(this);\n    $instancia.data('slider', new Slider($instancia, options));\n    return $instancia.data('slider');\n  };\n})(jQuery);\n\n//# sourceURL=webpack:///./src/flamboyant/PluginJquery.js?");

/***/ }),

/***/ "./src/flamboyant/Slider.js":
/*!**********************************!*\
  !*** ./src/flamboyant/Slider.js ***!
  \**********************************/
/*! exports provided: Slider, SliderEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slider\", function() { return Slider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderEvent\", function() { return SliderEvent; });\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction clamp(min, val, max) {\n  return Math.max(min, Math.min(val, max));\n}\n\nvar SliderEvent = {\n  CHANGE: \"SliderEvent.CHANGE\",\n  FINISH: \"SliderEvent.FINISH\"\n};\n\nvar Slider =\n/*#__PURE__*/\nfunction () {\n  function Slider(element, options) {\n    var _this = this;\n\n    _classCallCheck(this, Slider);\n\n    this.loadOptions(options);\n    this.loadElements(element);\n    this.addEvents();\n    this.warnErrors();\n    this.goto(0);\n    Hammer(this.slider.get(0), {}).on('swipe', function (ev) {\n      if (ev.deltaX > 0) {\n        _this.prev();\n      } else {\n        _this.next();\n      }\n    });\n    setTimeout(function () {\n      _this.slider.addClass('allow-transition');\n    }, 100);\n  }\n\n  _createClass(Slider, [{\n    key: \"warnErrors\",\n    value: function warnErrors() {\n      if (this.slider.height() < 100) {\n        var message = 'Componente Slider precisa de um height maior que 100px para funcionar.';\n        throw new Error(message);\n      }\n    }\n  }, {\n    key: \"loadOptions\",\n    value: function loadOptions(options) {\n      this.options = _extends({\n        pagination: true,\n        transitionTime: 400\n      }, options);\n    }\n  }, {\n    key: \"addEvents\",\n    value: function addEvents() {\n      var _this2 = this;\n\n      this.nextButton.click(function () {\n        return _this2.next();\n      });\n      this.prevButton.click(function () {\n        return _this2.prev();\n      });\n      this.addPaginationEvents();\n    }\n  }, {\n    key: \"addPaginationEvents\",\n    value: function addPaginationEvents() {\n      var _this3 = this;\n\n      if (this.options.pagination) {\n        this.counters.click(function (event) {\n          return _this3.goto($(event.currentTarget).attr('data-slide'));\n        });\n      }\n    }\n  }, {\n    key: \"loadElements\",\n    value: function loadElements(element) {\n      var _this4 = this;\n\n      this.slider = $(element);\n      this.slides = this.slider.find('.slide');\n      this.slides.each(function (i, e) {\n        $(e).attr('data-visited', false);\n\n        _this4.addPaginationElement(i);\n      });\n      this.counters = this.slider.find('.slider-counter-group .slider-counter');\n      this.nextButton = this.slider.find('.slider-control.slider-control-next').first();\n      this.prevButton = this.slider.find('.slider-control.slider-control-prev').first();\n    }\n  }, {\n    key: \"addPaginationElement\",\n    value: function addPaginationElement(index) {\n      if (this.options.pagination) {\n        var counter = $('<button>').addClass('slider-counter');\n        counter.attr('data-slide', index); //$('.slider-counter-group').append(counter);\n\n        this.slider.find('.slider-counter-group').append(counter);\n      }\n    }\n  }, {\n    key: \"slide\",\n    value: function slide(index) {\n      return this.slides.eq(index);\n    }\n  }, {\n    key: \"counter\",\n    value: function counter(index) {\n      return this.counters.eq(index);\n    }\n  }, {\n    key: \"goto\",\n    value: function goto(slide) {\n      var _this5 = this;\n\n      if (this.animating) return;\n      setTimeout(function () {\n        _this5.animating = false;\n      }, this.options.transitionTime);\n      var index = this.clampIndex(slide);\n      this.animating = true;\n      this.updateSlides(index);\n      this.updateControls(index);\n      this.triggerChangeEvent(index);\n      this.slide(index).attr('data-visited', true);\n\n      if (this.allVisited()) {\n        this.triggerFinishEvent();\n      }\n\n      this.index = index;\n    }\n  }, {\n    key: \"clampIndex\",\n    value: function clampIndex(slide) {\n      return clamp(0, slide, this.slides.length - 1);\n    }\n  }, {\n    key: \"allVisited\",\n    value: function allVisited() {\n      return this.slides.toArray().every(function (el) {\n        return el.getAttribute('data-visited') == 'true';\n      });\n    }\n  }, {\n    key: \"triggerChangeEvent\",\n    value: function triggerChangeEvent(index) {\n      $(this.slider).trigger({\n        type: SliderEvent.CHANGE,\n        slider: {\n          from: this.index,\n          to: index\n        }\n      });\n    }\n  }, {\n    key: \"triggerFinishEvent\",\n    value: function triggerFinishEvent() {\n      $(this.slider).trigger({\n        type: SliderEvent.FINISH,\n        slider: {}\n      });\n    }\n  }, {\n    key: \"updateSlides\",\n    value: function updateSlides(index) {\n      this.slides.addClass('out');\n      this.slides.each(function (i, e) {\n        $(e).addClass('in');\n\n        if (i > index) {\n          $(e).removeClass('in');\n        }\n      });\n      this.slide(index).removeClass('out').addClass('in');\n    }\n  }, {\n    key: \"updateControls\",\n    value: function updateControls(index) {\n      this.counters.removeClass('selected');\n      this.counter(index).addClass('selected');\n      this.prevButton.show();\n\n      if (index == 0) {\n        this.prevButton.hide();\n      }\n\n      this.nextButton.show();\n\n      if (index == this.slides.length - 1) {\n        this.nextButton.hide();\n      }\n    }\n  }, {\n    key: \"next\",\n    value: function next() {\n      this.goto(this.index + 1);\n    }\n  }, {\n    key: \"prev\",\n    value: function prev() {\n      this.goto(this.index - 1);\n    }\n  }, {\n    key: \"animating\",\n    get: function get() {\n      return this.slider.attr('data-animating') == \"true\" ? true : false;\n    },\n    set: function set(animating) {\n      this.slider.attr('data-animating', animating);\n    }\n  }, {\n    key: \"index\",\n    get: function get() {\n      return parseInt(this.slider.attr('data-index'));\n    },\n    set: function set(index) {\n      this.slider.attr('data-index', index);\n    }\n  }]);\n\n  return Slider;\n}();\n\nwindow.Slider = Slider;\nwindow.SliderEvent = SliderEvent;\n\n\n//# sourceURL=webpack:///./src/flamboyant/Slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ \"./src/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _flamboyant_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flamboyant/Slider */ \"./src/flamboyant/Slider.js\");\n/* harmony import */ var _flamboyant_PluginJquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flamboyant/PluginJquery */ \"./src/flamboyant/PluginJquery.js\");\n/* harmony import */ var _flamboyant_PluginJquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flamboyant_PluginJquery__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.less?");

/***/ })

/******/ });