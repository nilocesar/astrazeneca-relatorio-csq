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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.less */ \"./src/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Relacionar =\n/*#__PURE__*/\nfunction () {\n  _createClass(Relacionar, null, [{\n    key: \"EVENTS\",\n    get: function get() {\n      return {\n        FINISH: \"relacionar_FINISH\",\n        ALL_FILLED: \"relacionar_ALL_FILLED\"\n      };\n    }\n  }]);\n\n  function Relacionar(element) {\n    var _this = this;\n\n    _classCallCheck(this, Relacionar);\n\n    this.element = element;\n    this.currentSelected = null;\n    this.leftElements = $(this.element).find('.item-left');\n    this.rightElements = $(this.element).find('.item-right');\n    this.leftElements.each(function (i, e) {\n      $(e).click(function () {\n        if (_this.currentSelected) {\n          _this.currentSelected.removeClass('selecionado');\n        }\n\n        _this.currentSelected = $(e);\n\n        _this.currentSelected.addClass('selecionado');\n      });\n      $(e).find('.seletor').first().css('background-color', $(e).attr('data-color'));\n    });\n    this.rightElements.each(function (i, e) {\n      var relaciona = $('#' + $(e).attr('data-relaciona-com')).find('.seletor').clone();\n      relaciona.attr('id', '');\n      relaciona.addClass('gabarito');\n      relaciona.removeClass('animated').removeClass('infinite').removeClass('pulse');\n      relaciona.insertAfter($(e).find('.seletor'));\n      $(e).click(function () {\n        if (_this.currentSelected) {\n          _this.clearSelections();\n\n          $(e).attr('data-relacionando', _this.currentSelected.attr('id'));\n\n          _this.setElementColor(e);\n        }\n\n        if (_this.allFilled()) {\n          _this.element.trigger(Relacionar.EVENTS.ALL_FILLED);\n        }\n      });\n    });\n  }\n\n  _createClass(Relacionar, [{\n    key: \"allFilled\",\n    value: function allFilled() {\n      var total = $(this.element).find('[data-relaciona-com]').length;\n      var contagem = $(this.element).find('[data-relacionando]').length;\n      return total == contagem;\n    }\n  }, {\n    key: \"setElementColor\",\n    value: function setElementColor(element) {\n      $(element).find('.seletor').first().css('background-color', this.currentSelected.attr('data-color'));\n      $(element).find('.seletor').first().html(this.currentSelected.find('.seletor').first().html());\n    }\n  }, {\n    key: \"clearSelections\",\n    value: function clearSelections() {\n      var _this2 = this;\n\n      $(this.element).find('[data-relacionando=\"' + this.currentSelected.attr('id') + '\"]').each(function (i, e) {\n        return _this2.clearSelection(e);\n      });\n    }\n  }, {\n    key: \"clearSelection\",\n    value: function clearSelection(element) {\n      $(element).find('.seletor').first().css('background-color', '');\n      $(element).removeAttr('data-relacionando');\n      $(element).find('.seletor').first().html('');\n    }\n  }, {\n    key: \"limpar\",\n    value: function limpar() {\n      var _this3 = this;\n\n      this.rightElements.each(function (i, e) {\n        return _this3.clearSelection(e);\n      });\n    }\n  }, {\n    key: \"makeSelection\",\n    value: function makeSelection(a, b) {\n      b.attr('data-relacionando', a.attr('id'));\n\n      if (a.attr('data-color')) {\n        b.find('.seletor').first().css('background-color', a.attr('data-color'));\n      }\n\n      b.find('.seletor').first().html(a.find('.seletor').first().html());\n    }\n  }, {\n    key: \"resolve\",\n    value: function resolve(correct) {\n      var _this4 = this;\n\n      if (correct) {\n        this.rightElements.each(function (i, e) {\n          var currentSelected = $('#' + $(e).attr('data-relaciona-com'));\n\n          _this4.makeSelection(currentSelected, e);\n        });\n      } else {\n        this.leftElements.each(function (i, e) {\n          _this4.makeSelection(e, $(_this4.rightElements.get(i)));\n        });\n      }\n\n      this.confirmar();\n    }\n  }, {\n    key: \"confirmar\",\n    value: function confirmar() {\n      var total = this.leftElements.length;\n      var count = 0;\n      this.rightElements.each(function (i, e) {\n        if ($(e).attr('data-relaciona-com') == $(e).attr('data-relacionando')) {\n          count++;\n          $(e).addClass('correto');\n        } else {\n          $(e).addClass('incorreto');\n        }\n      });\n      var correto = total == count;\n      var relacionamentos = [];\n      $(this.element).find('[data-relacionando]').each(function (i, e) {\n        relacionamentos[i] = $(e).attr('data-relacionando');\n      });\n\n      if (correto) {\n        this.element.find('.gabarito').remove();\n      }\n\n      $(this.element).trigger({\n        type: Relacionar.EVENTS.FINISH,\n        data_relacionar: {\n          correto: correto,\n          relacionamentos: relacionamentos\n        }\n      });\n      return correto;\n    }\n  }]);\n\n  return Relacionar;\n}();\n\nwindow.Relacionar = Relacionar;\n\n//# sourceURL=webpack:///./src/index.js?");

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