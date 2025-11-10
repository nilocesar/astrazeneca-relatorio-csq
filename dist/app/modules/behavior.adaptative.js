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
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar DEFAULT_WIDTH = 1920;\nvar DEFAULT_HEIGHT = 1080;\nvar DEFAULT_FONT_SIZE = 22;\nvar MakeResizeAspect = {\n  CONTAIN: 'contain',\n  COVER: 'cover'\n};\nwindow.ContainDimentions = {};\nwindow.CoverDimentions = {};\n/**\r\n * @param {number} _width\r\n * @param {number} _height\r\n * @returns {{ WIDTH: number, HEIGHT: number, RATIO:number, widthProportion:Function, heightProportion:Function, keyProperty:Function }}\r\n */\n\nfunction ResizeHelper(_width, _height) {\n  return {\n    WIDTH: _width,\n    HEIGHT: _height,\n    RATIO: _width / _height,\n    widthProportion: function widthProportion(width) {\n      return width / this.WIDTH * 100;\n    },\n    heightProportion: function heightProportion(height) {\n      return height / this.HEIGHT * 100;\n    },\n    keyProperty: function keyProperty(aspect) {\n      return document.documentElement.clientWidth / document.documentElement.clientHeight > this.RATIO && aspect != MakeResizeAspect.COVER ? 'height' : 'width';\n    }\n  };\n}\n/**\r\n * @param {Array<string>} content\r\n * @returns\r\n */\n\n\nfunction code_block(content) {\n  return ['{', content, '}'].join(' ');\n}\n/**\r\n * @param {{ left: number, top: number, width: number, height: number, fontSize: number }} stylesHolder\r\n * @returns {string} css style\r\n */\n\n\nfunction createCSS(stylesHolder) {\n  var style_width = ['width: ' + stylesHolder.width];\n  var style_height = ['height: ' + stylesHolder.height];\n  var style_left = ['left: ' + stylesHolder.left];\n  var style_top = ['top: ' + stylesHolder.top];\n  var style_right = ['right: ' + stylesHolder.left];\n  var style_bottom = ['bottom: ' + stylesHolder.top];\n  var bsbbx = [\"box-sizing: border-box\"];\n  var style_fontSize = ['font-size: ' + stylesHolder.fontSize];\n  var style_size = [].concat(style_width).concat(style_height).concat(bsbbx).concat(style_fontSize);\n  var style_position = ['position: absolute'].concat(style_left).concat(style_top);\n  var style_horz = ['position: absolute'].concat(style_width).concat(style_left).concat(bsbbx);\n  var style_vert = ['position: absolute'].concat(style_height).concat(style_top).concat(bsbbx);\n  var style_full = [].concat(style_position).concat(style_size);\n  var styleAll = [];\n  styleAll.push('.mr-fontsize ' + code_block(style_fontSize.join('; ')));\n  styleAll.push('.mr-full ' + code_block(style_full.join('; ')));\n  styleAll.push('.mr-horz ' + code_block(style_horz.join('; ')));\n  styleAll.push('.mr-vert ' + code_block(style_vert.join('; ')));\n  styleAll.push('.mr-size ' + code_block(style_size.join('; ')));\n  styleAll.push('.mr-width ' + code_block(style_width.join('; ')));\n  styleAll.push('.mr-height ' + code_block(style_height.join('; ')));\n  styleAll.push('.mr-position ' + code_block(style_position.join('; ')));\n  styleAll.push('.mr-left ' + code_block(style_left.join('; ')));\n  styleAll.push('.mr-top ' + code_block(style_top.join('; ')));\n  styleAll.push('.mr-right ' + code_block(style_right.join('; ')));\n  styleAll.push('.mr-bottom ' + code_block(style_bottom.join('; ')));\n  return styleAll.join('\\n');\n}\n\nfunction createCSSCover(stylesHolder) {\n  var absolute = ['position: absolute'];\n  var style_width = ['width: ' + stylesHolder.width];\n  var style_height = ['height: ' + stylesHolder.height];\n  var style_left = ['left: ' + stylesHolder.left];\n  var style_top = ['top: ' + stylesHolder.top];\n  var style_right = ['right: ' + stylesHolder.left];\n  var style_bottom = ['bottom: ' + stylesHolder.top];\n  var bsbbx = [\"box-sizing: border-box\"];\n  var style_fontSize = ['font-size: ' + stylesHolder.fontSize];\n  var style_size = [].concat(style_width).concat(style_height).concat(bsbbx).concat(style_fontSize);\n  var style_position = absolute.concat(style_left).concat(style_top);\n  var style_horz = absolute.concat(style_width).concat(style_left).concat(bsbbx);\n  var style_vert = absolute.concat(style_height).concat(style_top).concat(bsbbx);\n  var style_full = [].concat(style_position).concat(style_size);\n  var styleAll = [];\n  styleAll.push('.mr-cover-fontsize ' + code_block(style_fontSize.join('; ')));\n  styleAll.push('.mr-cover-full ' + code_block(style_full.join('; ')));\n  styleAll.push('.mr-cover-horz ' + code_block(style_horz.join('; ')));\n  styleAll.push('.mr-cover-vert ' + code_block(style_vert.join('; ')));\n  styleAll.push('.mr-cover-size ' + code_block(style_size.join('; ')));\n  styleAll.push('.mr-cover-width ' + code_block(style_width.join('; ')));\n  styleAll.push('.mr-cover-height ' + code_block(style_height.join('; ')));\n  styleAll.push('.mr-cover-position ' + code_block(style_position.join('; ')));\n  styleAll.push('.mr-cover-left ' + code_block(style_left.join('; ')));\n  styleAll.push('.mr-cover-top ' + code_block(style_top.join('; ')));\n  styleAll.push('.mr-cover-right ' + code_block(style_right.join('; ')));\n  styleAll.push('.mr-cover-bottom ' + code_block(style_bottom.join('; ')));\n  return styleAll.join('\\n');\n}\n/**\r\n * @param {string} property\r\n * @param {number} fontSize\r\n * @param {number} width\r\n * @param {number} height\r\n * @returns {number}\r\n */\n\n\nfunction calculateFont(resizeHelper, _aspect, fontSize, width, height) {\n  var newFontSize = 0;\n\n  if (resizeHelper.keyProperty(_aspect) == 'height') {\n    newFontSize = height / resizeHelper.HEIGHT * fontSize;\n  } else {\n    newFontSize = width / resizeHelper.WIDTH * fontSize;\n  }\n\n  return newFontSize;\n}\n/**\r\n * MakeResize\r\n * \r\n * @param {ResizeHelper} resizeHelper\r\n * @param {{ fontSize: number }} config\r\n * @returns {void} void\r\n */\n\n\nfunction MakeResize(resizeHelper, config) {\n  var _desiredRatio = resizeHelper.RATIO || 1000 / 600;\n\n  var _config = _extends({\n    fontSize: 18,\n    customClasses: {}\n  }, config);\n\n  var _aspect = _config.aspect || MakeResizeAspect.CONTAIN;\n\n  var methods = {};\n  var head = document.querySelector('head');\n  var style = document.createElement('style');\n  head.appendChild(style);\n\n  methods[MakeResizeAspect.CONTAIN] = function (actualWidth, actualHeight) {\n    return actualWidth / actualHeight > _desiredRatio ? {\n      width: actualHeight * _desiredRatio,\n      height: actualHeight\n    } : {\n      width: actualWidth,\n      height: actualWidth / _desiredRatio\n    };\n  };\n\n  methods[MakeResizeAspect.COVER] = function (actualWidth, actualHeight) {\n    return actualWidth / actualHeight > _desiredRatio ? {\n      width: actualWidth,\n      height: actualWidth / _desiredRatio\n    } : {\n      width: actualHeight * _desiredRatio,\n      height: actualHeight\n    };\n  };\n\n  function makeStylesHolder(_aspect, resizeHelper, _config) {\n    var retorno = methods[_aspect](document.documentElement.clientWidth, document.documentElement.clientHeight);\n\n    var width = retorno.width;\n    var height = retorno.height;\n    var stylesHolder = {\n      custom: [],\n      left: (width - document.documentElement.clientWidth).toFixed(2) / -2 + 'px',\n      top: (height - document.documentElement.clientHeight).toFixed(2) / -2 + 'px',\n      width: width + 'px',\n      height: height + 'px',\n      fontSize: calculateFont(resizeHelper, _config.aspect, _config.fontSize, width, height) + 'px'\n    };\n    return stylesHolder;\n  }\n\n  function resize() {\n    var stylesHolder = makeStylesHolder(MakeResizeAspect.CONTAIN, resizeHelper, _config);\n    var stylesHolderCover = makeStylesHolder(MakeResizeAspect.COVER, resizeHelper, _config);\n    window.ContainDimentions = stylesHolder;\n    window.CoverDimentions = stylesHolderCover;\n    stylesHolder.custom = _extends({}, _config.customClasses);\n    style.innerHTML = createCSS(stylesHolder) + createCSSCover(stylesHolderCover);\n    $(window).trigger({\n      type: \"BehaviorAdapt\",\n      BehaviorAdapt: {\n        ContainDimentions: stylesHolder,\n        CoverDimentions: stylesHolderCover\n      }\n    });\n  }\n\n  window.addEventListener('resize', resize);\n  setTimeout(resize, 100);\n}\n\nfunction BehaviorAdapt(largura, altura, font_size) {\n  var _width = isNaN(largura) ? DEFAULT_WIDTH : largura;\n\n  var _height = isNaN(altura) ? DEFAULT_HEIGHT : altura;\n\n  var _font_size = isNaN(font_size) ? DEFAULT_FONT_SIZE : font_size;\n\n  return MakeResize(ResizeHelper(_width, _height), {\n    fontSize: _font_size\n  });\n}\n\nwindow.ResizeHelper = ResizeHelper;\nwindow.BehaviorAdapt = BehaviorAdapt;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });