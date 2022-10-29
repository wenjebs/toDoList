/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: 'Lato', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.project-container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 80px auto;\n    grid-template-columns: 270px auto;\n}\n/* top bar */\n.top-bar {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: #9DAD7F;\n    display: flex;\n}\n.top-bar-header {\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    gap: 20px;\n    font-size: 70px;\n}\n/* left side nav bar */\n.left-side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color:#C7CFB7;\n    padding-top: 2rem;\n    gap: 1rem;\n}\n\n.inbox,\n.today,\n.upcoming {\n    padding-left: 1rem;\n}\n\n.projects-header-container {\n    display: flex;\n    justify-content: space-between;\n}\n.projects-header-container>div{\n    padding: 1rem;\n}\n#projects-header {\n    font-weight: 700;\n    font-size: xx-large;\n    padding-left: 1.5rem;\n}\n.left-nav-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    \n}\n.add-project-button {\n    width: 1.5rem;\n    height: auto;\n    cursor: pointer;\n}\n.expand-button {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.projects-container {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.project-button {\n    font-size: large;\n}\n.project-button.active {\n    font-weight: bolder;\n    text-decoration: underline;\n}\n.input-project-formcontainer{\n    align-self: center;\n    display: none;\n}\n.input-project-formcontainer>input {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title{\n    cursor:pointer;\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title:hover {\n    border:1px solid black;\n}\n/* list of to do items */\n.todoitems-container {\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 2/3;\n    text-align: center;\n    background-color: #F7F7E8;\n    display: flex;\n    justify-content: center;\n}\n/* container containing items to do */\n.items-container {\n    width: 75%;\n    padding: 2rem;\n}\n.current-project-header{\n    display: flex;\n    font-size: xx-large;\n    font-weight: 700;\n    padding-bottom: 0.5rem;\n}\n/* individual item cards */\n.item-card,\n.add-task{\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-top: 1px solid #C7CFB7;\n    border-bottom: 1px solid #C7CFB7;\n}\n.item-card .checked {\n    opacity: 0.3;\n}\n.card-left {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.checkbox {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.checkbox-tick {\n    display: none;\n}\n\n.check-button:hover {\n    background-color: #a7a797;\n}\n.card-title {\n    cursor: pointer;\n}\n.card-right {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.card-right > img {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.add-task {\n    justify-content: center;\n}\n.add-task:hover {\n    justify-content: center;\n    background-color:#aeb59f;\n    cursor: pointer;\n}\n.add-task-left{\n    display: flex;\n    gap: 0.25rem;\n}\n.add-task-button {\n    width: 1rem;\n    height: 1rem;\n}\n\n/* modal pop up */\n\n.bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.modal-content,\n.edit-card-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n\n.modal-header,\n.edit-card-header {\n    background-color: #9DAD7F;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    height: 3rem;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.modal-title,\n.edit-title {\n    font-size: 2rem;\n    padding-left: 1rem;\n    color: white;\n}\n.close-popup,   \n.close-detail-popup,\n.close-edit-popup {\n    position: absolute;\n    right: 0.1rem;\n    top: 0.8rem;\n    font-size: 2rem;\n    padding-right: 1rem;\n    cursor: pointer;\n    color: white;\n    line-height: 1rem;\n}\n\n.form-container,\n.edit-form-container {\n    margin: 4rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container>\ninput,\ninput:focus-visible,\n.edit-form-container>\ninput,\ninput:focus-visible {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n\n#submit-title,\n#edit-title {\n    font-size: 1.6rem;\n}\n.priority-radio {\n    display: flex;\n    height:3rem;\n    align-items: center;\n    gap: 1rem;\n}\n.radio-wrapper {\n    border: 1px solid black;\n\n}\n.radio-wrapper input {\n    display: none;\n}\n\n.radio-wrapper label:hover {\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.radio-wrapper input:checked + label{\n    font-weight: 900;\n}\n#submit-task,\n#edit-task {\n    width: 10rem;\n    background-color: white;\n    color: #557174;\n    border: 1px #557174 solid;\n    border-radius: 10px;\n    font-size: small;\n    font-weight: bold;\n}\n\n#submit-task:hover,\n#edit-task:hover{\n    cursor: pointer;\n    background-color: #557174;\n    color:white;\n    transition: all 0.3s;\n}\n\n/* detail modal */\n.detail-bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.detail-modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n.extra-content {\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4rem;\n    gap: 4rem;\n    font-size: xx-large;\n}\n\n/* edit card */\n\n.edit-card {\n    display:flex;\n    justify-content: center;\n    \n}\n.edit-card-content {\n    height: 15%;\n    width: 100%;\n    border: 1px solid black;\n\n}\n\n.edit-form-container {\n    margin: 1rem 5rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,+BAA+B;IAC/B,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,iCAAiC;AACrC;AACA,YAAY;AACZ;IACI,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,SAAS;IACT,eAAe;AACnB;AACA,sBAAsB;AACtB;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,wBAAwB;IACxB,iBAAiB;IACjB,SAAS;AACb;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;;AAEf;AACA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,0BAA0B;AAC9B;AACA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;AACA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;AACA;IACI,sBAAsB;AAC1B;AACA,wBAAwB;AACxB;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,uBAAuB;AAC3B;AACA,qCAAqC;AACrC;IACI,UAAU;IACV,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;AAC1B;AACA,0BAA0B;AAC1B;;IAEI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,6BAA6B;IAC7B,gCAAgC;AACpC;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;AACnB;AACA;IACI,aAAa;IACb,YAAY;AAChB;AACA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,MAAM;IACN,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;;IAEI,yBAAyB;IACzB,6BAA6B;IAC7B,4BAA4B;IAC5B,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;;IAEI,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;AACA;;;IAGI,kBAAkB;IAClB,aAAa;IACb,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;;;;;;IAMI,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;;AAEA;;IAEI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,uBAAuB;;AAE3B;AACA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;AACA;;IAEI,YAAY;IACZ,uBAAuB;IACvB,cAAc;IACd,yBAAyB;IACzB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;;IAEI,eAAe;IACf,yBAAyB;IACzB,WAAW;IACX,oBAAoB;AACxB;;AAEA,iBAAiB;AACjB;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,MAAM;IACN,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA,cAAc;;AAEd;IACI,YAAY;IACZ,uBAAuB;;AAE3B;AACA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;;AAE3B;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300&display=swap');\n* {\n    font-family: 'Lato', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.project-container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 80px auto;\n    grid-template-columns: 270px auto;\n}\n/* top bar */\n.top-bar {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: #9DAD7F;\n    display: flex;\n}\n.top-bar-header {\n    display: flex;\n    align-items: center;\n    padding-left: 1rem;\n    gap: 20px;\n    font-size: 70px;\n}\n/* left side nav bar */\n.left-side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color:#C7CFB7;\n    padding-top: 2rem;\n    gap: 1rem;\n}\n\n.inbox,\n.today,\n.upcoming {\n    padding-left: 1rem;\n}\n\n.projects-header-container {\n    display: flex;\n    justify-content: space-between;\n}\n.projects-header-container>div{\n    padding: 1rem;\n}\n#projects-header {\n    font-weight: 700;\n    font-size: xx-large;\n    padding-left: 1.5rem;\n}\n.left-nav-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    \n}\n.add-project-button {\n    width: 1.5rem;\n    height: auto;\n    cursor: pointer;\n}\n.expand-button {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.projects-container {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n.project-button {\n    font-size: large;\n}\n.project-button.active {\n    font-weight: bolder;\n    text-decoration: underline;\n}\n.input-project-formcontainer{\n    align-self: center;\n    display: none;\n}\n.input-project-formcontainer>input {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title{\n    cursor:pointer;\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title:hover {\n    border:1px solid black;\n}\n/* list of to do items */\n.todoitems-container {\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 2/3;\n    text-align: center;\n    background-color: #F7F7E8;\n    display: flex;\n    justify-content: center;\n}\n/* container containing items to do */\n.items-container {\n    width: 75%;\n    padding: 2rem;\n}\n.current-project-header{\n    display: flex;\n    font-size: xx-large;\n    font-weight: 700;\n    padding-bottom: 0.5rem;\n}\n/* individual item cards */\n.item-card,\n.add-task{\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-top: 1px solid #C7CFB7;\n    border-bottom: 1px solid #C7CFB7;\n}\n.item-card .checked {\n    opacity: 0.3;\n}\n.card-left {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.checkbox {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.checkbox-tick {\n    display: none;\n}\n\n.check-button:hover {\n    background-color: #a7a797;\n}\n.card-title {\n    cursor: pointer;\n}\n.card-right {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.card-right > img {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.add-task {\n    justify-content: center;\n}\n.add-task:hover {\n    justify-content: center;\n    background-color:#aeb59f;\n    cursor: pointer;\n}\n.add-task-left{\n    display: flex;\n    gap: 0.25rem;\n}\n.add-task-button {\n    width: 1rem;\n    height: 1rem;\n}\n\n/* modal pop up */\n\n.bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.modal-content,\n.edit-card-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n\n.modal-header,\n.edit-card-header {\n    background-color: #9DAD7F;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    height: 3rem;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.modal-title,\n.edit-title {\n    font-size: 2rem;\n    padding-left: 1rem;\n    color: white;\n}\n.close-popup,   \n.close-detail-popup,\n.close-edit-popup {\n    position: absolute;\n    right: 0.1rem;\n    top: 0.8rem;\n    font-size: 2rem;\n    padding-right: 1rem;\n    cursor: pointer;\n    color: white;\n    line-height: 1rem;\n}\n\n.form-container,\n.edit-form-container {\n    margin: 4rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container>\ninput,\ninput:focus-visible,\n.edit-form-container>\ninput,\ninput:focus-visible {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n\n#submit-title,\n#edit-title {\n    font-size: 1.6rem;\n}\n.priority-radio {\n    display: flex;\n    height:3rem;\n    align-items: center;\n    gap: 1rem;\n}\n.radio-wrapper {\n    border: 1px solid black;\n\n}\n.radio-wrapper input {\n    display: none;\n}\n\n.radio-wrapper label:hover {\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.radio-wrapper input:checked + label{\n    font-weight: 900;\n}\n#submit-task,\n#edit-task {\n    width: 10rem;\n    background-color: white;\n    color: #557174;\n    border: 1px #557174 solid;\n    border-radius: 10px;\n    font-size: small;\n    font-weight: bold;\n}\n\n#submit-task:hover,\n#edit-task:hover{\n    cursor: pointer;\n    background-color: #557174;\n    color:white;\n    transition: all 0.3s;\n}\n\n/* detail modal */\n.detail-bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.detail-modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n.extra-content {\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4rem;\n    gap: 4rem;\n    font-size: xx-large;\n}\n\n/* edit card */\n\n.edit-card {\n    display:flex;\n    justify-content: center;\n    \n}\n.edit-card-content {\n    height: 15%;\n    width: 100%;\n    border: 1px solid black;\n\n}\n\n.edit-form-container {\n    margin: 1rem 5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Project constructor
class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    contains(taskName) {
        return this.tasks.some((task)=>task.getTitle()===taskName);
    }
    addTask(newTask) {
        this.tasks.push(newTask);
    }
    getTasks() {
        return this.tasks; 
    }
    getTask(taskTitle) {
        return this.tasks.find((task)=> task.title === taskTitle)
    }
    deleteTask(taskTitle) {
        this.tasks = this.tasks.filter((task) => task.title !== taskTitle);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Task constructor
class Task {
    constructor(title, details, date, priority) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
    };
    
    setTitle(title) {
        this.title = title;
    };
    
    getTitle(){
        return this.title;
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/ToDoList.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ToDoList {
    constructor() {
        this.projects = []
    }

    getProject(projectTitle) {
        return this.projects.find((project)=>project.getTitle() === projectTitle);
    }

    getProjects() {
        return this.projects
    }

    addProject(project) {
        this.projects.push(project)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoList */ "./src/modules/ToDoList.js");




let Projects = new _ToDoList__WEBPACK_IMPORTED_MODULE_2__["default"]()
localStorage.setItem('todolist', JSON.stringify(Projects))
class UI {
// EVENTLISTENER FOR ADD PROJECT BUTTON
    static initAddProjectButtons() {
        const addProjectButton = document.querySelector('.add-project-button');
        const submitProjectPopupInput = document.querySelector('#submit-project-title');
        addProjectButton.addEventListener('click', UI.openAddProjectPopup)
        submitProjectPopupInput.addEventListener('click', UI.addProject)
    }
    static openAddProjectPopup() {
        const addProjectPopup = document.querySelector('.input-project-formcontainer');
        if (addProjectPopup.style.display === 'block') {
            addProjectPopup.style.display = 'none';
        } else {
            addProjectPopup.style.display = 'block';
        }
    }
    static addProject() {
        const addProjectPopup = document.querySelector('.input-project-formcontainer');
        const inputProjectTitle = document.getElementById('input-project-title')
        const projectTitle = inputProjectTitle.value
        if (projectTitle==='') {
            alert('Project title cant be empty');
            return
        }
        let titles = Projects.getProjects().map(project => {return project.getTitle()})
        if (titles.includes(projectTitle)) {
            alert('Cant have same name')
            return
        }
        UI.createProjectTitleDOM(projectTitle);
        Projects.addProject(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectTitle));
        addProjectPopup.style.display = 'none';
        addProjectPopup.querySelector('input').value = '';
    }
    static createProjectTitleDOM(projectTitle) {
        const projectTitlesContainer = document.querySelector('.projects-container');
        projectTitlesContainer.innerHTML += `<div id="${projectTitle}" class="project-button">${projectTitle}</div>`
        UI.initProjectButtons()
    }
// EVENTLISTENERS FOR EACH PROJECT
    static initProjectButtons() {
        const projectButtons = document.querySelectorAll('.project-button');
        projectButtons.forEach((projectButton)=>{
            projectButton.addEventListener('click', UI.handleProjectButton)
        })
    }
    static handleProjectButton(e) {
        const projectTitle = e.target.textContent;
        const projectButtons = document.querySelectorAll('.project-button');
        projectButtons.forEach((projectButton)=>{
            projectButton.classList.remove('active')
        })
        e.target.classList.add('active')
        console.log(e.target)
        UI.openProject(projectTitle)
    }
    static openProject(projectTitle, projectButton) {
        UI.loadProjectContent(projectTitle)
    }
    static loadProjectContent(projectTitle) {
        const toDoItemsContainer = document.querySelector('.todoitems-container');
        toDoItemsContainer.innerHTML = `
        <div class="items-container">
            <div class="current-project-header">${projectTitle}</div>
            <div class="task-list"></div>
            <div class="add-task">
                <div class="add-task-left">
                  <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/add.svg" alt=""  class="add-task-button">
                  <div class="add-task-title">Add task</div>
                </div>
            </div>
        </div>`
        UI.loadTasks(projectTitle);
    }
    static loadTasks(projectTitle){
        const projectToBeLoaded = Projects.getProject(projectTitle)
        projectToBeLoaded.getTasks().forEach((task)=>{
            UI.displayTask(task.title, task.date, task.priority)
        })
        UI.initAddTaskButtons(projectTitle);
    }
    static displayTask(title, date, priority) {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML += `
        <div class="item-card">
            <div class="card-left">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkboxEmpty.svg" alt="" class="checkbox-empty checkbox">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkbox.svg" alt="" class="checkbox-tick checkbox">
                <div class="card-title ${title}">${title}</div>
            </div>
            <div class="card-right">
                <div class="priority">${priority}</div>
                <div class="dueDate">${date}</div>
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/edit.svg" alt="" class="edit-button">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/delete.svg" alt="" class="delete-button">
            </div>
        </div>`
        UI.initTaskButtons()
    }

// eventlistener for the buttons within each task
    static initTaskButtons() {
        const cardLefts = document.querySelectorAll('.card-left');
        cardLefts.forEach((cardLeft)=>{
            cardLeft.addEventListener('click', UI.handleTickButton);
        })
        const deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach((deleteButton)=>{
            deleteButton.addEventListener('click', UI.handleDeleteButton);
        })

        const cardTitles = document.querySelectorAll('.card-title');
        cardTitles.forEach((cardTitle)=>{
            cardTitle.addEventListener('click', UI.handleTitleButton);
        })

        const editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach((editButton)=>{
            editButton.addEventListener('click', UI.handleEditButton)
        })
    }

    static handleTickButton(e) {
        if (e.target.classList.contains('checkbox-empty')) {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
            e.target.nextElementSibling.nextElementSibling.style.textDecoration = 'line-through';
            let parent = e.target.parentElement.parentElement;
            parent.style.opacity = '0.3';
        }
        if (e.target.classList.contains('checkbox-tick')) {
            e.target.style.display = 'none';
            e.target.previousElementSibling.style.display = 'block';
            e.target.nextElementSibling.style.textDecoration = 'none';
            let parent = e.target.parentElement.parentElement;
            parent.style.opacity = '1';
        }
    }
    static handleDeleteButton(e) {
        const taskTitle = e.target.parentElement.previousElementSibling.querySelector('.card-title').textContent
        const projectTitle = document.querySelector('.current-project-header').textContent
        const currentProject = Projects.getProject(projectTitle)
        currentProject.deleteTask(taskTitle);
        UI.clearTasks()
        UI.loadProjectContent(projectTitle);
    }

    static handleTitleButton(e) {
        const taskTitle = e.target.classList[1];
        const projectTitle = document.querySelector('.current-project-header').textContent;
        const currentProject = Projects.getProject(projectTitle)
        const currentTask = currentProject.getTask(taskTitle);
        UI.showDetails(currentTask.title, currentTask.details, currentTask.date, currentTask.priority);
    }
    static showDetails(title, details, date, priority) {
        const detailPopupModal = document.querySelector('.detail-bg-modal');
        detailPopupModal.innerHTML =`
        <div class='detail-modal-content'>
            <div class="modal-header">
                <div class="modal-title">More information!</div>
            </div>
            <div class="close-detail-popup">x</div>
            <div class="extra-content">
                <div class="extra-title">Title: ${title}</div>
                <div class="extra-details">Details: ${details}</div>
                <div class="extra-priority">Priority: ${priority}</div>
                <div class="extra-due-date">Due on ${date}</div>
            </div>
        </div>
        `
        detailPopupModal.style.display = 'flex'
        UI.initCloseDetailPopupButton(detailPopupModal)
    }
    static initCloseDetailPopupButton(detailPopupModal) {
        const closeButton = document.querySelector('.close-detail-popup')
        closeButton.addEventListener('click', ()=>{
            detailPopupModal.style.display = 'none';
            detailPopupModal.innerHTML = '';
        })
        document.addEventListener('keydown', (e)=>{
            if (e.key === 'Escape') {
                detailPopupModal.style.display = 'none';
                detailPopupModal.innerHTML = '';
            }
        })
    }

    static handleEditButton(e) {
        const itemCard = e.target.parentElement.parentElement
        if (e.target.parentElement.parentElement.nextElementSibling) {
            e.target.parentElement.parentElement.nextElementSibling.remove()
        } else {
            const editDetails = document.createElement('div');
            editDetails.classList.add("edit-card");
            editDetails.innerHTML = `
                <div class="edit-card-content">
                    <div class="edit-card-header">
                        <div class="edit-title">Edit details</div>
                        <div class="close-edit-popup">x</div>
                    </div>
                    <form action="" class="edit-form-container">
                        <input type="text" id="edit-title" name="edit-title" placeholder="if have then put" value='dynamic' required>
                        <input type="textarea" id="edit-details" name="edit-details" placeholder="if have then put" value='dynamic'>
                        <input type="date" id="edit-date" name="edit-date" value='dynamic'>
                        <div class="priority-radio">
                            <div class="priority-header">Priority: </div>
                            <div class="low-priority radio-wrapper">
                                <input type="radio" id="low-priority" name="edit-priority" value="low" checked>
                                <label for="low-priority">LOW</label>
                            </div>
                            <div class="medium-priority radio-wrapper">
                                <input type="radio" id="medium-priority" name="edit-priority" value="medium">
                                <label for="medium-priority">MEDIUM</label>
                            </div>
                            <div class="high-priority radio-wrapper">
                                <input type="radio" id="high-priority" name="edit-priority" value="high">
                                <label for="high-priority">HIGH</label>
                            </div>
                        </div>
                        <input type="submit" id='submit-task' value="ADD TO DO">
                    </form> 
                </div>
            `
            itemCard.insertAdjacentElement('afterend', editDetails)
            UI.initEditFormLogic(e)
        }
    }
    static initEditFormLogic(e) {
        const closePopup = document.querySelector('.close-edit-popup');
        const editContainer = document.querySelector('.edit-card');
        closePopup.addEventListener('click', ()=>{
            editContainer.remove()
        })
        
        const editForm = document.querySelector('.edit-form-container');
        editForm.addEventListener('submit', UI.handleEditTaskInput);
    }
    static handleEditTaskInput(e) {
        e.preventDefault();
        const taskTitle = e.target.parentNode.parentNode.previousElementSibling.querySelector('.card-title').textContent;
        const projectTitle = document.querySelector('.project-button.active').textContent
        const currentProject = Projects.getProject(projectTitle)
        const currentTask = currentProject.getTask(taskTitle);
        let title = e.target['edit-title'].value;
        let details = e.target['edit-details'].value;
        let date = e.target['edit-date'].value;
        let priority = e.target['edit-priority'].value;
        UI.editTask(e, currentTask, title, details, date, priority)
    }
    static editTask(e, currentTask, title, details, date, priority) {
        currentTask.title = title
        currentTask.details = details
        currentTask.date = date
        currentTask.priority = priority
        UI.displayEditedTask(e, title, date, priority);
    }
    static displayEditedTask(e, title, date, priority) {
        const taskToBeEdited = e.target.parentNode.parentNode.previousElementSibling;
        taskToBeEdited.innerHTML = `
        <div class="card-left">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkboxEmpty.svg" alt="" class="checkbox-empty checkbox">
                <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkbox.svg" alt="" class="checkbox-tick checkbox">
                <div class="card-title ${title}">${title}</div>
            </div>
        <div class="card-right">
            <div class="priority">${priority}</div>
            <div class="dueDate">${date}</div>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/edit.svg" alt="" class="edit-button">
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/delete.svg" alt="" class="delete-button">
        </div>`
        e.target.parentNode.parentNode.remove()
        UI.initTaskButtons();
    }
// EVENTLISTENER FOR ADD TASK BUTTON IN EACH PROJ
    static initAddTaskButtons() {
        const addTaskButton = document.querySelector('.add-task');
        const addTaskPopup = document.querySelector('.bg-modal');
        const addTaskForm = document.querySelector('.form-container');
        const closeTaskPopup = document.querySelector('.close-popup');
        addTaskButton.addEventListener('click', ()=>{
            addTaskPopup.style.display = 'flex';
        });
        closeTaskPopup.addEventListener('click', ()=>{
            addTaskPopup.style.display = 'none';
        });
        addTaskPopup.addEventListener('keydown', UI.closeTaskPopupWithKeyboard)
        addTaskForm.addEventListener('submit', UI.handleInput)
    }   
    static handleInput(e) {
        e.preventDefault();
        const projectTitle = document.querySelector('.project-button.active').textContent
        const currentProject = Projects.getProject(projectTitle)
        const addTaskPopup = document.querySelector('.bg-modal');
        let title = e.target['submit-title'].value;
        let details = e.target['submit-details'].value;
        let date = e.target['submit-date'].value;
        let priority = e.target['submit-priority'].value;
        if (currentProject.contains(title)) {
            alert('NO SAME TASK TITLE');
            addTaskPopup.style.display = 'none';
            return
        }
        currentProject.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](title, details, date, priority))
        addTaskPopup.style.display = 'none';
        UI.displayTask(title, date, priority);
    }
    static closeTaskPopupWithKeyboard(e) {
        const addTaskPopup = document.querySelector('.bg-modal');
        if (e.key === 'Escape') {
            addTaskPopup.style.display = 'none';
        }
    }

    static clearTasks() {
        let tasksContainer = document.querySelector('.todoitems-container')
        tasksContainer.innerHTML = '';
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



_modules_UI__WEBPACK_IMPORTED_MODULE_0__["default"].initAddProjectButtons();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU0sSUFBSSxNQUFNO0FBQ3pEO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRCx1Q0FBdUMsS0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxNQUFNO0FBQ3hELHNEQUFzRCxRQUFRO0FBQzlELHdEQUF3RCxTQUFTO0FBQ2pFLHFEQUFxRCxLQUFLO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU0sSUFBSSxNQUFNO0FBQ3pEO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QyxtQ0FBbUMsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDclVmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ1Q7O0FBRXBCLHlFQUF3QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1RvRG9MaXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI3MHB4IGF1dG87XFxufVxcbi8qIHRvcCBiYXIgKi9cXG4udG9wLWJhciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REFEN0Y7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b3AtYmFyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDcwcHg7XFxufVxcbi8qIGxlZnQgc2lkZSBuYXYgYmFyICovXFxuLmxlZnQtc2lkZS1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzdDRkI3O1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5ib3gsXFxuLnRvZGF5LFxcbi51cGNvbWluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyPmRpdntcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuI3Byb2plY3RzLWhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcbn1cXG4ubGVmdC1uYXYtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZXhwYW5kLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4ucHJvamVjdC1idXR0b24uYWN0aXZlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5pbnB1dC1wcm9qZWN0LWZvcm1jb250YWluZXJ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmlucHV0LXByb2plY3QtZm9ybWNvbnRhaW5lcj5pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4jc3VibWl0LXByb2plY3QtdGl0bGV7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuI3N1Ym1pdC1wcm9qZWN0LXRpdGxlOmhvdmVyIHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG59XFxuLyogbGlzdCBvZiB0byBkbyBpdGVtcyAqL1xcbi50b2RvaXRlbXMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdFODtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi8qIGNvbnRhaW5lciBjb250YWluaW5nIGl0ZW1zIHRvIGRvICovXFxuLml0ZW1zLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcbi5jdXJyZW50LXByb2plY3QtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbn1cXG4vKiBpbmRpdmlkdWFsIGl0ZW0gY2FyZHMgKi9cXG4uaXRlbS1jYXJkLFxcbi5hZGQtdGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQzdDRkI3O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0M3Q0ZCNztcXG59XFxuLml0ZW0tY2FyZCAuY2hlY2tlZCB7XFxuICAgIG9wYWNpdHk6IDAuMztcXG59XFxuLmNhcmQtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja2JveC10aWNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNoZWNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2E3OTc7XFxufVxcbi5jYXJkLXRpdGxlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uY2FyZC1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLmNhcmQtcmlnaHQgPiBpbWcge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojYWViNTlmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hZGQtdGFzay1sZWZ0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcbi5hZGQtdGFzay1idXR0b24ge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4vKiBtb2RhbCBwb3AgdXAgKi9cXG5cXG4uYmctbW9kYWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcbi5tb2RhbC1jb250ZW50LFxcbi5lZGl0LWNhcmQtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLm1vZGFsLWhlYWRlcixcXG4uZWRpdC1jYXJkLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REFEN0Y7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwtdGl0bGUsXFxuLmVkaXQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2xvc2UtcG9wdXAsICAgXFxuLmNsb3NlLWRldGFpbC1wb3B1cCxcXG4uY2xvc2UtZWRpdC1wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuMXJlbTtcXG4gICAgdG9wOiAwLjhyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIsXFxuLmVkaXQtZm9ybS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcj5cXG5pbnB1dCxcXG5pbnB1dDpmb2N1cy12aXNpYmxlLFxcbi5lZGl0LWZvcm0tY29udGFpbmVyPlxcbmlucHV0LFxcbmlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3N1Ym1pdC10aXRsZSxcXG4jZWRpdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG4ucHJpb3JpdHktcmFkaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6M3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4ucmFkaW8td3JhcHBlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG4ucmFkaW8td3JhcHBlciBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYWRpby13cmFwcGVyIGxhYmVsOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFkaW8td3JhcHBlciBpbnB1dDpjaGVja2VkICsgbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiNzdWJtaXQtdGFzayxcXG4jZWRpdC10YXNrIHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6ICM1NTcxNzQ7XFxuICAgIGJvcmRlcjogMXB4ICM1NTcxNzQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jc3VibWl0LXRhc2s6aG92ZXIsXFxuI2VkaXQtdGFzazpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU3MTc0O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi8qIGRldGFpbCBtb2RhbCAqL1xcbi5kZXRhaWwtYmctbW9kYWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcbi5kZXRhaWwtbW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmV4dHJhLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICBnYXA6IDRyZW07XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi8qIGVkaXQgY2FyZCAqL1xcblxcbi5lZGl0LWNhcmQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuLmVkaXQtY2FyZC1jb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG59XFxuXFxuLmVkaXQtZm9ybS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDFyZW0gNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGlDQUFpQztBQUNyQztBQUNBLFlBQVk7QUFDWjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ks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LGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcbioge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjcwcHggYXV0bztcXG59XFxuLyogdG9wIGJhciAqL1xcbi50b3AtYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQUQ3RjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnRvcC1iYXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG59XFxuLyogbGVmdCBzaWRlIG5hdiBiYXIgKi9cXG4ubGVmdC1zaWRlLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDN0NGQjc7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5pbmJveCxcXG4udG9kYXksXFxuLnVwY29taW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3RzLWhlYWRlci1jb250YWluZXI+ZGl2e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4jcHJvamVjdHMtaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxufVxcbi5sZWZ0LW5hdi1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIFxcbn1cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBhbmQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcbi5wcm9qZWN0LWJ1dHRvbi5hY3RpdmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmlucHV0LXByb2plY3QtZm9ybWNvbnRhaW5lcntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaW5wdXQtcHJvamVjdC1mb3JtY29udGFpbmVyPmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcbiNzdWJtaXQtcHJvamVjdC10aXRsZXtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4jc3VibWl0LXByb2plY3QtdGl0bGU6aG92ZXIge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4vKiBsaXN0IG9mIHRvIGRvIGl0ZW1zICovXFxuLnRvZG9pdGVtcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0U4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogY29udGFpbmVyIGNvbnRhaW5pbmcgaXRlbXMgdG8gZG8gKi9cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLmN1cnJlbnQtcHJvamVjdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi8qIGluZGl2aWR1YWwgaXRlbSBjYXJkcyAqL1xcbi5pdGVtLWNhcmQsXFxuLmFkZC10YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDN0NGQjc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzdDRkI3O1xcbn1cXG4uaXRlbS1jYXJkIC5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG4uY2FyZC1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LXRpY2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTc5NztcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4uY2FyZC1yaWdodCA+IGltZyB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhZWI1OWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrLWxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi8qIG1vZGFsIHBvcCB1cCAqL1xcblxcbi5iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQsXFxuLmVkaXQtY2FyZC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4ubW9kYWwtaGVhZGVyLFxcbi5lZGl0LWNhcmQtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQUQ3RjtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbC10aXRsZSxcXG4uZWRpdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jbG9zZS1wb3B1cCwgICBcXG4uY2xvc2UtZGV0YWlsLXBvcHVwLFxcbi5jbG9zZS1lZGl0LXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC4xcmVtO1xcbiAgICB0b3A6IDAuOHJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcixcXG4uZWRpdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPlxcbmlucHV0LFxcbmlucHV0OmZvY3VzLXZpc2libGUsXFxuLmVkaXQtZm9ybS1jb250YWluZXI+XFxuaW5wdXQsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc3VibWl0LXRpdGxlLFxcbiNlZGl0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcbi5wcmlvcml0eS1yYWRpbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDozcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5yYWRpby13cmFwcGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxufVxcbi5yYWRpby13cmFwcGVyIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJhZGlvLXdyYXBwZXIgbGFiZWw6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yYWRpby13cmFwcGVyIGlucHV0OmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3N1Ym1pdC10YXNrLFxcbiNlZGl0LXRhc2sge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzU1NzE3NDtcXG4gICAgYm9yZGVyOiAxcHggIzU1NzE3NCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNzdWJtaXQtdGFzazpob3ZlcixcXG4jZWRpdC10YXNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTcxNzQ7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLyogZGV0YWlsIG1vZGFsICovXFxuLmRldGFpbC1iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLmRldGFpbC1tb2RhbC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZXh0cmEtY29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGdhcDogNHJlbTtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuLyogZWRpdCBjYXJkICovXFxuXFxuLmVkaXQtY2FyZCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG4uZWRpdC1jYXJkLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG5cXG4uZWRpdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMXJlbSA1cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFByb2plY3QgY29uc3RydWN0b3JcbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG4gICAgY29udGFpbnModGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzayk9PnRhc2suZ2V0VGl0bGUoKT09PXRhc2tOYW1lKTtcbiAgICB9XG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzOyBcbiAgICB9XG4gICAgZ2V0VGFzayh0YXNrVGl0bGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzayk9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpXG4gICAgfVxuICAgIGRlbGV0ZVRhc2sodGFza1RpdGxlKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGFza1RpdGxlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3QiLCIvLyBUYXNrIGNvbnN0cnVjdG9yXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfTtcbiAgICBcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfTtcbiAgICBcbiAgICBnZXRUaXRsZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiY2xhc3MgVG9Eb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KT0+cHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VGl0bGUpO1xuICAgIH1cblxuICAgIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1xuICAgIH1cblxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9MaXN0OyIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vVG9Eb0xpc3QnO1xuXG5sZXQgUHJvamVjdHMgPSBuZXcgVG9Eb0xpc3QoKVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9saXN0JywgSlNPTi5zdHJpbmdpZnkoUHJvamVjdHMpKVxuY2xhc3MgVUkge1xuLy8gRVZFTlRMSVNURU5FUiBGT1IgQUREIFBST0pFQ1QgQlVUVE9OXG4gICAgc3RhdGljIGluaXRBZGRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgY29uc3Qgc3VibWl0UHJvamVjdFBvcHVwSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LXByb2plY3QtdGl0bGUnKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLm9wZW5BZGRQcm9qZWN0UG9wdXApXG4gICAgICAgIHN1Ym1pdFByb2plY3RQb3B1cElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuYWRkUHJvamVjdClcbiAgICB9XG4gICAgc3RhdGljIG9wZW5BZGRQcm9qZWN0UG9wdXAoKSB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1wcm9qZWN0LWZvcm1jb250YWluZXInKTtcbiAgICAgICAgaWYgKGFkZFByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZFByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgYWRkUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXByb2plY3QtZm9ybWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpbnB1dFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1wcm9qZWN0LXRpdGxlJylcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gaW5wdXRQcm9qZWN0VGl0bGUudmFsdWVcbiAgICAgICAgaWYgKHByb2plY3RUaXRsZT09PScnKSB7XG4gICAgICAgICAgICBhbGVydCgnUHJvamVjdCB0aXRsZSBjYW50IGJlIGVtcHR5Jyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGl0bGVzID0gUHJvamVjdHMuZ2V0UHJvamVjdHMoKS5tYXAocHJvamVjdCA9PiB7cmV0dXJuIHByb2plY3QuZ2V0VGl0bGUoKX0pXG4gICAgICAgIGlmICh0aXRsZXMuaW5jbHVkZXMocHJvamVjdFRpdGxlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ0NhbnQgaGF2ZSBzYW1lIG5hbWUnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgVUkuY3JlYXRlUHJvamVjdFRpdGxlRE9NKHByb2plY3RUaXRsZSk7XG4gICAgICAgIFByb2plY3RzLmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdFRpdGxlKSk7XG4gICAgICAgIGFkZFByb2plY3RQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBhZGRQcm9qZWN0UG9wdXAucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdFRpdGxlRE9NKHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuICAgICAgICBwcm9qZWN0VGl0bGVzQ29udGFpbmVyLmlubmVySFRNTCArPSBgPGRpdiBpZD1cIiR7cHJvamVjdFRpdGxlfVwiIGNsYXNzPVwicHJvamVjdC1idXR0b25cIj4ke3Byb2plY3RUaXRsZX08L2Rpdj5gXG4gICAgICAgIFVJLmluaXRQcm9qZWN0QnV0dG9ucygpXG4gICAgfVxuLy8gRVZFTlRMSVNURU5FUlMgRk9SIEVBQ0ggUFJPSkVDVFxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKHByb2plY3RCdXR0b24pPT57XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuaGFuZGxlUHJvamVjdEJ1dHRvbilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZVByb2plY3RCdXR0b24oZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgocHJvamVjdEJ1dHRvbik9PntcbiAgICAgICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICB9XG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3RUaXRsZSwgcHJvamVjdEJ1dHRvbikge1xuICAgICAgICBVSS5sb2FkUHJvamVjdENvbnRlbnQocHJvamVjdFRpdGxlKVxuICAgIH1cbiAgICBzdGF0aWMgbG9hZFByb2plY3RDb250ZW50KHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCB0b0RvSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2l0ZW1zLWNvbnRhaW5lcicpO1xuICAgICAgICB0b0RvSXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1wcm9qZWN0LWhlYWRlclwiPiR7cHJvamVjdFRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGlzdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9hZGQuc3ZnXCIgYWx0PVwiXCIgIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stdGl0bGVcIj5BZGQgdGFzazwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgVUkubG9hZFRhc2tzKHByb2plY3RUaXRsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2FkVGFza3MocHJvamVjdFRpdGxlKXtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvQmVMb2FkZWQgPSBQcm9qZWN0cy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgcHJvamVjdFRvQmVMb2FkZWQuZ2V0VGFza3MoKS5mb3JFYWNoKCh0YXNrKT0+e1xuICAgICAgICAgICAgVUkuZGlzcGxheVRhc2sodGFzay50aXRsZSwgdGFzay5kYXRlLCB0YXNrLnByaW9yaXR5KVxuICAgICAgICB9KVxuICAgICAgICBVSS5pbml0QWRkVGFza0J1dHRvbnMocHJvamVjdFRpdGxlKTtcbiAgICB9XG4gICAgc3RhdGljIGRpc3BsYXlUYXNrKHRpdGxlLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICAgICAgdGFza0xpc3QuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9jaGVja2JveEVtcHR5LnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiY2hlY2tib3gtZW1wdHkgY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ZaXBBbnRob255L2JldHRlclRvRG9MaXN0LzUxMDZmYjcxOGEwNTQ5NDBiZjQxNzgxYTNhNWQ2ZTRhYTQ5OGI5YTAvZGlzdC9pbWFnZXMvY2hlY2tib3guc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJjaGVja2JveC10aWNrIGNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgJHt0aXRsZX1cIj4ke3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPiR7cHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj4ke2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vWWlwQW50aG9ueS9iZXR0ZXJUb0RvTGlzdC81MTA2ZmI3MThhMDU0OTQwYmY0MTc4MWEzYTVkNmU0YWE0OThiOWEwL2Rpc3QvaW1hZ2VzL2VkaXQuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJlZGl0LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9kZWxldGUuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgICAgICBVSS5pbml0VGFza0J1dHRvbnMoKVxuICAgIH1cblxuLy8gZXZlbnRsaXN0ZW5lciBmb3IgdGhlIGJ1dHRvbnMgd2l0aGluIGVhY2ggdGFza1xuICAgIHN0YXRpYyBpbml0VGFza0J1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGNhcmRMZWZ0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWxlZnQnKTtcbiAgICAgICAgY2FyZExlZnRzLmZvckVhY2goKGNhcmRMZWZ0KT0+e1xuICAgICAgICAgICAgY2FyZExlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5oYW5kbGVUaWNrQnV0dG9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoZGVsZXRlQnV0dG9uKT0+e1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuaGFuZGxlRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjYXJkVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtdGl0bGUnKTtcbiAgICAgICAgY2FyZFRpdGxlcy5mb3JFYWNoKChjYXJkVGl0bGUpPT57XG4gICAgICAgICAgICBjYXJkVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5oYW5kbGVUaXRsZUJ1dHRvbik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idXR0b24nKTtcbiAgICAgICAgZWRpdEJ1dHRvbnMuZm9yRWFjaCgoZWRpdEJ1dHRvbik9PntcbiAgICAgICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5oYW5kbGVFZGl0QnV0dG9uKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVUaWNrQnV0dG9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gtZW1wdHknKSkge1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBwYXJlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjMnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94LXRpY2snKSkge1xuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgcGFyZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZURlbGV0ZUJ1dHRvbihlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuY2FyZC10aXRsZScpLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QtaGVhZGVyJykudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBQcm9qZWN0cy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgY3VycmVudFByb2plY3QuZGVsZXRlVGFzayh0YXNrVGl0bGUpO1xuICAgICAgICBVSS5jbGVhclRhc2tzKClcbiAgICAgICAgVUkubG9hZFByb2plY3RDb250ZW50KHByb2plY3RUaXRsZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZVRpdGxlQnV0dG9uKGUpIHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZS50YXJnZXQuY2xhc3NMaXN0WzFdO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LWhlYWRlcicpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IFByb2plY3RzLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxuICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IGN1cnJlbnRQcm9qZWN0LmdldFRhc2sodGFza1RpdGxlKTtcbiAgICAgICAgVUkuc2hvd0RldGFpbHMoY3VycmVudFRhc2sudGl0bGUsIGN1cnJlbnRUYXNrLmRldGFpbHMsIGN1cnJlbnRUYXNrLmRhdGUsIGN1cnJlbnRUYXNrLnByaW9yaXR5KTtcbiAgICB9XG4gICAgc3RhdGljIHNob3dEZXRhaWxzKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICBjb25zdCBkZXRhaWxQb3B1cE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbC1iZy1tb2RhbCcpO1xuICAgICAgICBkZXRhaWxQb3B1cE1vZGFsLmlubmVySFRNTCA9YFxuICAgICAgICA8ZGl2IGNsYXNzPSdkZXRhaWwtbW9kYWwtY29udGVudCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+TW9yZSBpbmZvcm1hdGlvbiE8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlLWRldGFpbC1wb3B1cFwiPng8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLXRpdGxlXCI+VGl0bGU6ICR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWRldGFpbHNcIj5EZXRhaWxzOiAke2RldGFpbHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLXByaW9yaXR5XCI+UHJpb3JpdHk6ICR7cHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWR1ZS1kYXRlXCI+RHVlIG9uICR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICBkZXRhaWxQb3B1cE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgVUkuaW5pdENsb3NlRGV0YWlsUG9wdXBCdXR0b24oZGV0YWlsUG9wdXBNb2RhbClcbiAgICB9XG4gICAgc3RhdGljIGluaXRDbG9zZURldGFpbFBvcHVwQnV0dG9uKGRldGFpbFBvcHVwTW9kYWwpIHtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZGV0YWlsLXBvcHVwJylcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgZGV0YWlsUG9wdXBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZGV0YWlsUG9wdXBNb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGRldGFpbFBvcHVwTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBkZXRhaWxQb3B1cE1vZGFsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVFZGl0QnV0dG9uKGUpIHtcbiAgICAgICAgY29uc3QgaXRlbUNhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXREZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlZGl0RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZWRpdC1jYXJkXCIpO1xuICAgICAgICAgICAgZWRpdERldGFpbHMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1jYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtdGl0bGVcIj5FZGl0IGRldGFpbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1lZGl0LXBvcHVwXCI+eDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJlZGl0LWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVkaXQtdGl0bGVcIiBuYW1lPVwiZWRpdC10aXRsZVwiIHBsYWNlaG9sZGVyPVwiaWYgaGF2ZSB0aGVuIHB1dFwiIHZhbHVlPSdkeW5hbWljJyByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBpZD1cImVkaXQtZGV0YWlsc1wiIG5hbWU9XCJlZGl0LWRldGFpbHNcIiBwbGFjZWhvbGRlcj1cImlmIGhhdmUgdGhlbiBwdXRcIiB2YWx1ZT0nZHluYW1pYyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImVkaXQtZGF0ZVwiIG5hbWU9XCJlZGl0LWRhdGVcIiB2YWx1ZT0nZHluYW1pYyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHktaGVhZGVyXCI+UHJpb3JpdHk6IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3ctcHJpb3JpdHkgcmFkaW8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJsb3ctcHJpb3JpdHlcIiBuYW1lPVwiZWRpdC1wcmlvcml0eVwiIHZhbHVlPVwibG93XCIgY2hlY2tlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvdy1wcmlvcml0eVwiPkxPVzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGl1bS1wcmlvcml0eSByYWRpby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm1lZGl1bS1wcmlvcml0eVwiIG5hbWU9XCJlZGl0LXByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bS1wcmlvcml0eVwiPk1FRElVTTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZ2gtcHJpb3JpdHkgcmFkaW8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJoaWdoLXByaW9yaXR5XCIgbmFtZT1cImVkaXQtcHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpZ2gtcHJpb3JpdHlcIj5ISUdIPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBpZD0nc3VibWl0LXRhc2snIHZhbHVlPVwiQUREIFRPIERPXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICBpdGVtQ2FyZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgZWRpdERldGFpbHMpXG4gICAgICAgICAgICBVSS5pbml0RWRpdEZvcm1Mb2dpYyhlKVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBpbml0RWRpdEZvcm1Mb2dpYyhlKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZWRpdC1wb3B1cCcpO1xuICAgICAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2FyZCcpO1xuICAgICAgICBjbG9zZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGVkaXRDb250YWluZXIucmVtb3ZlKClcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgVUkuaGFuZGxlRWRpdFRhc2tJbnB1dCk7XG4gICAgfVxuICAgIHN0YXRpYyBoYW5kbGVFZGl0VGFza0lucHV0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuY2FyZC10aXRsZScpLnRleHRDb250ZW50O1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idXR0b24uYWN0aXZlJykudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBQcm9qZWN0cy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgY29uc3QgY3VycmVudFRhc2sgPSBjdXJyZW50UHJvamVjdC5nZXRUYXNrKHRhc2tUaXRsZSk7XG4gICAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0WydlZGl0LXRpdGxlJ10udmFsdWU7XG4gICAgICAgIGxldCBkZXRhaWxzID0gZS50YXJnZXRbJ2VkaXQtZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBsZXQgZGF0ZSA9IGUudGFyZ2V0WydlZGl0LWRhdGUnXS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZS50YXJnZXRbJ2VkaXQtcHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgVUkuZWRpdFRhc2soZSwgY3VycmVudFRhc2ssIHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSlcbiAgICB9XG4gICAgc3RhdGljIGVkaXRUYXNrKGUsIGN1cnJlbnRUYXNrLCB0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgY3VycmVudFRhc2sudGl0bGUgPSB0aXRsZVxuICAgICAgICBjdXJyZW50VGFzay5kZXRhaWxzID0gZGV0YWlsc1xuICAgICAgICBjdXJyZW50VGFzay5kYXRlID0gZGF0ZVxuICAgICAgICBjdXJyZW50VGFzay5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIFVJLmRpc3BsYXlFZGl0ZWRUYXNrKGUsIHRpdGxlLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHN0YXRpYyBkaXNwbGF5RWRpdGVkVGFzayhlLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3QgdGFza1RvQmVFZGl0ZWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgdGFza1RvQmVFZGl0ZWQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vWWlwQW50aG9ueS9iZXR0ZXJUb0RvTGlzdC81MTA2ZmI3MThhMDU0OTQwYmY0MTc4MWEzYTVkNmU0YWE0OThiOWEwL2Rpc3QvaW1hZ2VzL2NoZWNrYm94RW1wdHkuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJjaGVja2JveC1lbXB0eSBjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9jaGVja2JveC5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cImNoZWNrYm94LXRpY2sgY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSAke3RpdGxlfVwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPiR7cHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlRGF0ZVwiPiR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9lZGl0LnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiZWRpdC1idXR0b25cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9kZWxldGUuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCI+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpXG4gICAgICAgIFVJLmluaXRUYXNrQnV0dG9ucygpO1xuICAgIH1cbi8vIEVWRU5UTElTVEVORVIgRk9SIEFERCBUQVNLIEJVVFRPTiBJTiBFQUNIIFBST0pcbiAgICBzdGF0aWMgaW5pdEFkZFRhc2tCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tb2RhbCcpO1xuICAgICAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBjbG9zZVRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGFkZFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VUYXNrUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgYWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRUYXNrUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFVJLmNsb3NlVGFza1BvcHVwV2l0aEtleWJvYXJkKVxuICAgICAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBVSS5oYW5kbGVJbnB1dClcbiAgICB9ICAgXG4gICAgc3RhdGljIGhhbmRsZUlucHV0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1idXR0b24uYWN0aXZlJykudGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBQcm9qZWN0cy5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICAgICAgY29uc3QgYWRkVGFza1BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLW1vZGFsJyk7XG4gICAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0WydzdWJtaXQtdGl0bGUnXS52YWx1ZTtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBlLnRhcmdldFsnc3VibWl0LWRldGFpbHMnXS52YWx1ZTtcbiAgICAgICAgbGV0IGRhdGUgPSBlLnRhcmdldFsnc3VibWl0LWRhdGUnXS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZS50YXJnZXRbJ3N1Ym1pdC1wcmlvcml0eSddLnZhbHVlO1xuICAgICAgICBpZiAoY3VycmVudFByb2plY3QuY29udGFpbnModGl0bGUpKSB7XG4gICAgICAgICAgICBhbGVydCgnTk8gU0FNRSBUQVNLIFRJVExFJyk7XG4gICAgICAgICAgICBhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5KSlcbiAgICAgICAgYWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIFVJLmRpc3BsYXlUYXNrKHRpdGxlLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgfVxuICAgIHN0YXRpYyBjbG9zZVRhc2tQb3B1cFdpdGhLZXlib2FyZChlKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tb2RhbCcpO1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhclRhc2tzKCkge1xuICAgICAgICBsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2l0ZW1zLWNvbnRhaW5lcicpXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSVwiXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblVJLmluaXRBZGRQcm9qZWN0QnV0dG9ucygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==