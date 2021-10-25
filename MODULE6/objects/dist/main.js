/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./accessing.js":
/*!**********************!*\
  !*** ./accessing.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { simpleObj } = __webpack_require__(/*! ./sample_data */ \"./sample_data.js\");\n\n// two ways to access:\n// 1. dot notation \n// 2. bracket notation\n\n// ===============================================\n// ========          PRACTICE         ============\n// ===============================================\n\n// 1. access keys from simpleObj in different ways\n\n// 2. if we have a variable: \n//    const myLetter = 'a'; \n//    how do we use the variable to access the value \n//    at 'a' from simpleObj?\n\nwindow.banana = 'ssfsdfsdfsdf'\n\n//# sourceURL=webpack://objects/./accessing.js?");

/***/ }),

/***/ "./combining.js":
/*!**********************!*\
  !*** ./combining.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { computer, box } = __webpack_require__(/*! ./sample_data */ \"./sample_data.js\");\n\n\n// Object.assign\n// spread \n\n\n\n\n\n//# sourceURL=webpack://objects/./combining.js?");

/***/ }),

/***/ "./destructuring.js":
/*!**************************!*\
  !*** ./destructuring.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { backpack } = __webpack_require__(/*! ./sample_data */ \"./sample_data.js\");\n\n// destructuring:\n// if obj is: \n// const obj = { car: 'honda' };\n\n// we grab the value ('honda') of car like so: \n// const car = obj['car'];\n// const { car } = obj;\n\n// destructuring and renaming: \n// const myCar = obj['car'];\n// const { car: myCar } = obj;\n\n// ===============================================\n// ========          PRACTICE         ============\n// ===============================================\n\n// 1. store all contents of the backback in a \n//    variable using destructuring\n// 2. destructure and rename the contents to \n//    myContents\n// 3. does renaming the key change the key in the obj?\n\n//# sourceURL=webpack://objects/./destructuring.js?");

/***/ }),

/***/ "./iterating.js":
/*!**********************!*\
  !*** ./iterating.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { computer } = __webpack_require__(/*! ./sample_data */ \"./sample_data.js\");\n\n// what are the different ways we can interate the obj?\n// lets write some down \n\n// https://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys\n// Object.getOwnPropertyNames(computer);\n// Object.keys(computer);\n\n\n\n//# sourceURL=webpack://objects/./iterating.js?");

/***/ }),

/***/ "./nested.js":
/*!*******************!*\
  !*** ./nested.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { backpack } = __webpack_require__(/*! ./sample_data */ \"./sample_data.js\");\n\n// ===============================================\n// ========          PRACTICE         ============\n// ===============================================\n\n// 1. access the values of the following the \n//    elements in backpack:\n// a. color\n// b. contents\n// c. the contents of the wallet\n// d. the mint flavor\n// e. the return value of pickUpItems\n// f. 38 cents\n\n//# sourceURL=webpack://objects/./nested.js?");

/***/ }),

/***/ "./sample_data.js":
/*!************************!*\
  !*** ./sample_data.js ***!
  \************************/
/***/ ((module) => {

eval("const simpleObj = {\n\ta: 'the first letter',\n\tb: 'the second letter'\n};\n\nconst computer = {\n\tbrand: \"Tandy\",\n\tweight: 22,\n\tworking: false,\n\tcondition: \"mint\",\n\tprice: 2894,\n\tpowerUp() {\n\t\treturn \"the computer now is on\";\n\t},\n\tpowerDown() {\n\t\treturn \"the computer is now off\";\n\t},\n};\n\nconst backpack = {\n  color: \"green\",\n  contents: [\n    \"laptop\",\n    \"paper\",\n    \"phone\",\n    { wallet: [\"money\", \"id\", [\"mastercard\", \"visa card\", \"discover card\"]] },\n    {\n      pockets: {\n        outer: [\"metrocard\", \"tissues\"],\n        inner: {\n          outer: \"ruler\",\n          inner: [\"dental floss\", { mintFlavor: \"peppermint\", number: 33 }],\n        },\n      },\n    },\n  ],\n  zipIt() {\n    return \"it is zipped\";\n  },\n  unZipIt() {\n    console.log(\"some items fell out\");\n    return {\n      pickUpItems() {\n        return [\"lip balm\", \"comb\", \"38 cents\"];\n      },\n    };\n  },\n};\n\nconst box = {\n  brand: \"Tandy\",\n  joystick: \"Classic Vintage 1000\",\n  keyboard: \"Keyfun 5000\",\n  working: \"true\",\n};\n\nmodule.exports = {\n\tsimpleObj, \n\tcomputer,\n\tbackpack,\n\tbox\n};\n\n//# sourceURL=webpack://objects/./sample_data.js?");

/***/ }),

/***/ "./setting.js":
/*!********************!*\
  !*** ./setting.js ***!
  \********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { simpleObj } = __webpack_require__(/*! ./sample_data */ \"./sample_data.js\");\n\n// two ways to set:\n// 1. dot notation \n// 2. bracket notation\n\n// ===============================================\n// ========          PRACTICE         ============\n// ===============================================\n\n// 1. add some new keys to simpleObj in different ways\n\n// 2. if we have an array of tuples (two element arrays):\n//    const tuples = [['the new key', 100], ['anotherKey', 'VALUE']];\n//    iterate the array, and for each tuple set a new \n//    key: value pair in simpleObj\n\n//# sourceURL=webpack://objects/./setting.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _accessing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../accessing */ \"./accessing.js\");\n/* harmony import */ var _accessing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_accessing__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iterating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../iterating */ \"./iterating.js\");\n/* harmony import */ var _iterating__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iterating__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _combining__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../combining */ \"./combining.js\");\n/* harmony import */ var _combining__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_combining__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting */ \"./setting.js\");\n/* harmony import */ var _setting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_setting__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nested */ \"./nested.js\");\n/* harmony import */ var _nested__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nested__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _destructuring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../destructuring */ \"./destructuring.js\");\n/* harmony import */ var _destructuring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_destructuring__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://objects/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;