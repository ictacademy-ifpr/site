"use strict";exports.id=506,exports.ids=[506],exports.modules={5506:(e,t,r)=>{r.r(t),r.d(t,{default:()=>CustomDocument});var n=r(6859),o=r.n(n),i=r(7518);r(6689);var s=r(997);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}let CustomDocument=class CustomDocument extends o(){static async getInitialProps(e){let t=new i.ServerStyleSheet,r=e.renderPage;try{e.renderPage=()=>r({enhanceApp:e=>r=>t.collectStyles(s.jsx(e,_objectSpread({},r)))});let n=await o().getInitialProps(e);return _objectSpread(_objectSpread({},n),{},{styles:[(0,s.jsxs)(s.Fragment,{children:[n.styles,t.getStyleElement()]})]})}finally{t.seal()}}render(){return(0,s.jsxs)(n.Html,{lang:"pt-br",children:[(0,s.jsxs)(n.Head,{children:[s.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),s.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),s.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap",rel:"stylesheet"})]}),(0,s.jsxs)("body",{children:[s.jsx(n.Main,{}),s.jsx(n.NextScript,{})]})]})}}}};