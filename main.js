/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction food(that){\n  console.log ('food');\n  const foodCard1 = document.createElement('foodCard');\n  foodCard1.classList.add('foodCard1');\n  foodCard1.textContent = 'Hmm';\n  that.pageContent.appendChild(foodCard1);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (food);\n\n//# sourceURL=webpack://restaurant-page/./src/food.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food */ \"./src/food.js\");\n\n\n(function start() {\n  let display = {\n    activeTab: {\n      home: 1,\n      smoothies: 0,\n      food: 0,\n      contact: 0,\n    },\n\n    init: function () {\n      this.cache();\n      this.title();\n      this.tabButtons();\n      this.content();\n      this.bindEvents();\n    },\n\n    cache: function () {\n      this.page = document.getElementById(\"content\");\n      this.home = document.getElementsByClassName(\"home\");\n      this.smoothies = document.getElementsByClassName(\"drink\");\n      this.food = document.getElementsByClassName(\"food\");\n      this.contact = document.getElementsByClassName(\"contactUs\");\n    },\n\n    bindEvents: function () {\n      document\n        .getElementById(\"content\")\n        .addEventListener(\"click\", this.tabSwitch.bind(this));\n    },\n\n    title: function () {\n      this.page.classList.add(\"header\");\n      this.restaurantName = document.createElement(\"button\");\n      this.restaurantName.classList.add(\"rest-name\");\n      this.restaurantName.textContent = \"Smoothies and Stuff\";\n      this.page.appendChild(this.restaurantName);\n    },\n\n    tabButtons: function () {\n      this.homeButton = document.createElement(\"button\");\n      this.homeButton.classList.add(\"home\");\n      this.homeButton.textContent = \"Home\";\n      this.page.appendChild(this.homeButton);\n      this.drinkButton = document.createElement(\"button\");\n      this.drinkButton.classList.add(\"drink\");\n      this.drinkButton.textContent = \"Smoothies\";\n      this.page.appendChild(this.drinkButton);\n      this.foodButton = document.createElement(\"button\");\n      this.foodButton.classList.add(\"food\");\n      this.foodButton.textContent = \"Food\";\n      this.page.appendChild(this.foodButton);\n      this.contactButton = document.createElement(\"button\");\n      this.contactButton.classList.add(\"contactUs\");\n      this.contactButton.textContent = \"Contact Us\";\n      this.page.appendChild(this.contactButton);\n    },\n\n    content: function () {\n      this.pageContent = document.createElement(\"div\");\n      this.pageContent.classList.add(\"pageContent\");\n      this.page.appendChild(this.pageContent);\n    },\n\n    tabSwitch: function (event) {\n      let classname = event.target.closest(\"button\").className;\n\n      if (classname === \"home\") {\n        this.activeTab.home = 1;\n        home.bind(this);\n        console.log(this.activeTab.food);\n      } else if (classname === \"food\") {\n        this.activeTab.food = 1;\n        console.log(this.activeTab.food);\n        (0,_food__WEBPACK_IMPORTED_MODULE_0__.default)(this);\n      }\n    },\n\n    //reset activeTabs(class)\n\n    //this.activeTab.home = 0, .food = 0 etc\n    //this.activeTab.class = 1\n\n\n    //clear page()\n  };\n\n  display.init();\n})();\n\nfunction home() {\n  console.log(\"home\");\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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