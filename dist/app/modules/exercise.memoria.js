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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ \"./src/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar JogoMemoria =\n/*#__PURE__*/\nfunction () {\n  _createClass(JogoMemoria, null, [{\n    key: \"EVENTS\",\n    get: function get() {\n      return {\n        COMPLETE: \"complete\"\n      };\n    }\n  }]);\n\n  function JogoMemoria(element) {\n    var _this = this;\n\n    _classCallCheck(this, JogoMemoria);\n\n    this.element = $(element);\n    this.pairs = {};\n    this.cards.each(function (i, card) {\n      $(card).addClass('selected');\n      _this.pairs[$(card).attr('data-pair')] = false;\n      $(card).click(function () {\n        return _this.cardClick(card);\n      });\n    });\n    setTimeout(function () {\n      $('.selected').removeClass('selected');\n      setTimeout(function () {\n        return _this.shuffeAll();\n      }, 1000);\n    }, 3000);\n  }\n\n  _createClass(JogoMemoria, [{\n    key: \"shuffeAll\",\n    value: function shuffeAll() {\n      var _this2 = this;\n\n      this.cards.each(function (i, card) {\n        if (Math.random() > 0.5) {\n          _this2.element.append($(card));\n        }\n      });\n    }\n  }, {\n    key: \"cardClick\",\n    value: function cardClick(card) {\n      var _this3 = this;\n\n      if (this.selected.length < 2) {\n        $(card).addClass('selected');\n\n        if (this.selected.length == 2) {\n          setTimeout(function () {\n            return _this3.validatePairs();\n          }, 1000);\n        }\n      }\n    }\n  }, {\n    key: \"validatePairs\",\n    value: function validatePairs() {\n      var selection = this.selected;\n      var card1 = $(selection.get(0));\n      var card2 = $(selection.get(1));\n\n      if (card1.attr('data-pair') == card2.attr('data-pair')) {\n        selection.addClass('right-selection');\n        this.pairs[card1.attr('data-pair')] = true;\n      }\n\n      selection.removeClass('selected');\n\n      if (this.isComplete()) {\n        this.element.trigger({\n          type: JogoMemoria.EVENTS.COMPLETE\n        });\n      }\n    }\n  }, {\n    key: \"isComplete\",\n    value: function isComplete() {\n      for (var par in this.pairs) {\n        if (this.pairs.hasOwnProperty(par)) {\n          var completo = this.pairs[par];\n\n          if (!completo) {\n            return false;\n          }\n        }\n      }\n\n      return true;\n    }\n  }, {\n    key: \"cards\",\n    get: function get() {\n      return this.element.find('.card');\n    }\n  }, {\n    key: \"selected\",\n    get: function get() {\n      return this.cards.filter('.selected');\n    }\n  }]);\n\n  return JogoMemoria;\n}();\n\nwindow.JogoMemoria = JogoMemoria;\n\n//# sourceURL=webpack:///./src/index.js?");

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