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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: 'Lato', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.project-container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 45px auto;\n    grid-template-columns: 270px auto;\n}\n/* top bar */\n.top-bar {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: #9DAD7F;\n    display: flex;\n}\n.top-bar-header {\n    display: flex;\n    align-items: center;\n    padding-left: 2rem;\n    gap: 20px;\n}\n/* left side nav bar */\n.left-side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color:#C7CFB7;\n    padding-top: 2rem;\n    gap: 1rem;\n}\n\n.inbox,\n.today,\n.upcoming {\n    padding-left: 1rem;\n}\n\n.projects-container {\n    display: flex;\n    justify-content: space-between;\n}\n.projects-container >div{\n    padding: 1rem;\n}\n.left-nav-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    \n}\n.add-project-button {\n    width: 0.75rem;\n    height: 0.75rem;\n    cursor: pointer;\n}\n.expand-button {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n/* list of to do items */\n.todoitems-container {\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 2/3;\n    text-align: center;\n    background-color: #F7F7E8;\n    display: flex;\n    justify-content: center;\n}\n/* container containing items to do */\n.items-container {\n    width: 75%;\n    padding: 2rem;\n}\n.current-project-header{\n    display: flex;\n    font-size: xx-large;\n    font-weight: 700;\n    padding-bottom: 0.5rem;\n}\n/* individual item cards */\n.item-card,\n.add-task{\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-top: 1px solid #C7CFB7;\n    border-bottom: 1px solid #C7CFB7;\n}\n.item-card .checked {\n    opacity: 0.3;\n}\n.card-left {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.checkbox {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.checkbox-tick {\n    display: none;\n}\n\n.check-button:hover {\n    background-color: #a7a797;\n}\n.card-title {\n    cursor: pointer;\n}\n.card-right {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.card-right > img {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.add-task {\n    justify-content: center;\n}\n.add-task:hover {\n    justify-content: center;\n    background-color:#aeb59f;\n    cursor: pointer;\n}\n.add-task-left{\n    display: flex;\n    gap: 0.25rem;\n}\n.add-task-button {\n    width: 1rem;\n    height: 1rem;\n}\n\n/* modal pop up */\n\n.bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n\n.modal-header {\n    background-color: #9DAD7F;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    height: 3rem;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.modal-title {\n    font-size: 2rem;\n    padding-left: 1rem;\n    color: white;\n}\n.close-popup {\n    position: absolute;\n    right: 0.1rem;\n    top: 0.8rem;\n    font-size: 2rem;\n    padding-right: 1rem;\n    cursor: pointer;\n    color: white;\n    line-height: 1rem;\n}\n\n.form-container {\n    margin: 4rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container>\ninput,\ninput:focus-visible {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n\n#submit-title {\n    font-size: 1.6rem;\n}\n.priority-radio {\n    display: flex;\n    height:3rem;\n    align-items: center;\n    gap: 1rem;\n}\n.radio-wrapper {\n    border: 1px solid black;\n\n}\n.radio-wrapper input {\n    display: none;\n}\n\n.radio-wrapper label:hover {\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.radio-wrapper input:checked + label{\n    font-weight: 900;\n}\n#submit-task {\n    width: 10rem;\n    background-color: white;\n    color: #557174;\n    border: 1px #557174 solid;\n    border-radius: 10px;\n    font-size: small;\n    font-weight: bold;\n}\n\n#submit-task:hover{\n    cursor: pointer;\n    background-color: #557174;\n    color:white;\n    transition: all 0.3s;\n}\n\n/* detail modal */\n.detail-bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.detail-modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n    display: none;\n}\n\n.extra-content {\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4rem;\n    gap: 4rem;\n    font-size: xx-large;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300&display=swap');\n* {\n    font-family: 'Lato', sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.project-container {\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 45px auto;\n    grid-template-columns: 270px auto;\n}\n/* top bar */\n.top-bar {\n    grid-row: 1/2;\n    grid-column: 1/3;\n    background-color: #9DAD7F;\n    display: flex;\n}\n.top-bar-header {\n    display: flex;\n    align-items: center;\n    padding-left: 2rem;\n    gap: 20px;\n}\n/* left side nav bar */\n.left-side-nav {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 1/2;\n    background-color:#C7CFB7;\n    padding-top: 2rem;\n    gap: 1rem;\n}\n\n.inbox,\n.today,\n.upcoming {\n    padding-left: 1rem;\n}\n\n.projects-container {\n    display: flex;\n    justify-content: space-between;\n}\n.projects-container >div{\n    padding: 1rem;\n}\n.left-nav-buttons {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    \n}\n.add-project-button {\n    width: 0.75rem;\n    height: 0.75rem;\n    cursor: pointer;\n}\n.expand-button {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n/* list of to do items */\n.todoitems-container {\n    width: 100%;\n    grid-row: 2/3;\n    grid-column: 2/3;\n    text-align: center;\n    background-color: #F7F7E8;\n    display: flex;\n    justify-content: center;\n}\n/* container containing items to do */\n.items-container {\n    width: 75%;\n    padding: 2rem;\n}\n.current-project-header{\n    display: flex;\n    font-size: xx-large;\n    font-weight: 700;\n    padding-bottom: 0.5rem;\n}\n/* individual item cards */\n.item-card,\n.add-task{\n    display: flex;\n    justify-content: space-between;\n    padding: 0.5rem;\n    border-top: 1px solid #C7CFB7;\n    border-bottom: 1px solid #C7CFB7;\n}\n.item-card .checked {\n    opacity: 0.3;\n}\n.card-left {\n    display: flex;\n    gap: 0.5rem;\n    align-items: center;\n}\n\n.checkbox {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.checkbox-tick {\n    display: none;\n}\n\n.check-button:hover {\n    background-color: #a7a797;\n}\n.card-title {\n    cursor: pointer;\n}\n.card-right {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.card-right > img {\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.add-task {\n    justify-content: center;\n}\n.add-task:hover {\n    justify-content: center;\n    background-color:#aeb59f;\n    cursor: pointer;\n}\n.add-task-left{\n    display: flex;\n    gap: 0.25rem;\n}\n.add-task-button {\n    width: 1rem;\n    height: 1rem;\n}\n\n/* modal pop up */\n\n.bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n}\n\n\n.modal-header {\n    background-color: #9DAD7F;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 15px;\n    height: 3rem;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.modal-title {\n    font-size: 2rem;\n    padding-left: 1rem;\n    color: white;\n}\n.close-popup {\n    position: absolute;\n    right: 0.1rem;\n    top: 0.8rem;\n    font-size: 2rem;\n    padding-right: 1rem;\n    cursor: pointer;\n    color: white;\n    line-height: 1rem;\n}\n\n.form-container {\n    margin: 4rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container>\ninput,\ninput:focus-visible {\n    border: none;\n    outline: none;\n    height: 3rem;\n}\n\n#submit-title {\n    font-size: 1.6rem;\n}\n.priority-radio {\n    display: flex;\n    height:3rem;\n    align-items: center;\n    gap: 1rem;\n}\n.radio-wrapper {\n    border: 1px solid black;\n\n}\n.radio-wrapper input {\n    display: none;\n}\n\n.radio-wrapper label:hover {\n    font-weight: 900;\n    cursor: pointer;\n}\n\n.radio-wrapper input:checked + label{\n    font-weight: 900;\n}\n#submit-task {\n    width: 10rem;\n    background-color: white;\n    color: #557174;\n    border: 1px #557174 solid;\n    border-radius: 10px;\n    font-size: small;\n    font-weight: bold;\n}\n\n#submit-task:hover{\n    cursor: pointer;\n    background-color: #557174;\n    color:white;\n    transition: all 0.3s;\n}\n\n/* detail modal */\n.detail-bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    display: none;\n    backdrop-filter: blur(8px);\n}\n\n.detail-modal-content {\n    width: 75%;\n    height: 600px;\n    background-color: white;\n    border-radius: 15px;\n    text-align: center;\n    position: relative;\n    display: none;\n}\n\n.extra-content {\n    display:flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 4rem;\n    gap: 4rem;\n    font-size: xx-large;\n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/checkboxVisual.js":
/*!***************************************!*\
  !*** ./src/modules/checkboxVisual.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkboxVisual() {
    document.addEventListener('click', (e)=>{
        if (e.target.classList.contains('checkbox-empty')) {
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'block';
            e.target.nextElementSibling.nextElementSibling.style.textDecoration = 'line-through';
            let index = e.target.dataset.index
            let grayOut = document.querySelector(`[data-index='${index}']`);
            grayOut.style.opacity = '0.3';
        }
        if (e.target.classList.contains('checkbox-tick')) {
            e.target.style.display = 'none';
            e.target.previousElementSibling.style.display = 'block';    
            e.target.nextElementSibling.style.textDecoration = 'none';
            let index = e.target.dataset.index
            let grayOut = document.querySelector(`[data-index='${index}']`);
            grayOut.style.opacity = '1';
        }   
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkboxVisual);  

/***/ }),

/***/ "./src/modules/closeDetailModal.js":
/*!*****************************************!*\
  !*** ./src/modules/closeDetailModal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function closeDetailModal() {
        const detailModalPopup = document.querySelector('.detail-bg-modal');

        document.addEventListener('click',(e)=>{
            if (e.target.classList.contains('close-popup')) {
                let index = e.target.dataset.index
                const detailModal = document.querySelector(`.detail-modal-content[data-index='${index}']`);
                detailModalPopup.style.display ='none';
                detailModal.style.display ='none';
            } 
        })
        document.addEventListener('keydown', (e)=>{
            if (e.key === 'Escape') {
                const detailModal = document.querySelector(`.detail-modal-content[style*="display: block;"]`);
                detailModalPopup.style.display = 'none';
                detailModal.style.display ='none';
            }
        })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeDetailModal);

/***/ }),

/***/ "./src/modules/deleteButton.js":
/*!*************************************!*\
  !*** ./src/modules/deleteButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function deleteButton(){
    document.addEventListener('click', (e)=>{
        if(e.target.classList.contains('delete-button')){
            let index = e.target.dataset.index;
            let toBeDeletedParent = document.querySelector(`[data-index='${index}']`);
            toBeDeletedParent.remove();
            // delete task from array
            let i = tasks.findIndex((task)=>task.index === parseInt(index))
            tasks.splice(i, 1)
            console.log(i, tasks)
        }
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteButton);

/***/ }),

/***/ "./src/modules/displayTaskAndModal.js":
/*!********************************************!*\
  !*** ./src/modules/displayTaskAndModal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let i = 0;
function displayTask(title,details, date, priority) {
    let bottom = document.querySelector('.add-task');
    let newTask = document.createElement('div');
    newTask.innerHTML = `
    <div class="item-card">
        <div class="card-left">
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkboxEmpty.svg" alt="" class="checkbox-empty checkbox" data-index=${i}>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/checkbox.svg" alt="" class="checkbox-tick checkbox" data-index=${i}>
            <div class="card-title" data-index=${i}>${title}</div>
        </div>
        <div class="card-right">
            <div class="priority">Priority: ${priority}</div>
            <div class="dueDate">Due: ${date}</div>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/edit.svg" alt="" class="edit-button" data-index=${i}>
            <img src="https://raw.githubusercontent.com/YipAnthony/betterToDoList/5106fb718a054940bf41781a3a5d6e4aa498b9a0/dist/images/delete.svg" alt="" class="delete-button" data-index=${i}>
        </div>
    </div>
    `
    newTask.dataset.index = i;
    bottom.insertAdjacentElement('beforebegin', newTask);
    
    let detailBgModal = document.querySelector('.detail-bg-modal');
    let detailModalContent = document.createElement('div');
    detailModalContent.classList.add('detail-modal-content');
    detailModalContent.dataset.index = i;
    detailModalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-title">More information!</div>
        </div>
        <div class="close-popup" data-index=${i}>x</div>
        <div class="extra-content">
            <div class="extra-title">Title: ${title}</div>
            <div class="extra-details">Details: ${details}</div>
            <div class="extra-priority">Priority: ${priority}</div>
            <div class="extra-due-date">Due on ${date}</div>
        </div>`

    detailBgModal.appendChild(detailModalContent);

    i++;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTask);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Add task popup close and open functionality
function modalPopUp() {
    
    const addTaskButton = document.querySelector('.add-task');
    const addTaskPopup = document.querySelector('.bg-modal');
    const addTaskClose = document.querySelector('.close-popup');
    
    addTaskButton.addEventListener('click', ()=>{
        addTaskPopup.style.display = 'flex';
    });
    
    addTaskClose.addEventListener('click', ()=> {
        addTaskPopup.style.display = 'none';
    });

    document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape') {
            addTaskPopup.style.display = 'none';
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalPopUp);

/***/ }),

/***/ "./src/modules/openDetailModal.js":
/*!****************************************!*\
  !*** ./src/modules/openDetailModal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openDetailModal() {
    document.addEventListener('click',(e)=>{
        if (e.target.classList.contains('card-title')) {
            let index = e.target.dataset.index
            let detailBgModal = document.querySelector('.detail-bg-modal');
            let detailModal = document.querySelector(`.detail-modal-content[data-index='${index}']`);
            detailBgModal.style.display = 'flex';
            detailModal.style.display = 'block';
        }
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openDetailModal);

/***/ }),

/***/ "./src/modules/submitForm.js":
/*!***********************************!*\
  !*** ./src/modules/submitForm.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskConstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskConstruct */ "./src/modules/taskConstruct.js");
/* harmony import */ var _displayTaskAndModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTaskAndModal */ "./src/modules/displayTaskAndModal.js");


let i = 0;
//Submit task functionality
function submitForm() {
    const submitForm = document.querySelector('.form-container');
    submitForm.addEventListener('submit', (e) => {
        let title = e.target['submit-title'].value;
        let details = e.target['submit-details'].value;
        let date = e.target['submit-date'].value;
        let priority = e.target['submit-priority'].value;
        let index = i;
        let newTask = new _taskConstruct__WEBPACK_IMPORTED_MODULE_0__["default"](title, details, date , priority, index);

        tasks.push(newTask);
        
        document.querySelector('.bg-modal').style.display = 'none';
        console.log(window.tasks);
        (0,_displayTaskAndModal__WEBPACK_IMPORTED_MODULE_1__["default"])(title,details, date, priority);
        e.preventDefault(); // prevent default page refresh
        i++;
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitForm);


/***/ }),

/***/ "./src/modules/taskConstruct.js":
/*!**************************************!*\
  !*** ./src/modules/taskConstruct.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Task constructor
class Task {
    constructor(title, details, date, priority, index) {
        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;
        this.index = index;
    };
    
    sayBook() {
        alert(this.title);
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_checkboxVisual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkboxVisual */ "./src/modules/checkboxVisual.js");
/* harmony import */ var _modules_deleteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deleteButton */ "./src/modules/deleteButton.js");
/* harmony import */ var _modules_submitForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/submitForm */ "./src/modules/submitForm.js");
/* harmony import */ var _modules_openDetailModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/openDetailModal */ "./src/modules/openDetailModal.js");
/* harmony import */ var _modules_closeDetailModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/closeDetailModal */ "./src/modules/closeDetailModal.js");








window.tasks = [];

// add task popup logic
(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
//submit form functionality
(0,_modules_submitForm__WEBPACK_IMPORTED_MODULE_4__["default"])();
// checkbox ticking visual functionality
(0,_modules_checkboxVisual__WEBPACK_IMPORTED_MODULE_2__["default"])();
// delete button functionality
(0,_modules_deleteButton__WEBPACK_IMPORTED_MODULE_3__["default"])();
//open details modal fxn
(0,_modules_openDetailModal__WEBPACK_IMPORTED_MODULE_5__["default"])();
//close detail modals fxn
(0,_modules_closeDetailModal__WEBPACK_IMPORTED_MODULE_6__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBOEIsb0JBQW9CLGdCQUFnQiwwQkFBMEIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxN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Q0Esb0VBQWU7QUFDZjtBQUNBLHFFQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvY2hlY2tib3hWaXN1YWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9jbG9zZURldGFpbE1vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGVsZXRlQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheVRhc2tBbmRNb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvb3BlbkRldGFpbE1vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvc3VibWl0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tDb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI3MHB4IGF1dG87XFxufVxcbi8qIHRvcCBiYXIgKi9cXG4udG9wLWJhciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REFEN0Y7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b3AtYmFyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiBsZWZ0IHNpZGUgbmF2IGJhciAqL1xcbi5sZWZ0LXNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0M3Q0ZCNztcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmluYm94LFxcbi50b2RheSxcXG4udXBjb21pbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgPmRpdntcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmxlZnQtbmF2LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgXFxufVxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICB3aWR0aDogMC43NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBhbmQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBsaXN0IG9mIHRvIGRvIGl0ZW1zICovXFxuLnRvZG9pdGVtcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0U4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogY29udGFpbmVyIGNvbnRhaW5pbmcgaXRlbXMgdG8gZG8gKi9cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLmN1cnJlbnQtcHJvamVjdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi8qIGluZGl2aWR1YWwgaXRlbSBjYXJkcyAqL1xcbi5pdGVtLWNhcmQsXFxuLmFkZC10YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDN0NGQjc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzdDRkI3O1xcbn1cXG4uaXRlbS1jYXJkIC5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG4uY2FyZC1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LXRpY2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTc5NztcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4uY2FyZC1yaWdodCA+IGltZyB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhZWI1OWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrLWxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi8qIG1vZGFsIHBvcCB1cCAqL1xcblxcbi5iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOURBRDdGO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC4xcmVtO1xcbiAgICB0b3A6IDAuOHJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPlxcbmlucHV0LFxcbmlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3N1Ym1pdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG4ucHJpb3JpdHktcmFkaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6M3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4ucmFkaW8td3JhcHBlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG4ucmFkaW8td3JhcHBlciBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYWRpby13cmFwcGVyIGxhYmVsOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFkaW8td3JhcHBlciBpbnB1dDpjaGVja2VkICsgbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiNzdWJtaXQtdGFzayB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNTU3MTc0O1xcbiAgICBib3JkZXI6IDFweCAjNTU3MTc0IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3N1Ym1pdC10YXNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTcxNzQ7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLyogZGV0YWlsIG1vZGFsICovXFxuLmRldGFpbC1iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLmRldGFpbC1tb2RhbC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZXh0cmEtY29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGdhcDogNHJlbTtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGlDQUFpQztBQUNyQztBQUNBLFlBQVk7QUFDWjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBLHNCQUFzQjtBQUN0QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FB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QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsU0FBUztJQUNULG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMCZkaXNwbGF5PXN3YXAnKTtcXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDVweCBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI3MHB4IGF1dG87XFxufVxcbi8qIHRvcCBiYXIgKi9cXG4udG9wLWJhciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REFEN0Y7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi50b3AtYmFyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4vKiBsZWZ0IHNpZGUgbmF2IGJhciAqL1xcbi5sZWZ0LXNpZGUtbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I0M3Q0ZCNztcXG4gICAgcGFkZGluZy10b3A6IDJyZW07XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLmluYm94LFxcbi50b2RheSxcXG4udXBjb21pbmcge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIgPmRpdntcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuLmxlZnQtbmF2LWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgXFxufVxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgICB3aWR0aDogMC43NXJlbTtcXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5leHBhbmQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBsaXN0IG9mIHRvIGRvIGl0ZW1zICovXFxuLnRvZG9pdGVtcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0U4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLyogY29udGFpbmVyIGNvbnRhaW5pbmcgaXRlbXMgdG8gZG8gKi9cXG4uaXRlbXMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuLmN1cnJlbnQtcHJvamVjdC1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi8qIGluZGl2aWR1YWwgaXRlbSBjYXJkcyAqL1xcbi5pdGVtLWNhcmQsXFxuLmFkZC10YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDN0NGQjc7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzdDRkI3O1xcbn1cXG4uaXRlbS1jYXJkIC5jaGVja2VkIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG4uY2FyZC1sZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94LXRpY2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2hlY2stYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTc5NztcXG59XFxuLmNhcmQtdGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkLXJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4uY2FyZC1yaWdodCA+IGltZyB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhZWI1OWY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFkZC10YXNrLWxlZnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi8qIG1vZGFsIHBvcCB1cCAqL1xcblxcbi5iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOURBRDdGO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1vZGFsLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNsb3NlLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC4xcmVtO1xcbiAgICB0b3A6IDAuOHJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPlxcbmlucHV0LFxcbmlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3N1Ym1pdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG4ucHJpb3JpdHktcmFkaW8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6M3JlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG4ucmFkaW8td3JhcHBlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG4ucmFkaW8td3JhcHBlciBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5yYWRpby13cmFwcGVyIGxhYmVsOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmFkaW8td3JhcHBlciBpbnB1dDpjaGVja2VkICsgbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbiNzdWJtaXQtdGFzayB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjNTU3MTc0O1xcbiAgICBib3JkZXI6IDFweCAjNTU3MTc0IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3N1Ym1pdC10YXNrOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTcxNzQ7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLyogZGV0YWlsIG1vZGFsICovXFxuLmRldGFpbC1iZy1tb2RhbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuLmRldGFpbC1tb2RhbC1jb250ZW50IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZXh0cmEtY29udGVudCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIGdhcDogNHJlbTtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjaGVja2JveFZpc3VhbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveC1lbXB0eScpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICAgICAgbGV0IGdyYXlPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtpbmRleH0nXWApO1xuICAgICAgICAgICAgZ3JheU91dC5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gtdGljaycpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgICAgXG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgICAgICBsZXQgZ3JheU91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgICAgICAgICBncmF5T3V0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH0gICBcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrYm94VmlzdWFsOyAgIiwiZnVuY3Rpb24gY2xvc2VEZXRhaWxNb2RhbCgpIHtcbiAgICAgICAgY29uc3QgZGV0YWlsTW9kYWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwtYmctbW9kYWwnKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZS1wb3B1cCcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRldGFpbC1tb2RhbC1jb250ZW50W2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICAgICAgICAgICAgICBkZXRhaWxNb2RhbFBvcHVwLnN0eWxlLmRpc3BsYXkgPSdub25lJztcbiAgICAgICAgICAgICAgICBkZXRhaWxNb2RhbC5zdHlsZS5kaXNwbGF5ID0nbm9uZSc7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGV0YWlsLW1vZGFsLWNvbnRlbnRbc3R5bGUqPVwiZGlzcGxheTogYmxvY2s7XCJdYCk7XG4gICAgICAgICAgICAgICAgZGV0YWlsTW9kYWxQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGRldGFpbE1vZGFsLnN0eWxlLmRpc3BsYXkgPSdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvc2VEZXRhaWxNb2RhbDsiLCJcbmZ1bmN0aW9uIGRlbGV0ZUJ1dHRvbigpe1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWJ1dHRvbicpKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICBsZXQgdG9CZURlbGV0ZWRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtpbmRleH0nXWApO1xuICAgICAgICAgICAgdG9CZURlbGV0ZWRQYXJlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBkZWxldGUgdGFzayBmcm9tIGFycmF5XG4gICAgICAgICAgICBsZXQgaSA9IHRhc2tzLmZpbmRJbmRleCgodGFzayk9PnRhc2suaW5kZXggPT09IHBhcnNlSW50KGluZGV4KSlcbiAgICAgICAgICAgIHRhc2tzLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgY29uc29sZS5sb2coaSwgdGFza3MpXG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZUJ1dHRvbjsiLCJsZXQgaSA9IDA7XG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0aXRsZSxkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIGxldCBib3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBsZXQgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Rhc2suaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNhcmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vWWlwQW50aG9ueS9iZXR0ZXJUb0RvTGlzdC81MTA2ZmI3MThhMDU0OTQwYmY0MTc4MWEzYTVkNmU0YWE0OThiOWEwL2Rpc3QvaW1hZ2VzL2NoZWNrYm94RW1wdHkuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJjaGVja2JveC1lbXB0eSBjaGVja2JveFwiIGRhdGEtaW5kZXg9JHtpfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9jaGVja2JveC5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cImNoZWNrYm94LXRpY2sgY2hlY2tib3hcIiBkYXRhLWluZGV4PSR7aX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZVwiIGRhdGEtaW5kZXg9JHtpfT4ke3RpdGxlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlByaW9yaXR5OiAke3ByaW9yaXR5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImR1ZURhdGVcIj5EdWU6ICR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9lZGl0LnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiZWRpdC1idXR0b25cIiBkYXRhLWluZGV4PSR7aX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ZaXBBbnRob255L2JldHRlclRvRG9MaXN0LzUxMDZmYjcxOGEwNTQ5NDBiZjQxNzgxYTNhNWQ2ZTRhYTQ5OGI5YTAvZGlzdC9pbWFnZXMvZGVsZXRlLnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiIGRhdGEtaW5kZXg9JHtpfT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICAgIG5ld1Rhc2suZGF0YXNldC5pbmRleCA9IGk7XG4gICAgYm90dG9tLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBuZXdUYXNrKTtcbiAgICBcbiAgICBsZXQgZGV0YWlsQmdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwtYmctbW9kYWwnKTtcbiAgICBsZXQgZGV0YWlsTW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlsTW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RldGFpbC1tb2RhbC1jb250ZW50Jyk7XG4gICAgZGV0YWlsTW9kYWxDb250ZW50LmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIGRldGFpbE1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10aXRsZVwiPk1vcmUgaW5mb3JtYXRpb24hPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2UtcG9wdXBcIiBkYXRhLWluZGV4PSR7aX0+eDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLXRpdGxlXCI+VGl0bGU6ICR7dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtZGV0YWlsc1wiPkRldGFpbHM6ICR7ZGV0YWlsc308L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1wcmlvcml0eVwiPlByaW9yaXR5OiAke3ByaW9yaXR5fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWR1ZS1kYXRlXCI+RHVlIG9uICR7ZGF0ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuXG4gICAgZGV0YWlsQmdNb2RhbC5hcHBlbmRDaGlsZChkZXRhaWxNb2RhbENvbnRlbnQpO1xuXG4gICAgaSsrO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VGFzazsiLCIvLyBBZGQgdGFzayBwb3B1cCBjbG9zZSBhbmQgb3BlbiBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBtb2RhbFBvcFVwKCkge1xuICAgIFxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBjb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctbW9kYWwnKTtcbiAgICBjb25zdCBhZGRUYXNrQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKTtcbiAgICBcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgYWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSk7XG4gICAgXG4gICAgYWRkVGFza0Nsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGFkZFRhc2tQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1vZGFsUG9wVXAiLCJmdW5jdGlvbiBvcGVuRGV0YWlsTW9kYWwoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLXRpdGxlJykpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgICAgIGxldCBkZXRhaWxCZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbC1iZy1tb2RhbCcpO1xuICAgICAgICAgICAgbGV0IGRldGFpbE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRldGFpbC1tb2RhbC1jb250ZW50W2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICAgICAgICAgIGRldGFpbEJnTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGRldGFpbE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvcGVuRGV0YWlsTW9kYWw7IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrQ29uc3RydWN0JztcbmltcG9ydCBkaXNwbGF5VGFzayBmcm9tICcuL2Rpc3BsYXlUYXNrQW5kTW9kYWwnO1xubGV0IGkgPSAwO1xuLy9TdWJtaXQgdGFzayBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IGUudGFyZ2V0WydzdWJtaXQtdGl0bGUnXS52YWx1ZTtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBlLnRhcmdldFsnc3VibWl0LWRldGFpbHMnXS52YWx1ZTtcbiAgICAgICAgbGV0IGRhdGUgPSBlLnRhcmdldFsnc3VibWl0LWRhdGUnXS52YWx1ZTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZS50YXJnZXRbJ3N1Ym1pdC1wcmlvcml0eSddLnZhbHVlO1xuICAgICAgICBsZXQgaW5kZXggPSBpO1xuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXRhaWxzLCBkYXRlICwgcHJpb3JpdHksIGluZGV4KTtcblxuICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJnLW1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LnRhc2tzKTtcbiAgICAgICAgZGlzcGxheVRhc2sodGl0bGUsZGV0YWlscywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgZGVmYXVsdCBwYWdlIHJlZnJlc2hcbiAgICAgICAgaSsrO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdWJtaXRGb3JtO1xuIiwiLy8gVGFzayBjb25zdHJ1Y3RvclxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMsIGRhdGUsIHByaW9yaXR5LCBpbmRleCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIH07XG4gICAgXG4gICAgc2F5Qm9vaygpIHtcbiAgICAgICAgYWxlcnQodGhpcy50aXRsZSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtb2RhbFBvcFVwIGZyb20gJy4vbW9kdWxlcy9tb2RhbCc7XG5pbXBvcnQgY2hlY2tib3hWaXN1YWwgZnJvbSAnLi9tb2R1bGVzL2NoZWNrYm94VmlzdWFsJztcbmltcG9ydCBkZWxldGVCdXR0b24gZnJvbSAnLi9tb2R1bGVzL2RlbGV0ZUJ1dHRvbic7XG5pbXBvcnQgc3VibWl0Rm9ybSBmcm9tICcuL21vZHVsZXMvc3VibWl0Rm9ybSc7XG5pbXBvcnQgb3BlbkRldGFpbE1vZGFsIGZyb20gJy4vbW9kdWxlcy9vcGVuRGV0YWlsTW9kYWwnO1xuaW1wb3J0IGNsb3NlRGV0YWlsTW9kYWwgZnJvbSAnLi9tb2R1bGVzL2Nsb3NlRGV0YWlsTW9kYWwnO1xuXG53aW5kb3cudGFza3MgPSBbXTtcblxuLy8gYWRkIHRhc2sgcG9wdXAgbG9naWNcbm1vZGFsUG9wVXAoKTtcbi8vc3VibWl0IGZvcm0gZnVuY3Rpb25hbGl0eVxuc3VibWl0Rm9ybSgpO1xuLy8gY2hlY2tib3ggdGlja2luZyB2aXN1YWwgZnVuY3Rpb25hbGl0eVxuY2hlY2tib3hWaXN1YWwoKTtcbi8vIGRlbGV0ZSBidXR0b24gZnVuY3Rpb25hbGl0eVxuZGVsZXRlQnV0dG9uKCk7XG4vL29wZW4gZGV0YWlscyBtb2RhbCBmeG5cbm9wZW5EZXRhaWxNb2RhbCgpO1xuLy9jbG9zZSBkZXRhaWwgbW9kYWxzIGZ4blxuY2xvc2VEZXRhaWxNb2RhbCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9