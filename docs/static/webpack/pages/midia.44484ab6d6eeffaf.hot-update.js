"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/midia",{

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/headerStyle */ \"./styles/headerStyle.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\athos\\\\Desktop\\\\ICT ACADEMY\\\\Site\\\\SiteHuawei\\\\Site Huawei\\\\src\\\\components\\\\header.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\nfunction Header(props) {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    menuOpen = _useState[0],\n    setMenuOpen = _useState[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var head = document.getElementById('transparent');\n    function handleScroll() {\n      if (window.scrollY < 98 && head != null) {\n        head.style.backgroundColor = 'transparent';\n        head.style.transition = '1s';\n      } else if (window.scrollY >= 98 && head != null) {\n        head.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';\n      }\n    }\n    window.addEventListener(\"scroll\", handleScroll);\n    handleScroll();\n    return function () {\n      return window.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_headerStyle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      id: props[\"class\"],\n      className: \"head\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: \"imagesBox\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"ifpr\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: props.base ? props.base + 'ifpr_degrade.png' : 'ifpr_degrade.png',\n                alt: \"logo do ifpr\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 29\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n              className: \"huawei\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"img\", {\n                src: \"\".concat(props.base, \"huawei_degrade.png\"),\n                alt: \"logo Huawei\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"menu_links\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"links\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/\",\n            children: \"Home\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 45\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"links\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/courses\",\n            children: \"Cursos\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 45\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"links\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/midia\",\n            children: \"Publica\\xE7\\xF5es\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 45\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n_s(Header, \"YpXa3kgiBOFhFYWp8S78i7Nbdv8=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWFMO0VBQUM7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ0csQ0FBQztBQUV0QjtBQUFDekIsRUFBQSxDQTNEdUJGLE1BQU07QUFBQTZCLEVBQUEsR0FBTjdCLE1BQU07QUFBQSxJQUFBNkIsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzeD8xMzEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZGVyU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL2hlYWRlclN0eWxlJ1xyXG5pbXBvcnQgeyBBaU91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3Bze1xyXG4gICAgY2xhc3M6IHN0cmluZyxcclxuICAgIGJhc2U/OiBzdHJpbmdcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHM6UHJvcHMpe1xyXG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc3BhcmVudCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCl7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5zY3JvbGxZIDwgOTggJiYgaGVhZCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgIGhlYWQuc3R5bGUuYmFja2dyb3VuZENvbG9yPSd0cmFuc3BhcmVudCdcclxuICAgICAgICAgICAgICAgIGhlYWQuc3R5bGUudHJhbnNpdGlvbj0gJzFzJ1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih3aW5kb3cuc2Nyb2xsWSA+PSA5OCAmJiBoZWFkICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgaGVhZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSknXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgICAgIGhhbmRsZVNjcm9sbCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxIZWFkZXJTdHlsZT5cclxuICAgICAgICAgICAgPGRpdiBpZD17cHJvcHMuY2xhc3N9IGNsYXNzTmFtZT0naGVhZCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1hZ2VzQm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpZnByJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuYmFzZT9wcm9wcy5iYXNlKydpZnByX2RlZ3JhZGUucG5nJzonaWZwcl9kZWdyYWRlLnBuZyd9ICBhbHQ9J2xvZ28gZG8gaWZwcicvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naHVhd2VpJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7cHJvcHMuYmFzZX1odWF3ZWlfZGVncmFkZS5wbmdgfSAgYWx0PSdsb2dvIEh1YXdlaScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZW51X2xpbmtzJz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlua3MnPiA8TGluayBocmVmPScvJz5Ib21lPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rcyc+IDxMaW5rIGhyZWY9Jy9jb3Vyc2VzJz5DdXJzb3M8L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmtzJz4gPExpbmsgaHJlZj0nL21pZGlhJz5QdWJsaWNhw6fDtWVzPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9J2J0bl9tZW51JyBvbkNsaWNrPXsoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pfT5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lTWVudS8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVudScgaWQ9e21lbnVPcGVuPT10cnVlPydvcGVuJzonY2xvc2UnfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz48YT5Ib21lPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY291cnNlcyc+PGE+Q3Vyc29zPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbWlkaWEnPjxhPk3DrWRpYTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+PGE+RXF1aXBlPC9hPjwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0hlYWRlclN0eWxlPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkhlYWRlclN0eWxlIiwianN4REVWIiwiX2pzeERFViIsIkhlYWRlciIsInByb3BzIiwiX3MiLCJfdXNlU3RhdGUiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsImlkIiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImJhc2UiLCJhbHQiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjb25jYXQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header.tsx\n"));

/***/ })

});