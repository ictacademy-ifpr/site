"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomDocument)\n/* harmony export */ });\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\athos\\\\Desktop\\\\ICT ACADEMY\\\\Site\\\\SiteHuawei\\\\Site Huawei\\\\pages\\\\_document.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\nclass CustomDocument extends (next_document__WEBPACK_IMPORTED_MODULE_0___default()) {\n  static async getInitialProps(ctx) {\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_1__.ServerStyleSheet();\n    const originalRenderPage = ctx.renderPage;\n    try {\n      ctx.renderPage = () => originalRenderPage({\n        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 37\n        }, this))\n      });\n      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0___default().getInitialProps(ctx);\n      return _objectSpread(_objectSpread({}, initialProps), {}, {\n        styles: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n          children: [initialProps.styles, sheet.getStyleElement()]\n        }, void 0, true)]\n      });\n    } finally {\n      sheet.seal();\n    }\n  }\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {\n      lang: \"pt-br\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"preconnect\",\n          href: \"https://fonts.googleapis.com\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 19\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          rel: \"preconnect\",\n          href: \"https://fonts.gstatic.com\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 19\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"link\", {\n          href: \"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap\",\n          rel: \"stylesheet\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 19\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2RztBQUN4RDtBQUNUO0FBQUE7QUFBQTtBQUU3QixNQUFNVyxjQUFjLFNBQVNYLHNEQUFRLENBQUM7RUFDakQsYUFBYVksZUFBZUEsQ0FBQ0MsR0FBb0IsRUFBaUM7SUFDOUUsTUFBTUMsS0FBSyxHQUFHLElBQUlULCtEQUFnQixDQUFDLENBQUM7SUFDcEMsTUFBTVUsa0JBQWtCLEdBQUdGLEdBQUcsQ0FBQ0csVUFBVTtJQUV6QyxJQUFJO01BQ0ZILEdBQUcsQ0FBQ0csVUFBVSxHQUFHLE1BQ2ZELGtCQUFrQixDQUFDO1FBQ2pCRSxVQUFVLEVBQUdDLEdBQU8sSUFBTUMsS0FBUyxJQUNqQ0wsS0FBSyxDQUFDTSxhQUFhLGVBQUNaLDZEQUFBLENBQUNVLEdBQUcsRUFBQUcsYUFBQSxLQUFLRixLQUFLO1VBQUFHLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUFHLENBQUM7TUFDMUMsQ0FBQyxDQUFDO01BRUosTUFBTUMsWUFBWSxHQUFHLE1BQU0xQixvRUFBd0IsQ0FBQ2EsR0FBRyxDQUFDO01BQ3hELE9BQUFRLGFBQUEsQ0FBQUEsYUFBQSxLQUNLSyxZQUFZO1FBQ2ZDLE1BQU0sRUFBRSxjQUNObkIsNkRBQUEsQ0FBQUUsMkRBQUE7VUFBQWtCLFFBQUEsR0FDR0YsWUFBWSxDQUFDQyxNQUFNLEVBQ25CYixLQUFLLENBQUNlLGVBQWUsQ0FBQyxDQUFDO1FBQUEsZUFDeEIsQ0FBQztNQUNKO0lBRUwsQ0FBQyxTQUFTO01BQ1JmLEtBQUssQ0FBQ2dCLElBQUksQ0FBQyxDQUFDO0lBQ2Q7RUFDRjtFQUVGQyxNQUFNQSxDQUFBLEVBQWlCO0lBQ25CLG9CQUNJdkIsNkRBQUEsQ0FBQ1AsK0NBQUk7TUFBQytCLElBQUksRUFBQyxPQUFPO01BQUFKLFFBQUEsZ0JBQ2RwQiw2REFBQSxDQUFDTiwrQ0FBSTtRQUFBMEIsUUFBQSxnQkFDSHBCLDZEQUFBO1VBQU15QixHQUFHLEVBQUMsWUFBWTtVQUFDQyxJQUFJLEVBQUM7UUFBOEI7VUFBQVosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQUMsQ0FBQyxlQUM1RGpCLDZEQUFBO1VBQU15QixHQUFHLEVBQUMsWUFBWTtVQUFDQyxJQUFJLEVBQUM7UUFBMkI7VUFBQVosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQUUsQ0FBQyxlQUMxRGpCLDZEQUFBO1VBQU0wQixJQUFJLEVBQUMsbUZBQW1GO1VBQUNELEdBQUcsRUFBQztRQUFZO1VBQUFYLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUFDLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FFN0csQ0FBQyxlQUNQakIsNkRBQUE7UUFBQW9CLFFBQUEsZ0JBQ0lwQiw2REFBQSxDQUFDTCwrQ0FBSTtVQUFBbUIsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLE9BQUUsQ0FBQyxlQUNSakIsNkRBQUEsQ0FBQ0oscURBQVU7VUFBQWtCLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUFFLENBQUM7TUFBQTtRQUFBSCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FDWixDQUFDO0lBQUE7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQ0wsQ0FBQztFQUVmO0FBSUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odWF3ZWktaWZwci8uL3BhZ2VzL19kb2N1bWVudC50c3g/ZDM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50Q29udGV4dCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXHJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHg6IERvY3VtZW50Q29udGV4dCk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcclxuICAgICAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KClcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZVxyXG4gICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxyXG4gICAgICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xyXG4gICAgICAgICAgICAgIGVuaGFuY2VBcHA6IChBcHA6YW55KSA9PiAocHJvcHM6YW55KSA9PlxyXG4gICAgICAgICAgICAgICAgc2hlZXQuY29sbGVjdFN0eWxlcyg8QXBwIHsuLi5wcm9wc30gLz4pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICBcclxuICAgICAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5pbml0aWFsUHJvcHMsXHJcbiAgICAgICAgICAgIHN0eWxlczogW1xyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cclxuICAgICAgICAgICAgICAgIHtzaGVldC5nZXRTdHlsZUVsZW1lbnQoKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2hlZXQuc2VhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgcmVuZGVyKCk6IFJlYWN0RWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEh0bWwgbGFuZz1cInB0LWJyXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgICAgIDwvSHRtbD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiU2VydmVyU3R5bGVTaGVldCIsIlJlYWN0IiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiQ3VzdG9tRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzaGVldCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwicHJvcHMiLCJjb2xsZWN0U3R5bGVzIiwiX29iamVjdFNwcmVhZCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImluaXRpYWxQcm9wcyIsInN0eWxlcyIsImNoaWxkcmVuIiwiZ2V0U3R5bGVFbGVtZW50Iiwic2VhbCIsInJlbmRlciIsImxhbmciLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();