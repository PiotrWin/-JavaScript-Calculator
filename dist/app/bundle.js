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
eval("\n\n$(document).ready(function () {\n\n    var entry = '';\n    var result = '0';\n    var history = '0';\n    var decimal = false;\n    var special = false;\n    var resultField = document.getElementById('result');\n    var historyField = document.getElementById('history');\n\n    var buttons = document.getElementsByTagName('button');\n\n    for (var i = 0; i < buttons.length; i++) {\n        buttons[i].addEventListener(\"click\", function () {\n            entry = this.value;\n            if (entry !== 'ac' && entry !== 'ce' && entry !== '=') {\n                if (!isNaN(parseInt(entry))) {\n                    if (isNaN(parseInt(result)) || result === '0') {\n                        result = '';\n                        if (history === '0') history = '';\n                    }\n                    result += entry;\n                    history += entry;\n                    special = false;\n                } else if (entry === '.' && decimal === false && special === false) {\n                    result += entry;\n                    history += entry;\n                    decimal = true;\n                } else if (result[result.length - 1] !== '.' && entry !== '.' && special === false) {\n                    result = entry;\n                    history += entry;\n                    special = true;\n                    decimal = false;\n                }\n                var sub = history.match(/([-+/*]\\.)|([-+/*][-+/*])/);\n                if (sub != null && entry) {\n                    history = history.slice(0, sub.index + 1) + '0' + history.slice(sub.index + 1);\n                    sub = null;\n                }\n                var ind = history.search(/([+\\-/*]00)/);\n                if (ind > 0 && history[ind] !== '0') history = history.slice(0, ind + 2) + history.slice(ind + 3);\n                ind = history.search(/[-+/*]0[1-9]/);\n                if (ind > 0) history = history.slice(0, ind + 1) + entry + history.slice(ind + 3);\n\n                resultField.innerHTML = result;\n                historyField.innerHTML = history;\n\n                if (result.length > 16 || history.length > 25) {\n                    allClear();\n                    resultField.innerHTML = 'Too many characters!';\n                }\n            } else if (entry === 'ac') allClear();else if (entry === 'ce') clearEntry();else if (entry === '=') computeResult();\n        });\n    }\n    function allClear() {\n        entry = '0';\n        history = '0';\n        result = '0';\n        decimal = false;\n        special = false;\n        resultField.innerHTML = '0';\n        historyField.innerHTML = '0';\n    }\n    function clearEntry() {\n        var id = history.lastIndexOf(result);\n        if (id >= 0) history = history.slice(0, id);\n        if (!isNaN(parseFloat(result)) && !isNaN(parseInt(history[history.length - 1])) || isNaN(parseFloat(result))) {\n            var numbers = history.match(/(\\d+\\.?\\d*)/g);\n            if (numbers != null) result = numbers[numbers.length - 1];\n        } else {\n            var op = history.match(/[-+/*]$/);\n            result = op;\n        }\n        if (history === '') history = '0';\n        decimal = false;\n        special = false;\n        if (result === null) resultField.innerHTML = '0';else resultField.innerHTML = result;\n        historyField.innerHTML = history;\n    }\n\n    function computeResult() {\n        var res = Math.round(eval(history) * 10000) / 10000;\n        if (res == Infinity || isNaN(res)) {\n            resultField.innerHTML = 'ERROR';\n            historyField.innerHTML = 'Division by zero!';\n        } else {\n            resultField.innerHTML = res;\n            historyField.innerHTML = history + '=' + res;\n        }\n        history = '0';\n        result = '0';\n        decimal = false;\n        special = false;\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2luZGV4LmpzPzliZGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIFxyXG5sZXQgZW50cnkgPSAnJztcclxubGV0IHJlc3VsdCA9ICcwJztcclxubGV0IGhpc3RvcnkgPSAnMCc7XHJcbmxldCBkZWNpbWFsID0gZmFsc2U7XHJcbmxldCBzcGVjaWFsID0gZmFsc2U7XHJcbmxldCByZXN1bHRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcclxubGV0IGhpc3RvcnlGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5Jyk7XHJcblxyXG5sZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgYnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZW50cnkgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChlbnRyeSAhPT0gJ2FjJyAmJiBlbnRyeSAhPT0gJ2NlJyAmJiBlbnRyeSAhPT0gJz0nKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoZW50cnkpKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHBhcnNlSW50KHJlc3VsdCkpIHx8IChyZXN1bHQgPT09ICcwJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGlzdG9yeSA9PT0gJzAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5ICs9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSAnLicgJiYgZGVjaW1hbCA9PT0gZmFsc2UgJiYgc3BlY2lhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBlbnRyeTtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICBkZWNpbWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHRbcmVzdWx0Lmxlbmd0aC0xXSAhPT0gJy4nICYmIGVudHJ5ICE9PSAnLicgJiYgc3BlY2lhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeSArPSBlbnRyeTtcclxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZGVjaW1hbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzdWIgPSBoaXN0b3J5Lm1hdGNoKC8oWy0rLypdXFwuKXwoWy0rLypdWy0rLypdKS8pO1xyXG4gICAgICAgICAgICBpZiAoc3ViICE9IG51bGwgJiYgZW50cnkpIHtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LnNsaWNlKDAsIHN1Yi5pbmRleCsxKSArICcwJyArIGhpc3Rvcnkuc2xpY2Uoc3ViLmluZGV4KzEpO1xyXG4gICAgICAgICAgICAgICAgc3ViID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgaW5kID0gaGlzdG9yeS5zZWFyY2goLyhbK1xcLS8qXTAwKS8pO1xyXG4gICAgICAgICAgICBpZiAoaW5kID4gMCAmJiBoaXN0b3J5W2luZF0gIT09ICcwJylcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LnNsaWNlKDAsIGluZCsyKSArIGhpc3Rvcnkuc2xpY2UoaW5kKzMpO1xyXG4gICAgICAgICAgICBpbmQgPSBoaXN0b3J5LnNlYXJjaCgvWy0rLypdMFsxLTldLyk7XHJcbiAgICAgICAgICAgIGlmIChpbmQgPiAwKVxyXG4gICAgICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3Rvcnkuc2xpY2UoMCwgaW5kKzEpICsgZW50cnkgKyBoaXN0b3J5LnNsaWNlKGluZCszKTtcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgaGlzdG9yeUZpZWxkLmlubmVySFRNTCA9IGhpc3Rvcnk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDE2IHx8IGhpc3RvcnkubGVuZ3RoID4gMjUpIHtcclxuICAgICAgICAgICAgICAgIGFsbENsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRGaWVsZC5pbm5lckhUTUwgPSAnVG9vIG1hbnkgY2hhcmFjdGVycyEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSAnYWMnKVxyXG4gICAgICAgICAgICBhbGxDbGVhcigpO1xyXG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSAnY2UnKVxyXG4gICAgICAgICAgICBjbGVhckVudHJ5KCk7XHJcbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09ICc9JylcclxuICAgICAgICAgICAgY29tcHV0ZVJlc3VsdCgpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWxsQ2xlYXIoKSB7XHJcbiAgICBlbnRyeSA9ICcwJztcclxuICAgIGhpc3RvcnkgPSAnMCc7XHJcbiAgICByZXN1bHQgPSAnMCc7XHJcbiAgICBkZWNpbWFsID0gZmFsc2U7XHJcbiAgICBzcGVjaWFsID0gZmFsc2U7XHJcbiAgICByZXN1bHRGaWVsZC5pbm5lckhUTUwgPSAnMCc7XHJcbiAgICBoaXN0b3J5RmllbGQuaW5uZXJIVE1MID0gJzAnO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyRW50cnkoKSB7XHJcbiAgICBsZXQgaWQgPSBoaXN0b3J5Lmxhc3RJbmRleE9mKHJlc3VsdCk7XHJcbiAgICBpZiAoaWQgPj0gMClcclxuICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5zbGljZSgwLCBpZCk7XHJcbiAgICBpZiAoKCFpc05hTihwYXJzZUZsb2F0KHJlc3VsdCkpICYmICFpc05hTihwYXJzZUludChoaXN0b3J5W2hpc3RvcnkubGVuZ3RoLTFdKSkpIHx8IGlzTmFOKHBhcnNlRmxvYXQocmVzdWx0KSkpIHtcclxuICAgICAgICBsZXQgbnVtYmVycyA9IGhpc3RvcnkubWF0Y2goLyhcXGQrXFwuP1xcZCopL2cpO1xyXG4gICAgICAgIGlmIChudW1iZXJzICE9IG51bGwpIHJlc3VsdCA9IG51bWJlcnNbbnVtYmVycy5sZW5ndGgtMV07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgb3AgPSBoaXN0b3J5Lm1hdGNoKC9bLSsvKl0kLyk7XHJcbiAgICAgICAgcmVzdWx0ID0gb3A7XHJcbiAgICB9XHJcbiAgICBpZiAoaGlzdG9yeSA9PT0gJycpXHJcbiAgICAgICAgaGlzdG9yeSA9ICcwJztcclxuICAgIGRlY2ltYWwgPSBmYWxzZTtcclxuICAgIHNwZWNpYWwgPSBmYWxzZTtcclxuICAgIGlmIChyZXN1bHQgPT09IG51bGwpXHJcbiAgICAgICAgcmVzdWx0RmllbGQuaW5uZXJIVE1MID0gJzAnO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9IHJlc3VsdDtcclxuICAgIGhpc3RvcnlGaWVsZC5pbm5lckhUTUwgPSBoaXN0b3J5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlUmVzdWx0KCkge1xyXG4gICAgbGV0IHJlcyA9IE1hdGgucm91bmQoZXZhbChoaXN0b3J5KSoxMDAwMCkvMTAwMDA7XHJcbiAgICBpZiAocmVzID09IEluZmluaXR5IHx8IGlzTmFOKHJlcykpIHtcclxuICAgICAgICByZXN1bHRGaWVsZC5pbm5lckhUTUwgPSAnRVJST1InO1xyXG4gICAgICAgIGhpc3RvcnlGaWVsZC5pbm5lckhUTUwgPSAnRGl2aXNpb24gYnkgemVybyEnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0RmllbGQuaW5uZXJIVE1MID0gcmVzO1xyXG4gICAgICAgIGhpc3RvcnlGaWVsZC5pbm5lckhUTUwgPSBoaXN0b3J5ICsgJz0nICsgcmVzO1xyXG4gICAgfVxyXG4gICAgaGlzdG9yeSA9ICcwJztcclxuICAgIHJlc3VsdCA9ICcwJztcclxuICAgIGRlY2ltYWwgPSBmYWxzZTtcclxuICAgIHNwZWNpYWwgPSBmYWxzZTtcclxufVxyXG5cclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);