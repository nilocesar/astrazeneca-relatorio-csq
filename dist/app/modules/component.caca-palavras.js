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

/***/ "./src/CHAR_MAPS.js":
/*!**************************!*\
  !*** ./src/CHAR_MAPS.js ***!
  \**************************/
/*! exports provided: REPLACE_BASE_CHAR_MAP, LETTER_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REPLACE_BASE_CHAR_MAP\", function() { return REPLACE_BASE_CHAR_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LETTER_LIST\", function() { return LETTER_LIST; });\nvar REPLACE_BASE_CHAR_MAP = {\n  'Š': 'S',\n  'š': 's',\n  'Ž': 'Z',\n  'ž': 'z',\n  'À': 'A',\n  'Á': 'A',\n  'Â': 'A',\n  'Ã': 'A',\n  'Ä': 'A',\n  'Å': 'A',\n  'Æ': 'A',\n  'Ç': 'C',\n  'È': 'E',\n  'É': 'E',\n  'Ê': 'E',\n  'Ë': 'E',\n  'Ì': 'I',\n  'Í': 'I',\n  'Î': 'I',\n  'Ï': 'I',\n  'Ñ': 'N',\n  'Ò': 'O',\n  'Ó': 'O',\n  'Ô': 'O',\n  'Õ': 'O',\n  'Ö': 'O',\n  'Ø': 'O',\n  'Ù': 'U',\n  'Ú': 'U',\n  'Û': 'U',\n  'Ü': 'U',\n  'Ý': 'Y',\n  'Þ': 'B',\n  'ß': 'Ss',\n  'à': 'a',\n  'á': 'a',\n  'â': 'a',\n  'ã': 'a',\n  'ä': 'a',\n  'å': 'a',\n  'æ': 'a',\n  'ç': 'c',\n  'è': 'e',\n  'é': 'e',\n  'ê': 'e',\n  'ë': 'e',\n  'ì': 'i',\n  'í': 'i',\n  'î': 'i',\n  'ï': 'i',\n  'ð': 'o',\n  'ñ': 'n',\n  'ò': 'o',\n  'ó': 'o',\n  'ô': 'o',\n  'õ': 'o',\n  'ö': 'o',\n  'ø': 'o',\n  'ù': 'u',\n  'ú': 'u',\n  'û': 'u',\n  'ý': 'y',\n  'þ': 'b',\n  'ÿ': 'y',\n  ' ': '-'\n};\nvar LETTER_LIST = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\", \"I\", \"J\", \"K\", \"L\", \"M\", \"N\", \"O\", \"P\", \"Q\", \"R\", \"S\", \"T\", \"U\", \"V\", \"X\", \"Z\"];\n\n\n//# sourceURL=webpack:///./src/CHAR_MAPS.js?");

/***/ }),

/***/ "./src/array.helpers.js":
/*!******************************!*\
  !*** ./src/array.helpers.js ***!
  \******************************/
/*! exports provided: shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffleArray\", function() { return shuffleArray; });\nfunction shuffleArray(array) {\n  var currentIndex = array.length,\n      temporaryValue,\n      randomIndex; // While there remain elements to shuffle...\n\n  while (0 !== currentIndex) {\n    // Pick a remaining element...\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1; // And swap it with the current element.\n\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n}\n\n\n\n//# sourceURL=webpack:///./src/array.helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.helpers */ \"./src/math.helpers.js\");\n/* harmony import */ var _string_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string.helpers */ \"./src/string.helpers.js\");\n/* harmony import */ var _array_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.helpers */ \"./src/array.helpers.js\");\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.less */ \"./src/styles.less\");\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_3__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nfunction CriaEstruturaPalavra(palavra_element) {\n  var palavra = $(palavra_element).html();\n  return {\n    element: palavra_element,\n    text: palavra,\n    length: palavra.length,\n    i: -1,\n    j: -1,\n    cells: [],\n    hide: function hide() {\n      $(this.element).addClass('hide-word');\n      $(this.element).html(Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__[\"hideWord\"])(this.text));\n    },\n    show: function show() {\n      $(this.element).removeClass('hide-word');\n      $(this.element).html(this.text);\n    },\n    setClass: function setClass(classe) {\n      $(this.element).addClass(classe);\n      $(this.cells).each(function () {\n        $(this).addClass(classe);\n      });\n    },\n    addCell: function addCell(cell) {\n      $(cell).addClass('word-part');\n      this.cells.push(cell);\n    },\n    setPosition: function setPosition(i, j) {\n      this.i = i;\n      this.j = j;\n    }\n  };\n}\n\nvar CacaPalavras =\n/*#__PURE__*/\nfunction () {\n  _createClass(CacaPalavras, null, [{\n    key: \"EVENTS\",\n    get: function get() {\n      return {\n        FINISH: \"CacaPalavras_FINISH\",\n        CELL_CLICK: \"CacaPalavras_CELL_CLICK\"\n      };\n    }\n  }]);\n\n  function CacaPalavras(element, palavras_elements, config) {\n    var _this = this;\n\n    _classCallCheck(this, CacaPalavras);\n\n    this.element = element;\n    this.matriz_holder = this.element.find('.caca-palavras-matriz').first();\n    this.palavras_elements = palavras_elements;\n    this.config = config;\n    this.carregaPalavras();\n    this.construirMatriz();\n    this.addWords();\n    this.element.find('.confirmar').click(function () {\n      _this.checkWords();\n\n      _this.element.find('.confirmar').remove();\n    });\n  }\n\n  _createClass(CacaPalavras, [{\n    key: \"carregaPalavras\",\n    value: function carregaPalavras() {\n      var _this2 = this;\n\n      this.palavras = [];\n      $(this.palavras_elements).each(function (i, element) {\n        var palavra = CriaEstruturaPalavra($(element).get(0));\n        palavra.hide();\n\n        _this2.palavras.push(palavra);\n      });\n    }\n  }, {\n    key: \"construirMatriz\",\n    value: function construirMatriz() {\n      var _this3 = this;\n\n      for (var i = 0; i < this.config.row; i++) {\n        var row = $(\"<div>\").addClass('caca-palavras-linha');\n        this.matriz_holder.append(row);\n\n        for (var j = 0; j < this.config.col; j++) {\n          var cell = $(\"<div>\").addClass('caca-palavras-letra');\n          cell.attr('data-i', i);\n          cell.attr('data-j', j);\n          cell.html(Object(_string_helpers__WEBPACK_IMPORTED_MODULE_1__[\"randomLetter\"])());\n          row.append(cell);\n          cell.click(function (event) {\n            return _this3.cellClick(event.target);\n          });\n        }\n      }\n    }\n  }, {\n    key: \"cellClick\",\n    value: function cellClick(cell) {\n      $(cell).toggleClass('caca-palavras-selected');\n      var verified = this.verifyWords();\n      $(this).trigger({\n        type: CacaPalavras.EVENTS.CELL_CLICK,\n        caca_palavras_data: {\n          verified: verified,\n          cell: cell\n        }\n      });\n    }\n  }, {\n    key: \"checkWords\",\n    value: function checkWords() {\n      var acertou_tudo = true;\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.palavras[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var palavra = _step.value;\n\n          if (!this.checkWord(palavra)) {\n            acertou_tudo = false;\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return != null) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      $(this.element.find('.caca-palavras-letra')).addClass('lock');\n      $(this.element.find('.caca-palavras-selected:not(.word-part)')).addClass('wrong-letter');\n      $(this.element).trigger({\n        type: CacaPalavras.EVENTS.FINISH,\n        caca_palavras_data: {\n          correct: acertou_tudo\n        }\n      });\n    }\n  }, {\n    key: \"verifyWords\",\n    value: function verifyWords() {\n      var acertou_tudo = true;\n      var _iteratorNormalCompletion2 = true;\n      var _didIteratorError2 = false;\n      var _iteratorError2 = undefined;\n\n      try {\n        for (var _iterator2 = this.palavras[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n          var palavra = _step2.value;\n\n          if (!this.verifyWord(palavra)) {\n            acertou_tudo = false;\n            palavra.hide();\n          } else {\n            palavra.show();\n          }\n        }\n      } catch (err) {\n        _didIteratorError2 = true;\n        _iteratorError2 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n            _iterator2.return();\n          }\n        } finally {\n          if (_didIteratorError2) {\n            throw _iteratorError2;\n          }\n        }\n      }\n\n      return acertou_tudo;\n    }\n  }, {\n    key: \"verifyWord\",\n    value: function verifyWord(palavra) {\n      var selecao = $(\"[data-i=\".concat(palavra.i, \"].caca-palavras-selected\")).length;\n      var total = palavra.cells.reduce(function (total, cell) {\n        return total + (cell.hasClass('caca-palavras-selected') ? 1 : 0);\n      }, 0);\n      return total == palavra.length && palavra.length == selecao;\n    }\n  }, {\n    key: \"checkWord\",\n    value: function checkWord(palavra) {\n      var acertou = this.verifyWord(palavra);\n      var classe = acertou ? 'correct' : \"incorrect\";\n      palavra.show();\n      palavra.setClass(classe);\n      return acertou;\n    }\n  }, {\n    key: \"resolveWord\",\n    value: function resolveWord(palavra) {\n      palavra.cells.forEach(function (element) {\n        element.addClass('caca-palavras-selected');\n      });\n    }\n  }, {\n    key: \"addWords\",\n    value: function addWords() {\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = this.palavras[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var palavra = _step3.value;\n          this.addWord(palavra);\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n            _iterator3.return();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"resolve\",\n    value: function resolve(correct) {\n      if (correct) {\n        var _iteratorNormalCompletion4 = true;\n        var _didIteratorError4 = false;\n        var _iteratorError4 = undefined;\n\n        try {\n          for (var _iterator4 = this.palavras[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n            var palavra = _step4.value;\n            this.resolveWord(palavra);\n          }\n        } catch (err) {\n          _didIteratorError4 = true;\n          _iteratorError4 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {\n              _iterator4.return();\n            }\n          } finally {\n            if (_didIteratorError4) {\n              throw _iteratorError4;\n            }\n          }\n        }\n      }\n\n      this.checkWords();\n    }\n  }, {\n    key: \"getAvailableLines\",\n    value: function getAvailableLines() {\n      var excludeLines = [];\n      var _iteratorNormalCompletion5 = true;\n      var _didIteratorError5 = false;\n      var _iteratorError5 = undefined;\n\n      try {\n        for (var _iterator5 = this.palavras[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n          var palavra = _step5.value;\n          excludeLines.push(palavra.i);\n        }\n      } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {\n            _iterator5.return();\n          }\n        } finally {\n          if (_didIteratorError5) {\n            throw _iteratorError5;\n          }\n        }\n      }\n\n      var availableLines = [];\n\n      for (var index = 0; index < this.config.row; index++) {\n        if (excludeLines.indexOf(index) == -1) {\n          availableLines.push(index);\n        }\n      }\n\n      return availableLines;\n    }\n  }, {\n    key: \"getWord\",\n    value: function getWord(palavra) {\n      return this.config.inverter && Math.random() > 0.5 ? palavra.text.split('').reverse().join('') : palavra.text;\n    }\n  }, {\n    key: \"addWord\",\n    value: function addWord(palavra) {\n      var lines = Object(_array_helpers__WEBPACK_IMPORTED_MODULE_2__[\"shuffleArray\"])(this.getAvailableLines());\n      var row = lines[0];\n      var col = Object(_math_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, this.config.col - palavra.length);\n      palavra.setPosition(row, col);\n      var printWord = this.getWord(palavra).toUpperCase();\n\n      for (var i = 0; i < printWord.length; i++) {\n        var letter = printWord.substr(i, 1);\n        var cell = $(\"[data-i=\".concat(row, \"][data-j=\").concat(col + i, \"]\"));\n        cell.html(letter);\n        palavra.addCell(cell);\n      }\n    }\n  }]);\n\n  return CacaPalavras;\n}();\n\nwindow.CacaPalavras = CacaPalavras;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/math.helpers.js":
/*!*****************************!*\
  !*** ./src/math.helpers.js ***!
  \*****************************/
/*! exports provided: getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min)) + min;\n}\n\n\n\n//# sourceURL=webpack:///./src/math.helpers.js?");

/***/ }),

/***/ "./src/string.helpers.js":
/*!*******************************!*\
  !*** ./src/string.helpers.js ***!
  \*******************************/
/*! exports provided: hideWord, randomLetter, replacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideWord\", function() { return hideWord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomLetter\", function() { return randomLetter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replacer\", function() { return replacer; });\n/* harmony import */ var _math_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.helpers */ \"./src/math.helpers.js\");\n/* harmony import */ var _CHAR_MAPS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CHAR_MAPS */ \"./src/CHAR_MAPS.js\");\n\n\n\nfunction hideWord(word) {\n  return word.split('').map(function () {\n    return '*';\n  }).join('');\n}\n\nfunction randomLetter() {\n  return _CHAR_MAPS__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_LIST\"][Object(_math_helpers__WEBPACK_IMPORTED_MODULE_0__[\"getRandomInt\"])(0, _CHAR_MAPS__WEBPACK_IMPORTED_MODULE_1__[\"LETTER_LIST\"].length - 1)];\n}\n\nfunction replacer(word) {\n  var parsed = word;\n\n  for (var key in _CHAR_MAPS__WEBPACK_IMPORTED_MODULE_1__[\"REPLACE_BASE_CHAR_MAP\"]) {\n    if (_CHAR_MAPS__WEBPACK_IMPORTED_MODULE_1__[\"REPLACE_BASE_CHAR_MAP\"].hasOwnProperty(key)) {\n      var value = _CHAR_MAPS__WEBPACK_IMPORTED_MODULE_1__[\"REPLACE_BASE_CHAR_MAP\"][key];\n      parsed = replaceAll(parsed, key, value);\n    }\n  }\n\n  return parsed;\n}\n\nfunction replaceAll(target, search, replacement) {\n  return target.replace(new RegExp(search, 'g'), replacement);\n}\n\n\n\n//# sourceURL=webpack:///./src/string.helpers.js?");

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.less?");

/***/ })

/******/ });