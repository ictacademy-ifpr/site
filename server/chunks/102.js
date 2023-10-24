"use strict";
exports.id = 102;
exports.ids = [102];
exports.modules = {

/***/ 5716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/cardsStyles.tsx

const CardStyle = external_styled_components_default().div.withConfig({
  displayName: "cardsStyles__CardStyle",
  componentId: "sc-k5g7s3-0"
})(["width:100%;aspect-ratio:1;max-width:300px;position:relative;display:flex;align-items:center;justify-content:center;border-radius:50px;overflow:hidden;cursor:pointer;transition:1s;background-position:center;background-repeat:no-repeat;background-size:cover;background-color:rgba(5,2,53,0.4);background-blend-mode:multiply;img{visibility:hidden;height:100%;width:100%;}p{color:rgba(255,255,255,0.5);font-size:40px;font-weight:500;max-width:170px;text-align:center;line-height:1;position:absolute;}.warning{background-color:rgba(255,100,100,0.5);font-size:30px;max-width:170px;bottom:50%;}&:hover{background-color:rgba(5,2,53,0.6);transition:1s;p{color:#fff;transition:1s;}}@media(max-width:950px){max-width:260px;}@media(max-width:400px){p{font-size:28px;}}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/cards.tsx



function Card(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: props.url,
    target: "_blank",
    rel: "noreferrer",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardStyle, {
      style: {
        backgroundImage: props.bg
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: props.img,
        alt: ""
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: props.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "warning",
        children: props.warning
      })]
    })
  });
}

/***/ }),

/***/ 85:
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Cloud Service","bg":"url(\'tech4.png\')","img":"tech2.png","warning":"","url":"https://e.huawei.com/en/talent/#/ict-academy/news-details?consultationId=515"},{"title":"IA","bg":"url(\'tech2.png\')","img":"tech2.png","warning":"Em Breve","url":"https://e.huawei.com/en/talent/#ict-academy/news-details?consultationId=509"},{"title":"5G","bg":"url(\'tech3.png\')","img":"tech2.png","warning":"","url":"https://e.huawei.com/en/talent/#ict-academy/news-details?consultationId=507"},{"title":"Big Data","bg":"url(\'ia.png\')","img":"tech2.png","warning":"Em Breve","url":"https://e.huawei.com/en/talent/#ict-academy/news-details?consultationId=509"},{"title":"IoT","bg":"url(\'tech5.png\')","img":"tech5.png","warning":"Em Breve","url":"https://e.huawei.com/en/talent/#ict-academy/news-details?consultationId=509"}]');

/***/ })

};
;