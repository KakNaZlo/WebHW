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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ({

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(335);

var red = document.querySelector('.red');
red.addEventListener('click', redLightOn);

var redLight = false;
function redLightOn() {
    red.classList.toggle('active');

    if (redLight) {
        redLight = false;
    } else {
        redLight = true;
    }

    if (yellowLight) {
        yellow.classList.toggle('active');
        yellowLight = false;
    } else if (greenLight) {
        green.classList.toggle('active');
        greenActive = false;
    }
}

var yellow = document.querySelector('.yellow');
yellow.addEventListener('click', yellowLightOn);
var yellowLight = false;
function yellowLightOn() {
    yellow.classList.toggle('active');
    if (yellowLight) {
        yellowLight = false;
    } else {
        yellowLight = true;
    }
    if (redLight) {
        red.classList.toggle('active');
        redLight = false;
    } else if (greenLight) {
        green.classList.toggle('active');
        greenLight = false;
    }
}

var green = document.querySelector('.green');
green.addEventListener('click', greenLightOn);
var greenLight = false;
function greenLightOn() {
    green.classList.toggle('active');
    if (greenLight) {
        greenLight = false;
    } else {
        greenLight = true;
    }
    if (yellowLight) {
        yellow.classList.toggle('active');
        yellowLight = false;
    } else if (redLight) {
        red.classList.toggle('active');
        redLight = false;
    }
}

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });