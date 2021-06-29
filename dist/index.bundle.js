/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apiKeys/geocodingApiKey.js":
/*!************************************!*\
  !*** ./apiKeys/geocodingApiKey.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
service im using for geocoding
https://positionstack.com/documentation
*/

const geocodingApiKey = "029661cd41f398335045cec660935cd7";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (geocodingApiKey);

/***/ }),

/***/ "./apiKeys/weatherApiKey.js":
/*!**********************************!*\
  !*** ./apiKeys/weatherApiKey.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
using open weather map
https://openweathermap.org/guide
*/

const weatherApiKey = "2212e6400ca76436e5705ee991e2edea";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherApiKey);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nul {\n  list-style-type: none;\n}\n\nbody {\n  background: #000;\n  font-family: \"Fira Sans\", sans-serif;\n}\n\n.app {\n  position: relative;\n  background: linear-gradient(0deg, #fad566 0%, #dd9274 52%, #cf7479 74%, #c55e7c 100%);\n  min-width: 250px;\n  max-width: 900px;\n  height: auto;\n  margin: 1rem auto 0 auto;\n  padding: 1rem 0;\n  border-radius: 3px;\n  color: #fff;\n  letter-spacing: 0.15px;\n}\n\n@media (max-width: 920px) {\n  .app {\n    max-width: 95vw;\n  }\n}\n@media (max-width: 500px) {\n  .app {\n    height: 95vh;\n  }\n}\n.loading-section {\n  background: #313131;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  text-align: center;\n  display: none;\n  z-index: -100;\n  top: 0;\n}\n\n.loading-section--active {\n  display: block;\n  z-index: 100;\n}\n\n.loading-section__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loading-section__heading {\n  margin-bottom: 0.25rem;\n}\n\n/*loading animation*/\n.lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*app__header*/\n.app__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 1rem;\n}\n\n/*current location*/\n.current-location {\n  color: #fff;\n  text-transform: uppercase;\n}\n\n.search-bar {\n  --size:45px;\n  --font-size:1rem;\n  border: 0px solid #fad566;\n  display: flex;\n  border-radius: 100vh;\n  height: var(--size);\n  width: var(--size);\n  padding: 5px;\n  position: relative;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n}\n.search-bar__input {\n  flex-grow: 1;\n  font-size: var(--font-size);\n  padding: 0 0.5rem;\n  border: 0;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  line-height: calc(var(--size) - 3px);\n  opacity: 0;\n  cursor: pointer;\n}\n.search-bar:focus {\n  outline: 0;\n}\n.search-bar__submit {\n  font-size: var(--font-size);\n  cursor: pointer;\n  border: 0;\n  border-radius: 50%;\n  color: #fff;\n  background: #fad566;\n  width: calc(var(--size) - 10px);\n  height: calc(var(--size) - 10px);\n  margin-left: auto;\n}\n.search-bar:focus-within {\n  width: 200px;\n  background: #fff;\n  color: #000;\n}\n.search-bar:focus-within .search-bar__input {\n  opacity: 1;\n  cursor: text;\n  width: calc(100% - var(--size));\n}\n.search-bar:focus-within .search-bar__input:focus,\n.search-bar:focus-within .search-bar__input:hover {\n  outline: 0;\n}\n\n.app__current-forecast {\n  text-align: center;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 1rem;\n}\n\n.forecast__summary__icon {\n  font-size: 4rem;\n  margin-bottom: 2rem;\n}\n\n.current-details {\n  font-size: 1.25rem;\n}\n\n.current-forecast__temp {\n  font-size: 4em;\n  margin-bottom: 1rem;\n}\n\n.current-forecast__details {\n  display: flex;\n  align-items: center;\n}\n\n.current-forecast__details > * {\n  margin: 0 1rem;\n}\n\n.week-forecast__items {\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 4rem;\n  max-width: 100%;\n  flex-wrap: wrap;\n}\n\n.week-forecast__item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n  width: 50px;\n  border-radius: 3px;\n  padding: 0.5rem;\n  margin: 0 0.25rem;\n  cursor: pointer;\n  transition: border 300ms ease;\n}\n\n.week-forecast__item--selected {\n  border: 1px solid #fff;\n}\n\n.forecast__item__icon {\n  width: 50px;\n}\n\n.week-forecast__item__temp {\n  margin: 0.5rem 0 0.25rem 0;\n}\n\n.temp-info {\n  text-align: center;\n  max-width: 48ch;\n  width: 100%;\n  margin: 1rem auto 1rem auto;\n}\n\n.error-popup {\n  position: absolute;\n  background-color: #fff;\n  color: #000;\n  width: 95%;\n  padding: 1rem 0.5rem;\n  top: 95%;\n  left: 50%;\n  transform: translate(-50%, -95%);\n  z-index: -999;\n  opacity: 0;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  box-shadow: 1px 5px 10px rgba(34, 34, 34, 0.25);\n  border-radius: 3px;\n  transition: opacity 0.5s ease;\n}\n\n.error-popup--active {\n  z-index: 999;\n  opacity: 1;\n  display: flex;\n}\n\n.error-popup__close-btn {\n  border: none;\n  background: #ec2424;\n  color: #fff;\n  width: 25px;\n  height: 25px;\n  border-radius: 2px;\n  font-size: 1.5rem;\n}\n\n.error-popup__close-btn:hover {\n  background: #ff2929;\n  cursor: pointer;\n}\n\n.error-popup__close-btn:active {\n  background: #ec2424;\n}", "",{"version":3,"sources":["webpack://./src/style_modules/base.scss","webpack://./src/style.scss","webpack://./src/style_modules/app.scss","webpack://./src/style_modules/loading-screen.scss","webpack://./src/style_modules/app__header.scss","webpack://./src/style_modules/search-bar.scss","webpack://./src/style_modules/forecast.scss","webpack://./src/style_modules/week-forecast.scss","webpack://./src/style_modules/temp-info.scss","webpack://./src/style_modules/error-popup.scss"],"names":[],"mappings":"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","sourcesContent":["*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box;\r\n  padding:0;\r\n  margin:0;\r\n}\r\n\r\n\r\nul {\r\n    list-style-type: none;\r\n  }\r\n\r\nbody {\r\n    background:#000;\r\n    font-family: 'Fira Sans', sans-serif;\r\n  }","// sass modules\r\n@use \"./style_modules/base\";\r\n@use \"./style_modules/app\";\r\n@use \"./style_modules/loading-screen\";\r\n@use \"./style_modules/app__header\";\r\n@use \"./style_modules/search-bar\";\r\n@use \"./style_modules/forecast\";\r\n@use \"./style_modules/week-forecast\";\r\n@use \"./style_modules/temp-info\";\r\n@use \"./style_modules/error-popup\";\r\n\r\n\r\n\r\n// font\r\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;700&display=swap');\r\n","$gradient-yop:linear-gradient(0deg, rgba(250,213,102,1) 0%, rgba(221,146,116,1) 52%, rgba(207,116,121,1) 74%, rgba(197,94,124,1) 100%);\r\n\r\n\r\n.app {\r\n    position: relative;\r\n    background: $gradient-yop;\r\n    min-width:250px;\r\n    max-width:900px;\r\n    height: auto;\r\n    margin:1rem auto 0 auto;\r\n    padding:1rem 0;\r\n    border-radius: 3px;\r\n    color:#fff;\r\n    letter-spacing: 0.15px;\r\n  }\r\n  \r\n  @media(max-width:920px) {\r\n    .app {\r\n       max-width:95vw;\r\n    }\r\n  }\r\n  \r\n  @media(max-width:500px) {\r\n    .app {\r\n      height: 95vh;\r\n    }\r\n  }",".loading-section {\r\n    background:rgba(49, 49, 49);\r\n    color:#fff;\r\n    width:100%;\r\n    height:100%;\r\n    position: absolute;\r\n    text-align: center;\r\n    display: none;\r\n    z-index:-100;\r\n    top:0;\r\n  }\r\n\r\n  .loading-section--active {\r\n    display: block;\r\n    z-index:100;\r\n  }\r\n\r\n\r\n  .loading-section__content {\r\n    position: absolute;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n\r\n  .loading-section__heading {\r\n    margin-bottom: 0.25rem;\r\n  }\r\n\r\n/*loading animation*/\r\n  .lds-ring {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-ring div {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border: 8px solid #fff;\r\n    border-radius: 50%;\r\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: #fff transparent transparent transparent;\r\n  }\r\n  .lds-ring div:nth-child(1) {\r\n    animation-delay: -0.45s;\r\n  }\r\n  .lds-ring div:nth-child(2) {\r\n    animation-delay: -0.3s;\r\n  }\r\n  .lds-ring div:nth-child(3) {\r\n    animation-delay: -0.15s;\r\n  }\r\n  @keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }","/*app__header*/\r\n.app__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding:0.5rem 1rem;\r\n  }\r\n  \r\n  /*current location*/\r\n  .current-location {\r\n    color:#fff;\r\n    text-transform: uppercase;\r\n  }","$my-yellow:#fad566;\r\n\r\n.search-bar {\r\n    --size:45px;\r\n    --font-size:1rem;\r\n    border:0px solid $my-yellow;\r\n    display:flex;\r\n    border-radius: 100vh;\r\n    height:var(--size);\r\n    width:var(--size);\r\n    padding:5px;\r\n    position: relative;\r\n    transition: all 0.3s ease-in-out;\r\n    overflow: hidden;\r\n  \r\n  \r\n    &__input {\r\n      flex-grow: 1;\r\n      font-size:var(--font-size);\r\n      padding:0 0.5rem;\r\n      border:0;\r\n      background: transparent;\r\n      position: absolute;\r\n      top:0;\r\n      bottom:0;\r\n      left:0;\r\n      line-height: calc(var(--size) - 3px);\r\n      opacity: 0;\r\n      cursor: pointer;\r\n    }\r\n  \r\n    &:focus {\r\n      outline: 0;\r\n    }\r\n  \r\n    &__submit {\r\n      font-size:var(--font-size);\r\n      cursor: pointer;\r\n      border:0;\r\n      border-radius: 50%;\r\n      color:#fff;\r\n      background:$my-yellow;\r\n      width:calc(var(--size) - 10px);\r\n      height:calc(var(--size) - 10px);\r\n      margin-left:auto;\r\n    }\r\n  \r\n    &:focus-within {\r\n      width:200px;\r\n      background: #fff;\r\n      color:#000;\r\n  \r\n      .search-bar__input {\r\n        opacity: 1;\r\n        cursor: text;\r\n        width:calc(100% - var(--size));\r\n      }\r\n  \r\n      .search-bar__input:focus,\r\n      .search-bar__input:hover {\r\n        outline: 0;\r\n      }\r\n  \r\n    }\r\n  }",".app__current-forecast {\r\n    text-align:center;\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    align-items:center;\r\n    margin-top:1rem;\r\n  }\r\n  \r\n  .forecast__summary__icon {\r\n    font-size:4rem;\r\n    margin-bottom:2rem;\r\n  }\r\n  \r\n  .current-details {\r\n    font-size:1.25rem;\r\n  }\r\n  \r\n  \r\n  .current-forecast__temp {\r\n    font-size: 4em;\r\n    margin-bottom:1rem;\r\n  }\r\n  \r\n  .current-forecast__details {\r\n    display:flex;\r\n    align-items:center;\r\n  }\r\n  \r\n  .current-forecast__details > * {\r\n    margin:0 1rem;\r\n  }",".week-forecast__items {\r\n    display:flex;\r\n    align-items:center;\r\n    margin:0 auto;\r\n    margin-top:4rem;\r\n    max-width:100%;\r\n    flex-wrap: wrap;\r\n  }\r\n  \r\n  .week-forecast__item {\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items:center;\r\n    flex-grow:1;\r\n    width:50px;\r\n    border-radius: 3px;\r\n    padding:0.5rem;\r\n    margin:0 0.25rem;\r\n    cursor: pointer;\r\n    transition:border 300ms ease;\r\n  }\r\n  \r\n  .week-forecast__item--selected {\r\n    border:1px  solid #fff;\r\n  }\r\n  \r\n  .forecast__item__icon {\r\n    width:50px;\r\n  }\r\n  \r\n  .week-forecast__item__temp {\r\n    margin:0.5rem 0 0.25rem 0;\r\n  }",".temp-info {\r\n    text-align: center;\r\n    max-width:48ch;\r\n    width:100%;\r\n    margin:1rem auto 1rem auto;\r\n  }",".error-popup {\r\n    position: absolute;\r\n    background-color:#fff;\r\n    color:#000;\r\n    width:95%;\r\n    padding:1rem 0.5rem;\r\n    top:95%;\r\n    left:50%;\r\n    transform: translate(-50%, -95%);\r\n    z-index: -999;\r\n    opacity:0;\r\n    display:none;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    flex-wrap:wrap;\r\n    box-shadow: 1px 5px 10px rgba(34, 34, 34, 0.25);\r\n    border-radius: 3px;\r\n  \r\n    transition: opacity 0.5s ease;\r\n  }\r\n  \r\n  .error-popup--active {\r\n    z-index: 999;\r\n    opacity:1;\r\n    display:flex;\r\n  }\r\n  \r\n  \r\n  .error-popup__close-btn {\r\n    border:none;\r\n    background:rgb(236, 36, 36);\r\n    color:#fff;\r\n    width:25px;\r\n    height:25px;\r\n    border-radius: 2px;\r\n    font-size:1.5rem;\r\n  }\r\n  \r\n  .error-popup__close-btn:hover {\r\n    background:rgb(255, 41, 41);\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .error-popup__close-btn:active {\r\n    background:rgb(236, 36, 36);\r\n  }"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/modules/current.js":
/*!********************************!*\
  !*** ./src/modules/current.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentWeather": () => (/* binding */ setCurrentWeather)
/* harmony export */ });
let currentWeather;

// cache the DOM
const forecastSummaryIcon = document.querySelector(".forecast__summary__icon");
const forecastSummaryDetails = document.querySelector(".current-details");
const forecastTemp = document.querySelector(".current-forecast__temp span");
const forecastWind = document.querySelector(".data-wind");
const forecastHumidity = document.querySelector(".data-humidity");
const forecastPrecipitation = document.querySelector(".data-precipitation");



const setCurrentWeather = newWeather => {
    currentWeather = newWeather;
    render();
}

const render = _ => {
    const { temp, humidity, wind_speed, dew_point } = currentWeather;
    const { icon, description } = currentWeather.weather[0];
    // console.log(currentWeather)

    forecastSummaryIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    forecastSummaryDetails.innerHTML = description;

    forecastTemp.innerHTML = Math.round(temp);
    forecastWind.innerHTML = wind_speed + "mph";
    forecastHumidity.innerHTML = humidity + "%";
    forecastPrecipitation.innerHTML = Math.round(dew_point) + "DP";
}

/***/ }),

/***/ "./src/modules/multi.js":
/*!******************************!*\
  !*** ./src/modules/multi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "multidayForecast": () => (/* binding */ multidayForecast)
/* harmony export */ });
// cache the DOM
const forecastSummaryIcon = document.querySelector(".forecast__summary__icon");
const forecastSummaryDetails = document.querySelector(".current-details");
const forecastTemp = document.querySelector(".current-forecast__temp span");
const forecastWind = document.querySelector(".data-wind");
const forecastHumidity = document.querySelector(".data-humidity");
const forecastPrecipitation = document.querySelector(".data-precipitation");
const weekForecastItems = document.querySelector(".week-forecast__items");

let multidayForecast = dailyWeather => {
    /*get more specific weather info when you click on a forecast*/
    weekForecastItems.addEventListener("click", event => {
        let closestLi = event.target.closest("li");
        let weatherDayIndex = closestLi.getAttribute("data-weatherDayIndex");
        let currentDayWeatherData = dailyWeather[weatherDayIndex];
        // weather data
        let { wind_speed, humidity, dew_point } = currentDayWeatherData;
        let { day:temp } = currentDayWeatherData.temp;
        let { icon, description } = currentDayWeatherData.weather[0];


        let render = _ => {
            forecastSummaryIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            forecastSummaryDetails.innerHTML = description;
            forecastTemp.innerHTML = Math.round(temp);
            forecastWind.innerHTML = wind_speed + "mph";
            forecastHumidity.innerHTML = humidity + "%";
            forecastPrecipitation.innerHTML = Math.round(dew_point) + "DP";
        }

        let selectCurrentWeeklyForecast = _ => {
        // remove selected class from every item
        Array.from(document.querySelector(".week-forecast__items").children)
        .forEach(item => item.classList.remove("week-forecast__item--selected"));
        // add selected class to the item you selected
        closestLi.classList.add("week-forecast__item--selected");
        }


        render()
        selectCurrentWeeklyForecast()
    });
}

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSearch": () => (/* binding */ initSearch),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _apiKeys_geocodingApiKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apiKeys/geocodingApiKey */ "./apiKeys/geocodingApiKey.js");
/* harmony import */ var _apiKeys_weatherApiKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apiKeys/weatherApiKey */ "./apiKeys/weatherApiKey.js");
/* harmony import */ var _current__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current */ "./src/modules/current.js");
/* harmony import */ var _multi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi */ "./src/modules/multi.js");
/* harmony import */ var _tempUnit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tempUnit */ "./src/modules/tempUnit.js");






// Lat = Y Long = X

let address = "Salt Lake City, Utah";

let currentLocationEl = document.querySelector(".current-location");
const searchBar = document.querySelector(".search-bar");
const searchInputEl = document.querySelector(".search-bar__input");
const searchBarEl = document.querySelector(".search-bar__submit");
const loadingSection = document.querySelector(".loading-section");
const weekForecastItems = document.querySelector(".week-forecast__items");
const errorPopup = document.querySelector(".error-popup");
const errorCloseBtn = document.querySelector(".error-popup__close-btn");



const initSearch = _ => {
    bindSearchEvents()
    updateWeather(address)
    render()
}



const bindSearchEvents = _ => {
    searchBar.addEventListener("submit", event => {
        event.preventDefault();
        if(searchInputEl.value === "") return;
        address = searchInputEl.value;
        searchInputEl.value = "";
        updateWeather(address)
        render()
    });
}



const updateWeather = async query => {
    // set the loading screen & get the weather data thats needed
    loadingSection.classList.toggle("loading-section--active");
    const {lat, lon} = await getLatLong(address)
    const {current, daily} = await getWeatherData(lat, lon);
    loadingSection.classList.toggle("loading-section--active");
    (0,_current__WEBPACK_IMPORTED_MODULE_2__.setCurrentWeather)(current)

    const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // get & prepare the data for the multi weather day forecast
    let weatherMulti = daily.slice(0, daily.length - 1).map(((item, index) => {
         let {min, max} = item.temp;
         let weatherIcon = item.weather[0].icon;
         let currentDayText = daysOfTheWeek[index];
        return {min,max,weatherIcon,currentDayText};
    }));

    // set the markup for the muti weather day forecast
    let myMarkup = "";
    weatherMulti.forEach((item, index) => {
        const {min,max,weatherIcon,currentDayText} = item;
        let markup = `
        <li class="week-forecast__item" data-weatherDayIndex=${index}>
            <img class="forecast__item__icon" src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="weather icon"/>
            <div class="week-forecast__item__temp">${Math.floor(min)}/${Math.floor(max)}</div>
            <div>${currentDayText}</div>
         </li>
        `
        myMarkup += markup;
    });
    weekForecastItems.innerHTML = myMarkup;

    let selectFirstWeeklyForecast = _ =>
    weekForecastItems.children[0].classList.add("week-forecast__item--selected")
    selectFirstWeeklyForecast()

    /*get more specific weather info
    when you click on a forecast*/
    ;(0,_multi__WEBPACK_IMPORTED_MODULE_3__.multidayForecast)(daily)
}




let getLatLong = async (query) => {
    /*
    *For the weather api need the x and y(lat, long)
    from the address the user inputs eg: Salt lake city,UT
    */
    let endPoint = `http://api.positionstack.com/v1/forward?access_key=${_apiKeys_geocodingApiKey__WEBPACK_IMPORTED_MODULE_0__.default}&query=${query}`;
    try {
        let request = await fetch(endPoint);
        let data = await request.json();
        return {lat: data.data[0].latitude, lon: data.data[0].longitude};
    }catch(err) {
        console.log(err);
        loadingSection.classList.toggle("loading-section--active");
        errorPopup.classList.add("error-popup--active")
        setTimeout(_ => errorPopup.classList.remove("error-popup--active"), 5000);
        return;
    }
}




let getWeatherData = async (lat, lon, tempUnit) => {
     let  endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,hourly,minutely&appid=${_apiKeys_weatherApiKey__WEBPACK_IMPORTED_MODULE_1__.default}&units=${tempUnit}`;
     let request = await fetch(endpoint);
     let data = await request.json();
     return data;
}




const render = _ => {
    currentLocationEl.innerHTML = address;
}


// error button functionality
let errorBtnFunctionality = _ => {
    const closeErrorPopup = event =>
    errorPopup.classList.remove("error-popup--active")
errorCloseBtn.addEventListener("click", closeErrorPopup);
}

errorBtnFunctionality()


/***/ }),

/***/ "./src/modules/tempUnit.js":
/*!*********************************!*\
  !*** ./src/modules/tempUnit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTemp": () => (/* binding */ getTemp)
/* harmony export */ });
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/modules/search.js");
/*
temperature in Celsius,
and wind speed in meter/sec === metric

For temperature in Fahrenheit,
wind speed in miles/hour === imperial

Temperature in Kelvin,
wind speed in meter/sec === standard

source : https://openweathermap.org/api/one-call-api#data
*/

/*COULD ALSO JUST WRITE SOME FUNCTION THAT CONVERT THE DATA LOCALLY */


// imports

// need to change the weather request(w/ the specified unit)
// then update the DOM(send the request)

// cache the DOM
const tempChange = document.querySelector(".temp-change");


const getTemp = _ => {
    // metric is the default(for this program not the api)
    let tempToExport = "metric";

    tempChange.addEventListener("click", event => {
        let closesetBtn = event.target.closest("button");
        selectTemp(closesetBtn)

        tempToExport = closesetBtn.getAttribute("data-temp");
        
        //updateWeather()
        console.log(tempToExport);
    });

    return tempToExport;
}


let selectTemp = closesetBtn => {
    // remove selected class from every item
    Array.from(tempChange.children)
    .forEach(item => item.classList.remove("temp-change__btn--selected"));
    // add selected class to the item you selected
    closesetBtn.classList.add("temp-change__btn--selected");
}


// const changeTemp = _ => {
    
    
// }

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ "./src/modules/search.js");





// initSearch()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vLy4vYXBpS2V5cy9nZW9jb2RpbmdBcGlLZXkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL2FwaUtleXMvd2VhdGhlckFwaUtleS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL3NyYy9tb2R1bGVzL2N1cnJlbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL3NyYy9tb2R1bGVzL211bHRpLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9zcmMvbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby8uL3NyYy9tb2R1bGVzL3RlbXBVbml0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWFwcC1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1hcHAtZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stYXBwLWRlbW8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLGVBQWUsRTs7Ozs7Ozs7Ozs7Ozs7QUNOOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxhQUFhLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ041QjtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLGtIQUFrSCxJQUFJLGtCQUFrQjtBQUN4STtBQUNBLGtFQUFrRSwyQkFBMkIsZUFBZSxjQUFjLEdBQUcsUUFBUSwwQkFBMEIsR0FBRyxVQUFVLHFCQUFxQiwyQ0FBMkMsR0FBRyxVQUFVLHVCQUF1QiwwRkFBMEYscUJBQXFCLHFCQUFxQixpQkFBaUIsNkJBQTZCLG9CQUFvQix1QkFBdUIsZ0JBQWdCLDJCQUEyQixHQUFHLCtCQUErQixVQUFVLHNCQUFzQixLQUFLLEdBQUcsNkJBQTZCLFVBQVUsbUJBQW1CLEtBQUssR0FBRyxvQkFBb0Isd0JBQXdCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsa0JBQWtCLGtCQUFrQixXQUFXLEdBQUcsOEJBQThCLG1CQUFtQixpQkFBaUIsR0FBRywrQkFBK0IsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsR0FBRywrQkFBK0IsMkJBQTJCLEdBQUcsc0NBQXNDLDBCQUEwQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLG1CQUFtQiwyQkFBMkIsbUJBQW1C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QUNBO0FBQ0E7OztBQUdBOzs7QUFHQSxJOzs7Ozs7VUN2REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDc0I7Ozs7QUFJNUMsZSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5zZXJ2aWNlIGltIHVzaW5nIGZvciBnZW9jb2RpbmdcclxuaHR0cHM6Ly9wb3NpdGlvbnN0YWNrLmNvbS9kb2N1bWVudGF0aW9uXHJcbiovXHJcblxyXG5jb25zdCBnZW9jb2RpbmdBcGlLZXkgPSBcIjAyOTY2MWNkNDFmMzk4MzM1MDQ1Y2VjNjYwOTM1Y2Q3XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGdlb2NvZGluZ0FwaUtleTsiLCIvKlxyXG51c2luZyBvcGVuIHdlYXRoZXIgbWFwXHJcbmh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2d1aWRlXHJcbiovXHJcblxyXG5jb25zdCB3ZWF0aGVyQXBpS2V5ID0gXCIyMjEyZTY0MDBjYTc2NDM2ZTU3MDVlZTk5MWUyZWRlYVwiO1xyXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyQXBpS2V5OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmFwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZhZDU2NiAwJSwgI2RkOTI3NCA1MiUsICNjZjc0NzkgNzQlLCAjYzU1ZTdjIDEwMCUpO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDFyZW0gYXV0byAwIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xcbiAgLmFwcCB7XFxuICAgIG1heC13aWR0aDogOTV2dztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuYXBwIHtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgfVxcbn1cXG4ubG9hZGluZy1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICMzMTMxMzE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IC0xMDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5sb2FkaW5nLXNlY3Rpb24tLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLmxvYWRpbmctc2VjdGlvbl9fY29udGVudCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4ubG9hZGluZy1zZWN0aW9uX19oZWFkaW5nIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxufVxcblxcbi8qbG9hZGluZyBhbmltYXRpb24qL1xcbi5sZHMtcmluZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuLmxkcy1yaW5nIGRpdiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIG1hcmdpbjogOHB4O1xcbiAgYm9yZGVyOiA4cHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcXG59XFxuXFxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcXG59XFxuXFxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMykge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbGRzLXJpbmcge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4vKmFwcF9faGVhZGVyKi9cXG4uYXBwX19oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLypjdXJyZW50IGxvY2F0aW9uKi9cXG4uY3VycmVudC1sb2NhdGlvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIC0tc2l6ZTo0NXB4O1xcbiAgLS1mb250LXNpemU6MXJlbTtcXG4gIGJvcmRlcjogMHB4IHNvbGlkICNmYWQ1NjY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdmg7XFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2VhcmNoLWJhcl9faW5wdXQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBsaW5lLWhlaWdodDogY2FsYyh2YXIoLS1zaXplKSAtIDNweCk7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uc2VhcmNoLWJhcl9fc3VibWl0IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogI2ZhZDU2NjtcXG4gIHdpZHRoOiBjYWxjKHZhcigtLXNpemUpIC0gMTBweCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tc2l6ZSkgLSAxMHB4KTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cy13aXRoaW4ge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cy13aXRoaW4gLnNlYXJjaC1iYXJfX2lucHV0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHRleHQ7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0tc2l6ZSkpO1xcbn1cXG4uc2VhcmNoLWJhcjpmb2N1cy13aXRoaW4gLnNlYXJjaC1iYXJfX2lucHV0OmZvY3VzLFxcbi5zZWFyY2gtYmFyOmZvY3VzLXdpdGhpbiAuc2VhcmNoLWJhcl9faW5wdXQ6aG92ZXIge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuLmFwcF9fY3VycmVudC1mb3JlY2FzdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmZvcmVjYXN0X19zdW1tYXJ5X19pY29uIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5jdXJyZW50LWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uY3VycmVudC1mb3JlY2FzdF9fdGVtcCB7XFxuICBmb250LXNpemU6IDRlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5jdXJyZW50LWZvcmVjYXN0X19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC1mb3JlY2FzdF9fZGV0YWlscyA+ICoge1xcbiAgbWFyZ2luOiAwIDFyZW07XFxufVxcblxcbi53ZWVrLWZvcmVjYXN0X19pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWFyZ2luLXRvcDogNHJlbTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLndlZWstZm9yZWNhc3RfX2l0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB3aWR0aDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMCAwLjI1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDMwMG1zIGVhc2U7XFxufVxcblxcbi53ZWVrLWZvcmVjYXN0X19pdGVtLS1zZWxlY3RlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uZm9yZWNhc3RfX2l0ZW1fX2ljb24ge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi53ZWVrLWZvcmVjYXN0X19pdGVtX190ZW1wIHtcXG4gIG1hcmdpbjogMC41cmVtIDAgMC4yNXJlbSAwO1xcbn1cXG5cXG4udGVtcC1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNDhjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAxcmVtIGF1dG8gMXJlbSBhdXRvO1xcbn1cXG5cXG4uZXJyb3ItcG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgd2lkdGg6IDk1JTtcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcbiAgdG9wOiA5NSU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtOTUlKTtcXG4gIHotaW5kZXg6IC05OTk7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBib3gtc2hhZG93OiAxcHggNXB4IDEwcHggcmdiYSgzNCwgMzQsIDM0LCAwLjI1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcbn1cXG5cXG4uZXJyb3ItcG9wdXAtLWFjdGl2ZSB7XFxuICB6LWluZGV4OiA5OTk7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmVycm9yLXBvcHVwX19jbG9zZS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2VjMjQyNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmVycm9yLXBvcHVwX19jbG9zZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmMjkyOTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVycm9yLXBvcHVwX19jbG9zZS1idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNlYzI0MjQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL2FwcC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9sb2FkaW5nLXNjcmVlbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9hcHBfX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVfbW9kdWxlcy9zZWFyY2gtYmFyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL2ZvcmVjYXN0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL3dlZWstZm9yZWNhc3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlX21vZHVsZXMvdGVtcC1pbmZvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZV9tb2R1bGVzL2Vycm9yLXBvcHVwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFRjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FDYkE7RUFDSSxrQkFBQTtFQUNBLHFGQUxVO0VBTVYsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBRGdCSjs7QUNiRTtFQUNFO0lBQ0csZUFBQTtFRGdCTDtBQUNGO0FDYkU7RUFDRTtJQUNFLFlBQUE7RURlSjtBQUNGO0FFeENBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0FGMENKOztBRXZDRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FGMENKOztBRXRDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBRnlDSjs7QUV0Q0U7RUFDRSxzQkFBQTtBRnlDSjs7QUV0Q0Esb0JBQUE7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRnlDSjs7QUV2Q0U7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtFQUNBLHNEQUFBO0FGMENKOztBRXhDRTtFQUNFLHVCQUFBO0FGMkNKOztBRXpDRTtFQUNFLHNCQUFBO0FGNENKOztBRTFDRTtFQUNFLHVCQUFBO0FGNkNKOztBRTNDRTtFQUNFO0lBQ0UsdUJBQUE7RUY4Q0o7RUU1Q0U7SUFDRSx5QkFBQTtFRjhDSjtBQUNGO0FHN0dBLGNBQUE7QUFDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUgrR0o7O0FHNUdFLG1CQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUgrR0o7O0FJeEhBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBSjJISjtBSXhISTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FKMEhOO0FJdkhJO0VBQ0UsVUFBQTtBSnlITjtBSXRISTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkF6Q0s7RUEwQ0wsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FKd0hOO0FJckhJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBSnVITjtBSXJITTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUp1SFI7QUlwSE07O0VBRUUsVUFBQTtBSnNIUjs7QUtsTEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUxxTEo7O0FLbExFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FMcUxKOztBS2xMRTtFQUNFLGtCQUFBO0FMcUxKOztBS2pMRTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBTG9MSjs7QUtqTEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUxvTEo7O0FLakxFO0VBQ0UsY0FBQTtBTG9MSjs7QU1qTkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBTm9OSjs7QU1qTkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBTm9OSjs7QU1qTkU7RUFDRSxzQkFBQTtBTm9OSjs7QU1qTkU7RUFDRSxXQUFBO0FOb05KOztBTWpORTtFQUNFLDBCQUFBO0FOb05KOztBT3BQQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBUHVQSjs7QVEzUEE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFFQSw2QkFBQTtBUjZQSjs7QVExUEU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QVI2UEo7O0FRelBFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBUjRQSjs7QVF6UEU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QVI0UEo7O0FRelBFO0VBQ0UsbUJBQUE7QVI0UEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxuICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IzAwMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgfVwiLFwiLy8gc2FzcyBtb2R1bGVzXFxyXFxuQHVzZSBcXFwiLi9zdHlsZV9tb2R1bGVzL2Jhc2VcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVfbW9kdWxlcy9hcHBcXFwiO1xcclxcbkB1c2UgXFxcIi4vc3R5bGVfbW9kdWxlcy9sb2FkaW5nLXNjcmVlblxcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZV9tb2R1bGVzL2FwcF9faGVhZGVyXFxcIjtcXHJcXG5AdXNlIFxcXCIuL3N0eWxlX21vZHVsZXMvc2VhcmNoLWJhclxcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZV9tb2R1bGVzL2ZvcmVjYXN0XFxcIjtcXHJcXG5AdXNlIFxcXCIuL3N0eWxlX21vZHVsZXMvd2Vlay1mb3JlY2FzdFxcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZV9tb2R1bGVzL3RlbXAtaW5mb1xcXCI7XFxyXFxuQHVzZSBcXFwiLi9zdHlsZV9tb2R1bGVzL2Vycm9yLXBvcHVwXFxcIjtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vLyBmb250XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXCIsXCIkZ3JhZGllbnQteW9wOmxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1MCwyMTMsMTAyLDEpIDAlLCByZ2JhKDIyMSwxNDYsMTE2LDEpIDUyJSwgcmdiYSgyMDcsMTE2LDEyMSwxKSA3NCUsIHJnYmEoMTk3LDk0LDEyNCwxKSAxMDAlKTtcXHJcXG5cXHJcXG5cXHJcXG4uYXBwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkZ3JhZGllbnQteW9wO1xcclxcbiAgICBtaW4td2lkdGg6MjUwcHg7XFxyXFxuICAgIG1heC13aWR0aDo5MDBweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46MXJlbSBhdXRvIDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzoxcmVtIDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhKG1heC13aWR0aDo5MjBweCkge1xcclxcbiAgICAuYXBwIHtcXHJcXG4gICAgICAgbWF4LXdpZHRoOjk1dnc7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhKG1heC13aWR0aDo1MDBweCkge1xcclxcbiAgICAuYXBwIHtcXHJcXG4gICAgICBoZWlnaHQ6IDk1dmg7XFxyXFxuICAgIH1cXHJcXG4gIH1cIixcIi5sb2FkaW5nLXNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYmEoNDksIDQ5LCA0OSk7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgei1pbmRleDotMTAwO1xcclxcbiAgICB0b3A6MDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2FkaW5nLXNlY3Rpb24tLWFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB6LWluZGV4OjEwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC5sb2FkaW5nLXNlY3Rpb25fX2NvbnRlbnQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDo1MCU7XFxyXFxuICAgIGxlZnQ6NTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sb2FkaW5nLXNlY3Rpb25fX2hlYWRpbmcge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbi8qbG9hZGluZyBhbmltYXRpb24qL1xcclxcbiAgLmxkcy1yaW5nIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICB9XFxyXFxuICAubGRzLXJpbmcgZGl2IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDY0cHg7XFxyXFxuICAgIGhlaWdodDogNjRweDtcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogOHB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XFxyXFxuICB9XFxyXFxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XFxyXFxuICB9XFxyXFxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xcclxcbiAgfVxcclxcbiAgQGtleWZyYW1lcyBsZHMtcmluZyB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB9XFxyXFxuICB9XCIsXCIvKmFwcF9faGVhZGVyKi9cXHJcXG4uYXBwX19oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6MC41cmVtIDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qY3VycmVudCBsb2NhdGlvbiovXFxyXFxuICAuY3VycmVudC1sb2NhdGlvbiB7XFxyXFxuICAgIGNvbG9yOiNmZmY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB9XCIsXCIkbXkteWVsbG93OiNmYWQ1NjY7XFxyXFxuXFxyXFxuLnNlYXJjaC1iYXIge1xcclxcbiAgICAtLXNpemU6NDVweDtcXHJcXG4gICAgLS1mb250LXNpemU6MXJlbTtcXHJcXG4gICAgYm9yZGVyOjBweCBzb2xpZCAkbXkteWVsbG93O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZoO1xcclxcbiAgICBoZWlnaHQ6dmFyKC0tc2l6ZSk7XFxyXFxuICAgIHdpZHRoOnZhcigtLXNpemUpO1xcclxcbiAgICBwYWRkaW5nOjVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIFxcclxcbiAgXFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgZm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZSk7XFxyXFxuICAgICAgcGFkZGluZzowIDAuNXJlbTtcXHJcXG4gICAgICBib3JkZXI6MDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOjA7XFxyXFxuICAgICAgYm90dG9tOjA7XFxyXFxuICAgICAgbGVmdDowO1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLXNpemUpIC0gM3B4KTtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAmX19zdWJtaXQge1xcclxcbiAgICAgIGZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUpO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBib3JkZXI6MDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiRteS15ZWxsb3c7XFxyXFxuICAgICAgd2lkdGg6Y2FsYyh2YXIoLS1zaXplKSAtIDEwcHgpO1xcclxcbiAgICAgIGhlaWdodDpjYWxjKHZhcigtLXNpemUpIC0gMTBweCk7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgICY6Zm9jdXMtd2l0aGluIHtcXHJcXG4gICAgICB3aWR0aDoyMDBweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAgIGNvbG9yOiMwMDA7XFxyXFxuICBcXHJcXG4gICAgICAuc2VhcmNoLWJhcl9faW5wdXQge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXHJcXG4gICAgICAgIHdpZHRoOmNhbGMoMTAwJSAtIHZhcigtLXNpemUpKTtcXHJcXG4gICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAuc2VhcmNoLWJhcl9faW5wdXQ6Zm9jdXMsXFxyXFxuICAgICAgLnNlYXJjaC1iYXJfX2lucHV0OmhvdmVyIHtcXHJcXG4gICAgICAgIG91dGxpbmU6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgXFxyXFxuICAgIH1cXHJcXG4gIH1cIixcIi5hcHBfX2N1cnJlbnQtZm9yZWNhc3Qge1xcclxcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOjFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mb3JlY2FzdF9fc3VtbWFyeV9faWNvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTo0cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjJyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jdXJyZW50LWRldGFpbHMge1xcclxcbiAgICBmb250LXNpemU6MS4yNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgXFxyXFxuICAuY3VycmVudC1mb3JlY2FzdF9fdGVtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jdXJyZW50LWZvcmVjYXN0X19kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jdXJyZW50LWZvcmVjYXN0X19kZXRhaWxzID4gKiB7XFxyXFxuICAgIG1hcmdpbjowIDFyZW07XFxyXFxuICB9XCIsXCIud2Vlay1mb3JlY2FzdF9faXRlbXMge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOjAgYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDo0cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6MTAwJTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAud2Vlay1mb3JlY2FzdF9faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OjE7XFxyXFxuICAgIHdpZHRoOjUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgcGFkZGluZzowLjVyZW07XFxyXFxuICAgIG1hcmdpbjowIDAuMjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjpib3JkZXIgMzAwbXMgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLndlZWstZm9yZWNhc3RfX2l0ZW0tLXNlbGVjdGVkIHtcXHJcXG4gICAgYm9yZGVyOjFweCAgc29saWQgI2ZmZjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcmVjYXN0X19pdGVtX19pY29uIHtcXHJcXG4gICAgd2lkdGg6NTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLndlZWstZm9yZWNhc3RfX2l0ZW1fX3RlbXAge1xcclxcbiAgICBtYXJnaW46MC41cmVtIDAgMC4yNXJlbSAwO1xcclxcbiAgfVwiLFwiLnRlbXAtaW5mbyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOjQ4Y2g7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIG1hcmdpbjoxcmVtIGF1dG8gMXJlbSBhdXRvO1xcclxcbiAgfVwiLFwiLmVycm9yLXBvcHVwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XFxyXFxuICAgIGNvbG9yOiMwMDA7XFxyXFxuICAgIHdpZHRoOjk1JTtcXHJcXG4gICAgcGFkZGluZzoxcmVtIDAuNXJlbTtcXHJcXG4gICAgdG9wOjk1JTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC05NSUpO1xcclxcbiAgICB6LWluZGV4OiAtOTk5O1xcclxcbiAgICBvcGFjaXR5OjA7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6d3JhcDtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDVweCAxMHB4IHJnYmEoMzQsIDM0LCAzNCwgMC4yNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIFxcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVycm9yLXBvcHVwLS1hY3RpdmUge1xcclxcbiAgICB6LWluZGV4OiA5OTk7XFxyXFxuICAgIG9wYWNpdHk6MTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5lcnJvci1wb3B1cF9fY2xvc2UtYnRuIHtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6cmdiKDIzNiwgMzYsIDM2KTtcXHJcXG4gICAgY29sb3I6I2ZmZjtcXHJcXG4gICAgd2lkdGg6MjVweDtcXHJcXG4gICAgaGVpZ2h0OjI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgZm9udC1zaXplOjEuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVycm9yLXBvcHVwX19jbG9zZS1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDQxLCA0MSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVycm9yLXBvcHVwX19jbG9zZS1idG46YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM2LCAzNiwgMzYpO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImxldCBjdXJyZW50V2VhdGhlcjtcclxuXHJcbi8vIGNhY2hlIHRoZSBET01cclxuY29uc3QgZm9yZWNhc3RTdW1tYXJ5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RfX3N1bW1hcnlfX2ljb25cIik7XHJcbmNvbnN0IGZvcmVjYXN0U3VtbWFyeURldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtZGV0YWlsc1wiKTtcclxuY29uc3QgZm9yZWNhc3RUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWZvcmVjYXN0X190ZW1wIHNwYW5cIik7XHJcbmNvbnN0IGZvcmVjYXN0V2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS13aW5kXCIpO1xyXG5jb25zdCBmb3JlY2FzdEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWh1bWlkaXR5XCIpO1xyXG5jb25zdCBmb3JlY2FzdFByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGEtcHJlY2lwaXRhdGlvblwiKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRXZWF0aGVyID0gbmV3V2VhdGhlciA9PiB7XHJcbiAgICBjdXJyZW50V2VhdGhlciA9IG5ld1dlYXRoZXI7XHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyID0gXyA9PiB7XHJcbiAgICBjb25zdCB7IHRlbXAsIGh1bWlkaXR5LCB3aW5kX3NwZWVkLCBkZXdfcG9pbnQgfSA9IGN1cnJlbnRXZWF0aGVyO1xyXG4gICAgY29uc3QgeyBpY29uLCBkZXNjcmlwdGlvbiB9ID0gY3VycmVudFdlYXRoZXIud2VhdGhlclswXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRXZWF0aGVyKVxyXG5cclxuICAgIGZvcmVjYXN0U3VtbWFyeUljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2A7XHJcbiAgICBmb3JlY2FzdFN1bW1hcnlEZXRhaWxzLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgIGZvcmVjYXN0VGVtcC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHRlbXApO1xyXG4gICAgZm9yZWNhc3RXaW5kLmlubmVySFRNTCA9IHdpbmRfc3BlZWQgKyBcIm1waFwiO1xyXG4gICAgZm9yZWNhc3RIdW1pZGl0eS5pbm5lckhUTUwgPSBodW1pZGl0eSArIFwiJVwiO1xyXG4gICAgZm9yZWNhc3RQcmVjaXBpdGF0aW9uLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGV3X3BvaW50KSArIFwiRFBcIjtcclxufSIsIi8vIGNhY2hlIHRoZSBET01cclxuY29uc3QgZm9yZWNhc3RTdW1tYXJ5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RfX3N1bW1hcnlfX2ljb25cIik7XHJcbmNvbnN0IGZvcmVjYXN0U3VtbWFyeURldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtZGV0YWlsc1wiKTtcclxuY29uc3QgZm9yZWNhc3RUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWZvcmVjYXN0X190ZW1wIHNwYW5cIik7XHJcbmNvbnN0IGZvcmVjYXN0V2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0YS13aW5kXCIpO1xyXG5jb25zdCBmb3JlY2FzdEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRhLWh1bWlkaXR5XCIpO1xyXG5jb25zdCBmb3JlY2FzdFByZWNpcGl0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGEtcHJlY2lwaXRhdGlvblwiKTtcclxuY29uc3Qgd2Vla0ZvcmVjYXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZWstZm9yZWNhc3RfX2l0ZW1zXCIpO1xyXG5cclxuZXhwb3J0IGxldCBtdWx0aWRheUZvcmVjYXN0ID0gZGFpbHlXZWF0aGVyID0+IHtcclxuICAgIC8qZ2V0IG1vcmUgc3BlY2lmaWMgd2VhdGhlciBpbmZvIHdoZW4geW91IGNsaWNrIG9uIGEgZm9yZWNhc3QqL1xyXG4gICAgd2Vla0ZvcmVjYXN0SXRlbXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgY2xvc2VzdExpID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKTtcclxuICAgICAgICBsZXQgd2VhdGhlckRheUluZGV4ID0gY2xvc2VzdExpLmdldEF0dHJpYnV0ZShcImRhdGEtd2VhdGhlckRheUluZGV4XCIpO1xyXG4gICAgICAgIGxldCBjdXJyZW50RGF5V2VhdGhlckRhdGEgPSBkYWlseVdlYXRoZXJbd2VhdGhlckRheUluZGV4XTtcclxuICAgICAgICAvLyB3ZWF0aGVyIGRhdGFcclxuICAgICAgICBsZXQgeyB3aW5kX3NwZWVkLCBodW1pZGl0eSwgZGV3X3BvaW50IH0gPSBjdXJyZW50RGF5V2VhdGhlckRhdGE7XHJcbiAgICAgICAgbGV0IHsgZGF5OnRlbXAgfSA9IGN1cnJlbnREYXlXZWF0aGVyRGF0YS50ZW1wO1xyXG4gICAgICAgIGxldCB7IGljb24sIGRlc2NyaXB0aW9uIH0gPSBjdXJyZW50RGF5V2VhdGhlckRhdGEud2VhdGhlclswXTtcclxuXHJcblxyXG4gICAgICAgIGxldCByZW5kZXIgPSBfID0+IHtcclxuICAgICAgICAgICAgZm9yZWNhc3RTdW1tYXJ5SWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn1AMngucG5nYDtcclxuICAgICAgICAgICAgZm9yZWNhc3RTdW1tYXJ5RGV0YWlscy5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgZm9yZWNhc3RUZW1wLmlubmVySFRNTCA9IE1hdGgucm91bmQodGVtcCk7XHJcbiAgICAgICAgICAgIGZvcmVjYXN0V2luZC5pbm5lckhUTUwgPSB3aW5kX3NwZWVkICsgXCJtcGhcIjtcclxuICAgICAgICAgICAgZm9yZWNhc3RIdW1pZGl0eS5pbm5lckhUTUwgPSBodW1pZGl0eSArIFwiJVwiO1xyXG4gICAgICAgICAgICBmb3JlY2FzdFByZWNpcGl0YXRpb24uaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkZXdfcG9pbnQpICsgXCJEUFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdEN1cnJlbnRXZWVrbHlGb3JlY2FzdCA9IF8gPT4ge1xyXG4gICAgICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIGV2ZXJ5IGl0ZW1cclxuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2Vlay1mb3JlY2FzdF9faXRlbXNcIikuY2hpbGRyZW4pXHJcbiAgICAgICAgLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJ3ZWVrLWZvcmVjYXN0X19pdGVtLS1zZWxlY3RlZFwiKSk7XHJcbiAgICAgICAgLy8gYWRkIHNlbGVjdGVkIGNsYXNzIHRvIHRoZSBpdGVtIHlvdSBzZWxlY3RlZFxyXG4gICAgICAgIGNsb3Nlc3RMaS5jbGFzc0xpc3QuYWRkKFwid2Vlay1mb3JlY2FzdF9faXRlbS0tc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmVuZGVyKClcclxuICAgICAgICBzZWxlY3RDdXJyZW50V2Vla2x5Rm9yZWNhc3QoKVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgZ2VvY29kaW5nQXBpS2V5IGZyb20gXCIuLi8uLi9hcGlLZXlzL2dlb2NvZGluZ0FwaUtleVwiO1xyXG5pbXBvcnQgd2VhdGhlckFwaUtleSBmcm9tIFwiLi4vLi4vYXBpS2V5cy93ZWF0aGVyQXBpS2V5XCI7XHJcbmltcG9ydCB7IHNldEN1cnJlbnRXZWF0aGVyIH0gZnJvbSBcIi4vY3VycmVudFwiO1xyXG5pbXBvcnQgeyBtdWx0aWRheUZvcmVjYXN0IH0gZnJvbSBcIi4vbXVsdGlcIjtcclxuaW1wb3J0IHsgZ2V0VGVtcCB9IGZyb20gXCIuL3RlbXBVbml0XCI7XHJcblxyXG4vLyBMYXQgPSBZIExvbmcgPSBYXHJcblxyXG5sZXQgYWRkcmVzcyA9IFwiU2FsdCBMYWtlIENpdHksIFV0YWhcIjtcclxuXHJcbmxldCBjdXJyZW50TG9jYXRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1sb2NhdGlvblwiKTtcclxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyXCIpO1xyXG5jb25zdCBzZWFyY2hJbnB1dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYmFyX19pbnB1dFwiKTtcclxuY29uc3Qgc2VhcmNoQmFyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1iYXJfX3N1Ym1pdFwiKTtcclxuY29uc3QgbG9hZGluZ1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRpbmctc2VjdGlvblwiKTtcclxuY29uc3Qgd2Vla0ZvcmVjYXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZWstZm9yZWNhc3RfX2l0ZW1zXCIpO1xyXG5jb25zdCBlcnJvclBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1wb3B1cFwiKTtcclxuY29uc3QgZXJyb3JDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3ItcG9wdXBfX2Nsb3NlLWJ0blwiKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTZWFyY2ggPSBfID0+IHtcclxuICAgIGJpbmRTZWFyY2hFdmVudHMoKVxyXG4gICAgdXBkYXRlV2VhdGhlcihhZGRyZXNzKVxyXG4gICAgcmVuZGVyKClcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBiaW5kU2VhcmNoRXZlbnRzID0gXyA9PiB7XHJcbiAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihzZWFyY2hJbnB1dEVsLnZhbHVlID09PSBcIlwiKSByZXR1cm47XHJcbiAgICAgICAgYWRkcmVzcyA9IHNlYXJjaElucHV0RWwudmFsdWU7XHJcbiAgICAgICAgc2VhcmNoSW5wdXRFbC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdXBkYXRlV2VhdGhlcihhZGRyZXNzKVxyXG4gICAgICAgIHJlbmRlcigpXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCB1cGRhdGVXZWF0aGVyID0gYXN5bmMgcXVlcnkgPT4ge1xyXG4gICAgLy8gc2V0IHRoZSBsb2FkaW5nIHNjcmVlbiAmIGdldCB0aGUgd2VhdGhlciBkYXRhIHRoYXRzIG5lZWRlZFxyXG4gICAgbG9hZGluZ1NlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImxvYWRpbmctc2VjdGlvbi0tYWN0aXZlXCIpO1xyXG4gICAgY29uc3Qge2xhdCwgbG9ufSA9IGF3YWl0IGdldExhdExvbmcoYWRkcmVzcylcclxuICAgIGNvbnN0IHtjdXJyZW50LCBkYWlseX0gPSBhd2FpdCBnZXRXZWF0aGVyRGF0YShsYXQsIGxvbik7XHJcbiAgICBsb2FkaW5nU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwibG9hZGluZy1zZWN0aW9uLS1hY3RpdmVcIik7XHJcbiAgICBzZXRDdXJyZW50V2VhdGhlcihjdXJyZW50KVxyXG5cclxuICAgIGNvbnN0IGRheXNPZlRoZVdlZWsgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XHJcblxyXG4gICAgLy8gZ2V0ICYgcHJlcGFyZSB0aGUgZGF0YSBmb3IgdGhlIG11bHRpIHdlYXRoZXIgZGF5IGZvcmVjYXN0XHJcbiAgICBsZXQgd2VhdGhlck11bHRpID0gZGFpbHkuc2xpY2UoMCwgZGFpbHkubGVuZ3RoIC0gMSkubWFwKCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgbGV0IHttaW4sIG1heH0gPSBpdGVtLnRlbXA7XHJcbiAgICAgICAgIGxldCB3ZWF0aGVySWNvbiA9IGl0ZW0ud2VhdGhlclswXS5pY29uO1xyXG4gICAgICAgICBsZXQgY3VycmVudERheVRleHQgPSBkYXlzT2ZUaGVXZWVrW2luZGV4XTtcclxuICAgICAgICByZXR1cm4ge21pbixtYXgsd2VhdGhlckljb24sY3VycmVudERheVRleHR9O1xyXG4gICAgfSkpO1xyXG5cclxuICAgIC8vIHNldCB0aGUgbWFya3VwIGZvciB0aGUgbXV0aSB3ZWF0aGVyIGRheSBmb3JlY2FzdFxyXG4gICAgbGV0IG15TWFya3VwID0gXCJcIjtcclxuICAgIHdlYXRoZXJNdWx0aS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHttaW4sbWF4LHdlYXRoZXJJY29uLGN1cnJlbnREYXlUZXh0fSA9IGl0ZW07XHJcbiAgICAgICAgbGV0IG1hcmt1cCA9IGBcclxuICAgICAgICA8bGkgY2xhc3M9XCJ3ZWVrLWZvcmVjYXN0X19pdGVtXCIgZGF0YS13ZWF0aGVyRGF5SW5kZXg9JHtpbmRleH0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJmb3JlY2FzdF9faXRlbV9faWNvblwiIHNyYz1cImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJJY29ufUAyeC5wbmdcIiBhbHQ9XCJ3ZWF0aGVyIGljb25cIi8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLWZvcmVjYXN0X19pdGVtX190ZW1wXCI+JHtNYXRoLmZsb29yKG1pbil9LyR7TWF0aC5mbG9vcihtYXgpfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PiR7Y3VycmVudERheVRleHR9PC9kaXY+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIG15TWFya3VwICs9IG1hcmt1cDtcclxuICAgIH0pO1xyXG4gICAgd2Vla0ZvcmVjYXN0SXRlbXMuaW5uZXJIVE1MID0gbXlNYXJrdXA7XHJcblxyXG4gICAgbGV0IHNlbGVjdEZpcnN0V2Vla2x5Rm9yZWNhc3QgPSBfID0+XHJcbiAgICB3ZWVrRm9yZWNhc3RJdGVtcy5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwid2Vlay1mb3JlY2FzdF9faXRlbS0tc2VsZWN0ZWRcIilcclxuICAgIHNlbGVjdEZpcnN0V2Vla2x5Rm9yZWNhc3QoKVxyXG5cclxuICAgIC8qZ2V0IG1vcmUgc3BlY2lmaWMgd2VhdGhlciBpbmZvXHJcbiAgICB3aGVuIHlvdSBjbGljayBvbiBhIGZvcmVjYXN0Ki9cclxuICAgIG11bHRpZGF5Rm9yZWNhc3QoZGFpbHkpXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmxldCBnZXRMYXRMb25nID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgICAvKlxyXG4gICAgKkZvciB0aGUgd2VhdGhlciBhcGkgbmVlZCB0aGUgeCBhbmQgeShsYXQsIGxvbmcpXHJcbiAgICBmcm9tIHRoZSBhZGRyZXNzIHRoZSB1c2VyIGlucHV0cyBlZzogU2FsdCBsYWtlIGNpdHksVVRcclxuICAgICovXHJcbiAgICBsZXQgZW5kUG9pbnQgPSBgaHR0cDovL2FwaS5wb3NpdGlvbnN0YWNrLmNvbS92MS9mb3J3YXJkP2FjY2Vzc19rZXk9JHtnZW9jb2RpbmdBcGlLZXl9JnF1ZXJ5PSR7cXVlcnl9YDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChlbmRQb2ludCk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgICByZXR1cm4ge2xhdDogZGF0YS5kYXRhWzBdLmxhdGl0dWRlLCBsb246IGRhdGEuZGF0YVswXS5sb25naXR1ZGV9O1xyXG4gICAgfWNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgbG9hZGluZ1NlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImxvYWRpbmctc2VjdGlvbi0tYWN0aXZlXCIpO1xyXG4gICAgICAgIGVycm9yUG9wdXAuY2xhc3NMaXN0LmFkZChcImVycm9yLXBvcHVwLS1hY3RpdmVcIilcclxuICAgICAgICBzZXRUaW1lb3V0KF8gPT4gZXJyb3JQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3ItcG9wdXAtLWFjdGl2ZVwiKSwgNTAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgbGV0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGxhdCwgbG9uLCB0ZW1wVW5pdCkgPT4ge1xyXG4gICAgIGxldCAgZW5kcG9pbnQgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmV4Y2x1ZGU9YWxlcnRzLGhvdXJseSxtaW51dGVseSZhcHBpZD0ke3dlYXRoZXJBcGlLZXl9JnVuaXRzPSR7dGVtcFVuaXR9YDtcclxuICAgICBsZXQgcmVxdWVzdCA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcclxuICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCByZW5kZXIgPSBfID0+IHtcclxuICAgIGN1cnJlbnRMb2NhdGlvbkVsLmlubmVySFRNTCA9IGFkZHJlc3M7XHJcbn1cclxuXHJcblxyXG4vLyBlcnJvciBidXR0b24gZnVuY3Rpb25hbGl0eVxyXG5sZXQgZXJyb3JCdG5GdW5jdGlvbmFsaXR5ID0gXyA9PiB7XHJcbiAgICBjb25zdCBjbG9zZUVycm9yUG9wdXAgPSBldmVudCA9PlxyXG4gICAgZXJyb3JQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3ItcG9wdXAtLWFjdGl2ZVwiKVxyXG5lcnJvckNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUVycm9yUG9wdXApO1xyXG59XHJcblxyXG5lcnJvckJ0bkZ1bmN0aW9uYWxpdHkoKVxyXG4iLCIvKlxyXG50ZW1wZXJhdHVyZSBpbiBDZWxzaXVzLFxyXG5hbmQgd2luZCBzcGVlZCBpbiBtZXRlci9zZWMgPT09IG1ldHJpY1xyXG5cclxuRm9yIHRlbXBlcmF0dXJlIGluIEZhaHJlbmhlaXQsXHJcbndpbmQgc3BlZWQgaW4gbWlsZXMvaG91ciA9PT0gaW1wZXJpYWxcclxuXHJcblRlbXBlcmF0dXJlIGluIEtlbHZpbixcclxud2luZCBzcGVlZCBpbiBtZXRlci9zZWMgPT09IHN0YW5kYXJkXHJcblxyXG5zb3VyY2UgOiBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9hcGkvb25lLWNhbGwtYXBpI2RhdGFcclxuKi9cclxuXHJcbi8qQ09VTEQgQUxTTyBKVVNUIFdSSVRFIFNPTUUgRlVOQ1RJT04gVEhBVCBDT05WRVJUIFRIRSBEQVRBIExPQ0FMTFkgKi9cclxuXHJcblxyXG4vLyBpbXBvcnRzXHJcbmltcG9ydCB7Z2V0V2VhdGhlckRhdGEsIGdldExhdExvbmcgfSBmcm9tIFwiLi9zZWFyY2hcIjtcclxuLy8gbmVlZCB0byBjaGFuZ2UgdGhlIHdlYXRoZXIgcmVxdWVzdCh3LyB0aGUgc3BlY2lmaWVkIHVuaXQpXHJcbi8vIHRoZW4gdXBkYXRlIHRoZSBET00oc2VuZCB0aGUgcmVxdWVzdClcclxuXHJcbi8vIGNhY2hlIHRoZSBET01cclxuY29uc3QgdGVtcENoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcC1jaGFuZ2VcIik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRlbXAgPSBfID0+IHtcclxuICAgIC8vIG1ldHJpYyBpcyB0aGUgZGVmYXVsdChmb3IgdGhpcyBwcm9ncmFtIG5vdCB0aGUgYXBpKVxyXG4gICAgbGV0IHRlbXBUb0V4cG9ydCA9IFwibWV0cmljXCI7XHJcblxyXG4gICAgdGVtcENoYW5nZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCBjbG9zZXNldEJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHNlbGVjdFRlbXAoY2xvc2VzZXRCdG4pXHJcblxyXG4gICAgICAgIHRlbXBUb0V4cG9ydCA9IGNsb3Nlc2V0QnRuLmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcFwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvL3VwZGF0ZVdlYXRoZXIoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBUb0V4cG9ydCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGVtcFRvRXhwb3J0O1xyXG59XHJcblxyXG5cclxubGV0IHNlbGVjdFRlbXAgPSBjbG9zZXNldEJ0biA9PiB7XHJcbiAgICAvLyByZW1vdmUgc2VsZWN0ZWQgY2xhc3MgZnJvbSBldmVyeSBpdGVtXHJcbiAgICBBcnJheS5mcm9tKHRlbXBDaGFuZ2UuY2hpbGRyZW4pXHJcbiAgICAuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInRlbXAtY2hhbmdlX19idG4tLXNlbGVjdGVkXCIpKTtcclxuICAgIC8vIGFkZCBzZWxlY3RlZCBjbGFzcyB0byB0aGUgaXRlbSB5b3Ugc2VsZWN0ZWRcclxuICAgIGNsb3Nlc2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWNoYW5nZV9fYnRuLS1zZWxlY3RlZFwiKTtcclxufVxyXG5cclxuXHJcbi8vIGNvbnN0IGNoYW5nZVRlbXAgPSBfID0+IHtcclxuICAgIFxyXG4gICAgXHJcbi8vIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQge2luaXRTZWFyY2h9IGZyb20gXCIuL21vZHVsZXMvc2VhcmNoXCI7XHJcblxyXG5cclxuXHJcbi8vIGluaXRTZWFyY2goKSJdLCJzb3VyY2VSb290IjoiIn0=