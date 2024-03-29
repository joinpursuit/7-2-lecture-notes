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

/***/ "./src/animal.js":
/*!***********************!*\
  !*** ./src/animal.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// NAIVE IMPLEMENTATION OF A PET PROFILE\nlet buttons = {\n    name: \"Buttons\",\n    type : \"miniature horse\",\n    age: 10,\n    greeting: \"sniff sniff\",\n    walk: \"clip clop, clip clop\",\n}\n\n// WHY IS THE ABOVE NOT IDEAL?\n\n// OBJECT-ORIENTED IMPLEMENTATION OF A ANIMAL CLASS\n\n// const animal = new Animal()\nclass Animal {\n    constructor(name, type, age, color, isFriendly = false) {\n        this.name = name;\n        this._type = type;\n        this.age = typeof age != \"number\" ? 1 : age;\n        this.color = (color || \"black\");\n        this.isFriendly = isFriendly;\n    }\n\n    //ADD METHODS TO ANIMAL CLASS\n    walk() {\n        console.log(this);\n        console.log(\"clip, clop\")\n    }\n\n    greet(otherBeing) {\n        console.log(`Sniff sniff, ${otherBeing.name}, I like your ${otherBeing.color} fur.`);\n    }\n\n    ageUp() {\n        this.age++\n    }\n    \n\n    // ADD MULTIPLE METHODS TO OUR CLASS AND PASS THEM ARGUEMENTS\n\n    // CREATE PROPERTIES ON OUR CLASSES INSIDE THE CONSTRUCTOR\n\n    // CUSTOMIZE EACH INSTANCE (PROPERTIES AND METHODS) OF OUR CLASS\n\n    // ADD DEFAULT VALUES TO OUR INSTANCES (IN CONSTRUCTOR)\n\n    // MODIFY OUR METHOODS SO THAT OUR OBJECTS CAN INTERACT WITH OTHER OBJECTS\n\n}\n//WHY IS THIS BETTER?\n\n// CONSOLE.LOG NEW INSTANCES OF OUR CLASS\n\n// const fluffy = new Animal(\"Fluffy\", \"miniature horse\", 4);\n// console.log(fluffy)\n// console.log(fluffy.color)\n// console.log(fluffy.type)\n// fluffy.walk()\n// fluffy.greet(\"Fido\")\n// console.log(fluffy.age) // before age up\n// fluffy.ageUp()\n// fluffy.ageUp()\n// fluffy.ageUp()\n// console.log(fluffy.age) // after age up\n// const fido = new Animal(\"Fido\", \"dog\", 12, \"white\", false)\n// console.log(fido)\n// fluffy.greet(fido)\n// fido.greet(fluffy)\n\nclass StringExtra {\n    static reverse(str) {\n      return str.split(\"\").reverse().join(\"\");\n    }\n    static description =\n      \"I have some extra methods for doing things with strings\";\n}\n\n\n// console.log(StringExtra.reverse(\"I palindrome I\"));\n\n// console.log(StringExtra.description);\n\n \n\n\n// console.log(fido.age)\n\n\n// INVOKE INSTANCE METHODS ON OUR NEW INSTANCES OF THE ANIMAL CLASS\n\n// INITIALIZE NEW INSTANCES OF OUR NOW CUSTOMIZABLE CLASS PASSING IT PARAMETERS\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);\n\n//# sourceURL=webpack://oop/./src/animal.js?");

/***/ }),

/***/ "./src/baskets.js":
/*!************************!*\
  !*** ./src/baskets.js ***!
  \************************/
/***/ (() => {

eval("// Different ways of invoking a function. \n// 1. method style        --- instance.method()\n// 2. function style      --- method()\n// 3. constructor style   --- new Animal()\n// 4. bind-time style with call() or apply() --- instance.method.call(context) \n\n// `this` inside fn with 4 different invocation methods?\n// 1. the \"receiver\" or the \"caller\"\n// \t\tconst bird = new Animal('birdie', 1, 'yellow');\n// \t\tbird.greet(); --- METHOD stlye \n// \t\tin this example, `bird` is the receiver/caller\n//    if we drop a console log inside the `greet` fn, \n//    we'd see `this` is the bird instance defined above\n// 2. global/window/undefined\n// \t\twhen invoking an fn \"function\" style, the context\n//    \tinside the function is undefined (or something you \n// \t\tdidn't intend on using, like window or global).\n// \t  const bird = new Animal('birdie', 1, 'yellow');\n// \t  const theFn = bird.greet;\n//    theFn(); ---- FUNCTION style\n// 3. the instance being created\n// \t\tconst bird = new Animal(); ---- CONSTRUCTOR style \n// 4. the first argument to `call` or `apply`\n// \t\tconst bird = new Animal(); ---- CONSTRUCTOR style \n//\t\tbird.greet.call(bird);\n//\t\tbird.greet.apply(bird);\n\n\n// with POJO\nconst FruitBasket = {\n\tfruits: ['orange', 'orange', 'orange', 'banana', 'banana', 'apple'],\n\taddFruit(fruit) {\n\t\tconsole.log(this);\n\t\tthis.fruits.push(fruit);\n\t}\n}\n\n// const listOfFruits = FruitBasket.fruits;\n// console.log(listOfFruits);\n\n// ---------- method style invocation ----------\n// FruitBasket.addFruit('watermelon');\n// console.log(listOfFruits);\n\n// ------- function style invocation ----------- \n// const theFunction = FruitBasket.addFruit;\n// theFunction('melon');\n// console.log(listOfFruits);\n\n\n\n\nclass VeggieBasket {\n\tconstructor() {\n\t\tthis.veggies = ['zucchini', 'pepper', 'carrot', 'celery'];\n\t}\n\n\taddVeggie(veggie) {\n\t\tthis.veggies.push(veggie);\n\t}\n}\n\n// ----- contructor style invocation -----------\nconst veggiesBasketInstance = new VeggieBasket();\nconst listOfVeggies = veggiesBasketInstance.veggies;\n// console.log(listOfVeggies);\n\n// ---------- method style invocation ----------\n// veggiesBasketInstance.addVeggie('potato');\n// console.log(listOfVeggies);\n\n// ------- function style invocation ----------- \n// const theFunction = veggiesBasketInstance.addVeggie;\n// theFunction('lettuce'); // LOST CONTEXT\n// console.log(listOfVeggies);\n\n// ------- call() and apply() ------------------\n// ---- before call and apply cover binding ----\n// ---- bind\nconst unboundFn = veggiesBasketInstance.addVeggie; // NOT INVOKING\nconst boundFn = unboundFn.bind(veggiesBasketInstance); \nboundFn('banana'); // function style ... but now we have ctx \n\nconst smallBag = { veggies: ['CANDY'] };\nconst boundAddVegToSmallBag = unboundFn.bind(smallBag);\n// \nboundAddVegToSmallBag('spinach');\nboundAddVegToSmallBag('tomato');\nconsole.log(smallBag);\n\n\n// ---- call and apply\nconst someOtherVeggieBasket = new VeggieBasket();\nconst theFn = veggiesBasketInstance.addVeggie;\n\n// the next three lines do the same thing.\ntheFn.call(someOtherVeggieBasket, 'sweet potatoes');\ntheFn.apply(someOtherVeggieBasket, ['salt potatoes']); // apply - array \ntheFn.bind(someOtherVeggieBasket)('sugar potatoes'); // call - comma\n\n\nconst theNewFn = someOtherVeggieBasket.addVeggie;\nconst blueberryAdditionFn = theNewFn.bind(someOtherVeggieBasket);\nblueberryAdditionFn('blueberries');\n\nconsole.log(someOtherVeggieBasket)\n\n//# sourceURL=webpack://oop/./src/baskets.js?");

/***/ }),

/***/ "./src/black_jack.js":
/*!***************************!*\
  !*** ./src/black_jack.js ***!
  \***************************/
/***/ (() => {

eval("class Card {\n\tconstructor(face, value, suit) {\n\t  this.face = face;\n\t  this.value = value;\n\t  this.suit = suit;\n\t}\n}\n\nclass DeckOfCards {\n\tstatic buildNewPlayingCardsDeck() {\n\t\tconst cards = [];\n\t\tconst suits = [\"Hearts\", \"Diamonds\", \"Clubs\", \"Spades\"];\n\t\tfor (let j = 0; j < suits.length; j++) {\n\t\t\tfor (let i = 1; i <= 13; i++) {\n\t\t\t\tif (i === 1) {\n\t\t\t\t\tcards.push(new Card(\"Ace\", 11, suits[j]));\n\t\t\t\t} else if (i === 11) {\n\t\t\t\t\tcards.push(new Card(\"Jack\", 10, suits[j]));\n\t\t\t\t} else if (i === 12) {\n\t\t\t\t\tcards.push(new Card(\"Queen\", 10, suits[j]));\n\t\t\t\t} else if (i === 13) {\n\t\t\t\t\tcards.push(new Card(\"King\", 10, suits[j]));\n\t\t\t\t} else {\n\t\t\t\t\tcards.push(new Card(i, i, suits[j]));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t// factory method, creates and returns instance \n\t\treturn new DeckOfCards(cards);\n\t}\n\n\tstatic buildUnoDeck() {\n\t\treturn [1,2,3,4].map(() => {\n\n\t\t});\n\t\t// static and not factory can be used for whatever you want\n\t}\n\n\tconstructor(cards = []) {\n\t\tthis.cards = cards;\n\t\tthis.shuffle();\n\t}\n\n\tshuffle() {\n\t\t// this... \n\t\tlet m = this.cards.length;\n\t\tlet i = 0;\n\t\t// While there remain elements to shuffle…\n\t\twhile (m) {\n\t\t\t// Pick a remaining element…\n\t\t\ti = Math.floor(Math.random() * m--);\n\n\t\t\t// And swap it with the current element.\n\t\t\t[this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];\n\t\t}\n\t\treturn this.cards;\n\t}\n}\n  \nconst deck = DeckOfCards.buildNewPlayingCardsDeck();\n// console.log(deck);\nwindow.DeckOfCards = DeckOfCards;\n\n//# sourceURL=webpack://oop/./src/black_jack.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mythical_creature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mythical_creature */ \"./src/mythical_creature.js\");\n/* harmony import */ var _baskets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baskets */ \"./src/baskets.js\");\n/* harmony import */ var _baskets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_baskets__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _black_jack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./black_jack */ \"./src/black_jack.js\");\n/* harmony import */ var _black_jack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_black_jack__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://oop/./src/index.js?");

/***/ }),

/***/ "./src/mythical_creature.js":
/*!**********************************!*\
  !*** ./src/mythical_creature.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ \"./src/animal.js\");\n\n\n// Animal class\n// properties: name, _type, age, color, isFriendly\n// methods: walk(), greet(), ageUp()\n\nclass MythicalCreature extends _animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor(name, _type, age, color, isFriendly, walkStyle, isMagic) {\n\t\t// call the animal parent constructor, \n\t\t// cause we still names and ages \n\t\tsuper(name, _type, age, color, isFriendly);\n\t\t\n\t\t// add these attrs to the instance \n\t\tthis.walkStyle = walkStyle;\n\t\tthis.hasMagicAbilities = isMagic;\n\t\t\n\t\t// this.delete('name')\n\t}\n\t\n\tgrantWish(wish) {\n\t\tconsole.log(`I have granted you your wish to ${wish}`);\n\t}\n\n\twalk() {\n\t\t// overwriting the Animal walk func \n\t\tconsole.log(`💫✨🌟 ${this.walkStyle} 💫✨🌟 `);\n\t}\n\n\tgreet(otherBeing) {\n\t\t// call the animal instance greet function, with the same arg\n\t\tsuper.greet(otherBeing);\n\t\tconsole.log(\"I am very pleased to see you today!\");\n\t}\n}\n\nwindow.MythicalCreature = MythicalCreature;\n\nwindow.bird = new _animal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Birdie', 'bird', 1, 'blue');\n// name, _type, age, color, isFriendly, walkStyle, isMagic\nwindow.chips = new MythicalCreature(\"Chips\", \"unicorn\", '', \"iridescent white\", true, 'fancy walk', true);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MythicalCreature);\n\n\n//# sourceURL=webpack://oop/./src/mythical_creature.js?");

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