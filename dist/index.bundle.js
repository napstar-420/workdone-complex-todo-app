/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n    --main-font: 'Montserrat', sans-serif;\\r\\n    --secondary-font: 'Open Sans', sans-serif;\\r\\n    --transition: all ease-in-out 0.3s;\\r\\n    --main-color: rgb(135, 76, 194);\\r\\n}\\r\\n\\r\\n* {\\r\\n    box-sizing: border-box;\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-size: 1rem;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: #151515;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n    display: none !important;\\r\\n}\\r\\n\\r\\n.model {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    width: 100vw;\\r\\n    min-height: 100vh;\\r\\n    background-color: #151515bb;\\r\\n    display: grid;\\r\\n    place-items: center;\\r\\n}\\r\\n\\r\\n.button {\\r\\n    padding: 0.4rem 1rem;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    border-radius: 4px;\\r\\n    border: none;\\r\\n    background-color: var(--main-color);\\r\\n    font-family: var(--main-font);\\r\\n    font-weight: 700;\\r\\n    color: #fff;\\r\\n    cursor: pointer;\\r\\n    transition: var(--transition);\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n/* HEADER STYLING */\\r\\n\\r\\nheader {\\r\\n    /* background: linear-gradient(90deg, rgba(8,234,133,1) 0%, rgba(8,234,201,1) 100%); */\\r\\n    padding: 0.5rem 2rem;\\r\\n    height: 4rem;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    border-bottom: #fff 3px solid;\\r\\n}\\r\\n\\r\\n.header-title {\\r\\n    font-size: 2rem;\\r\\n    font-family: var(--main-font);\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n.login-btn, .sign-up-btn {\\r\\n    display: inline-block;\\r\\n}\\r\\n\\r\\n.login-btn {\\r\\n    background-color: transparent;\\r\\n}\\r\\n\\r\\n.login-btn:hover {\\r\\n    background-color: rgb(255, 255, 255, 0.1);\\r\\n}\\r\\n\\r\\n/* MAIN STYLING */\\r\\n\\r\\nmain {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n/* SIDE NAV STYLING */\\r\\n\\r\\nnav {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 15rem;\\r\\n    padding: 1rem;\\r\\n    min-height: calc(100vh - 4rem);\\r\\n    /* margin: 0.5rem; */\\r\\n    border-radius: 10px;\\r\\n    transition: var(--transition);\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\nnav:hover {\\r\\n    background-color: #202020;\\r\\n}\\r\\n\\r\\nnav div:not(.add-project-model) {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\nnav h2 {\\r\\n    font-size: 1.5rem;\\r\\n    color: #fff;\\r\\n    font-family: var(--main-font);\\r\\n    margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.nav_link {\\r\\n    padding: 0.5rem 1rem;\\r\\n    margin: 0.1rem 0;\\r\\n    background-color: rgb(135, 76, 194, 0.15);\\r\\n    color: #fff;\\r\\n    border: none;\\r\\n    border-radius: 4px;\\r\\n    font-family: var(--main-font);\\r\\n    font-weight: 700;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    transition: var(--transition);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav_link span {\\r\\n    margin-right: 0.4rem;\\r\\n}\\r\\n\\r\\n.nav_link:hover {\\r\\n    background-color: var(--main-color);\\r\\n}\\r\\n\\r\\n/* ADD PROJECT MODEL STYLING */\\r\\n\\r\\n#add-project-model {\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0%;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: #101010e5;\\r\\n    display: grid;\\r\\n    place-items: center;\\r\\n    padding: 0 0.2rem;\\r\\n}\\r\\n\\r\\n#add-project-model form {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.4rem;\\r\\n}\\r\\n\\r\\n#add-project-model form label {\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 700;\\r\\n    font-family: var(--main-font);\\r\\n}\\r\\n\\r\\n#add-project-model form span {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    gap: 0.4rem;\\r\\n}\\r\\n\\r\\n.project-name-error-msg {\\r\\n    color: red;\\r\\n    font-family: var(--main-font);\\r\\n    font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n/* TASK CONTAINER STYLING */\\r\\n\\r\\n.main-container {\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n.top-container {\\r\\n    margin: 1rem;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.greeting {\\r\\n    font-size: 2rem;\\r\\n    font-family: var(--main-font);\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n.greeting span {\\r\\n    font-size: inherit;\\r\\n}\\r\\n\\r\\n.sub-greeting {\\r\\n    color: #505050;\\r\\n    font-family: var(--main-font);\\r\\n    font-size: 1.2rem;\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\n.open-task-model-btn {\\r\\n    margin-right: 1rem;\\r\\n    flex: none;\\r\\n}\\r\\n\\r\\n.open-task-model-btn span {\\r\\n    margin-right: 0.3rem;\\r\\n}\\r\\n\\r\\n.open-task-model-btn:hover {\\r\\n    transform: scale(1.1);\\r\\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.open-task-model-btn:active {\\r\\n    transform: translateY(5px) scale(1.1);\\r\\n}\\r\\n\\r\\n/* ADD TASK MODEL STYLING */\\r\\n\\r\\n.add-task-form {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n    gap: 0.4rem;\\r\\n    background-color: #101010;\\r\\n    padding: 1rem 1.5rem;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n\\r\\n.add-task-form h2 {\\r\\n    font-size: 1.5rem;\\r\\n    color: #fff;\\r\\n    font-family: var(--main-font);\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.add-task-form span:not(.priority-span, .project-span) {\\r\\n    grid-column: 1 / 3\\r\\n}\\r\\n\\r\\n.add-task-form > span {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.due-date-span > span {\\r\\n    display: flex;\\r\\n    justify-content: stretch;\\r\\n    gap: 0.4rem;\\r\\n}\\r\\n\\r\\n.label {\\r\\n    color: #fff;\\r\\n    font-family: var(--secondary-font);\\r\\n    font-size: 0.9rem;\\r\\n    letter-spacing: 1px;\\r\\n}\\r\\n\\r\\n.form-control {\\r\\n    flex: 1;\\r\\n    background-color: #303030;\\r\\n    color: #fff;\\r\\n    font-family: var(--main-font);\\r\\n    padding: 0.2rem 0.5rem;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    border-radius: 4px;\\r\\n}\\r\\n\\r\\n.form-control:focus {\\r\\n    outline: var(--main-color) solid;\\r\\n    background-color: #353535;\\r\\n}\\r\\n\\r\\n.add-btn {\\r\\n    background-color: rgb(0, 255, 128);\\r\\n    color: #101010;\\r\\n}\\r\\n\\r\\n.cancel-btn {\\r\\n    background-color: red;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\nclass UI {\r\n    static openAddTaskModel () {\r\n        const model = document.getElementById('add-task-model');\r\n        model.classList.remove('hidden');\r\n    }\r\n    static closeAddTaskModel () {\r\n        const model = document.getElementById('add-task-model');\r\n        model.classList.add('hidden');\r\n    }\r\n    static openAddProjectModel () {\r\n        const model = document.getElementById('add-project-model');\r\n        model.classList.remove('hidden');\r\n    }\r\n\r\n    static createProjectNameErrorMsg (name) {\r\n        const span = document.querySelector('.project-name-error-msg');\r\n        span.textContent = `${name} project has already been made.`;\r\n    }\r\n\r\n    static closeAddProjectModel() {\r\n        const model = document.getElementById('add-project-model');\r\n        model.classList.add('hidden');\r\n        const span = document.querySelector('.project-name-error-msg');\r\n        span.textContent = '';\r\n    }\r\n\r\n\r\n    static addProjectToUI (projectsTab, project) {\r\n        // Adds the Project nav link to side nav\r\n        const projectLink = document.createElement('button');\r\n        projectLink.classList.add('nav_link');\r\n        projectLink.textContent = project.name;\r\n        projectsTab.appendChild(projectLink);\r\n        // Adds the Project option in the Add task model select\r\n        const projectOption = document.createElement('option');\r\n        projectOption.value = project.id;\r\n        projectOption.textContent = project.name;\r\n        _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].taskProject.appendChild(projectOption);\r\n        // Closes the Add Project Model\r\n        this.closeAddProjectModel()\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://todo-app/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\n\r\n\r\n_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openTaskBModelBtn.addEventListener('click', _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].openAddTaskModel);\r\n_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cancelAddTaskBtn.addEventListener('click', _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].closeAddTaskModel);\r\n_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTaskBtn.addEventListener('click', _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTask)\r\n_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"].openProjectModelBtn.addEventListener('click', _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].openAddProjectModel);\r\n_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cancelAddProjectBtn.addEventListener('click', _UI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].closeAddProjectModel);\r\n_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createProjectBtn.addEventListener('click', _project__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createProject);\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\nclass Project {\r\n    static projectList = [];\r\n    static openProjectModelBtn = document.getElementById(\r\n        \"open-project-model-btn\"\r\n    );\r\n    static createProjectBtn = document.getElementById(\"add-project-btn\");\r\n    static cancelAddProjectBtn = document.getElementById(\r\n        \"cancel-add-project-btn\"\r\n    );\r\n    static projectsTab = document.getElementById(\"projects-tab\");\r\n    static projectName = document.getElementById(\"project-title\");\r\n\r\n    static addProject = function addProjectToProductList(project, list) {\r\n        list.push(project);\r\n    };\r\n\r\n    static createProject = function createProjectAndUpdateUI(e) {\r\n        e.preventDefault();\r\n        const projectName = Project.projectName.value;\r\n        if (Project.checkProject(projectName) !== false) {\r\n            const project= new Project(projectName);\r\n            Project.addProject(project, Project.projectList);\r\n            _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectToUI(Project.projectsTab, project);\r\n            Project.projectName.value = \"\";\r\n        }\r\n    };\r\n\r\n    static checkProject = function checkIfProjectAlreadyExistAndNameIsValid(name) {\r\n        let newProjectName = name;\r\n        newProjectName = newProjectName.trim();\r\n        if (newProjectName !== \"\") {\r\n            for(const project of Project.projectList) {\r\n                if(project.name === newProjectName) {\r\n                    _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProjectNameErrorMsg(newProjectName);\r\n                    return false;\r\n                }\r\n            }\r\n            return true\r\n        }\r\n        return false;\r\n    };\r\n\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.id = Project.projectList.length;\r\n        this.tasks = [];\r\n    }\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-app/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\n\r\nclass Task {\r\n    static openTaskBModelBtn = document.getElementById('open-task-model-btn');\r\n    static addTaskBtn = document.getElementById('add-task-btn');\r\n    static cancelAddTaskBtn = document.getElementById('cancel-add-task-btn');\r\n    static taskTitle = document.getElementById('task-title');\r\n    static taskDesc = document.getElementById('task-desc');\r\n    static taskDueDate = document.getElementById('task-due-time');\r\n    static taskDueTime = document.getElementById('task-due-date');\r\n    static taskPriority = document.getElementById('task-priority');\r\n    static taskProject = document.getElementById('task-project');\r\n\r\n    static createTask(e) {\r\n        e.preventDefault();\r\n        const task = new Task(\r\n            Task.taskTitle.value, \r\n            Task.taskDesc.value, \r\n            Task.taskDueDate.value, \r\n            Task.taskDueTime.value, \r\n            Task.taskPriority.value,\r\n            Task.taskProject.value\r\n        )\r\n        Task.addTask(task);\r\n    }\r\n\r\n    static addTask = function forwardTaskToProjectList(task) {\r\n        _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList[Task.taskProject.value].addTask(task);\r\n        console.log(_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList[Task.taskProject.value])\r\n        _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeAddTaskModel();\r\n    }\r\n\r\n    constructor(title, desc, dueDate, dueTime, priority, projectId) {\r\n        this.title = title;\r\n        this.desc = desc;\r\n        this.deadline = {\r\n            dueTime,\r\n            dueDate\r\n        },\r\n        this.priority = priority,\r\n        this.projectId = projectId\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-app/./src/task.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;