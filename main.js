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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Assets/fonts/early_gameboy/Early GameBoy.ttf */ \"./src/Assets/fonts/early_gameboy/Early GameBoy.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: gameboy;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  background-color: #00050a;\n  font-family: gameboy;\n  user-select: none;\n  outline: none;\n}\n\nbutton {\n  border: 1px solid white;\n  background-color: transparent;\n  color: white;\n  font-family: gameboy;\n}\n\nbutton:enabled:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\nbutton:enabled:active {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.header {\n  height: 10%;\n  width: 100%;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header p {\n  font-size: 40px;\n}\n.BB-61 {\n  position: fixed;\n  animation: slide-left 100s linear forwards;\n}\n@keyframes slide-left {\n  0% {\n    left: 100vw;\n  }\n  100% {\n    left: -200vw;\n  }\n}\n\n.helpBtn {\n  height: 40px;\n  width: 40px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding-left: 8px;\n\n  border: 1px solid white;\n  border-radius: 100%;\n\n  position: absolute;\n  right: 80px;\n  font-size: 22px;\n}\n\n.helpBtn:hover,\n.helpBtn:active {\n  background-color: transparent !important;\n}\n\n.helpBtn:active {\n  opacity: 0.8;\n}\n\n.helpModal {\n  height: 700px;\n  width: 900px;\n\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  background-color: #00050a;\n  color: rgb(255, 255, 255);\n\n  border: 1px solid rgba(255, 255, 255, 0.096);\n}\n.helpModal > h2 {\n  align-self: center;\n  margin: 10px 0 20px 0;\n}\n.helpIntro {\n  margin: 0 0 20px 10px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.helpModal h3 {\n  margin: 0 0 15px 20px;\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.helpModal ul {\n  margin: 0 0 15px 60px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.closeHelpBtnDiv {\n  width: 100%;\n  height: fit-content;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 0px;\n}\n.closeHelpBtn {\n  margin-right: 22px;\n  font-size: 22px;\n  color: white;\n}\n\n.closeHelpBtn:hover,\n.closeHelpBtn:active {\n  margin-right: 22px;\n  font-size: 22px;\n  color: red;\n}\n\n.overlay {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.39);\n  position: absolute;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n\n.contentBox {\n  height: 90%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.selectMode {\n  height: 300px;\n  width: 500px;\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  border: 1px solid white;\n  color: white;\n}\n\n.introDialogue {\n  margin: -20px 0 0 10px;\n}\n\n.modeOptions {\n  height: 170px;\n  width: 350px;\n  align-self: center;\n  display: flex;\n  justify-content: space-between;\n}\n\n.optionComputer,\n.optionFriend {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.optionFriendButton,\n.optionComputerButton {\n  height: 150px;\n  width: 150px;\n  border: 1px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.optionFriendButton:hover,\n.optionComputerButton:hover {\n  opacity: 0.7;\n}\n\n.optionFriendButton > pre {\n  scale: 0.5;\n  margin: 40px 10px 0 0;\n}\n\n.getName {\n  height: 200px;\n  width: fit-content;\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border: 1px solid white;\n  color: white;\n}\n\n.getName p {\n  margin: 10px 0 0 10px;\n  font-size: 20px;\n}\n\n.getName input {\n  height: 30px;\n  width: 200px;\n  background-color: #cfcfcf;\n  border: 1px solid white;\n  padding-left: 10px;\n  font-size: small;\n  font-family: gameboy;\n  outline: none;\n}\n\n.getName button {\n  height: 30px;\n  width: 100px;\n}\n\n.placeShipStage {\n  height: fit-content;\n  width: 100%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  margin-left: 250px;\n  gap: 100px;\n}\n\n.placementBoardContainer,\n.boardDiv {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n.actBtnContainer {\n  display: flex;\n  gap: 30px;\n  align-self: flex-end;\n  margin: 10px 50px 0 0;\n}\n\n.clearBtn,\n.confirmBtn {\n  height: 40px;\n  width: 120px;\n  background-color: transparent;\n  border: 1px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-family: gameboy;\n  cursor: pointer;\n}\n\n.clearBtn:disabled,\n.confirmBtn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.instructionDiv {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  height: 280px;\n  width: 500px;\n  border: 1px solid #f9f9f9;\n  overflow: break-word;\n}\n.instructionDiv > p {\n  color: white;\n}\n\n.instructionDiv ol {\n  list-style-position: inside;\n  margin: 20px 0 0 15px;\n}\n\n.instructionDiv li {\n  color: rgba(255, 255, 255, 0.555);\n  font-size: 1rem;\n  margin: 0 0 15px 0;\n}\n\n.scrambleShipBtn {\n  background-color: transparent;\n  height: 100px;\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n}\n.scrambleShipBtn:active img {\n  opacity: 0.8;\n}\n\n.scrambleShipBtn:hover,\n.scrambleShipBtn:active {\n  background-color: transparent !important;\n}\n\n.scrambleShipBtn img {\n  scale: 0.1;\n}\n\n/* .placementBoard{\n  height: fit-content;\n  width: 100%;\n} */\n\n.ship {\n  height: 45px;\n  width: fit-content;\n  display: flex;\n  border-width: 1px 0 1px 1px;\n  border-style: solid;\n  border-color: lightblue;\n  margin: 0 0 20px 20px;\n}\n.ship:hover {\n  background-color: rgba(173, 216, 230, 0.1);\n}\n\n.ship:active {\n  background-color: rgba(173, 216, 230, 0.5);\n}\n\n.shipCell {\n  height: 45px;\n  width: 45px;\n  border-right: 1px solid lightblue;\n}\n\n.playingStage {\n  display: none;\n  flex-direction: column;\n  height: fit-content;\n  width: fit-content;\n}\n\n.turnAnnouncer {\n  height: 50px;\n  width: 100%;\n  padding-bottom: 40px;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n}\n\n.blink {\n  animation: blink 1s step-start 3;\n}\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n.boards {\n  height: 500px;\n  width: 1200px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.boardTitle {\n  color: white;\n  height: fit-content;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.board {\n  height: fit-content;\n  width: fit-content;\n  outline: 1px solid white !important;\n  cursor: pointer;\n}\n\n.activeBoard .cell:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.row {\n  height: fit-content;\n  width: fit-content;\n  display: flex;\n}\n\n.cell {\n  height: 45px;\n  width: 45px;\n  border-right: 1px solid rgba(128, 128, 128, 0.5);\n  border-bottom: 1px solid rgba(128, 128, 128, 0.5);\n  margin: 0 -1px -1px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit {\n  background-color: rgba(255, 0, 0, 0.1);\n}\n\n.miss {\n  background-color: rgba(255, 166, 0, 0.1);\n}\n\n.redMark,\n.orangeMark {\n  height: 10px;\n  width: 10px;\n  border-radius: 100%;\n}\n\n.redMark {\n  background-color: crimson;\n}\n\n.orangeMark {\n  background-color: orange;\n}\n\n.replayModal {\n  height: 150px;\n  width: 200px;\n  border: 1px solid white;\n  display: none;\n  flex-direction: column;\n  justify-content: space-around;\n  color: white;\n  background-color: #00050ada;\n  padding: 20px 20px 0 20px;\n}\n.restartBtn {\n  height: 30px;\n  width: 80px;\n  background-color: none;\n  border: 1px solid white;\n  align-self: flex-end;\n  font-family: gameboy;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/Assets/fonts/early_gameboy/Early GameBoy.ttf":
/*!**********************************************************!*\
  !*** ./src/Assets/fonts/early_gameboy/Early GameBoy.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d9d11b3df42d741aaf14.ttf\";\n\n//# sourceURL=webpack://battleship/./src/Assets/fonts/early_gameboy/Early_GameBoy.ttf?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_execGame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/execGame.js */ \"./src/modules/execGame.js\");\n\n\n\n\n(async function main() {\n  const selectedMode = await (0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_1__.getMode)();\n\n  (0,_modules_execGame_js__WEBPACK_IMPORTED_MODULE_2__.execGame)(selectedMode);\n})();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   botPlaceShips: () => (/* binding */ botPlaceShips),\n/* harmony export */   getMode: () => (/* binding */ getMode),\n/* harmony export */   getName: () => (/* binding */ getName),\n/* harmony export */   initPlayers: () => (/* binding */ initPlayers),\n/* harmony export */   placeShips: () => (/* binding */ placeShips),\n/* harmony export */   placementBoardListeners: () => (/* binding */ placementBoardListeners),\n/* harmony export */   renderPlacementStage: () => (/* binding */ renderPlacementStage),\n/* harmony export */   renderPlayingBoards: () => (/* binding */ renderPlayingBoards),\n/* harmony export */   runGame: () => (/* binding */ runGame)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/modules/ship.js\");\n\n\n\nconst modeSelectModal = document.querySelector(\".selectMode\");\nconst boardsContainer = document.querySelector(\".boards\");\nconst playingStage = document.querySelector(\".playingStage\");\nconst getNameForm = document.querySelector(\".getName\");\nconst nameInput = document.getElementById(\"name\");\nconst placeShipStage = document.querySelector(\".placeShipStage\");\nconst turnAnnouncer = document.querySelector(\".turnAnnouncer\");\nconst restartBtn = document.querySelector(\".restartBtn\");\nconst helpBtn = document.querySelector(\".helpBtn\");\nconst closeHelpBtn = document.querySelector(\".closeHelpBtn\");\n\nasync function getMode() {\n  modeSelectModal.style.display = \"flex\";\n  return new Promise((resolve) => {\n    modeSelectModal.addEventListener(\"click\", (event) => {\n      const button = event.target.closest(\".button\");\n      if (button) {\n        modeSelectModal.style.display = \"none\";\n        resolve(button.classList[0]);\n      }\n    });\n  });\n}\n\nfunction getName(player, mode) {\n  if (player === \"secondPlayer\" && mode === \"optionComputer\") return \"Computer\";\n\n  if (player === \"secondPlayer\" && mode === \"optionFriend\") {\n    getNameForm.querySelector(\"p\").textContent =\n      \"and what's your friend's name?\";\n  }\n\n  getNameForm.style.display = \"flex\";\n\n  return new Promise((resolve) => {\n    const handler = (event) => {\n      event.preventDefault();\n      const name = nameInput.value;\n      getNameForm.style.display = \"none\";\n      getNameForm.removeEventListener(\"submit\", handler);\n      resolve(name);\n    };\n    getNameForm.addEventListener(\"submit\", handler);\n    getNameForm.reset();\n  });\n}\n\nfunction initPlayers(firstPlayerName, secondPlayerName) {\n  const firstPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(firstPlayerName);\n  const secondPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_0__.Player(secondPlayerName);\n\n  return [firstPlayer, secondPlayer];\n}\n\nfunction instructionDiv() {\n  const instructionDiv = document.querySelector(\".instructionDiv\");\n  const clone = instructionDiv.cloneNode(true);\n  clone.style.display = \"flex\";\n  return clone;\n}\n\nfunction renderPlacementStage(playerObject, secondPlayerName) {\n  placeShipStage.textContent = \"\";\n\n  const boardObject = playerObject.board;\n\n  const placemnetBoardContainer = document.createElement(\"div\");\n  placemnetBoardContainer.classList.add(\"placementBoardContainer\");\n\n  const boardTitle = document.createElement(\"div\");\n  boardTitle.classList.add(\"boardTitle\");\n\n  const boardTitleText = document.createElement(\"p\");\n  if (secondPlayerName === \"Computer\") {\n    boardTitleText.innerHTML = `${playerObject.name} Place your six ships on the board`;\n  } else {\n    boardTitleText.innerHTML = `${playerObject.name} Place your six ships on the board<br>and make sure ${secondPlayerName} isn't watching!`;\n  }\n\n  boardTitle.appendChild(boardTitleText);\n  placemnetBoardContainer.appendChild(boardTitle);\n\n  const genGrid = createPlacementBoardGrid(boardObject);\n  placemnetBoardContainer.appendChild(genGrid);\n\n  const actBtnContainer = document.createElement(\"div\");\n  actBtnContainer.classList.add(\"actBtnContainer\");\n\n  const clearBtn = document.createElement(\"button\");\n  clearBtn.classList.add(\"clearBtn\");\n  clearBtn.textContent = \"Clear\";\n  actBtnContainer.appendChild(clearBtn);\n\n  const confirmBtn = document.createElement(\"button\");\n  confirmBtn.classList.add(\"confirmBtn\");\n  confirmBtn.textContent = \"Confirm\";\n  actBtnContainer.appendChild(confirmBtn);\n\n  placemnetBoardContainer.appendChild(actBtnContainer);\n\n  placeShipStage.appendChild(placemnetBoardContainer);\n  placeShipStage.appendChild(instructionDiv());\n}\n\nfunction createPlacementBoardGrid(boardObject, size = 10) {\n  const board = document.createElement(\"div\");\n  board.classList.add(\"board\", \"placementBoard\");\n\n  for (let i = 1; i <= size; i++) {\n    const row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n    for (let j = 1; j <= size; j++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.dataset.coordinate = `[${j},${i}]`;\n\n      if (Object.keys(boardObject.occupiedCells).includes(`${j},${i}`)) {\n        cell.style.backgroundColor = \"rgba(2, 92, 156, 0.859)\";\n        cell.classList.add(\"occupied\");\n      }\n\n      row.appendChild(cell);\n    }\n    board.appendChild(row);\n  }\n  return board;\n}\n\nfunction changeCellColour(cellArr, action) {\n  if (!cellArr) return new Error(`Cell Array: ${cellArr}`);\n  if (!action) return new Error(`Action Array: ${action}`);\n\n  cellArr.forEach((cellCoordinations) => {\n    const cellStr = JSON.stringify(cellCoordinations);\n    const cellDiv = document.querySelector(`[data-coordinate='${cellStr}']`);\n\n    const isOccupied = cellDiv.classList.contains(\"occupied\");\n\n    let color;\n    if (action === \"overlapped\") {\n      color = isOccupied ? \"rgba(220, 20, 60, 0.78)\" : \"rgba(220, 20, 60, 0.3)\";\n    } else if (action === \"in\") {\n      color = !isOccupied ? \"rgba(255, 255, 255, 0.1)\" : color;\n    } else if (action === \"out\") {\n      color = !isOccupied ? \"transparent\" : \"rgba(2, 92, 156, 0.859)\";\n    }\n    cellDiv.style.backgroundColor = color;\n  });\n}\n\nfunction placementBoardListeners(boardObject, ship, handlePlacement) {\n  const boardContainer = document.querySelector(\".placementBoardContainer\");\n\n  let hoveredCells, cellCoordinates;\n\n  let resolveAxis;\n  const axisPromise = new Promise((resolve) => {\n    resolveAxis = resolve;\n  });\n\n  const hasTargetted = () => {\n    if (!hoveredCells) return true;\n    return hoveredCells.some((cell) =>\n      Object.keys(boardObject.occupiedCells).includes(cell.join(\",\")),\n    );\n  };\n\n  const updateHoveredCells = () => {\n    hoveredCells = boardObject.getPossibleCells(ship, cellCoordinates);\n  };\n\n  const mouseOverHandler = (event) => {\n    const cellDiv = event.target;\n    if (!cellDiv.classList.contains(\"cell\")) return;\n\n    cellCoordinates = JSON.parse(cellDiv.dataset.coordinate);\n\n    updateHoveredCells();\n\n    changeCellColour(hoveredCells, hasTargetted() ? \"overlapped\" : \"in\");\n  };\n\n  const mouseOutHandler = (event) => {\n    const cellDiv = event.target;\n    if (!cellDiv.classList.contains(\"cell\")) return;\n\n    changeCellColour(hoveredCells, \"out\");\n  };\n\n  const wheelHandler = (event) => {\n    event.preventDefault();\n    const cellDiv = event.target;\n    if (!cellDiv.classList.contains(\"cell\")) return;\n\n    changeCellColour(hoveredCells, \"out\");\n\n    ship.axis = ship.axis === \"X\" ? \"Y\" : \"X\";\n\n    updateHoveredCells();\n\n    changeCellColour(hoveredCells, hasTargetted() ? \"overlapped\" : \"in\");\n  };\n\n  const clickHandler = (event) => {\n    const cellDiv = event.target;\n    if (!cellDiv.classList.contains(\"cell\")) return;\n\n    const isValid = !hasTargetted();\n\n    handlePlacement(isValid, boardObject, ship, hoveredCells);\n\n    resolveAxis(ship.axis);\n  };\n\n  boardContainer.addEventListener(\"mouseover\", mouseOverHandler);\n  boardContainer.addEventListener(\"mouseout\", mouseOutHandler);\n  boardContainer.addEventListener(\"wheel\", wheelHandler);\n  boardContainer.addEventListener(\"click\", clickHandler);\n\n  const cleanupBoard = () => {\n    boardContainer.removeEventListener(\"mouseover\", mouseOverHandler);\n    boardContainer.removeEventListener(\"mouseout\", mouseOutHandler);\n    boardContainer.removeEventListener(\"wheel\", wheelHandler);\n    boardContainer.removeEventListener(\"click\", clickHandler);\n  };\n\n  return { axisPromise, cleanupBoard };\n}\n\nasync function placeShips(\n  playerObject,\n  secondPlayerName,\n  shipSizes = [5, 4, 4, 3, 3, 2],\n) {\n  const boardObject = playerObject.board;\n\n  const currentState = {\n    index: 0,\n    axis: \"X\",\n  };\n\n  renderPlacementStage(playerObject, secondPlayerName);\n  placeShipStage.style.display = \"flex\";\n\n  const clearBtn = document.querySelector(\".clearBtn\");\n  const scrambleBtn = document.querySelector(\".scrambleShipBtn\");\n  const confirmBtn = document.querySelector(\".confirmBtn\");\n\n  confirmBtn.disabled = true;\n  clearBtn.disabled = true;\n\n  function scrambleShips() {\n    botPlaceShips(boardObject);\n    removeBoardListeners();\n    updatePlacementGrid(boardObject);\n\n    clearBtn.disabled = false;\n    confirmBtn.disabled = false;\n\n    currentState.index = shipSizes.length + 10;\n  }\n\n  function clearBoard() {\n    boardObject.occupiedCells = {};\n\n    currentState.index = 0;\n    currentState.axis = \"X\";\n\n    removeBoardListeners();\n\n    updatePlacementGrid(boardObject);\n\n    confirmBtn.disabled = true;\n\n    PlaceShipLoop();\n  }\n\n  function cleanupButton() {\n    scrambleBtn.removeEventListener(\"click\", scrambleShips);\n    clearBtn.removeEventListener(\"click\", clearBoard);\n  }\n\n  const handlePlacement = (isValid, boardObject, ship, cells) => {\n    if (isValid) {\n      boardObject.placeShip(cells, ship);\n      currentState.index++;\n    }\n    removeBoardListeners();\n    updatePlacementGrid(boardObject);\n  };\n\n  let removeBoardListeners;\n  const PlaceShipLoop = async () => {\n    while (currentState.index < shipSizes.length) {\n      clearBtn.disabled = currentState.index <= 0;\n\n      const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(shipSizes[currentState.index], currentState.axis);\n      const { axisPromise, cleanupBoard } = placementBoardListeners(\n        boardObject,\n        ship,\n        handlePlacement,\n      );\n      removeBoardListeners = cleanupBoard;\n      currentState.axis = await axisPromise;\n    }\n    confirmBtn.disabled = false;\n  };\n\n  return new Promise((resolve) => {\n    clearBtn.addEventListener(\"click\", clearBoard);\n    scrambleBtn.addEventListener(\"click\", scrambleShips);\n\n    confirmBtn.addEventListener(\"click\", () => {\n      placeShipStage.style.display = \"none\";\n      cleanupButton();\n      resolve();\n    });\n\n    PlaceShipLoop();\n  });\n}\n\nfunction updatePlacementGrid(boardObj) {\n  document.querySelector(\".placementBoard\").remove();\n  const title = document.querySelector(\".boardTitle\");\n  title.after(createPlacementBoardGrid(boardObj));\n}\n\nfunction botPlaceShips(\n  boardObj,\n  shipCount = 6,\n  shipSizes = [5, 4, 4, 3, 3, 2],\n) {\n  boardObj.occupiedCells = {};\n\n  const axies = [\"X\", \"Y\"];\n\n  let curretShipIndex = 0;\n\n  let possibleCells;\n  while (shipCount) {\n    const computerAxis = axies[randomNumGen(2) - 1];\n    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__.Ship(shipSizes[curretShipIndex], computerAxis);\n    const pos = [randomNumGen(10), randomNumGen(10)];\n    possibleCells = boardObj.getPossibleCells(ship, pos);\n    if (\n      !possibleCells.some((cell) =>\n        Object.keys(boardObj.occupiedCells).includes(cell.join(\",\")),\n      )\n    ) {\n      boardObj.placeShip(possibleCells, ship);\n      curretShipIndex += 1;\n      shipCount -= 1;\n    }\n  }\n}\n\nfunction randomNumGen(range) {\n  return Math.floor(Math.random() * range) + 1;\n}\n\nfunction renderPlayingBoards(playerNames) {\n  playerNames.forEach((playerName) => {\n    const playerNameMod = playerName.replace(/\\s/g, \"\");\n\n    const boardDiv = document.createElement(\"div\");\n    boardDiv.classList.add(\"boardDiv\", `${playerNameMod}_boardDiv`);\n\n    const boardTitle = document.createElement(\"div\");\n    boardTitle.classList.add(\"boardTitle\", `${playerNameMod}BoardTitle`);\n    const boardTitleText = document.createElement(\"p\");\n    boardTitleText.textContent = `${playerName}'s board`;\n\n    boardTitle.appendChild(boardTitleText);\n    boardDiv.appendChild(boardTitle);\n\n    const boardGrid = createPlayingBoardGrid(playerNameMod);\n    boardDiv.appendChild(boardGrid);\n\n    boardsContainer.appendChild(boardDiv);\n  });\n  playingStage.style.display = \"flex\";\n}\n\nfunction createPlayingBoardGrid(playerName, size = 10) {\n  const board = document.createElement(\"div\");\n  board.classList.add(\"board\", `${playerName}_board`);\n\n  for (let i = 1; i <= size; i++) {\n    const row = document.createElement(\"div\");\n    row.classList.add(\"row\");\n    for (let j = 1; j <= size; j++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      cell.dataset.coordinate = `${j},${i}`;\n      row.appendChild(cell);\n    }\n    board.appendChild(row);\n  }\n  return board;\n}\n\nasync function runGame(firstPlayerObj, secondPlayerObj) {\n  let attackingPlayer = firstPlayerObj;\n  let defendingPlayer = secondPlayerObj;\n\n  const announcerText = document.createElement(\"p\");\n  turnAnnouncer.appendChild(announcerText);\n  const firstPlayerBoard = firstPlayerObj.board;\n  const secondPlayerBoard = secondPlayerObj.board;\n  let isHit, attack, method;\n  while (\n    !firstPlayerBoard.hasAllSunked() &&\n    !secondPlayerBoard.hasAllSunked()\n  ) {\n    announcerText.textContent = `${attackingPlayer.name}'s turn`;\n    if (attackingPlayer.name === \"Computer\") {\n      [isHit, attack, method] = await botAttackCell(\n        defendingPlayer,\n        isHit === \"hit\" ? attack : null,\n        isHit === \"hit\" ? method : null,\n      );\n    } else {\n      isHit = await attackCell(defendingPlayer);\n    }\n\n    if (isHit != \"hit\") {\n      [attackingPlayer, defendingPlayer] = [defendingPlayer, attackingPlayer];\n    }\n  }\n  const winner = firstPlayerObj.board.hasAllSunked()\n    ? secondPlayerObj.name\n    : firstPlayerObj.name;\n\n  announcerText.textContent = `${winner} is the winner!!!`;\n  announcerText.classList.add(\"blink\");\n\n  setTimeout(() => {\n    document.querySelector(\".overlay\").style.display = \"flex\";\n    document.querySelector(\".replayModal\").style.display = \"flex\";\n  }, 6000);\n}\n\nasync function attackCell(currentPlayer) {\n  const board = document.querySelector(\n    `.${currentPlayer.name.replace(/\\s/g, \"\")}_board`,\n  );\n  const occupiedCells = Object.keys(currentPlayer.board.occupiedCells);\n  board.classList.add(\"activeBoard\");\n\n  return new Promise((resolve) => {\n    function handler(event) {\n      const cell = event.target.closest(\".cell\");\n      if (!cell) return;\n\n      const hasTargetted = () => {\n        return [\"hit\", \"miss\"].some((item) => cell.classList.contains(item));\n      };\n\n      if (!hasTargetted()) {\n        const markerDiv = document.createElement(\"div\");\n        let cellClass = \"miss\";\n        let markerClass = \"orangeMark\";\n\n        const cellCoordinates = cell.dataset.coordinate;\n        if (occupiedCells.includes(cellCoordinates)) {\n          cellClass = \"hit\";\n          markerClass = \"redMark\";\n          currentPlayer.board.receiveAttack(cellCoordinates);\n        }\n\n        cell.classList.add(cellClass);\n        markerDiv.classList.add(markerClass);\n        cell.appendChild(markerDiv);\n        board.classList.remove(\"activeBoard\");\n\n        board.removeEventListener(\"click\", handler);\n        resolve(cellClass);\n      }\n    }\n    board.addEventListener(\"click\", handler);\n  });\n}\n\nasync function botAttackCell(botObject, previousAttack, previousMethod) {\n  const boardObj = botObject.board;\n  const occupiedCells = Object.keys(botObject.board.occupiedCells);\n\n  const board = document.querySelector(\n    `.${botObject.name.replace(/\\s/g, \"\")}_board`,\n  );\n  board.classList.add(\"activeBoard\");\n\n  return new Promise((resolve) => {\n    const markerDiv = document.createElement(\"div\");\n\n    let pos, method, cell, cellClass, markerClass;\n\n    ({ pos, method } = getNextAttack(previousAttack, previousMethod));\n    cell = document.querySelector(`[data-coordinate=\"${pos}\"]`);\n\n    if (!occupiedCells.includes(pos)) {\n      boardObj.missedCells.push(pos);\n      cellClass = \"miss\";\n      markerClass = \"orangeMark\";\n    } else {\n      boardObj.receiveAttack(pos);\n      cellClass = \"hit\";\n      markerClass = \"redMark\";\n    }\n\n    setInterval(() => {\n      cell.classList.add(cellClass);\n      markerDiv.classList.add(markerClass);\n      cell.appendChild(markerDiv);\n      board.classList.remove(\"activeBoard\");\n      resolve([cellClass, pos, method]);\n    }, 800);\n  });\n}\n\nfunction getNextAttack(previousAttack, method) {\n  function hasTargetted(coordinates) {\n    const cell = document.querySelector(`[data-coordinate=\"${coordinates}\"]`);\n    return cell.classList.contains(\"hit\") || cell.classList.contains(\"miss\");\n  }\n\n  const getRandomPos = () => {\n    while (true) {\n      const randomPos = `${randomNumGen(10)},${randomNumGen(10)}`;\n      if (!hasTargetted(randomPos)) {\n        return { pos: randomPos, method: null };\n      }\n    }\n  };\n\n  if (!previousAttack) {\n    return getRandomPos();\n  }\n\n  const previousAttackArr = previousAttack.split(\",\").map(Number);\n  let moveIndex = 0;\n  const operators = [\"+\", \"-\"];\n  const possibleMoves = {};\n\n  for (const operator of operators) {\n    for (let i = 0; i < previousAttackArr.length; i++) {\n      const tempArr = previousAttackArr.slice();\n      operator === \"+\" ? tempArr[i]++ : tempArr[i]--;\n      possibleMoves[moveIndex] = {\n        pos: tempArr.join(\",\"),\n        method: [operator, i],\n      };\n      moveIndex++;\n    }\n  }\n\n  // assuming it correctly removes all the targetted ones\n  const ObjLen = Object.keys(possibleMoves).length;\n  for (let i = 0; i < ObjLen; i++) {\n    const move = possibleMoves[i].pos;\n    const moveArr = move.split(\",\").map(Number);\n\n    if (\n      moveArr[0] < 1 ||\n      moveArr[0] > 10 ||\n      moveArr[1] < 1 ||\n      moveArr[1] > 10\n    ) {\n      delete possibleMoves[i];\n      continue;\n    }\n\n    if (hasTargetted(move)) {\n      delete possibleMoves[i];\n      continue;\n    }\n  }\n\n  const isBlocked = Object.keys(possibleMoves).length < 1;\n\n  while (true) {\n    if (method && !isBlocked) {\n      const [operator, index] = method;\n\n      operator === \"+\"\n        ? (previousAttackArr[index] += 1)\n        : (previousAttackArr[index] -= 1);\n      const nextMove = [...previousAttackArr];\n\n      for (const move in possibleMoves) {\n        const currentValidMove = possibleMoves[move].pos;\n        const nextmoveStr = nextMove.join(\",\");\n\n        if (currentValidMove === nextmoveStr) {\n          return { pos: nextmoveStr, method: method };\n        }\n      }\n      method = null;\n      continue;\n    } else if (!method && !isBlocked) {\n      const keys = Object.keys(possibleMoves);\n      const randomKey = keys[randomNumGen(keys.length) - 1];\n      const randomMove = possibleMoves[randomKey];\n      return randomMove;\n    } else {\n      return getRandomPos();\n    }\n  }\n}\n\nrestartBtn.addEventListener(\"click\", () => {\n  location.reload(true);\n});\n\nhelpBtn.addEventListener(\"click\", () => {\n  document.querySelector(\".overlay\").style.display = \"flex\";\n  document.querySelector(\".helpModal\").style.display = \"flex\";\n});\n\ncloseHelpBtn.addEventListener(\"click\", () => {\n  document.querySelector(\".overlay\").style.display = \"none\";\n  document.querySelector(\".helpModal\").style.display = \"none\";\n});\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom.js?\n}");

/***/ }),

/***/ "./src/modules/execGame.js":
/*!*********************************!*\
  !*** ./src/modules/execGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   execGame: () => (/* binding */ execGame)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/modules/dom.js\");\n\n\nasync function execGame(mode) {\n  const firstPlayerName = await (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.getName)(\"firstPlayer\", mode);\n  const secondPlayerName = await (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.getName)(\"secondPlayer\", mode);\n\n  const [firstPlayerObj, secondPlayerObj] = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.initPlayers)(\n    firstPlayerName,\n    secondPlayerName,\n  );\n\n  // place ship stage for first player\n  await (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.placeShips)(firstPlayerObj, secondPlayerName);\n\n  // place ship stage for second player\n  mode === \"optionComputer\"\n    ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.botPlaceShips)(secondPlayerObj.board)\n    : await (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.placeShips)(secondPlayerObj, firstPlayerName);\n\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderPlayingBoards)([firstPlayerName, secondPlayerName]);\n  await (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.runGame)(firstPlayerObj, secondPlayerObj);\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/execGame.js?\n}");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard)\n/* harmony export */ });\nclass GameBoard {\n  constructor() {\n    this.occupiedCells = {};\n    this.missedCells = [];\n  }\n\n  getPossibleCells(ship, pos) {\n    const size = ship.size;\n    const axis = ship.axis;\n\n    const shipCenter =\n      size % 2 === 0 ? Math.ceil((size - 1) / 2) : Math.ceil(size / 2);\n\n    let shipHeadSize = shipCenter - 1;\n    let shipTailSize = size - shipCenter;\n\n    const head = pos.slice();\n    const tail = pos.slice();\n\n    let renderedShipSize = size - 1;\n\n    while (renderedShipSize) {\n      // Calculating the head\n      while (shipHeadSize) {\n        const newHead = axis === \"X\" ? head[0] + 1 : head[1] + 1;\n        if (newHead > 10) {\n          shipTailSize += shipHeadSize;\n          shipHeadSize = 0;\n          break;\n        }\n        axis === \"X\" ? head[0]++ : head[1]++;\n        shipHeadSize -= 1;\n        renderedShipSize -= 1;\n      }\n\n      // Calculating the tail\n      while (shipTailSize) {\n        const newTail = axis === \"X\" ? tail[0] - 1 : tail[1] - 1;\n\n        if (newTail < 1) {\n          shipHeadSize += shipTailSize;\n          shipTailSize = 0;\n          break;\n        }\n        axis === \"X\" ? tail[0]-- : tail[1]--;\n        shipTailSize -= 1;\n        renderedShipSize -= 1;\n      }\n    }\n\n    // Calculating the occupied cells\n    const cells = [];\n    while (axis === \"X\" ? tail[0] <= head[0] : tail[1] <= head[1]) {\n      cells.push(tail.slice());\n      axis === \"X\" ? tail[0]++ : tail[1]++;\n    }\n\n    return cells;\n  }\n\n  placeShip(cells, ship) {\n    cells.forEach((cell) => {\n      this.occupiedCells[cell] = ship;\n    });\n  }\n\n  receiveAttack(pos) {\n    const ship = this.occupiedCells[pos];\n\n    if (ship && !ship.checkSunk()) {\n      ship.incrementHit();\n      return ship.hit;\n    }\n  }\n\n  hasAllSunked() {\n    for (const cell in this.occupiedCells) {\n      if (!this.occupiedCells[cell].checkSunk()) {\n        return false;\n      }\n    }\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameBoard.js?\n}");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/modules/gameBoard.js\");\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.board = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__.GameBoard();\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?\n}");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(size, axis = \"X\") {\n    this.size = size;\n    this.axis = axis;\n    this.hit = 0;\n    this.isSunk = false;\n  }\n\n  checkSunk() {\n    this.isSunk = this.hit >= this.size;\n    return this.isSunk;\n  }\n\n  incrementHit() {\n    this.hit += 1;\n    return this.hit;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?\n}");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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