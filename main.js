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

/***/ "./src/modules/keyBoardFunctionality.js":
/*!**********************************************!*\
  !*** ./src/modules/keyBoardFunctionality.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function keyBoardFunction(){
    document.addEventListener('keydown', (e)=>{
        if (e.key === 'Escape') {
            if(document.querySelector(`.detail-modal-content[style*="display: block;"]`)){
                const detailModal = document.querySelector(`.detail-modal-content[style*="display: block;"]`);
                const detailModalPopup = document.querySelector('.detail-bg-modal');
                detailModalPopup.style.display = 'none';
                detailModal.style.display ='none';
            } else {
                const addTaskPopup = document.querySelector('.bg-modal');
                addTaskPopup.style.display = 'none';
            }

        }
    })
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyBoardFunction);


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
/* harmony import */ var _modules_keyBoardFunctionality__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/keyBoardFunctionality */ "./src/modules/keyBoardFunctionality.js");









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

//keyboard fxn
(0,_modules_keyBoardFunctionality__WEBPACK_IMPORTED_MODULE_7__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBOEIsb0JBQW9CLGdCQUFnQiwwQkFBMEIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxN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O0FBQ0EsMERBQVU7QUFDVjtBQUNBLCtEQUFVO0FBQ1Y7QUFDQSxtRUFBYztBQUNkO0FBQ0EsaUVBQVk7QUFDWjtBQUNBLG9FQUFlO0FBQ2Y7QUFDQSxxRUFBZ0I7O0FBRWhCO0FBQ0EsMEVBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9jaGVja2JveFZpc3VhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2Nsb3NlRGV0YWlsTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9kZWxldGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5VGFza0FuZE1vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMva2V5Qm9hcmRGdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9vcGVuRGV0YWlsTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9zdWJtaXRGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdGFza0NvbnN0cnVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjcwcHggYXV0bztcXG59XFxuLyogdG9wIGJhciAqL1xcbi50b3AtYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQUQ3RjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnRvcC1iYXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi8qIGxlZnQgc2lkZSBuYXYgYmFyICovXFxuLmxlZnQtc2lkZS1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzdDRkI3O1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5ib3gsXFxuLnRvZGF5LFxcbi51cGNvbWluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciA+ZGl2e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ubGVmdC1uYXYtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAwLjc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuNzVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIGxpc3Qgb2YgdG8gZG8gaXRlbXMgKi9cXG4udG9kb2l0ZW1zLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RTg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBjb250YWluZXIgY29udGFpbmluZyBpdGVtcyB0byBkbyAqL1xcbi5pdGVtcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uY3VycmVudC1wcm9qZWN0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLyogaW5kaXZpZHVhbCBpdGVtIGNhcmRzICovXFxuLml0ZW0tY2FyZCxcXG4uYWRkLXRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0M3Q0ZCNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDN0NGQjc7XFxufVxcbi5pdGVtLWNhcmQgLmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcbi5jYXJkLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtdGljayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhNzk3O1xcbn1cXG4uY2FyZC10aXRsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmQtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi5jYXJkLXJpZ2h0ID4gaW1nIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FlYjU5ZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXRhc2stbGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLyogbW9kYWwgcG9wIHVwICovXFxuXFxuLmJnLW1vZGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REFEN0Y7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2xvc2UtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjFyZW07XFxuICAgIHRvcDogMC44cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXI+XFxuaW5wdXQsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc3VibWl0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcbi5wcmlvcml0eS1yYWRpbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDozcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5yYWRpby13cmFwcGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxufVxcbi5yYWRpby13cmFwcGVyIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJhZGlvLXdyYXBwZXIgbGFiZWw6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yYWRpby13cmFwcGVyIGlucHV0OmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3N1Ym1pdC10YXNrIHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6ICM1NTcxNzQ7XFxuICAgIGJvcmRlcjogMXB4ICM1NTcxNzQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jc3VibWl0LXRhc2s6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NzE3NDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4vKiBkZXRhaWwgbW9kYWwgKi9cXG4uZGV0YWlsLWJnLW1vZGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4uZGV0YWlsLW1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHRyYS1jb250ZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsaUNBQWlDO0FBQ3JDO0FBQ0EsWUFBWTtBQUNaO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0Esc0JBQXNCO0FBQ3RCO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBd0I7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QUFDeEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcbioge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjcwcHggYXV0bztcXG59XFxuLyogdG9wIGJhciAqL1xcbi50b3AtYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQUQ3RjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnRvcC1iYXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi8qIGxlZnQgc2lkZSBuYXYgYmFyICovXFxuLmxlZnQtc2lkZS1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQzdDRkI3O1xcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaW5ib3gsXFxuLnRvZGF5LFxcbi51cGNvbWluZyB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lciA+ZGl2e1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ubGVmdC1uYXYtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBcXG59XFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAwLjc1cmVtO1xcbiAgICBoZWlnaHQ6IDAuNzVyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmV4cGFuZC1idXR0b24ge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIGxpc3Qgb2YgdG8gZG8gaXRlbXMgKi9cXG4udG9kb2l0ZW1zLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3RTg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4vKiBjb250YWluZXIgY29udGFpbmluZyBpdGVtcyB0byBkbyAqL1xcbi5pdGVtcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG4uY3VycmVudC1wcm9qZWN0LWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLyogaW5kaXZpZHVhbCBpdGVtIGNhcmRzICovXFxuLml0ZW0tY2FyZCxcXG4uYWRkLXRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0M3Q0ZCNztcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDN0NGQjc7XFxufVxcbi5pdGVtLWNhcmQgLmNoZWNrZWQge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcbi5jYXJkLWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuNXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3gtdGljayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaGVjay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhNzk3O1xcbn1cXG4uY2FyZC10aXRsZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmQtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi5jYXJkLXJpZ2h0ID4gaW1nIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmFkZC10YXNrOmhvdmVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2FlYjU5ZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWRkLXRhc2stbGVmdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjI1cmVtO1xcbn1cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLyogbW9kYWwgcG9wIHVwICovXFxuXFxuLmJnLW1vZGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5REFEN0Y7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubW9kYWwtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2xvc2UtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjFyZW07XFxuICAgIHRvcDogMC44cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA0cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXI+XFxuaW5wdXQsXFxuaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc3VibWl0LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcbi5wcmlvcml0eS1yYWRpbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDozcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcbi5yYWRpby13cmFwcGVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFxufVxcbi5yYWRpby13cmFwcGVyIGlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnJhZGlvLXdyYXBwZXIgbGFiZWw6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yYWRpby13cmFwcGVyIGlucHV0OmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuI3N1Ym1pdC10YXNrIHtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6ICM1NTcxNzQ7XFxuICAgIGJvcmRlcjogMXB4ICM1NTcxNzQgc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jc3VibWl0LXRhc2s6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NzE3NDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4vKiBkZXRhaWwgbW9kYWwgKi9cXG4uZGV0YWlsLWJnLW1vZGFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG4uZGV0YWlsLW1vZGFsLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5leHRyYS1jb250ZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gICAgZ2FwOiA0cmVtO1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNoZWNrYm94VmlzdWFsKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrYm94LWVtcHR5JykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgICAgICBsZXQgZ3JheU91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgICAgICAgICBncmF5T3V0LnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveC10aWNrJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snOyAgICBcbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgICAgIGxldCBncmF5T3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICAgICAgICAgIGdyYXlPdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgfSAgIFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hlY2tib3hWaXN1YWw7ICAiLCJmdW5jdGlvbiBjbG9zZURldGFpbE1vZGFsKCkge1xuICAgICAgICBjb25zdCBkZXRhaWxNb2RhbFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbC1iZy1tb2RhbCcpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlLXBvcHVwJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGV0YWlsLW1vZGFsLWNvbnRlbnRbZGF0YS1pbmRleD0nJHtpbmRleH0nXWApO1xuICAgICAgICAgICAgICAgIGRldGFpbE1vZGFsUG9wdXAuc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuICAgICAgICAgICAgICAgIGRldGFpbE1vZGFsLnN0eWxlLmRpc3BsYXkgPSdub25lJztcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG4gICAgICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9zZURldGFpbE1vZGFsOyIsIlxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKCl7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtYnV0dG9uJykpe1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIGxldCB0b0JlRGVsZXRlZFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgICAgICAgICB0b0JlRGVsZXRlZFBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0YXNrIGZyb20gYXJyYXlcbiAgICAgICAgICAgIGxldCBpID0gdGFza3MuZmluZEluZGV4KCh0YXNrKT0+dGFzay5pbmRleCA9PT0gcGFyc2VJbnQoaW5kZXgpKVxuICAgICAgICAgICAgdGFza3Muc3BsaWNlKGksIDEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLCB0YXNrcylcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlQnV0dG9uOyIsImxldCBpID0gMDtcbmZ1bmN0aW9uIGRpc3BsYXlUYXNrKHRpdGxlLGRldGFpbHMsIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgbGV0IGJvdHRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGxldCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VGFzay5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIml0ZW0tY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sZWZ0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9ZaXBBbnRob255L2JldHRlclRvRG9MaXN0LzUxMDZmYjcxOGEwNTQ5NDBiZjQxNzgxYTNhNWQ2ZTRhYTQ5OGI5YTAvZGlzdC9pbWFnZXMvY2hlY2tib3hFbXB0eS5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cImNoZWNrYm94LWVtcHR5IGNoZWNrYm94XCIgZGF0YS1pbmRleD0ke2l9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vWWlwQW50aG9ueS9iZXR0ZXJUb0RvTGlzdC81MTA2ZmI3MThhMDU0OTQwYmY0MTc4MWEzYTVkNmU0YWE0OThiOWEwL2Rpc3QvaW1hZ2VzL2NoZWNrYm94LnN2Z1wiIGFsdD1cIlwiIGNsYXNzPVwiY2hlY2tib3gtdGljayBjaGVja2JveFwiIGRhdGEtaW5kZXg9JHtpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCIgZGF0YS1pbmRleD0ke2l9PiR7dGl0bGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1yaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+UHJpb3JpdHk6ICR7cHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHVlRGF0ZVwiPkR1ZTogJHtkYXRlfTwvZGl2PlxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vWWlwQW50aG9ueS9iZXR0ZXJUb0RvTGlzdC81MTA2ZmI3MThhMDU0OTQwYmY0MTc4MWEzYTVkNmU0YWE0OThiOWEwL2Rpc3QvaW1hZ2VzL2VkaXQuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJlZGl0LWJ1dHRvblwiIGRhdGEtaW5kZXg9JHtpfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1lpcEFudGhvbnkvYmV0dGVyVG9Eb0xpc3QvNTEwNmZiNzE4YTA1NDk0MGJmNDE3ODFhM2E1ZDZlNGFhNDk4YjlhMC9kaXN0L2ltYWdlcy9kZWxldGUuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgZGF0YS1pbmRleD0ke2l9PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgbmV3VGFzay5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICBib3R0b20uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIG5ld1Rhc2spO1xuICAgIFxuICAgIGxldCBkZXRhaWxCZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbC1iZy1tb2RhbCcpO1xuICAgIGxldCBkZXRhaWxNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLW1vZGFsLWNvbnRlbnQnKTtcbiAgICBkZXRhaWxNb2RhbENvbnRlbnQuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgZGV0YWlsTW9kYWxDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+TW9yZSBpbmZvcm1hdGlvbiE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1wb3B1cFwiIGRhdGEtaW5kZXg9JHtpfT54PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtdGl0bGVcIj5UaXRsZTogJHt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1kZXRhaWxzXCI+RGV0YWlsczogJHtkZXRhaWxzfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLXByaW9yaXR5XCI+UHJpb3JpdHk6ICR7cHJpb3JpdHl9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtZHVlLWRhdGVcIj5EdWUgb24gJHtkYXRlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG5cbiAgICBkZXRhaWxCZ01vZGFsLmFwcGVuZENoaWxkKGRldGFpbE1vZGFsQ29udGVudCk7XG5cbiAgICBpKys7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUYXNrOyIsImZ1bmN0aW9uIGtleUJvYXJkRnVuY3Rpb24oKXtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZXRhaWwtbW9kYWwtY29udGVudFtzdHlsZSo9XCJkaXNwbGF5OiBibG9jaztcIl1gKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGV0YWlsLW1vZGFsLWNvbnRlbnRbc3R5bGUqPVwiZGlzcGxheTogYmxvY2s7XCJdYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsTW9kYWxQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWwtYmctbW9kYWwnKTtcbiAgICAgICAgICAgICAgICBkZXRhaWxNb2RhbFBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZGV0YWlsTW9kYWwuc3R5bGUuZGlzcGxheSA9J25vbmUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhZGRUYXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctbW9kYWwnKTtcbiAgICAgICAgICAgICAgICBhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleUJvYXJkRnVuY3Rpb25cbiIsIi8vIEFkZCB0YXNrIHBvcHVwIGNsb3NlIGFuZCBvcGVuIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIG1vZGFsUG9wVXAoKSB7XG4gICAgXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGNvbnN0IGFkZFRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1tb2RhbCcpO1xuICAgIGNvbnN0IGFkZFRhc2tDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpO1xuICAgIFxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBhZGRUYXNrUG9wdXAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTtcbiAgICBcbiAgICBhZGRUYXNrQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgYWRkVGFza1BvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgbW9kYWxQb3BVcCIsImZ1bmN0aW9uIG9wZW5EZXRhaWxNb2RhbCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmQtdGl0bGUnKSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICAgICAgbGV0IGRldGFpbEJnTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsLWJnLW1vZGFsJyk7XG4gICAgICAgICAgICBsZXQgZGV0YWlsTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGV0YWlsLW1vZGFsLWNvbnRlbnRbZGF0YS1pbmRleD0nJHtpbmRleH0nXWApO1xuICAgICAgICAgICAgZGV0YWlsQmdNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZGV0YWlsTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wZW5EZXRhaWxNb2RhbDsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2tDb25zdHJ1Y3QnO1xuaW1wb3J0IGRpc3BsYXlUYXNrIGZyb20gJy4vZGlzcGxheVRhc2tBbmRNb2RhbCc7XG5sZXQgaSA9IDA7XG4vL1N1Ym1pdCB0YXNrIGZ1bmN0aW9uYWxpdHlcbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gZS50YXJnZXRbJ3N1Ym1pdC10aXRsZSddLnZhbHVlO1xuICAgICAgICBsZXQgZGV0YWlscyA9IGUudGFyZ2V0WydzdWJtaXQtZGV0YWlscyddLnZhbHVlO1xuICAgICAgICBsZXQgZGF0ZSA9IGUudGFyZ2V0WydzdWJtaXQtZGF0ZSddLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBlLnRhcmdldFsnc3VibWl0LXByaW9yaXR5J10udmFsdWU7XG4gICAgICAgIGxldCBpbmRleCA9IGk7XG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRldGFpbHMsIGRhdGUgLCBwcmlvcml0eSwgaW5kZXgpO1xuXG4gICAgICAgIHRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmctbW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cudGFza3MpO1xuICAgICAgICBkaXNwbGF5VGFzayh0aXRsZSxkZXRhaWxzLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBkZWZhdWx0IHBhZ2UgcmVmcmVzaFxuICAgICAgICBpKys7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1Ym1pdEZvcm07XG4iLCIvLyBUYXNrIGNvbnN0cnVjdG9yXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGV0YWlscywgZGF0ZSwgcHJpb3JpdHksIGluZGV4KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfTtcbiAgICBcbiAgICBzYXlCb29rKCkge1xuICAgICAgICBhbGVydCh0aGlzLnRpdGxlKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IG1vZGFsUG9wVXAgZnJvbSAnLi9tb2R1bGVzL21vZGFsJztcbmltcG9ydCBjaGVja2JveFZpc3VhbCBmcm9tICcuL21vZHVsZXMvY2hlY2tib3hWaXN1YWwnO1xuaW1wb3J0IGRlbGV0ZUJ1dHRvbiBmcm9tICcuL21vZHVsZXMvZGVsZXRlQnV0dG9uJztcbmltcG9ydCBzdWJtaXRGb3JtIGZyb20gJy4vbW9kdWxlcy9zdWJtaXRGb3JtJztcbmltcG9ydCBvcGVuRGV0YWlsTW9kYWwgZnJvbSAnLi9tb2R1bGVzL29wZW5EZXRhaWxNb2RhbCc7XG5pbXBvcnQgY2xvc2VEZXRhaWxNb2RhbCBmcm9tICcuL21vZHVsZXMvY2xvc2VEZXRhaWxNb2RhbCc7XG5pbXBvcnQga2V5Qm9hcmRGdW5jdGlvbiBmcm9tICcuL21vZHVsZXMva2V5Qm9hcmRGdW5jdGlvbmFsaXR5Jztcblxud2luZG93LnRhc2tzID0gW107XG5cbi8vIGFkZCB0YXNrIHBvcHVwIGxvZ2ljXG5tb2RhbFBvcFVwKCk7XG4vL3N1Ym1pdCBmb3JtIGZ1bmN0aW9uYWxpdHlcbnN1Ym1pdEZvcm0oKTtcbi8vIGNoZWNrYm94IHRpY2tpbmcgdmlzdWFsIGZ1bmN0aW9uYWxpdHlcbmNoZWNrYm94VmlzdWFsKCk7XG4vLyBkZWxldGUgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbmRlbGV0ZUJ1dHRvbigpO1xuLy9vcGVuIGRldGFpbHMgbW9kYWwgZnhuXG5vcGVuRGV0YWlsTW9kYWwoKTtcbi8vY2xvc2UgZGV0YWlsIG1vZGFscyBmeG5cbmNsb3NlRGV0YWlsTW9kYWwoKTtcblxuLy9rZXlib2FyZCBmeG5cbmtleUJvYXJkRnVuY3Rpb24oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==