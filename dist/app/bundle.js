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
eval("\n\n/* TODO:\r\n    - nothing ;)\r\n*/\n\nvar entry = '';\nvar result = '0';\nvar history = '0';\nvar decimal = false;\nvar special = false;\nvar resultField = document.getElementById('result');\nvar historyField = document.getElementById('history');\n\nvar buttons = document.getElementsByTagName('button');\n\nfor (var i = 0; i < buttons.length; i++) {\n    buttons[i].addEventListener(\"click\", function () {\n        entry = this.value;\n        if (entry !== 'ac' && entry !== 'ce' && entry !== '=') {\n            if (!isNaN(parseInt(entry))) {\n                if (isNaN(parseInt(result)) || result === '0') {\n                    result = '';\n                    if (history === '0') history = '';\n                }\n                result += entry;\n                history += entry;\n                special = false;\n            } else if (entry === '.' && decimal === false && special === false) {\n                result += entry;\n                history += entry;\n                decimal = true;\n            } else if (result[result.length - 1] !== '.' && entry !== '.' && special === false) {\n                result = entry;\n                history += entry;\n                special = true;\n                decimal = false;\n            }\n            var sub = history.match(/([-+/*]\\.)|([-+/*][-+/*])/);\n            if (sub != null && entry) {\n                history = history.slice(0, sub.index + 1) + '0' + history.slice(sub.index + 1);\n                sub = null;\n            }\n            var ind = history.search(/([+\\-/*]00)/);\n            if (ind > 0 && history[ind] !== '0') history = history.slice(0, ind + 2) + history.slice(ind + 3);\n            ind = history.search(/[-+/*]0[1-9]/);\n            if (ind > 0) history = history.slice(0, ind + 1) + entry + history.slice(ind + 3);\n\n            resultField.innerHTML = result;\n            historyField.innerHTML = history;\n\n            if (result.length > 16 || history.length > 25) {\n                allClear();\n                resultField.innerHTML = 'Too many characters!';\n            }\n        } else if (entry === 'ac') allClear();else if (entry === 'ce') clearEntry();else if (entry === '=') computeResult();\n    });\n}\nfunction allClear() {\n    entry = '0';\n    history = '0';\n    result = '0';\n    decimal = false;\n    special = false;\n    resultField.innerHTML = '0';\n    historyField.innerHTML = '0';\n}\nfunction clearEntry() {\n    var id = history.lastIndexOf(result);\n    if (id >= 0) history = history.slice(0, id);\n    if (!isNaN(parseFloat(result)) && !isNaN(parseInt(history[history.length - 1])) || isNaN(parseFloat(result))) {\n        var numbers = history.match(/(\\d+\\.?\\d*)/g);\n        if (numbers != null) result = numbers[numbers.length - 1];\n    } else {\n        var op = history.match(/[-+/*]$/);\n        result = op;\n    }\n    if (history === '') history = '0';\n    decimal = false;\n    special = false;\n    if (result === null) resultField.innerHTML = '0';else resultField.innerHTML = result;\n    historyField.innerHTML = history;\n}\n\nfunction computeResult() {\n    var res = Math.round(eval(history) * 10000) / 10000;\n    if (res == Infinity || isNaN(res)) {\n        resultField.innerHTML = 'ERROR';\n        historyField.innerHTML = 'Division by zero!';\n    } else {\n        resultField.innerHTML = res;\n        historyField.innerHTML = history + '=' + res;\n    }\n    history = '0';\n    result = '0';\n    decimal = false;\n    special = false;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2luZGV4LmpzPzliZGMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogVE9ETzpcclxuICAgIC0gbm90aGluZyA7KVxyXG4qL1xyXG5cclxubGV0IGVudHJ5ID0gJyc7XHJcbmxldCByZXN1bHQgPSAnMCc7XHJcbmxldCBoaXN0b3J5ID0gJzAnO1xyXG5sZXQgZGVjaW1hbCA9IGZhbHNlO1xyXG5sZXQgc3BlY2lhbCA9IGZhbHNlO1xyXG5sZXQgcmVzdWx0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XHJcbmxldCBoaXN0b3J5RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeScpO1xyXG5cclxubGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYnV0dG9uJyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGVudHJ5ID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoZW50cnkgIT09ICdhYycgJiYgZW50cnkgIT09ICdjZScgJiYgZW50cnkgIT09ICc9Jykge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGVudHJ5KSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTihwYXJzZUludChyZXN1bHQpKSB8fCAocmVzdWx0ID09PSAnMCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhpc3RvcnkgPT09ICcwJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeSArPSBlbnRyeTtcclxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gJy4nICYmIGRlY2ltYWwgPT09IGZhbHNlICYmIHNwZWNpYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5ICs9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgZGVjaW1hbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGgtMV0gIT09ICcuJyAmJiBlbnRyeSAhPT0gJy4nICYmIHNwZWNpYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBlbnRyeTtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRlY2ltYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3ViID0gaGlzdG9yeS5tYXRjaCgvKFstKy8qXVxcLil8KFstKy8qXVstKy8qXSkvKTtcclxuICAgICAgICAgICAgaWYgKHN1YiAhPSBudWxsICYmIGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5zbGljZSgwLCBzdWIuaW5kZXgrMSkgKyAnMCcgKyBoaXN0b3J5LnNsaWNlKHN1Yi5pbmRleCsxKTtcclxuICAgICAgICAgICAgICAgIHN1YiA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGluZCA9IGhpc3Rvcnkuc2VhcmNoKC8oWytcXC0vKl0wMCkvKTtcclxuICAgICAgICAgICAgaWYgKGluZCA+IDAgJiYgaGlzdG9yeVtpbmRdICE9PSAnMCcpXHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5zbGljZSgwLCBpbmQrMikgKyBoaXN0b3J5LnNsaWNlKGluZCszKTtcclxuICAgICAgICAgICAgaW5kID0gaGlzdG9yeS5zZWFyY2goL1stKy8qXTBbMS05XS8pO1xyXG4gICAgICAgICAgICBpZiAoaW5kID4gMClcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LnNsaWNlKDAsIGluZCsxKSArIGVudHJ5ICsgaGlzdG9yeS5zbGljZShpbmQrMyk7XHJcblxyXG4gICAgICAgICAgICByZXN1bHRGaWVsZC5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIGhpc3RvcnlGaWVsZC5pbm5lckhUTUwgPSBoaXN0b3J5O1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAxNiB8fCBoaXN0b3J5Lmxlbmd0aCA+IDI1KSB7XHJcbiAgICAgICAgICAgICAgICBhbGxDbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0RmllbGQuaW5uZXJIVE1MID0gJ1RvbyBtYW55IGNoYXJhY3RlcnMhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gJ2FjJylcclxuICAgICAgICAgICAgYWxsQ2xlYXIoKTtcclxuICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gJ2NlJylcclxuICAgICAgICAgICAgY2xlYXJFbnRyeSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKGVudHJ5ID09PSAnPScpXHJcbiAgICAgICAgICAgIGNvbXB1dGVSZXN1bHQoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFsbENsZWFyKCkge1xyXG4gICAgZW50cnkgPSAnMCc7XHJcbiAgICBoaXN0b3J5ID0gJzAnO1xyXG4gICAgcmVzdWx0ID0gJzAnO1xyXG4gICAgZGVjaW1hbCA9IGZhbHNlO1xyXG4gICAgc3BlY2lhbCA9IGZhbHNlO1xyXG4gICAgcmVzdWx0RmllbGQuaW5uZXJIVE1MID0gJzAnO1xyXG4gICAgaGlzdG9yeUZpZWxkLmlubmVySFRNTCA9ICcwJztcclxufVxyXG5mdW5jdGlvbiBjbGVhckVudHJ5KCkge1xyXG4gICAgbGV0IGlkID0gaGlzdG9yeS5sYXN0SW5kZXhPZihyZXN1bHQpO1xyXG4gICAgaWYgKGlkID49IDApXHJcbiAgICAgICAgaGlzdG9yeSA9IGhpc3Rvcnkuc2xpY2UoMCwgaWQpO1xyXG4gICAgaWYgKCghaXNOYU4ocGFyc2VGbG9hdChyZXN1bHQpKSAmJiAhaXNOYU4ocGFyc2VJbnQoaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aC0xXSkpKSB8fCBpc05hTihwYXJzZUZsb2F0KHJlc3VsdCkpKSB7XHJcbiAgICAgICAgbGV0IG51bWJlcnMgPSBoaXN0b3J5Lm1hdGNoKC8oXFxkK1xcLj9cXGQqKS9nKTtcclxuICAgICAgICBpZiAobnVtYmVycyAhPSBudWxsKSByZXN1bHQgPSBudW1iZXJzW251bWJlcnMubGVuZ3RoLTFdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IG9wID0gaGlzdG9yeS5tYXRjaCgvWy0rLypdJC8pO1xyXG4gICAgICAgIHJlc3VsdCA9IG9wO1xyXG4gICAgfVxyXG4gICAgaWYgKGhpc3RvcnkgPT09ICcnKVxyXG4gICAgICAgIGhpc3RvcnkgPSAnMCc7XHJcbiAgICBkZWNpbWFsID0gZmFsc2U7XHJcbiAgICBzcGVjaWFsID0gZmFsc2U7XHJcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKVxyXG4gICAgICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9ICcwJztcclxuICAgIGVsc2VcclxuICAgICAgICByZXN1bHRGaWVsZC5pbm5lckhUTUwgPSByZXN1bHQ7XHJcbiAgICBoaXN0b3J5RmllbGQuaW5uZXJIVE1MID0gaGlzdG9yeTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVJlc3VsdCgpIHtcclxuICAgIGxldCByZXMgPSBNYXRoLnJvdW5kKGV2YWwoaGlzdG9yeSkqMTAwMDApLzEwMDAwO1xyXG4gICAgaWYgKHJlcyA9PSBJbmZpbml0eSB8fCBpc05hTihyZXMpKSB7XHJcbiAgICAgICAgcmVzdWx0RmllbGQuaW5uZXJIVE1MID0gJ0VSUk9SJztcclxuICAgICAgICBoaXN0b3J5RmllbGQuaW5uZXJIVE1MID0gJ0RpdmlzaW9uIGJ5IHplcm8hJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9IHJlcztcclxuICAgICAgICBoaXN0b3J5RmllbGQuaW5uZXJIVE1MID0gaGlzdG9yeSArICc9JyArIHJlcztcclxuICAgIH1cclxuICAgIGhpc3RvcnkgPSAnMCc7XHJcbiAgICByZXN1bHQgPSAnMCc7XHJcbiAgICBkZWNpbWFsID0gZmFsc2U7XHJcbiAgICBzcGVjaWFsID0gZmFsc2U7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);