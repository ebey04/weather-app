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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root{\r\n    --background: #a69efa;\r\n    --inner: #e9e7fe; \r\n    --font: #e76e18;\r\n    --fontTwo: #162a40;\r\n}\r\n\r\nbody{\r\n    background-color: var(--background);\r\n}\r\n\r\n#headline{\r\n    text-align: center;\r\n    font-size:  4.5rem;\r\n    font-family: \"Nunito\", sans-serif ;\r\n    margin: 1rem;\r\n    letter-spacing: .25rem;\r\n    color: var(--font);\r\n}\r\n\r\n#headline::before{\r\n    content: \"🌩️\";\r\n}\r\n\r\n#spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 4px solid rgba(255,255,255,0.3);\r\n    border-top-color: #ff7f00; /* your accent color */\r\n    border-radius: 50%;\r\n    animation: spin 0.8s linear infinite;\r\n    display: none; /* start hidden */\r\n    margin: 0 auto;\r\n}\r\n\r\n@keyframes spin {\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n\r\n#search{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 2rem;\r\n    gap: 2rem;\r\n}\r\n\r\ninput{\r\n    border-radius: 6px;\r\n    border: 2px solid #ccc;\r\n}\r\n\r\ninput:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 15px var(--font);\r\n    background-color: #fff;\r\n}\r\n\r\n\r\ninput{\r\n    padding: .5rem;\r\n}\r\n\r\ninput::placeholder {\r\n    padding: .5rem;\r\n    font-style: italic;\r\n}\r\n\r\n#weatherBtn{\r\n    border-radius: 6px;\r\n    padding: .75rem;\r\n    font-weight: 600;\r\n    letter-spacing: .15rem;\r\n    background-color: var(--font);\r\n    color: var(--inner);\r\n    box-shadow: 0 4px 20px rgb(94, 84, 134);\r\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n#weatherBtn:hover, #weatherBtn:focus-visible{\r\n    background-color: var(--fontTwo);\r\n    color: var(--inner);\r\n    transform: translateY(-3px);\r\n}\r\n\r\n#container{\r\n    display: grid;\r\n    grid-template-columns: 50% 1fr;\r\n    column-gap: 1rem;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    background-color: var(--inner);\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    border-radius: 16px;\r\n    box-shadow: 0 4px 20px rgb(94, 84, 134);\r\n}\r\n\r\n.text-block{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\nh1{\r\n    font-family: \"Nunito\", sans-serif;\r\n    color: var(--fontTwo);\r\n}\r\n\r\n.temp{\r\n    font-size: 1.75rem;\r\n    font-weight: 800;\r\n    font-family: \"Nunito\", sans-serif;\r\n    color: var(--fontTwo);\r\n}\r\n\r\np{\r\n    font-size: 1.5rem;\r\n    color: var(--fontTwo);\r\n}\r\n\r\n#container img{\r\n    width: 20rem;\r\n    height: auto;\r\n    margin-right: 2rem;;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n\r\nasync function getWeather(location) {\r\n    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LARM9ULEU5XM2GV3ASNMLFY9W`;\r\n    const response = await fetch(url);\r\n    const data = await response.json();\r\n    return {\r\n        location: data.address,\r\n        date: data.days[0].datetime,\r\n        forecast: data.currentConditions.conditions,\r\n        temp: data.currentConditions.temp,\r\n        icon: data.currentConditions.icon\r\n    };\r\n}\n\n//# sourceURL=webpack://weather-app/./src/api.js?\n}");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideSpinner: () => (/* binding */ hideSpinner),\n/* harmony export */   iconMap: () => (/* binding */ iconMap),\n/* harmony export */   showSpinner: () => (/* binding */ showSpinner)\n/* harmony export */ });\n/* harmony import */ var _icons_wi_day_sunny_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/wi-day-sunny.svg */ \"./src/icons/wi-day-sunny.svg\");\n/* harmony import */ var _icons_wi_night_clear_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/wi-night-clear.svg */ \"./src/icons/wi-night-clear.svg\");\n/* harmony import */ var _icons_wi_day_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/wi-day-cloudy.svg */ \"./src/icons/wi-day-cloudy.svg\");\n/* harmony import */ var _icons_wi_night_alt_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/wi-night-alt-cloudy.svg */ \"./src/icons/wi-night-alt-cloudy.svg\");\n/* harmony import */ var _icons_wi_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/wi-cloudy.svg */ \"./src/icons/wi-cloudy.svg\");\n/* harmony import */ var _icons_wi_fog_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/wi-fog.svg */ \"./src/icons/wi-fog.svg\");\n/* harmony import */ var _icons_wi_strong_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/wi-strong-wind.svg */ \"./src/icons/wi-strong-wind.svg\");\n/* harmony import */ var _icons_wi_rain_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/wi-rain.svg */ \"./src/icons/wi-rain.svg\");\n/* harmony import */ var _icons_wi_rain_mix_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/wi-rain-mix.svg */ \"./src/icons/wi-rain-mix.svg\");\n/* harmony import */ var _icons_wi_snow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/wi-snow.svg */ \"./src/icons/wi-snow.svg\");\n/* harmony import */ var _icons_wi_sleet_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/wi-sleet.svg */ \"./src/icons/wi-sleet.svg\");\n/* harmony import */ var _icons_wi_hail_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/wi-hail.svg */ \"./src/icons/wi-hail.svg\");\n/* harmony import */ var _icons_wi_storm_showers_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/wi-storm-showers.svg */ \"./src/icons/wi-storm-showers.svg\");\n/* harmony import */ var _icons_wi_day_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/wi-day-thunderstorm.svg */ \"./src/icons/wi-day-thunderstorm.svg\");\n/* harmony import */ var _icons_wi_night_alt_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/wi-night-alt-thunderstorm.svg */ \"./src/icons/wi-night-alt-thunderstorm.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst iconMap = {\r\n    \"clear-day\": _icons_wi_day_sunny_svg__WEBPACK_IMPORTED_MODULE_0__,\r\n    \"clear-night\": _icons_wi_night_clear_svg__WEBPACK_IMPORTED_MODULE_1__,\r\n\r\n    \"partly-cloudy-day\": _icons_wi_day_cloudy_svg__WEBPACK_IMPORTED_MODULE_2__,\r\n    \"partly-cloudy-night\": _icons_wi_night_alt_cloudy_svg__WEBPACK_IMPORTED_MODULE_3__,\r\n\r\n    \"cloudy\": _icons_wi_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__,\r\n    \"fog\": _icons_wi_fog_svg__WEBPACK_IMPORTED_MODULE_5__,\r\n    \"wind\": _icons_wi_strong_wind_svg__WEBPACK_IMPORTED_MODULE_6__,\r\n\r\n    \"rain\": _icons_wi_rain_svg__WEBPACK_IMPORTED_MODULE_7__,\r\n    \"rain-snow\": _icons_wi_rain_mix_svg__WEBPACK_IMPORTED_MODULE_8__,\r\n    \"rain-sleet\": _icons_wi_rain_mix_svg__WEBPACK_IMPORTED_MODULE_8__,   // closest match available\r\n\r\n    \"snow\": _icons_wi_snow_svg__WEBPACK_IMPORTED_MODULE_9__,\r\n    \"snow-sleet\": _icons_wi_sleet_svg__WEBPACK_IMPORTED_MODULE_10__,     // you can decide sleet or snow icon\r\n\r\n    \"sleet\": _icons_wi_sleet_svg__WEBPACK_IMPORTED_MODULE_10__,\r\n    \"hail\": _icons_wi_hail_svg__WEBPACK_IMPORTED_MODULE_11__,\r\n\r\n    \"thunder-rain\": _icons_wi_storm_showers_svg__WEBPACK_IMPORTED_MODULE_12__,\r\n    \"thunder-showers-day\": _icons_wi_day_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_13__,\r\n    \"thunder-showers-night\": _icons_wi_night_alt_thunderstorm_svg__WEBPACK_IMPORTED_MODULE_14__,\r\n};\r\n\r\nconst spinner = document.getElementById(\"spinner\");\r\n\r\nfunction showSpinner() {\r\n    spinner.style.display = \"block\";\r\n}\r\n\r\nfunction hideSpinner() {\r\n    spinner.style.display = \"none\";\r\n}\n\n//# sourceURL=webpack://weather-app/./src/dom.js?\n}");

/***/ }),

/***/ "./src/icons/wi-cloudy.svg":
/*!*********************************!*\
  !*** ./src/icons/wi-cloudy.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"ba3686e4a3d64a9dc5cf.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-cloudy.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-day-cloudy.svg":
/*!*************************************!*\
  !*** ./src/icons/wi-day-cloudy.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d3602df8f1e9ba231925.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-day-cloudy.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-day-sunny.svg":
/*!************************************!*\
  !*** ./src/icons/wi-day-sunny.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"c23e7855e1cb8ac7c36d.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-day-sunny.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-day-thunderstorm.svg":
/*!*******************************************!*\
  !*** ./src/icons/wi-day-thunderstorm.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"4dd82b3f979296206124.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-day-thunderstorm.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-fog.svg":
/*!******************************!*\
  !*** ./src/icons/wi-fog.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"7c3d1014174434d5d708.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-fog.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-hail.svg":
/*!*******************************!*\
  !*** ./src/icons/wi-hail.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f9552791eeaf3cf9b233.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-hail.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-night-alt-cloudy.svg":
/*!*******************************************!*\
  !*** ./src/icons/wi-night-alt-cloudy.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"da42fbe06be8e9e86a4e.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-night-alt-cloudy.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-night-alt-thunderstorm.svg":
/*!*************************************************!*\
  !*** ./src/icons/wi-night-alt-thunderstorm.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"033ea52192d8571782b6.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-night-alt-thunderstorm.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-night-clear.svg":
/*!**************************************!*\
  !*** ./src/icons/wi-night-clear.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"2923306bed84bccf8845.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-night-clear.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-rain-mix.svg":
/*!***********************************!*\
  !*** ./src/icons/wi-rain-mix.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"d2dbec863b86df5cfc33.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-rain-mix.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-rain.svg":
/*!*******************************!*\
  !*** ./src/icons/wi-rain.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"90fd14198e4b9af0dd81.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-rain.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-sleet.svg":
/*!********************************!*\
  !*** ./src/icons/wi-sleet.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"781b69f9f41bfe931f54.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-sleet.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-snow.svg":
/*!*******************************!*\
  !*** ./src/icons/wi-snow.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"41a01da10b2c84abde09.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-snow.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-storm-showers.svg":
/*!****************************************!*\
  !*** ./src/icons/wi-storm-showers.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"50eb01567623095f80be.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-storm-showers.svg?\n}");

/***/ }),

/***/ "./src/icons/wi-strong-wind.svg":
/*!**************************************!*\
  !*** ./src/icons/wi-strong-wind.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"fd74a4dde8275263486e.svg\";\n\n//# sourceURL=webpack://weather-app/./src/icons/wi-strong-wind.svg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\n\nconst container = document.getElementById('container');\nconst input = document.getElementById('input');\nconst button = document.getElementById('weatherBtn');\n\n\nbutton.addEventListener(\"click\", async () => {\n    container.innerHTML = \"\"\n\n    const location = input.value.trim(); \n    if (!location) return;     \n\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.showSpinner)();\n\n    await new Promise(resolve => setTimeout(resolve, 500)); \n\n    const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getWeather)(location);\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.hideSpinner)();\n\n    const icon = document.createElement('img');\n    icon.src = _dom_js__WEBPACK_IMPORTED_MODULE_2__.iconMap[data.icon]\n\n    const textBlock = document.createElement('div');\n    textBlock.classList.add('text-block');\n\n    const address = document.createElement(\"h1\");\n    address.textContent = data.location.toUpperCase();\n\n    const date = document.createElement(\"p\");\n    date.textContent = new Date (data.date).toLocaleDateString('en-US', {\n    year: 'numeric',\n    month: 'long',\n    day: 'numeric'\n});\n\n    const forecast = document.createElement(\"p\");\n    forecast.textContent = data.forecast;\n\n    const temp = document.createElement('p');\n    temp.classList.add('temp');\n    temp.textContent = `${data.temp}°F`;\n\n    input.value = \"\";\n\n    container.appendChild(icon);\n    container.appendChild(textBlock);\n    textBlock.appendChild(address);\n    textBlock.appendChild(date);\n    textBlock.appendChild(forecast);\n    textBlock.appendChild(temp);\n});\n\ninput.addEventListener(\"keydown\", (e) => {\n    if (e.key === \"Enter\") {\n        button.click();\n    }\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?\n}");

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