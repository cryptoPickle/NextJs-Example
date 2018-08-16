module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__);



var Header = function Header(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Next.js blogging application" : _ref$title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default.a, {
    title: title,
    showMenuIconButton: false
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(1);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "material-ui/styles/MuiThemeProvider"
var MuiThemeProvider_ = __webpack_require__(5);
var MuiThemeProvider__default = /*#__PURE__*/__webpack_require__.n(MuiThemeProvider_);

// EXTERNAL MODULE: external "material-ui/styles/getMuiTheme"
var getMuiTheme_ = __webpack_require__(6);
var getMuiTheme__default = /*#__PURE__*/__webpack_require__.n(getMuiTheme_);

// EXTERNAL MODULE: external "react-tap-event-plugin"
var external__react_tap_event_plugin_ = __webpack_require__(7);
var external__react_tap_event_plugin__default = /*#__PURE__*/__webpack_require__.n(external__react_tap_event_plugin_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(8);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./shared/MUI/theme.js
var PRIMARY_COLOR = "#569cb7";
var PRIMARY_COLOR_TWO = "#88cde9";
var PRIMARY_COLOR_THREE = "#1e6e87";
var ACCENT_COLOR_ONE = "#556cb7";
var ACCENT_COLOR_TWO = "#889aea";
var ACCENT_COLOR_THREE = "#204287";
// CONCATENATED MODULE: ./shared/MUI/withMUI.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








try {
  external__react_tap_event_plugin__default()();
} catch (e) {// Can only be called once per application lifecycle
}

var withMUI_withMaterialUI = function withMaterialUI(ComposedComponent) {
  var HOC =
  /*#__PURE__*/
  function (_Component) {
    _inherits(HOC, _Component);

    function HOC() {
      _classCallCheck(this, HOC);

      return _possibleConstructorReturn(this, (HOC.__proto__ || Object.getPrototypeOf(HOC)).apply(this, arguments));
    }

    _createClass(HOC, [{
      key: "render",
      value: function render() {
        var userAgent = this.props.userAgent;
        var Lato = "lato, sans-serif";
        var muiTheme = getMuiTheme__default()({
          fontFamily: Lato,
          palette: {
            primary1Color: PRIMARY_COLOR,
            primary2Color: PRIMARY_COLOR_TWO,
            primary3Color: PRIMARY_COLOR_THREE,
            accent1Color: ACCENT_COLOR_ONE,
            accent2Color: ACCENT_COLOR_TWO,
            accent3Color: ACCENT_COLOR_THREE
          },
          appBar: {
            height: 50
          }
        }, {
          userAgent: userAgent
        });
        return external__react__default.a.createElement("div", null, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, "Nextjs Blogger"), external__react__default.a.createElement("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }), external__react__default.a.createElement("link", {
          href: "https://fonts.googleapis.com/css?family=Lato",
          rel: "stylesheet"
        })), external__react__default.a.createElement(MuiThemeProvider__default.a, {
          muiTheme: muiTheme
        }, external__react__default.a.createElement(ComposedComponent, this.props)));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        regenerator__default.a.mark(function _callee(ctx) {
          var req, userAgent, subProps;
          return regenerator__default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  req = ctx.req;
                  userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
                  _context.next = 4;
                  return ComposedComponent.getInitialProps(ctx);

                case 4:
                  subProps = _context.sent;
                  return _context.abrupt("return", _objectSpread({}, subProps, {
                    userAgent: userAgent
                  }));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return HOC;
  }(external__react_["Component"]);

  return HOC;
};

/* harmony default export */ var withMUI = __webpack_exports__["a"] = (withMUI_withMaterialUI);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-tap-event-plugin");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/RaisedButton");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_MUI_withMUI__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_fetch__);



function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }








var Post = function Post(_ref) {
  var title = _ref.title,
      content = _ref.content;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], null), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["Card"], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardHeader"], {
    title: title
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Card__["CardText"], null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_RaisedButton___default.a, {
    fullWidth: true,
    primary: true
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    href: "/",
    as: "/blog"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    style: {
      textDecoration: "none",
      fontSize: "18px",
      color: "white"
    }
  }, "Go back to blog!"))))));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
    var id, resposne, data, title, content;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref2.query.id;
            _context.next = 3;
            return fetch("".concat("https://www.googleapis.com/blogger/v3/blogs/6246654750018942856/posts", "/").concat(id, "?key=").concat("AIzaSyC9k-p0qzkYl7UUVJAxG78u0rEn4pOO-SE"));

          case 3:
            resposne = _context.sent;
            _context.next = 6;
            return resposne.json();

          case 6:
            data = _context.sent;
            title = data.title;
            content = data.content;
            return _context.abrupt("return", {
              title: title,
              content: content
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__shared_MUI_withMUI__["a" /* default */])(Post));

/***/ })
/******/ ]);