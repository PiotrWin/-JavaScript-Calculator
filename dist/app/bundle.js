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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* TODO:\r\n    - wyeliminować możliwość wpisania zera i cyfry po znaku, np. 0+06\r\n    - funkcja clearEntry()\r\n    - obliczanie wyniku\r\n    - uaktualnienie historii po wyniku np. 1+1=2\r\n    - czyszczenie po wpisaniu czegoś gdy obliczony byl wynik\r\n            np. kolejna flaga (calculated)\r\n    - zaokrąglanie wyniku\r\n    - maksymalna liczba znaków na ekranie (if znaki > max clearAll?)\r\n*/\n\nvar entry = '';\nvar result = '0';\nvar history = '0';\nvar decimal = false;\nvar special = false;\n\nvar buttons = document.getElementsByTagName('button');\n\nfor (var i = 0; i < buttons.length; i++) {\n    buttons[i].addEventListener(\"click\", function () {\n        entry = this.value;\n        if (entry !== 'ac' && entry !== 'ce' && entry !== '=') {\n            if (!isNaN(parseInt(entry))) {\n                if (result === '0' && result.length == 1) {\n                    result = '';\n                    history = '';\n                }\n                if (!(entry == 0 && result.match(/\\W0/g) !== null && result.length <= 2)) {\n                    if (!(entry == 0 && history[history.length - 1] == '/')) {\n                        result += entry;\n                        history += entry;\n                        special = false;\n                    }\n                }\n            } else if (result !== '' && entry === '.' && decimal === false && special === false) {\n                result += entry;\n                history += entry;\n                decimal = true;\n            } else if (result !== '' && result[result.length - 1] !== '.' && entry !== '.' && special === false) {\n                result = entry;\n                history += entry;\n                special = true;\n                decimal = false;\n            }\n            document.getElementById('result').innerHTML = result;\n            document.getElementById('history').innerHTML = history;\n        } else if (entry === 'ac') {\n            allClear();\n        } else if (entry === 'ce') {\n            //clearEntry();\n        } else if (entry === '=') {\n            // RÓWNOŚĆ\n        }\n    });\n}\n\nfunction allClear() {\n    entry = '';\n    history = '0';\n    result = '0';\n    document.getElementById('result').innerHTML = '0';\n    document.getElementById('history').innerHTML = '0';\n}\nfunction clearEntry() {}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2luZGV4LmpzPzliZGMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogVE9ETzpcclxuICAgIC0gd3llbGltaW5vd2HEhyBtb8W8bGl3b8WbxIcgd3Bpc2FuaWEgemVyYSBpIGN5ZnJ5IHBvIHpuYWt1LCBucC4gMCswNlxyXG4gICAgLSBmdW5rY2phIGNsZWFyRW50cnkoKVxyXG4gICAgLSBvYmxpY3phbmllIHd5bmlrdVxyXG4gICAgLSB1YWt0dWFsbmllbmllIGhpc3RvcmlpIHBvIHd5bmlrdSBucC4gMSsxPTJcclxuICAgIC0gY3p5c3pjemVuaWUgcG8gd3Bpc2FuaXUgY3plZ2/FmyBnZHkgb2JsaWN6b255IGJ5bCB3eW5pa1xyXG4gICAgICAgICAgICBucC4ga29sZWpuYSBmbGFnYSAoY2FsY3VsYXRlZClcclxuICAgIC0gemFva3LEhWdsYW5pZSB3eW5pa3VcclxuICAgIC0gbWFrc3ltYWxuYSBsaWN6YmEgem5ha8OzdyBuYSBla3JhbmllIChpZiB6bmFraSA+IG1heCBjbGVhckFsbD8pXHJcbiovXHJcblxyXG5cclxubGV0IGVudHJ5ID0gJyc7XHJcbmxldCByZXN1bHQgPSAnMCc7XHJcbmxldCBoaXN0b3J5ID0gJzAnO1xyXG5sZXQgZGVjaW1hbCA9IGZhbHNlO1xyXG5sZXQgc3BlY2lhbCA9IGZhbHNlO1xyXG5cclxubGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGVudHJ5ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoZW50cnkgIT09ICdhYycgJiYgZW50cnkgIT09ICdjZScgJiYgZW50cnkgIT09ICc9Jykge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGVudHJ5KSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICgocmVzdWx0ID09PSAnMCcgJiYgcmVzdWx0Lmxlbmd0aCA9PSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghKGVudHJ5ID09IDAgJiYgcmVzdWx0Lm1hdGNoKC9cXFcwL2cpICE9PSBudWxsICYmIHJlc3VsdC5sZW5ndGggPD0gMikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbnRyeSA9PSAwICYmIGhpc3RvcnlbaGlzdG9yeS5sZW5ndGgtMV0gPT0gJy8nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0ICE9PSAnJyAmJiBlbnRyeSA9PT0gJy4nICYmIGRlY2ltYWwgPT09IGZhbHNlICYmIHNwZWNpYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5ICs9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgZGVjaW1hbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0ICE9PSAnJyAmJiByZXN1bHRbcmVzdWx0Lmxlbmd0aC0xXSAhPT0gJy4nICYmIGVudHJ5ICE9PSAnLicgJiYgc3BlY2lhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeSArPSBlbnRyeTtcclxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGVjaW1hbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5JykuaW5uZXJIVE1MID0gaGlzdG9yeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09ICdhYycpIHtcclxuICAgICAgICAgICAgYWxsQ2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09ICdjZScpIHtcclxuICAgICAgICAgICAgLy9jbGVhckVudHJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSAnPScpIHtcclxuICAgICAgICAgICAgLy8gUsOTV05PxZrEhlxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbENsZWFyKCkge1xyXG4gICAgZW50cnkgPSAnJztcclxuICAgIGhpc3RvcnkgPSAnMCc7XHJcbiAgICByZXN1bHQgPSAnMCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykuaW5uZXJIVE1MID0gJzAnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKS5pbm5lckhUTUwgPSAnMCc7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJFbnRyeSgpIHtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);