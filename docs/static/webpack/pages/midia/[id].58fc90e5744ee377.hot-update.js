"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/midia/[id]",{

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/headerStyle */ \"./styles/headerStyle.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\athos\\\\Desktop\\\\ICT ACADEMY\\\\Site\\\\SiteHuawei\\\\Site Huawei\\\\src\\\\components\\\\header.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\nfunction Header(props) {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    menuOpen = _useState[0],\n    setMenuOpen = _useState[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var head = document.getElementById('transparent');\n    function handleScroll() {\n      if (window.scrollY < 98 && head != null) {\n        head.style.backgroundColor = 'transparent';\n        head.style.transition = '1s';\n      } else if (window.scrollY >= 98 && head != null) {\n        head.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';\n      }\n    }\n    window.addEventListener(\"scroll\", handleScroll);\n    handleScroll();\n    return function () {\n      return window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      id: props[\"class\"],\n      className: \"head\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"imagesBox\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"ifpr\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: props.base ? 'ifpr_degrade.png' : '',\n                alt: \"logo do ifpr\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"huawei\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"\".concat(props.base, \"huawei_degrade.png\"),\n                alt: \"logo Huawei\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"menu_links\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"links\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: \"Home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 45\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"links\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/courses\",\n            children: \"Cursos\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 45\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"links\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/midia\",\n            children: \"Publica\\xE7\\xF5es\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 45\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n_s(Header, \"YpXa3kgiBOFhFYWp8S78i7Nbdv8=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNHLENBQUM7QUFFdEI7QUFBQ3pCLEVBQUEsQ0EzRHVCRixNQUFNO0FBQUE2QixFQUFBLEdBQU43QixNQUFNO0FBQUEsSUFBQTZCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50c3g/MTMxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWRlclN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9oZWFkZXJTdHlsZSdcclxuaW1wb3J0IHsgQWlPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxuICAgIGNsYXNzOiBzdHJpbmcsXHJcbiAgICBiYXNlPzogc3RyaW5nXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzOlByb3BzKXtcclxuICAgIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNwYXJlbnQnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpe1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA8IDk4ICYmIGhlYWQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBoZWFkLnN0eWxlLmJhY2tncm91bmRDb2xvcj0ndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgICAgICAgICBoZWFkLnN0eWxlLnRyYW5zaXRpb249ICcxcydcclxuICAgICAgICAgICAgfWVsc2UgaWYod2luZG93LnNjcm9sbFkgPj0gOTggJiYgaGVhZCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGhlYWQuc3R5bGUuYmFja2dyb3VuZENvbG9yPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgICAgICBoYW5kbGVTY3JvbGwoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8SGVhZGVyU3R5bGU+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3Byb3BzLmNsYXNzfSBjbGFzc05hbWU9J2hlYWQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltYWdlc0JveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWZwcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmJhc2U/J2lmcHJfZGVncmFkZS5wbmcnOicnfSAgYWx0PSdsb2dvIGRvIGlmcHInLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2h1YXdlaSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Byb3BzLmJhc2V9aHVhd2VpX2RlZ3JhZGUucG5nYH0gIGFsdD0nbG9nbyBIdWF3ZWknLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudV9saW5rcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJz4gPExpbmsgaHJlZj0nLyc+SG9tZTwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPiA8TGluayBocmVmPScvY291cnNlcyc+Q3Vyc29zPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+IDxMaW5rIGhyZWY9Jy9taWRpYSc+UHVibGljYcOnw7VlczwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKjxidXR0b24gY2xhc3NOYW1lPSdidG5fbWVudScgb25DbGljaz17KCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZU1lbnUvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lbnUnIGlkPXttZW51T3Blbj09dHJ1ZT8nb3Blbic6J2Nsb3NlJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+PGE+SG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NvdXJzZXMnPjxhPkN1cnNvczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL21pZGlhJz48YT5Nw61kaWE8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxhPkVxdWlwZTwvYT48L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9IZWFkZXJTdHlsZT5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJIZWFkZXJTdHlsZSIsImpzeERFViIsIl9qc3hERVYiLCJIZWFkZXIiLCJwcm9wcyIsIl9zIiwiX3VzZVN0YXRlIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsImhlYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJpZCIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJiYXNlIiwiYWx0IiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiY29uY2F0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header.tsx\n"));

/***/ })

});