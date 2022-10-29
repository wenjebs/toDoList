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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: 'Lato', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.project-container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 45px auto;\n    grid-template-columns: 270px auto;\n}\n/* top bar */\n.top-bar {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: #9DAD7F;\n    display: flex;\n}\n.top-bar-header {\n    display: flex;\n    align-items: center;\n    padding-left: 2rem;\n    gap: 20px;\n}\n/* left side nav bar */\n.left-side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color:#C7CFB7;\n    padding-top: 2rem;\n    gap: 1rem;\n}\n\n.inbox,\n.today,\n.upcoming {\n    padding-left: 1rem;\n}\n\n.projects-header-container {\n    display: flex;\n    justify-content: space-between;\n}\n.projects-header-container >div{\n    padding: 1rem;\n}\n.projects-header {\n    font-weight: 700;\n    font-size: x-large;\n}\n.left-nav-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    \n}\n.add-project-button {\n    width: 0.75rem;\n    height: 0.75rem;\n    cursor: pointer;\n}\n.expand-button {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.projects-container {\n    padding: 1rem;\n}\n\n.input-project-formcontainer{\n    align-self: center;\n    display: none;\n}\n.input-project-formcontainer>input {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title{\n    cursor:pointer;\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title:hover {\n    border:1px solid black;\n}\n/* list of to do items */\n.todoitems-container {\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 2/3;\n    text-align: center;\n    background-color: #F7F7E8;\n    display: flex;\n    justify-content: center;\n}\n/* container containing items to do */\n.items-container {\n    width: 75%;\n    padding: 2rem;\n}\n.current-project-header{\n    display: flex;\n    font-size: xx-large;\n    font-weight: 700;\n    padding-bottom: 0.5rem;\n}\n/* individual item cards */\n.item-card,\n.add-task{\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-top: 1px solid #C7CFB7;\n    border-bottom: 1px solid #C7CFB7;\n}\n.item-card .checked {\n    opacity: 0.3;\n}\n.card-left {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.checkbox {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.checkbox-tick {\n    display: none;\n}\n\n.check-button:hover {\n    background-color: #a7a797;\n}\n.card-title {\n    cursor: pointer;\n}\n.card-right {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.card-right > img {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.add-task {\n    justify-content: center;\n}\n.add-task:hover {\n    justify-content: center;\n    background-color:#aeb59f;\n    cursor: pointer;\n}\n.add-task-left{\n    display: flex;\n    gap: 0.25rem;\n}\n.add-task-button {\n    width: 1rem;\n    height: 1rem;\n}\n\n/* modal pop up */\n\n.bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.modal-content,\n.edit-card-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n\n.modal-header,\n.edit-card-header {\n    background-color: #9DAD7F;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    height: 3rem;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.modal-title,\n.edit-title {\n    font-size: 2rem;\n    padding-left: 1rem;\n    color: white;\n}\n.close-popup,   \n.close-detail-popup,\n.close-edit-popup {\n    position: absolute;\n    right: 0.1rem;\n    top: 0.8rem;\n    font-size: 2rem;\n    padding-right: 1rem;\n    cursor: pointer;\n    color: white;\n    line-height: 1rem;\n}\n\n.form-container,\n.edit-form-container {\n    margin: 4rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container>\ninput,\ninput:focus-visible,\n.edit-form-container>\ninput,\ninput:focus-visible {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n\n#submit-title,\n#edit-title {\n    font-size: 1.6rem;\n}\n.priority-radio {\n    display: flex;\n    height:3rem;\n    align-items: center;\n    gap: 1rem;\n}\n.radio-wrapper {\n    border: 1px solid black;\n\n}\n.radio-wrapper input {\n    display: none;\n}\n\n.radio-wrapper label:hover {\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.radio-wrapper input:checked + label{\n    font-weight: 900;\n}\n#submit-task,\n#edit-task {\n    width: 10rem;\n    background-color: white;\n    color: #557174;\n    border: 1px #557174 solid;\n    border-radius: 10px;\n    font-size: small;\n    font-weight: bold;\n}\n\n#submit-task:hover,\n#edit-task:hover{\n    cursor: pointer;\n    background-color: #557174;\n    color:white;\n    transition: all 0.3s;\n}\n\n/* detail modal */\n.detail-bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.detail-modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n.extra-content {\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4rem;\n    gap: 4rem;\n    font-size: xx-large;\n}\n\n/* edit card */\n\n.edit-card {\n    display:flex;\n    justify-content: center;\n    \n}\n.edit-card-content {\n    height: 15%;\n    width: 100%;\n    border: 1px solid black;\n\n}\n\n.edit-form-container {\n    margin: 1rem 5rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300&display=swap');\n* {\n    font-family: 'Lato', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.project-container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 45px auto;\n    grid-template-columns: 270px auto;\n}\n/* top bar */\n.top-bar {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: #9DAD7F;\n    display: flex;\n}\n.top-bar-header {\n    display: flex;\n    align-items: center;\n    padding-left: 2rem;\n    gap: 20px;\n}\n/* left side nav bar */\n.left-side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color:#C7CFB7;\n    padding-top: 2rem;\n    gap: 1rem;\n}\n\n.inbox,\n.today,\n.upcoming {\n    padding-left: 1rem;\n}\n\n.projects-header-container {\n    display: flex;\n    justify-content: space-between;\n}\n.projects-header-container >div{\n    padding: 1rem;\n}\n.projects-header {\n    font-weight: 700;\n    font-size: x-large;\n}\n.left-nav-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    \n}\n.add-project-button {\n    width: 0.75rem;\n    height: 0.75rem;\n    cursor: pointer;\n}\n.expand-button {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.projects-container {\n    padding: 1rem;\n}\n\n.input-project-formcontainer{\n    align-self: center;\n    display: none;\n}\n.input-project-formcontainer>input {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title{\n    cursor:pointer;\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n#submit-project-title:hover {\n    border:1px solid black;\n}\n/* list of to do items */\n.todoitems-container {\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 2/3;\n    text-align: center;\n    background-color: #F7F7E8;\n    display: flex;\n    justify-content: center;\n}\n/* container containing items to do */\n.items-container {\n    width: 75%;\n    padding: 2rem;\n}\n.current-project-header{\n    display: flex;\n    font-size: xx-large;\n    font-weight: 700;\n    padding-bottom: 0.5rem;\n}\n/* individual item cards */\n.item-card,\n.add-task{\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-top: 1px solid #C7CFB7;\n    border-bottom: 1px solid #C7CFB7;\n}\n.item-card .checked {\n    opacity: 0.3;\n}\n.card-left {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.checkbox {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.checkbox-tick {\n    display: none;\n}\n\n.check-button:hover {\n    background-color: #a7a797;\n}\n.card-title {\n    cursor: pointer;\n}\n.card-right {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.card-right > img {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.add-task {\n    justify-content: center;\n}\n.add-task:hover {\n    justify-content: center;\n    background-color:#aeb59f;\n    cursor: pointer;\n}\n.add-task-left{\n    display: flex;\n    gap: 0.25rem;\n}\n.add-task-button {\n    width: 1rem;\n    height: 1rem;\n}\n\n/* modal pop up */\n\n.bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.modal-content,\n.edit-card-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n\n.modal-header,\n.edit-card-header {\n    background-color: #9DAD7F;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    height: 3rem;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.modal-title,\n.edit-title {\n    font-size: 2rem;\n    padding-left: 1rem;\n    color: white;\n}\n.close-popup,   \n.close-detail-popup,\n.close-edit-popup {\n    position: absolute;\n    right: 0.1rem;\n    top: 0.8rem;\n    font-size: 2rem;\n    padding-right: 1rem;\n    cursor: pointer;\n    color: white;\n    line-height: 1rem;\n}\n\n.form-container,\n.edit-form-container {\n    margin: 4rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container>\ninput,\ninput:focus-visible,\n.edit-form-container>\ninput,\ninput:focus-visible {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n\n#submit-title,\n#edit-title {\n    font-size: 1.6rem;\n}\n.priority-radio {\n    display: flex;\n    height:3rem;\n    align-items: center;\n    gap: 1rem;\n}\n.radio-wrapper {\n    border: 1px solid black;\n\n}\n.radio-wrapper input {\n    display: none;\n}\n\n.radio-wrapper label:hover {\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.radio-wrapper input:checked + label{\n    font-weight: 900;\n}\n#submit-task,\n#edit-task {\n    width: 10rem;\n    background-color: white;\n    color: #557174;\n    border: 1px #557174 solid;\n    border-radius: 10px;\n    font-size: small;\n    font-weight: bold;\n}\n\n#submit-task:hover,\n#edit-task:hover{\n    cursor: pointer;\n    background-color: #557174;\n    color:white;\n    transition: all 0.3s;\n}\n\n/* detail modal */\n.detail-bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.detail-modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n.extra-content {\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4rem;\n    gap: 4rem;\n    font-size: xx-large;\n}\n\n/* edit card */\n\n.edit-card {\n    display:flex;\n    justify-content: center;\n    \n}\n.edit-card-content {\n    height: 15%;\n    width: 100%;\n    border: 1px solid black;\n\n}\n\n.edit-form-container {\n    margin: 1rem 5rem;\n}"],"sourceRoot":""}]);
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


let projects = [];
class UI {
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
        // select all buttons and set to non active
        // close all project popups
        // LOAD Project content
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
        const projectToBeLoaded = projects.find((project)=>project.getTitle() === projectTitle);
        projectToBeLoaded.getTasks().forEach((task)=>{
            UI.displayTask(task.title, task.date, task.priority)
        })
        UI.initAddTaskButtons(projectTitle);
    }

// display any present tasks
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
        const currentProject = projects.find((project)=>{
            return project.getTitle() === projectTitle
        });
        currentProject.deleteTask(taskTitle);
        UI.clearTasks()
        UI.loadProjectContent(projectTitle);
    }
    static handleTitleButton(e) {
        const taskTitle = e.target.classList[1];
                const projectTitle = document.querySelector('.current-project-header').textContent;
                const currentProject = projects.find((project)=>project.getTitle() === projectTitle);
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
        const currentProject = projects.filter((project) => project.getTitle() === projectTitle)[0];
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
        const inputProjectTitle = document.getElementById('input-project-title')
        const projectTitle = inputProjectTitle.value
        if (projectTitle==='') {
            alert('Project title cant be empty');
            return
        }
        let titles = projects.map(project => {return project.getTitle()})
        if (titles.includes(projectTitle)) {
            alert('Cant have same name')
            return
        }
        UI.createProjectTitleDOM(projectTitle);
        projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectTitle));
        console.log(projects);
    }
    static createProjectTitleDOM(projectTitle) {
        const projectTitlesContainer = document.querySelector('.projects-container');
        projectTitlesContainer.innerHTML += `<div id="${projectTitle}" class="project-button">${projectTitle}</div>`
        UI.initProjectButtons()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxZQUFZLHFHQUFxRyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLEtBQUssc0NBQXNDLGdCQUFnQixp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Ozs7Ozs7Ozs7Ozs7QUNsQmE7QUFDTjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxhQUFhO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE1BQU0sSUFBSSxNQUFNO0FBQ3pEO0FBQ0E7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRCx1Q0FBdUMsS0FBSztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE1BQU07QUFDNUQsMERBQTBELFFBQVE7QUFDbEUsNERBQTRELFNBQVM7QUFDckUseURBQXlELEtBQUs7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNkNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsMEJBQTBCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsYUFBYSwyQkFBMkIsYUFBYTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDek9mO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ1Q7O0FBRXBCLHlFQUF3QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNzBweCBhdXRvO1xcbn1cXG4vKiB0b3AgYmFyICovXFxuLnRvcC1iYXIge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOURBRDdGO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udG9wLWJhci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICAgIGdhcDogMjBweDtcXG59XFxuLyogbGVmdCBzaWRlIG5hdiBiYXIgKi9cXG4ubGVmdC1zaWRlLW5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNDN0NGQjc7XFxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5pbmJveCxcXG4udG9kYXksXFxuLnVwY29taW5nIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3RzLWhlYWRlci1jb250YWluZXIgPmRpdntcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLnByb2plY3RzLWhlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuLmxlZnQtbmF2LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgXFxufVxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICB3aWR0aDogMC43NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBhbmQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmlucHV0LXByb2plY3QtZm9ybWNvbnRhaW5lcntcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaW5wdXQtcHJvamVjdC1mb3JtY29udGFpbmVyPmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcbiNzdWJtaXQtcHJvamVjdC10aXRsZXtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG4jc3VibWl0LXByb2plY3QtdGl0bGU6aG92ZXIge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4vKiBsaXN0IG9mIHRvIGRvIGl0ZW1zICovXFxuLnRvZG9pdGVtcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0U4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogY29udGFpbmVyIGNvbnRhaW5pbmcgaXRlbXMgdG8gZG8gKi9cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLmN1cnJlbnQtcHJvamVjdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi8qIGluZGl2aWR1YWwgaXRlbSBjYXJkcyAqL1xcbi5pdGVtLWNhcmQsXFxuLmFkZC10YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDN0NGQjc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzdDRkI3O1xcbn1cXG4uaXRlbS1jYXJkIC5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG4uY2FyZC1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LXRpY2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTc5NztcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4uY2FyZC1yaWdodCA+IGltZyB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhZWI1OWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrLWxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi8qIG1vZGFsIHBvcCB1cCAqL1xcblxcbi5iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQsXFxuLmVkaXQtY2FyZC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4ubW9kYWwtaGVhZGVyLFxcbi5lZGl0LWNhcmQtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQUQ3RjtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tb2RhbC10aXRsZSxcXG4uZWRpdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jbG9zZS1wb3B1cCwgICBcXG4uY2xvc2UtZGV0YWlsLXBvcHVwLFxcbi5jbG9zZS1lZGl0LXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC4xcmVtO1xcbiAgICB0b3A6IDAuOHJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lcixcXG4uZWRpdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPlxcbmlucHV0LFxcbmlucHV0OmZvY3VzLXZpc2libGUsXFxuLmVkaXQtZm9ybS1jb250YWluZXI+XFxuaW5wdXQsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc3VibWl0LXRpdGxlLFxcbiNlZGl0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcbi5wcmlvcml0eS1yYWRpbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDozcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5yYWRpby13cmFwcGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxufVxcbi5yYWRpby13cmFwcGVyIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJhZGlvLXdyYXBwZXIgbGFiZWw6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yYWRpby13cmFwcGVyIGlucHV0OmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3N1Ym1pdC10YXNrLFxcbiNlZGl0LXRhc2sge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzU1NzE3NDtcXG4gICAgYm9yZGVyOiAxcHggIzU1NzE3NCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNzdWJtaXQtdGFzazpob3ZlcixcXG4jZWRpdC10YXNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTcxNzQ7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLyogZGV0YWlsIG1vZGFsICovXFxuLmRldGFpbC1iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLmRldGFpbC1tb2RhbC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZXh0cmEtY29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGdhcDogNHJlbTtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuLyogZWRpdCBjYXJkICovXFxuXFxuLmVkaXQtY2FyZCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG4uZWRpdC1jYXJkLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG5cXG4uZWRpdC1mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMXJlbSA1cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsaUNBQWlDO0FBQ3JDO0FBQ0EsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjs7QUFFQTs7O0lBR0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXOztBQUVmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7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O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQSxjQUFjOztBQUVkO0lBQ0ksWUFBWTtJQUNaLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI3MHB4IGF1dG87XFxufVxcbi8qIHRvcCBiYXIgKi9cXG4udG9wLWJhciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REFEN0Y7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b3AtYmFyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiBsZWZ0IHNpZGUgbmF2IGJhciAqL1xcbi5sZWZ0LXNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0M3Q0ZCNztcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmluYm94LFxcbi50b2RheSxcXG4udXBjb21pbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lciA+ZGl2e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG4ubGVmdC1uYXYtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAwLjc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuNzVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaW5wdXQtcHJvamVjdC1mb3JtY29udGFpbmVye1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5pbnB1dC1wcm9qZWN0LWZvcm1jb250YWluZXI+aW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuI3N1Ym1pdC1wcm9qZWN0LXRpdGxle1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcbiNzdWJtaXQtcHJvamVjdC10aXRsZTpob3ZlciB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxufVxcbi8qIGxpc3Qgb2YgdG8gZG8gaXRlbXMgKi9cXG4udG9kb2l0ZW1zLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RTg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBjb250YWluZXIgY29udGFpbmluZyBpdGVtcyB0byBkbyAqL1xcbi5pdGVtcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uY3VycmVudC1wcm9qZWN0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLyogaW5kaXZpZHVhbCBpdGVtIGNhcmRzICovXFxuLml0ZW0tY2FyZCxcXG4uYWRkLXRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0M3Q0ZCNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDN0NGQjc7XFxufVxcbi5pdGVtLWNhcmQgLmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcbi5jYXJkLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtdGljayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhNzk3O1xcbn1cXG4uY2FyZC10aXRsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmQtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi5jYXJkLXJpZ2h0ID4gaW1nIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FlYjU5ZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXRhc2stbGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLyogbW9kYWwgcG9wIHVwICovXFxuXFxuLmJnLW1vZGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCxcXG4uZWRpdC1jYXJkLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5tb2RhbC1oZWFkZXIsXFxuLmVkaXQtY2FyZC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOURBRDdGO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsLXRpdGxlLFxcbi5lZGl0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNsb3NlLXBvcHVwLCAgIFxcbi5jbG9zZS1kZXRhaWwtcG9wdXAsXFxuLmNsb3NlLWVkaXQtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjFyZW07XFxuICAgIHRvcDogMC44cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLFxcbi5lZGl0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXI+XFxuaW5wdXQsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSxcXG4uZWRpdC1mb3JtLWNvbnRhaW5lcj5cXG5pbnB1dCxcXG5pbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbiNzdWJtaXQtdGl0bGUsXFxuI2VkaXQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuLnByaW9yaXR5LXJhZGlvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OjNyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuLnJhZGlvLXdyYXBwZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG59XFxuLnJhZGlvLXdyYXBwZXIgaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmFkaW8td3JhcHBlciBsYWJlbDpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJhZGlvLXdyYXBwZXIgaW5wdXQ6Y2hlY2tlZCArIGxhYmVse1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4jc3VibWl0LXRhc2ssXFxuI2VkaXQtdGFzayB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNTU3MTc0O1xcbiAgICBib3JkZXI6IDFweCAjNTU3MTc0IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3N1Ym1pdC10YXNrOmhvdmVyLFxcbiNlZGl0LXRhc2s6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NzE3NDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4vKiBkZXRhaWwgbW9kYWwgKi9cXG4uZGV0YWlsLWJnLW1vZGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4uZGV0YWlsLW1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5leHRyYS1jb250ZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG4vKiBlZGl0IGNhcmQgKi9cXG5cXG4uZWRpdC1jYXJkIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxufVxcbi5lZGl0LWNhcmQtY29udGVudCB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxufVxcblxcbi5lZGl0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxcmVtIDVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gUHJvamVjdCBjb25zdHJ1Y3RvclxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuICAgIGdldFRpdGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBjb250YWlucyh0YXNrTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKT0+dGFzay5nZXRUaXRsZSgpPT09dGFza05hbWUpO1xuICAgIH1cbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7IFxuICAgIH1cbiAgICBnZXRUYXNrKHRhc2tUaXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKT0+IHRhc2sudGl0bGUgPT09IHRhc2tUaXRsZSlcbiAgICB9XG4gICAgZGVsZXRlVGFzayh0YXNrVGl0bGUpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0YXNrVGl0bGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdCIsIi8vIFRhc2sgY29uc3RydWN0b3JcbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9O1xuICAgIFxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9O1xuICAgIGdldFRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcbmxldCBwcm9qZWN0cyA9IFtdO1xuY2xhc3MgVUkge1xuLy8gRVZFTlRMSVNURU5FUlMgRk9SIEVBQ0ggUFJPSkVDVFxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b25zLmZvckVhY2goKHByb2plY3RCdXR0b24pPT57XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuaGFuZGxlUHJvamVjdEJ1dHRvbilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZVByb2plY3RCdXR0b24oZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgocHJvamVjdEJ1dHRvbik9PntcbiAgICAgICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KHByb2plY3RUaXRsZSlcbiAgICB9XG4gICAgc3RhdGljIG9wZW5Qcm9qZWN0KHByb2plY3RUaXRsZSwgcHJvamVjdEJ1dHRvbikge1xuICAgICAgICAvLyBzZWxlY3QgYWxsIGJ1dHRvbnMgYW5kIHNldCB0byBub24gYWN0aXZlXG4gICAgICAgIC8vIGNsb3NlIGFsbCBwcm9qZWN0IHBvcHVwc1xuICAgICAgICAvLyBMT0FEIFByb2plY3QgY29udGVudFxuICAgICAgICBVSS5sb2FkUHJvamVjdENvbnRlbnQocHJvamVjdFRpdGxlKVxuICAgIH1cbiAgICBzdGF0aWMgbG9hZFByb2plY3RDb250ZW50KHByb2plY3RUaXRsZSkge1xuICAgICAgICBjb25zdCB0b0RvSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2l0ZW1zLWNvbnRhaW5lcicpO1xuICAgICAgICB0b0RvSXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC1wcm9qZWN0LWhlYWRlclwiPiR7cHJvamVjdFRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGlzdFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9hZGQuc3ZnXCIgYWx0PVwiXCIgIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWRkLXRhc2stdGl0bGVcIj5BZGQgdGFzazwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgVUkubG9hZFRhc2tzKHByb2plY3RUaXRsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2FkVGFza3MocHJvamVjdFRpdGxlKXtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvQmVMb2FkZWQgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KT0+cHJvamVjdC5nZXRUaXRsZSgpID09PSBwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0VG9CZUxvYWRlZC5nZXRUYXNrcygpLmZvckVhY2goKHRhc2spPT57XG4gICAgICAgICAgICBVSS5kaXNwbGF5VGFzayh0YXNrLnRpdGxlLCB0YXNrLmRhdGUsIHRhc2sucHJpb3JpdHkpXG4gICAgICAgIH0pXG4gICAgICAgIFVJLmluaXRBZGRUYXNrQnV0dG9ucyhwcm9qZWN0VGl0bGUpO1xuICAgIH1cblxuLy8gZGlzcGxheSBhbnkgcHJlc2VudCB0YXNrc1xuICAgIHN0YXRpYyBkaXNwbGF5VGFzayh0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ZaXBBbnRob255L2JldHRlclRvRG9MaXN0LzUxMDZmYjcxOGEwNTQ5NDBiZjQxNzgxYTNhNWQ2ZTRhYTQ5OGI5YTAvZGlzdC9pbWFnZXMvY2hlY2tib3hFbXB0eS5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cImNoZWNrYm94LWVtcHR5IGNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vWWlwQW50aG9ueS9iZXR0ZXJUb0RvTGlzdC81MTA2ZmI3MThhMDU0OTQwYmY0MTc4MWEzYTVkNmU0YWE0OThiOWEwL2Rpc3QvaW1hZ2VzL2NoZWNrYm94LnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiY2hlY2tib3gtdGljayBjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlICR7dGl0bGV9XCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj4ke3ByaW9yaXR5fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkdWVEYXRlXCI+JHtkYXRlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9lZGl0LnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiZWRpdC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ZaXBBbnRob255L2JldHRlclRvRG9MaXN0LzUxMDZmYjcxOGEwNTQ5NDBiZjQxNzgxYTNhNWQ2ZTRhYTQ5OGI5YTAvZGlzdC9pbWFnZXMvZGVsZXRlLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICAgICAgVUkuaW5pdFRhc2tCdXR0b25zKClcbiAgICB9XG5cbi8vIGV2ZW50bGlzdGVuZXIgZm9yIHRoZSBidXR0b25zIHdpdGhpbiBlYWNoIHRhc2tcbiAgICBzdGF0aWMgaW5pdFRhc2tCdXR0b25zKCkge1xuICAgICAgICBjb25zdCBjYXJkTGVmdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1sZWZ0Jyk7XG4gICAgICAgIGNhcmRMZWZ0cy5mb3JFYWNoKChjYXJkTGVmdCk9PntcbiAgICAgICAgICAgIGNhcmRMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuaGFuZGxlVGlja0J1dHRvbik7XG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWJ1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGRlbGV0ZUJ1dHRvbik9PntcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmhhbmRsZURlbGV0ZUJ1dHRvbik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgY2FyZFRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLXRpdGxlJyk7XG4gICAgICAgIGNhcmRUaXRsZXMuZm9yRWFjaCgoY2FyZFRpdGxlKT0+e1xuICAgICAgICAgICAgY2FyZFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuaGFuZGxlVGl0bGVCdXR0b24pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlVGlja0J1dHRvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94LWVtcHR5JykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgcGFyZW50LnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveC10aWNrJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIHBhcmVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBoYW5kbGVEZWxldGVCdXR0b24oZSkge1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLmNhcmQtdGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LWhlYWRlcicpLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCk9PntcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZVxuICAgICAgICB9KTtcbiAgICAgICAgY3VycmVudFByb2plY3QuZGVsZXRlVGFzayh0YXNrVGl0bGUpO1xuICAgICAgICBVSS5jbGVhclRhc2tzKClcbiAgICAgICAgVUkubG9hZFByb2plY3RDb250ZW50KHByb2plY3RUaXRsZSk7XG4gICAgfVxuICAgIHN0YXRpYyBoYW5kbGVUaXRsZUJ1dHRvbihlKSB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGUudGFyZ2V0LmNsYXNzTGlzdFsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcm9qZWN0LWhlYWRlcicpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCk9PnByb2plY3QuZ2V0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IGN1cnJlbnRQcm9qZWN0LmdldFRhc2sodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICBVSS5zaG93RGV0YWlscyhjdXJyZW50VGFzay50aXRsZSwgY3VycmVudFRhc2suZGV0YWlscywgY3VycmVudFRhc2suZGF0ZSwgY3VycmVudFRhc2sucHJpb3JpdHkpO1xuICAgIH1cbiAgICBzdGF0aWMgc2hvd0RldGFpbHModGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IGRldGFpbFBvcHVwTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsLWJnLW1vZGFsJyk7XG4gICAgICAgICAgICBkZXRhaWxQb3B1cE1vZGFsLmlubmVySFRNTCA9YFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZGV0YWlsLW1vZGFsLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+TW9yZSBpbmZvcm1hdGlvbiE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtZGV0YWlsLXBvcHVwXCI+eDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS10aXRsZVwiPlRpdGxlOiAke3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtZGV0YWlsc1wiPkRldGFpbHM6ICR7ZGV0YWlsc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLXByaW9yaXR5XCI+UHJpb3JpdHk6ICR7cHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1kdWUtZGF0ZVwiPkR1ZSBvbiAke2RhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgZGV0YWlsUG9wdXBNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgIFVJLmluaXRDbG9zZURldGFpbFBvcHVwQnV0dG9uKGRldGFpbFBvcHVwTW9kYWwpXG4gICAgfVxuICAgIHN0YXRpYyBpbml0Q2xvc2VEZXRhaWxQb3B1cEJ1dHRvbihkZXRhaWxQb3B1cE1vZGFsKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWRldGFpbC1wb3B1cCcpXG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGRldGFpbFBvcHVwTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIGRldGFpbFBvcHVwTW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxQb3B1cE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZGV0YWlsUG9wdXBNb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4vLyBFVkVOVExJU1RFTkVSIEZPUiBBREQgVEFTSyBCVVRUT04gSU4gRUFDSCBQUk9KXG4gICAgc3RhdGljIGluaXRBZGRUYXNrQnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgICAgICBjb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctbW9kYWwnKTtcbiAgICAgICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgY2xvc2VUYXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlVGFza1BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGFkZFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkVGFza1BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBVSS5jbG9zZVRhc2tQb3B1cFdpdGhLZXlib2FyZClcbiAgICAgICAgYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgVUkuaGFuZGxlSW5wdXQpXG4gICAgfSAgIFxuICAgIHN0YXRpYyBoYW5kbGVJbnB1dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtYnV0dG9uLmFjdGl2ZScpLnRleHRDb250ZW50XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSlbMF07XG4gICAgICAgIGNvbnN0IGFkZFRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tb2RhbCcpO1xuICAgICAgICBsZXQgdGl0bGUgPSBlLnRhcmdldFsnc3VibWl0LXRpdGxlJ10udmFsdWU7XG4gICAgICAgIGxldCBkZXRhaWxzID0gZS50YXJnZXRbJ3N1Ym1pdC1kZXRhaWxzJ10udmFsdWU7XG4gICAgICAgIGxldCBkYXRlID0gZS50YXJnZXRbJ3N1Ym1pdC1kYXRlJ10udmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGUudGFyZ2V0WydzdWJtaXQtcHJpb3JpdHknXS52YWx1ZTtcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9qZWN0LmNvbnRhaW5zKHRpdGxlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ05PIFNBTUUgVEFTSyBUSVRMRScpO1xuICAgICAgICAgICAgYWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKG5ldyBUYXNrKHRpdGxlLCBkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSkpXG4gICAgICAgIGFkZFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBVSS5kaXNwbGF5VGFzayh0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VUYXNrUG9wdXBXaXRoS2V5Ym9hcmQoZSkge1xuICAgICAgICBjb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctbW9kYWwnKTtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgYWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIEVWRU5UTElTVEVORVIgRk9SIEFERCBQUk9KRUNUIEJVVFRPTlxuICAgIHN0YXRpYyBpbml0QWRkUHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFByb2plY3RQb3B1cElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuQWRkUHJvamVjdFBvcHVwKVxuICAgICAgICBzdWJtaXRQcm9qZWN0UG9wdXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFByb2plY3QpXG4gICAgfVxuICAgIHN0YXRpYyBvcGVuQWRkUHJvamVjdFBvcHVwKCkge1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtcHJvamVjdC1mb3JtY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgYWRkUHJvamVjdFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0UG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGFkZFByb2plY3QoKSB7XG4gICAgICAgIGNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXByb2plY3QtdGl0bGUnKVxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBpbnB1dFByb2plY3RUaXRsZS52YWx1ZVxuICAgICAgICBpZiAocHJvamVjdFRpdGxlPT09JycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IHRpdGxlIGNhbnQgYmUgZW1wdHknKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxldCB0aXRsZXMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiB7cmV0dXJuIHByb2plY3QuZ2V0VGl0bGUoKX0pXG4gICAgICAgIGlmICh0aXRsZXMuaW5jbHVkZXMocHJvamVjdFRpdGxlKSkge1xuICAgICAgICAgICAgYWxlcnQoJ0NhbnQgaGF2ZSBzYW1lIG5hbWUnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgVUkuY3JlYXRlUHJvamVjdFRpdGxlRE9NKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QocHJvamVjdFRpdGxlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3RUaXRsZURPTShwcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbiAgICAgICAgcHJvamVjdFRpdGxlc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gYDxkaXYgaWQ9XCIke3Byb2plY3RUaXRsZX1cIiBjbGFzcz1cInByb2plY3QtYnV0dG9uXCI+JHtwcm9qZWN0VGl0bGV9PC9kaXY+YFxuICAgICAgICBVSS5pbml0UHJvamVjdEJ1dHRvbnMoKVxuICAgIH1cbiAgICBzdGF0aWMgY2xlYXJUYXNrcygpIHtcbiAgICAgICAgbGV0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9pdGVtcy1jb250YWluZXInKVxuICAgICAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVJIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUlcIlxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5VSS5pbml0QWRkUHJvamVjdEJ1dHRvbnMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=