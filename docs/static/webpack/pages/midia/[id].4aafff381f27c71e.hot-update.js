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

/***/ "./pages/midia/[id].tsx":
/*!******************************!*\
  !*** ./pages/midia/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MidiaDetail; }\n/* harmony export */ });\n/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/components/header */ \"./src/components/header.tsx\");\n/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/footer */ \"./src/components/footer.tsx\");\n/* harmony import */ var _styles_midia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/midia */ \"./styles/midia.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_data_midia_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/data/midia.json */ \"./src/data/midia.json\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\athos\\\\Desktop\\\\ICT ACADEMY\\\\Site\\\\SiteHuawei\\\\Site Huawei\\\\pages\\\\midia\\\\[id].tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MidiaDetail() {\n  _s();\n  var _this = this;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  var id = router.query.id;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      \"class\": \"white\",\n      base: \"../\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_styles_midia__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"banner\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n            children: \"Publica\\xE7\\xF5es\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"body_specific_midia\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"container\",\n          children: _src_data_midia_json__WEBPACK_IMPORTED_MODULE_4__.map(function (item, index) {\n            return index.toString() == id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                className: \"img_specific_midia\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n                  src: \"../\".concat(item.img),\n                  alt: \"Imagem da noticia\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 30,\n                  columnNumber: 33\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 29\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n                className: \"text_specific_midia\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h2\", {\n                  children: item.title\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 33,\n                  columnNumber: 33\n                }, _this), item.text.map(function (txt, index) {\n                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n                    children: txt\n                  }, index, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 35,\n                    columnNumber: 37\n                  }, _this);\n                })]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_components_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n_s(MidiaDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n_c = MidiaDetail;\nvar _c;\n$RefreshReg$(_c, \"MidiaDetail\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taWRpYS9baWRdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNBO0FBR0w7QUFDSjtBQUNNO0FBQUE7QUFBQTtBQUU5QixTQUFTUyxXQUFXQSxDQUFBLEVBQUU7RUFBQUMsRUFBQTtFQUFBLElBQUFDLEtBQUE7RUFDakMsSUFBTUMsTUFBTSxHQUFHVCxzREFBUyxDQUFDLENBQUM7RUFDMUIsSUFBTVUsRUFBRSxHQUFHRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUcxQixvQkFDSVAsNkRBQUEsQ0FBQUUsMkRBQUE7SUFBQU8sUUFBQSxnQkFDSVQsNkRBQUEsQ0FBQ04sOERBQU07TUFBQyxTQUFNLE9BQU87TUFBQ2dCLElBQUksRUFBQztJQUFLO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDbkNkLDZEQUFBLENBQUNKLHFEQUFVO01BQUFhLFFBQUEsZ0JBQ1BULDZEQUFBO1FBQUtlLFNBQVMsRUFBQyxRQUFRO1FBQUFOLFFBQUEsZUFDbkJULDZEQUFBO1VBQUtlLFNBQVMsRUFBQyxXQUFXO1VBQUFOLFFBQUEsZUFDdEJULDZEQUFBO1lBQUFTLFFBQUEsRUFBSTtVQUFXO1lBQUFFLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUFJO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQ25CO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQ0wsQ0FBQyxlQUVOZCw2REFBQTtRQUFLZSxTQUFTLEVBQUMscUJBQXFCO1FBQUFOLFFBQUEsZUFDaENULDZEQUFBO1VBQUtlLFNBQVMsRUFBQyxXQUFXO1VBQUFOLFFBQUEsRUFDckJYLHFEQUFTLENBQUMsVUFBQ21CLElBQUksRUFBRUMsS0FBSztZQUFBLE9BQ25CQSxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLElBQUlaLEVBQUUsaUJBQ3RCUCw2REFBQSxDQUFBRSwyREFBQTtjQUFBTyxRQUFBLGdCQUNBVCw2REFBQTtnQkFBS2UsU0FBUyxFQUFDLG9CQUFvQjtnQkFBQU4sUUFBQSxlQUMvQlQsNkRBQUE7a0JBQUtvQixHQUFHLFFBQUFDLE1BQUEsQ0FBUUosSUFBSSxDQUFDSyxHQUFHLENBQUc7a0JBQUNDLEdBQUcsRUFBQztnQkFBbUI7a0JBQUFaLFFBQUEsRUFBQUMsWUFBQTtrQkFBQUMsVUFBQTtrQkFBQUMsWUFBQTtnQkFBQSxHQUFBVCxLQUFDO2NBQUM7Z0JBQUFNLFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLEdBQUFULEtBQ3BELENBQUMsZUFDTkwsNkRBQUE7Z0JBQUtlLFNBQVMsRUFBQyxxQkFBcUI7Z0JBQUFOLFFBQUEsZ0JBQ2hDVCw2REFBQTtrQkFBQVMsUUFBQSxFQUFLUSxJQUFJLENBQUNPO2dCQUFLO2tCQUFBYixRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsR0FBQVQsS0FBSyxDQUFDLEVBQ3BCWSxJQUFJLENBQUNRLElBQUksQ0FBQ1QsR0FBRyxDQUFDLFVBQUNVLEdBQUcsRUFBRVIsS0FBSztrQkFBQSxvQkFDdEJsQiw2REFBQTtvQkFBQVMsUUFBQSxFQUFnQmlCO2tCQUFHLEdBQVhSLEtBQUs7b0JBQUFQLFFBQUEsRUFBQUMsWUFBQTtvQkFBQUMsVUFBQTtvQkFBQUMsWUFBQTtrQkFBQSxHQUFBVCxLQUFVLENBQUM7Z0JBQUEsQ0FDNUIsQ0FBQztjQUFBO2dCQUFBTSxRQUFBLEVBQUFDLFlBQUE7Z0JBQUFDLFVBQUE7Z0JBQUFDLFlBQUE7Y0FBQSxHQUFBVCxLQUNBLENBQUM7WUFBQSxlQUNKLENBQUM7VUFBQSxDQUNQO1FBQUM7VUFBQU0sUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BRUE7TUFBQztRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDTCxDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQ0UsQ0FBQyxlQUViZCw2REFBQSxDQUFDTCw4REFBTTtNQUFBZ0IsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUMsQ0FBQztFQUFBLGVBQ1gsQ0FBQztBQUVYO0FBQUNWLEVBQUEsQ0F2Q3VCRCxXQUFXO0VBQUEsUUFDaEJOLGtEQUFTO0FBQUE7QUFBQThCLEVBQUEsR0FESnhCLFdBQVc7QUFBQSxJQUFBd0IsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWlkaWEvW2lkXS50c3g/ZThiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5pbXBvcnQgRm9vdGVyU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL0Zvb3RlclN0eWxlJ1xyXG5pbXBvcnQgTWlkaWFTdHlsZSBmcm9tICcuLi8uLi9zdHlsZXMvbWlkaWEnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgbWlkaWEgZnJvbSAnLi4vLi4vc3JjL2RhdGEvbWlkaWEuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1pZGlhRGV0YWlsKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkXHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGNsYXNzPSd3aGl0ZScgYmFzZT0nLi4vJyAvPlxyXG4gICAgICAgICAgICA8TWlkaWFTdHlsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlB1YmxpY2HDp8O1ZXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfc3BlY2lmaWNfbWlkaWEnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttaWRpYS5tYXAoKGl0ZW0sIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LnRvU3RyaW5nKCkgPT0gaWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1nX3NwZWNpZmljX21pZGlhJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC4uLyR7aXRlbS5pbWd9YH0gYWx0PSdJbWFnZW0gZGEgbm90aWNpYScvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dF9zcGVjaWZpY19taWRpYSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dC5tYXAoKHR4dCwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2luZGV4fT57dHh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01pZGlhU3R5bGU+XHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJNaWRpYVN0eWxlIiwidXNlUm91dGVyIiwibWlkaWEiLCJqc3hERVYiLCJfanN4REVWIiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJNaWRpYURldGFpbCIsIl9zIiwiX3RoaXMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiY2hpbGRyZW4iLCJiYXNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwidG9TdHJpbmciLCJzcmMiLCJjb25jYXQiLCJpbWciLCJhbHQiLCJ0aXRsZSIsInRleHQiLCJ0eHQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/midia/[id].tsx\n"));

/***/ })

});