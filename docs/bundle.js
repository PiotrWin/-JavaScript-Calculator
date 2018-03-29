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
eval("\n\n$(document).ready(function () {\n\n    var entry = '';\n    var result = '0';\n    var history = '0';\n    var decimal = false;\n    var special = false;\n    var resultField = document.getElementById('result');\n    var historyField = document.getElementById('history');\n\n    var buttons = document.getElementsByTagName('button');\n\n    for (var i = 0; i < buttons.length; i++) {\n        buttons[i].addEventListener(\"click\", function () {\n            entry = this.value;\n            if (entry !== 'ac' && entry !== 'ce' && entry !== '=') {\n                if (!isNaN(parseInt(entry))) {\n                    if (isNaN(parseInt(result)) || result === '0') {\n                        result = '';\n                        if (history === '0') history = '';\n                    }\n                    result += entry;\n                    history += entry;\n                    special = false;\n                } else if (entry === '.' && decimal === false && special === false) {\n                    result += entry;\n                    history += entry;\n                    decimal = true;\n                } else if (result[result.length - 1] !== '.' && entry !== '.' && special === false) {\n                    result = entry;\n                    history += entry;\n                    special = true;\n                    decimal = false;\n                }\n                var sub = history.match(/([-+/*]\\.)|([-+/*][-+/*])/);\n                if (sub != null && entry) {\n                    history = history.slice(0, sub.index + 1) + '0' + history.slice(sub.index + 1);\n                    sub = null;\n                }\n                var ind = history.search(/([+\\-/*]00)/);\n                if (ind > 0 && history[ind] !== '0') history = history.slice(0, ind + 2) + history.slice(ind + 3);\n                ind = history.search(/[-+/*]0[1-9]/);\n                if (ind > 0) history = history.slice(0, ind + 1) + entry + history.slice(ind + 3);\n\n                resultField.innerHTML = result;\n                historyField.innerHTML = history;\n\n                if (result.length > 16 || history.length > 25) {\n                    allClear();\n                    resultField.innerHTML = 'Too many characters!';\n                }\n            } else if (entry === 'ac') allClear();else if (entry === 'ce') clearEntry();else if (entry === '=') computeResult();\n        });\n    }\n    function allClear() {\n        entry = '0';\n        history = '0';\n        result = '0';\n        decimal = false;\n        special = false;\n        resultField.innerHTML = '0';\n        historyField.innerHTML = '0';\n    }\n    function clearEntry() {\n        var id = history.lastIndexOf(result);\n        if (id >= 0) history = history.slice(0, id);\n        if (!isNaN(parseFloat(result)) && !isNaN(parseInt(history[history.length - 1])) || isNaN(parseFloat(result))) {\n            var numbers = history.match(/(\\d+\\.?\\d*)/g);\n            if (numbers != null) result = numbers[numbers.length - 1];\n        } else {\n            var op = history.match(/[-+/*]$/);\n            result = op;\n        }\n        if (history === '') history = '0';\n        decimal = false;\n        special = false;\n        if (result === null) resultField.innerHTML = '0';else resultField.innerHTML = result;\n        historyField.innerHTML = history;\n    }\n\n    function computeResult() {\n        var res = Math.round(eval(history) * 10000) / 10000;\n        if (res == Infinity || isNaN(res)) {\n            resultField.innerHTML = 'ERROR';\n            historyField.innerHTML = 'Division by zero!';\n        } else {\n            resultField.innerHTML = res;\n            historyField.innerHTML = history + '=' + res;\n        }\n        if (res.length > 16 || (history + \"=\" + res).length > 25) {\n            allClear();\n            resultField.innerHTML = 'Too many characters!';\n        }\n        history = '0';\n        result = '0';\n        decimal = false;\n        special = false;\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwL2luZGV4LmpzPzliZGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbmxldCBlbnRyeSA9ICcnO1xyXG5sZXQgcmVzdWx0ID0gJzAnO1xyXG5sZXQgaGlzdG9yeSA9ICcwJztcclxubGV0IGRlY2ltYWwgPSBmYWxzZTtcclxubGV0IHNwZWNpYWwgPSBmYWxzZTtcclxubGV0IHJlc3VsdEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xyXG5sZXQgaGlzdG9yeUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpc3RvcnknKTtcclxuXHJcbmxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2J1dHRvbicpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBlbnRyeSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGVudHJ5ICE9PSAnYWMnICYmIGVudHJ5ICE9PSAnY2UnICYmIGVudHJ5ICE9PSAnPScpIHtcclxuICAgICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChlbnRyeSkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocGFyc2VJbnQocmVzdWx0KSkgfHwgKHJlc3VsdCA9PT0gJzAnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoaXN0b3J5ID09PSAnMCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBlbnRyeTtcclxuICAgICAgICAgICAgICAgIGhpc3RvcnkgKz0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09ICcuJyAmJiBkZWNpbWFsID09PSBmYWxzZSAmJiBzcGVjaWFsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeSArPSBlbnRyeTtcclxuICAgICAgICAgICAgICAgIGRlY2ltYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoLTFdICE9PSAnLicgJiYgZW50cnkgIT09ICcuJyAmJiBzcGVjaWFsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZW50cnk7XHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5ICs9IGVudHJ5O1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkZWNpbWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHN1YiA9IGhpc3RvcnkubWF0Y2goLyhbLSsvKl1cXC4pfChbLSsvKl1bLSsvKl0pLyk7XHJcbiAgICAgICAgICAgIGlmIChzdWIgIT0gbnVsbCAmJiBlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3Rvcnkuc2xpY2UoMCwgc3ViLmluZGV4KzEpICsgJzAnICsgaGlzdG9yeS5zbGljZShzdWIuaW5kZXgrMSk7XHJcbiAgICAgICAgICAgICAgICBzdWIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpbmQgPSBoaXN0b3J5LnNlYXJjaCgvKFsrXFwtLypdMDApLyk7XHJcbiAgICAgICAgICAgIGlmIChpbmQgPiAwICYmIGhpc3RvcnlbaW5kXSAhPT0gJzAnKVxyXG4gICAgICAgICAgICAgICAgaGlzdG9yeSA9IGhpc3Rvcnkuc2xpY2UoMCwgaW5kKzIpICsgaGlzdG9yeS5zbGljZShpbmQrMyk7XHJcbiAgICAgICAgICAgIGluZCA9IGhpc3Rvcnkuc2VhcmNoKC9bLSsvKl0wWzEtOV0vKTtcclxuICAgICAgICAgICAgaWYgKGluZCA+IDApXHJcbiAgICAgICAgICAgICAgICBoaXN0b3J5ID0gaGlzdG9yeS5zbGljZSgwLCBpbmQrMSkgKyBlbnRyeSArIGhpc3Rvcnkuc2xpY2UoaW5kKzMpO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0RmllbGQuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG4gICAgICAgICAgICBoaXN0b3J5RmllbGQuaW5uZXJIVE1MID0gaGlzdG9yeTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMTYgfHwgaGlzdG9yeS5sZW5ndGggPiAyNSkge1xyXG4gICAgICAgICAgICAgICAgYWxsQ2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9ICdUb28gbWFueSBjaGFyYWN0ZXJzISc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09ICdhYycpXHJcbiAgICAgICAgICAgIGFsbENsZWFyKCk7XHJcbiAgICAgICAgZWxzZSBpZiAoZW50cnkgPT09ICdjZScpXHJcbiAgICAgICAgICAgIGNsZWFyRW50cnkoKTtcclxuICAgICAgICBlbHNlIGlmIChlbnRyeSA9PT0gJz0nKVxyXG4gICAgICAgICAgICBjb21wdXRlUmVzdWx0KCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhbGxDbGVhcigpIHtcclxuICAgIGVudHJ5ID0gJzAnO1xyXG4gICAgaGlzdG9yeSA9ICcwJztcclxuICAgIHJlc3VsdCA9ICcwJztcclxuICAgIGRlY2ltYWwgPSBmYWxzZTtcclxuICAgIHNwZWNpYWwgPSBmYWxzZTtcclxuICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9ICcwJztcclxuICAgIGhpc3RvcnlGaWVsZC5pbm5lckhUTUwgPSAnMCc7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJFbnRyeSgpIHtcclxuICAgIGxldCBpZCA9IGhpc3RvcnkubGFzdEluZGV4T2YocmVzdWx0KTtcclxuICAgIGlmIChpZCA+PSAwKVxyXG4gICAgICAgIGhpc3RvcnkgPSBoaXN0b3J5LnNsaWNlKDAsIGlkKTtcclxuICAgIGlmICgoIWlzTmFOKHBhcnNlRmxvYXQocmVzdWx0KSkgJiYgIWlzTmFOKHBhcnNlSW50KGhpc3RvcnlbaGlzdG9yeS5sZW5ndGgtMV0pKSkgfHwgaXNOYU4ocGFyc2VGbG9hdChyZXN1bHQpKSkge1xyXG4gICAgICAgIGxldCBudW1iZXJzID0gaGlzdG9yeS5tYXRjaCgvKFxcZCtcXC4/XFxkKikvZyk7XHJcbiAgICAgICAgaWYgKG51bWJlcnMgIT0gbnVsbCkgcmVzdWx0ID0gbnVtYmVyc1tudW1iZXJzLmxlbmd0aC0xXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBvcCA9IGhpc3RvcnkubWF0Y2goL1stKy8qXSQvKTtcclxuICAgICAgICByZXN1bHQgPSBvcDtcclxuICAgIH1cclxuICAgIGlmIChoaXN0b3J5ID09PSAnJylcclxuICAgICAgICBoaXN0b3J5ID0gJzAnO1xyXG4gICAgZGVjaW1hbCA9IGZhbHNlO1xyXG4gICAgc3BlY2lhbCA9IGZhbHNlO1xyXG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbClcclxuICAgICAgICByZXN1bHRGaWVsZC5pbm5lckhUTUwgPSAnMCc7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmVzdWx0RmllbGQuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG4gICAgaGlzdG9yeUZpZWxkLmlubmVySFRNTCA9IGhpc3Rvcnk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVSZXN1bHQoKSB7XHJcbiAgICBsZXQgcmVzID0gTWF0aC5yb3VuZChldmFsKGhpc3RvcnkpKjEwMDAwKS8xMDAwMDtcclxuICAgIGlmIChyZXMgPT0gSW5maW5pdHkgfHwgaXNOYU4ocmVzKSkge1xyXG4gICAgICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9ICdFUlJPUic7XHJcbiAgICAgICAgaGlzdG9yeUZpZWxkLmlubmVySFRNTCA9ICdEaXZpc2lvbiBieSB6ZXJvISc7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXN1bHRGaWVsZC5pbm5lckhUTUwgPSByZXM7XHJcbiAgICAgICAgaGlzdG9yeUZpZWxkLmlubmVySFRNTCA9IGhpc3RvcnkgKyAnPScgKyByZXM7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzLmxlbmd0aCA+IDE2IHx8IChoaXN0b3J5K1wiPVwiK3JlcykubGVuZ3RoID4gMjUpIHtcclxuICAgICAgICBhbGxDbGVhcigpO1xyXG4gICAgICAgIHJlc3VsdEZpZWxkLmlubmVySFRNTCA9ICdUb28gbWFueSBjaGFyYWN0ZXJzISc7XHJcbiAgICB9XHJcbiAgICBoaXN0b3J5ID0gJzAnO1xyXG4gICAgcmVzdWx0ID0gJzAnO1xyXG4gICAgZGVjaW1hbCA9IGZhbHNlO1xyXG4gICAgc3BlY2lhbCA9IGZhbHNlO1xyXG59XHJcblxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);