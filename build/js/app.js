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
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/demo.css":
/*!**************************!*\
  !*** ./src/css/demo.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nError: Didn't get a result from child compiler\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:311:23\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:343:11\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:681:15\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:33:1)\\n    at AsyncSeriesHook.lazyCompileHook (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:678:31\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1423:35\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:182:20\\n    at context.callback (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:311:14\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:343:11\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:681:15\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:33:1)\\n    at AsyncSeriesHook.lazyCompileHook (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:678:31\");\n\n//# sourceURL=webpack:///./src/css/demo.css?");

/***/ }),

/***/ "./src/css/demo2.less":
/*!****************************!*\
  !*** ./src/css/demo2.less ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/demo2.less?");

/***/ }),

/***/ "./src/css/iconfont.css":
/*!******************************!*\
  !*** ./src/css/iconfont.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nError: Didn't get a result from child compiler\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:311:23\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:343:11\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:681:15\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:33:1)\\n    at AsyncSeriesHook.lazyCompileHook (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:678:31\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at AsyncSeriesHook.lazyCompileHook (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:1423:35\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:6:1)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:182:20\\n    at context.callback (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:111:13)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\mini-css-extract-plugin\\\\dist\\\\loader.js:311:14\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:343:11\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:681:15\\n    at AsyncSeriesHook.eval [as callAsync] (eval at create (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:33:1)\\n    at AsyncSeriesHook.lazyCompileHook (D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:154:20)\\n    at D:\\\\DESK\\\\JavaScript\\\\Webpack\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js:678:31\");\n\n//# sourceURL=webpack:///./src/css/iconfont.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module1 */ \"./src/js/module1.js\");\n/* harmony import */ var _module2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module2 */ \"./src/js/module2.js\");\n/* harmony import */ var _module3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module3 */ \"./src/js/module3.js\");\n/* harmony import */ var _json_test_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json/test.json */ \"./src/json/test.json\");\nvar _json_test_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../json/test.json */ \"./src/json/test.json\", 1);\n/* harmony import */ var _css_demo_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/demo.css */ \"./src/css/demo.css\");\n/* harmony import */ var _css_demo_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_demo_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_demo2_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/demo2.less */ \"./src/css/demo2.less\");\n/* harmony import */ var _css_iconfont_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/iconfont.css */ \"./src/css/iconfont.css\");\n/* harmony import */ var _css_iconfont_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_iconfont_css__WEBPACK_IMPORTED_MODULE_6__);\n/**\r\n * app.js是webpack的入口，所有外部文件(js、json、css、less等等)都需要在这里引入使用\r\n */\r\n\r\n\r\n\r\n\r\n// ES6模块化对于JSON文件是默认暴露，JSON文件无需写暴露语法，自动为默认暴露\r\n\r\n\r\n// 引入css\r\n//ERROR:You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\r\n\r\n\r\n\r\n\r\n\r\nObject(_module1__WEBPACK_IMPORTED_MODULE_0__[\"sum\"])(1, 2);\r\nObject(_module1__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(3, 4);\r\nconsole.log(_module2__WEBPACK_IMPORTED_MODULE_1__[\"data\"]);\r\nconsole.log(_module2__WEBPACK_IMPORTED_MODULE_1__[\"message\"]);\r\nconsole.log(_module3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n\r\n// webpack不会将es6转为es5，只能进行模块化处理，即不会干babel的活\r\nconst a = () => {\r\n    console.log('@2022年9月24日@');\r\n};\r\nconst { address } = _module3__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\nconsole.log(_json_test_json__WEBPACK_IMPORTED_MODULE_3__);\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/module1.js":
/*!***************************!*\
  !*** ./src/js/module1.js ***!
  \***************************/
/*! exports provided: sum, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n//module1使用分别暴露\r\nfunction sum(a, b) {\r\n    console.log(a + b);\r\n}\r\nfunction sub(a, b) {\r\n    console.log(a - b);\r\n}\n\n//# sourceURL=webpack:///./src/js/module1.js?");

/***/ }),

/***/ "./src/js/module2.js":
/*!***************************!*\
  !*** ./src/js/module2.js ***!
  \***************************/
/*! exports provided: data, message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"message\", function() { return msg; });\n//module2使用统一暴露\r\n\r\nconst data = 'abcd';\r\nconst msg = 'hello, 123';\r\n\n\n//# sourceURL=webpack:///./src/js/module2.js?");

/***/ }),

/***/ "./src/js/module3.js":
/*!***************************!*\
  !*** ./src/js/module3.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//module3使用默认暴露\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    name: 'cde',\r\n    address: '广州',\r\n    subjects: ['前端', 'Java', '数据结构']\r\n});\n\n//# sourceURL=webpack:///./src/js/module3.js?");

/***/ }),

/***/ "./src/json/test.json":
/*!****************************!*\
  !*** ./src/json/test.json ***!
  \****************************/
/*! exports provided: name, age, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"老刘\\\",\\\"age\\\":18}\");\n\n//# sourceURL=webpack:///./src/json/test.json?");

/***/ })

/******/ });