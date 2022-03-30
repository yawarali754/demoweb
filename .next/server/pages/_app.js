module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\flight380-Mar12-master\\components\\Footer\\Footer.js";

function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "footer-upper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "footer-links",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "footer-about ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "about-logo",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/Yatra-white.png",
                    alt: "Image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "footer-social-links",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "flaticon-maps-and-flags",
                        "aria-hidden": "true",
                        style: {
                          color: 'white'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 18,
                        columnNumber: 25
                      }, this), ' ', "14 Church St, Wolverton, Milton Keynes MK12 5JN, United Kingdom"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "flaticon-phone-call",
                        style: {
                          color: 'white'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "tel:(012)-345-6789",
                        children: " (012)-345-6789"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                        className: "flaticon-mail",
                        style: {
                          color: 'white'
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 35,
                        columnNumber: 25
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "mailto:tourntravel@testmail.com",
                        children: [' ', "tourntravel@testmail.com"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "footer-social-links",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "social-icon",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-facebook",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 50,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "social-icon",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-instagram",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "social-icon",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-twitter",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 60,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "social-icon",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-youtube",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      className: "social-icon",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "#",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                          className: "fa fa-google",
                          "aria-hidden": "true"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 70,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "copyright",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "copyright-content",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["2022 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-copyright",
                  "aria-hidden": "true"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 24
                }, this), " MK Global. Designed & Developed by", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://symbiantsystems.co.uk/",
                  target: "_blank",
                  children: "Symbiant Systems"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "payment-content",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: "We Accept"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/payment1.png",
                    alt: "Image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/payment2.png",
                    alt: "Image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/payment3.png",
                    alt: "Image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/payment4.png",
                    alt: "Image"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "back-to-top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "#"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Header/NavBar.js":
/*!*************************************!*\
  !*** ./components/Header/NavBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\flight380-Mar12-master\\components\\Header\\NavBar.js";




function NavBar() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const userLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.userLogin);
  const userRedux = userLogin === null || userLogin === void 0 ? void 0 : userLogin.Email;
  let user = false;

  if (userRedux) {
    user = true;
  } else {
    user = false;
  }

  function isActive(route) {
    if (router === router.pathname) {
      return active;
    } else ' ';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "upper-head clearfix",
        style: {
          backgroundColor: "#3587A4"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "contact-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "tel:(012)-345-6789",
                style: {
                  color: "#fff"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "flaticon-phone-call"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, this), " Phone: (012)-345-6789"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "mailto:tourntravel@testmail.com",
                style: {
                  color: "#fff"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "flaticon-mail"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 19
                }, this), " Mail: tourntravel@testmail.com"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "login-btn pull-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/aboutus",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/aboutus",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-info-circle"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, this), "About Us"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/privacypolicy",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "/privacypolicy",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fa fa-user-secret"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, this), "Privacy Policy"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "navigation",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "navigation-content",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "header_menu",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
              className: "navbar navbar-default navbar-sticky-function navbar-arrow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "logo pull-left",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    alt: "Image",
                    src: "images/Yatra-01.png"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "slicknav-mobile"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                id: "navbar",
                className: "navbar-nav-wrapper",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "nav navbar-nav",
                  id: "responsive-menu",
                  children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/flight",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-plane"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 75,
                            columnNumber: 31
                          }, this), " Flight"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 74,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 72,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/#packages",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "/#packages",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "sl sl-icon-briefcase"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 82,
                            columnNumber: 31
                          }, this), " Packages"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/#deals",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "/#deals",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "sl sl-icon-present"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 31
                          }, this), " Deals"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/booking",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "/booking",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-user"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 96,
                            columnNumber: 31
                          }, this), " ", userRedux]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/flight",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "#",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-plane"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 106,
                            columnNumber: 31
                          }, this), " Flight"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/#packages",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "/#packages",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "sl sl-icon-briefcase"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 113,
                            columnNumber: 31
                          }, this), " Packages"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 112,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/#deals",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "/#deals",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "sl sl-icon-present"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 120,
                            columnNumber: 31
                          }, this), " Deals"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 118,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 117,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/signup",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "/signup",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-user-plus"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 127,
                            columnNumber: 31
                          }, this), " Register"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 126,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 125,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                        href: "/auth",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                          href: "/auth",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                            className: "fa fa-unlock-alt"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 134,
                            columnNumber: 31
                          }, this), " Login"]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 133,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 132,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Home/Packages.css":
/*!**************************************!*\
  !*** ./components/Home/Packages.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/NavBar */ "./components/Header/NavBar.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_js_ProtectedRoutes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/js/ProtectedRoutes */ "./public/js/ProtectedRoutes.js");
/* harmony import */ var _components_Home_Packages_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Home/Packages.css */ "./components/Home/Packages.css");
/* harmony import */ var _components_Home_Packages_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_Home_Packages_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_DropDown_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/DropDown.css */ "./styles/DropDown.css");
/* harmony import */ var _styles_DropDown_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_DropDown_css__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "D:\\flight380-Mar12-master\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

 // import '../public/css/style.css';




function MyApp({
  Component,
  pageProps,
  router
}) {
  const router1 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    pathname
  } = router1;
  const noNav = ['/dashboard', '/userProfile', '/reviews', '/addTour', '/packageList', '/booking', '/tourHistory', '/updatePassword', '/createPackage', '/createOffers', '/offerList', '/editOffer', '/editPackage'];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_2__["default"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_7__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), noNav.includes(pathname) ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 42
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_public_js_ProtectedRoutes__WEBPACK_IMPORTED_MODULE_9__["default"], {
      router: router,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), noNav.includes(pathname) ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 42
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./public/js/ProtectedRoutes.js":
/*!**************************************!*\
  !*** ./public/js/ProtectedRoutes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);


const isBrowser = () => false;

const ProtectedRoutes = ({
  router,
  children
}) => {
  const userLogin = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.userLogin);
  const isAuthenticated = userLogin === null || userLogin === void 0 ? void 0 : userLogin.Email;
  let unprotectedRoutes = ['/', '/flight', '/flight/fsearch', '/flightBooking', '/auth', '/signup', '/aboutus', '/privacypolicy', '/forgotpass', '/packagesDetail', '/dealDetail', '/bookingConfirmed', '/packages', '/deals', '/morePackages', '/moreDeals'];
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push('/');
  }

  return children;
};

/* harmony default export */ __webpack_exports__["default"] = (ProtectedRoutes);

/***/ }),

/***/ "./redux/actions/authentication.js":
/*!*****************************************!*\
  !*** ./redux/actions/authentication.js ***!
  \*****************************************/
/*! exports provided: getTokerAction, tokenReceived, tokenRecFailed, loginUserAction, loginSuccess, loginFailed, logout, verifyEmail, verifyEmailSuccess, verifyEmailFailed, verifyOTP, verifyOTPSuccess, verifyOtpFailed, setPass, setPassSuccess, setPasswordFailed, updatePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokerAction", function() { return getTokerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenReceived", function() { return tokenReceived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenRecFailed", function() { return tokenRecFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserAction", function() { return loginUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailed", function() { return loginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEmail", function() { return verifyEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEmailSuccess", function() { return verifyEmailSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEmailFailed", function() { return verifyEmailFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyOTP", function() { return verifyOTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyOTPSuccess", function() { return verifyOTPSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyOtpFailed", function() { return verifyOtpFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPass", function() { return setPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPassSuccess", function() { return setPassSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordFailed", function() { return setPasswordFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePassword", function() { return updatePassword; });
/* harmony import */ var _userActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userActions */ "./redux/actions/userActions.js");

const getTokerAction = token => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["GET_TOKEN"],
    token,
    loading: true
  };
};
const tokenReceived = tokenRec => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["TOKEN_RECEIVED"],
    tokenRec
  };
};
const tokenRecFailed = error => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["TOKEN_RECEIVED_FAILED"],
    error
  };
};
const loginUserAction = user => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_REQUEST"],
    user,
    loading: true
  };
};
const loginSuccess = user => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_SUCCESS"],
    user,
    loading: false
  };
};
const loginFailed = error => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_FAIL"],
    error,
    loading: false
  };
};
const logout = () => {
  localStorage.removeItem('userInfo');
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGOUT"]
  };
};
const verifyEmail = email => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_EMAIL"],
    email,
    loading: true
  };
};
const verifyEmailSuccess = email => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_EMAIL_SUCCESS"],
    email,
    loading: false
  };
};
const verifyEmailFailed = error => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_EMAIL_FAIL"],
    error,
    loading: false
  };
};
const verifyOTP = otp => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["CONFIRM_OTP"],
    otp,
    loading: true
  };
};
const verifyOTPSuccess = otp => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["CONFIRM_OTP_SUCCESS"],
    otp,
    loading: false
  };
};
const verifyOtpFailed = error => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["OTP_CONFIRMATION_FAIL"],
    error
  };
};
const setPass = password => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["SET_PASSWORD"],
    password,
    loading: true
  };
};
const setPassSuccess = password => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["SET_PASSWORD_SUCCESS"],
    password,
    loading: false
  };
};
const setPasswordFailed = error => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["SET_PASSWORD_FAIL"],
    error
  };
};
const updatePassword = password => {
  return {
    type: _userActions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PASSWORD"],
    password
  };
};

/***/ }),

/***/ "./redux/actions/flightActions.js":
/*!****************************************!*\
  !*** ./redux/actions/flightActions.js ***!
  \****************************************/
/*! exports provided: REQUEST_FLIGHT_DATA, RECIEVE_FLIGHT_DATA, FLIGHT_SEARCH_FAILED, FLIGHT_REVALIDATE, REC_FLIGHT_VALIDATION, FLIGHT_NOT_VALID, CREATE_PNR, PNR_CREATED, PNR_CREATION_FAILED, SAVE_BOOKING, SAVE_BOOKING_FAILED, BOOKING_SAVED, GET_SAVE_BOOKING, GET_SAVE_BOOKING_FAILED, SAVED_BOOKING_RECEIVED, requestFlightData, getFlightData, requestFlightFailed, requestFLightValidation, flightISValid, flightNotValid, createPNR, pnrCreated, pnrCreationFailed, saveBookingAction, bookingSavedd, saveBookingFailed, getSavedBooking, savedBookingRec, getSavedBookingFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_FLIGHT_DATA", function() { return REQUEST_FLIGHT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECIEVE_FLIGHT_DATA", function() { return RECIEVE_FLIGHT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIGHT_SEARCH_FAILED", function() { return FLIGHT_SEARCH_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIGHT_REVALIDATE", function() { return FLIGHT_REVALIDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REC_FLIGHT_VALIDATION", function() { return REC_FLIGHT_VALIDATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLIGHT_NOT_VALID", function() { return FLIGHT_NOT_VALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PNR", function() { return CREATE_PNR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PNR_CREATED", function() { return PNR_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PNR_CREATION_FAILED", function() { return PNR_CREATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_BOOKING", function() { return SAVE_BOOKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_BOOKING_FAILED", function() { return SAVE_BOOKING_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKING_SAVED", function() { return BOOKING_SAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SAVE_BOOKING", function() { return GET_SAVE_BOOKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SAVE_BOOKING_FAILED", function() { return GET_SAVE_BOOKING_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_BOOKING_RECEIVED", function() { return SAVED_BOOKING_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestFlightData", function() { return requestFlightData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlightData", function() { return getFlightData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestFlightFailed", function() { return requestFlightFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestFLightValidation", function() { return requestFLightValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightISValid", function() { return flightISValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightNotValid", function() { return flightNotValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPNR", function() { return createPNR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pnrCreated", function() { return pnrCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pnrCreationFailed", function() { return pnrCreationFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBookingAction", function() { return saveBookingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingSavedd", function() { return bookingSavedd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBookingFailed", function() { return saveBookingFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedBooking", function() { return getSavedBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savedBookingRec", function() { return savedBookingRec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedBookingFailed", function() { return getSavedBookingFailed; });
const REQUEST_FLIGHT_DATA = 'REQUEST_FLIGHT_DATA';
const RECIEVE_FLIGHT_DATA = 'RECEIVE_FLIGHT_DATA';
const FLIGHT_SEARCH_FAILED = 'FLIGHT_SEARCH_FAIL';
const FLIGHT_REVALIDATE = 'FLIGHT_REVALIDATE';
const REC_FLIGHT_VALIDATION = 'REC_FLIGHT_VALIDATION';
const FLIGHT_NOT_VALID = 'FLIGHT_NOT_VALID';
const CREATE_PNR = 'CREATE_PNR';
const PNR_CREATED = 'PNR_CREATED';
const PNR_CREATION_FAILED = 'PNR_CREATION_FAILED';
const SAVE_BOOKING = 'SAVE_BOOKING';
const SAVE_BOOKING_FAILED = 'SAVE_BOOKING_FAILED';
const BOOKING_SAVED = 'BOOKING_SAVED';
const GET_SAVE_BOOKING = 'GET_SAVE_BOOKING';
const GET_SAVE_BOOKING_FAILED = 'GET_SAVE_BOOKING_FAILED';
const SAVED_BOOKING_RECEIVED = 'SAVED_BOOKING_RECEIVED';
const requestFlightData = data => ({
  type: REQUEST_FLIGHT_DATA,
  data,
  loading: true
});
const getFlightData = data => {
  return {
    type: RECIEVE_FLIGHT_DATA,
    data
  };
};
const requestFlightFailed = error => {
  return {
    type: FLIGHT_SEARCH_FAILED,
    error
  };
};
const requestFLightValidation = flightData => {
  return {
    type: FLIGHT_REVALIDATE,
    flightData
  };
};
const flightISValid = validation => {
  return {
    type: REC_FLIGHT_VALIDATION,
    validation
  };
};
const flightNotValid = error => {
  return {
    type: FLIGHT_NOT_VALID,
    error
  };
};
const createPNR = pnrRequest => {
  return {
    type: CREATE_PNR,
    pnrRequest,
    loading: true
  };
};
const pnrCreated = created => {
  return {
    type: PNR_CREATED,
    created,
    loading: false
  };
};
const pnrCreationFailed = error => {
  return {
    type: PNR_CREATION_FAILED,
    error,
    loading: false
  };
};
const saveBookingAction = saveBooking => {
  return {
    type: SAVE_BOOKING,
    saveBooking
  };
};
const bookingSavedd = bookingSaved => {
  return {
    type: BOOKING_SAVED,
    bookingSaved
  };
};
const saveBookingFailed = error => {
  return {
    type: SAVE_BOOKING_FAILED,
    error,
    loading: false
  };
};
const getSavedBooking = bookingMail => {
  return {
    type: GET_SAVE_BOOKING,
    bookingMail,
    loading: true
  };
};
const savedBookingRec = savedBookingRec => {
  return {
    type: SAVED_BOOKING_RECEIVED,
    savedBookingRec,
    loading: false
  };
};
const getSavedBookingFailed = error => {
  return {
    type: GET_SAVE_BOOKING_FAILED,
    error,
    loading: false
  };
};

/***/ }),

/***/ "./redux/actions/offersActions.js":
/*!****************************************!*\
  !*** ./redux/actions/offersActions.js ***!
  \****************************************/
/*! exports provided: CREATE_OFFER, CREATED_OFFER_SUCCESSFUL, READ_OFFER, OFFERS_RECEIVED, UPDATE_OFFER, UPDATED_OFFER_SUCCESFUL, DELETE_OFFER, DELETE_OFFER_SUCCESSFUL, readOfferAction, offersRec, createOfferAction, offerCreatedSuccess, updateOfferAction, updateOfferSuccess, deleteOfferAction, deleteOfferSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_OFFER", function() { return CREATE_OFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED_OFFER_SUCCESSFUL", function() { return CREATED_OFFER_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READ_OFFER", function() { return READ_OFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFFERS_RECEIVED", function() { return OFFERS_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_OFFER", function() { return UPDATE_OFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATED_OFFER_SUCCESFUL", function() { return UPDATED_OFFER_SUCCESFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_OFFER", function() { return DELETE_OFFER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_OFFER_SUCCESSFUL", function() { return DELETE_OFFER_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readOfferAction", function() { return readOfferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offersRec", function() { return offersRec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOfferAction", function() { return createOfferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerCreatedSuccess", function() { return offerCreatedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOfferAction", function() { return updateOfferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOfferSuccess", function() { return updateOfferSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOfferAction", function() { return deleteOfferAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOfferSuccess", function() { return deleteOfferSuccess; });
const CREATE_OFFER = 'CREATE_OFFER';
const CREATED_OFFER_SUCCESSFUL = 'CREATE_OFFER_SUCCESSFUL';
const READ_OFFER = 'READ_OFFER';
const OFFERS_RECEIVED = 'OFFERS_RECEIVED';
const UPDATE_OFFER = 'UPDATE_OFFER';
const UPDATED_OFFER_SUCCESFUL = 'UPDATED_OFFER_SUCCESSFUL';
const DELETE_OFFER = 'DELETE-OFFER';
const DELETE_OFFER_SUCCESSFUL = 'DELETE_OFFER_SUCCESFUL';
const readOfferAction = () => {
  return {
    type: READ_OFFER,
    loading: true
  };
};
const offersRec = offer => {
  return {
    type: OFFERS_RECEIVED,
    offer,
    loading: false
  };
};
const createOfferAction = offer => {
  return {
    type: CREATE_OFFER,
    offer,
    loading: true
  };
};
const offerCreatedSuccess = offerCreated => {
  return {
    type: CREATED_OFFER_SUCCESSFUL,
    offerCreated,
    loading: false
  };
};
const updateOfferAction = offerUpdateId => {
  return {
    type: UPDATE_OFFER,
    offerUpdateId,
    loading: true
  };
};
const updateOfferSuccess = offerUpdatedSuccess => {
  return {
    type: UPDATED_OFFER_SUCCESFUL,
    offerUpdatedSuccess,
    loading: false
  };
};
const deleteOfferAction = offerId => {
  return {
    type: DELETE_OFFER,
    offerId,
    loading: true
  };
};
const deleteOfferSuccess = deleteOffer => {
  return {
    type: DELETE_OFFER_SUCCESSFUL,
    deleteOffer,
    loading: false
  };
};

/***/ }),

/***/ "./redux/actions/packagesAction.js":
/*!*****************************************!*\
  !*** ./redux/actions/packagesAction.js ***!
  \*****************************************/
/*! exports provided: CREATE_PACKAGES, PACKAGE_CREATED, PACKAGE_CREATION_FAILED, READ_PACKAGES, PACKAGES_RECEIVED, PACKAGES_RECEIVED_FAILED, UPDATE_PACKAGES, UPDATE_PACKAGE_SUCCESSFUL, UPDATE_PACKAGE_FAILED, DELETE_PACKAGES, DELETE_PACKAGES_SUCCESS, DELETE_PACKAGES_FAILED, readPackageAction, packageRec, packageRecFailed, createPackageAction, createPackageSuccess, packageCreationFailed, updatePackageAction, updatePackageSuccess, updatePackageFailed, deletePackgeAction, deletePackgeSucces, deletePackageFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_PACKAGES", function() { return CREATE_PACKAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_CREATED", function() { return PACKAGE_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGE_CREATION_FAILED", function() { return PACKAGE_CREATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READ_PACKAGES", function() { return READ_PACKAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGES_RECEIVED", function() { return PACKAGES_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PACKAGES_RECEIVED_FAILED", function() { return PACKAGES_RECEIVED_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PACKAGES", function() { return UPDATE_PACKAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PACKAGE_SUCCESSFUL", function() { return UPDATE_PACKAGE_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PACKAGE_FAILED", function() { return UPDATE_PACKAGE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PACKAGES", function() { return DELETE_PACKAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PACKAGES_SUCCESS", function() { return DELETE_PACKAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PACKAGES_FAILED", function() { return DELETE_PACKAGES_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPackageAction", function() { return readPackageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageRec", function() { return packageRec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageRecFailed", function() { return packageRecFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPackageAction", function() { return createPackageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPackageSuccess", function() { return createPackageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageCreationFailed", function() { return packageCreationFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePackageAction", function() { return updatePackageAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePackageSuccess", function() { return updatePackageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePackageFailed", function() { return updatePackageFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePackgeAction", function() { return deletePackgeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePackgeSucces", function() { return deletePackgeSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePackageFailed", function() { return deletePackageFailed; });
const CREATE_PACKAGES = 'CREATE_PACKAGES';
const PACKAGE_CREATED = 'PACKAGE_CREATED';
const PACKAGE_CREATION_FAILED = 'PACKAGE_CREATION_FAILED';
const READ_PACKAGES = 'READ_PACKAGES';
const PACKAGES_RECEIVED = 'PACKAGES_RECEIVED';
const PACKAGES_RECEIVED_FAILED = 'PACKAGES_RECEIVED_FAILED';
const UPDATE_PACKAGES = 'UPDATE_PACKAGES';
const UPDATE_PACKAGE_SUCCESSFUL = 'UPDATE_PACKAGE_SUCCESSFUL';
const UPDATE_PACKAGE_FAILED = 'UPDATE_PACKAGE_FAILED';
const DELETE_PACKAGES = 'DELETE_PACKAGES';
const DELETE_PACKAGES_SUCCESS = 'DELETE_PACKAGE_SUCCESS';
const DELETE_PACKAGES_FAILED = 'DELETE_PACKAGE_FAILED';
const readPackageAction = () => {
  return {
    type: READ_PACKAGES,
    loading: true
  };
};
const packageRec = packagge => {
  return {
    type: PACKAGES_RECEIVED,
    packagge,
    loading: false
  };
};
const packageRecFailed = error => {
  return {
    type: PACKAGES_RECEIVED_FAILED,
    error,
    loading: false
  };
};
const createPackageAction = createPackage => {
  return {
    type: CREATE_PACKAGES,
    createPackage,
    loading: true
  };
};
const createPackageSuccess = packageCreated => {
  return {
    type: PACKAGE_CREATED,
    packageCreated,
    loading: false
  };
};
const packageCreationFailed = error => {
  return {
    type: PACKAGE_CREATION_FAILED,
    error,
    loading: false
  };
};
const updatePackageAction = updatePackageId => {
  return {
    type: UPDATE_PACKAGES,
    updatePackageId,
    loading: true
  };
};
const updatePackageSuccess = packageUpdateSuccess => {
  return {
    type: UPDATED_PACKAGE_SUCCESFUL,
    packageUpdateSuccess,
    loading: false
  };
};
const updatePackageFailed = error => {
  return {
    type: UPDATE_PACKAGE_FAILED,
    error,
    loading: false
  };
};
const deletePackgeAction = packageID => {
  return {
    type: DELETE_PACKAGES,
    packageID,
    loading: true
  };
};
const deletePackgeSucces = delPackageSuccess => {
  return {
    type: DELETE_PACKAGES_SUCCESS,
    delPackageSuccess,
    loading: false
  };
};
const deletePackageFailed = error => {
  return {
    type: DELETE_PACKAGES_FAILED,
    error,
    loading: false
  };
};

/***/ }),

/***/ "./redux/actions/userActions.js":
/*!**************************************!*\
  !*** ./redux/actions/userActions.js ***!
  \**************************************/
/*! exports provided: GET_TOKEN, TOKEN_RECEIVED, TOKEN_RECEIVED_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, VERIFY_EMAIL, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_FAIL, CONFIRM_OTP, CONFIRM_OTP_SUCCESS, OTP_CONFIRMATION_FAIL, SET_PASSWORD, SET_PASSWORD_SUCCESS, SET_PASSWORD_FAIL, UPDATE_PASSWORD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TOKEN", function() { return GET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_RECEIVED", function() { return TOKEN_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_RECEIVED_FAILED", function() { return TOKEN_RECEIVED_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_REQUEST", function() { return USER_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_SUCCESS", function() { return USER_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGIN_FAIL", function() { return USER_LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REGISTER_REQUEST", function() { return USER_REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REGISTER_SUCCESS", function() { return USER_REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REGISTER_FAIL", function() { return USER_REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_EMAIL", function() { return VERIFY_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_EMAIL_SUCCESS", function() { return VERIFY_EMAIL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERIFY_EMAIL_FAIL", function() { return VERIFY_EMAIL_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_OTP", function() { return CONFIRM_OTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM_OTP_SUCCESS", function() { return CONFIRM_OTP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTP_CONFIRMATION_FAIL", function() { return OTP_CONFIRMATION_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD", function() { return SET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_SUCCESS", function() { return SET_PASSWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PASSWORD_FAIL", function() { return SET_PASSWORD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PASSWORD", function() { return UPDATE_PASSWORD; });
const GET_TOKEN = 'GET_TOKEN';
const TOKEN_RECEIVED = 'TOKEN_RECEIVED';
const TOKEN_RECEIVED_FAILED = 'TOKEN_RECEIVED_FAILED';
const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
const VERIFY_EMAIL = 'VERIFY_EMAIL';
const VERIFY_EMAIL_SUCCESS = 'VERIFY_EMAIL_SUCCESS';
const VERIFY_EMAIL_FAIL = 'VERIFY_EMAIL_FAIL';
const CONFIRM_OTP = 'CONFIRM_OTP';
const CONFIRM_OTP_SUCCESS = 'CONFIRM_OTP_SUCCESS';
const OTP_CONFIRMATION_FAIL = 'OTP_CONFIRMATION_FAIL';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_PASSWORD_SUCCESS = 'SET_PASSWORD_SUCCESS';
const SET_PASSWORD_FAIL = 'SET_PASSWORD_FAIL';
const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

/***/ }),

/***/ "./redux/reducers/flightReducer.js":
/*!*****************************************!*\
  !*** ./redux/reducers/flightReducer.js ***!
  \*****************************************/
/*! exports provided: fligthSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fligthSearch", function() { return fligthSearch; });
/* harmony import */ var _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/flightActions */ "./redux/actions/flightActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const fligthSearch = (state = {}, action) => {
  let response = action;

  switch (action.type) {
    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["REQUEST_FLIGHT_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchData: action.data,
        loading: true
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["RECIEVE_FLIGHT_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        response,
        loading: false
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["FLIGHT_SEARCH_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        response,
        loading: false
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["FLIGHT_REVALIDATE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        validation: action.flightData
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["REC_FLIGHT_VALIDATION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        res: action
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["FLIGHT_NOT_VALID"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        res: action,
        error
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["CREATE_PNR"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        pnrRequest: action.pnrRequest,
        loading: true
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["PNR_CREATED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        created: action,
        loading: false
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["PNR_CREATION_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action,
        loading: false
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["SAVE_BOOKING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        saveBooking: action.saveBooking
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["BOOKING_SAVED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookingSaved: action
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["SAVE_BOOKING_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action,
        loading: false
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["GET_SAVE_BOOKING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookingMail: action.bookingMail,
        loading: true
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["SAVED_BOOKING_RECEIVED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        savedBookingRec: action,
        loading: false
      });

    case _actions_flightActions__WEBPACK_IMPORTED_MODULE_0__["GET_SAVE_BOOKING_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action,
        loading: false
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducers/offerReducer.js":
/*!****************************************!*\
  !*** ./redux/reducers/offerReducer.js ***!
  \****************************************/
/*! exports provided: offerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerReducer", function() { return offerReducer; });
/* harmony import */ var _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/offersActions */ "./redux/actions/offersActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false
};
const offerReducer = (state = initialState, action) => {
  var _state$offer, _state$offer$offer;

  let offer = action;

  switch (action.type) {
    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["CREATE_OFFER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["CREATED_OFFER_SUCCESSFUL"]:
      console.log('stateee and offer  ', state, offer);
      return _objectSpread(_objectSpread({}, state), {}, {
        offer: _objectSpread(_objectSpread({}, state.offer), {}, {
          offer: [...state.offer.offer, offer.offerCreated]
        }),
        loading: false
      });

    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["READ_OFFER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        offer,
        loading: true
      });

    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["OFFERS_RECEIVED"]:
      console.log('read offer stateee', state);
      return _objectSpread(_objectSpread({}, state), {}, {
        offer,
        loading: false
      });

    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_OFFER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        offer,
        loading: true
      });

    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["UPDATED_OFFER_SUCCESFUL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        offer,
        loading: false
      });

    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_OFFER"]:
      const newOffer = state === null || state === void 0 ? void 0 : (_state$offer = state.offer) === null || _state$offer === void 0 ? void 0 : (_state$offer$offer = _state$offer.offer) === null || _state$offer$offer === void 0 ? void 0 : _state$offer$offer.filter(offerr => {
        var _action$offerId;

        return offerr._id !== ((_action$offerId = action.offerId) === null || _action$offerId === void 0 ? void 0 : _action$offerId._id);
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        newOffer
      });

    case _actions_offersActions__WEBPACK_IMPORTED_MODULE_0__["DELETE_OFFER_SUCCESSFUL"]:
      const offerArray = state === null || state === void 0 ? void 0 : state.newOffer;
      return _objectSpread(_objectSpread({}, state), {}, {
        offer: {
          offer: offerArray
        }
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducers/packagesReducer.js":
/*!*******************************************!*\
  !*** ./redux/reducers/packagesReducer.js ***!
  \*******************************************/
/*! exports provided: packagesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packagesReducer", function() { return packagesReducer; });
/* harmony import */ var _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/packagesAction */ "./redux/actions/packagesAction.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const packagesReducer = (state = {}, action) => {
  let packages = action;

  switch (action.type) {
    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["READ_PACKAGES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        packages,
        loading: true
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["PACKAGES_RECEIVED"]:
      console.log('read packages stateee', state);
      return _objectSpread(_objectSpread({}, state), {}, {
        packages,
        loading: false
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["PACKAGES_RECEIVED_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error,
        loading: false
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["CREATE_PACKAGES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        createPackage: action,
        loading: true
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["PACKAGE_CREATED"]:
      console.log('stateee and packages  ', state, packages);
      return _objectSpread(_objectSpread({}, state), {}, {
        packages: _objectSpread(_objectSpread({}, state.packages), {}, {
          packagge: [...state.packages.packagge, packages.packageCreated]
        }),
        loading: false
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["PACKAGE_CREATION_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action,
        loading: false
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["DELETE_PACKAGES"]:
      const newPackage = state.packages.packagge.filter(pack => {
        var _action$packageID;

        return pack._id !== ((_action$packageID = action.packageID) === null || _action$packageID === void 0 ? void 0 : _action$packageID._id);
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        newPackage
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["DELETE_PACKAGES_SUCCESS"]:
      const packArray = state === null || state === void 0 ? void 0 : state.newPackage;
      return _objectSpread(_objectSpread({}, state), {}, {
        packages: {
          packagge: packArray
        }
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["DELETE_PACKAGES_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PACKAGES"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        packages
      });

    case _actions_packagesAction__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PACKAGE_SUCCESSFUL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        packages
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducers/reducer.js":
/*!***********************************!*\
  !*** ./redux/reducers/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _flightReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flightReducer */ "./redux/reducers/flightReducer.js");
/* harmony import */ var _offerReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offerReducer */ "./redux/reducers/offerReducer.js");
/* harmony import */ var _packagesReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packagesReducer */ "./redux/reducers/packagesReducer.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userReducer */ "./redux/reducers/userReducer.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  authReducer: _userReducer__WEBPACK_IMPORTED_MODULE_4__["authReducer"],
  userLogin: _userReducer__WEBPACK_IMPORTED_MODULE_4__["userLoginReducer"],
  verification: _userReducer__WEBPACK_IMPORTED_MODULE_4__["verifyUser"],
  offersReducer: _offerReducer__WEBPACK_IMPORTED_MODULE_2__["offerReducer"],
  flightData: _flightReducer__WEBPACK_IMPORTED_MODULE_1__["fligthSearch"],
  packagesReducer: _packagesReducer__WEBPACK_IMPORTED_MODULE_3__["packagesReducer"]
}));

/***/ }),

/***/ "./redux/reducers/userReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/userReducer.js ***!
  \***************************************/
/*! exports provided: authReducer, userLoginReducer, verifyUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLoginReducer", function() { return userLoginReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyUser", function() { return verifyUser; });
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/userActions */ "./redux/actions/userActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const authReducer = (state = {}, action) => {
  let responseToken = action;

  switch (action.type) {
    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["GET_TOKEN"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["TOKEN_RECEIVED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        responseToken,
        loading: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["TOKEN_RECEIVED_FAILED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: responseToken.error,
        loading: false
      });

    default:
      return state;
  }
};
const userLoginReducer = (state = {}, action) => {
  let response = action;

  switch (action.type) {
    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_REQUEST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_SUCCESS"]:
      return _objectSpread(_objectSpread(_objectSpread({}, state), response.user), {}, {
        loading: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGIN_FAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: response === null || response === void 0 ? void 0 : response.error,
        loading: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["USER_LOGOUT"]:
      return {};

    default:
      return state;
  }
};
const verifyUser = (state = {}, action) => {
  let responsee = action;

  switch (action.type) {
    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_EMAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        responsee,
        loading: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_EMAIL_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        responsee,
        loading: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["VERIFY_EMAIL_FAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: responsee === null || responsee === void 0 ? void 0 : responsee.error,
        loading: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["CONFIRM_OTP"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        responsee,
        loading: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["CONFIRM_OTP_SUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        responsee,
        loading: false
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["OTP_CONFIRMATION_FAIL"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: responsee.error,
          loading: false
        });
      }

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["SET_PASSWORD"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        responsee,
        loading: true
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["SET_PASSWORD_SUCCESS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          responsee,
          loading: false
        });
      }

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["SET_PASSWORD_FAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: responsee.error
      });

    case _actions_userActions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PASSWORD"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        responsee
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/sagas/flightSaga.js":
/*!***********************************!*\
  !*** ./redux/sagas/flightSaga.js ***!
  \***********************************/
/*! exports provided: flightSaga, flightValidation, pnrCreation, bookingCreation, getSavedBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightSaga", function() { return flightSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightValidation", function() { return flightValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pnrCreation", function() { return pnrCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingCreation", function() { return bookingCreation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSavedBooking", function() { return getSavedBooking; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_flightService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/flightService */ "./redux/services/flightService.js");
/* harmony import */ var _actions_flightActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/flightActions */ "./redux/actions/flightActions.js");



function* flightSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_flightService__WEBPACK_IMPORTED_MODULE_1__["getFlightService"], payload);
    const data = response;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["getFlightData"])(data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["requestFlightFailed"])(error));
  }
}
function* flightValidation(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_flightService__WEBPACK_IMPORTED_MODULE_1__["checkFlightValidation"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["flightISValid"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["flightNotValid"])(error));
  }
}
function* pnrCreation(payload) {
  console.log(payload);

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_flightService__WEBPACK_IMPORTED_MODULE_1__["createPnrService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["pnrCreated"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["pnrCreationFailed"])(error.message));
  }
}
function* bookingCreation(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_flightService__WEBPACK_IMPORTED_MODULE_1__["createBookingService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["bookingSavedd"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["saveBookingFailed"])(error.message));
  }
}
function* getSavedBooking(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_flightService__WEBPACK_IMPORTED_MODULE_1__["getBookingService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["savedBookingRec"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["getSavedBookingFailed"])(error));
  }
}

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startForman; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _watchers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watchers */ "./redux/sagas/watchers.js");
//in this file we import our saga.js


function* startForman() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_watchers__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./redux/sagas/offersSaga.js":
/*!***********************************!*\
  !*** ./redux/sagas/offersSaga.js ***!
  \***********************************/
/*! exports provided: offersSaga, createOfferSaga, deleteOfferSaga, updateOfferSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offersSaga", function() { return offersSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOfferSaga", function() { return createOfferSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOfferSaga", function() { return deleteOfferSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOfferSaga", function() { return updateOfferSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_offersActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/offersActions */ "./redux/actions/offersActions.js");
/* harmony import */ var _services_offerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/offerService */ "./redux/services/offerService.js");



function* offersSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_offerService__WEBPACK_IMPORTED_MODULE_2__["getoffersService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_offersActions__WEBPACK_IMPORTED_MODULE_1__["offersRec"])(response));
  } catch (error) {
    return error;
  }
}
function* createOfferSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_offerService__WEBPACK_IMPORTED_MODULE_2__["createOfferSerive"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_offersActions__WEBPACK_IMPORTED_MODULE_1__["offerCreatedSuccess"])(response));
  } catch (error) {
    return error;
  }
}
function* deleteOfferSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_offerService__WEBPACK_IMPORTED_MODULE_2__["deleteOfferSerive"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_offersActions__WEBPACK_IMPORTED_MODULE_1__["deleteOfferSuccess"])(response));
  } catch (error) {
    console.log(error);
    return error;
  }
}
function* updateOfferSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_offerService__WEBPACK_IMPORTED_MODULE_2__["updateOfferSerive"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_offersActions__WEBPACK_IMPORTED_MODULE_1__["updateOfferSuccess"])(response));
  } catch (error) {
    return error;
  }
}

/***/ }),

/***/ "./redux/sagas/packagesSaga.js":
/*!*************************************!*\
  !*** ./redux/sagas/packagesSaga.js ***!
  \*************************************/
/*! exports provided: packageSaga, createPackageSaga, deletePackageSaga, updatePackageSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageSaga", function() { return packageSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPackageSaga", function() { return createPackageSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePackageSaga", function() { return deletePackageSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePackageSaga", function() { return updatePackageSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/packagesAction */ "./redux/actions/packagesAction.js");
/* harmony import */ var _services_packageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/packageService */ "./redux/services/packageService.js");



function* packageSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_packageService__WEBPACK_IMPORTED_MODULE_2__["getPackagesService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["packageRec"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["packageRecFailed"])(error.message));
  }
}
function* createPackageSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_packageService__WEBPACK_IMPORTED_MODULE_2__["createPackagesService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["createPackageSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["packageCreationFailed"])(error.message));
  }
}
function* deletePackageSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_packageService__WEBPACK_IMPORTED_MODULE_2__["deletePackagesService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["deletePackgeSucces"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["deletePackageFailed"])(error.message));
  }
}
function* updatePackageSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_packageService__WEBPACK_IMPORTED_MODULE_2__["updatePackagesService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["updatePackageSuccess"], response);
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_1__["updatePackageFailed"])(error));
    return error;
  }
}

/***/ }),

/***/ "./redux/sagas/userSaga.js":
/*!*********************************!*\
  !*** ./redux/sagas/userSaga.js ***!
  \*********************************/
/*! exports provided: getTokenSaga, loginSaga, verifyEmailSaga, verifyOtpSaga, setPasswordSaga, updatePasswordSaga, logOutSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenSaga", function() { return getTokenSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSaga", function() { return loginSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEmailSaga", function() { return verifyEmailSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyOtpSaga", function() { return verifyOtpSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordSaga", function() { return setPasswordSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordSaga", function() { return updatePasswordSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutSaga", function() { return logOutSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_authenticationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authenticationService */ "./redux/services/authenticationService.js");
/* harmony import */ var _actions_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/authentication */ "./redux/actions/authentication.js");
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/userActions */ "./redux/actions/userActions.js");
//this file will contain our actions, and api that gonna dispatching a reducer




function* getTokenSaga(payload) {
  try {
    const tokenRec = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_authenticationService__WEBPACK_IMPORTED_MODULE_1__["getTokenService"], payload);
    const data = tokenRec;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["tokenReceived"])(data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["tokenRecFailed"])(error));
  }
}
function* loginSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_authenticationService__WEBPACK_IMPORTED_MODULE_1__["loginUserService"], payload);
    const data = response;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])(data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _actions_userActions__WEBPACK_IMPORTED_MODULE_3__["USER_LOGIN_FAIL"],
      error
    });
  }
}
function* verifyEmailSaga(payload) {
  try {
    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_authenticationService__WEBPACK_IMPORTED_MODULE_1__["verifyEmailService"], payload);
    const data = res;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["verifyEmailSuccess"])(data));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["verifyEmailFailed"])(error));
  }
}
function* verifyOtpSaga(payload) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_authenticationService__WEBPACK_IMPORTED_MODULE_1__["verifyOtpService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["verifyOTPSuccess"])(response));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["verifyOtpFailed"])(response.error));
  }
}
function* setPasswordSaga(payload) {
  try {
    const pass = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_authenticationService__WEBPACK_IMPORTED_MODULE_1__["setPasswordService"], payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["setPassSuccess"])(pass));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["setPasswordFailed"])(error));
    return error;
  }
}
function* updatePasswordSaga(payload) {
  try {
    const updatePass = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_authenticationService__WEBPACK_IMPORTED_MODULE_1__["updatePasswordService"], payload);
    yield redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"][{
      type: _actions_userActions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_PASSWORD"],
      updatePass
    }];
  } catch (error) {
    return error;
  }
}
function* logOutSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_authentication__WEBPACK_IMPORTED_MODULE_2__["logout"])());
}

/***/ }),

/***/ "./redux/sagas/watchers.js":
/*!*********************************!*\
  !*** ./redux/sagas/watchers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return watchUserAuthentication; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/userActions */ "./redux/actions/userActions.js");
/* harmony import */ var _actions_flightActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/flightActions */ "./redux/actions/flightActions.js");
/* harmony import */ var _actions_offersActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/offersActions */ "./redux/actions/offersActions.js");
/* harmony import */ var _actions_packagesAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/packagesAction */ "./redux/actions/packagesAction.js");
/* harmony import */ var _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas/userSaga */ "./redux/sagas/userSaga.js");
/* harmony import */ var _flightSaga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightSaga */ "./redux/sagas/flightSaga.js");
/* harmony import */ var _offersSaga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offersSaga */ "./redux/sagas/offersSaga.js");
/* harmony import */ var _packagesSaga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./packagesSaga */ "./redux/sagas/packagesSaga.js");









function* watchUserAuthentication() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["GET_TOKEN"], _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__["getTokenSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGIN_REQUEST"], _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__["loginSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["REQUEST_FLIGHT_DATA"], _flightSaga__WEBPACK_IMPORTED_MODULE_6__["flightSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["FLIGHT_REVALIDATE"], _flightSaga__WEBPACK_IMPORTED_MODULE_6__["flightValidation"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["CREATE_PNR"], _flightSaga__WEBPACK_IMPORTED_MODULE_6__["pnrCreation"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["SAVE_BOOKING"], _flightSaga__WEBPACK_IMPORTED_MODULE_6__["bookingCreation"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_flightActions__WEBPACK_IMPORTED_MODULE_2__["GET_SAVE_BOOKING"], _flightSaga__WEBPACK_IMPORTED_MODULE_6__["getSavedBooking"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["VERIFY_EMAIL"], _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__["verifyEmailSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["CONFIRM_OTP"], _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__["verifyOtpSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["SET_PASSWORD"], _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__["setPasswordSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PASSWORD"], _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__["updatePasswordSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_offersActions__WEBPACK_IMPORTED_MODULE_3__["READ_OFFER"], _offersSaga__WEBPACK_IMPORTED_MODULE_7__["offersSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_4__["READ_PACKAGES"], _packagesSaga__WEBPACK_IMPORTED_MODULE_8__["packageSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_4__["CREATE_PACKAGES"], _packagesSaga__WEBPACK_IMPORTED_MODULE_8__["createPackageSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_4__["DELETE_PACKAGES"], _packagesSaga__WEBPACK_IMPORTED_MODULE_8__["deletePackageSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_packagesAction__WEBPACK_IMPORTED_MODULE_4__["UPDATE_PACKAGES"], _packagesSaga__WEBPACK_IMPORTED_MODULE_8__["updatePackageSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_offersActions__WEBPACK_IMPORTED_MODULE_3__["CREATE_OFFER"], _offersSaga__WEBPACK_IMPORTED_MODULE_7__["createOfferSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_offersActions__WEBPACK_IMPORTED_MODULE_3__["DELETE_OFFER"], _offersSaga__WEBPACK_IMPORTED_MODULE_7__["deleteOfferSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions_offersActions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_OFFER"], _offersSaga__WEBPACK_IMPORTED_MODULE_7__["updateOfferSaga"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["take"])(_actions_userActions__WEBPACK_IMPORTED_MODULE_1__["USER_LOGOUT"], _sagas_userSaga__WEBPACK_IMPORTED_MODULE_5__["logOutSaga"]);
  console.log('Hello coder from watchers!!');
}

/***/ }),

/***/ "./redux/services/authenticationService.js":
/*!*************************************************!*\
  !*** ./redux/services/authenticationService.js ***!
  \*************************************************/
/*! exports provided: getTokenService, loginUserService, verifyEmailService, verifyOtpService, setPasswordService, updatePasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenService", function() { return getTokenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserService", function() { return loginUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyEmailService", function() { return verifyEmailService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyOtpService", function() { return verifyOtpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPasswordService", function() { return setPasswordService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePasswordService", function() { return updatePasswordService; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

const getTokenService = request => {
  const GET_TOKEN_API = 'https://api-crt.cert.havail.sabre.com/v2/auth/token';
  const parameters = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${"VmpFNmRUSnhhM0YwTkdnd05UVjNiRzF3YXpwRVJWWkRSVTVVUlZJNlJWaFU6TkhSMVN6ZE5iVUU9"}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: request.token
  };

  try {
    return fetch(GET_TOKEN_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error;
  }
};
const loginUserService = request => {
  const LOGIN_USER_API = 'https://ota-structured.herokuapp.com/api/auth/login';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  try {
    return fetch(LOGIN_USER_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      localStorage.setItem('userInfo', JSON.stringify(json));
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error;
  }
};
const verifyEmailService = request => {
  const VERIFY_USER_API = 'https://ota-structured.herokuapp.com/api/auth/signup';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.email)
  };

  try {
    return fetch(VERIFY_USER_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Error from Server Response');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.msg, {
      position: 'bottom-right'
    });
    return error;
  }
};
const verifyOtpService = request => {
  const VERIFY_OTP_URL = 'https://ota-structured.herokuapp.com/api/auth/otp_ver';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.otp)
  };

  try {
    return fetch(VERIFY_OTP_URL, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Error from Server Response');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error;
  }
};
const setPasswordService = request => {
  const SET_PASSWORD_URL = 'https://ota-structured.herokuapp.com/api/auth/set_pass';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.password)
  };

  try {
    return fetch(SET_PASSWORD_URL, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Error from Server Response');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error;
  }
};
const updatePasswordService = request => {
  const UPDATE_PASSWORD_URL = 'https://ota-structured.herokuapp.com/api/auth/up_pass';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.password)
  };

  try {
    return fetch(UPDATE_PASSWORD_URL, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Error from Server Response');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error;
  }
};

/***/ }),

/***/ "./redux/services/authentication_model.js":
/*!************************************************!*\
  !*** ./redux/services/authentication_model.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthenticationModel {
  constructor(params) {
    this.secret = params.secret;
    this.apiEndPoint = params.apiEndPoint;
  }

  get accessToken() {
    return this.response.access_token;
  }

  async readRequest(getFlights) {
    try {
      const parameters = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          authorization: `Basic ${this.secret}`
        },
        body: _qs.default.stringify({
          grant_type: 'client_credentials'
        })
      };
      return await fetch(`${this.apiEndPoint}/v2/auth/token`, parameters).then(res => res.json()).then(json => {
        return getFlights(json.access_token);
      }); // this.response = JSON.parse(response)
    } catch (error) {
      console.log(`Authentication response error ${error.statusCode}`);
      console.log(JSON.parse(error.error));
    }
  }

}

module.exports = AuthenticationModel;

/***/ }),

/***/ "./redux/services/flightService.js":
/*!*****************************************!*\
  !*** ./redux/services/flightService.js ***!
  \*****************************************/
/*! exports provided: getFlightService, checkFlightValidation, createPnrService, createBookingService, getBookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlightService", function() { return getFlightService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFlightValidation", function() { return checkFlightValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPnrService", function() { return createPnrService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBookingService", function() { return createBookingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookingService", function() { return getBookingService; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);


const AuthenticationModel = __webpack_require__(/*! ./authentication_model */ "./redux/services/authentication_model.js");

const getFlightService = async request => {
  const FLIGHT_SEARCH_API = `https://api-crt.cert.havail.sabre.com/v4.2.0/shop/flights?mode=live`;
  const authModel = new AuthenticationModel({
    apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
    secret: "VmpFNmRUSnhhM0YwTkdnd05UVjNiRzF3YXpwRVJWWkRSVTVVUlZJNlJWaFU6TkhSMVN6ZE5iVUU9"
  });
  const abc = await authModel.readRequest(async accessToken => {
    const parameters = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.data.dataa)
    };
    return await fetch(FLIGHT_SEARCH_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error(`Server responsed with Error ${response.status}`);
      }

      return response.json();
    }).then(json => {
      return json;
    }).catch(error => {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
        position: 'bottom-right'
      });
      return error.message;
    });
  });
  return abc;
};
const checkFlightValidation = async request => {
  const CHECK_VALIDATION = 'https://api-crt.cert.havail.sabre.com/v4/shop/flights/revalidate';
  const authModel = new AuthenticationModel({
    apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
    secret: "VmpFNmRUSnhhM0YwTkdnd05UVjNiRzF3YXpwRVJWWkRSVTVVUlZJNlJWaFU6TkhSMVN6ZE5iVUU9"
  });
  const flightVal = await authModel.readRequest(async accessToken => {
    const parameters = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.flightData)
    };
    return await fetch(CHECK_VALIDATION, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error(`Server responsed with Error ${response.status}`);
      }

      return response.json();
    }).then(json => {
      return json;
    }).catch(error => {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
        position: 'bottom-right'
      });
      return error.message;
    });
  });
  return flightVal;
};
const createPnrService = async request => {
  const CREATE_PNR = 'https://api-crt.cert.havail.sabre.com/v2.4.0/passenger/records?mode=create';
  const authModel = new AuthenticationModel({
    apiEndPoint: 'https://api-crt.cert.havail.sabre.com',
    secret: "VmpFNmRUSnhhM0YwTkdnd05UVjNiRzF3YXpwRVJWWkRSVTVVUlZJNlJWaFU6TkhSMVN6ZE5iVUU9"
  });
  const pnr = await authModel.readRequest(async accessToken => {
    const parameters = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.pnrRequest)
    };
    return await fetch(CREATE_PNR, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error(`Server responsed with Error ${response.status}`);
      }

      return response.json();
    }).then(json => {
      return json;
    }).catch(error => {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
        position: 'bottom-right'
      });
      return error.message;
    });
  });
  return pnr;
};
const createBookingService = request => {
  const SAVE_BOOKING_API = `https://ota-structured.herokuapp.com/api/booking/save_booking`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.saveBooking)
  };

  try {
    return fetch(SAVE_BOOKING_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    return error;
  }
};
const getBookingService = request => {
  const GET_BOOKING_API = `https://ota-structured.herokuapp.com/api/booking/get_booking`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.bookingMail)
  };

  try {
    return fetch(GET_BOOKING_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    return error;
  }
};

/***/ }),

/***/ "./redux/services/offerService.js":
/*!****************************************!*\
  !*** ./redux/services/offerService.js ***!
  \****************************************/
/*! exports provided: getoffersService, createOfferSerive, deleteOfferSerive, updateOfferSerive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getoffersService", function() { return getoffersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOfferSerive", function() { return createOfferSerive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOfferSerive", function() { return deleteOfferSerive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOfferSerive", function() { return updateOfferSerive; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

const getoffersService = () => {
  const GET_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/read_offer`;
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    return fetch(GET_OFFER_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    return error;
  }
};
const createOfferSerive = request => {
  const CREATE_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/create_offer`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.offer)
  };

  try {
    return fetch(CREATE_OFFER_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    return error;
  }
};
const deleteOfferSerive = request => {
  const DELETE_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/delete_offer`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.offerId)
  };

  try {
    return fetch(DELETE_OFFER_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(json.msg, {
        position: 'bottom-right'
      });
      return json;
    });
  } catch (error) {
    return error;
  }
};
const updateOfferSerive = request => {
  const UPDATE_OFFER_API = `https://ota-structured.herokuapp.com/api/offer/update_offer`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.offerUpdateId)
  };

  try {
    return fetch(UPDATE_OFFER_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(json.msg, {
        position: 'bottom-right'
      });
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error.message;
  }
};

/***/ }),

/***/ "./redux/services/packageService.js":
/*!******************************************!*\
  !*** ./redux/services/packageService.js ***!
  \******************************************/
/*! exports provided: getPackagesService, createPackagesService, deletePackagesService, updatePackagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPackagesService", function() { return getPackagesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPackagesService", function() { return createPackagesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePackagesService", function() { return deletePackagesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePackagesService", function() { return updatePackagesService; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);

const getPackagesService = () => {
  const GET_PACKAGES_API = `https://ota-structured.herokuapp.com/api/package/read_pack`;
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    return fetch(GET_PACKAGES_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error.message;
  }
};
const createPackagesService = request => {
  const CREATE_PACKAGE_API = `https://ota-structured.herokuapp.com/api/package/create_pack`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.createPackage)
  };

  try {
    return fetch(CREATE_PACKAGE_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error.message;
  }
};
const deletePackagesService = request => {
  const DELETE_PACKAGE_API = `https://ota-structured.herokuapp.com/api/package/delete_pack`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.packageID)
  };

  try {
    return fetch(DELETE_PACKAGE_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(json.msg, {
        position: 'bottom-right'
      });
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error.message;
  }
};
const updatePackagesService = request => {
  const UPDATE_PACKAGE_API = `https://ota-structured.herokuapp.com/api/package/update_pack`;
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.updatePackageId)
  };

  try {
    return fetch(UPDATE_PACKAGE_API, parameters).then(response => {
      if (response.status >= 300) {
        throw new Error('Server response with Error');
      }

      return response.json();
    }).then(json => {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success(json.msg, {
        position: 'bottom-right'
      });
      return json;
    });
  } catch (error) {
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(error.message, {
      position: 'bottom-right'
    });
    return error.message;
  }
};

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_sagas_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/sagas/index */ "./redux/sagas/index.js");
/* harmony import */ var _redux_reducers_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/reducer */ "./redux/reducers/reducer.js");






let userLoggedIn;

if (false) {}

const initialState = {
  userLogin: userLoggedIn
};
const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_reducers_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));
sagaMiddleware.run(_redux_sagas_index__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./styles/DropDown.css":
/*!*****************************!*\
  !*** ./styles/DropDown.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9Qcm90ZWN0ZWRSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9hdXRoZW50aWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL2ZsaWdodEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy9vZmZlcnNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvcGFja2FnZXNBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9mbGlnaHRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL29mZmVyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9wYWNrYWdlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy9mbGlnaHRTYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL29mZmVyc1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvcGFja2FnZXNTYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3VzZXJTYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NhZ2FzL3dhdGNoZXJzLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbl9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zZXJ2aWNlcy9mbGlnaHRTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3NlcnZpY2VzL29mZmVyU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zZXJ2aWNlcy9wYWNrYWdlU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInFzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJjb2xvciIsIk5hdkJhciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXJMb2dpbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyUmVkdXgiLCJFbWFpbCIsInVzZXIiLCJpc0FjdGl2ZSIsInJvdXRlIiwicGF0aG5hbWUiLCJhY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwcmVmZXRjaGVkIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJkYXRhIiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsInNob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJtZXRob2QiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiTXlBcHAiLCJyb3V0ZXIxIiwibm9OYXYiLCJzdG9yZSIsImluY2x1ZGVzIiwiaXNCcm93c2VyIiwiUHJvdGVjdGVkUm91dGVzIiwiaXNBdXRoZW50aWNhdGVkIiwidW5wcm90ZWN0ZWRSb3V0ZXMiLCJwYXRoSXNQcm90ZWN0ZWQiLCJpbmRleE9mIiwiZ2V0VG9rZXJBY3Rpb24iLCJ0b2tlbiIsInR5cGUiLCJ0eXBlcyIsImxvYWRpbmciLCJ0b2tlblJlY2VpdmVkIiwidG9rZW5SZWMiLCJ0b2tlblJlY0ZhaWxlZCIsImxvZ2luVXNlckFjdGlvbiIsImxvZ2luU3VjY2VzcyIsImxvZ2luRmFpbGVkIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlVTRVJfTE9HT1VUIiwidmVyaWZ5RW1haWwiLCJlbWFpbCIsInZlcmlmeUVtYWlsU3VjY2VzcyIsInZlcmlmeUVtYWlsRmFpbGVkIiwidmVyaWZ5T1RQIiwib3RwIiwidmVyaWZ5T1RQU3VjY2VzcyIsInZlcmlmeU90cEZhaWxlZCIsInNldFBhc3MiLCJwYXNzd29yZCIsInNldFBhc3NTdWNjZXNzIiwic2V0UGFzc3dvcmRGYWlsZWQiLCJ1cGRhdGVQYXNzd29yZCIsIlJFUVVFU1RfRkxJR0hUX0RBVEEiLCJSRUNJRVZFX0ZMSUdIVF9EQVRBIiwiRkxJR0hUX1NFQVJDSF9GQUlMRUQiLCJGTElHSFRfUkVWQUxJREFURSIsIlJFQ19GTElHSFRfVkFMSURBVElPTiIsIkZMSUdIVF9OT1RfVkFMSUQiLCJDUkVBVEVfUE5SIiwiUE5SX0NSRUFURUQiLCJQTlJfQ1JFQVRJT05fRkFJTEVEIiwiU0FWRV9CT09LSU5HIiwiU0FWRV9CT09LSU5HX0ZBSUxFRCIsIkJPT0tJTkdfU0FWRUQiLCJHRVRfU0FWRV9CT09LSU5HIiwiR0VUX1NBVkVfQk9PS0lOR19GQUlMRUQiLCJTQVZFRF9CT09LSU5HX1JFQ0VJVkVEIiwicmVxdWVzdEZsaWdodERhdGEiLCJnZXRGbGlnaHREYXRhIiwicmVxdWVzdEZsaWdodEZhaWxlZCIsInJlcXVlc3RGTGlnaHRWYWxpZGF0aW9uIiwiZmxpZ2h0RGF0YSIsImZsaWdodElTVmFsaWQiLCJ2YWxpZGF0aW9uIiwiZmxpZ2h0Tm90VmFsaWQiLCJjcmVhdGVQTlIiLCJwbnJSZXF1ZXN0IiwicG5yQ3JlYXRlZCIsImNyZWF0ZWQiLCJwbnJDcmVhdGlvbkZhaWxlZCIsInNhdmVCb29raW5nQWN0aW9uIiwic2F2ZUJvb2tpbmciLCJib29raW5nU2F2ZWRkIiwiYm9va2luZ1NhdmVkIiwic2F2ZUJvb2tpbmdGYWlsZWQiLCJnZXRTYXZlZEJvb2tpbmciLCJib29raW5nTWFpbCIsInNhdmVkQm9va2luZ1JlYyIsImdldFNhdmVkQm9va2luZ0ZhaWxlZCIsIkNSRUFURV9PRkZFUiIsIkNSRUFURURfT0ZGRVJfU1VDQ0VTU0ZVTCIsIlJFQURfT0ZGRVIiLCJPRkZFUlNfUkVDRUlWRUQiLCJVUERBVEVfT0ZGRVIiLCJVUERBVEVEX09GRkVSX1NVQ0NFU0ZVTCIsIkRFTEVURV9PRkZFUiIsIkRFTEVURV9PRkZFUl9TVUNDRVNTRlVMIiwicmVhZE9mZmVyQWN0aW9uIiwib2ZmZXJzUmVjIiwib2ZmZXIiLCJjcmVhdGVPZmZlckFjdGlvbiIsIm9mZmVyQ3JlYXRlZFN1Y2Nlc3MiLCJvZmZlckNyZWF0ZWQiLCJ1cGRhdGVPZmZlckFjdGlvbiIsIm9mZmVyVXBkYXRlSWQiLCJ1cGRhdGVPZmZlclN1Y2Nlc3MiLCJvZmZlclVwZGF0ZWRTdWNjZXNzIiwiZGVsZXRlT2ZmZXJBY3Rpb24iLCJvZmZlcklkIiwiZGVsZXRlT2ZmZXJTdWNjZXNzIiwiZGVsZXRlT2ZmZXIiLCJDUkVBVEVfUEFDS0FHRVMiLCJQQUNLQUdFX0NSRUFURUQiLCJQQUNLQUdFX0NSRUFUSU9OX0ZBSUxFRCIsIlJFQURfUEFDS0FHRVMiLCJQQUNLQUdFU19SRUNFSVZFRCIsIlBBQ0tBR0VTX1JFQ0VJVkVEX0ZBSUxFRCIsIlVQREFURV9QQUNLQUdFUyIsIlVQREFURV9QQUNLQUdFX1NVQ0NFU1NGVUwiLCJVUERBVEVfUEFDS0FHRV9GQUlMRUQiLCJERUxFVEVfUEFDS0FHRVMiLCJERUxFVEVfUEFDS0FHRVNfU1VDQ0VTUyIsIkRFTEVURV9QQUNLQUdFU19GQUlMRUQiLCJyZWFkUGFja2FnZUFjdGlvbiIsInBhY2thZ2VSZWMiLCJwYWNrYWdnZSIsInBhY2thZ2VSZWNGYWlsZWQiLCJjcmVhdGVQYWNrYWdlQWN0aW9uIiwiY3JlYXRlUGFja2FnZSIsImNyZWF0ZVBhY2thZ2VTdWNjZXNzIiwicGFja2FnZUNyZWF0ZWQiLCJwYWNrYWdlQ3JlYXRpb25GYWlsZWQiLCJ1cGRhdGVQYWNrYWdlQWN0aW9uIiwidXBkYXRlUGFja2FnZUlkIiwidXBkYXRlUGFja2FnZVN1Y2Nlc3MiLCJwYWNrYWdlVXBkYXRlU3VjY2VzcyIsIlVQREFURURfUEFDS0FHRV9TVUNDRVNGVUwiLCJ1cGRhdGVQYWNrYWdlRmFpbGVkIiwiZGVsZXRlUGFja2dlQWN0aW9uIiwicGFja2FnZUlEIiwiZGVsZXRlUGFja2dlU3VjY2VzIiwiZGVsUGFja2FnZVN1Y2Nlc3MiLCJkZWxldGVQYWNrYWdlRmFpbGVkIiwiR0VUX1RPS0VOIiwiVE9LRU5fUkVDRUlWRUQiLCJUT0tFTl9SRUNFSVZFRF9GQUlMRUQiLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0ZBSUwiLCJVU0VSX1JFR0lTVEVSX1JFUVVFU1QiLCJVU0VSX1JFR0lTVEVSX1NVQ0NFU1MiLCJVU0VSX1JFR0lTVEVSX0ZBSUwiLCJWRVJJRllfRU1BSUwiLCJWRVJJRllfRU1BSUxfU1VDQ0VTUyIsIlZFUklGWV9FTUFJTF9GQUlMIiwiQ09ORklSTV9PVFAiLCJDT05GSVJNX09UUF9TVUNDRVNTIiwiT1RQX0NPTkZJUk1BVElPTl9GQUlMIiwiU0VUX1BBU1NXT1JEIiwiU0VUX1BBU1NXT1JEX1NVQ0NFU1MiLCJTRVRfUEFTU1dPUkRfRkFJTCIsIlVQREFURV9QQVNTV09SRCIsImZsaWd0aFNlYXJjaCIsImFjdGlvbiIsInJlc3BvbnNlIiwic2VhcmNoRGF0YSIsImluaXRpYWxTdGF0ZSIsIm9mZmVyUmVkdWNlciIsImxvZyIsIm5ld09mZmVyIiwiZmlsdGVyIiwib2ZmZXJyIiwiX2lkIiwib2ZmZXJBcnJheSIsInBhY2thZ2VzUmVkdWNlciIsInBhY2thZ2VzIiwibmV3UGFja2FnZSIsInBhY2siLCJwYWNrQXJyYXkiLCJjb21iaW5lUmVkdWNlcnMiLCJhdXRoUmVkdWNlciIsInVzZXJMb2dpblJlZHVjZXIiLCJ2ZXJpZmljYXRpb24iLCJ2ZXJpZnlVc2VyIiwib2ZmZXJzUmVkdWNlciIsInJlc3BvbnNlVG9rZW4iLCJyZXNwb25zZWUiLCJmbGlnaHRTYWdhIiwicGF5bG9hZCIsImNhbGwiLCJnZXRGbGlnaHRTZXJ2aWNlIiwicHV0IiwiZmxpZ2h0VmFsaWRhdGlvbiIsImNoZWNrRmxpZ2h0VmFsaWRhdGlvbiIsInBuckNyZWF0aW9uIiwiY3JlYXRlUG5yU2VydmljZSIsImJvb2tpbmdDcmVhdGlvbiIsImNyZWF0ZUJvb2tpbmdTZXJ2aWNlIiwiZ2V0Qm9va2luZ1NlcnZpY2UiLCJzdGFydEZvcm1hbiIsImZvcmsiLCJ3YXRjaFVzZXJBdXRoZW50aWNhdGlvbiIsIm9mZmVyc1NhZ2EiLCJnZXRvZmZlcnNTZXJ2aWNlIiwiY3JlYXRlT2ZmZXJTYWdhIiwiY3JlYXRlT2ZmZXJTZXJpdmUiLCJkZWxldGVPZmZlclNhZ2EiLCJkZWxldGVPZmZlclNlcml2ZSIsInVwZGF0ZU9mZmVyU2FnYSIsInVwZGF0ZU9mZmVyU2VyaXZlIiwicGFja2FnZVNhZ2EiLCJnZXRQYWNrYWdlc1NlcnZpY2UiLCJjcmVhdGVQYWNrYWdlU2FnYSIsImNyZWF0ZVBhY2thZ2VzU2VydmljZSIsImRlbGV0ZVBhY2thZ2VTYWdhIiwiZGVsZXRlUGFja2FnZXNTZXJ2aWNlIiwidXBkYXRlUGFja2FnZVNhZ2EiLCJ1cGRhdGVQYWNrYWdlc1NlcnZpY2UiLCJnZXRUb2tlblNhZ2EiLCJnZXRUb2tlblNlcnZpY2UiLCJsb2dpblNhZ2EiLCJsb2dpblVzZXJTZXJ2aWNlIiwidmVyaWZ5RW1haWxTYWdhIiwidmVyaWZ5RW1haWxTZXJ2aWNlIiwidmVyaWZ5T3RwU2FnYSIsInZlcmlmeU90cFNlcnZpY2UiLCJzZXRQYXNzd29yZFNhZ2EiLCJwYXNzIiwic2V0UGFzc3dvcmRTZXJ2aWNlIiwidXBkYXRlUGFzc3dvcmRTYWdhIiwidXBkYXRlUGFzcyIsInVwZGF0ZVBhc3N3b3JkU2VydmljZSIsImxvZ091dFNhZ2EiLCJ0YWtlTGF0ZXN0IiwidHlwZXNzIiwidHlwZWVzIiwidHlwcGVzIiwidGFrZSIsInJlcXVlc3QiLCJHRVRfVE9LRU5fQVBJIiwicGFyYW1ldGVycyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsInRoZW4iLCJzdGF0dXMiLCJFcnJvciIsImpzb24iLCJ0b2FzdCIsInBvc2l0aW9uIiwiTE9HSU5fVVNFUl9BUEkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsIlZFUklGWV9VU0VSX0FQSSIsIm1zZyIsIlZFUklGWV9PVFBfVVJMIiwiU0VUX1BBU1NXT1JEX1VSTCIsIlVQREFURV9QQVNTV09SRF9VUkwiLCJBdXRoZW50aWNhdGlvbk1vZGVsIiwic2VjcmV0IiwiYXBpRW5kUG9pbnQiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInJlYWRSZXF1ZXN0IiwiZ2V0RmxpZ2h0cyIsImF1dGhvcml6YXRpb24iLCJxcyIsImdyYW50X3R5cGUiLCJzdGF0dXNDb2RlIiwicGFyc2UiLCJtb2R1bGUiLCJGTElHSFRfU0VBUkNIX0FQSSIsImF1dGhNb2RlbCIsInJlc3RfY3JlZGVudGlhbHMiLCJhYmMiLCJkYXRhYSIsImNhdGNoIiwiQ0hFQ0tfVkFMSURBVElPTiIsImZsaWdodFZhbCIsImFjY2VwdCIsInBuciIsIlNBVkVfQk9PS0lOR19BUEkiLCJHRVRfQk9PS0lOR19BUEkiLCJHRVRfT0ZGRVJfQVBJIiwiQ1JFQVRFX09GRkVSX0FQSSIsIkRFTEVURV9PRkZFUl9BUEkiLCJzdWNjZXNzIiwiVVBEQVRFX09GRkVSX0FQSSIsIkdFVF9QQUNLQUdFU19BUEkiLCJDUkVBVEVfUEFDS0FHRV9BUEkiLCJERUxFVEVfUEFDS0FHRV9BUEkiLCJVUERBVEVfUEFDS0FHRV9BUEkiLCJ1c2VyTG9nZ2VkSW4iLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJyb290U2FnYSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUMvQixzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDLFlBQWY7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsd0JBQVQ7QUFBa0MsdUJBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUlFO0FBQUssMkJBQVMsRUFBQyxxQkFBZjtBQUFBLHlDQUNFO0FBQUEsNENBQ0U7QUFBQSw4Q0FDRTtBQUNFLGlDQUFTLEVBQUMseUJBRFo7QUFFRSx1Q0FBWSxNQUZkO0FBR0UsNkJBQUssRUFBRTtBQUFFQywrQkFBSyxFQUFFO0FBQVQ7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBS1EsR0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFVRTtBQUFBLGlDQUNHLEdBREgsZUFFRTtBQUNFLGlDQUFTLEVBQUMscUJBRFo7QUFFRSw2QkFBSyxFQUFFO0FBQUVBLCtCQUFLLEVBQUU7QUFBVDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkYsZUFNRTtBQUFHLDRCQUFJLEVBQUMsb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVZGLGVBa0JFO0FBQUEsOENBQ0U7QUFDRSxpQ0FBUyxFQUFDLGVBRFo7QUFFRSw2QkFBSyxFQUFFO0FBQUVBLCtCQUFLLEVBQUU7QUFBVDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsZUFLRTtBQUFHLDRCQUFJLEVBQUMsaUNBQVI7QUFBQSxtQ0FDRyxHQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkYsZUFtQ0U7QUFBSywyQkFBUyxFQUFDLHFCQUFmO0FBQUEseUNBQ0U7QUFBQSw0Q0FDRTtBQUFJLCtCQUFTLEVBQUMsYUFBZDtBQUFBLDZDQUNFO0FBQUcsNEJBQUksRUFBQyxHQUFSO0FBQUEsK0NBQ0U7QUFBRyxtQ0FBUyxFQUFDLGdCQUFiO0FBQThCLHlDQUFZO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQU1FO0FBQUksK0JBQVMsRUFBQyxhQUFkO0FBQUEsNkNBQ0U7QUFBRyw0QkFBSSxFQUFDLEdBQVI7QUFBQSwrQ0FDRTtBQUFHLG1DQUFTLEVBQUMsaUJBQWI7QUFBK0IseUNBQVk7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQU5GLGVBV0U7QUFBSSwrQkFBUyxFQUFDLGFBQWQ7QUFBQSw2Q0FDRTtBQUFHLDRCQUFJLEVBQUMsR0FBUjtBQUFBLCtDQUNFO0FBQUcsbUNBQVMsRUFBQyxlQUFiO0FBQTZCLHlDQUFZO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFYRixlQWdCRTtBQUFJLCtCQUFTLEVBQUMsYUFBZDtBQUFBLDZDQUNFO0FBQUcsNEJBQUksRUFBQyxHQUFSO0FBQUEsK0NBQ0U7QUFBRyxtQ0FBUyxFQUFDLGVBQWI7QUFBNkIseUNBQVk7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWhCRixlQXFCRTtBQUFJLCtCQUFTLEVBQUMsYUFBZDtBQUFBLDZDQUNFO0FBQUcsNEJBQUksRUFBQyxHQUFSO0FBQUEsK0NBQ0U7QUFBRyxtQ0FBUyxFQUFDLGNBQWI7QUFBNEIseUNBQVk7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBNEVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBQSxxQ0FDRTtBQUFBLGlEQUNPO0FBQUcsMkJBQVMsRUFBQyxpQkFBYjtBQUErQixpQ0FBWTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURQLHlDQUVrQyxHQUZsQyxlQUdFO0FBQUcsc0JBQUksRUFBQyxnQ0FBUjtBQUF5Qyx3QkFBTSxFQUFDLFFBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBWUU7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsaUJBQWY7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMscUJBQVQ7QUFBK0IsdUJBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRixlQUtFO0FBQUEseUNBQ0U7QUFBSyx1QkFBRyxFQUFDLHFCQUFUO0FBQStCLHVCQUFHLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEYsZUFRRTtBQUFBLHlDQUNFO0FBQUssdUJBQUcsRUFBQyxxQkFBVDtBQUErQix1QkFBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJGLGVBV0U7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMscUJBQVQ7QUFBK0IsdUJBQUcsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVFRixlQWdIRTtBQUFLLFFBQUUsRUFBQyxhQUFSO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNIRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SEQ7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQyxNQUFULEdBQWtCO0FBQy9CLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNQyxTQUFTLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRixTQUFsQixDQUE3QjtBQUNBLFFBQU1HLFNBQVMsR0FBR0gsU0FBSCxhQUFHQSxTQUFILHVCQUFHQSxTQUFTLENBQUVJLEtBQTdCO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEtBQVg7O0FBQ0EsTUFBSUYsU0FBSixFQUFlO0FBQ2JFLFFBQUksR0FBRyxJQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLFFBQUksR0FBRyxLQUFQO0FBQ0Q7O0FBRUQsV0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsUUFBSVQsTUFBTSxLQUFLQSxNQUFNLENBQUNVLFFBQXRCLEVBQWdDO0FBQzlCLGFBQU9DLE1BQVA7QUFDRCxLQUZELE1BRU87QUFDUjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQXFDLGFBQUssRUFBRTtBQUFDQyx5QkFBZSxFQUFDO0FBQWpCLFNBQTVDO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNFO0FBQUEscUNBQ0U7QUFBRyxvQkFBSSxFQUFDLG9CQUFSO0FBQTZCLHFCQUFLLEVBQUU7QUFBQ2QsdUJBQUssRUFBQztBQUFQLGlCQUFwQztBQUFBLHdDQUNFO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQU1FO0FBQUEscUNBQ0U7QUFBRyxvQkFBSSxFQUFDLGlDQUFSO0FBQTBDLHFCQUFLLEVBQUU7QUFBQ0EsdUJBQUssRUFBQztBQUFQLGlCQUFqRDtBQUFBLHdDQUNFO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFjRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsVUFBWDtBQUFBLHFDQUNFO0FBQUcsb0JBQUksRUFBQyxVQUFSO0FBQUEsd0NBQ0U7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBTUUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLGdCQUFYO0FBQUEscUNBQ0U7QUFBRyxvQkFBSSxFQUFDLGdCQUFSO0FBQUEsd0NBQ0U7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZ0NFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFDLDJEQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLGdCQUFmO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUMsT0FBVDtBQUFpQix1QkFBRyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU1FO0FBQUssa0JBQUUsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsZUFPRTtBQUFLLGtCQUFFLEVBQUMsUUFBUjtBQUFpQix5QkFBUyxFQUFDLG9CQUEzQjtBQUFBLHVDQUNFO0FBQUksMkJBQVMsRUFBQyxnQkFBZDtBQUErQixvQkFBRSxFQUFDLGlCQUFsQztBQUFBLDRCQUNHUyxJQUFJLGdCQUNIO0FBQUEsNENBQ0U7QUFBQSw2Q0FDRSxxRUFBQyxnREFBRDtBQUFNLDRCQUFJLEVBQUMsU0FBWDtBQUFBLCtDQUNFO0FBQUcsOEJBQUksRUFBQyxHQUFSO0FBQUEsa0RBQ0U7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQVFFO0FBQUEsNkNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSw0QkFBSSxFQUFDLFlBQVg7QUFBQSwrQ0FDRTtBQUFHLDhCQUFJLEVBQUMsWUFBUjtBQUFBLGtEQUNFO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBUkYsZUFlRTtBQUFBLDZDQUNFLHFFQUFDLGdEQUFEO0FBQU0sNEJBQUksRUFBQyxTQUFYO0FBQUEsK0NBQ0U7QUFBRyw4QkFBSSxFQUFDLFNBQVI7QUFBQSxrREFDRTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQWZGLGVBc0JFO0FBQUEsNkNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSw0QkFBSSxFQUFDLFVBQVg7QUFBQSwrQ0FDRTtBQUFHLDhCQUFJLEVBQUMsVUFBUjtBQUFBLGtEQUNFO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsT0FDa0NGLFNBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQXRCRjtBQUFBLGtDQURHLGdCQWdDSDtBQUFBLDRDQUNFO0FBQUEsNkNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSw0QkFBSSxFQUFDLFNBQVg7QUFBQSwrQ0FDRTtBQUFHLDhCQUFJLEVBQUMsR0FBUjtBQUFBLGtEQUNFO0FBQUcscUNBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFRRTtBQUFBLDZDQUNFLHFFQUFDLGdEQUFEO0FBQU0sNEJBQUksRUFBQyxZQUFYO0FBQUEsK0NBQ0U7QUFBRyw4QkFBSSxFQUFDLFlBQVI7QUFBQSxrREFDRTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVJGLGVBZUU7QUFBQSw2Q0FDRSxxRUFBQyxnREFBRDtBQUFNLDRCQUFJLEVBQUMsU0FBWDtBQUFBLCtDQUNFO0FBQUcsOEJBQUksRUFBQyxTQUFSO0FBQUEsa0RBQ0U7QUFBRyxxQ0FBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFmRixlQXNCRTtBQUFBLDZDQUNFLHFFQUFDLGdEQUFEO0FBQU0sNEJBQUksRUFBQyxTQUFYO0FBQUEsK0NBQ0U7QUFBRyw4QkFBSSxFQUFDLFNBQVI7QUFBQSxrREFDRTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQXRCRixlQTZCRTtBQUFBLDZDQUNFLHFFQUFDLGdEQUFEO0FBQU0sNEJBQUksRUFBQyxPQUFYO0FBQUEsK0NBQ0U7QUFBRyw4QkFBSSxFQUFDLE9BQVI7QUFBQSxrREFDRTtBQUFHLHFDQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQTdCRjtBQUFBO0FBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2SEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEpEOztBQUVBOztBQVNBOztBQUNBOztBQXVCQSxNQUFNUSxVQUEyQyxHQUFqRDs7QUFFQSw2Q0FLUTtBQUNOLE1BQUksSUFBSixFQUE4QztBQUM5QyxNQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCLE9BRmpCLENBR047QUFDQTtBQUNBO0FBQ0E7O0FBQ0FiLFFBQU0sQ0FBTkEsa0NBQTBDYyxHQUFELElBQVM7QUFDaEQsY0FBMkM7QUFDekM7QUFDQTtBQUVIO0FBTERkO0FBTUEsUUFBTWUsU0FBUyxHQUNiQyxPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFkLFdBQVhBLGNBQ0lBLE9BQU8sQ0FEWEEsU0FFSWhCLE1BQU0sSUFBSUEsTUFBTSxDQUh0QixPQWJNLENBa0JOOztBQUNBYSxZQUFVLENBQUNJLElBQUksR0FBSkEsWUFBbUJGLFNBQVMsR0FBRyxNQUFILFlBQXZDRixFQUFXSSxDQUFELENBQVZKO0FBR0Y7O0FBQUEsZ0NBQTJEO0FBQ3pELFFBQU07QUFBQTtBQUFBLE1BQWFLLEtBQUssQ0FBeEI7QUFDQSxTQUNHQyxNQUFNLElBQUlBLE1BQU0sS0FBakIsT0FBQ0EsSUFDREQsS0FBSyxDQURMLE9BQUNDLElBRURELEtBQUssQ0FGTCxPQUFDQyxJQUdERCxLQUFLLENBSEwsUUFBQ0MsSUFJREQsS0FBSyxDQUpMLE1BQUNDLElBSWU7QUFDZkQsT0FBSyxDQUFMQSxlQUFxQkEsS0FBSyxDQUFMQSxzQkFOeEI7QUFVRjs7QUFBQSw0RUFTUTtBQUNOLFFBQU07QUFBQTtBQUFBLE1BQWVFLENBQUMsQ0FBdEI7O0FBRUEsTUFBSUMsUUFBUSxLQUFSQSxRQUFxQkMsZUFBZSxDQUFmQSxDQUFlLENBQWZBLElBQXNCLENBQUMsd0JBQWhELElBQWdELENBQTVDRCxDQUFKLEVBQW1FO0FBQ2pFO0FBQ0E7QUFHRkQ7O0FBQUFBLEdBQUMsQ0FBREEsaUJBUk0sQ0FVTjs7QUFDQSxNQUFJRyxNQUFNLElBQVYsTUFBb0I7QUFDbEJBLFVBQU0sR0FBR0MsRUFBRSxDQUFGQSxlQUFURDtBQUdGLEdBZk0sQ0FlTjs7O0FBQ0F2QixRQUFNLENBQUN5QixPQUFPLGVBQWR6QixNQUFNLENBQU5BLFdBQStDO0FBQUE7QUFBQTtBQUEvQ0E7QUFBK0MsR0FBL0NBO0FBT0Y7O0FBQUEscUJBQXlEO0FBQ3ZELFlBQTJDO0FBQ3pDLG1DQUlHO0FBQ0QsYUFBTyxVQUNKLGdDQUErQjBCLElBQUksQ0FBQ0MsR0FBSSxnQkFBZUQsSUFBSSxDQUFDRSxRQUFTLDZCQUE0QkYsSUFBSSxDQUFDRyxNQUF2RyxhQUFDLElBQ0Usb0JBRkwsRUFDRyxDQURJLENBQVA7QUFRRixLQWR5QyxDQWN6Qzs7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURiLFVBQUksRUFETjtBQUE0RCxLQUE1RDtBQUdBLFVBQU1jLGFBQWtDLEdBQUdDLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJMLEdBQUQsSUFBNEI7QUFDaEQsVUFBSUEsR0FBRyxLQUFQLFFBQW9CO0FBQ2xCLFlBQ0VNLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxZQUNDLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosaUJBQWtDLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosS0FGckMsVUFHRTtBQUNBLGdCQUFNQyxlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFBRUksS0FBSyxDQUFMQSxHQUFLLENBQUxBLHFCQUErQixPQUFPQSxLQUFLLENBSHJELEdBR3FEO0FBSC9CLFdBQUQsQ0FBckI7QUFNSDtBQVhELGFBV087QUFDTDtBQUNBO0FBQ0EsY0FBTUUsQ0FBUSxHQUFkO0FBRUg7QUFqQkQsT0FyQnlDLENBd0N6Qzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRFosUUFBRSxFQUR3RDtBQUUxREMsYUFBTyxFQUZtRDtBQUcxREYsWUFBTSxFQUhvRDtBQUkxRGMsYUFBTyxFQUptRDtBQUsxREMsY0FBUSxFQUxrRDtBQU0xREMsY0FBUSxFQU5rRDtBQU8xREMsWUFBTSxFQVBSO0FBQTRELEtBQTVEO0FBU0EsVUFBTUMsYUFBa0MsR0FBR1QsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxZQUFNZSxPQUFPLEdBQUcsT0FBT1QsS0FBSyxDQUE1QixHQUE0QixDQUE1Qjs7QUFFQSxVQUFJTixHQUFHLEtBQVAsTUFBa0I7QUFDaEIsWUFBSU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLElBQWNTLE9BQU8sS0FBckJULFlBQXNDUyxPQUFPLEtBQWpELFVBQWdFO0FBQzlELGdCQUFNUixlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFSRCxhQVFPLElBQUlGLEdBQUcsS0FBUCxVQUFzQjtBQUMzQixZQUFJTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsSUFBY1MsT0FBTyxLQUF6QixVQUF3QztBQUN0QyxnQkFBTVIsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBSFI7QUFBc0IsV0FBRCxDQUFyQjtBQU1IO0FBUk0sYUFRQSxJQUNMRixHQUFHLEtBQUhBLGFBQ0FBLEdBQUcsS0FESEEsWUFFQUEsR0FBRyxLQUZIQSxhQUdBQSxHQUFHLEtBSEhBLGNBSUFBLEdBQUcsS0FMRSxZQU1MO0FBQ0EsWUFBSU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQXNCUyxPQUFPLEtBQWpDLFdBQWlEO0FBQy9DLGdCQUFNUixlQUFlLENBQUM7QUFBQTtBQUVwQk4sb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFkTSxhQWNBO0FBQ0w7QUFDQTtBQUNBLGNBQU1NLENBQVEsR0FBZDtBQUVIO0FBdENELE9BckR5QyxDQTZGekM7QUFDQTs7QUFDQSxVQUFNUSxTQUFTLEdBQUdDLHNCQUFsQixLQUFrQkEsQ0FBbEI7O0FBQ0EsUUFBSVgsS0FBSyxDQUFMQSxZQUFrQixDQUFDVSxTQUFTLENBQWhDLFNBQTBDO0FBQ3hDQSxlQUFTLENBQVRBO0FBQ0FFLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU1DLENBQUMsR0FBR2IsS0FBSyxDQUFMQSxhQUFWO0FBRUEsUUFBTWpDLE1BQU0sR0FBRyxhQUFmLFNBQWUsR0FBZjtBQUNBLFFBQU1VLFFBQVEsR0FBSVYsTUFBTSxJQUFJQSxNQUFNLENBQWpCLE1BQUNBLElBQWxCOztBQUVBLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBZTRDLHVCQUFjLE1BQU07QUFDdkMsVUFBTSw2QkFBNkIsbUNBQXNCWCxLQUFLLENBQTNCLE1BQW5DLElBQW1DLENBQW5DO0FBQ0EsV0FBTztBQUNMaEIsVUFBSSxFQURDO0FBRUxPLFFBQUUsRUFBRVMsS0FBSyxDQUFMQSxLQUNBLG1DQUFzQkEsS0FBSyxDQUQzQkEsRUFDQSxDQURBQSxHQUVBYyxVQUFVLElBSmhCO0FBQU8sS0FBUDtBQUZtQkgsS0FRbEIsV0FBV1gsS0FBSyxDQUFoQixNQUF1QkEsS0FBSyxDQVIvQixFQVFHLENBUmtCVyxDQUFyQjs7QUFVQSxNQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUosTUF2SHVELENBeUh2RDs7QUFDQSxNQUFJLG9CQUFKLFVBQWtDO0FBQ2hDSSxZQUFRLGdCQUFHLHdDQUFYQSxRQUFXLENBQVhBO0FBR0YsR0E5SHVELENBOEh2RDs7O0FBQ0EsUUFBTUMsS0FBVSxHQUFHQyxxQkFBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQU1DLFFBQWEsR0FBR0YsS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUFqRTtBQUVBLFFBQU0sa0NBQWtDLHNDQUFnQjtBQUN0REcsY0FBVSxFQURaO0FBQXdELEdBQWhCLENBQXhDOztBQUdBLFFBQU1DLE1BQU0sR0FBR1QsMkJBQ1pVLEVBQUQsSUFBaUI7QUFDZkMsc0JBQWtCLENBQWxCQSxFQUFrQixDQUFsQkE7O0FBQ0Esa0JBQWM7QUFDWixVQUFJLG9CQUFKLFlBQW9DSixRQUFRLENBQTVDLEVBQTRDLENBQVJBLENBQXBDLEtBQ0ssSUFBSSxvQkFBSixVQUFrQztBQUNyQ0EsZ0JBQVEsQ0FBUkE7QUFFSDtBQUNGO0FBVFlQLEtBVWIsV0FWRixrQkFVRSxDQVZhQSxDQUFmOztBQVlBLHdCQUFVLE1BQU07QUFDZCxVQUFNWSxjQUFjLEdBQUdDLFNBQVMsSUFBVEEsS0FBa0Isd0JBQXpDLElBQXlDLENBQXpDO0FBQ0EsVUFBTTFDLFNBQVMsR0FDYix5Q0FBeUNmLE1BQU0sSUFBSUEsTUFBTSxDQUQzRDtBQUVBLFVBQU0wRCxZQUFZLEdBQ2hCN0MsVUFBVSxDQUFDSSxJQUFJLEdBQUpBLFlBQW1CRixTQUFTLEdBQUcsTUFBSCxZQUR6QyxFQUNhRSxDQUFELENBRFo7O0FBRUEsUUFBSXVDLGNBQWMsSUFBSSxDQUF0QixjQUFxQztBQUNuQ2pCLGNBQVEsbUJBQW1CO0FBQ3pCQyxjQUFNLEVBRFJEO0FBQTJCLE9BQW5CLENBQVJBO0FBSUg7QUFYRCxLQVdHLGlDQVhILE1BV0csQ0FYSDtBQWFBLFFBQU1vQixVQUtMLEdBQUc7QUFDRkMsT0FBRyxFQUREO0FBRUZDLFdBQU8sRUFBR3pDLENBQUQsSUFBeUI7QUFDaEMsVUFBSTZCLEtBQUssQ0FBTEEsU0FBZSxPQUFPQSxLQUFLLENBQUxBLE1BQVAsWUFBbkIsWUFBOEQ7QUFDNURBLGFBQUssQ0FBTEE7QUFFRjs7QUFBQSxVQUFJLENBQUM3QixDQUFDLENBQU4sa0JBQXlCO0FBQ3ZCMEMsbUJBQVcsZ0RBQVhBLE1BQVcsQ0FBWEE7QUFFSDtBQWRIO0FBS0ksR0FMSjs7QUFpQkFILFlBQVUsQ0FBVkEsZUFBMkJ2QyxDQUFELElBQXlCO0FBQ2pELFFBQUksQ0FBQyx3QkFBTCxJQUFLLENBQUwsRUFBdUI7O0FBQ3ZCLFFBQUk2QixLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLGlCQUFuQixZQUFtRTtBQUNqRUEsV0FBSyxDQUFMQTtBQUVGVjs7QUFBQUEsWUFBUSxtQkFBbUI7QUFBRXdCLGNBQVEsRUFBckN4QjtBQUEyQixLQUFuQixDQUFSQTtBQUxGb0IsSUEvS3VELENBdUx2RDtBQUNBOzs7QUFDQSxNQUFJMUIsS0FBSyxDQUFMQSxZQUFtQmdCLEtBQUssQ0FBTEEsZ0JBQXNCLEVBQUUsVUFBVUEsS0FBSyxDQUE5RCxLQUE2QyxDQUE3QyxFQUF3RTtBQUN0RSxVQUFNbEMsU0FBUyxHQUNiLHlDQUF5Q2YsTUFBTSxJQUFJQSxNQUFNLENBRDNELE9BRHNFLENBSXRFO0FBQ0E7O0FBQ0EsVUFBTWdFLFlBQVksR0FDaEJoRSxNQUFNLElBQ05BLE1BQU0sQ0FETkEsa0JBRUEsNENBR0VBLE1BQU0sSUFBSUEsTUFBTSxDQUhsQixTQUlFQSxNQUFNLElBQUlBLE1BQU0sQ0FQcEIsYUFHRSxDQUhGO0FBVUEyRCxjQUFVLENBQVZBLE9BQ0VLLFlBQVksSUFDWix5QkFBWSxzQ0FBeUJoRSxNQUFNLElBQUlBLE1BQU0sQ0FGdkQyRCxhQUVjLENBQVosQ0FGRkE7QUFLRjs7QUFBQSxzQkFBT2YsbUNBQVAsVUFBT0EsQ0FBUDs7O2VBR2FxQixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3VGY7QUFDQTtBQUNBOztBQUNPLHVDQUF1RDtBQUM1RCxTQUFPQyxJQUFJLENBQUpBLGlCQUFzQkEsSUFBSSxLQUExQkEsTUFBcUNBLElBQUksQ0FBSkEsU0FBYyxDQUFuREEsQ0FBcUNBLENBQXJDQSxHQUFQO0FBR0Y7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTUMsMEJBQTBCLEdBQUdDLFNBQ3JDRixTQURxQ0UsR0FBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1FBLE1BQU1DLG1CQUFtQixHQUM3QiwrQkFBK0JDLElBQUksQ0FBcEMsbUJBQUMsSUFDRCxjQUVrQjtBQUNoQixNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBaEIsR0FBWUEsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFZO0FBQzVCQyxNQUFFLENBQUM7QUFDREMsZ0JBQVUsRUFEVDtBQUVEQyxtQkFBYSxFQUFFLFlBQVk7QUFDekIsZUFBT0MsSUFBSSxDQUFKQSxPQUFZLE1BQU1MLElBQUksQ0FBSkEsUUFBekIsS0FBbUIsQ0FBWkssQ0FBUDtBQUhKSDtBQUFHLEtBQUQsQ0FBRkE7QUFEZSxLQUFqQixDQUFpQixDQUFqQjtBQU5HOzs7O0FBZ0JBLE1BQU1JLGtCQUFrQixHQUM1QiwrQkFBK0JSLElBQUksQ0FBcEMsa0JBQUMsSUFDRCxjQUF5QztBQUN2QyxTQUFPUyxZQUFZLENBQW5CLEVBQW1CLENBQW5CO0FBSEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDUDs7QUFDQSwwSSxDQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNQyxpQkFBaUIsR0FBdkI7O0FBbUNBLHlDQUljO0FBQ1osTUFBSUMsS0FBZ0MsR0FBR0MsR0FBRyxDQUFIQSxJQUF2QyxHQUF1Q0EsQ0FBdkM7O0FBQ0EsYUFBVztBQUNULFFBQUksWUFBSixPQUF1QjtBQUNyQixhQUFPRCxLQUFLLENBQVo7QUFFRjs7QUFBQSxXQUFPRSxPQUFPLENBQVBBLFFBQVAsS0FBT0EsQ0FBUDtBQUVGOztBQUFBO0FBQ0EsUUFBTUMsSUFBZ0IsR0FBRyxZQUFnQkMsT0FBRCxJQUFhO0FBQ25EQyxZQUFRLEdBQVJBO0FBREYsR0FBeUIsQ0FBekI7QUFHQUosS0FBRyxDQUFIQSxTQUFjRCxLQUFLLEdBQUc7QUFBRUksV0FBTyxFQUFUO0FBQXNCRSxVQUFNLEVBQWxETDtBQUFzQixHQUF0QkE7QUFDQSxTQUFPTSxTQUFTLEdBQ1o7QUFDQUEsV0FBUyxHQUFUQSxLQUFrQkMsS0FBRCxLQUFZSCxRQUFRLENBQVJBLEtBQVEsQ0FBUkEsRUFGakIsS0FFSyxDQUFqQkUsQ0FGWSxHQUFoQjtBQWFGOztBQUFBLDJCQUFzRDtBQUNwRCxNQUFJO0FBQ0ZFLFFBQUksR0FBR0MsUUFBUSxDQUFSQSxjQUFQRCxNQUFPQyxDQUFQRDtBQUNBLFdBQ0U7QUFDQTtBQUNDLE9BQUMsQ0FBQ0UsTUFBTSxDQUFSLHdCQUFpQyxDQUFDLENBQUVELFFBQUQsQ0FBcEMsWUFBQyxJQUNERCxJQUFJLENBQUpBLGlCQUpGLFVBSUVBO0FBSkY7QUFNQSxHQVJGLENBUUUsZ0JBQU07QUFDTjtBQUVIO0FBRUQ7O0FBQUEsTUFBTUcsV0FBb0IsR0FBR0MsV0FBN0I7O0FBRUEsd0NBSWdCO0FBQ2QsU0FBTyxZQUFZLGNBQWM7QUFDL0IsUUFBSUgsUUFBUSxDQUFSQSxjQUF3QiwrQkFBOEIxRSxJQUExRCxJQUFJMEUsQ0FBSixFQUFxRTtBQUNuRSxhQUFPSSxHQUFQO0FBR0ZMOztBQUFBQSxRQUFJLEdBQUdDLFFBQVEsQ0FBUkEsY0FBUEQsTUFBT0MsQ0FBUEQsQ0FMK0IsQ0FPL0I7O0FBQ0EsWUFBUUEsSUFBSSxDQUFKQTtBQUNSQSxRQUFJLENBQUpBO0FBQ0FBLFFBQUksQ0FBSkEsY0FBb0J0QixTQUFwQnNCO0FBQ0FBLFFBQUksQ0FBSkE7QUFDQUEsUUFBSSxDQUFKQSxjQVorQixDQWMvQjs7QUFDQUEsUUFBSSxDQUFKQTtBQUVBQyxZQUFRLENBQVJBO0FBakJGLEdBQU8sQ0FBUDtBQXFCRjs7QUFBQSxNQUFNSyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUEvQixrQkFBK0IsQ0FBL0IsQyxDQUNBOztBQUNPLDZCQUEyQztBQUNoRCxTQUFPakUsTUFBTSxDQUFOQSxzQ0FBUCxFQUFPQSxDQUFQO0FBR0s7O0FBQUEsMkJBQXdEO0FBQzdELFNBQU9sQixHQUFHLElBQUlrRixnQkFBZ0IsSUFBOUI7QUFHRjs7QUFBQSxtQ0FHb0I7QUFDbEIsU0FBTyxZQUFZLHFCQUFxQjtBQUN0Q0UsVUFBTSxHQUFHUCxRQUFRLENBQVJBLGNBQVRPLFFBQVNQLENBQVRPLENBRHNDLENBR3RDO0FBQ0E7QUFDQTs7QUFDQUEsVUFBTSxDQUFOQTs7QUFDQUEsVUFBTSxDQUFOQSxVQUFpQixNQUNmQyxNQUFNLENBQUNDLGNBQWMsQ0FBQyxVQUFXLDBCQUF5QkMsR0FENURILEVBQ3dCLENBQUQsQ0FBZixDQURSQSxDQVBzQyxDQVV0QztBQUNBOzs7QUFDQUEsVUFBTSxDQUFOQSxjQUFxQjlCLFNBQXJCOEIsQ0Fac0MsQ0FjdEM7QUFDQTs7QUFDQUEsVUFBTSxDQUFOQTtBQUNBUCxZQUFRLENBQVJBO0FBakJGLEdBQU8sQ0FBUDtBQXFCRixDLENBQUE7OztBQUNBLCtDQUljO0FBQ1osU0FBTyxZQUFZLHFCQUFxQjtBQUN0QyxRQUFJVyxTQUFTLEdBQWI7QUFFQSxLQUFDLENBQUQsS0FBUUMsQ0FBRCxJQUFPO0FBQ1o7QUFDQUQsZUFBUyxHQUFUQTtBQUNBakIsYUFBTyxDQUFQQSxDQUFPLENBQVBBO0FBSEY7QUFNQSxrREFBb0IsTUFDbEJaLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsVUFBSSxDQUFKLFdBQWdCO0FBQ2QwQixjQUFNLENBQU5BLEdBQU0sQ0FBTkE7QUFFSDtBQUpTLE9BRFosRUFDWSxDQURaO0FBVEYsR0FBTyxDQUFQO0FBbUJGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLGtDQUFnRTtBQUNyRSxNQUFJN0IsSUFBSSxDQUFSLGtCQUEyQjtBQUN6QixXQUFPYSxPQUFPLENBQVBBLFFBQWdCYixJQUFJLENBQTNCLGdCQUFPYSxDQUFQO0FBR0Y7O0FBQUEsUUFBTXFCLGVBQTZDLEdBQUcsWUFFbkRuQixPQUFELElBQWE7QUFDYjtBQUNBLFVBQU1YLEVBQUUsR0FBR0osSUFBSSxDQUFmOztBQUNBQSxRQUFJLENBQUpBLHNCQUEyQixNQUFNO0FBQy9CZSxhQUFPLENBQUNmLElBQUksQ0FBWmUsZ0JBQU8sQ0FBUEE7QUFDQVgsUUFBRSxJQUFJQSxFQUFOQTtBQUZGSjtBQUxGLEdBQXNELENBQXREO0FBV0EsU0FBT21DLHlCQUF5QixxQ0FHOUJMLGNBQWMsQ0FBQyxVQUhqQixzQ0FHaUIsQ0FBRCxDQUhnQixDQUFoQztBQVdGOztBQUFBLDhDQUd1QjtBQUNyQixZQUE0QztBQUMxQyxXQUFPLE9BQU8sQ0FBUCxRQUFnQjtBQUNyQk0sYUFBTyxFQUFFLENBQ1BDLFdBQVcsR0FBWEEsK0JBRUVDLFNBQVMsQ0FBQywyQ0FKTyxLQUlQLENBQUQsQ0FISixDQURZO0FBTXJCO0FBQ0FDLFNBQUcsRUFQTDtBQUF1QixLQUFoQixDQUFQO0FBVUY7O0FBQUEsU0FBT0Msc0JBQXNCLEdBQXRCQSxLQUErQkMsUUFBRCxJQUFjO0FBQ2pELFFBQUksRUFBRXRHLEtBQUssSUFBWCxRQUFJLENBQUosRUFBMEI7QUFDeEIsWUFBTTJGLGNBQWMsQ0FBQyxVQUFXLDJCQUEwQjNGLEtBQTFELEVBQXFCLENBQUQsQ0FBcEI7QUFFRjs7QUFBQSxVQUFNdUcsUUFBUSxHQUFHRCxRQUFRLENBQVJBLEtBQVEsQ0FBUkEsS0FDZDlCLEtBQUQsSUFBVzBCLFdBQVcsR0FBWEEsWUFBMEJDLFNBQVMsQ0FEaEQsS0FDZ0QsQ0FEL0JHLENBQWpCO0FBR0EsV0FBTztBQUNMTCxhQUFPLEVBQUVNLFFBQVEsQ0FBUkEsT0FBaUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFEQSxTQUQzQixLQUMyQkEsQ0FBdkJELENBREo7QUFFTEgsU0FBRyxFQUFFRyxRQUFRLENBQVJBLE9BQWlCQyxDQUFELElBQU9BLENBQUMsQ0FBREEsU0FGOUIsTUFFOEJBLENBQXZCRDtBQUZBLEtBQVA7QUFQRixHQUFPRixDQUFQO0FBY0Y7O0FBQUEsd0NBQTZEO0FBQzNELFFBQU1JLFdBR0wsR0FBRyxJQUhKLEdBR0ksRUFISjtBQUlBLFFBQU1DLGFBQTRDLEdBQUcsSUFBckQsR0FBcUQsRUFBckQ7QUFDQSxRQUFNQyxXQUFrRCxHQUFHLElBQTNELEdBQTJELEVBQTNEO0FBQ0EsUUFBTUMsTUFHTCxHQUFHLElBSEosR0FHSSxFQUhKOztBQUtBLG1DQUEyRDtBQUN6RCxRQUFJakMsSUFBa0MsR0FBRytCLGFBQWEsQ0FBYkEsSUFBekMsR0FBeUNBLENBQXpDOztBQUNBLGNBQVU7QUFDUjtBQUdGLEtBTnlELENBTXpEOzs7QUFDQSxRQUFJeEIsUUFBUSxDQUFSQSxjQUF3QixnQkFBZVUsR0FBM0MsSUFBSVYsQ0FBSixFQUFxRDtBQUNuRCxhQUFPUixPQUFPLENBQWQsT0FBT0EsRUFBUDtBQUdGZ0M7O0FBQUFBLGlCQUFhLENBQWJBLFNBQXdCL0IsSUFBSSxHQUFHa0MsWUFBWSxDQUEzQ0gsR0FBMkMsQ0FBM0NBO0FBQ0E7QUFHRjs7QUFBQSxpQ0FBaUU7QUFDL0QsUUFBSS9CLElBQTBDLEdBQUdnQyxXQUFXLENBQVhBLElBQWpELElBQWlEQSxDQUFqRDs7QUFDQSxjQUFVO0FBQ1I7QUFHRkE7O0FBQUFBLGVBQVcsQ0FBWEEsVUFFR2hDLElBQUksR0FBR21DLEtBQUssQ0FBTEEsSUFBSyxDQUFMQSxNQUNDeEIsR0FBRCxJQUFTO0FBQ2IsVUFBSSxDQUFDQSxHQUFHLENBQVIsSUFBYTtBQUNYLGNBQU0sVUFBVyw4QkFBNkI5RSxJQUE5QyxFQUFNLENBQU47QUFFRjs7QUFBQSxhQUFPOEUsR0FBRyxDQUFIQSxZQUFpQnlCLElBQUQsS0FBVztBQUFFdkcsWUFBSSxFQUFOO0FBQWN3RyxlQUFPLEVBQXZEO0FBQWtDLE9BQVgsQ0FBaEIxQixDQUFQO0FBTEl3QixhQU9FekcsR0FBRCxJQUFTO0FBQ2QsWUFBTXNGLGNBQWMsQ0FBcEIsR0FBb0IsQ0FBcEI7QUFWTmdCLEtBRVVHLENBRlZIO0FBYUE7QUFHRjs7QUFBQSxTQUFPO0FBQ0xNLGtCQUFjLFFBQWdCO0FBQzVCLGFBQU9DLFVBQVUsUUFBakIsV0FBaUIsQ0FBakI7QUFGRzs7QUFJTEMsZ0JBQVksaUJBQXdDO0FBQ2xEekMsYUFBTyxDQUFQQSxzQkFDUzBDLEVBQUQsSUFBUUEsRUFEaEIxQyxTQUdLMkMsT0FBRCxLQUFtQjtBQUNqQkMsaUJBQVMsRUFBR0QsT0FBTyxJQUFJQSxPQUFPLENBQW5CLE9BQUNBLElBREs7QUFFakJBLGVBQU8sRUFMYjNDO0FBR3VCLE9BQW5CLENBSEpBLEVBT0tyRSxHQUFELEtBQVU7QUFBRWtILGFBQUssRUFQckI3QztBQU9jLE9BQVYsQ0FQSkEsT0FTUzhDLEtBQUQsSUFBNEI7QUFDaEMsY0FBTUMsR0FBRyxHQUFHaEIsV0FBVyxDQUFYQSxJQUFaLEtBQVlBLENBQVo7QUFDQUEsbUJBQVcsQ0FBWEE7QUFDQSxZQUFJZ0IsR0FBRyxJQUFJLGFBQVgsS0FBNkJBLEdBQUcsQ0FBSEE7QUFaakMvQztBQUxHOztBQW9CTGdELGFBQVMsa0JBQW9DO0FBQzNDLGFBQU9SLFVBQVUsZ0JBQWtDLE1BQU07QUFDdkQsZUFBTyx5QkFBeUIsQ0FDOUJTLGdCQUFnQixjQUFoQkEsS0FBZ0IsQ0FBaEJBLE1BQ1EsQ0FBQztBQUFBO0FBQUQ7QUFBQyxTQUFELEtBQXNCO0FBQzFCLGlCQUFPakQsT0FBTyxDQUFQQSxJQUFZLENBQ2pCK0IsV0FBVyxDQUFYQSxrQkFFSS9CLE9BQU8sQ0FBUEEsSUFBWXVCLE9BQU8sQ0FBUEEsSUFIQyxrQkFHREEsQ0FBWnZCLENBSGEsRUFJakJBLE9BQU8sQ0FBUEEsSUFBWTBCLEdBQUcsQ0FBSEEsSUFKZCxlQUljQSxDQUFaMUIsQ0FKaUIsQ0FBWkEsQ0FBUDtBQUZKaUQsZ0JBU1NyQyxHQUFELElBQVM7QUFDYixpQkFBTyxnQ0FBaUNzQyxVQUFELEtBQWlCO0FBQUE7QUFFdERDLGtCQUFNLEVBQUV2QyxHQUFHLENBRmIsQ0FFYTtBQUYyQyxXQUFqQixDQUFoQyxDQUFQO0FBWDBCLFNBQzlCcUMsQ0FEOEIscUJBaUI5QmhDLGNBQWMsQ0FBQyxVQUFXLG1DQUFrQzNGLEtBakJ2RCxFQWlCVSxDQUFELENBakJnQixDQUF6QixNQW1CQyxDQUFDO0FBQUE7QUFBRDtBQUFDLFNBQUQsS0FBNEI7QUFDaEMsZ0JBQU1zRixHQUFxQixHQUFHL0QsTUFBTSxDQUFOQSxPQUc1QjtBQUFFc0csa0JBQU0sRUFIb0J0RztBQUc1QixXQUg0QkEsRUFBOUIsVUFBOEJBLENBQTlCO0FBSUEsaUJBQU8scUNBQVA7QUF4QkcsaUJBMEJHbEIsR0FBRCxJQUFTO0FBQ2Qsd0JBQWM7QUFDWjtBQUNBO0FBRUY7O0FBQUEsaUJBQU87QUFBRWtILGlCQUFLLEVBQWQ7QUFBTyxXQUFQO0FBL0JKLFNBQU8sQ0FBUDtBQURGLE9BQWlCLENBQWpCO0FBckJHOztBQXlETHpGLFlBQVEsUUFBK0I7QUFDckM7QUFDQTtBQUNBOztBQUNBLFVBQUtnRyxFQUFFLEdBQUlDLFNBQUQsQ0FBVixZQUEwQztBQUN4QztBQUNBLFlBQUlELEVBQUUsQ0FBRkEsWUFBZSxVQUFVQSxFQUFFLENBQS9CLGFBQW1CLENBQW5CLEVBQWdELE9BQU9wRCxPQUFPLENBQWQsT0FBT0EsRUFBUDtBQUVsRDs7QUFBQSxhQUFPLGdCQUFnQixjQUFoQixLQUFnQixDQUFoQixNQUNFc0QsTUFBRCxJQUNKdEQsT0FBTyxDQUFQQSxJQUNFVSxXQUFXLEdBQ1A0QyxNQUFNLENBQU5BLFlBQW9CdkMsTUFBRCxJQUFZd0MsY0FBYyxTQUR0QyxRQUNzQyxDQUE3Q0QsQ0FETyxHQUhWLEVBRUh0RCxDQUZHLE9BUUMsTUFBTTtBQUNWLHNEQUFvQixNQUFNLGtDQUFrQyxNQUFNLENBQWxFLENBQTBCLENBQTFCO0FBVEcsZ0JBWUg7QUFDQSxZQUFNLENBYlYsQ0FBTyxDQUFQO0FBakVKOztBQUFPLEdBQVA7OztlQW9GYXdELGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsWGY7O0FBQ0E7Ozs7O0FBQ0E7O0FBeUhBOzs7QUE1SEE7O0FBbUJBLE1BQU1DLGVBQW9DLEdBQUc7QUFDM0M1SSxRQUFNLEVBRHFDO0FBQzdCO0FBQ2Q2SSxnQkFBYyxFQUY2Qjs7QUFHM0NDLE9BQUssS0FBaUI7QUFDcEIsUUFBSSxLQUFKLFFBQWlCLE9BQU9wRSxFQUFQOztBQUNqQixlQUFtQyxFQUdwQztBQVJIOztBQUE2QyxDQUE3QyxDLENBV0E7O0FBQ0EsTUFBTXFFLGlCQUFpQixHQUFHLCtJQUExQixnQkFBMEIsQ0FBMUI7QUFlQSxNQUFNQyxZQUFZLEdBQUcsMEdBQXJCLG9CQUFxQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLGtEQUF6QixnQkFBeUIsQ0FBekIsQyxDQVNBOztBQUNBakgsTUFBTSxDQUFOQSwwQ0FBaUQ7QUFDL0NrSCxLQUFHLEdBQUc7QUFDSixXQUFPQyxpQkFBUDtBQUZKbkg7O0FBQWlELENBQWpEQTtBQU1BK0csaUJBQWlCLENBQWpCQSxRQUEyQkssS0FBRCxJQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBcEgsUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUNrSCxPQUFHLEdBQUc7QUFDSixZQUFNbEosTUFBTSxHQUFHcUosU0FBZjtBQUNBLGFBQU9ySixNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEpnQzs7QUFBOEMsR0FBOUNBO0FBTEYrRztBQWFBLGdCQUFnQixDQUFoQixRQUEwQkssS0FBRCxJQUFtQjtBQUMxQztBQUNBOztBQUFFUixpQkFBRCxPQUFDQSxHQUFpQyxDQUFDLEdBQUQsU0FBb0I7QUFDckQsVUFBTTVJLE1BQU0sR0FBR3FKLFNBQWY7QUFDQSxXQUFPckosTUFBTSxDQUFOQSxLQUFNLENBQU5BLENBQWMsR0FBckIsSUFBT0EsQ0FBUDtBQUZELEdBQUM0STtBQUZKO0FBUUFJLFlBQVksQ0FBWkEsUUFBc0I5SCxLQUFELElBQW1CO0FBQ3RDMEgsaUJBQWUsQ0FBZkEsTUFBc0IsTUFBTTtBQUMxQk8sc0NBQXdCLENBQUMsR0FBRCxTQUFhO0FBQ25DLFlBQU1HLFVBQVUsR0FBSSxLQUFJcEksS0FBSyxDQUFMQSx1QkFBOEIsR0FBRUEsS0FBSyxDQUFMQSxZQUF4RDtBQUdBLFlBQU1xSSxnQkFBZ0IsR0FBdEI7O0FBQ0EsVUFBSUEsZ0JBQWdCLENBQXBCLFVBQW9CLENBQXBCLEVBQWtDO0FBQ2hDLFlBQUk7QUFDRkEsMEJBQWdCLENBQWhCQSxVQUFnQixDQUFoQkEsQ0FBNkIsR0FBN0JBO0FBQ0EsU0FGRixDQUVFLFlBQVk7QUFDWjFHLGlCQUFPLENBQVBBLE1BQWUsd0NBQXVDeUcsVUFBdER6RztBQUNBQSxpQkFBTyxDQUFQQSxNQUFlLEdBQUUvQixHQUFHLENBQUMwSSxPQUFRLEtBQUkxSSxHQUFHLENBQUMySSxLQUFyQzVHO0FBRUg7QUFDRjtBQWJEc0c7QUFERlA7QUFERkk7O0FBbUJBLHFCQUE2QjtBQUMzQixNQUFJLENBQUNKLGVBQWUsQ0FBcEIsUUFBNkI7QUFDM0IsVUFBTVksT0FBTyxHQUNYLGdDQURGO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU9aLGVBQWUsQ0FBdEI7QUFHRixDLENBQUE7OztlQUNlQSxlLEVBRWY7Ozs7QUFHTyxxQkFBaUM7QUFDdEMsU0FBT2hHLDBCQUFpQjhHLGVBQXhCLGFBQU85RyxDQUFQO0FBR0YsQyxDQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTStHLFlBQVksR0FBRyxDQUFDLEdBQUQsU0FBaUM7QUFDM0RmLGlCQUFlLENBQWZBLFNBQXlCLElBQUlPLFNBQUosUUFBVyxHQUFwQ1AsSUFBeUIsQ0FBekJBO0FBQ0FBLGlCQUFlLENBQWZBLHVCQUF3Q2xFLEVBQUQsSUFBUUEsRUFBL0NrRTtBQUNBQSxpQkFBZSxDQUFmQTtBQUVBLFNBQU9BLGVBQWUsQ0FBdEI7QUFMSyxFLENBUVA7Ozs7O0FBQ08sMENBQThEO0FBQ25FLFFBQU1nQixPQUFPLEdBQWI7QUFDQSxRQUFNQyxRQUFRLEdBQWQ7O0FBRUEsT0FBSyxNQUFMLCtCQUEwQztBQUN4QyxRQUFJLE9BQU9ELE9BQU8sQ0FBZCxRQUFjLENBQWQsS0FBSixVQUEyQztBQUN6Q0MsY0FBUSxDQUFSQSxRQUFRLENBQVJBLEdBQXFCN0gsTUFBTSxDQUFOQSxPQUNuQjhILEtBQUssQ0FBTEEsUUFBY0YsT0FBTyxDQUFyQkUsUUFBcUIsQ0FBckJBLFNBRG1COUgsSUFFbkI0SCxPQUFPLENBRlRDLFFBRVMsQ0FGWTdILENBQXJCNkgsQ0FEeUMsQ0FJdkM7O0FBQ0Y7QUFHRkE7O0FBQUFBLFlBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQkQsT0FBTyxDQUE1QkMsUUFBNEIsQ0FBNUJBO0FBR0YsR0FoQm1FLENBZ0JuRTs7O0FBQ0FBLFVBQVEsQ0FBUkEsU0FBa0JWLGlCQUFsQlU7QUFFQVosa0JBQWdCLENBQWhCQSxRQUEwQkcsS0FBRCxJQUFXO0FBQ2xDUyxZQUFRLENBQVJBLEtBQVEsQ0FBUkEsR0FBa0IsQ0FBQyxHQUFELFNBQW9CO0FBQ3BDLGFBQU9ELE9BQU8sQ0FBUEEsS0FBTyxDQUFQQSxDQUFlLEdBQXRCLElBQU9BLENBQVA7QUFERkM7QUFERlo7QUFNQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUtEOztBQUNBOztBQWNBLE1BQU1jLHVCQUF1QixHQUFHLGdDQUFoQzs7QUFFTyx5QkFBNEM7QUFBQTtBQUE1QztBQUE0QyxDQUE1QyxFQUdxRDtBQUMxRCxRQUFNQyxVQUFtQixHQUFHQyxRQUFRLElBQUksQ0FBeEM7QUFFQSxRQUFNQyxTQUFTLEdBQUcsV0FBbEIsTUFBa0IsR0FBbEI7QUFDQSxRQUFNLHdCQUF3QixxQkFBOUIsS0FBOEIsQ0FBOUI7QUFFQSxRQUFNN0csTUFBTSxHQUFHLHdCQUNaQyxFQUFELElBQWtCO0FBQ2hCLFFBQUk0RyxTQUFTLENBQWIsU0FBdUI7QUFDckJBLGVBQVMsQ0FBVEE7QUFDQUEsZUFBUyxDQUFUQTtBQUdGOztBQUFBLFFBQUlGLFVBQVUsSUFBZCxTQUEyQjs7QUFFM0IsUUFBSTFHLEVBQUUsSUFBSUEsRUFBRSxDQUFaLFNBQXNCO0FBQ3BCNEcsZUFBUyxDQUFUQSxVQUFvQkMsT0FBTyxLQUV4QjFHLFNBQUQsSUFBZUEsU0FBUyxJQUFJMkcsVUFBVSxDQUZiLFNBRWEsQ0FGYixFQUd6QjtBQUhGRjtBQUdFLE9BSHlCLENBQTNCQTtBQU1IO0FBaEJZLEtBaUJiLHlCQWpCRixPQWlCRSxDQWpCYSxDQUFmO0FBb0JBLHdCQUFVLE1BQU07QUFDZCxRQUFJLENBQUoseUJBQThCO0FBQzVCLFVBQUksQ0FBSixTQUFjO0FBQ1osY0FBTUcsWUFBWSxHQUFHLDhDQUFvQixNQUFNRCxVQUFVLENBQXpELElBQXlELENBQXBDLENBQXJCO0FBQ0EsZUFBTyxNQUFNLDZDQUFiLFlBQWEsQ0FBYjtBQUVIO0FBQ0Y7QUFQRCxLQU9HLENBUEgsT0FPRyxDQVBIO0FBU0EsU0FBTyxTQUFQLE9BQU8sQ0FBUDtBQUdGOztBQUFBLDZDQUljO0FBQ1osUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTZCRSxjQUFjLENBQWpELE9BQWlELENBQWpEO0FBQ0FDLFVBQVEsQ0FBUkE7QUFFQUMsVUFBUSxDQUFSQTtBQUNBLFNBQU8scUJBQTJCO0FBQ2hDRCxZQUFRLENBQVJBO0FBQ0FDLFlBQVEsQ0FBUkEsbUJBRmdDLENBSWhDOztBQUNBLFFBQUlELFFBQVEsQ0FBUkEsU0FBSixHQUF5QjtBQUN2QkMsY0FBUSxDQUFSQTtBQUNBQyxlQUFTLENBQVRBO0FBRUg7QUFURDtBQVlGOztBQUFBLE1BQU1BLFNBQVMsR0FBRyxJQUFsQixHQUFrQixFQUFsQjs7QUFDQSxpQ0FBd0U7QUFDdEUsUUFBTUMsRUFBRSxHQUFHMUosT0FBTyxDQUFQQSxjQUFYO0FBQ0EsTUFBSTZJLFFBQVEsR0FBR1ksU0FBUyxDQUFUQSxJQUFmLEVBQWVBLENBQWY7O0FBQ0EsZ0JBQWM7QUFDWjtBQUdGOztBQUFBLFFBQU1GLFFBQVEsR0FBRyxJQUFqQixHQUFpQixFQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyx5QkFBMEJHLE9BQUQsSUFBYTtBQUNyREEsV0FBTyxDQUFQQSxRQUFpQjFGLEtBQUQsSUFBVztBQUN6QixZQUFNMkYsUUFBUSxHQUFHTCxRQUFRLENBQVJBLElBQWF0RixLQUFLLENBQW5DLE1BQWlCc0YsQ0FBakI7QUFDQSxZQUFNOUcsU0FBUyxHQUFHd0IsS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTFDOztBQUNBLFVBQUkyRixRQUFRLElBQVosV0FBMkI7QUFDekJBLGdCQUFRLENBQVJBLFNBQVEsQ0FBUkE7QUFFSDtBQU5ERDtBQURlLEtBQWpCLE9BQWlCLENBQWpCO0FBVUFGLFdBQVMsQ0FBVEEsUUFFR1osUUFBUSxHQUFHO0FBQUE7QUFBQTtBQUZkWTtBQUVjLEdBRmRBO0FBUUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dEOztBQUVBOztBQVdlLHVDQUsrQjtBQUM1QyxvQ0FBb0Q7QUFDbEQsd0JBQU87QUFBbUIsWUFBTSxFQUFFLFlBQTNCLFNBQTJCO0FBQTNCLE9BQVAsS0FBTyxFQUFQO0FBR0Y7O0FBQUEsbUJBQWlCLENBQWpCLGtCQUFvQ0ksaUJBQWlCLENBQUNDLGVBQXRELENBQ0E7QUFEQTtBQUVFQyxtQkFBRCxvQkFBQ0EsR0FBaURGLGlCQUFELENBQWpELG1CQUFDRTs7QUFDRixZQUEyQztBQUN6QyxVQUFNQyxJQUFJLEdBQ1JILGlCQUFpQixDQUFqQkEsZUFBaUNBLGlCQUFpQixDQUFsREEsUUFERjtBQUVBRSxxQkFBaUIsQ0FBakJBLGNBQWlDLGNBQWFDLElBQTlDRDtBQUdGOztBQUFBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ00sZ0RBTUw7QUFDQSxxQkFEQSxDQUVBOztBQUNBLFFBQU1FLGFBQWEsR0FBR3ZLLFFBQVEsQ0FBUkEsTUFBdEIsR0FBc0JBLENBQXRCO0FBRUMsR0FBQ3dLLE9BQU8sSUFBUixTQUFzQjFJLE1BQUQsSUFBWTtBQUNoQyxRQUFJeUksYUFBYSxDQUFiQSxDQUFhLENBQWJBLG1CQUFtQ3pJLE1BQU0sQ0FBN0MsV0FBdUNBLEVBQXZDLEVBQTZEO0FBQzNEMkksb0JBQWMsR0FBZEE7QUFDQUYsbUJBQWEsQ0FBYkE7QUFDQXZLLGNBQVEsR0FBR3VLLGFBQWEsQ0FBYkEsYUFBWHZLO0FBQ0E7QUFFRjs7QUFBQTtBQVBEO0FBVUQsU0FBTztBQUFBO0FBQVA7QUFBTyxHQUFQO0FBSUQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTs7QUFVZSxnQkFBNkI7QUFDMUMsUUFBTTBLLEdBQStCLEdBQUdwSixNQUFNLENBQU5BLE9BQXhDLElBQXdDQSxDQUF4QztBQUVBLFNBQU87QUFDTHFKLE1BQUUsZ0JBQWlDO0FBQ2pDO0FBQUMsT0FBQ0QsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEtBQWNBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxHQUFmLEVBQUNBLENBQUQ7QUFGRTs7QUFLTEUsT0FBRyxnQkFBaUM7QUFDbEMsVUFBSUYsR0FBRyxDQUFQLElBQU8sQ0FBUCxFQUFlO0FBQ2JBLFdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxRQUFpQkEsR0FBRyxDQUFIQSxJQUFHLENBQUhBLHNCQUFqQkE7QUFFSDtBQVRJOztBQVdMRyxRQUFJLE9BQWUsR0FBZixNQUErQjtBQUNqQztBQUNBO0FBQUMsT0FBQ0gsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCSSxPQUFELElBQXNCO0FBQ25EQSxlQUFPLENBQUMsR0FBUkEsSUFBTyxDQUFQQTtBQUREO0FBYkw7O0FBQU8sR0FBUDtBQWtCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDs7QUFLQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFVQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBakNBLEMsQ0FBQTs7O0FBK0RBOztBQUVBLElBQUlwSCxLQUFKLEVBQXFDLEVBS3JDOztBQUFBLE1BQU1xSCxRQUFRLEdBQUlySCxVQUFsQjs7QUFFQSxrQ0FBa0M7QUFDaEMsU0FBT3BDLE1BQU0sQ0FBTkEsT0FBYyxVQUFkQSxpQkFBYyxDQUFkQSxFQUE0QztBQUNqRHNFLGFBQVMsRUFEWDtBQUFtRCxHQUE1Q3RFLENBQVA7QUFLRjs7QUFBQSxxQ0FBc0Q7QUFDcEQsU0FBTzBKLE1BQU0sSUFBSXhILElBQUksQ0FBSkEsV0FBVndILEdBQVV4SCxDQUFWd0gsR0FDSHhILElBQUksS0FBSkEsTUFDRSx3REFERkEsTUFDRSxDQURGQSxHQUVHLEdBQUV3SCxNQUFPLEdBQUVDLGVBQWUsQ0FBZkEsSUFBZSxDQUFmQSxXQUFnQ3pILElBQUksQ0FBSkEsVUFBaEN5SCxDQUFnQ3pILENBQWhDeUgsR0FBb0R6SCxJQUgvRHdILEtBQVA7QUFPSzs7QUFBQSwrREFLTDtBQUNBLE1BQUl0SCxLQUFKLEVBQXFDLEVBYXJDOztBQUFBO0FBR0s7O0FBQUEsZ0RBSUw7QUFDQSxNQUFJQSxLQUFKLEVBQXFDLEVBWXJDOztBQUFBO0FBR0s7O0FBQUEsaUNBQWtEO0FBQ3ZELE1BQUlBLEtBQUosRUFBcUMsRUFZckM7O0FBQUE7QUFHRjs7QUFBQSwrQkFBdUM7QUFDckMsUUFBTXdILFVBQVUsR0FBRzFILElBQUksQ0FBSkEsUUFBbkIsR0FBbUJBLENBQW5CO0FBQ0EsUUFBTTJILFNBQVMsR0FBRzNILElBQUksQ0FBSkEsUUFBbEIsR0FBa0JBLENBQWxCOztBQUVBLE1BQUkwSCxVQUFVLEdBQUcsQ0FBYkEsS0FBbUJDLFNBQVMsR0FBRyxDQUFuQyxHQUF1QztBQUNyQzNILFFBQUksR0FBR0EsSUFBSSxDQUFKQSxhQUFrQjBILFVBQVUsR0FBRyxDQUFiQSxpQkFBekIxSCxTQUFPQSxDQUFQQTtBQUVGOztBQUFBO0FBR0s7O0FBQUEsMkJBQTRDO0FBQ2pEQSxNQUFJLEdBQUd5SCxlQUFlLENBQXRCekgsSUFBc0IsQ0FBdEJBO0FBQ0EsU0FBT0EsSUFBSSxLQUFKQSxZQUFxQkEsSUFBSSxDQUFKQSxXQUFnQnVILFFBQVEsR0FBcEQsR0FBNEJ2SCxDQUE1QjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRDtBQUNBLFNBQU80SCxhQUFhLE9BQXBCLFFBQW9CLENBQXBCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hENUgsTUFBSSxHQUFHQSxJQUFJLENBQUpBLE1BQVd1SCxRQUFRLENBQTFCdkgsTUFBT0EsQ0FBUEE7QUFDQSxNQUFJLENBQUNBLElBQUksQ0FBSkEsV0FBTCxHQUFLQSxDQUFMLEVBQTJCQSxJQUFJLEdBQUksSUFBR0EsSUFBWEE7QUFDM0I7QUFHRjtBQUFBO0FBQ0E7QUFDQTs7O0FBQ08seUJBQTBDO0FBQy9DO0FBQ0EsTUFBSTZILEdBQUcsQ0FBSEEsbUJBQXVCQSxHQUFHLENBQUhBLFdBQTNCLEdBQTJCQSxDQUEzQixFQUFnRDs7QUFDaEQsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLFdBQXZCLGlCQUF1QixHQUF2QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxhQUFqQixjQUFpQixDQUFqQjtBQUNBLFdBQU9BLFFBQVEsQ0FBUkEsNkJBQXNDQyxXQUFXLENBQUNELFFBQVEsQ0FBakUsUUFBd0QsQ0FBeEQ7QUFDQSxHQUxGLENBS0UsVUFBVTtBQUNWO0FBRUg7QUFJTTs7QUFBQSxpREFJTDtBQUNBLE1BQUlFLGlCQUFpQixHQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBRywrQkFBckIsS0FBcUIsQ0FBckI7QUFDQSxRQUFNQyxhQUFhLEdBQUdELFlBQVksQ0FBbEM7QUFDQSxRQUFNRSxjQUFjLEdBQ2xCO0FBQ0EsR0FBQ0MsVUFBVSxLQUFWQSxRQUF1QixpREFBdkJBLFVBQXVCLENBQXZCQSxHQUFELE9BQ0E7QUFDQTtBQUpGO0FBT0FKLG1CQUFpQixHQUFqQkE7QUFDQSxRQUFNSyxNQUFNLEdBQUd4SyxNQUFNLENBQU5BLEtBQWYsYUFBZUEsQ0FBZjs7QUFFQSxNQUNFLENBQUN3SyxNQUFNLENBQU5BLE1BQWNDLEtBQUQsSUFBVztBQUN2QixRQUFJaEgsS0FBSyxHQUFHNkcsY0FBYyxDQUFkQSxLQUFjLENBQWRBLElBQVo7QUFDQSxVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQXVCRCxhQUFhLENBQTFDLEtBQTBDLENBQTFDLENBRnVCLENBSXZCO0FBQ0E7O0FBQ0EsUUFBSUssUUFBUSxHQUFJLElBQUdDLE1BQU0sV0FBVyxFQUFHLEdBQUVGLEtBQXpDOztBQUNBLGtCQUFjO0FBQ1pDLGNBQVEsR0FBSSxHQUFFLGVBQWUsRUFBRyxJQUFHQSxRQUFuQ0E7QUFFRjs7QUFBQSxRQUFJQyxNQUFNLElBQUksQ0FBQzdDLEtBQUssQ0FBTEEsUUFBZixLQUFlQSxDQUFmLEVBQXFDckUsS0FBSyxHQUFHLENBQVJBLEtBQVEsQ0FBUkE7QUFFckMsV0FDRSxDQUFDbUgsUUFBUSxJQUFJSCxLQUFLLElBQWxCLHFCQUNBO0FBQ0NOLHFCQUFpQixHQUNoQkEsaUJBQWlCLENBQWpCQSxrQkFFRVEsTUFBTSxHQUNEbEgsS0FBRCxJQUFDQSxFQUVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0NvSCxXQUFELElBQWFDLGtCQUFrQixDQU5uQyxPQU1tQyxDQU5sQ3JILEVBQUQsSUFBQ0EsQ0FEQyxHQUNEQSxDQURDLEdBVUZxSCxrQkFBa0IsQ0FaeEJYLEtBWXdCLENBWnhCQSxLQUpKLEdBQ0UsQ0FERjtBQWJKLEdBQ0dLLENBREgsRUFpQ0U7QUFDQUwscUJBQWlCLEdBQWpCQSxHQURBLENBQ3VCO0FBRXZCO0FBQ0E7QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFFTFksVUFBTSxFQUZSO0FBQU8sR0FBUDtBQU1GOztBQUFBLDJDQUFxRTtBQUNuRSxRQUFNQyxhQUE2QixHQUFuQztBQUVBaEwsUUFBTSxDQUFOQSxvQkFBNEJMLEdBQUQsSUFBUztBQUNsQyxRQUFJLENBQUM2SyxNQUFNLENBQU5BLFNBQUwsR0FBS0EsQ0FBTCxFQUEyQjtBQUN6QlEsbUJBQWEsQ0FBYkEsR0FBYSxDQUFiQSxHQUFxQkMsS0FBSyxDQUExQkQsR0FBMEIsQ0FBMUJBO0FBRUg7QUFKRGhMO0FBS0E7QUFHRjtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxtREFJRztBQUNSO0FBQ0E7O0FBRUEsTUFBSTtBQUNGa0wsUUFBSSxHQUFHLHFCQUFQQSxVQUFPLENBQVBBO0FBQ0EsR0FGRixDQUVFLFVBQVU7QUFDVjtBQUNBQSxRQUFJLEdBQUcsYUFBUEEsVUFBTyxDQUFQQTtBQUVGOztBQUFBLFFBQU1DLFdBQVcsR0FDZixrQ0FBa0MsaUNBRHBDLElBQ29DLENBRHBDLENBVlEsQ0FZUjs7QUFDQSxNQUFJLENBQUNDLFVBQVUsQ0FBZixXQUFlLENBQWYsRUFBOEI7QUFDNUIsV0FBUUMsU0FBUyxHQUFHLENBQUgsV0FBRyxDQUFILEdBQWpCO0FBRUY7O0FBQUEsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxxQkFBakIsSUFBaUIsQ0FBakI7QUFDQUEsWUFBUSxDQUFSQSxXQUFvQix3REFBMkJBLFFBQVEsQ0FBdkRBLFFBQW9CLENBQXBCQTtBQUNBLFFBQUlDLGNBQWMsR0FBbEI7O0FBRUEsUUFDRSwrQkFBZUQsUUFBUSxDQUF2QixhQUNBQSxRQUFRLENBRFIsZ0JBREYsV0FJRTtBQUNBLFlBQU1MLEtBQUssR0FBRyx5Q0FBdUJLLFFBQVEsQ0FBN0MsWUFBYyxDQUFkO0FBRUEsWUFBTTtBQUFBO0FBQUE7QUFBQSxVQUFxQkUsYUFBYSxDQUN0Q0YsUUFBUSxDQUQ4QixVQUV0Q0EsUUFBUSxDQUY4QixVQUF4QyxLQUF3QyxDQUF4Qzs7QUFNQSxrQkFBWTtBQUNWQyxzQkFBYyxHQUFHLGlDQUFxQjtBQUNwQzdNLGtCQUFRLEVBRDRCO0FBRXBDK00sY0FBSSxFQUFFSCxRQUFRLENBRnNCO0FBR3BDTCxlQUFLLEVBQUVTLGtCQUFrQixRQUgzQkgsTUFHMkI7QUFIVyxTQUFyQixDQUFqQkE7QUFNSDtBQUVELEtBM0JFLENBMkJGOzs7QUFDQSxVQUFNSSxZQUFZLEdBQ2hCTCxRQUFRLENBQVJBLFdBQW9CSixJQUFJLENBQXhCSSxTQUNJQSxRQUFRLENBQVJBLFdBQW9CQSxRQUFRLENBQVJBLE9BRHhCQSxNQUNJQSxDQURKQSxHQUVJQSxRQUFRLENBSGQ7QUFLQSxXQUFRRCxTQUFTLEdBQ2IsZUFBZUUsY0FBYyxJQURoQixZQUNiLENBRGEsR0FBakI7QUFHQSxHQXBDRixDQW9DRSxVQUFVO0FBQ1YsV0FBUUYsU0FBUyxHQUFHLENBQUgsV0FBRyxDQUFILEdBQWpCO0FBRUg7QUFFRDs7QUFBQSwwQkFBa0M7QUFDaEMsUUFBTU8sTUFBTSxHQUFHLFdBQWYsaUJBQWUsR0FBZjtBQUVBLFNBQU83QixHQUFHLENBQUhBLHFCQUF5QkEsR0FBRyxDQUFIQSxVQUFjNkIsTUFBTSxDQUE3QzdCLE1BQXlCQSxDQUF6QkEsR0FBUDtBQUdGOztBQUFBLHVDQUE4RDtBQUM1RDtBQUNBO0FBQ0EsTUFBSSw2QkFBNkI4QixXQUFXLENBQUM3TixNQUFNLENBQVAsYUFBNUMsSUFBNEMsQ0FBNUM7QUFDQSxRQUFNNE4sTUFBTSxHQUFHLFdBQWYsaUJBQWUsR0FBZjtBQUNBLFFBQU1FLGFBQWEsR0FBR0gsWUFBWSxDQUFaQSxXQUF0QixNQUFzQkEsQ0FBdEI7QUFDQSxRQUFNSSxXQUFXLEdBQUdoTCxVQUFVLElBQUlBLFVBQVUsQ0FBVkEsV0FBbEMsTUFBa0NBLENBQWxDO0FBRUE0SyxjQUFZLEdBQUdLLFdBQVcsQ0FBMUJMLFlBQTBCLENBQTFCQTtBQUNBNUssWUFBVSxHQUFHQSxVQUFVLEdBQUdpTCxXQUFXLENBQWQsVUFBYyxDQUFkLEdBQXZCakw7QUFFQSxRQUFNa0wsV0FBVyxHQUFHSCxhQUFhLGtCQUFrQkksV0FBVyxDQUE5RCxZQUE4RCxDQUE5RDtBQUNBLFFBQU1DLFVBQVUsR0FBRzNNLEVBQUUsR0FDakJ3TSxXQUFXLENBQUNILFdBQVcsQ0FBQzdOLE1BQU0sQ0FBUCxRQUROLEVBQ00sQ0FBWixDQURNLEdBRWpCK0MsVUFBVSxJQUZkO0FBSUEsU0FBTztBQUNMZ0osT0FBRyxFQURFO0FBRUx2SyxNQUFFLEVBQUV1TSxXQUFXLGdCQUFnQkcsV0FBVyxDQUY1QyxVQUU0QztBQUZyQyxHQUFQO0FBTUY7O0FBQUEsOENBQWdFO0FBQzlELFFBQU1FLGFBQWEsR0FBRyxxREFBd0IsOENBQTlDLFFBQThDLENBQXhCLENBQXRCOztBQUVBLE1BQUlBLGFBQWEsS0FBYkEsVUFBNEJBLGFBQWEsS0FBN0MsV0FBNkQ7QUFDM0Q7QUFHRixHQVA4RCxDQU85RDs7O0FBQ0EsTUFBSSxDQUFDQyxLQUFLLENBQUxBLFNBQUwsYUFBS0EsQ0FBTCxFQUFxQztBQUNuQztBQUNBQSxTQUFLLENBQUxBLEtBQVlDLElBQUQsSUFBVTtBQUNuQixVQUFJLHdDQUF3Qiw2Q0FBNUIsYUFBNEIsQ0FBNUIsRUFBeUU7QUFDdkU1TixnQkFBUSxHQUFSQTtBQUNBO0FBRUg7QUFMRDJOO0FBT0Y7O0FBQUEsU0FBTyxxREFBUCxRQUFPLENBQVA7QUFtRUY7O0FBQUEsTUFBTUUsdUJBQXVCLEdBQzNCbkssVUFHQSxLQUpGO0FBWUEsTUFBTW9LLGtCQUFrQixHQUFHdkksTUFBTSxDQUFqQyxvQkFBaUMsQ0FBakM7O0FBRUEsbUNBQWlFO0FBQy9ELFNBQU8sS0FBSyxNQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXdJLGVBQVcsRUFaTjtBQUFXLEdBQU4sQ0FBTCxNQWFFMUksR0FBRCxJQUFTO0FBQ2YsUUFBSSxDQUFDQSxHQUFHLENBQVIsSUFBYTtBQUNYLFVBQUkySSxRQUFRLEdBQVJBLEtBQWdCM0ksR0FBRyxDQUFIQSxVQUFwQixLQUF1QztBQUNyQyxlQUFPNEksVUFBVSxNQUFNRCxRQUFRLEdBQS9CLENBQWlCLENBQWpCO0FBRUY7O0FBQUEsVUFBSTNJLEdBQUcsQ0FBSEEsV0FBSixLQUF3QjtBQUN0QixlQUFPQSxHQUFHLENBQUhBLFlBQWlCNkksSUFBRCxJQUFVO0FBQy9CLGNBQUlBLElBQUksQ0FBUixVQUFtQjtBQUNqQixtQkFBTztBQUFFQyxzQkFBUSxFQUFqQjtBQUFPLGFBQVA7QUFFRjs7QUFBQSxnQkFBTSxVQUFOLDZCQUFNLENBQU47QUFKRixTQUFPOUksQ0FBUDtBQU9GOztBQUFBLFlBQU0sVUFBTiw2QkFBTSxDQUFOO0FBRUY7O0FBQUEsV0FBT0EsR0FBRyxDQUFWLElBQU9BLEVBQVA7QUE1QkYsR0FBTyxDQUFQO0FBZ0NGOztBQUFBLGlEQUFrRTtBQUNoRSxTQUFPLFVBQVUsV0FBVytJLGNBQWMsT0FBbkMsQ0FBVSxDQUFWLE9BQW9EaE8sR0FBRCxJQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFFQSxRQUFJLENBQUosZ0JBQXFCO0FBQ25CO0FBRUY7O0FBQUE7QUFSRixHQUFPLENBQVA7QUFZYTs7QUFBQSxNQUFNcUksTUFBTixDQUFtQztBQU9oRDtBQUNGO0FBUmtEO0FBV2hEO0FBRUE7QUF5QkE0RixhQUFXLHlCQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSlM7QUFJVCxHQUpTLEVBaUNUO0FBQUEsU0F0RUZ0TyxLQXNFRTtBQUFBLFNBckVGQyxRQXFFRTtBQUFBLFNBcEVGdU0sS0FvRUU7QUFBQSxTQW5FRitCLE1BbUVFO0FBQUEsU0FsRUZ2RCxRQWtFRTtBQUFBLFNBN0RGd0QsVUE2REU7QUFBQSxTQTNERkMsR0EyREUsR0EzRGtDLEVBMkRsQztBQUFBLFNBekRGQyxHQXlERSxHQXpEMkMsRUF5RDNDO0FBQUEsU0F2REZDLEdBdURFO0FBQUEsU0F0REZDLEdBc0RFO0FBQUEsU0FyREZDLFVBcURFO0FBQUEsU0FwREZDLElBb0RFO0FBQUEsU0FuREZDLE1BbURFO0FBQUEsU0FsREZDLFFBa0RFO0FBQUEsU0FqREZDLEtBaURFO0FBQUEsU0FoREZDLFVBZ0RFO0FBQUEsU0EvQ0ZDLGNBK0NFO0FBQUEsU0E5Q0ZDLFFBOENFO0FBQUEsU0E3Q0ZyTixNQTZDRTtBQUFBLFNBNUNGMEksT0E0Q0U7QUFBQSxTQTNDRjRFLGFBMkNFO0FBQUEsU0ExQ0ZDLGFBMENFO0FBQUEsU0F6Q0ZDLE9BeUNFO0FBQUEsU0F4Q0ZDLFNBd0NFO0FBQUEsU0F2Q0ZDLGNBdUNFO0FBQUEsU0FyQ01DLElBcUNOLEdBckNxQixDQXFDckI7O0FBQUEsc0JBaUdZL08sQ0FBRCxJQUE0QjtBQUN2QyxZQUFNaEIsS0FBSyxHQUFHZ0IsQ0FBQyxDQUFmOztBQUVBLFVBQUksQ0FBSixPQUFZO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUFBO0FBQUE7QUFBQSxZQUFOO0FBQ0EseUNBRUUsaUNBQXFCO0FBQUVWLGtCQUFRLEVBQUV3TixXQUFXLENBQXZCLFFBQXVCLENBQXZCO0FBRnZCO0FBRXVCLFNBQXJCLENBRkYsRUFHRSxXQUhGLE1BR0UsR0FIRjtBQUtBO0FBR0Y7O0FBQUEsVUFBSSxDQUFDOU4sS0FBSyxDQUFWLEtBQWdCO0FBQ2Q7QUFHRjs7QUFBQTtBQUNBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47O0FBQ0EsVUFBSWdFLEtBQUosRUFBMkMsRUFxQjNDOztBQUFBO0FBRUEsWUFBTTtBQUFBO0FBQUEsVUFBZSx3Q0FBckIsR0FBcUIsQ0FBckIsQ0FuRHVDLENBcUR2QztBQUNBOztBQUNBLFVBQUksY0FBYzVDLEVBQUUsS0FBSyxLQUFyQixVQUFvQ2QsUUFBUSxLQUFLLEtBQXJELFVBQW9FO0FBQ2xFO0FBR0YsT0EzRHVDLENBMkR2QztBQUNBOzs7QUFDQSxVQUFJLGFBQWEsQ0FBQyxVQUFsQixLQUFrQixDQUFsQixFQUFvQztBQUNsQztBQUdGOztBQUFBLDJDQUlFc0IsTUFBTSxDQUFOQSxvQkFBcUU7QUFDbkVLLGVBQU8sRUFBRXJCLE9BQU8sQ0FBUEEsV0FBbUIsS0FEdUM7QUFFbkV3QixjQUFNLEVBQUV4QixPQUFPLENBQVBBLFVBQWtCLEtBTjlCO0FBSXVFLE9BQXJFZ0IsQ0FKRjtBQWxLQSxPQUNBOzs7QUFDQSxpQkFBYSxxREFBYixTQUFhLENBQWIsQ0FGQSxDQUlBOztBQUNBLHlCQUxBLENBTUE7QUFDQTtBQUNBOztBQUNBLFFBQUl0QixTQUFRLEtBQVosV0FBNEI7QUFDMUIsc0JBQWdCLEtBQWhCLFNBQThCO0FBQUE7QUFFNUIwUCxlQUFPLEVBRnFCO0FBRzVCbk8sYUFBSyxFQUh1QjtBQUFBO0FBSzVCb08sZUFBTyxFQUFFQyxZQUFZLElBQUlBLFlBQVksQ0FMVDtBQU01QkMsZUFBTyxFQUFFRCxZQUFZLElBQUlBLFlBQVksQ0FOdkM7QUFBOEIsT0FBOUI7QUFVRjs7QUFBQSwrQkFBMkI7QUFDekJFLGVBQVMsRUFEZ0I7QUFFekJwSixpQkFBVyxFQUFFO0FBRmY7QUFFZTtBQUZZLEtBQTNCLENBcEJBLENBMkJBO0FBQ0E7O0FBQ0Esa0JBQWMrQixNQUFNLENBQXBCO0FBRUE7QUFDQTtBQUNBLHdCQWpDQSxDQWtDQTtBQUNBOztBQUNBLFVBQU1zSCxpQkFBaUIsR0FDckIsNkNBQTRCbk0sSUFBSSxDQUFKQSxjQUQ5Qjs7QUFHQSxrQkFBY21NLGlCQUFpQixlQUEvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQTNDQSxDQTRDQTtBQUNBOztBQUNBO0FBRUE7QUFFQSxtQkFBZSxDQUFDLEVBQ2RuTSxJQUFJLENBQUpBLHNCQUNBQSxJQUFJLENBQUpBLGNBREFBLE9BRUMsc0JBQ0MsQ0FBQ0EsSUFBSSxDQUFKQSxTQURGLFVBRUMsQ0FBQ0YsS0FMVyxDQUFoQjtBQU9BLHFCQUFpQixDQUFDLENBQWxCO0FBQ0E7O0FBRUEsUUFBSUEsS0FBSixFQUFxQyxFQVdyQzs7QUFBQSxlQUFtQyxFQXdCcEM7QUErRURzTTs7QUFBQUEsUUFBTSxHQUFTO0FBQ2I5SyxVQUFNLENBQU5BO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7OztBQUNFK0ssTUFBSSxHQUFHO0FBQ0wvSyxVQUFNLENBQU5BO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFZ0wsTUFBSSxVQUFxQjVQLE9BQTBCLEdBQS9DLElBQXNEO0FBQ3hELFFBQUlvRCxLQUFKLEVBQTJDLEVBYTNDOztBQUFBO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFjeU0sWUFBWSxZQUEzQixFQUEyQixDQUEzQjtBQUNELFdBQU8sa0NBQVAsT0FBTyxDQUFQO0FBR0Y7QUFBQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFcFAsU0FBTyxVQUFxQlQsT0FBMEIsR0FBL0MsSUFBc0Q7QUFDM0Q7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWM2UCxZQUFZLFlBQTNCLEVBQTJCLENBQTNCO0FBQ0QsV0FBTyxxQ0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSx1REFNb0I7QUFBQTs7QUFDbEIsUUFBSSxDQUFDekQsVUFBVSxDQUFmLEdBQWUsQ0FBZixFQUFzQjtBQUNwQnhILFlBQU0sQ0FBTkE7QUFDQTtBQUVGOztBQUFBLFVBQU1rTCxpQkFBaUIsR0FBRy9FLEdBQUcsS0FBSEEsTUFBZS9LLE9BQUQsQ0FBeEMsR0FMa0IsQ0FPbEI7QUFDQTs7QUFDQSxRQUFLQSxPQUFELENBQUosSUFBeUI7QUFDdkI7QUFHRixLQWJrQixDQWFsQjtBQUNBO0FBQ0E7OztBQUNBQSxXQUFPLENBQVBBLFNBQWlCLENBQUMscUJBQUVBLE9BQU8sQ0FBVCxvQ0FBbEJBLElBQWtCLENBQWxCQTtBQUVBLFFBQUkrUCxZQUFZLEdBQUcvUCxPQUFPLENBQVBBLFdBQW1CLEtBQXRDOztBQUVBLFFBQUlvRCxLQUFKLEVBQXFDLHNCQWdGckM7O0FBQUEsUUFBSSxDQUFFcEQsT0FBRCxDQUFMLElBQTBCO0FBQ3hCO0FBRUYsS0F2R2tCLENBdUdsQjs7O0FBQ0EsUUFBSWdRLE9BQUosSUFBUTtBQUNOQyxpQkFBVyxDQUFYQTtBQUdGOztBQUFBLFVBQU07QUFBRTVPLGFBQU8sR0FBVDtBQUFBLFFBQU47QUFDQSxVQUFNNk8sVUFBVSxHQUFHO0FBQW5CO0FBQW1CLEtBQW5COztBQUVBLFFBQUksS0FBSixnQkFBeUI7QUFDdkIsOEJBQXdCLEtBQXhCO0FBR0YxUDs7QUFBQUEsTUFBRSxHQUFHME0sV0FBVyxDQUNkaUQsU0FBUyxDQUNQakYsV0FBVyxDQUFYQSxFQUFXLENBQVhBLEdBQWtCa0YsV0FBVyxDQUE3QmxGLEVBQTZCLENBQTdCQSxHQURPLElBRVBsTCxPQUFPLENBRkEsUUFHUCxLQUpKUSxhQUNXLENBREssQ0FBaEJBO0FBT0EsVUFBTTZQLFNBQVMsR0FBR0MsU0FBUyxDQUN6QnBGLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQmtGLFdBQVcsQ0FBN0JsRixFQUE2QixDQUE3QkEsR0FEeUIsSUFFekIsS0FGRixNQUEyQixDQUEzQjtBQUlBLDZCQTlIa0IsQ0FnSWxCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFFbEwsT0FBRCxDQUFELE1BQXdCLHFCQUE1QixTQUE0QixDQUE1QixFQUE2RDtBQUMzRDtBQUNBbUksWUFBTSxDQUFOQSwrQ0FGMkQsQ0FHM0Q7O0FBQ0E7QUFDQTtBQUNBLGtCQUFZLGdCQUFnQixLQUE1QixLQUFZLENBQVo7QUFDQUEsWUFBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSW9JLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFDQSxRQUFJO0FBQUE7QUFBQTtBQUFBLFFBQUosT0FsSmtCLENBb0psQjtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0EsUUFBSTtBQUNGbEQsV0FBSyxHQUFHLE1BQU0sZ0JBQWRBLFdBQWMsRUFBZEE7QUFDQyxPQUFDO0FBQUVtRCxrQkFBVSxFQUFaO0FBQUEsVUFBMkIsTUFBTSxpQkFBbEMsc0JBQWtDLEdBQWxDO0FBQ0QsS0FIRixDQUdFLFlBQVk7QUFDWjtBQUNBO0FBQ0E1TCxZQUFNLENBQU5BO0FBQ0E7QUFHRixLQWxLa0IsQ0FrS2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQUksQ0FBQyxjQUFELFNBQUMsQ0FBRCxJQUE2QixDQUFqQyxjQUFnRDtBQUM5QzZMLFlBQU0sR0FBTkE7QUFHRixLQTNLa0IsQ0EyS2xCO0FBQ0E7OztBQUNBLFFBQUkxTyxVQUFVLEdBQWQsR0E3S2tCLENBK0tsQjtBQUNBO0FBQ0E7O0FBQ0FyQyxZQUFRLEdBQUdBLFFBQVEsR0FDZixxREFBd0IwUSxXQUFXLENBRHBCLFFBQ29CLENBQW5DLENBRGUsR0FBbkIxUTs7QUFJQSxRQUFJb1EsaUJBQWlCLElBQUlwUSxRQUFRLEtBQWpDLFdBQWlEO0FBQy9DLFVBQUkwRCxLQUFKLEVBQTJELEVBQTNELE1Ba0JPO0FBQ0xtTixjQUFNLENBQU5BLFdBQWtCRyxtQkFBbUIsV0FBckNILEtBQXFDLENBQXJDQTs7QUFFQSxZQUFJQSxNQUFNLENBQU5BLGFBQUosVUFBa0M7QUFDaEM3USxrQkFBUSxHQUFHNlEsTUFBTSxDQUFqQjdRO0FBQ0FxTCxhQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFFSDtBQUNGO0FBRUQ7O0FBQUEsVUFBTXRMLEtBQUssR0FBRyxxREFBZCxRQUFjLENBQWQ7O0FBRUEsUUFBSSxDQUFDMk0sVUFBVSxDQUFmLEVBQWUsQ0FBZixFQUFxQjtBQUNuQixnQkFBMkM7QUFDekMsY0FBTSxVQUNILGtCQUFpQnJCLEdBQUksY0FBYXZLLEVBQW5DLDJDQUFDLEdBREgsb0ZBQU0sQ0FBTjtBQU1Gb0U7O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQTtBQUdGN0M7O0FBQUFBLGNBQVUsR0FBR3VPLFNBQVMsQ0FBQ0YsV0FBVyxDQUFaLFVBQVksQ0FBWixFQUEwQixLQUFoRHJPLE1BQXNCLENBQXRCQTs7QUFFQSxRQUFJLCtCQUFKLEtBQUksQ0FBSixFQUEyQjtBQUN6QixZQUFNNE8sUUFBUSxHQUFHLHdDQUFqQixVQUFpQixDQUFqQjtBQUNBLFlBQU1wRixVQUFVLEdBQUdvRixRQUFRLENBQTNCO0FBRUEsWUFBTUMsVUFBVSxHQUFHLCtCQUFuQixLQUFtQixDQUFuQjtBQUNBLFlBQU1DLFVBQVUsR0FBRywrQ0FBbkIsVUFBbUIsQ0FBbkI7QUFDQSxZQUFNQyxpQkFBaUIsR0FBR3JSLEtBQUssS0FBL0I7QUFDQSxZQUFNOE0sY0FBYyxHQUFHdUUsaUJBQWlCLEdBQ3BDdEUsYUFBYSxvQkFEdUIsS0FDdkIsQ0FEdUIsR0FBeEM7O0FBSUEsVUFBSSxlQUFnQnNFLGlCQUFpQixJQUFJLENBQUN2RSxjQUFjLENBQXhELFFBQWtFO0FBQ2hFLGNBQU13RSxhQUFhLEdBQUcvUCxNQUFNLENBQU5BLEtBQVk0UCxVQUFVLENBQXRCNVAsZUFDbkJ5SyxLQUFELElBQVcsQ0FBQ1EsS0FBSyxDQURuQixLQUNtQixDQURHakwsQ0FBdEI7O0FBSUEsWUFBSStQLGFBQWEsQ0FBYkEsU0FBSixHQUE4QjtBQUM1QixvQkFBMkM7QUFDekNsUCxtQkFBTyxDQUFQQSxLQUNHLEdBQ0NpUCxpQkFBaUIsMEJBRVosaUNBSFAsOEJBQUMsR0FLRSxlQUFjQyxhQUFhLENBQWJBLFVBTm5CbFA7QUFZRjs7QUFBQSxnQkFBTSxVQUNKLENBQUNpUCxpQkFBaUIsR0FDYiwwQkFBeUIvRixHQUFJLG9DQUFtQ2dHLGFBQWEsQ0FBYkEsVUFEbkQsb0NBSWIsOEJBQTZCeEYsVUFBVyw4Q0FBNkM5TCxLQUoxRixTQUtHLCtDQUNDcVIsaUJBQWlCLGlDQUViLHNCQVRWLEVBQU0sQ0FBTjtBQWFIO0FBaENELGFBZ0NPLHVCQUF1QjtBQUM1QnRRLFVBQUUsR0FBRyxpQ0FDSFEsTUFBTSxDQUFOQSxxQkFBNEI7QUFDMUJ0QixrQkFBUSxFQUFFNk0sY0FBYyxDQURFO0FBRTFCTixlQUFLLEVBQUVTLGtCQUFrQixRQUFRSCxjQUFjLENBSG5EL0wsTUFHNkI7QUFGQyxTQUE1QlEsQ0FERyxDQUFMUjtBQURLLGFBT0E7QUFDTDtBQUNBUSxjQUFNLENBQU5BO0FBRUg7QUFFRG1IOztBQUFBQSxVQUFNLENBQU5BOztBQUVBLFFBQUk7QUFBQTs7QUFDRixVQUFJNkksU0FBUyxHQUFHLE1BQU0sMERBQXRCLFVBQXNCLENBQXRCO0FBUUEsVUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBSixVQVRFLENBV0Y7O0FBQ0EsVUFBSSxDQUFDM0IsT0FBTyxJQUFSLFlBQUosT0FBbUM7QUFDakMsWUFBS3BPLEtBQUQsVUFBQ0EsSUFBNEJBLEtBQUQsVUFBQ0EsQ0FBakMsY0FBdUU7QUFDckUsZ0JBQU1nUSxXQUFXLEdBQUloUSxLQUFELFVBQUNBLENBQXJCLGFBRHFFLENBR3JFO0FBQ0E7QUFDQTs7QUFDQSxjQUFJZ1EsV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0Isa0JBQU1DLFVBQVUsR0FBRyx3Q0FBbkIsV0FBbUIsQ0FBbkI7QUFDQUEsc0JBQVUsQ0FBVkEsV0FBc0JSLG1CQUFtQixDQUN2Q1EsVUFBVSxDQUQ2QixVQUF6Q0EsS0FBeUMsQ0FBekNBOztBQUtBLGdCQUFJN0QsS0FBSyxDQUFMQSxTQUFlNkQsVUFBVSxDQUE3QixRQUFJN0QsQ0FBSixFQUF5QztBQUN2QyxvQkFBTTtBQUFFdEMsbUJBQUcsRUFBTDtBQUFldkssa0JBQUUsRUFBakI7QUFBQSxrQkFBNkJxUCxZQUFZLG9CQUEvQyxXQUErQyxDQUEvQztBQUtBLHFCQUFPLG1DQUFQLE9BQU8sQ0FBUDtBQUVIO0FBRURqTDs7QUFBQUEsZ0JBQU0sQ0FBTkE7QUFDQSxpQkFBTyxZQUFZLE1BQU0sQ0FBekIsQ0FBTyxDQUFQO0FBR0Y7O0FBQUEseUJBQWlCLENBQUMsQ0FBQzNELEtBQUssQ0FBeEIsWUE1QmlDLENBOEJqQzs7QUFDQSxZQUFJQSxLQUFLLENBQUxBLGFBQUosb0JBQTJDO0FBQ3pDOztBQUVBLGNBQUk7QUFDRixrQkFBTSxvQkFBTixNQUFNLENBQU47QUFDQWtRLHlCQUFhLEdBQWJBO0FBQ0EsV0FIRixDQUdFLFVBQVU7QUFDVkEseUJBQWEsR0FBYkE7QUFHRkg7O0FBQUFBLG1CQUFTLEdBQUcsTUFBTSx1RUFNaEI7QUFBRTNQLG1CQUFPLEVBTlgyUDtBQU1FLFdBTmdCLENBQWxCQTtBQVNIO0FBRUQ3STs7QUFBQUEsWUFBTSxDQUFOQTtBQUNBOztBQUVBLGdCQUEyQztBQUN6QyxjQUFNaUosT0FBWSxHQUFHLHlCQUFyQjtBQUNFeE0sY0FBRCxLQUFDQSxDQUFELGFBQUNBLEdBQ0F3TSxPQUFPLENBQVBBLG9CQUE0QkEsT0FBTyxDQUFuQ0EsdUJBQ0EsQ0FBRUosU0FBUyxDQUFWLFNBQUNBLENBRkgsZUFBQ3BNO0FBS0osT0ExRUUsQ0EwRUY7OztBQUNBLFlBQU15TSxtQkFBbUIsR0FBR3JSLE9BQU8sQ0FBUEEsV0FBbUIsZUFBL0M7O0FBRUEsVUFDR0EsT0FBRCxHQUFDQSxJQUNETixRQUFRLEtBRFIsU0FBQ00sSUFFRCw4QkFBSSxDQUFKLDZKQUZBLEdBQUNBLElBR0RpQixLQUhBLFFBQUNqQixJQUdEaUIsS0FBSyxDQUpQLFdBS0U7QUFDQTtBQUNBO0FBQ0FBLGFBQUssQ0FBTEE7QUFHRjs7QUFBQSxZQUFNLHVEQU1KcVEsWUFBWSxLQUNURCxtQkFBbUIsSUFBSSxDQUFDclIsT0FBTyxDQUEvQnFSLGdCQUFnRDtBQUFFRSxTQUFDLEVBQUg7QUFBUUMsU0FBQyxFQVB4RDtBQU8rQyxPQUR2QyxDQU5SLFFBUUdwUixDQUFELElBQU87QUFDYixZQUFJQSxDQUFDLENBQUwsV0FBaUI0RyxLQUFLLEdBQUdBLEtBQUssSUFBOUIsQ0FBaUJBLENBQWpCLEtBQ0s7QUFWUCxPQUFNLENBQU47O0FBYUEsaUJBQVc7QUFDVG1CLGNBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFVBQUkvRSxLQUFKLEVBQXFDLEVBS3JDK0U7O0FBQUFBLFlBQU0sQ0FBTkE7QUFFQTtBQUNBLEtBbEhGLENBa0hFLFlBQVk7QUFDWixVQUFJckksR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBRUY7O0FBQUE7QUFFSDtBQUVEMlI7O0FBQUFBLGFBQVcsa0JBSVR6UixPQUEwQixHQUpqQixJQUtIO0FBQ04sY0FBMkM7QUFDekMsVUFBSSxPQUFPNEUsTUFBTSxDQUFiLFlBQUosYUFBMkM7QUFDekMvQyxlQUFPLENBQVBBO0FBQ0E7QUFHRjs7QUFBQSxVQUFJLE9BQU8rQyxNQUFNLENBQU5BLFFBQVAsTUFBT0EsQ0FBUCxLQUFKLGFBQW1EO0FBQ2pEL0MsZUFBTyxDQUFQQSxNQUFlLDJCQUEwQjRPLE1BQXpDNU87QUFDQTtBQUVIO0FBRUQ7O0FBQUEsUUFBSTRPLE1BQU0sS0FBTkEsZUFBMEIseUJBQTlCLElBQStDO0FBQzdDLHNCQUFnQnpRLE9BQU8sQ0FBdkI7QUFDQSxZQUFNLENBQU4sZ0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFJRTBSLFdBQUcsRUFKTDtBQUtFQyxXQUFHLEVBQUUsWUFBWWxCLE1BQU0sS0FBTkEsY0FBeUIsS0FBekJBLE9BQXFDLFlBTjFEO0FBQ0UsT0FERixFQVFFO0FBQ0E7QUFDQTtBQVZGO0FBZUg7QUFFRDs7QUFBQSxrRkFPcUM7QUFDbkMsUUFBSTNRLEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUNBO0FBR0Y7O0FBQUEsUUFBSSx1Q0FBSixlQUF3QztBQUN0Q3FJLFlBQU0sQ0FBTkEscURBRHNDLENBR3RDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0F2RCxZQUFNLENBQU5BLG1CQVRzQyxDQVd0QztBQUNBOztBQUNBLFlBQU1nTixzQkFBTjtBQUdGOztBQUFBLFFBQUk7QUFDRjtBQUNBO0FBQ0E7O0FBRUEsVUFDRSxvQ0FDQSx1QkFGRixhQUdFO0FBQ0E7QUFBQyxTQUFDO0FBQUV0RSxjQUFJLEVBQU47QUFBQTtBQUFBLFlBQW1DLE1BQU0sb0JBQTFDLFNBQTBDLENBQTFDO0FBS0g7O0FBQUEsWUFBTTBELFNBQW1DLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUsxQ2hLLGFBQUssRUFMUDtBQUE0QyxPQUE1Qzs7QUFRQSxVQUFJLENBQUNnSyxTQUFTLENBQWQsT0FBc0I7QUFDcEIsWUFBSTtBQUNGQSxtQkFBUyxDQUFUQSxRQUFrQixNQUFNLGdDQUFnQztBQUFBO0FBQUE7QUFBeERBO0FBQXdELFdBQWhDLENBQXhCQTtBQUtBLFNBTkYsQ0FNRSxlQUFlO0FBQ2ZuUCxpQkFBTyxDQUFQQTtBQUNBbVAsbUJBQVMsQ0FBVEE7QUFFSDtBQUVEOztBQUFBO0FBQ0EsS0FwQ0YsQ0FvQ0UscUJBQXFCO0FBQ3JCLGFBQU8seUVBQVAsSUFBTyxDQUFQO0FBU0g7QUFFRDs7QUFBQSx5RUFPNkI7QUFDM0IsUUFBSTtBQUNGLFlBQU1hLGlCQUErQyxHQUFHLGdCQUF4RCxLQUF3RCxDQUF4RDs7QUFHQSxVQUFJM0IsVUFBVSxDQUFWQSxnQ0FBMkMsZUFBL0MsT0FBcUU7QUFDbkU7QUFHRjs7QUFBQSxZQUFNNEIsZUFBcUQsR0FDekRELGlCQUFpQixJQUFJLGFBQXJCQSxnQ0FERjtBQUlBLFlBQU1iLFNBQW1DLEdBQUdjLGVBQWUscUJBRXZELE1BQU0sZ0NBQWlDL00sR0FBRCxLQUFVO0FBQzlDeUssaUJBQVMsRUFBRXpLLEdBQUcsQ0FEZ0M7QUFFOUNxQixtQkFBVyxFQUFFckIsR0FBRyxDQUY4QjtBQUc5Q3NLLGVBQU8sRUFBRXRLLEdBQUcsQ0FBSEEsSUFIcUM7QUFJOUN3SyxlQUFPLEVBQUV4SyxHQUFHLENBQUhBLElBTmY7QUFFb0QsT0FBVixDQUFoQyxDQUZWO0FBU0EsWUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQU47O0FBRUEsZ0JBQTJDO0FBQ3pDLGNBQU07QUFBQTtBQUFBLFlBQXlCZ04sbUJBQU8sQ0FBdEMsMEJBQXNDLENBQXRDOztBQUNBLFlBQUksQ0FBQ0Msa0JBQWtCLENBQXZCLFNBQXVCLENBQXZCLEVBQW9DO0FBQ2xDLGdCQUFNLFVBQ0gseURBQXdEdFMsUUFEM0QsR0FBTSxDQUFOO0FBSUg7QUFFRDs7QUFBQTs7QUFFQSxVQUFJMlAsT0FBTyxJQUFYLFNBQXdCO0FBQ3RCNEMsZ0JBQVEsR0FBRyw0QkFDVCxpQ0FBcUI7QUFBQTtBQURaO0FBQ1ksU0FBckIsQ0FEUyx1QkFJVCxLQUpGQSxNQUFXLENBQVhBO0FBUUY7O0FBQUEsWUFBTWhSLEtBQUssR0FBRyxNQUFNLGNBQXdDLE1BQzFEb08sT0FBTyxHQUNILG9CQURHLFFBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sUUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRXZCLGNBQU0sRUFIUjtBQUlFeE0sY0FBTSxFQUFFLEtBSlY7QUFLRTBJLGVBQU8sRUFBRSxLQUxYO0FBTUU0RSxxQkFBYSxFQUFFLEtBZHpCO0FBUVEsT0FIRixDQUxjLENBQXBCO0FBbUJBa0MsZUFBUyxDQUFUQTtBQUNBO0FBQ0E7QUFDQSxLQWpFRixDQWlFRSxZQUFZO0FBQ1osYUFBTyxvREFBUCxVQUFPLENBQVA7QUFFSDtBQUVEa0I7O0FBQUFBLEtBQUcsZ0RBT2M7QUFDZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBTyxrQkFBUCxXQUFPLENBQVA7QUFHRjtBQUFBO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRUMsZ0JBQWMsS0FBNkI7QUFDekM7QUFHRkM7O0FBQUFBLGlCQUFlLEtBQXNCO0FBQ25DLFFBQUksQ0FBQyxLQUFMLFFBQWtCO0FBQ2xCLFVBQU0sMEJBQTBCLGtCQUFoQyxHQUFnQyxDQUFoQztBQUNBLFVBQU0sMEJBQTBCNVIsRUFBRSxDQUFGQSxNQUFoQyxHQUFnQ0EsQ0FBaEMsQ0FIbUMsQ0FLbkM7O0FBQ0EsUUFBSTZSLE9BQU8sSUFBSUMsWUFBWSxLQUF2QkQsZ0JBQTRDRSxPQUFPLEtBQXZELFNBQXFFO0FBQ25FO0FBR0YsS0FWbUMsQ0FVbkM7OztBQUNBLFFBQUlELFlBQVksS0FBaEIsY0FBbUM7QUFDakM7QUFHRixLQWZtQyxDQWVuQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0MsT0FBTyxLQUFkO0FBR0ZDOztBQUFBQSxjQUFZLEtBQW1CO0FBQzdCLFVBQU0sV0FBV2hTLEVBQUUsQ0FBRkEsTUFBakIsR0FBaUJBLENBQWpCLENBRDZCLENBRTdCO0FBQ0E7O0FBQ0EsUUFBSWlNLElBQUksS0FBSkEsTUFBZUEsSUFBSSxLQUF2QixPQUFtQztBQUNqQzdILFlBQU0sQ0FBTkE7QUFDQTtBQUdGLEtBVDZCLENBUzdCOzs7QUFDQSxVQUFNNk4sSUFBSSxHQUFHOU4sUUFBUSxDQUFSQSxlQUFiLElBQWFBLENBQWI7O0FBQ0EsY0FBVTtBQUNSOE4sVUFBSSxDQUFKQTtBQUNBO0FBRUYsS0FmNkIsQ0FlN0I7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHL04sUUFBUSxDQUFSQSx3QkFBZixDQUFlQSxDQUFmOztBQUNBLGdCQUFZO0FBQ1YrTixZQUFNLENBQU5BO0FBRUg7QUFFREM7O0FBQUFBLFVBQVEsU0FBMEI7QUFDaEMsV0FBTyxnQkFBUDtBQUdGO0FBQUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxzQkFFRTNFLE1BQWMsR0FGaEIsS0FHRWhPLE9BQXdCLEdBSDFCLElBSWlCO0FBQ2YsUUFBSXVRLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFFQSxRQUFJO0FBQUE7QUFBQSxRQUFKOztBQUVBLFFBQUluTixLQUFKLEVBQXFDLEVBaUJyQzs7QUFBQSxVQUFNaUssS0FBSyxHQUFHLE1BQU0sZ0JBQXBCLFdBQW9CLEVBQXBCO0FBQ0EsUUFBSXRMLFVBQVUsR0FBZDs7QUFFQSxRQUFJcUIsS0FBSixFQUErRCxFQUEvRCxNQXFCTztBQUNMbU4sWUFBTSxDQUFOQSxXQUFrQkcsbUJBQW1CLENBQUNILE1BQU0sQ0FBUCxVQUFyQ0EsS0FBcUMsQ0FBckNBOztBQUVBLFVBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQzdRLGdCQUFRLEdBQUc2USxNQUFNLENBQWpCN1E7QUFDQXFMLFdBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUVIO0FBQ0Q7O0FBQUEsVUFBTXRMLEtBQUssR0FBRyxxREFBZCxRQUFjLENBQWQsQ0F0RGUsQ0F3RGY7O0FBQ0EsY0FBMkM7QUFDekM7QUFHRjs7QUFBQSxVQUFNMEUsT0FBTyxDQUFQQSxJQUFZLENBQ2hCLG1DQUFvQ3lPLEtBQUQsSUFBb0I7QUFDckQsYUFBT0EsS0FBSyxHQUNSLG9CQUNFLG1EQUlFLE9BQU81UyxPQUFPLENBQWQseUJBQ0lBLE9BQU8sQ0FEWCxTQUVJLEtBUkEsTUFFTixDQURGLENBRFEsR0FBWjtBQUZjLEtBQ2hCLENBRGdCLEVBZWhCLGdCQUFnQkEsT0FBTyxDQUFQQSx3QkFBaEIsWUFmRixLQWVFLENBZmdCLENBQVptRSxDQUFOO0FBbUJGOztBQUFBLDhCQUE0RDtBQUMxRCxRQUFJbUIsU0FBUyxHQUFiOztBQUNBLFVBQU11TixNQUFNLEdBQUksV0FBVyxNQUFNO0FBQy9Cdk4sZUFBUyxHQUFUQTtBQURGOztBQUlBLFVBQU13TixlQUFlLEdBQUcsTUFBTSx5QkFBOUIsS0FBOEIsQ0FBOUI7O0FBRUEsbUJBQWU7QUFDYixZQUFNOUwsS0FBVSxHQUFHLFVBQ2hCLHdDQUF1Q3ZILEtBRDFDLEdBQW1CLENBQW5CO0FBR0F1SCxXQUFLLENBQUxBO0FBQ0E7QUFHRjs7QUFBQSxRQUFJNkwsTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQTtBQUdGRTs7QUFBQUEsVUFBUSxLQUFzQztBQUM1QyxRQUFJek4sU0FBUyxHQUFiOztBQUNBLFVBQU11TixNQUFNLEdBQUcsTUFBTTtBQUNuQnZOLGVBQVMsR0FBVEE7QUFERjs7QUFHQTtBQUNBLFdBQU91QixFQUFFLEdBQUZBLEtBQVcrRyxJQUFELElBQVU7QUFDekIsVUFBSWlGLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUEscUJBQWU7QUFDYixjQUFNL1MsR0FBUSxHQUFHLFVBQWpCLGlDQUFpQixDQUFqQjtBQUNBQSxXQUFHLENBQUhBO0FBQ0E7QUFHRjs7QUFBQTtBQVhGLEtBQU8rRyxDQUFQO0FBZUZtTTs7QUFBQUEsZ0JBQWMsV0FBb0M7QUFDaEQsVUFBTTtBQUFFL1MsVUFBSSxFQUFOO0FBQUEsUUFBcUIsa0JBQWtCMkUsTUFBTSxDQUFOQSxTQUE3QyxJQUEyQixDQUEzQjs7QUFDQSxRQUNFeEIsS0FERixFQUlFLEVBR0Y7O0FBQUEsV0FBTzZQLGFBQWEsV0FBVyxLQUF4QkEsS0FBYSxDQUFiQSxNQUEwQ3JGLElBQUQsSUFBVTtBQUN4RDtBQUNBO0FBRkYsS0FBT3FGLENBQVA7QUFNRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFVBQU07QUFBRWpULFVBQUksRUFBTjtBQUFBLFFBQXdCLGtCQUFrQjJFLE1BQU0sQ0FBTkEsU0FBaEQsSUFBOEIsQ0FBOUI7O0FBQ0EsUUFBSSxTQUFKLFdBQUksQ0FBSixFQUEyQjtBQUN6QixhQUFPLFNBQVAsV0FBTyxDQUFQO0FBRUY7O0FBQUEsV0FBUSx3QkFBd0JxTyxhQUFhLFdBQVcsS0FBeEJBLEtBQWEsQ0FBYkEsTUFDdkJyRixJQUFELElBQVU7QUFDZCxhQUFPLFNBQVAsV0FBTyxDQUFQO0FBQ0E7QUFINEJxRixhQUt0Qm5ULEdBQUQsSUFBUztBQUNkLGFBQU8sU0FBUCxXQUFPLENBQVA7QUFDQTtBQVBKLEtBQWdDbVQsQ0FBaEM7QUFXRm5KOztBQUFBQSxpQkFBZSxpQkFHQztBQUNkLFVBQU07QUFBRTBGLGVBQVMsRUFBWDtBQUFBLFFBQXFCLGdCQUEzQixPQUEyQixDQUEzQjs7QUFDQSxVQUFNMkQsT0FBTyxHQUFHLGNBQWhCLEdBQWdCLENBQWhCOztBQUNBQyxPQUFHLENBQUhBO0FBQ0EsV0FBTyxxQ0FBaUQ7QUFBQTtBQUFBO0FBR3REcFUsWUFBTSxFQUhnRDtBQUF4RDtBQUF3RCxLQUFqRCxDQUFQO0FBUUZxVTs7QUFBQUEsb0JBQWtCLGlCQUFnRDtBQUNoRSxRQUFJLEtBQUosS0FBYztBQUNabEwsWUFBTSxDQUFOQSxnQ0FFRXlKLHNCQUZGeko7QUFNQTtBQUNBO0FBRUg7QUFFRG1MOztBQUFBQSxRQUFNLG9CQUdXO0FBQ2YsV0FBTyxlQUVMLHlCQUZLLFdBQVAsV0FBTyxDQUFQO0FBL29DOEM7O0FBQUE7OztBQUE3Qm5MLE0sQ0FvQ1pxRyxNQXBDWXJHLEdBb0NVLG9CQXBDVkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1ZHJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeEJBLEMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQU1BLE1BQU1vTCxnQkFBZ0IsR0FBdEI7O0FBRU8sMkJBQXNDO0FBQzNDLE1BQUk7QUFBQTtBQUFBO0FBQUEsTUFBSjtBQUNBLE1BQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFOQSxZQUFmO0FBQ0EsTUFBSS9ULFFBQVEsR0FBRytULE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUloSCxJQUFJLEdBQUdnSCxNQUFNLENBQU5BLFFBQVg7QUFDQSxNQUFJeEgsS0FBSyxHQUFHd0gsTUFBTSxDQUFOQSxTQUFaO0FBQ0EsTUFBSUMsSUFBb0IsR0FBeEI7QUFFQUMsTUFBSSxHQUFHQSxJQUFJLEdBQUc3SCxrQkFBa0IsQ0FBbEJBLElBQWtCLENBQWxCQSx3QkFBSCxNQUFYNkg7O0FBRUEsTUFBSUYsTUFBTSxDQUFWLE1BQWlCO0FBQ2ZDLFFBQUksR0FBR0MsSUFBSSxHQUFHRixNQUFNLENBQXBCQztBQURGLFNBRU8sY0FBYztBQUNuQkEsUUFBSSxHQUFHQyxJQUFJLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFELEdBQUNBLENBQUQsR0FBMEIsSUFBR0EsUUFBN0IsTUFBZkYsUUFBVyxDQUFYQTs7QUFDQSxRQUFJRCxNQUFNLENBQVYsTUFBaUI7QUFDZkMsVUFBSSxJQUFJLE1BQU1ELE1BQU0sQ0FBcEJDO0FBRUg7QUFFRDs7QUFBQSxNQUFJekgsS0FBSyxJQUFJLGlCQUFiLFVBQXdDO0FBQ3RDQSxTQUFLLEdBQUc0SCxNQUFNLENBQUNDLFdBQVcsQ0FBWEEsdUJBQWY3SCxLQUFlNkgsQ0FBRCxDQUFkN0g7QUFHRjs7QUFBQSxNQUFJOEgsTUFBTSxHQUFHTixNQUFNLENBQU5BLFVBQWtCeEgsS0FBSyxJQUFLLElBQUdBLEtBQS9Cd0gsTUFBYjtBQUVBLE1BQUlELFFBQVEsSUFBSUEsUUFBUSxDQUFSQSxPQUFnQixDQUFoQkEsT0FBaEIsS0FBNkNBLFFBQVEsSUFBUkE7O0FBRTdDLE1BQ0VDLE1BQU0sQ0FBTkEsV0FDQyxDQUFDLGFBQWFGLGdCQUFnQixDQUFoQkEsS0FBZCxRQUFjQSxDQUFkLEtBQWtERyxJQUFJLEtBRnpELE9BR0U7QUFDQUEsUUFBSSxHQUFHLFFBQVFBLElBQUksSUFBbkJBLEVBQU8sQ0FBUEE7QUFDQSxRQUFJaFUsUUFBUSxJQUFJQSxRQUFRLENBQVJBLENBQVEsQ0FBUkEsS0FBaEIsS0FBcUNBLFFBQVEsR0FBRyxNQUFYQTtBQUx2QyxTQU1PLElBQUksQ0FBSixNQUFXO0FBQ2hCZ1UsUUFBSSxHQUFKQTtBQUdGOztBQUFBLE1BQUlqSCxJQUFJLElBQUlBLElBQUksQ0FBSkEsQ0FBSSxDQUFKQSxLQUFaLEtBQTZCQSxJQUFJLEdBQUcsTUFBUEE7QUFDN0IsTUFBSXNILE1BQU0sSUFBSUEsTUFBTSxDQUFOQSxDQUFNLENBQU5BLEtBQWQsS0FBaUNBLE1BQU0sR0FBRyxNQUFUQTtBQUVqQ3JVLFVBQVEsR0FBR0EsUUFBUSxDQUFSQSxpQkFBWEEsa0JBQVdBLENBQVhBO0FBQ0FxVSxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsYUFBVEEsS0FBU0EsQ0FBVEE7QUFFQSxTQUFRLEdBQUVQLFFBQVMsR0FBRUUsSUFBSyxHQUFFaFUsUUFBUyxHQUFFcVUsTUFBTyxHQUFFdEgsSUFBaEQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7eUNDeEVEOztBQUNBLE1BQU11SCxVQUFVLEdBQWhCOztBQUVPLCtCQUFnRDtBQUNyRCxTQUFPQSxVQUFVLENBQVZBLEtBQVAsS0FBT0EsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEQ7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLHFDQUFzRDtBQUMzRCxRQUFNQyxVQUFVLEdBQUcsUUFDakIsb0JBQTZDLFNBRDVCLENBQW5CO0FBR0EsUUFBTUMsWUFBWSxHQUFHaEksSUFBSSxHQUFHLGNBQUgsVUFBRyxDQUFILEdBQXpCO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXlELGFBQS9ELFlBQStELENBQS9EOztBQUlBLE1BQUlVLE1BQU0sS0FBS3FILFVBQVUsQ0FBekIsUUFBa0M7QUFDaEMsVUFBTSxVQUFXLG9EQUFtRGxKLEdBQXBFLEVBQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMa0IsU0FBSyxFQUFFLHlDQUZGLFlBRUUsQ0FGRjtBQUFBO0FBQUE7QUFLTGhNLFFBQUksRUFBRUEsSUFBSSxDQUFKQSxNQUFXZ1UsVUFBVSxDQUFWQSxPQUxuQixNQUtRaFU7QUFMRCxHQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTSw4Q0FFVztBQUNoQixRQUFNZ00sS0FBcUIsR0FBM0I7QUFDQWtJLGNBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCO0FBQ25DLFFBQUksT0FBT2xJLEtBQUssQ0FBWixHQUFZLENBQVosS0FBSixhQUF1QztBQUNyQ0EsV0FBSyxDQUFMQSxHQUFLLENBQUxBO0FBREYsV0FFTyxJQUFJbkQsS0FBSyxDQUFMQSxRQUFjbUQsS0FBSyxDQUF2QixHQUF1QixDQUFuQm5ELENBQUosRUFBK0I7QUFDcEM7QUFBRW1ELFdBQUssQ0FBTixHQUFNLENBQUxBLENBQUQsSUFBQ0EsQ0FBRCxLQUFDQTtBQURHLFdBRUE7QUFDTEEsV0FBSyxDQUFMQSxHQUFLLENBQUxBLEdBQWEsQ0FBQ0EsS0FBSyxDQUFOLEdBQU0sQ0FBTixFQUFiQSxLQUFhLENBQWJBO0FBRUg7QUFSRGtJO0FBU0E7QUFHRjs7QUFBQSx1Q0FBdUQ7QUFDckQsTUFDRSw2QkFDQyw2QkFBNkIsQ0FBQ0MsS0FBSyxDQURwQyxLQUNvQyxDQURwQyxJQUVBLGlCQUhGLFdBSUU7QUFDQSxXQUFPUCxNQUFNLENBQWIsS0FBYSxDQUFiO0FBTEYsU0FNTztBQUNMO0FBRUg7QUFFTTs7QUFBQSwwQ0FFWTtBQUNqQixRQUFNOUgsTUFBTSxHQUFHLElBQWYsZUFBZSxFQUFmO0FBQ0EvSyxRQUFNLENBQU5BLDBCQUFpQyxDQUFDLE1BQUQsS0FBQyxDQUFELEtBQWtCO0FBQ2pELFFBQUk4SCxLQUFLLENBQUxBLFFBQUosS0FBSUEsQ0FBSixFQUEwQjtBQUN4QnJFLFdBQUssQ0FBTEEsUUFBZTRQLElBQUQsSUFBVXRJLE1BQU0sQ0FBTkEsWUFBbUJ1SSxzQkFBc0IsQ0FBakU3UCxJQUFpRSxDQUF6Q3NILENBQXhCdEg7QUFERixXQUVPO0FBQ0xzSCxZQUFNLENBQU5BLFNBQWdCdUksc0JBQXNCLENBQXRDdkksS0FBc0MsQ0FBdENBO0FBRUg7QUFORC9LO0FBT0E7QUFHSzs7QUFBQSx3QkFFTCxHQUZLLGtCQUdZO0FBQ2pCdVQsa0JBQWdCLENBQWhCQSxRQUEwQkosWUFBRCxJQUFrQjtBQUN6Q3JMLFNBQUssQ0FBTEEsS0FBV3FMLFlBQVksQ0FBdkJyTCxJQUFXcUwsRUFBWHJMLFVBQXlDbkksR0FBRCxJQUFTUixNQUFNLENBQU5BLE9BQWpEMkksR0FBaUQzSSxDQUFqRDJJO0FBQ0FxTCxnQkFBWSxDQUFaQSxRQUFxQixnQkFBZ0JoVSxNQUFNLENBQU5BLFlBQXJDZ1UsS0FBcUNoVSxDQUFyQ2dVO0FBRkZJO0FBSUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEYywyQkFBMkIsQ0FBRSxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0VyQyxxQ0FBdUU7QUFDNUUsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBUTdVLFFBQUQsSUFBeUM7QUFDOUMsVUFBTW1SLFVBQVUsR0FBRzJELEVBQUUsQ0FBRkEsS0FBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQUksQ0FBSixZQUFpQjtBQUNmO0FBR0Y7O0FBQUEsVUFBTUMsTUFBTSxHQUFJaEosS0FBRCxJQUFtQjtBQUNoQyxVQUFJO0FBQ0YsZUFBT2lKLGtCQUFrQixDQUF6QixLQUF5QixDQUF6QjtBQUNBLE9BRkYsQ0FFRSxVQUFVO0FBQ1YsY0FBTTVVLEdBQThCLEdBQUcsVUFBdkMsd0JBQXVDLENBQXZDO0FBR0FBLFdBQUcsQ0FBSEE7QUFDQTtBQUVIO0FBVkQ7O0FBV0EsVUFBTTBMLE1BQWtELEdBQXhEO0FBRUF4SyxVQUFNLENBQU5BLHFCQUE2QjJULFFBQUQsSUFBc0I7QUFDaEQsWUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQWhCLFFBQWdCLENBQWhCO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHakUsVUFBVSxDQUFDK0QsQ0FBQyxDQUF0QixHQUFvQixDQUFwQjs7QUFDQSxVQUFJRSxDQUFDLEtBQUwsV0FBcUI7QUFDbkJ0SixjQUFNLENBQU5BLFFBQU0sQ0FBTkEsR0FBbUIsQ0FBQ3NKLENBQUMsQ0FBREEsUUFBRCxHQUFDQSxDQUFELEdBQ2ZBLENBQUMsQ0FBREEsZUFBa0I3USxLQUFELElBQVd3USxNQUFNLENBRG5CLEtBQ21CLENBQWxDSyxDQURlLEdBRWZGLENBQUMsQ0FBREEsU0FDQSxDQUFDSCxNQUFNLENBRFBHLENBQ08sQ0FBUCxDQURBQSxHQUVBSCxNQUFNLENBSlZqSixDQUlVLENBSlZBO0FBTUg7QUFWRHhLO0FBV0E7QUE5QkY7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3VDQzlCRDtBQUNBOztBQUNBLDBCQUFrQztBQUNoQyxTQUFPK1QsR0FBRyxDQUFIQSxnQ0FBUCxNQUFPQSxDQUFQO0FBR0Y7O0FBQUEsK0JBQXVDO0FBQ3JDLFFBQU1uSixRQUFRLEdBQUdILEtBQUssQ0FBTEEsbUJBQXlCQSxLQUFLLENBQUxBLFNBQTFDLEdBQTBDQSxDQUExQzs7QUFDQSxnQkFBYztBQUNaQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsU0FBZSxDQUF2QkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxRQUFNRSxNQUFNLEdBQUdGLEtBQUssQ0FBTEEsV0FBZixLQUFlQSxDQUFmOztBQUNBLGNBQVk7QUFDVkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLE1BQVJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsU0FBTztBQUFFOUssT0FBRyxFQUFMO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFHSzs7QUFBQSx3Q0FPTDtBQUNBLFFBQU1xVSxRQUFRLEdBQUcsQ0FBQ0MsZUFBZSxDQUFmQSxzQkFBRCxvQkFBakIsR0FBaUIsQ0FBakI7QUFJQSxRQUFNSixNQUFzQyxHQUE1QztBQUNBLE1BQUlLLFVBQVUsR0FBZDtBQUNBLFFBQU1DLGtCQUFrQixHQUFHSCxRQUFRLENBQVJBLElBQ25CbkosT0FBRCxJQUFhO0FBQ2hCLFFBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNEJ1SixjQUFjLENBQUN2SixPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhEO0FBQ0FnSixZQUFNLENBQU5BLEdBQU0sQ0FBTkEsR0FBYztBQUFFUSxXQUFHLEVBQUVILFVBQVA7QUFBQTtBQUFkTDtBQUFjLE9BQWRBO0FBQ0EsYUFBT2xKLE1BQU0sR0FBSUMsUUFBUSxtQkFBWixXQUFiO0FBSEYsV0FJTztBQUNMLGFBQVEsSUFBRzBKLFdBQVcsU0FBdEI7QUFFSDtBQVR3Qk4sVUFBM0IsRUFBMkJBLENBQTNCLENBUEEsQ0FtQkE7QUFDQTs7QUFDQSxZQUFtQztBQUNqQyxRQUFJTyxnQkFBZ0IsR0FBcEI7QUFDQSxRQUFJQyxrQkFBa0IsR0FBdEIsRUFGaUMsQ0FJakM7O0FBQ0EsVUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsVUFBSUMsUUFBUSxHQUFaOztBQUVBLFdBQUssSUFBSUMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLG9CQUF3Q0EsQ0FBeEMsSUFBNkM7QUFDM0NELGdCQUFRLElBQUk3QixNQUFNLENBQU5BLGFBQVo2QixnQkFBWTdCLENBQVo2QjtBQUNBSCx3QkFBZ0I7O0FBRWhCLFlBQUlBLGdCQUFnQixHQUFwQixLQUE0QjtBQUMxQkMsNEJBQWtCO0FBQ2xCRCwwQkFBZ0IsR0FBaEJBO0FBRUg7QUFDRDs7QUFBQTtBQVpGOztBQWVBLFVBQU1LLFNBQXNDLEdBQTVDO0FBRUEsUUFBSUMsdUJBQXVCLEdBQUdiLFFBQVEsQ0FBUkEsSUFDdEJuSixPQUFELElBQWE7QUFDaEIsVUFBSUEsT0FBTyxDQUFQQSxtQkFBMkJBLE9BQU8sQ0FBUEEsU0FBL0IsR0FBK0JBLENBQS9CLEVBQXNEO0FBQ3BELGNBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE0QnVKLGNBQWMsQ0FBQ3ZKLE9BQU8sQ0FBUEEsU0FBaUIsQ0FBbEUsQ0FBaURBLENBQUQsQ0FBaEQsQ0FEb0QsQ0FFcEQ7QUFDQTs7QUFDQSxZQUFJaUssVUFBVSxHQUFHblYsR0FBRyxDQUFIQSxlQUFqQixFQUFpQkEsQ0FBakI7QUFDQSxZQUFJb1YsVUFBVSxHQUFkLE1BTG9ELENBT3BEO0FBQ0E7O0FBQ0EsWUFBSUQsVUFBVSxDQUFWQSxnQkFBMkJBLFVBQVUsQ0FBVkEsU0FBL0IsSUFBdUQ7QUFDckRDLG9CQUFVLEdBQVZBO0FBRUY7O0FBQUEsWUFBSSxDQUFDM0IsS0FBSyxDQUFDNEIsUUFBUSxDQUFDRixVQUFVLENBQVZBLFVBQXBCLENBQW9CQSxDQUFELENBQVQsQ0FBVixFQUErQztBQUM3Q0Msb0JBQVUsR0FBVkE7QUFHRjs7QUFBQSx3QkFBZ0I7QUFDZEQsb0JBQVUsR0FBR0wsZUFBYks7QUFHRkY7O0FBQUFBLGlCQUFTLENBQVRBLFVBQVMsQ0FBVEE7QUFDQSxlQUFPakssTUFBTSxHQUNUQyxRQUFRLEdBQ0wsVUFBU2tLLFVBREosWUFFTCxPQUFNQSxVQUhBLFVBSVIsT0FBTUEsVUFKWDtBQXJCRixhQTBCTztBQUNMLGVBQVEsSUFBR1IsV0FBVyxTQUF0QjtBQUVIO0FBL0IyQk4sWUFBOUIsRUFBOEJBLENBQTlCO0FBa0NBLFdBQU87QUFDTFIsUUFBRSxFQUFFLFdBQVksSUFBR1csa0JBRGQsU0FDRCxDQURDO0FBQUE7QUFBQTtBQUlMYyxnQkFBVSxFQUFHLElBQUdKLHVCQUpsQjtBQUFPLEtBQVA7QUFRRjs7QUFBQSxTQUFPO0FBQ0xyQixNQUFFLEVBQUUsV0FBWSxJQUFHVyxrQkFEZCxTQUNELENBREM7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEQ7QUE2UUE7QUFDQTtBQUNBOzs7QUFDTyxzQkFFRjtBQUNILE1BQUllLElBQUksR0FBUjtBQUNBO0FBRUEsU0FBUSxDQUFDLEdBQUQsU0FBb0I7QUFDMUIsUUFBSSxDQUFKLE1BQVc7QUFDVEEsVUFBSSxHQUFKQTtBQUNBbkssWUFBTSxHQUFHbEYsRUFBRSxDQUFDLEdBQVprRixJQUFXLENBQVhBO0FBRUY7O0FBQUE7QUFMRjtBQVNLOztBQUFBLDZCQUE2QjtBQUNsQyxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBK0JuSCxNQUFNLENBQTNDO0FBQ0EsU0FBUSxHQUFFNE8sUUFBUyxLQUFJSSxRQUFTLEdBQUV1QyxJQUFJLEdBQUcsTUFBSCxPQUFnQixFQUF0RDtBQUdLOztBQUFBLGtCQUFrQjtBQUN2QixRQUFNO0FBQUE7QUFBQSxNQUFXdlIsTUFBTSxDQUF2QjtBQUNBLFFBQU1nSSxNQUFNLEdBQUd3SixpQkFBZjtBQUNBLFNBQU9uVyxJQUFJLENBQUpBLFVBQWUyTSxNQUFNLENBQTVCLE1BQU8zTSxDQUFQO0FBR0s7O0FBQUEsbUNBQXdEO0FBQzdELFNBQU8sNENBRUh1UCxTQUFTLENBQVRBLGVBQXlCQSxTQUFTLENBQWxDQSxRQUZKO0FBS0s7O0FBQUEsd0JBQXdDO0FBQzdDLFNBQU96SyxHQUFHLENBQUhBLFlBQWdCQSxHQUFHLENBQTFCO0FBR0s7O0FBQUEsNkNBSWtEO0FBQ3ZELFlBQTJDO0FBQUE7O0FBQ3pDLDBCQUFJc1IsR0FBRyxDQUFQLHNCQUFJQSxlQUFKLGlCQUFvQztBQUNsQyxZQUFNN04sT0FBTyxHQUFJLElBQUc4TixjQUFjLEtBQWxDO0FBR0EsWUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVIO0FBQ0QsR0FUdUQsQ0FTdkQ7OztBQUNBLFFBQU12UixHQUFHLEdBQUdxTyxHQUFHLENBQUhBLE9BQVlBLEdBQUcsQ0FBSEEsT0FBV0EsR0FBRyxDQUFIQSxJQUFuQzs7QUFFQSxNQUFJLENBQUNpRCxHQUFHLENBQVIsaUJBQTBCO0FBQ3hCLFFBQUlqRCxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBbEIsV0FBOEI7QUFDNUI7QUFDQSxhQUFPO0FBQ0xtRCxpQkFBUyxFQUFFLE1BQU1DLG1CQUFtQixDQUFDcEQsR0FBRyxDQUFKLFdBQWdCQSxHQUFHLENBRHpELEdBQ3NDO0FBRC9CLE9BQVA7QUFJRjs7QUFBQTtBQUdGOztBQUFBLFFBQU1uUyxLQUFLLEdBQUcsTUFBTW9WLEdBQUcsQ0FBSEEsZ0JBQXBCLEdBQW9CQSxDQUFwQjs7QUFFQSxNQUFJdFIsR0FBRyxJQUFJMFIsU0FBUyxDQUFwQixHQUFvQixDQUFwQixFQUEyQjtBQUN6QjtBQUdGOztBQUFBLE1BQUksQ0FBSixPQUFZO0FBQ1YsVUFBTWpPLE9BQU8sR0FBSSxJQUFHOE4sY0FBYyxLQUVoQywrREFBOERyVixLQUZoRTtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFHRjs7QUFBQSxZQUEyQztBQUN6QyxRQUFJRCxNQUFNLENBQU5BLDRCQUFtQyxDQUFDb1MsR0FBRyxDQUEzQyxLQUFpRDtBQUMvQ3ZSLGFBQU8sQ0FBUEEsS0FDRyxHQUFFeVUsY0FBYyxLQURuQnpVO0FBTUg7QUFFRDs7QUFBQTtBQUdLOztBQUFBLE1BQU02VSxhQUFhLEdBQUcsd0dBQXRCLFNBQXNCLENBQXRCOzs7QUFlQSxtQ0FBc0Q7QUFDM0QsWUFBNEM7QUFDMUMsUUFBSTNMLEdBQUcsS0FBSEEsUUFBZ0IsZUFBcEIsVUFBNkM7QUFDM0MvSixZQUFNLENBQU5BLGtCQUEwQkwsR0FBRCxJQUFTO0FBQ2hDLFlBQUkrVixhQUFhLENBQWJBLGlCQUErQixDQUFuQyxHQUF1QztBQUNyQzdVLGlCQUFPLENBQVBBLEtBQ0cscURBQW9EbEIsR0FEdkRrQjtBQUlIO0FBTkRiO0FBUUg7QUFFRDs7QUFBQSxTQUFPLDBCQUFQLEdBQU8sQ0FBUDtBQUdLOztBQUFBLE1BQU0yVixFQUFFLEdBQUcsdUJBQVg7O0FBQ0EsTUFBTTNHLEVBQUUsR0FDYjJHLEVBQUUsSUFDRixPQUFPMUcsV0FBVyxDQUFsQixTQURBMEcsY0FFQSxPQUFPMUcsV0FBVyxDQUFsQixZQUhLOzs7Ozs7Ozs7Ozs7O0FDNVlNLHdCQUF3QiwwQ0FBMEMsZ0RBQWdELGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7OztBQ0RBLGlCQUFpQixtQkFBTyxDQUFDLG1FQUFvQjs7Ozs7Ozs7Ozs7O0FDQTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLHdHQUErQjs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBOztBQUdBLFNBQVMyRyxLQUFULENBQWU7QUFBRXBILFdBQUY7QUFBYStHLFdBQWI7QUFBd0J2WDtBQUF4QixDQUFmLEVBQWlEO0FBQy9DLFFBQU02WCxPQUFPLEdBQUc1WCw2REFBUyxFQUF6QjtBQUNBLFFBQU07QUFBRVM7QUFBRixNQUFlbVgsT0FBckI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsQ0FDWixZQURZLEVBRVosY0FGWSxFQUdaLFVBSFksRUFJWixVQUpZLEVBS1osY0FMWSxFQU1aLFVBTlksRUFPWixjQVBZLEVBUVosaUJBUlksRUFTWixnQkFUWSxFQVVaLGVBVlksRUFXWixZQVhZLEVBWVosWUFaWSxFQWFaLGNBYlksQ0FBZDtBQWVBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQyxvREFBakI7QUFBQSw0QkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFHR0QsS0FBSyxDQUFDRSxRQUFOLENBQWV0WCxRQUFmLElBQTJCLElBQTNCLGdCQUFrQyxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSHJDLGVBSUUscUVBQUMsa0VBQUQ7QUFBaUIsWUFBTSxFQUFFVixNQUF6QjtBQUFBLDZCQUNFLHFFQUFDLFNBQUQsb0JBQWV1WCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFPR08sS0FBSyxDQUFDRSxRQUFOLENBQWV0WCxRQUFmLElBQTJCLElBQTNCLGdCQUFrQyxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0FBRWNrWCxvRUFBZixFOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUssU0FBUyxHQUFHLFdBQWxCOztBQUNBLE1BQU1DLGVBQWUsR0FBRyxDQUFDO0FBQUVsWSxRQUFGO0FBQVVnRDtBQUFWLENBQUQsS0FBMEI7QUFDaEQsUUFBTTlDLFNBQVMsR0FBR0MsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNGLFNBQWxCLENBQTdCO0FBQ0EsUUFBTWlZLGVBQWUsR0FBR2pZLFNBQUgsYUFBR0EsU0FBSCx1QkFBR0EsU0FBUyxDQUFFSSxLQUFuQztBQUVBLE1BQUk4WCxpQkFBaUIsR0FBRyxDQUN0QixHQURzQixFQUV0QixTQUZzQixFQUd0QixpQkFIc0IsRUFJdEIsZ0JBSnNCLEVBS3RCLE9BTHNCLEVBTXRCLFNBTnNCLEVBT3RCLFVBUHNCLEVBUXRCLGdCQVJzQixFQVN0QixhQVRzQixFQVV0QixpQkFWc0IsRUFXdEIsYUFYc0IsRUFZdEIsbUJBWnNCLEVBYXRCLFdBYnNCLEVBY3RCLFFBZHNCLEVBZXRCLGVBZnNCLEVBZ0J0QixZQWhCc0IsQ0FBeEI7QUFtQkEsTUFBSUMsZUFBZSxHQUFHRCxpQkFBaUIsQ0FBQ0UsT0FBbEIsQ0FBMEJ0WSxNQUFNLENBQUNVLFFBQWpDLE1BQStDLENBQUMsQ0FBdEU7O0FBRUEsTUFBSXVYLFNBQVMsTUFBTSxDQUFDRSxlQUFoQixJQUFtQ0UsZUFBdkMsRUFBd0Q7QUFDdERyWSxVQUFNLENBQUM0USxJQUFQLENBQVksR0FBWjtBQUNEOztBQUVELFNBQU81TixRQUFQO0FBQ0QsQ0E5QkQ7O0FBK0Jla1YsOEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNSyxjQUFjLEdBQUlDLEtBQUQsSUFBVztBQUN2QyxTQUFPO0FBQ0xDLFFBQUksRUFBRUMsc0RBREQ7QUFFTEYsU0FGSztBQUdMRyxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1DLGFBQWEsR0FBSUMsUUFBRCxJQUFjO0FBQ3pDLFNBQU87QUFDTEosUUFBSSxFQUFFQywyREFERDtBQUVMRztBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTUMsY0FBYyxHQUFJOVEsS0FBRCxJQUFXO0FBQ3ZDLFNBQU87QUFDTHlRLFFBQUksRUFBRUMsa0VBREQ7QUFFTDFRO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxNQUFNK1EsZUFBZSxHQUFJeFksSUFBRCxJQUFVO0FBQ3ZDLFNBQU87QUFDTGtZLFFBQUksRUFBRUMsK0RBREQ7QUFFTG5ZLFFBRks7QUFHTG9ZLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTUssWUFBWSxHQUFJelksSUFBRCxJQUFVO0FBQ3BDLFNBQU87QUFDTGtZLFFBQUksRUFBRUMsK0RBREQ7QUFFTG5ZLFFBRks7QUFHTG9ZLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTU0sV0FBVyxHQUFJalIsS0FBRCxJQUFXO0FBQ3BDLFNBQU87QUFDTHlRLFFBQUksRUFBRUMsNERBREQ7QUFFTDFRLFNBRks7QUFHTDJRLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBUUEsTUFBTU8sTUFBTSxHQUFHLE1BQU07QUFDMUJDLGNBQVksQ0FBQ0MsVUFBYixDQUF3QixVQUF4QjtBQUNBLFNBQU87QUFDTFgsUUFBSSxFQUFFQyx3REFBaUJXO0FBRGxCLEdBQVA7QUFHRCxDQUxNO0FBTUEsTUFBTUMsV0FBVyxHQUFJQyxLQUFELElBQVc7QUFDcEMsU0FBTztBQUNMZCxRQUFJLEVBQUVDLHlEQUREO0FBRUxhLFNBRks7QUFHTFosV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNYSxrQkFBa0IsR0FBSUQsS0FBRCxJQUFXO0FBQzNDLFNBQU87QUFDTGQsUUFBSSxFQUFFQyxpRUFERDtBQUVMYSxTQUZLO0FBR0xaLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTWMsaUJBQWlCLEdBQUl6UixLQUFELElBQVc7QUFDMUMsU0FBTztBQUNMeVEsUUFBSSxFQUFFQyw4REFERDtBQUVMMVEsU0FGSztBQUdMMlEsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNZSxTQUFTLEdBQUlDLEdBQUQsSUFBUztBQUNoQyxTQUFPO0FBQ0xsQixRQUFJLEVBQUVDLHdEQUREO0FBRUxpQixPQUZLO0FBR0xoQixXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1pQixnQkFBZ0IsR0FBSUQsR0FBRCxJQUFTO0FBQ3ZDLFNBQU87QUFDTGxCLFFBQUksRUFBRUMsZ0VBREQ7QUFFTGlCLE9BRks7QUFHTGhCLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTWtCLGVBQWUsR0FBSTdSLEtBQUQsSUFBVztBQUN4QyxTQUFPO0FBQ0x5USxRQUFJLEVBQUVDLGtFQUREO0FBRUwxUTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTThSLE9BQU8sR0FBSUMsUUFBRCxJQUFjO0FBQ25DLFNBQU87QUFDTHRCLFFBQUksRUFBRUMseURBREQ7QUFFTHFCLFlBRks7QUFHTHBCLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTXFCLGNBQWMsR0FBSUQsUUFBRCxJQUFjO0FBQzFDLFNBQU87QUFDTHRCLFFBQUksRUFBRUMsaUVBREQ7QUFFTHFCLFlBRks7QUFHTHBCLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTXNCLGlCQUFpQixHQUFJalMsS0FBRCxJQUFXO0FBQzFDLFNBQU87QUFDTHlRLFFBQUksRUFBRUMsOERBREQ7QUFFTDFRO0FBRkssR0FBUDtBQUlELENBTE07QUFNQSxNQUFNa1MsY0FBYyxHQUFJSCxRQUFELElBQWM7QUFDMUMsU0FBTztBQUNMdEIsUUFBSSxFQUFFQyw0REFERDtBQUVMcUI7QUFGSyxHQUFQO0FBSUQsQ0FMTSxDOzs7Ozs7Ozs7Ozs7QUMvR1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNSSxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxvQkFBN0I7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxpQkFBaUIsR0FBSXRNLElBQUQsS0FBVztBQUMxQzZKLE1BQUksRUFBRTBCLG1CQURvQztBQUUxQ3ZMLE1BRjBDO0FBRzFDK0osU0FBTyxFQUFFO0FBSGlDLENBQVgsQ0FBMUI7QUFLQSxNQUFNd0MsYUFBYSxHQUFJdk0sSUFBRCxJQUFVO0FBQ3JDLFNBQU87QUFDTDZKLFFBQUksRUFBRTJCLG1CQUREO0FBRUx4TDtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTXdNLG1CQUFtQixHQUFJcFQsS0FBRCxJQUFXO0FBQzVDLFNBQU87QUFDTHlRLFFBQUksRUFBRTRCLG9CQUREO0FBRUxyUztBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTXFULHVCQUF1QixHQUFJQyxVQUFELElBQWdCO0FBQ3JELFNBQU87QUFDTDdDLFFBQUksRUFBRTZCLGlCQUREO0FBRUxnQjtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTUMsYUFBYSxHQUFJQyxVQUFELElBQWdCO0FBQzNDLFNBQU87QUFDTC9DLFFBQUksRUFBRThCLHFCQUREO0FBRUxpQjtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTUMsY0FBYyxHQUFJelQsS0FBRCxJQUFXO0FBQ3ZDLFNBQU87QUFDTHlRLFFBQUksRUFBRStCLGdCQUREO0FBRUx4UztBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTTBULFNBQVMsR0FBSUMsVUFBRCxJQUFnQjtBQUN2QyxTQUFPO0FBQ0xsRCxRQUFJLEVBQUVnQyxVQUREO0FBRUxrQixjQUZLO0FBR0xoRCxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1pRCxVQUFVLEdBQUlDLE9BQUQsSUFBYTtBQUNyQyxTQUFPO0FBQ0xwRCxRQUFJLEVBQUVpQyxXQUREO0FBRUxtQixXQUZLO0FBR0xsRCxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1tRCxpQkFBaUIsR0FBSTlULEtBQUQsSUFBVztBQUMxQyxTQUFPO0FBQ0x5USxRQUFJLEVBQUVrQyxtQkFERDtBQUVMM1MsU0FGSztBQUdMMlEsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNb0QsaUJBQWlCLEdBQUlDLFdBQUQsSUFBaUI7QUFDaEQsU0FBTztBQUNMdkQsUUFBSSxFQUFFbUMsWUFERDtBQUVMb0I7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU1BLE1BQU1DLGFBQWEsR0FBSUMsWUFBRCxJQUFrQjtBQUM3QyxTQUFPO0FBQ0x6RCxRQUFJLEVBQUVxQyxhQUREO0FBRUxvQjtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTUMsaUJBQWlCLEdBQUluVSxLQUFELElBQVc7QUFDMUMsU0FBTztBQUNMeVEsUUFBSSxFQUFFb0MsbUJBREQ7QUFFTDdTLFNBRks7QUFHTDJRLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTXlELGVBQWUsR0FBSUMsV0FBRCxJQUFpQjtBQUM5QyxTQUFPO0FBQ0w1RCxRQUFJLEVBQUVzQyxnQkFERDtBQUVMc0IsZUFGSztBQUdMMUQsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNMkQsZUFBZSxHQUFJQSxlQUFELElBQXFCO0FBQ2xELFNBQU87QUFDTDdELFFBQUksRUFBRXdDLHNCQUREO0FBRUxxQixtQkFGSztBQUdMM0QsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFRQSxNQUFNNEQscUJBQXFCLEdBQUl2VSxLQUFELElBQVc7QUFDOUMsU0FBTztBQUNMeVEsUUFBSSxFQUFFdUMsdUJBREQ7QUFFTGhULFNBRks7QUFHTDJRLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NLEM7Ozs7Ozs7Ozs7OztBQzFHUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTTZELFlBQVksR0FBRyxjQUFyQjtBQUNBLE1BQU1DLHdCQUF3QixHQUFHLHlCQUFqQztBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRywwQkFBaEM7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx3QkFBaEM7QUFFQSxNQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUNuQyxTQUFPO0FBQ0x2RSxRQUFJLEVBQUVpRSxVQUREO0FBRUwvRCxXQUFPLEVBQUU7QUFGSixHQUFQO0FBSUQsQ0FMTTtBQU1BLE1BQU1zRSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxTQUFPO0FBQ0x6RSxRQUFJLEVBQUVrRSxlQUREO0FBRUxPLFNBRks7QUFHTHZFLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBUUEsTUFBTXdFLGlCQUFpQixHQUFJRCxLQUFELElBQVc7QUFDMUMsU0FBTztBQUNMekUsUUFBSSxFQUFFK0QsWUFERDtBQUVMVSxTQUZLO0FBR0x2RSxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU15RSxtQkFBbUIsR0FBSUMsWUFBRCxJQUFrQjtBQUNuRCxTQUFPO0FBQ0w1RSxRQUFJLEVBQUVnRSx3QkFERDtBQUVMWSxnQkFGSztBQUdMMUUsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFRQSxNQUFNMkUsaUJBQWlCLEdBQUlDLGFBQUQsSUFBbUI7QUFDbEQsU0FBTztBQUNMOUUsUUFBSSxFQUFFbUUsWUFERDtBQUVMVyxpQkFGSztBQUdMNUUsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNNkUsa0JBQWtCLEdBQUlDLG1CQUFELElBQXlCO0FBQ3pELFNBQU87QUFDTGhGLFFBQUksRUFBRW9FLHVCQUREO0FBRUxZLHVCQUZLO0FBR0w5RSxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQVFBLE1BQU0rRSxpQkFBaUIsR0FBSUMsT0FBRCxJQUFhO0FBQzVDLFNBQU87QUFDTGxGLFFBQUksRUFBRXFFLFlBREQ7QUFFTGEsV0FGSztBQUdMaEYsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNaUYsa0JBQWtCLEdBQUlDLFdBQUQsSUFBaUI7QUFDakQsU0FBTztBQUNMcEYsUUFBSSxFQUFFc0UsdUJBREQ7QUFFTGMsZUFGSztBQUdMbEYsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk0sQzs7Ozs7Ozs7Ozs7O0FDNURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTW1GLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGVBQXRCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx3QkFBaEM7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx1QkFBL0I7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQ3JDLFNBQU87QUFDTGpHLFFBQUksRUFBRXdGLGFBREQ7QUFFTHRGLFdBQU8sRUFBRTtBQUZKLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTWdHLFVBQVUsR0FBSUMsUUFBRCxJQUFjO0FBQ3RDLFNBQU87QUFDTG5HLFFBQUksRUFBRXlGLGlCQUREO0FBRUxVLFlBRks7QUFHTGpHLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTWtHLGdCQUFnQixHQUFJN1csS0FBRCxJQUFXO0FBQ3pDLFNBQU87QUFDTHlRLFFBQUksRUFBRTBGLHdCQUREO0FBRUxuVyxTQUZLO0FBR0wyUSxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1tRyxtQkFBbUIsR0FBSUMsYUFBRCxJQUFtQjtBQUNwRCxTQUFPO0FBQ0x0RyxRQUFJLEVBQUVxRixlQUREO0FBRUxpQixpQkFGSztBQUdMcEcsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNcUcsb0JBQW9CLEdBQUlDLGNBQUQsSUFBb0I7QUFDdEQsU0FBTztBQUNMeEcsUUFBSSxFQUFFc0YsZUFERDtBQUVMa0Isa0JBRks7QUFHTHRHLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTXVHLHFCQUFxQixHQUFJbFgsS0FBRCxJQUFXO0FBQzlDLFNBQU87QUFDTHlRLFFBQUksRUFBRXVGLHVCQUREO0FBRUxoVyxTQUZLO0FBR0wyUSxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQVFBLE1BQU13RyxtQkFBbUIsR0FBSUMsZUFBRCxJQUFxQjtBQUN0RCxTQUFPO0FBQ0wzRyxRQUFJLEVBQUUyRixlQUREO0FBRUxnQixtQkFGSztBQUdMekcsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNMEcsb0JBQW9CLEdBQUlDLG9CQUFELElBQTBCO0FBQzVELFNBQU87QUFDTDdHLFFBQUksRUFBRThHLHlCQUREO0FBRUxELHdCQUZLO0FBR0wzRyxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU02RyxtQkFBbUIsR0FBSXhYLEtBQUQsSUFBVztBQUM1QyxTQUFPO0FBQ0x5USxRQUFJLEVBQUU2RixxQkFERDtBQUVMdFcsU0FGSztBQUdMMlEsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNOEcsa0JBQWtCLEdBQUlDLFNBQUQsSUFBZTtBQUMvQyxTQUFPO0FBQ0xqSCxRQUFJLEVBQUU4RixlQUREO0FBRUxtQixhQUZLO0FBR0wvRyxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1nSCxrQkFBa0IsR0FBSUMsaUJBQUQsSUFBdUI7QUFDdkQsU0FBTztBQUNMbkgsUUFBSSxFQUFFK0YsdUJBREQ7QUFFTG9CLHFCQUZLO0FBR0xqSCxXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1rSCxtQkFBbUIsR0FBSTdYLEtBQUQsSUFBVztBQUM1QyxTQUFPO0FBQ0x5USxRQUFJLEVBQUVnRyxzQkFERDtBQUVMelcsU0FGSztBQUdMMlEsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk0sQzs7Ozs7Ozs7Ozs7O0FDMUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1tSCxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU05RyxXQUFXLEdBQUcsYUFBcEI7QUFFQSxNQUFNK0cscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QlA7QUFFTyxNQUFNQyxZQUFZLEdBQUcsQ0FBQzdnQixLQUFLLEdBQUcsRUFBVCxFQUFhOGdCLE1BQWIsS0FBd0I7QUFDbEQsTUFBSUMsUUFBUSxHQUFHRCxNQUFmOztBQUNBLFVBQVFBLE1BQU0sQ0FBQ3pJLElBQWY7QUFDRSxTQUFLQywwRUFBTDtBQUNFLDZDQUNLdFksS0FETDtBQUVFZ2hCLGtCQUFVLEVBQUVGLE1BQU0sQ0FBQ3RTLElBRnJCO0FBR0UrSixlQUFPLEVBQUU7QUFIWDs7QUFLRixTQUFLRCwwRUFBTDtBQUNFLDZDQUNLdFksS0FETDtBQUVFK2dCLGdCQUZGO0FBR0V4SSxlQUFPLEVBQUU7QUFIWDs7QUFLRixTQUFLRCwyRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQitnQixnQkFBbkI7QUFBNkJ4SSxlQUFPLEVBQUU7QUFBdEM7O0FBQ0YsU0FBS0Qsd0VBQUw7QUFDRSw2Q0FBWXRZLEtBQVo7QUFBbUJvYixrQkFBVSxFQUFFMEYsTUFBTSxDQUFDNUY7QUFBdEM7O0FBQ0YsU0FBSzVDLDRFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1CMkYsV0FBRyxFQUFFbWI7QUFBeEI7O0FBQ0YsU0FBS3hJLHVFQUFMO0FBQ0UsNkNBQ0t0WSxLQURMO0FBRUUyRixXQUFHLEVBQUVtYixNQUZQO0FBR0VsWjtBQUhGOztBQUtGLFNBQUswUSxpRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQnViLGtCQUFVLEVBQUV1RixNQUFNLENBQUN2RixVQUF0QztBQUFrRGhELGVBQU8sRUFBRTtBQUEzRDs7QUFDRixTQUFLRCxrRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQnliLGVBQU8sRUFBRXFGLE1BQTVCO0FBQW9DdkksZUFBTyxFQUFFO0FBQTdDOztBQUNGLFNBQUtELDBFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1CNEgsYUFBSyxFQUFFa1osTUFBMUI7QUFBa0N2SSxlQUFPLEVBQUU7QUFBM0M7O0FBQ0YsU0FBS0QsbUVBQUw7QUFDRSw2Q0FBWXRZLEtBQVo7QUFBbUI0YixtQkFBVyxFQUFFa0YsTUFBTSxDQUFDbEY7QUFBdkM7O0FBQ0YsU0FBS3RELG9FQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1COGIsb0JBQVksRUFBRWdGO0FBQWpDOztBQUNGLFNBQUt4SSwwRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQjRILGFBQUssRUFBRWtaLE1BQTFCO0FBQWtDdkksZUFBTyxFQUFFO0FBQTNDOztBQUNGLFNBQUtELHVFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1CaWMsbUJBQVcsRUFBRTZFLE1BQU0sQ0FBQzdFLFdBQXZDO0FBQW9EMUQsZUFBTyxFQUFFO0FBQTdEOztBQUNGLFNBQUtELDZFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1Ca2MsdUJBQWUsRUFBRTRFLE1BQXBDO0FBQTRDdkksZUFBTyxFQUFFO0FBQXJEOztBQUNGLFNBQUtELDhFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1CNEgsYUFBSyxFQUFFa1osTUFBMUI7QUFBa0N2SSxlQUFPLEVBQUU7QUFBM0M7O0FBQ0Y7QUFDRSxhQUFPdlksS0FBUDtBQTVDSjtBQThDRCxDQWhETSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUVBLE1BQU1paEIsWUFBWSxHQUFHO0FBQ25CMUksU0FBTyxFQUFFO0FBRFUsQ0FBckI7QUFJTyxNQUFNMkksWUFBWSxHQUFHLENBQUNsaEIsS0FBSyxHQUFHaWhCLFlBQVQsRUFBdUJILE1BQXZCLEtBQWtDO0FBQUE7O0FBQzVELE1BQUloRSxLQUFLLEdBQUdnRSxNQUFaOztBQUNBLFVBQVFBLE1BQU0sQ0FBQ3pJLElBQWY7QUFDRSxTQUFLQyxtRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQnVZLGVBQU8sRUFBRTtBQUE1Qjs7QUFDRixTQUFLRCwrRUFBTDtBQUNFN1YsYUFBTyxDQUFDMGUsR0FBUixDQUFZLHFCQUFaLEVBQW1DbmhCLEtBQW5DLEVBQTBDOGMsS0FBMUM7QUFDQSw2Q0FDSzljLEtBREw7QUFFRThjLGFBQUssa0NBQ0E5YyxLQUFLLENBQUM4YyxLQUROO0FBRUhBLGVBQUssRUFBRSxDQUFDLEdBQUc5YyxLQUFLLENBQUM4YyxLQUFOLENBQVlBLEtBQWhCLEVBQXVCQSxLQUFLLENBQUNHLFlBQTdCO0FBRkosVUFGUDtBQU1FMUUsZUFBTyxFQUFFO0FBTlg7O0FBUUYsU0FBS0QsaUVBQUw7QUFDRSw2Q0FBWXRZLEtBQVo7QUFBbUI4YyxhQUFuQjtBQUEwQnZFLGVBQU8sRUFBRTtBQUFuQzs7QUFDRixTQUFLRCxzRUFBTDtBQUNFN1YsYUFBTyxDQUFDMGUsR0FBUixDQUFZLG9CQUFaLEVBQWtDbmhCLEtBQWxDO0FBQ0EsNkNBQVlBLEtBQVo7QUFBbUI4YyxhQUFuQjtBQUEwQnZFLGVBQU8sRUFBRTtBQUFuQzs7QUFDRixTQUFLRCxtRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQjhjLGFBQW5CO0FBQTBCdkUsZUFBTyxFQUFFO0FBQW5DOztBQUNGLFNBQUtELDhFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1COGMsYUFBbkI7QUFBMEJ2RSxlQUFPLEVBQUU7QUFBbkM7O0FBQ0YsU0FBS0QsbUVBQUw7QUFDRSxZQUFNOEksUUFBUSxHQUFHcGhCLEtBQUgsYUFBR0EsS0FBSCx1Q0FBR0EsS0FBSyxDQUFFOGMsS0FBVix1RUFBRyxhQUFjQSxLQUFqQix1REFBRyxtQkFBcUJ1RSxNQUFyQixDQUNkQyxNQUFEO0FBQUE7O0FBQUEsZUFBWUEsTUFBTSxDQUFDQyxHQUFQLHlCQUFlVCxNQUFNLENBQUN2RCxPQUF0QixvREFBZSxnQkFBZ0JnRSxHQUEvQixDQUFaO0FBQUEsT0FEZSxDQUFqQjtBQUdBLDZDQUFZdmhCLEtBQVo7QUFBbUJvaEI7QUFBbkI7O0FBQ0YsU0FBSzlJLDhFQUFMO0FBQ0UsWUFBTWtKLFVBQVUsR0FBR3hoQixLQUFILGFBQUdBLEtBQUgsdUJBQUdBLEtBQUssQ0FBRW9oQixRQUExQjtBQUNBLDZDQUFZcGhCLEtBQVo7QUFBbUI4YyxhQUFLLEVBQUU7QUFBRUEsZUFBSyxFQUFFMEU7QUFBVDtBQUExQjs7QUFDRjtBQUNFLGFBQU94aEIsS0FBUDtBQS9CSjtBQWlDRCxDQW5DTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOUDtBQUVPLE1BQU15aEIsZUFBZSxHQUFHLENBQUN6aEIsS0FBSyxHQUFHLEVBQVQsRUFBYThnQixNQUFiLEtBQXdCO0FBQ3JELE1BQUlZLFFBQVEsR0FBR1osTUFBZjs7QUFDQSxVQUFRQSxNQUFNLENBQUN6SSxJQUFmO0FBQ0UsU0FBS0MscUVBQUw7QUFDRSw2Q0FDS3RZLEtBREw7QUFFRTBoQixnQkFGRjtBQUdFbkosZUFBTyxFQUFFO0FBSFg7O0FBS0YsU0FBS0QseUVBQUw7QUFDRTdWLGFBQU8sQ0FBQzBlLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ25oQixLQUFyQztBQUVBLDZDQUNLQSxLQURMO0FBRUUwaEIsZ0JBRkY7QUFHRW5KLGVBQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtELGdGQUFMO0FBQ0UsNkNBQ0t0WSxLQURMO0FBRUU0SCxhQUZGO0FBR0UyUSxlQUFPLEVBQUU7QUFIWDs7QUFLRixTQUFLRCx1RUFBTDtBQUNFLDZDQUNLdFksS0FETDtBQUVFMmUscUJBQWEsRUFBRW1DLE1BRmpCO0FBR0V2SSxlQUFPLEVBQUU7QUFIWDs7QUFLRixTQUFLRCx1RUFBTDtBQUNFN1YsYUFBTyxDQUFDMGUsR0FBUixDQUFZLHdCQUFaLEVBQXNDbmhCLEtBQXRDLEVBQTZDMGhCLFFBQTdDO0FBQ0EsNkNBQ0sxaEIsS0FETDtBQUVFMGhCLGdCQUFRLGtDQUNIMWhCLEtBQUssQ0FBQzBoQixRQURIO0FBRU5sRCxrQkFBUSxFQUFFLENBQUMsR0FBR3hlLEtBQUssQ0FBQzBoQixRQUFOLENBQWVsRCxRQUFuQixFQUE2QmtELFFBQVEsQ0FBQzdDLGNBQXRDO0FBRkosVUFGVjtBQU1FdEcsZUFBTyxFQUFFO0FBTlg7O0FBUUYsU0FBS0QsK0VBQUw7QUFDRSw2Q0FDS3RZLEtBREw7QUFFRTRILGFBQUssRUFBRWtaLE1BRlQ7QUFHRXZJLGVBQU8sRUFBRTtBQUhYOztBQUtGLFNBQUtELHVFQUFMO0FBQ0UsWUFBTXFKLFVBQVUsR0FBRzNoQixLQUFLLENBQUMwaEIsUUFBTixDQUFlbEQsUUFBZixDQUF3QjZDLE1BQXhCLENBQ2hCTyxJQUFEO0FBQUE7O0FBQUEsZUFBVUEsSUFBSSxDQUFDTCxHQUFMLDJCQUFhVCxNQUFNLENBQUN4QixTQUFwQixzREFBYSxrQkFBa0JpQyxHQUEvQixDQUFWO0FBQUEsT0FEaUIsQ0FBbkI7QUFHQSw2Q0FBWXZoQixLQUFaO0FBQW1CMmhCO0FBQW5COztBQUNGLFNBQUtySiwrRUFBTDtBQUNFLFlBQU11SixTQUFTLEdBQUc3aEIsS0FBSCxhQUFHQSxLQUFILHVCQUFHQSxLQUFLLENBQUUyaEIsVUFBekI7QUFDQSw2Q0FDSzNoQixLQURMO0FBRUUwaEIsZ0JBQVEsRUFBRTtBQUFFbEQsa0JBQVEsRUFBRXFEO0FBQVo7QUFGWjs7QUFJRixTQUFLdkosOEVBQUw7QUFDRSw2Q0FDS3RZLEtBREw7QUFFRTRIO0FBRkY7O0FBSUYsU0FBSzBRLHVFQUFMO0FBQ0UsNkNBQ0t0WSxLQURMO0FBRUUwaEI7QUFGRjs7QUFJRixTQUFLcEosaUZBQUw7QUFDRSw2Q0FDS3RZLEtBREw7QUFFRTBoQjtBQUZGOztBQUlGO0FBQ0UsYUFBTzFoQixLQUFQO0FBdEVKO0FBd0VELENBMUVNLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlOGhCLDRIQUFlLENBQUM7QUFDN0JDLGFBQVcsRUFBRUEsd0RBRGdCO0FBRTdCamlCLFdBQVMsRUFBRWtpQiw2REFGa0I7QUFHN0JDLGNBQVksRUFBRUMsdURBSGU7QUFJN0JDLGVBQWEsRUFBRWpCLDBEQUpjO0FBSzdCaEcsWUFBVSxFQUFFMkYsMkRBTGlCO0FBTTdCWSxpQkFBZSxFQUFFQSxnRUFBZUE7QUFOSCxDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFTyxNQUFNTSxXQUFXLEdBQUcsQ0FBQy9oQixLQUFLLEdBQUcsRUFBVCxFQUFhOGdCLE1BQWIsS0FBd0I7QUFDakQsTUFBSXNCLGFBQWEsR0FBR3RCLE1BQXBCOztBQUNBLFVBQVFBLE1BQU0sQ0FBQ3pJLElBQWY7QUFDRSxTQUFLQyw4REFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQnVZLGVBQU8sRUFBRTtBQUE1Qjs7QUFDRixTQUFLRCxtRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQm9pQixxQkFBbkI7QUFBa0M3SixlQUFPLEVBQUU7QUFBM0M7O0FBQ0YsU0FBS0QsMEVBQUw7QUFDRSw2Q0FBWXRZLEtBQVo7QUFBbUI0SCxhQUFLLEVBQUV3YSxhQUFhLENBQUN4YSxLQUF4QztBQUErQzJRLGVBQU8sRUFBRTtBQUF4RDs7QUFDRjtBQUNFLGFBQU92WSxLQUFQO0FBUko7QUFVRCxDQVpNO0FBY0EsTUFBTWdpQixnQkFBZ0IsR0FBRyxDQUFDaGlCLEtBQUssR0FBRyxFQUFULEVBQWE4Z0IsTUFBYixLQUF3QjtBQUN0RCxNQUFJQyxRQUFRLEdBQUdELE1BQWY7O0FBQ0EsVUFBUUEsTUFBTSxDQUFDekksSUFBZjtBQUNFLFNBQUtDLHVFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1CdVksZUFBTyxFQUFFO0FBQTVCOztBQUNGLFNBQUtELHVFQUFMO0FBQ0UsMkRBQVl0WSxLQUFaLEdBQXNCK2dCLFFBQVEsQ0FBQzVnQixJQUEvQjtBQUFxQ29ZLGVBQU8sRUFBRTtBQUE5Qzs7QUFDRixTQUFLRCxvRUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQjRILGFBQUssRUFBRW1aLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFblosS0FBcEM7QUFBMkMyUSxlQUFPLEVBQUU7QUFBcEQ7O0FBQ0YsU0FBS0QsZ0VBQUw7QUFDRSxhQUFPLEVBQVA7O0FBQ0Y7QUFDRSxhQUFPdFksS0FBUDtBQVZKO0FBWUQsQ0FkTTtBQWdCQSxNQUFNa2lCLFVBQVUsR0FBRyxDQUFDbGlCLEtBQUssR0FBRyxFQUFULEVBQWE4Z0IsTUFBYixLQUF3QjtBQUNoRCxNQUFJdUIsU0FBUyxHQUFHdkIsTUFBaEI7O0FBQ0EsVUFBUUEsTUFBTSxDQUFDekksSUFBZjtBQUNFLFNBQUtDLGlFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1CcWlCLGlCQUFuQjtBQUE4QjlKLGVBQU8sRUFBRTtBQUF2Qzs7QUFDRixTQUFLRCx5RUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQnFpQixpQkFBbkI7QUFBOEI5SixlQUFPLEVBQUU7QUFBdkM7O0FBQ0YsU0FBS0Qsc0VBQUw7QUFDRSw2Q0FBWXRZLEtBQVo7QUFBbUI0SCxhQUFLLEVBQUV5YSxTQUFGLGFBQUVBLFNBQUYsdUJBQUVBLFNBQVMsQ0FBRXphLEtBQXJDO0FBQTRDMlEsZUFBTyxFQUFFO0FBQXJEOztBQUNGLFNBQUtELGdFQUFMO0FBQ0UsNkNBQVl0WSxLQUFaO0FBQW1CcWlCLGlCQUFuQjtBQUE4QjlKLGVBQU8sRUFBRTtBQUF2Qzs7QUFDRixTQUFLRCx3RUFBTDtBQUNFLDZDQUFZdFksS0FBWjtBQUFtQnFpQixpQkFBbkI7QUFBOEI5SixlQUFPLEVBQUU7QUFBdkM7O0FBQ0YsU0FBS0QsMEVBQUw7QUFBa0M7QUFDaEMsK0NBQ0t0WSxLQURMO0FBRUU0SCxlQUFLLEVBQUV5YSxTQUFTLENBQUN6YSxLQUZuQjtBQUdFMlEsaUJBQU8sRUFBRTtBQUhYO0FBS0Q7O0FBQ0QsU0FBS0QsaUVBQUw7QUFDRSw2Q0FDS3RZLEtBREw7QUFFRXFpQixpQkFGRjtBQUdFOUosZUFBTyxFQUFFO0FBSFg7O0FBS0YsU0FBS0QseUVBQUw7QUFBaUM7QUFDL0IsK0NBQ0t0WSxLQURMO0FBRUVxaUIsbUJBRkY7QUFHRTlKLGlCQUFPLEVBQUU7QUFIWDtBQUtEOztBQUNELFNBQUtELHNFQUFMO0FBQ0UsNkNBQ0t0WSxLQURMO0FBRUU0SCxhQUFLLEVBQUV5YSxTQUFTLENBQUN6YTtBQUZuQjs7QUFJRixTQUFLMFEsb0VBQUw7QUFDRSw2Q0FDS3RZLEtBREw7QUFFRXFpQjtBQUZGOztBQUlGO0FBQ0UsYUFBT3JpQixLQUFQO0FBMUNKO0FBNENELENBOUNNLEM7Ozs7Ozs7Ozs7OztBQ2hDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQWFPLFVBQVVzaUIsVUFBVixDQUFxQkMsT0FBckIsRUFBOEI7QUFDbkMsTUFBSTtBQUNGLFVBQU14QixRQUFRLEdBQUcsTUFBTXlCLCtEQUFJLENBQUNDLHdFQUFELEVBQW1CRixPQUFuQixDQUEzQjtBQUNBLFVBQU0vVCxJQUFJLEdBQUd1UyxRQUFiO0FBQ0EsVUFBTTJCLDhEQUFHLENBQUMzSCw0RUFBYSxDQUFDdk0sSUFBRCxDQUFkLENBQVQ7QUFDRCxHQUpELENBSUUsT0FBTzVHLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDMUgsa0ZBQW1CLENBQUNwVCxLQUFELENBQXBCLENBQVQ7QUFDRDtBQUNGO0FBQ00sVUFBVSthLGdCQUFWLENBQTJCSixPQUEzQixFQUFvQztBQUN6QyxNQUFJO0FBQ0YsVUFBTXhCLFFBQVEsR0FBRyxNQUFNeUIsK0RBQUksQ0FBQ0ksNkVBQUQsRUFBd0JMLE9BQXhCLENBQTNCO0FBQ0EsVUFBTUcsOERBQUcsQ0FBQ3ZILDRFQUFhLENBQUM0RixRQUFELENBQWQsQ0FBVDtBQUNELEdBSEQsQ0FHRSxPQUFPblosS0FBUCxFQUFjO0FBQ2QsVUFBTThhLDhEQUFHLENBQUNySCw2RUFBYyxDQUFDelQsS0FBRCxDQUFmLENBQVQ7QUFDRDtBQUNGO0FBQ00sVUFBVWliLFdBQVYsQ0FBc0JOLE9BQXRCLEVBQStCO0FBQ3BDOWYsU0FBTyxDQUFDMGUsR0FBUixDQUFZb0IsT0FBWjs7QUFDQSxNQUFJO0FBQ0YsVUFBTXhCLFFBQVEsR0FBRyxNQUFNeUIsK0RBQUksQ0FBQ00sd0VBQUQsRUFBbUJQLE9BQW5CLENBQTNCO0FBQ0EsVUFBTUcsOERBQUcsQ0FBQ2xILHlFQUFVLENBQUN1RixRQUFELENBQVgsQ0FBVDtBQUNELEdBSEQsQ0FHRSxPQUFPblosS0FBUCxFQUFjO0FBQ2QsVUFBTThhLDhEQUFHLENBQUNoSCxnRkFBaUIsQ0FBQzlULEtBQUssQ0FBQ3dCLE9BQVAsQ0FBbEIsQ0FBVDtBQUNEO0FBQ0Y7QUFDTSxVQUFVMlosZUFBVixDQUEwQlIsT0FBMUIsRUFBbUM7QUFDeEMsTUFBSTtBQUNGLFVBQU14QixRQUFRLEdBQUcsTUFBTXlCLCtEQUFJLENBQUNRLDRFQUFELEVBQXVCVCxPQUF2QixDQUEzQjtBQUNBLFVBQU1HLDhEQUFHLENBQUM3Ryw0RUFBYSxDQUFDa0YsUUFBRCxDQUFkLENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT25aLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDM0csZ0ZBQWlCLENBQUNuVSxLQUFLLENBQUN3QixPQUFQLENBQWxCLENBQVQ7QUFDRDtBQUNGO0FBQ00sVUFBVTRTLGVBQVYsQ0FBMEJ1RyxPQUExQixFQUFtQztBQUN4QyxNQUFJO0FBQ0YsVUFBTXhCLFFBQVEsR0FBRyxNQUFNeUIsK0RBQUksQ0FBQ1MseUVBQUQsRUFBb0JWLE9BQXBCLENBQTNCO0FBQ0EsVUFBTUcsOERBQUcsQ0FBQ3hHLDhFQUFlLENBQUM2RSxRQUFELENBQWhCLENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT25aLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDdkcsb0ZBQXFCLENBQUN2VSxLQUFELENBQXRCLENBQVQ7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7OztBQzlERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsVUFBVXNiLFdBQVYsR0FBd0I7QUFDckMsUUFBTUMsK0RBQUksQ0FBQ0MsaURBQUQsQ0FBVjtBQUNELEM7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQU9PLFVBQVVDLFVBQVYsQ0FBcUJkLE9BQXJCLEVBQThCO0FBQ25DLE1BQUk7QUFDRixVQUFNeEIsUUFBUSxHQUFHLE1BQU15QiwrREFBSSxDQUFDYyx1RUFBRCxFQUFtQmYsT0FBbkIsQ0FBM0I7QUFDQSxVQUFNRyw4REFBRyxDQUFDN0Ysd0VBQVMsQ0FBQ2tFLFFBQUQsQ0FBVixDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9uWixLQUFQLEVBQWM7QUFDZCxXQUFPQSxLQUFQO0FBQ0Q7QUFDRjtBQUNNLFVBQVUyYixlQUFWLENBQTBCaEIsT0FBMUIsRUFBbUM7QUFDeEMsTUFBSTtBQUNGLFVBQU14QixRQUFRLEdBQUcsTUFBTXlCLCtEQUFJLENBQUNnQix3RUFBRCxFQUFvQmpCLE9BQXBCLENBQTNCO0FBQ0EsVUFBTUcsOERBQUcsQ0FBQzFGLGtGQUFtQixDQUFDK0QsUUFBRCxDQUFwQixDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9uWixLQUFQLEVBQWM7QUFDZCxXQUFPQSxLQUFQO0FBQ0Q7QUFDRjtBQUNNLFVBQVU2YixlQUFWLENBQTBCbEIsT0FBMUIsRUFBbUM7QUFDeEMsTUFBSTtBQUNGLFVBQU14QixRQUFRLEdBQUcsTUFBTXlCLCtEQUFJLENBQUNrQix3RUFBRCxFQUFvQm5CLE9BQXBCLENBQTNCO0FBQ0EsVUFBTUcsOERBQUcsQ0FBQ2xGLGlGQUFrQixDQUFDdUQsUUFBRCxDQUFuQixDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9uWixLQUFQLEVBQWM7QUFDZG5GLFdBQU8sQ0FBQzBlLEdBQVIsQ0FBWXZaLEtBQVo7QUFDQSxXQUFPQSxLQUFQO0FBQ0Q7QUFDRjtBQUNNLFVBQVUrYixlQUFWLENBQTBCcEIsT0FBMUIsRUFBbUM7QUFDeEMsTUFBSTtBQUNGLFVBQU14QixRQUFRLEdBQUcsTUFBTXlCLCtEQUFJLENBQUNvQix3RUFBRCxFQUFvQnJCLE9BQXBCLENBQTNCO0FBQ0EsVUFBTUcsOERBQUcsQ0FBQ3RGLGlGQUFrQixDQUFDMkQsUUFBRCxDQUFuQixDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9uWixLQUFQLEVBQWM7QUFDZCxXQUFPQSxLQUFQO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7Ozs7QUM5Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBT08sVUFBVWljLFdBQVYsQ0FBc0J0QixPQUF0QixFQUErQjtBQUNwQyxNQUFJO0FBQ0YsVUFBTXhCLFFBQVEsR0FBRyxNQUFNeUIsK0RBQUksQ0FBQ3NCLDJFQUFELEVBQXFCdkIsT0FBckIsQ0FBM0I7QUFDQSxVQUFNRyw4REFBRyxDQUFDbkUsMEVBQVUsQ0FBQ3dDLFFBQUQsQ0FBWCxDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9uWixLQUFQLEVBQWM7QUFDZCxVQUFNOGEsOERBQUcsQ0FBQ2pFLGdGQUFnQixDQUFDN1csS0FBSyxDQUFDd0IsT0FBUCxDQUFqQixDQUFUO0FBQ0Q7QUFDRjtBQUNNLFVBQVUyYSxpQkFBVixDQUE0QnhCLE9BQTVCLEVBQXFDO0FBQzFDLE1BQUk7QUFDRixVQUFNeEIsUUFBUSxHQUFHLE1BQU15QiwrREFBSSxDQUFDd0IsOEVBQUQsRUFBd0J6QixPQUF4QixDQUEzQjtBQUNBLFVBQU1HLDhEQUFHLENBQUM5RCxvRkFBb0IsQ0FBQ21DLFFBQUQsQ0FBckIsQ0FBVDtBQUNELEdBSEQsQ0FHRSxPQUFPblosS0FBUCxFQUFjO0FBQ2QsVUFBTThhLDhEQUFHLENBQUM1RCxxRkFBcUIsQ0FBQ2xYLEtBQUssQ0FBQ3dCLE9BQVAsQ0FBdEIsQ0FBVDtBQUNEO0FBQ0Y7QUFDTSxVQUFVNmEsaUJBQVYsQ0FBNEIxQixPQUE1QixFQUFxQztBQUMxQyxNQUFJO0FBQ0YsVUFBTXhCLFFBQVEsR0FBRyxNQUFNeUIsK0RBQUksQ0FBQzBCLDhFQUFELEVBQXdCM0IsT0FBeEIsQ0FBM0I7QUFDQSxVQUFNRyw4REFBRyxDQUFDbkQsa0ZBQWtCLENBQUN3QixRQUFELENBQW5CLENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT25aLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDakQsbUZBQW1CLENBQUM3WCxLQUFLLENBQUN3QixPQUFQLENBQXBCLENBQVQ7QUFDRDtBQUNGO0FBQ00sVUFBVSthLGlCQUFWLENBQTRCNUIsT0FBNUIsRUFBcUM7QUFDMUMsTUFBSTtBQUNGLFVBQU14QixRQUFRLEdBQUcsTUFBTXlCLCtEQUFJLENBQUM0Qiw4RUFBRCxFQUF3QjdCLE9BQXhCLENBQTNCO0FBQ0EsVUFBTUcsOERBQUcsQ0FBQ3pELDRFQUFELEVBQXVCOEIsUUFBdkIsQ0FBVDtBQUNELEdBSEQsQ0FHRSxPQUFPblosS0FBUCxFQUFjO0FBQ2QsVUFBTThhLDhEQUFHLENBQUN0RCxtRkFBbUIsQ0FBQ3hYLEtBQUQsQ0FBcEIsQ0FBVDtBQUNBLFdBQU9BLEtBQVA7QUFDRDtBQUNGLEM7Ozs7Ozs7Ozs7OztBQ2xERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBYUE7QUFFTyxVQUFVeWMsWUFBVixDQUF1QjlCLE9BQXZCLEVBQWdDO0FBQ3JDLE1BQUk7QUFDRixVQUFNOUosUUFBUSxHQUFHLE1BQU0rSiwrREFBSSxDQUFDOEIsK0VBQUQsRUFBa0IvQixPQUFsQixDQUEzQjtBQUNBLFVBQU0vVCxJQUFJLEdBQUdpSyxRQUFiO0FBQ0EsVUFBTWlLLDhEQUFHLENBQUNsSyw2RUFBYSxDQUFDaEssSUFBRCxDQUFkLENBQVQ7QUFDRCxHQUpELENBSUUsT0FBTzVHLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDaEssOEVBQWMsQ0FBQzlRLEtBQUQsQ0FBZixDQUFUO0FBQ0Q7QUFDRjtBQUVNLFVBQVUyYyxTQUFWLENBQW9CaEMsT0FBcEIsRUFBNkI7QUFDbEMsTUFBSTtBQUNGLFVBQU14QixRQUFRLEdBQUcsTUFBTXlCLCtEQUFJLENBQUNnQyxnRkFBRCxFQUFtQmpDLE9BQW5CLENBQTNCO0FBQ0EsVUFBTS9ULElBQUksR0FBR3VTLFFBQWI7QUFDQSxVQUFNMkIsOERBQUcsQ0FBQzlKLDRFQUFZLENBQUNwSyxJQUFELENBQWIsQ0FBVDtBQUNELEdBSkQsQ0FJRSxPQUFPNUcsS0FBUCxFQUFjO0FBQ2QsVUFBTThhLDhEQUFHLENBQUM7QUFBRXJLLFVBQUksRUFBRUMsb0VBQVI7QUFBK0IxUTtBQUEvQixLQUFELENBQVQ7QUFDRDtBQUNGO0FBQ00sVUFBVTZjLGVBQVYsQ0FBMEJsQyxPQUExQixFQUFtQztBQUN4QyxNQUFJO0FBQ0YsVUFBTTVjLEdBQUcsR0FBRyxNQUFNNmMsK0RBQUksQ0FBQ2tDLGtGQUFELEVBQXFCbkMsT0FBckIsQ0FBdEI7QUFDQSxVQUFNL1QsSUFBSSxHQUFHN0ksR0FBYjtBQUNBLFVBQU0rYyw4REFBRyxDQUFDdEosa0ZBQWtCLENBQUM1SyxJQUFELENBQW5CLENBQVQ7QUFDRCxHQUpELENBSUUsT0FBTzVHLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDckosaUZBQWlCLENBQUN6UixLQUFELENBQWxCLENBQVQ7QUFDRDtBQUNGO0FBQ00sVUFBVStjLGFBQVYsQ0FBd0JwQyxPQUF4QixFQUFpQztBQUN0QyxNQUFJO0FBQ0YsVUFBTXhCLFFBQVEsR0FBRyxNQUFNeUIsK0RBQUksQ0FBQ29DLGdGQUFELEVBQW1CckMsT0FBbkIsQ0FBM0I7QUFDQSxVQUFNRyw4REFBRyxDQUFDbEosZ0ZBQWdCLENBQUN1SCxRQUFELENBQWpCLENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT25aLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDakosK0VBQWUsQ0FBQ3NILFFBQVEsQ0FBQ25aLEtBQVYsQ0FBaEIsQ0FBVDtBQUNEO0FBQ0Y7QUFDTSxVQUFVaWQsZUFBVixDQUEwQnRDLE9BQTFCLEVBQW1DO0FBQ3hDLE1BQUk7QUFDRixVQUFNdUMsSUFBSSxHQUFHLE1BQU10QywrREFBSSxDQUFDdUMsa0ZBQUQsRUFBcUJ4QyxPQUFyQixDQUF2QjtBQUNBLFVBQU1HLDhEQUFHLENBQUM5SSw4RUFBYyxDQUFDa0wsSUFBRCxDQUFmLENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT2xkLEtBQVAsRUFBYztBQUNkLFVBQU04YSw4REFBRyxDQUFDN0ksaUZBQWlCLENBQUNqUyxLQUFELENBQWxCLENBQVQ7QUFDQSxXQUFPQSxLQUFQO0FBQ0Q7QUFDRjtBQUNNLFVBQVVvZCxrQkFBVixDQUE2QnpDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUk7QUFDRixVQUFNMEMsVUFBVSxHQUFHLE1BQU16QywrREFBSSxDQUFDMEMscUZBQUQsRUFBd0IzQyxPQUF4QixDQUE3QjtBQUNBLFVBQU1HLHNEQUFHLENBQUM7QUFBRXJLLFVBQUksRUFBRUMsb0VBQVI7QUFBK0IyTTtBQUEvQixLQUFELENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT3JkLEtBQVAsRUFBYztBQUNkLFdBQU9BLEtBQVA7QUFDRDtBQUNGO0FBRU0sVUFBVXVkLFVBQVYsR0FBdUI7QUFDNUIsUUFBTXpDLDhEQUFHLENBQUM1SixzRUFBTSxFQUFQLENBQVQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNsRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFPQTtBQU1BO0FBT2UsVUFBVXNLLHVCQUFWLEdBQW9DO0FBQ2pELFFBQU1nQyxxRUFBVSxDQUFDOU0sOERBQUQsRUFBa0IrTCw0REFBbEIsQ0FBaEI7QUFDQSxRQUFNZSxxRUFBVSxDQUFDOU0sdUVBQUQsRUFBMkJpTSx5REFBM0IsQ0FBaEI7QUFDQSxRQUFNYSxxRUFBVSxDQUFDQywwRUFBRCxFQUE2Qi9DLHNEQUE3QixDQUFoQjtBQUNBLFFBQU04QyxxRUFBVSxDQUFDQyx3RUFBRCxFQUEyQjFDLDREQUEzQixDQUFoQjtBQUNBLFFBQU15QyxxRUFBVSxDQUFDQyxpRUFBRCxFQUFvQnhDLHVEQUFwQixDQUFoQjtBQUNBLFFBQU11QyxxRUFBVSxDQUFDQyxtRUFBRCxFQUFzQnRDLDJEQUF0QixDQUFoQjtBQUNBLFFBQU1xQyxxRUFBVSxDQUFDQyx1RUFBRCxFQUEwQnJKLDJEQUExQixDQUFoQjtBQUNBLFFBQU1vSixxRUFBVSxDQUFDOU0saUVBQUQsRUFBcUJtTSwrREFBckIsQ0FBaEI7QUFDQSxRQUFNVyxxRUFBVSxDQUFDOU0sZ0VBQUQsRUFBb0JxTSw2REFBcEIsQ0FBaEI7QUFDQSxRQUFNUyxxRUFBVSxDQUFDOU0saUVBQUQsRUFBcUJ1TSwrREFBckIsQ0FBaEI7QUFDQSxRQUFNTyxxRUFBVSxDQUFDOU0sb0VBQUQsRUFBd0IwTSxrRUFBeEIsQ0FBaEI7QUFDQSxRQUFNSSxxRUFBVSxDQUFDRSxpRUFBRCxFQUFvQmpDLHNEQUFwQixDQUFoQjtBQUNBLFFBQU0rQixxRUFBVSxDQUFDRyxxRUFBRCxFQUF1QjFCLHlEQUF2QixDQUFoQjtBQUNBLFFBQU11QixxRUFBVSxDQUFDRyx1RUFBRCxFQUF5QnhCLCtEQUF6QixDQUFoQjtBQUNBLFFBQU1xQixxRUFBVSxDQUFDRyx1RUFBRCxFQUF5QnRCLCtEQUF6QixDQUFoQjtBQUNBLFFBQU1tQixxRUFBVSxDQUFDRyx1RUFBRCxFQUF5QnBCLCtEQUF6QixDQUFoQjtBQUNBLFFBQU1pQixxRUFBVSxDQUFDRSxtRUFBRCxFQUFzQi9CLDJEQUF0QixDQUFoQjtBQUNBLFFBQU02QixxRUFBVSxDQUFDRSxtRUFBRCxFQUFzQjdCLDJEQUF0QixDQUFoQjtBQUNBLFFBQU0yQixxRUFBVSxDQUFDRSxtRUFBRCxFQUFzQjNCLDJEQUF0QixDQUFoQjtBQUNBLFFBQU02QiwrREFBSSxDQUFDbE4sZ0VBQUQsRUFBb0I2TSwwREFBcEIsQ0FBVjtBQUVBMWlCLFNBQU8sQ0FBQzBlLEdBQVIsQ0FBWSw2QkFBWjtBQUNELEM7Ozs7Ozs7Ozs7OztBQ3pERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1tRCxlQUFlLEdBQUltQixPQUFELElBQWE7QUFDMUMsUUFBTUMsYUFBYSxHQUFHLHFEQUF0QjtBQUVBLFFBQU1DLFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxNQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsU0FBUTdoQiw4RUFBNkIsRUFEOUM7QUFFUCxzQkFBZ0I7QUFGVCxLQUZRO0FBTWpCOGhCLFFBQUksRUFBRUwsT0FBTyxDQUFDck47QUFORyxHQUFuQjs7QUFRQSxNQUFJO0FBQ0YsV0FBT2pSLEtBQUssQ0FBQ3VlLGFBQUQsRUFBZ0JDLFVBQWhCLENBQUwsQ0FDSkksSUFESSxDQUNFaEYsUUFBRCxJQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2lGLE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU9sRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5JLEVBT0pILElBUEksQ0FPRUcsSUFBRCxJQUFVO0FBQ2QsYUFBT0EsSUFBUDtBQUNELEtBVEksQ0FBUDtBQVVELEdBWEQsQ0FXRSxPQUFPdGUsS0FBUCxFQUFjO0FBQ2R1ZSx3REFBSyxDQUFDdmUsS0FBTixDQUFZQSxLQUFLLENBQUN3QixPQUFsQixFQUEyQjtBQUN6QmdkLGNBQVEsRUFBRTtBQURlLEtBQTNCO0FBR0EsV0FBT3hlLEtBQVA7QUFDRDtBQUNGLENBNUJNO0FBOEJBLE1BQU00YyxnQkFBZ0IsR0FBSWlCLE9BQUQsSUFBYTtBQUMzQyxRQUFNWSxjQUFjLEdBQUcscURBQXZCO0FBRUEsUUFBTVYsVUFBVSxHQUFHO0FBQ2pCdFUsVUFBTSxFQUFFLE1BRFM7QUFFakJ1VSxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZRO0FBS2pCRSxRQUFJLEVBQUVRLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxPQUFPLENBQUN0bEIsSUFBdkI7QUFMVyxHQUFuQjs7QUFPQSxNQUFJO0FBQ0YsV0FBT2dILEtBQUssQ0FBQ2tmLGNBQUQsRUFBaUJWLFVBQWpCLENBQUwsQ0FDSkksSUFESSxDQUNFaEYsUUFBRCxJQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2lGLE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU9sRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5JLEVBT0pILElBUEksQ0FPRUcsSUFBRCxJQUFVO0FBQ2RuTixrQkFBWSxDQUFDeU4sT0FBYixDQUFxQixVQUFyQixFQUFpQ0YsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FBakM7QUFDQSxhQUFPQSxJQUFQO0FBQ0QsS0FWSSxDQUFQO0FBV0QsR0FaRCxDQVlFLE9BQU90ZSxLQUFQLEVBQWM7QUFDZHVlLHdEQUFLLENBQUN2ZSxLQUFOLENBQVlBLEtBQUssQ0FBQ3dCLE9BQWxCLEVBQTJCO0FBQ3pCZ2QsY0FBUSxFQUFFO0FBRGUsS0FBM0I7QUFHQSxXQUFPeGUsS0FBUDtBQUNEO0FBQ0YsQ0E1Qk07QUE4QkEsTUFBTThjLGtCQUFrQixHQUFJZSxPQUFELElBQWE7QUFDN0MsUUFBTWdCLGVBQWUsR0FBRyxzREFBeEI7QUFDQSxRQUFNZCxVQUFVLEdBQUc7QUFDakJ0VSxVQUFNLEVBQUUsTUFEUztBQUVqQnVVLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRlE7QUFLakJFLFFBQUksRUFBRVEsSUFBSSxDQUFDQyxTQUFMLENBQWVkLE9BQU8sQ0FBQ3RNLEtBQXZCO0FBTFcsR0FBbkI7O0FBT0EsTUFBSTtBQUNGLFdBQU9oUyxLQUFLLENBQUNzZixlQUFELEVBQWtCZCxVQUFsQixDQUFMLENBQ0pJLElBREksQ0FDRWhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPbEYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOSSxFQU9KSCxJQVBJLENBT0VHLElBQUQsSUFBVTtBQUNkLGFBQU9BLElBQVA7QUFDRCxLQVRJLENBQVA7QUFVRCxHQVhELENBV0UsT0FBT3RlLEtBQVAsRUFBYztBQUNkdWUsd0RBQUssQ0FBQ3ZlLEtBQU4sQ0FBWUEsS0FBSyxDQUFDOGUsR0FBbEIsRUFBdUI7QUFDckJOLGNBQVEsRUFBRTtBQURXLEtBQXZCO0FBR0EsV0FBT3hlLEtBQVA7QUFDRDtBQUNGLENBMUJNO0FBMkJBLE1BQU1nZCxnQkFBZ0IsR0FBSWEsT0FBRCxJQUFhO0FBQzNDLFFBQU1rQixjQUFjLEdBQUcsdURBQXZCO0FBQ0EsUUFBTWhCLFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxNQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGUTtBQUtqQkUsUUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsT0FBTyxDQUFDbE0sR0FBdkI7QUFMVyxHQUFuQjs7QUFPQSxNQUFJO0FBQ0YsV0FBT3BTLEtBQUssQ0FBQ3dmLGNBQUQsRUFBaUJoQixVQUFqQixDQUFMLENBQ0pJLElBREksQ0FDRWhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPbEYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOSSxFQU9KSCxJQVBJLENBT0VHLElBQUQsSUFBVTtBQUNkLGFBQU9BLElBQVA7QUFDRCxLQVRJLENBQVA7QUFVRCxHQVhELENBV0UsT0FBT3RlLEtBQVAsRUFBYztBQUNkdWUsd0RBQUssQ0FBQ3ZlLEtBQU4sQ0FBWUEsS0FBSyxDQUFDd0IsT0FBbEIsRUFBMkI7QUFDekJnZCxjQUFRLEVBQUU7QUFEZSxLQUEzQjtBQUdBLFdBQU94ZSxLQUFQO0FBQ0Q7QUFDRixDQTFCTTtBQTJCQSxNQUFNbWQsa0JBQWtCLEdBQUlVLE9BQUQsSUFBYTtBQUM3QyxRQUFNbUIsZ0JBQWdCLEdBQ3BCLHdEQURGO0FBRUEsUUFBTWpCLFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxNQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGUTtBQUtqQkUsUUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsT0FBTyxDQUFDOUwsUUFBdkI7QUFMVyxHQUFuQjs7QUFPQSxNQUFJO0FBQ0YsV0FBT3hTLEtBQUssQ0FBQ3lmLGdCQUFELEVBQW1CakIsVUFBbkIsQ0FBTCxDQUNKSSxJQURJLENBQ0VoRixRQUFELElBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDaUYsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQixjQUFNLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0Q7O0FBQ0QsYUFBT2xGLFFBQVEsQ0FBQ21GLElBQVQsRUFBUDtBQUNELEtBTkksRUFPSkgsSUFQSSxDQU9FRyxJQUFELElBQVU7QUFDZCxhQUFPQSxJQUFQO0FBQ0QsS0FUSSxDQUFQO0FBVUQsR0FYRCxDQVdFLE9BQU90ZSxLQUFQLEVBQWM7QUFDZHVlLHdEQUFLLENBQUN2ZSxLQUFOLENBQVlBLEtBQUssQ0FBQ3dCLE9BQWxCLEVBQTJCO0FBQ3pCZ2QsY0FBUSxFQUFFO0FBRGUsS0FBM0I7QUFHQSxXQUFPeGUsS0FBUDtBQUNEO0FBQ0YsQ0EzQk07QUE0QkEsTUFBTXNkLHFCQUFxQixHQUFJTyxPQUFELElBQWE7QUFDaEQsUUFBTW9CLG1CQUFtQixHQUN2Qix1REFERjtBQUVBLFFBQU1sQixVQUFVLEdBQUc7QUFDakJ0VSxVQUFNLEVBQUUsTUFEUztBQUVqQnVVLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRlE7QUFLakJFLFFBQUksRUFBRVEsSUFBSSxDQUFDQyxTQUFMLENBQWVkLE9BQU8sQ0FBQzlMLFFBQXZCO0FBTFcsR0FBbkI7O0FBT0EsTUFBSTtBQUNGLFdBQU94UyxLQUFLLENBQUMwZixtQkFBRCxFQUFzQmxCLFVBQXRCLENBQUwsQ0FDSkksSUFESSxDQUNFaEYsUUFBRCxJQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2lGLE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU9sRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5JLEVBT0pILElBUEksQ0FPRUcsSUFBRCxJQUFVO0FBQ2QsYUFBT0EsSUFBUDtBQUNELEtBVEksQ0FBUDtBQVVELEdBWEQsQ0FXRSxPQUFPdGUsS0FBUCxFQUFjO0FBQ2R1ZSx3REFBSyxDQUFDdmUsS0FBTixDQUFZQSxLQUFLLENBQUN3QixPQUFsQixFQUEyQjtBQUN6QmdkLGNBQVEsRUFBRTtBQURlLEtBQTNCO0FBR0EsV0FBT3hlLEtBQVA7QUFDRDtBQUNGLENBM0JNLEM7Ozs7Ozs7Ozs7Ozs7O0FDaEpQOzs7O0FBRUEsTUFBTWtmLG1CQUFOLENBQTBCO0FBQ3hCblksYUFBVyxDQUFDdkMsTUFBRCxFQUFTO0FBQ2xCLFNBQUsyYSxNQUFMLEdBQWMzYSxNQUFNLENBQUMyYSxNQUFyQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUI1YSxNQUFNLENBQUM0YSxXQUExQjtBQUNEOztBQUVELE1BQUlDLFdBQUosR0FBa0I7QUFDaEIsV0FBTyxLQUFLbEcsUUFBTCxDQUFjbUcsWUFBckI7QUFDRDs7QUFFRCxRQUFNQyxXQUFOLENBQWtCQyxVQUFsQixFQUE4QjtBQUM1QixRQUFJO0FBQ0YsWUFBTXpCLFVBQVUsR0FBRztBQUNqQnRVLGNBQU0sRUFBRSxNQURTO0FBRWpCdVUsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCLG1DQURUO0FBRVB5Qix1QkFBYSxFQUFHLFNBQVEsS0FBS04sTUFBTztBQUY3QixTQUZRO0FBTWpCakIsWUFBSSxFQUFFd0IsWUFBR2YsU0FBSCxDQUFhO0FBQ2pCZ0Isb0JBQVUsRUFBRTtBQURLLFNBQWI7QUFOVyxPQUFuQjtBQVVBLGFBQU8sTUFBTXBnQixLQUFLLENBQUUsR0FBRSxLQUFLNmYsV0FBWSxnQkFBckIsRUFBc0NyQixVQUF0QyxDQUFMLENBQ1ZJLElBRFUsQ0FDSnBnQixHQUFELElBQVNBLEdBQUcsQ0FBQ3VnQixJQUFKLEVBREosRUFFVkgsSUFGVSxDQUVKRyxJQUFELElBQVU7QUFDZCxlQUFPa0IsVUFBVSxDQUFDbEIsSUFBSSxDQUFDZ0IsWUFBTixDQUFqQjtBQUNELE9BSlUsQ0FBYixDQVhFLENBaUJGO0FBQ0QsS0FsQkQsQ0FrQkUsT0FBT3RmLEtBQVAsRUFBYztBQUNkbkYsYUFBTyxDQUFDMGUsR0FBUixDQUFhLGlDQUFnQ3ZaLEtBQUssQ0FBQzRmLFVBQVcsRUFBOUQ7QUFDQS9rQixhQUFPLENBQUMwZSxHQUFSLENBQVltRixJQUFJLENBQUNtQixLQUFMLENBQVc3ZixLQUFLLENBQUNBLEtBQWpCLENBQVo7QUFDRDtBQUNGOztBQWpDdUI7O0FBb0MxQjhmLE1BQU0sQ0FBQ2hnQixPQUFQLEdBQWlCb2YsbUJBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUduVSxtQkFBTyxDQUFDLHdFQUFELENBQW5DOztBQUVPLE1BQU04UCxnQkFBZ0IsR0FBRyxNQUFPZ0QsT0FBUCxJQUFtQjtBQUNqRCxRQUFNa0MsaUJBQWlCLEdBQUkscUVBQTNCO0FBRUEsUUFBTUMsU0FBUyxHQUFHLElBQUlkLG1CQUFKLENBQXdCO0FBQ3hDRSxlQUFXLEVBQUUsdUNBRDJCO0FBRXhDRCxVQUFNLEVBQUUvaUIsOEVBQTRCNmpCO0FBRkksR0FBeEIsQ0FBbEI7QUFJQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUYsU0FBUyxDQUFDVCxXQUFWLENBQXNCLE1BQU9GLFdBQVAsSUFBdUI7QUFDN0QsVUFBTXRCLFVBQVUsR0FBRztBQUNqQnRVLFlBQU0sRUFBRSxNQURTO0FBRWpCdVUsYUFBTyxFQUFFO0FBQ1BDLHFCQUFhLEVBQUcsVUFBU29CLFdBQVksRUFEOUI7QUFFUCx3QkFBZ0I7QUFGVCxPQUZRO0FBTWpCbkIsVUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsT0FBTyxDQUFDalgsSUFBUixDQUFhdVosS0FBNUI7QUFOVyxLQUFuQjtBQVFBLFdBQU8sTUFBTTVnQixLQUFLLENBQUN3Z0IsaUJBQUQsRUFBb0JoQyxVQUFwQixDQUFMLENBQ1ZJLElBRFUsQ0FDSmhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFXLCtCQUE4QmxGLFFBQVEsQ0FBQ2lGLE1BQU8sRUFBekQsQ0FBTjtBQUNEOztBQUNELGFBQU9qRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5VLEVBT1ZILElBUFUsQ0FPSkcsSUFBRCxJQUFVO0FBQ2QsYUFBT0EsSUFBUDtBQUNELEtBVFUsRUFVVjhCLEtBVlUsQ0FVSHBnQixLQUFELElBQVc7QUFDaEJ1ZSwwREFBSyxDQUFDdmUsS0FBTixDQUFZQSxLQUFLLENBQUN3QixPQUFsQixFQUEyQjtBQUN6QmdkLGdCQUFRLEVBQUU7QUFEZSxPQUEzQjtBQUdBLGFBQU94ZSxLQUFLLENBQUN3QixPQUFiO0FBQ0QsS0FmVSxDQUFiO0FBZ0JELEdBekJpQixDQUFsQjtBQTJCQSxTQUFPMGUsR0FBUDtBQUNELENBbkNNO0FBb0NBLE1BQU1sRixxQkFBcUIsR0FBRyxNQUFPNkMsT0FBUCxJQUFtQjtBQUN0RCxRQUFNd0MsZ0JBQWdCLEdBQ3BCLGtFQURGO0FBR0EsUUFBTUwsU0FBUyxHQUFHLElBQUlkLG1CQUFKLENBQXdCO0FBQ3hDRSxlQUFXLEVBQUUsdUNBRDJCO0FBRXhDRCxVQUFNLEVBQUUvaUIsOEVBQTRCNmpCO0FBRkksR0FBeEIsQ0FBbEI7QUFJQSxRQUFNSyxTQUFTLEdBQUcsTUFBTU4sU0FBUyxDQUFDVCxXQUFWLENBQXNCLE1BQU9GLFdBQVAsSUFBdUI7QUFDbkUsVUFBTXRCLFVBQVUsR0FBRztBQUNqQnRVLFlBQU0sRUFBRSxNQURTO0FBRWpCdVUsYUFBTyxFQUFFO0FBQ1BDLHFCQUFhLEVBQUcsVUFBU29CLFdBQVksRUFEOUI7QUFFUGtCLGNBQU0sRUFBRSxrQkFGRDtBQUdQLHdCQUFnQjtBQUhULE9BRlE7QUFPakJyQyxVQUFJLEVBQUVRLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxPQUFPLENBQUN2SyxVQUF2QjtBQVBXLEtBQW5CO0FBU0EsV0FBTyxNQUFNL1QsS0FBSyxDQUFDOGdCLGdCQUFELEVBQW1CdEMsVUFBbkIsQ0FBTCxDQUNWSSxJQURVLENBQ0poRixRQUFELElBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDaUYsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQixjQUFNLElBQUlDLEtBQUosQ0FBVywrQkFBOEJsRixRQUFRLENBQUNpRixNQUFPLEVBQXpELENBQU47QUFDRDs7QUFDRCxhQUFPakYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOVSxFQU9WSCxJQVBVLENBT0pHLElBQUQsSUFBVTtBQUNkLGFBQU9BLElBQVA7QUFDRCxLQVRVLEVBVVY4QixLQVZVLENBVUhwZ0IsS0FBRCxJQUFXO0FBQ2hCdWUsMERBQUssQ0FBQ3ZlLEtBQU4sQ0FBWUEsS0FBSyxDQUFDd0IsT0FBbEIsRUFBMkI7QUFDekJnZCxnQkFBUSxFQUFFO0FBRGUsT0FBM0I7QUFHQSxhQUFPeGUsS0FBSyxDQUFDd0IsT0FBYjtBQUNELEtBZlUsQ0FBYjtBQWdCRCxHQTFCdUIsQ0FBeEI7QUE0QkEsU0FBTzhlLFNBQVA7QUFDRCxDQXJDTTtBQXNDQSxNQUFNcEYsZ0JBQWdCLEdBQUcsTUFBTzJDLE9BQVAsSUFBbUI7QUFDakQsUUFBTXBMLFVBQVUsR0FDZCw0RUFERjtBQUVBLFFBQU11TixTQUFTLEdBQUcsSUFBSWQsbUJBQUosQ0FBd0I7QUFDeENFLGVBQVcsRUFBRSx1Q0FEMkI7QUFFeENELFVBQU0sRUFBRS9pQiw4RUFBNEI2akI7QUFGSSxHQUF4QixDQUFsQjtBQUlBLFFBQU1PLEdBQUcsR0FBRyxNQUFNUixTQUFTLENBQUNULFdBQVYsQ0FBc0IsTUFBT0YsV0FBUCxJQUF1QjtBQUM3RCxVQUFNdEIsVUFBVSxHQUFHO0FBQ2pCdFUsWUFBTSxFQUFFLE1BRFM7QUFFakJ1VSxhQUFPLEVBQUU7QUFDUEMscUJBQWEsRUFBRyxVQUFTb0IsV0FBWSxFQUQ5QjtBQUVQLHdCQUFnQjtBQUZULE9BRlE7QUFNakJuQixVQUFJLEVBQUVRLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxPQUFPLENBQUNsSyxVQUF2QjtBQU5XLEtBQW5CO0FBUUEsV0FBTyxNQUFNcFUsS0FBSyxDQUFDa1QsVUFBRCxFQUFhc0wsVUFBYixDQUFMLENBQ1ZJLElBRFUsQ0FDSmhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFXLCtCQUE4QmxGLFFBQVEsQ0FBQ2lGLE1BQU8sRUFBekQsQ0FBTjtBQUNEOztBQUNELGFBQU9qRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5VLEVBT1ZILElBUFUsQ0FPSkcsSUFBRCxJQUFVO0FBQ2QsYUFBT0EsSUFBUDtBQUNELEtBVFUsRUFVVjhCLEtBVlUsQ0FVSHBnQixLQUFELElBQVc7QUFDaEJ1ZSwwREFBSyxDQUFDdmUsS0FBTixDQUFZQSxLQUFLLENBQUN3QixPQUFsQixFQUEyQjtBQUN6QmdkLGdCQUFRLEVBQUU7QUFEZSxPQUEzQjtBQUdBLGFBQU94ZSxLQUFLLENBQUN3QixPQUFiO0FBQ0QsS0FmVSxDQUFiO0FBZ0JELEdBekJpQixDQUFsQjtBQTJCQSxTQUFPZ2YsR0FBUDtBQUNELENBbkNNO0FBcUNBLE1BQU1wRixvQkFBb0IsR0FBSXlDLE9BQUQsSUFBYTtBQUMvQyxRQUFNNEMsZ0JBQWdCLEdBQUksK0RBQTFCO0FBQ0EsUUFBTTFDLFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxNQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGUTtBQUtqQkUsUUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsT0FBTyxDQUFDN0osV0FBdkI7QUFMVyxHQUFuQjs7QUFPQSxNQUFJO0FBQ0YsV0FBT3pVLEtBQUssQ0FBQ2toQixnQkFBRCxFQUFtQjFDLFVBQW5CLENBQUwsQ0FDSkksSUFESSxDQUNFaEYsUUFBRCxJQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2lGLE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU9sRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5JLEVBT0pILElBUEksQ0FPRUcsSUFBRCxJQUFVO0FBQ2QsYUFBT0EsSUFBUDtBQUNELEtBVEksQ0FBUDtBQVVELEdBWEQsQ0FXRSxPQUFPdGUsS0FBUCxFQUFjO0FBQ2QsV0FBT0EsS0FBUDtBQUNEO0FBQ0YsQ0F2Qk07QUF5QkEsTUFBTXFiLGlCQUFpQixHQUFJd0MsT0FBRCxJQUFhO0FBQzVDLFFBQU02QyxlQUFlLEdBQUksOERBQXpCO0FBQ0EsUUFBTTNDLFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxNQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGUTtBQUtqQkUsUUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsT0FBTyxDQUFDeEosV0FBdkI7QUFMVyxHQUFuQjs7QUFPQSxNQUFJO0FBQ0YsV0FBTzlVLEtBQUssQ0FBQ21oQixlQUFELEVBQWtCM0MsVUFBbEIsQ0FBTCxDQUNKSSxJQURJLENBQ0VoRixRQUFELElBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDaUYsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQixjQUFNLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0Q7O0FBQ0QsYUFBT2xGLFFBQVEsQ0FBQ21GLElBQVQsRUFBUDtBQUNELEtBTkksRUFPSkgsSUFQSSxDQU9FRyxJQUFELElBQVU7QUFDZCxhQUFPQSxJQUFQO0FBQ0QsS0FUSSxDQUFQO0FBVUQsR0FYRCxDQVdFLE9BQU90ZSxLQUFQLEVBQWM7QUFDZCxXQUFPQSxLQUFQO0FBQ0Q7QUFDRixDQXZCTSxDOzs7Ozs7Ozs7Ozs7QUM1SVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU0wYixnQkFBZ0IsR0FBRyxNQUFNO0FBQ3BDLFFBQU1pRixhQUFhLEdBQUksMkRBQXZCO0FBQ0EsUUFBTTVDLFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxLQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQ7QUFGUSxHQUFuQjs7QUFNQSxNQUFJO0FBQ0YsV0FBT3plLEtBQUssQ0FBQ29oQixhQUFELEVBQWdCNUMsVUFBaEIsQ0FBTCxDQUNKSSxJQURJLENBQ0VoRixRQUFELElBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDaUYsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQixjQUFNLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0Q7O0FBQ0QsYUFBT2xGLFFBQVEsQ0FBQ21GLElBQVQsRUFBUDtBQUNELEtBTkksRUFPSkgsSUFQSSxDQU9FRyxJQUFELElBQVU7QUFDZCxhQUFPQSxJQUFQO0FBQ0QsS0FUSSxDQUFQO0FBVUQsR0FYRCxDQVdFLE9BQU90ZSxLQUFQLEVBQWM7QUFDZCxXQUFPQSxLQUFQO0FBQ0Q7QUFDRixDQXRCTTtBQXdCQSxNQUFNNGIsaUJBQWlCLEdBQUlpQyxPQUFELElBQWE7QUFDNUMsUUFBTStDLGdCQUFnQixHQUFJLDZEQUExQjtBQUNBLFFBQU03QyxVQUFVLEdBQUc7QUFDakJ0VSxVQUFNLEVBQUUsTUFEUztBQUVqQnVVLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRlE7QUFLakJFLFFBQUksRUFBRVEsSUFBSSxDQUFDQyxTQUFMLENBQWVkLE9BQU8sQ0FBQzNJLEtBQXZCO0FBTFcsR0FBbkI7O0FBT0EsTUFBSTtBQUNGLFdBQU8zVixLQUFLLENBQUNxaEIsZ0JBQUQsRUFBbUI3QyxVQUFuQixDQUFMLENBQ0pJLElBREksQ0FDRWhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPbEYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOSSxFQU9KSCxJQVBJLENBT0VHLElBQUQsSUFBVTtBQUNkLGFBQU9BLElBQVA7QUFDRCxLQVRJLENBQVA7QUFVRCxHQVhELENBV0UsT0FBT3RlLEtBQVAsRUFBYztBQUNkLFdBQU9BLEtBQVA7QUFDRDtBQUNGLENBdkJNO0FBd0JBLE1BQU04YixpQkFBaUIsR0FBSStCLE9BQUQsSUFBYTtBQUM1QyxRQUFNZ0QsZ0JBQWdCLEdBQUksNkRBQTFCO0FBQ0EsUUFBTTlDLFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxNQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGUTtBQUtqQkUsUUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsT0FBTyxDQUFDbEksT0FBdkI7QUFMVyxHQUFuQjs7QUFPQSxNQUFJO0FBQ0YsV0FBT3BXLEtBQUssQ0FBQ3NoQixnQkFBRCxFQUFtQjlDLFVBQW5CLENBQUwsQ0FDSkksSUFESSxDQUNFaEYsUUFBRCxJQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2lGLE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU9sRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5JLEVBT0pILElBUEksQ0FPRUcsSUFBRCxJQUFVO0FBQ2RDLDBEQUFLLENBQUN1QyxPQUFOLENBQWN4QyxJQUFJLENBQUNRLEdBQW5CLEVBQXdCO0FBQ3RCTixnQkFBUSxFQUFFO0FBRFksT0FBeEI7QUFHQSxhQUFPRixJQUFQO0FBQ0QsS0FaSSxDQUFQO0FBYUQsR0FkRCxDQWNFLE9BQU90ZSxLQUFQLEVBQWM7QUFDZCxXQUFPQSxLQUFQO0FBQ0Q7QUFDRixDQTFCTTtBQTJCQSxNQUFNZ2MsaUJBQWlCLEdBQUk2QixPQUFELElBQWE7QUFDNUMsUUFBTWtELGdCQUFnQixHQUFJLDZEQUExQjtBQUNBLFFBQU1oRCxVQUFVLEdBQUc7QUFDakJ0VSxVQUFNLEVBQUUsTUFEUztBQUVqQnVVLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRlE7QUFLakJFLFFBQUksRUFBRVEsSUFBSSxDQUFDQyxTQUFMLENBQWVkLE9BQU8sQ0FBQ3RJLGFBQXZCO0FBTFcsR0FBbkI7O0FBT0EsTUFBSTtBQUNGLFdBQU9oVyxLQUFLLENBQUN3aEIsZ0JBQUQsRUFBbUJoRCxVQUFuQixDQUFMLENBQ0pJLElBREksQ0FDRWhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPbEYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOSSxFQU9KSCxJQVBJLENBT0VHLElBQUQsSUFBVTtBQUNkQywwREFBSyxDQUFDdUMsT0FBTixDQUFjeEMsSUFBSSxDQUFDUSxHQUFuQixFQUF3QjtBQUN0Qk4sZ0JBQVEsRUFBRTtBQURZLE9BQXhCO0FBR0EsYUFBT0YsSUFBUDtBQUNELEtBWkksQ0FBUDtBQWFELEdBZEQsQ0FjRSxPQUFPdGUsS0FBUCxFQUFjO0FBQ2R1ZSx3REFBSyxDQUFDdmUsS0FBTixDQUFZQSxLQUFLLENBQUN3QixPQUFsQixFQUEyQjtBQUN6QmdkLGNBQVEsRUFBRTtBQURlLEtBQTNCO0FBR0EsV0FBT3hlLEtBQUssQ0FBQ3dCLE9BQWI7QUFDRDtBQUNGLENBN0JNLEM7Ozs7Ozs7Ozs7OztBQzdFUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTTBhLGtCQUFrQixHQUFHLE1BQU07QUFDdEMsUUFBTThFLGdCQUFnQixHQUFJLDREQUExQjtBQUNBLFFBQU1qRCxVQUFVLEdBQUc7QUFDakJ0VSxVQUFNLEVBQUUsS0FEUztBQUVqQnVVLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURUO0FBRlEsR0FBbkI7O0FBTUEsTUFBSTtBQUNGLFdBQU96ZSxLQUFLLENBQUN5aEIsZ0JBQUQsRUFBbUJqRCxVQUFuQixDQUFMLENBQ0pJLElBREksQ0FDRWhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPbEYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOSSxFQU9KSCxJQVBJLENBT0VHLElBQUQsSUFBVTtBQUNkLGFBQU9BLElBQVA7QUFDRCxLQVRJLENBQVA7QUFVRCxHQVhELENBV0UsT0FBT3RlLEtBQVAsRUFBYztBQUNkdWUsd0RBQUssQ0FBQ3ZlLEtBQU4sQ0FBWUEsS0FBSyxDQUFDd0IsT0FBbEIsRUFBMkI7QUFDekJnZCxjQUFRLEVBQUU7QUFEZSxLQUEzQjtBQUdBLFdBQU94ZSxLQUFLLENBQUN3QixPQUFiO0FBQ0Q7QUFDRixDQXpCTTtBQTJCQSxNQUFNNGEscUJBQXFCLEdBQUl5QixPQUFELElBQWE7QUFDaEQsUUFBTW9ELGtCQUFrQixHQUFJLDhEQUE1QjtBQUNBLFFBQU1sRCxVQUFVLEdBQUc7QUFDakJ0VSxVQUFNLEVBQUUsTUFEUztBQUVqQnVVLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRlE7QUFLakJFLFFBQUksRUFBRVEsSUFBSSxDQUFDQyxTQUFMLENBQWVkLE9BQU8sQ0FBQzlHLGFBQXZCO0FBTFcsR0FBbkI7O0FBT0EsTUFBSTtBQUNGLFdBQU94WCxLQUFLLENBQUMwaEIsa0JBQUQsRUFBcUJsRCxVQUFyQixDQUFMLENBQ0pJLElBREksQ0FDRWhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPbEYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOSSxFQU9KSCxJQVBJLENBT0VHLElBQUQsSUFBVTtBQUNkLGFBQU9BLElBQVA7QUFDRCxLQVRJLENBQVA7QUFVRCxHQVhELENBV0UsT0FBT3RlLEtBQVAsRUFBYztBQUNkdWUsd0RBQUssQ0FBQ3ZlLEtBQU4sQ0FBWUEsS0FBSyxDQUFDd0IsT0FBbEIsRUFBMkI7QUFDekJnZCxjQUFRLEVBQUU7QUFEZSxLQUEzQjtBQUdBLFdBQU94ZSxLQUFLLENBQUN3QixPQUFiO0FBQ0Q7QUFDRixDQTFCTTtBQTJCQSxNQUFNOGEscUJBQXFCLEdBQUl1QixPQUFELElBQWE7QUFDaEQsUUFBTXFELGtCQUFrQixHQUFJLDhEQUE1QjtBQUNBLFFBQU1uRCxVQUFVLEdBQUc7QUFDakJ0VSxVQUFNLEVBQUUsTUFEUztBQUVqQnVVLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRlE7QUFLakJFLFFBQUksRUFBRVEsSUFBSSxDQUFDQyxTQUFMLENBQWVkLE9BQU8sQ0FBQ25HLFNBQXZCO0FBTFcsR0FBbkI7O0FBT0EsTUFBSTtBQUNGLFdBQU9uWSxLQUFLLENBQUMyaEIsa0JBQUQsRUFBcUJuRCxVQUFyQixDQUFMLENBQ0pJLElBREksQ0FDRWhGLFFBQUQsSUFBYztBQUNsQixVQUFJQSxRQUFRLENBQUNpRixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGNBQU0sSUFBSUMsS0FBSixDQUFVLDRCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPbEYsUUFBUSxDQUFDbUYsSUFBVCxFQUFQO0FBQ0QsS0FOSSxFQU9KSCxJQVBJLENBT0VHLElBQUQsSUFBVTtBQUNkQywwREFBSyxDQUFDdUMsT0FBTixDQUFjeEMsSUFBSSxDQUFDUSxHQUFuQixFQUF3QjtBQUN0Qk4sZ0JBQVEsRUFBRTtBQURZLE9BQXhCO0FBR0EsYUFBT0YsSUFBUDtBQUNELEtBWkksQ0FBUDtBQWFELEdBZEQsQ0FjRSxPQUFPdGUsS0FBUCxFQUFjO0FBQ2R1ZSx3REFBSyxDQUFDdmUsS0FBTixDQUFZQSxLQUFLLENBQUN3QixPQUFsQixFQUEyQjtBQUN6QmdkLGNBQVEsRUFBRTtBQURlLEtBQTNCO0FBR0EsV0FBT3hlLEtBQUssQ0FBQ3dCLE9BQWI7QUFDRDtBQUNGLENBN0JNO0FBOEJBLE1BQU1nYixxQkFBcUIsR0FBSXFCLE9BQUQsSUFBYTtBQUNoRCxRQUFNc0Qsa0JBQWtCLEdBQUksOERBQTVCO0FBQ0EsUUFBTXBELFVBQVUsR0FBRztBQUNqQnRVLFVBQU0sRUFBRSxNQURTO0FBRWpCdVUsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQsS0FGUTtBQUtqQkUsUUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsT0FBTyxDQUFDekcsZUFBdkI7QUFMVyxHQUFuQjs7QUFPQSxNQUFJO0FBQ0YsV0FBTzdYLEtBQUssQ0FBQzRoQixrQkFBRCxFQUFxQnBELFVBQXJCLENBQUwsQ0FDSkksSUFESSxDQUNFaEYsUUFBRCxJQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2lGLE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUIsY0FBTSxJQUFJQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU9sRixRQUFRLENBQUNtRixJQUFULEVBQVA7QUFDRCxLQU5JLEVBT0pILElBUEksQ0FPRUcsSUFBRCxJQUFVO0FBQ2RDLDBEQUFLLENBQUN1QyxPQUFOLENBQWN4QyxJQUFJLENBQUNRLEdBQW5CLEVBQXdCO0FBQ3RCTixnQkFBUSxFQUFFO0FBRFksT0FBeEI7QUFHQSxhQUFPRixJQUFQO0FBQ0QsS0FaSSxDQUFQO0FBYUQsR0FkRCxDQWNFLE9BQU90ZSxLQUFQLEVBQWM7QUFDZHVlLHdEQUFLLENBQUN2ZSxLQUFOLENBQVlBLEtBQUssQ0FBQ3dCLE9BQWxCLEVBQTJCO0FBQ3pCZ2QsY0FBUSxFQUFFO0FBRGUsS0FBM0I7QUFHQSxXQUFPeGUsS0FBSyxDQUFDd0IsT0FBYjtBQUNEO0FBQ0YsQ0E3Qk0sQzs7Ozs7Ozs7Ozs7O0FDdEZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJNGYsWUFBSjs7QUFFQSxXQUFtQyxFQUlsQzs7QUFFRCxNQUFNL0gsWUFBWSxHQUFHO0FBQ25CbmhCLFdBQVMsRUFBRWtwQjtBQURRLENBQXJCO0FBSUEsTUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFFQSxNQUFNdlIsS0FBSyxHQUFHd1IseURBQVcsQ0FDdkJDLCtEQUR1QixFQUV2Qm5JLFlBRnVCLEVBR3ZCb0ksb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNMLGNBQUQsQ0FBaEIsQ0FISSxDQUF6QjtBQUtBQSxjQUFjLENBQUNNLEdBQWYsQ0FBbUJDLDBEQUFuQjtBQUVlN1Isb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHdEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXItdXBwZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyLWxpbmtzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTEyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyLWFib3V0ICc+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQtbG9nbyc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdpbWFnZXMvWWF0cmEtd2hpdGUucG5nJyBhbHQ9J0ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyLXNvY2lhbC1saW5rcyc+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsYXRpY29uLW1hcHMtYW5kLWZsYWdzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2k+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDE0IENodXJjaCBTdCwgV29sdmVydG9uLCBNaWx0b24gS2V5bmVzIE1LMTIgNUpOLCBVbml0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIEtpbmdkb21cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsYXRpY29uLXBob25lLWNhbGwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0ndGVsOigwMTIpLTM0NS02Nzg5Jz4gKDAxMiktMzQ1LTY3ODk8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsYXRpY29uLW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnRvdXJudHJhdmVsQHRlc3RtYWlsLmNvbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdXJudHJhdmVsQHRlc3RtYWlsLmNvbVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXItc29jaWFsLWxpbmtzJz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NvY2lhbC1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWZhY2Vib29rJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc29jaWFsLWljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5zdGFncmFtJyBhcmlhLWhpZGRlbj0ndHJ1ZSc+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc29jaWFsLWljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdHdpdHRlcicgYXJpYS1oaWRkZW49J3RydWUnPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NvY2lhbC1pY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXlvdXR1YmUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdzb2NpYWwtaWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1nb29nbGUnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvcHlyaWdodCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvcHlyaWdodC1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDIwMjIgPGkgY2xhc3NOYW1lPSdmYSBmYS1jb3B5cmlnaHQnIGFyaWEtaGlkZGVuPSd0cnVlJz48L2k+IE1LXG4gICAgICAgICAgICAgICAgICBHbG9iYWwuIERlc2lnbmVkICYgRGV2ZWxvcGVkIGJ5eycgJ31cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vc3ltYmlhbnRzeXN0ZW1zLmNvLnVrLycgdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgIFN5bWJpYW50IFN5c3RlbXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50LWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5XZSBBY2NlcHQ8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naW1hZ2VzL3BheW1lbnQxLnBuZycgYWx0PSdJbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdpbWFnZXMvcGF5bWVudDIucG5nJyBhbHQ9J0ltYWdlJyAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2ltYWdlcy9wYXltZW50My5wbmcnIGFsdD0nSW1hZ2UnIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naW1hZ2VzL3BheW1lbnQ0LnBuZycgYWx0PSdJbWFnZScgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9J2JhY2stdG8tdG9wJz5cbiAgICAgICAgPGEgaHJlZj0nIyc+PC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHVzZXJMb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlckxvZ2luKVxuICBjb25zdCB1c2VyUmVkdXggPSB1c2VyTG9naW4/LkVtYWlsXG4gIGxldCB1c2VyID0gZmFsc2VcbiAgaWYgKHVzZXJSZWR1eCkge1xuICAgIHVzZXIgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgdXNlciA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBpc0FjdGl2ZShyb3V0ZSkge1xuICAgIGlmIChyb3V0ZXIgPT09IHJvdXRlci5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuIGFjdGl2ZVxuICAgIH0gZWxzZSAnICdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cHBlci1oZWFkIGNsZWFyZml4JyBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcIiMzNTg3QTRcIn19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3QtaW5mbyc+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J3RlbDooMDEyKS0zNDUtNjc4OScgc3R5bGU9e3tjb2xvcjpcIiNmZmZcIn19PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmbGF0aWNvbi1waG9uZS1jYWxsJz48L2k+IFBob25lOiAoMDEyKS0zNDUtNjc4OVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdtYWlsdG86dG91cm50cmF2ZWxAdGVzdG1haWwuY29tJyBzdHlsZT17e2NvbG9yOlwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZsYXRpY29uLW1haWwnPjwvaT4gTWFpbDpcbiAgICAgICAgICAgICAgICAgIHRvdXJudHJhdmVsQHRlc3RtYWlsLmNvbVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW4tYnRuIHB1bGwtcmlnaHQnPlxuICAgICAgICAgICAgICA8TGluayBocmVmPScvYWJvdXR1cyc+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nL2Fib3V0dXMnPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1pbmZvLWNpcmNsZSc+PC9pPkFib3V0IFVzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcml2YWN5cG9saWN5Jz5cbiAgICAgICAgICAgICAgICA8YSBocmVmPScvcHJpdmFjeXBvbGljeSc+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXItc2VjcmV0Jz48L2k+UHJpdmFjeSBQb2xpY3lcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb24nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2aWdhdGlvbi1jb250ZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfbWVudSc+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0aWNreS1mdW5jdGlvbiBuYXZiYXItYXJyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvIHB1bGwtbGVmdCc+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9J0ltYWdlJyBzcmM9J2ltYWdlcy9ZYXRyYS0wMS5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nc2xpY2tuYXYtbW9iaWxlJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSduYXZiYXInIGNsYXNzTmFtZT0nbmF2YmFyLW5hdi13cmFwcGVyJz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdiBuYXZiYXItbmF2JyBpZD0ncmVzcG9uc2l2ZS1tZW51Jz5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2ZsaWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXBsYW5lJz48L2k+IEZsaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyNwYWNrYWdlcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLyNwYWNrYWdlcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J3NsIHNsLWljb24tYnJpZWZjYXNlJz48L2k+IFBhY2thZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvI2RlYWxzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScvI2RlYWxzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nc2wgc2wtaWNvbi1wcmVzZW50Jz48L2k+IERlYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYm9va2luZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nL2Jvb2tpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS11c2VyJz48L2k+IHt1c2VyUmVkdXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9mbGlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS1wbGFuZSc+PC9pPiBGbGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8jcGFja2FnZXMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8jcGFja2FnZXMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdzbCBzbC1pY29uLWJyaWVmY2FzZSc+PC9pPiBQYWNrYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyNkZWFscyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLyNkZWFscyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J3NsIHNsLWljb24tcHJlc2VudCc+PC9pPiBEZWFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3NpZ251cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nL3NpZ251cCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXItcGx1cyc+PC9pPiBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2F1dGgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy9hdXRoJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdW5sb2NrLWFsdCc+PC9pPiBMb2dpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nLCBwcmVmZXRjaD86IGJvb2xlYW4pOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgICAgLnRoZW4oKHsgc2NyaXB0cywgY3NzIH0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgICAgIF0gYXMgY29uc3QpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCkgPT4gKHtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKVxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHsgZW50cnlwb2ludCwgc3R5bGVzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICAgID4oeyBzdHlsZXM6IHN0eWxlcyEgfSwgZW50cnlwb2ludClcbiAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XG4gICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKSA9PiB7fSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7XG4gIGdldENsaWVudEJ1aWxkTWFuaWZlc3QsXG4gIGlzQXNzZXRFcnJvcixcbiAgbWFya0Fzc2V0RXJyb3IsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXInXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NvbmZpZydcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxuICBORVhUX0RBVEEsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgLyogcHJvZCAqL1xuICAgIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICB9XG59XG5cbmludGVyZmFjZSBSb3V0ZVByb3BlcnRpZXMge1xuICBzaGFsbG93OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4gIHNjcm9sbD86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID1cbiAgfCBudWxsXG4gIHwgeyBfX046IGZhbHNlIH1cbiAgfCAoeyBfX046IHRydWU7IGlkeDogbnVtYmVyIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlOiB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlXG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKVxuICAgIC5kZXRlY3REb21haW5Mb2NhbGVcbn1cblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBsb2NhbGVzPzogc3RyaW5nW10sXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBsb2NhbGUgPSBsb2NhbGUgfHwgbm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZVxuXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpXG5cbiAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7XG4gICAgICAgIGJhc2VQYXRoIHx8ICcnXG4gICAgICB9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YFxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmXG4gICAgICBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKVxuICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpXG5cbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8XG4gICAgICAgIHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpXG4gICAgICA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICtcbiAgICAgICAgICBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpXG4gIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpXG5cbiAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBxdWVyeUluZGV4ID4gLTEgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpXG4gIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gXG4gIHJldHVybiBwYXRoXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGxldCBiYXNlOiBVUkxcblxuICB0cnkge1xuICAgIGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICB9IGNhdGNoIChfKSB7XG4gICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpXG4gIH1cbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLmFzUGF0aCwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWU6IHN0cmluZywgcGFnZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGF0aG5hbWVcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYWdlXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgICB8ICdpc1ByZXZpZXcnXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9XG4gIHwgKE9taXQ8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnc3R5bGVTaGVldHMnPiAmIHsgaW5pdGlhbDogdHJ1ZSB9KVxuICB8IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKFxuICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICBBcHA6IEFwcENvbXBvbmVudCxcbiAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbikgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmXG4gICEhKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHYgPSAnX19uZXh0J1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWVcbiAgICB9IGNhdGNoIChuKSB7fVxuICB9KSgpXG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJylcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiBTU0dfREFUQV9OT1RfRk9VTkQgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIC8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG4gIHNkcjogeyBbYXNQYXRoOiBzdHJpbmddOiBQcm9taXNlPG9iamVjdD4gfSA9IHt9XG5cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG4gIGlzUHJldmlldzogYm9vbGVhblxuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxuXG4gIHByaXZhdGUgX2lkeDogbnVtYmVyID0gMFxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICAgIGRvbWFpbkxvY2FsZXMsXG4gICAgICBpc1ByZXZpZXcsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChXcmFwQXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJlxuICAgICAgICAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiZcbiAgICAgICAgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IChvcHRpb25zIGFzIGFueSkuX2hcblxuICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgIGlmICgob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlXG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB0byBzY3JvbGwgcmVzZXQgYmVoYXZpb3IgdW5sZXNzIGV4cGxpY2l0bHkgc3BlY2lmaWVkIHRvIGJlXG4gICAgLy8gYGZhbHNlYCEgVGhpcyBtYWtlcyB0aGUgYmVoYXZpb3IgYmV0d2VlbiB1c2luZyBgUm91dGVyI3B1c2hgIGFuZCBhXG4gICAgLy8gYDxMaW5rIC8+YCBjb25zaXN0ZW50LlxuICAgIG9wdGlvbnMuc2Nyb2xsID0gISEob3B0aW9ucy5zY3JvbGwgPz8gdHJ1ZSlcblxuICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBvcHRpb25zLmxvY2FsZSAhPT0gdGhpcy5sb2NhbGVcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID09PSBmYWxzZVxuICAgICAgICAgID8gdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcylcbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKVxuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChcbiAgICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgICAgaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICApLnBhdGhuYW1lXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICAgIGlmICghdGhpcy5sb2NhbGVzPy5pbmNsdWRlcyh0aGlzLmxvY2FsZSEpKSB7XG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMsXG4gICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgIClcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgIC8vIGNvcnJlY3QgZG9tYWluXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZGlkTmF2aWdhdGUgJiZcbiAgICAgICAgICBkZXRlY3RlZERvbWFpbiAmJlxuICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgIHJld3JpdGVzLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcblxuICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpXG5cbiAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICtcbiAgICAgICAgICAgIGBcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUoXG4gICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUsXG4gICAgICAgICAgICAgIHBhZ2VzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBQcmV2aWV3RGF0YSB9IGZyb20gJ25leHQvdHlwZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiAoc3RyaW5nIHwgbnVtYmVyKVtdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IHN0cmluZ1tdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgYWZ0ZXJJbnRlcmFjdGl2ZT86IHN0cmluZ1tdOyBiZWZvcmVJbnRlcmFjdGl2ZT86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nPzogYm9vbGVhblxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBQcmV2aWV3RGF0YVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9OYXZCYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcbmltcG9ydCAnLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJ1xuLy8gaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnIC8vIG9yICdhbnRkL2Rpc3QvYW50ZC5sZXNzJ1xuaW1wb3J0IFByb3RlY3RlZFJvdXRlcyBmcm9tICcuLi9wdWJsaWMvanMvUHJvdGVjdGVkUm91dGVzJ1xuLy8gaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvSG9tZS9QYWNrYWdlcy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvRHJvcERvd24uY3NzJztcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkge1xuICBjb25zdCByb3V0ZXIxID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyMVxuICBjb25zdCBub05hdiA9IFtcbiAgICAnL2Rhc2hib2FyZCcsXG4gICAgJy91c2VyUHJvZmlsZScsXG4gICAgJy9yZXZpZXdzJyxcbiAgICAnL2FkZFRvdXInLFxuICAgICcvcGFja2FnZUxpc3QnLFxuICAgICcvYm9va2luZycsXG4gICAgJy90b3VySGlzdG9yeScsXG4gICAgJy91cGRhdGVQYXNzd29yZCcsXG4gICAgJy9jcmVhdGVQYWNrYWdlJyxcbiAgICAnL2NyZWF0ZU9mZmVycycsXG4gICAgJy9vZmZlckxpc3QnLFxuICAgICcvZWRpdE9mZmVyJyxcbiAgICAnL2VkaXRQYWNrYWdlJyxcbiAgXVxuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XG5cbiAgICAgIHtub05hdi5pbmNsdWRlcyhwYXRobmFtZSkgPyBudWxsIDogPE5hdkJhciAvPn1cbiAgICAgIDxQcm90ZWN0ZWRSb3V0ZXMgcm91dGVyPXtyb3V0ZXJ9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3RlY3RlZFJvdXRlcz5cbiAgICAgIHtub05hdi5pbmNsdWRlcyhwYXRobmFtZSkgPyBudWxsIDogPEZvb3RlciAvPn1cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBpc0Jyb3dzZXIgPSAoKSA9PiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuY29uc3QgUHJvdGVjdGVkUm91dGVzID0gKHsgcm91dGVyLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHVzZXJMb2dpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlckxvZ2luKVxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB1c2VyTG9naW4/LkVtYWlsXG5cbiAgbGV0IHVucHJvdGVjdGVkUm91dGVzID0gW1xuICAgICcvJyxcbiAgICAnL2ZsaWdodCcsXG4gICAgJy9mbGlnaHQvZnNlYXJjaCcsXG4gICAgJy9mbGlnaHRCb29raW5nJyxcbiAgICAnL2F1dGgnLFxuICAgICcvc2lnbnVwJyxcbiAgICAnL2Fib3V0dXMnLFxuICAgICcvcHJpdmFjeXBvbGljeScsXG4gICAgJy9mb3Jnb3RwYXNzJyxcbiAgICAnL3BhY2thZ2VzRGV0YWlsJyxcbiAgICAnL2RlYWxEZXRhaWwnLFxuICAgICcvYm9va2luZ0NvbmZpcm1lZCcsXG4gICAgJy9wYWNrYWdlcycsXG4gICAgJy9kZWFscycsXG4gICAgJy9tb3JlUGFja2FnZXMnLFxuICAgICcvbW9yZURlYWxzJ1xuICBdXG5cbiAgbGV0IHBhdGhJc1Byb3RlY3RlZCA9IHVucHJvdGVjdGVkUm91dGVzLmluZGV4T2Yocm91dGVyLnBhdGhuYW1lKSA9PT0gLTFcblxuICBpZiAoaXNCcm93c2VyKCkgJiYgIWlzQXV0aGVudGljYXRlZCAmJiBwYXRoSXNQcm90ZWN0ZWQpIHtcbiAgICByb3V0ZXIucHVzaCgnLycpXG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW5cbn1cbmV4cG9ydCBkZWZhdWx0IFByb3RlY3RlZFJvdXRlc1xuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi91c2VyQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IGdldFRva2VyQWN0aW9uID0gKHRva2VuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuR0VUX1RPS0VOLFxuICAgIHRva2VuLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB0b2tlblJlY2VpdmVkID0gKHRva2VuUmVjKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVE9LRU5fUkVDRUlWRUQsXG4gICAgdG9rZW5SZWMsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB0b2tlblJlY0ZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlRPS0VOX1JFQ0VJVkVEX0ZBSUxFRCxcbiAgICBlcnJvcixcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyQWN0aW9uID0gKHVzZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5VU0VSX0xPR0lOX1JFUVVFU1QsXG4gICAgdXNlcixcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzID0gKHVzZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5VU0VSX0xPR0lOX1NVQ0NFU1MsXG4gICAgdXNlcixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbGVkID0gKGVycm9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVVNFUl9MT0dJTl9GQUlMLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySW5mbycpXG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVVNFUl9MT0dPVVQsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB2ZXJpZnlFbWFpbCA9IChlbWFpbCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlZFUklGWV9FTUFJTCxcbiAgICBlbWFpbCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgdmVyaWZ5RW1haWxTdWNjZXNzID0gKGVtYWlsKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVkVSSUZZX0VNQUlMX1NVQ0NFU1MsXG4gICAgZW1haWwsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB2ZXJpZnlFbWFpbEZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlZFUklGWV9FTUFJTF9GQUlMLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgY29uc3QgdmVyaWZ5T1RQID0gKG90cCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkNPTkZJUk1fT1RQLFxuICAgIG90cCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgdmVyaWZ5T1RQU3VjY2VzcyA9IChvdHApID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5DT05GSVJNX09UUF9TVUNDRVNTLFxuICAgIG90cCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHZlcmlmeU90cEZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLk9UUF9DT05GSVJNQVRJT05fRkFJTCxcbiAgICBlcnJvcixcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHNldFBhc3MgPSAocGFzc3dvcmQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5TRVRfUEFTU1dPUkQsXG4gICAgcGFzc3dvcmQsXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHNldFBhc3NTdWNjZXNzID0gKHBhc3N3b3JkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuU0VUX1BBU1NXT1JEX1NVQ0NFU1MsXG4gICAgcGFzc3dvcmQsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBzZXRQYXNzd29yZEZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlNFVF9QQVNTV09SRF9GQUlMLFxuICAgIGVycm9yLFxuICB9XG59XG5leHBvcnQgY29uc3QgdXBkYXRlUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfUEFTU1dPUkQsXG4gICAgcGFzc3dvcmQsXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBSRVFVRVNUX0ZMSUdIVF9EQVRBID0gJ1JFUVVFU1RfRkxJR0hUX0RBVEEnXG5leHBvcnQgY29uc3QgUkVDSUVWRV9GTElHSFRfREFUQSA9ICdSRUNFSVZFX0ZMSUdIVF9EQVRBJ1xuZXhwb3J0IGNvbnN0IEZMSUdIVF9TRUFSQ0hfRkFJTEVEID0gJ0ZMSUdIVF9TRUFSQ0hfRkFJTCdcbmV4cG9ydCBjb25zdCBGTElHSFRfUkVWQUxJREFURSA9ICdGTElHSFRfUkVWQUxJREFURSdcbmV4cG9ydCBjb25zdCBSRUNfRkxJR0hUX1ZBTElEQVRJT04gPSAnUkVDX0ZMSUdIVF9WQUxJREFUSU9OJ1xuZXhwb3J0IGNvbnN0IEZMSUdIVF9OT1RfVkFMSUQgPSAnRkxJR0hUX05PVF9WQUxJRCdcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE5SID0gJ0NSRUFURV9QTlInXG5leHBvcnQgY29uc3QgUE5SX0NSRUFURUQgPSAnUE5SX0NSRUFURUQnXG5leHBvcnQgY29uc3QgUE5SX0NSRUFUSU9OX0ZBSUxFRCA9ICdQTlJfQ1JFQVRJT05fRkFJTEVEJ1xuZXhwb3J0IGNvbnN0IFNBVkVfQk9PS0lORyA9ICdTQVZFX0JPT0tJTkcnXG5leHBvcnQgY29uc3QgU0FWRV9CT09LSU5HX0ZBSUxFRCA9ICdTQVZFX0JPT0tJTkdfRkFJTEVEJ1xuZXhwb3J0IGNvbnN0IEJPT0tJTkdfU0FWRUQgPSAnQk9PS0lOR19TQVZFRCdcbmV4cG9ydCBjb25zdCBHRVRfU0FWRV9CT09LSU5HID0gJ0dFVF9TQVZFX0JPT0tJTkcnXG5leHBvcnQgY29uc3QgR0VUX1NBVkVfQk9PS0lOR19GQUlMRUQgPSAnR0VUX1NBVkVfQk9PS0lOR19GQUlMRUQnXG5leHBvcnQgY29uc3QgU0FWRURfQk9PS0lOR19SRUNFSVZFRCA9ICdTQVZFRF9CT09LSU5HX1JFQ0VJVkVEJ1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdEZsaWdodERhdGEgPSAoZGF0YSkgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9GTElHSFRfREFUQSxcbiAgZGF0YSxcbiAgbG9hZGluZzogdHJ1ZSxcbn0pXG5leHBvcnQgY29uc3QgZ2V0RmxpZ2h0RGF0YSA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDSUVWRV9GTElHSFRfREFUQSxcbiAgICBkYXRhLFxuICB9XG59XG5leHBvcnQgY29uc3QgcmVxdWVzdEZsaWdodEZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZMSUdIVF9TRUFSQ0hfRkFJTEVELFxuICAgIGVycm9yLFxuICB9XG59XG5leHBvcnQgY29uc3QgcmVxdWVzdEZMaWdodFZhbGlkYXRpb24gPSAoZmxpZ2h0RGF0YSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEZMSUdIVF9SRVZBTElEQVRFLFxuICAgIGZsaWdodERhdGEsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBmbGlnaHRJU1ZhbGlkID0gKHZhbGlkYXRpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNfRkxJR0hUX1ZBTElEQVRJT04sXG4gICAgdmFsaWRhdGlvbixcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGZsaWdodE5vdFZhbGlkID0gKGVycm9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogRkxJR0hUX05PVF9WQUxJRCxcbiAgICBlcnJvcixcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBOUiA9IChwbnJSZXF1ZXN0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1JFQVRFX1BOUixcbiAgICBwbnJSZXF1ZXN0LFxuICAgIGxvYWRpbmc6IHRydWUsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBwbnJDcmVhdGVkID0gKGNyZWF0ZWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBQTlJfQ1JFQVRFRCxcbiAgICBjcmVhdGVkLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgY29uc3QgcG5yQ3JlYXRpb25GYWlsZWQgPSAoZXJyb3IpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBQTlJfQ1JFQVRJT05fRkFJTEVELFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgY29uc3Qgc2F2ZUJvb2tpbmdBY3Rpb24gPSAoc2F2ZUJvb2tpbmcpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTQVZFX0JPT0tJTkcsXG4gICAgc2F2ZUJvb2tpbmcsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBib29raW5nU2F2ZWRkID0gKGJvb2tpbmdTYXZlZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEJPT0tJTkdfU0FWRUQsXG4gICAgYm9va2luZ1NhdmVkLFxuICB9XG59XG5leHBvcnQgY29uc3Qgc2F2ZUJvb2tpbmdGYWlsZWQgPSAoZXJyb3IpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTQVZFX0JPT0tJTkdfRkFJTEVELFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgY29uc3QgZ2V0U2F2ZWRCb29raW5nID0gKGJvb2tpbmdNYWlsKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogR0VUX1NBVkVfQk9PS0lORyxcbiAgICBib29raW5nTWFpbCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3Qgc2F2ZWRCb29raW5nUmVjID0gKHNhdmVkQm9va2luZ1JlYykgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNBVkVEX0JPT0tJTkdfUkVDRUlWRUQsXG4gICAgc2F2ZWRCb29raW5nUmVjLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTYXZlZEJvb2tpbmdGYWlsZWQgPSAoZXJyb3IpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBHRVRfU0FWRV9CT09LSU5HX0ZBSUxFRCxcbiAgICBlcnJvcixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IENSRUFURV9PRkZFUiA9ICdDUkVBVEVfT0ZGRVInXG5leHBvcnQgY29uc3QgQ1JFQVRFRF9PRkZFUl9TVUNDRVNTRlVMID0gJ0NSRUFURV9PRkZFUl9TVUNDRVNTRlVMJ1xuZXhwb3J0IGNvbnN0IFJFQURfT0ZGRVIgPSAnUkVBRF9PRkZFUidcbmV4cG9ydCBjb25zdCBPRkZFUlNfUkVDRUlWRUQgPSAnT0ZGRVJTX1JFQ0VJVkVEJ1xuZXhwb3J0IGNvbnN0IFVQREFURV9PRkZFUiA9ICdVUERBVEVfT0ZGRVInXG5leHBvcnQgY29uc3QgVVBEQVRFRF9PRkZFUl9TVUNDRVNGVUwgPSAnVVBEQVRFRF9PRkZFUl9TVUNDRVNTRlVMJ1xuZXhwb3J0IGNvbnN0IERFTEVURV9PRkZFUiA9ICdERUxFVEUtT0ZGRVInXG5leHBvcnQgY29uc3QgREVMRVRFX09GRkVSX1NVQ0NFU1NGVUwgPSAnREVMRVRFX09GRkVSX1NVQ0NFU0ZVTCdcblxuZXhwb3J0IGNvbnN0IHJlYWRPZmZlckFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUFEX09GRkVSLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBvZmZlcnNSZWMgPSAob2ZmZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBPRkZFUlNfUkVDRUlWRUQsXG4gICAgb2ZmZXIsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9mZmVyQWN0aW9uID0gKG9mZmVyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ1JFQVRFX09GRkVSLFxuICAgIG9mZmVyLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBvZmZlckNyZWF0ZWRTdWNjZXNzID0gKG9mZmVyQ3JlYXRlZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENSRUFURURfT0ZGRVJfU1VDQ0VTU0ZVTCxcbiAgICBvZmZlckNyZWF0ZWQsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU9mZmVyQWN0aW9uID0gKG9mZmVyVXBkYXRlSWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfT0ZGRVIsXG4gICAgb2ZmZXJVcGRhdGVJZCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgdXBkYXRlT2ZmZXJTdWNjZXNzID0gKG9mZmVyVXBkYXRlZFN1Y2Nlc3MpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVEX09GRkVSX1NVQ0NFU0ZVTCxcbiAgICBvZmZlclVwZGF0ZWRTdWNjZXNzLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVPZmZlckFjdGlvbiA9IChvZmZlcklkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREVMRVRFX09GRkVSLFxuICAgIG9mZmVySWQsXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGRlbGV0ZU9mZmVyU3VjY2VzcyA9IChkZWxldGVPZmZlcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IERFTEVURV9PRkZFUl9TVUNDRVNTRlVMLFxuICAgIGRlbGV0ZU9mZmVyLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ1JFQVRFX1BBQ0tBR0VTID0gJ0NSRUFURV9QQUNLQUdFUydcbmV4cG9ydCBjb25zdCBQQUNLQUdFX0NSRUFURUQgPSAnUEFDS0FHRV9DUkVBVEVEJ1xuZXhwb3J0IGNvbnN0IFBBQ0tBR0VfQ1JFQVRJT05fRkFJTEVEID0gJ1BBQ0tBR0VfQ1JFQVRJT05fRkFJTEVEJ1xuZXhwb3J0IGNvbnN0IFJFQURfUEFDS0FHRVMgPSAnUkVBRF9QQUNLQUdFUydcbmV4cG9ydCBjb25zdCBQQUNLQUdFU19SRUNFSVZFRCA9ICdQQUNLQUdFU19SRUNFSVZFRCdcbmV4cG9ydCBjb25zdCBQQUNLQUdFU19SRUNFSVZFRF9GQUlMRUQgPSAnUEFDS0FHRVNfUkVDRUlWRURfRkFJTEVEJ1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQUNLQUdFUyA9ICdVUERBVEVfUEFDS0FHRVMnXG5leHBvcnQgY29uc3QgVVBEQVRFX1BBQ0tBR0VfU1VDQ0VTU0ZVTCA9ICdVUERBVEVfUEFDS0FHRV9TVUNDRVNTRlVMJ1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQUNLQUdFX0ZBSUxFRCA9ICdVUERBVEVfUEFDS0FHRV9GQUlMRUQnXG5leHBvcnQgY29uc3QgREVMRVRFX1BBQ0tBR0VTID0gJ0RFTEVURV9QQUNLQUdFUydcbmV4cG9ydCBjb25zdCBERUxFVEVfUEFDS0FHRVNfU1VDQ0VTUyA9ICdERUxFVEVfUEFDS0FHRV9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IERFTEVURV9QQUNLQUdFU19GQUlMRUQgPSAnREVMRVRFX1BBQ0tBR0VfRkFJTEVEJ1xuXG5leHBvcnQgY29uc3QgcmVhZFBhY2thZ2VBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVBRF9QQUNLQUdFUyxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgcGFja2FnZVJlYyA9IChwYWNrYWdnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFBBQ0tBR0VTX1JFQ0VJVkVELFxuICAgIHBhY2thZ2dlLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgY29uc3QgcGFja2FnZVJlY0ZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFBBQ0tBR0VTX1JFQ0VJVkVEX0ZBSUxFRCxcbiAgICBlcnJvcixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhY2thZ2VBY3Rpb24gPSAoY3JlYXRlUGFja2FnZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENSRUFURV9QQUNLQUdFUyxcbiAgICBjcmVhdGVQYWNrYWdlLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVQYWNrYWdlU3VjY2VzcyA9IChwYWNrYWdlQ3JlYXRlZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFBBQ0tBR0VfQ1JFQVRFRCxcbiAgICBwYWNrYWdlQ3JlYXRlZCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHBhY2thZ2VDcmVhdGlvbkZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFBBQ0tBR0VfQ1JFQVRJT05fRkFJTEVELFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQYWNrYWdlQWN0aW9uID0gKHVwZGF0ZVBhY2thZ2VJZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVQREFURV9QQUNLQUdFUyxcbiAgICB1cGRhdGVQYWNrYWdlSWQsXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBhY2thZ2VTdWNjZXNzID0gKHBhY2thZ2VVcGRhdGVTdWNjZXNzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVVBEQVRFRF9QQUNLQUdFX1NVQ0NFU0ZVTCxcbiAgICBwYWNrYWdlVXBkYXRlU3VjY2VzcyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBhY2thZ2VGYWlsZWQgPSAoZXJyb3IpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVUERBVEVfUEFDS0FHRV9GQUlMRUQsXG4gICAgZXJyb3IsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBkZWxldGVQYWNrZ2VBY3Rpb24gPSAocGFja2FnZUlEKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREVMRVRFX1BBQ0tBR0VTLFxuICAgIHBhY2thZ2VJRCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgZGVsZXRlUGFja2dlU3VjY2VzID0gKGRlbFBhY2thZ2VTdWNjZXNzKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREVMRVRFX1BBQ0tBR0VTX1NVQ0NFU1MsXG4gICAgZGVsUGFja2FnZVN1Y2Nlc3MsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBkZWxldGVQYWNrYWdlRmFpbGVkID0gKGVycm9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREVMRVRFX1BBQ0tBR0VTX0ZBSUxFRCxcbiAgICBlcnJvcixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IEdFVF9UT0tFTiA9ICdHRVRfVE9LRU4nXG5leHBvcnQgY29uc3QgVE9LRU5fUkVDRUlWRUQgPSAnVE9LRU5fUkVDRUlWRUQnXG5leHBvcnQgY29uc3QgVE9LRU5fUkVDRUlWRURfRkFJTEVEID0gJ1RPS0VOX1JFQ0VJVkVEX0ZBSUxFRCdcblxuZXhwb3J0IGNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9ICdVU0VSX0xPR0lOX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBVU0VSX0xPR0lOX0ZBSUwgPSAnVVNFUl9MT0dJTl9GQUlMJ1xuZXhwb3J0IGNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xuXG5leHBvcnQgY29uc3QgVVNFUl9SRUdJU1RFUl9SRVFVRVNUID0gJ1VTRVJfUkVHSVNURVJfUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBVU0VSX1JFR0lTVEVSX1NVQ0NFU1MgPSAnVVNFUl9SRUdJU1RFUl9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IFVTRVJfUkVHSVNURVJfRkFJTCA9ICdVU0VSX1JFR0lTVEVSX0ZBSUwnXG5cbmV4cG9ydCBjb25zdCBWRVJJRllfRU1BSUwgPSAnVkVSSUZZX0VNQUlMJ1xuZXhwb3J0IGNvbnN0IFZFUklGWV9FTUFJTF9TVUNDRVNTID0gJ1ZFUklGWV9FTUFJTF9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IFZFUklGWV9FTUFJTF9GQUlMID0gJ1ZFUklGWV9FTUFJTF9GQUlMJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fT1RQID0gJ0NPTkZJUk1fT1RQJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fT1RQX1NVQ0NFU1MgPSAnQ09ORklSTV9PVFBfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBPVFBfQ09ORklSTUFUSU9OX0ZBSUwgPSAnT1RQX0NPTkZJUk1BVElPTl9GQUlMJ1xuZXhwb3J0IGNvbnN0IFNFVF9QQVNTV09SRCA9ICdTRVRfUEFTU1dPUkQnXG5leHBvcnQgY29uc3QgU0VUX1BBU1NXT1JEX1NVQ0NFU1MgPSAnU0VUX1BBU1NXT1JEX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgU0VUX1BBU1NXT1JEX0ZBSUwgPSAnU0VUX1BBU1NXT1JEX0ZBSUwnXG5leHBvcnQgY29uc3QgVVBEQVRFX1BBU1NXT1JEID0gJ1VQREFURV9QQVNTV09SRCdcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvZmxpZ2h0QWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IGZsaWd0aFNlYXJjaCA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgbGV0IHJlc3BvbnNlID0gYWN0aW9uXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlJFUVVFU1RfRkxJR0hUX0RBVEE6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VhcmNoRGF0YTogYWN0aW9uLmRhdGEsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9XG4gICAgY2FzZSB0eXBlcy5SRUNJRVZFX0ZMSUdIVF9EQVRBOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLkZMSUdIVF9TRUFSQ0hfRkFJTEVEOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3BvbnNlLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgY2FzZSB0eXBlcy5GTElHSFRfUkVWQUxJREFURTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB2YWxpZGF0aW9uOiBhY3Rpb24uZmxpZ2h0RGF0YSB9XG4gICAgY2FzZSB0eXBlcy5SRUNfRkxJR0hUX1ZBTElEQVRJT046XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzOiBhY3Rpb24gfVxuICAgIGNhc2UgdHlwZXMuRkxJR0hUX05PVF9WQUxJRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByZXM6IGFjdGlvbixcbiAgICAgICAgZXJyb3IsXG4gICAgICB9XG4gICAgY2FzZSB0eXBlcy5DUkVBVEVfUE5SOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBuclJlcXVlc3Q6IGFjdGlvbi5wbnJSZXF1ZXN0LCBsb2FkaW5nOiB0cnVlIH1cbiAgICBjYXNlIHR5cGVzLlBOUl9DUkVBVEVEOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNyZWF0ZWQ6IGFjdGlvbiwgbG9hZGluZzogZmFsc2UgfVxuICAgIGNhc2UgdHlwZXMuUE5SX0NSRUFUSU9OX0ZBSUxFRDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogYWN0aW9uLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgY2FzZSB0eXBlcy5TQVZFX0JPT0tJTkc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2F2ZUJvb2tpbmc6IGFjdGlvbi5zYXZlQm9va2luZyB9XG4gICAgY2FzZSB0eXBlcy5CT09LSU5HX1NBVkVEOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJvb2tpbmdTYXZlZDogYWN0aW9uIH1cbiAgICBjYXNlIHR5cGVzLlNBVkVfQk9PS0lOR19GQUlMRUQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IGFjdGlvbiwgbG9hZGluZzogZmFsc2UgfVxuICAgIGNhc2UgdHlwZXMuR0VUX1NBVkVfQk9PS0lORzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBib29raW5nTWFpbDogYWN0aW9uLmJvb2tpbmdNYWlsLCBsb2FkaW5nOiB0cnVlIH1cbiAgICBjYXNlIHR5cGVzLlNBVkVEX0JPT0tJTkdfUkVDRUlWRUQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2F2ZWRCb29raW5nUmVjOiBhY3Rpb24sIGxvYWRpbmc6IGZhbHNlIH1cbiAgICBjYXNlIHR5cGVzLkdFVF9TQVZFX0JPT0tJTkdfRkFJTEVEOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24sIGxvYWRpbmc6IGZhbHNlIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvb2ZmZXJzQWN0aW9ucydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbn1cblxuZXhwb3J0IGNvbnN0IG9mZmVyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGxldCBvZmZlciA9IGFjdGlvblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5DUkVBVEVfT0ZGRVI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgY2FzZSB0eXBlcy5DUkVBVEVEX09GRkVSX1NVQ0NFU1NGVUw6XG4gICAgICBjb25zb2xlLmxvZygnc3RhdGVlZSBhbmQgb2ZmZXIgICcsIHN0YXRlLCBvZmZlcilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvZmZlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLm9mZmVyLFxuICAgICAgICAgIG9mZmVyOiBbLi4uc3RhdGUub2ZmZXIub2ZmZXIsIG9mZmVyLm9mZmVyQ3JlYXRlZF0sXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuUkVBRF9PRkZFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvZmZlciwgbG9hZGluZzogdHJ1ZSB9XG4gICAgY2FzZSB0eXBlcy5PRkZFUlNfUkVDRUlWRUQ6XG4gICAgICBjb25zb2xlLmxvZygncmVhZCBvZmZlciBzdGF0ZWVlJywgc3RhdGUpXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgb2ZmZXIsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICBjYXNlIHR5cGVzLlVQREFURV9PRkZFUjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvZmZlciwgbG9hZGluZzogdHJ1ZSB9XG4gICAgY2FzZSB0eXBlcy5VUERBVEVEX09GRkVSX1NVQ0NFU0ZVTDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvZmZlciwgbG9hZGluZzogZmFsc2UgfVxuICAgIGNhc2UgdHlwZXMuREVMRVRFX09GRkVSOlxuICAgICAgY29uc3QgbmV3T2ZmZXIgPSBzdGF0ZT8ub2ZmZXI/Lm9mZmVyPy5maWx0ZXIoXG4gICAgICAgIChvZmZlcnIpID0+IG9mZmVyci5faWQgIT09IGFjdGlvbi5vZmZlcklkPy5faWRcbiAgICAgIClcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuZXdPZmZlciB9XG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfT0ZGRVJfU1VDQ0VTU0ZVTDpcbiAgICAgIGNvbnN0IG9mZmVyQXJyYXkgPSBzdGF0ZT8ubmV3T2ZmZXJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBvZmZlcjogeyBvZmZlcjogb2ZmZXJBcnJheSB9IH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvcGFja2FnZXNBY3Rpb24nXG5cbmV4cG9ydCBjb25zdCBwYWNrYWdlc1JlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gIGxldCBwYWNrYWdlcyA9IGFjdGlvblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5SRUFEX1BBQ0tBR0VTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhY2thZ2VzLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuUEFDS0FHRVNfUkVDRUlWRUQ6XG4gICAgICBjb25zb2xlLmxvZygncmVhZCBwYWNrYWdlcyBzdGF0ZWVlJywgc3RhdGUpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYWNrYWdlcyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9XG4gICAgY2FzZSB0eXBlcy5QQUNLQUdFU19SRUNFSVZFRF9GQUlMRUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuQ1JFQVRFX1BBQ0tBR0VTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNyZWF0ZVBhY2thZ2U6IGFjdGlvbixcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLlBBQ0tBR0VfQ1JFQVRFRDpcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZWVlIGFuZCBwYWNrYWdlcyAgJywgc3RhdGUsIHBhY2thZ2VzKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhY2thZ2VzOiB7XG4gICAgICAgICAgLi4uc3RhdGUucGFja2FnZXMsXG4gICAgICAgICAgcGFja2FnZ2U6IFsuLi5zdGF0ZS5wYWNrYWdlcy5wYWNrYWdnZSwgcGFja2FnZXMucGFja2FnZUNyZWF0ZWRdLFxuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLlBBQ0tBR0VfQ1JFQVRJT05fRkFJTEVEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBhY3Rpb24sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuREVMRVRFX1BBQ0tBR0VTOlxuICAgICAgY29uc3QgbmV3UGFja2FnZSA9IHN0YXRlLnBhY2thZ2VzLnBhY2thZ2dlLmZpbHRlcihcbiAgICAgICAgKHBhY2spID0+IHBhY2suX2lkICE9PSBhY3Rpb24ucGFja2FnZUlEPy5faWRcbiAgICAgIClcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBuZXdQYWNrYWdlIH1cbiAgICBjYXNlIHR5cGVzLkRFTEVURV9QQUNLQUdFU19TVUNDRVNTOlxuICAgICAgY29uc3QgcGFja0FycmF5ID0gc3RhdGU/Lm5ld1BhY2thZ2VcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYWNrYWdlczogeyBwYWNrYWdnZTogcGFja0FycmF5IH0sXG4gICAgICB9XG4gICAgY2FzZSB0eXBlcy5ERUxFVEVfUEFDS0FHRVNfRkFJTEVEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yLFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BBQ0tBR0VTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBhY2thZ2VzLFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BBQ0tBR0VfU1VDQ0VTU0ZVTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwYWNrYWdlcyxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgZmxpZ3RoU2VhcmNoIH0gZnJvbSAnLi9mbGlnaHRSZWR1Y2VyJ1xuaW1wb3J0IHsgb2ZmZXJSZWR1Y2VyIH0gZnJvbSAnLi9vZmZlclJlZHVjZXInXG5pbXBvcnQgeyBwYWNrYWdlc1JlZHVjZXIgfSBmcm9tICcuL3BhY2thZ2VzUmVkdWNlcidcbmltcG9ydCB7IGF1dGhSZWR1Y2VyLCB1c2VyTG9naW5SZWR1Y2VyLCB2ZXJpZnlVc2VyIH0gZnJvbSAnLi91c2VyUmVkdWNlcidcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aFJlZHVjZXI6IGF1dGhSZWR1Y2VyLFxuICB1c2VyTG9naW46IHVzZXJMb2dpblJlZHVjZXIsXG4gIHZlcmlmaWNhdGlvbjogdmVyaWZ5VXNlcixcbiAgb2ZmZXJzUmVkdWNlcjogb2ZmZXJSZWR1Y2VyLFxuICBmbGlnaHREYXRhOiBmbGlndGhTZWFyY2gsXG4gIHBhY2thZ2VzUmVkdWNlcjogcGFja2FnZXNSZWR1Y2VyLFxufSlcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2FjdGlvbnMvdXNlckFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgbGV0IHJlc3BvbnNlVG9rZW4gPSBhY3Rpb25cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuR0VUX1RPS0VOOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgIGNhc2UgdHlwZXMuVE9LRU5fUkVDRUlWRUQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzcG9uc2VUb2tlbiwgbG9hZGluZzogZmFsc2UgfVxuICAgIGNhc2UgdHlwZXMuVE9LRU5fUkVDRUlWRURfRkFJTEVEOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiByZXNwb25zZVRva2VuLmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyTG9naW5SZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBhY3Rpb25cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0dJTl9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUgfVxuICAgIGNhc2UgdHlwZXMuVVNFUl9MT0dJTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLnJlc3BvbnNlLnVzZXIsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICBjYXNlIHR5cGVzLlVTRVJfTE9HSU5fRkFJTDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogcmVzcG9uc2U/LmVycm9yLCBsb2FkaW5nOiBmYWxzZSB9XG4gICAgY2FzZSB0eXBlcy5VU0VSX0xPR09VVDpcbiAgICAgIHJldHVybiB7fVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdmVyaWZ5VXNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgbGV0IHJlc3BvbnNlZSA9IGFjdGlvblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5WRVJJRllfRU1BSUw6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVzcG9uc2VlLCBsb2FkaW5nOiB0cnVlIH1cbiAgICBjYXNlIHR5cGVzLlZFUklGWV9FTUFJTF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3BvbnNlZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIGNhc2UgdHlwZXMuVkVSSUZZX0VNQUlMX0ZBSUw6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3I6IHJlc3BvbnNlZT8uZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH1cbiAgICBjYXNlIHR5cGVzLkNPTkZJUk1fT1RQOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3BvbnNlZSwgbG9hZGluZzogdHJ1ZSB9XG4gICAgY2FzZSB0eXBlcy5DT05GSVJNX09UUF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlc3BvbnNlZSwgbG9hZGluZzogZmFsc2UgfVxuICAgIGNhc2UgdHlwZXMuT1RQX0NPTkZJUk1BVElPTl9GQUlMOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IHJlc3BvbnNlZS5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuU0VUX1BBU1NXT1JEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3BvbnNlZSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIH1cbiAgICBjYXNlIHR5cGVzLlNFVF9QQVNTV09SRF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzcG9uc2VlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSB0eXBlcy5TRVRfUEFTU1dPUkRfRkFJTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogcmVzcG9uc2VlLmVycm9yLFxuICAgICAgfVxuICAgIGNhc2UgdHlwZXMuVVBEQVRFX1BBU1NXT1JEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlc3BvbnNlZSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cbiIsImltcG9ydCB7IHB1dCwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7XG4gIGNoZWNrRmxpZ2h0VmFsaWRhdGlvbixcbiAgY3JlYXRlQm9va2luZ1NlcnZpY2UsXG4gIGNyZWF0ZVBuclNlcnZpY2UsXG4gIGdldEJvb2tpbmdTZXJ2aWNlLFxuICBnZXRGbGlnaHRTZXJ2aWNlLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9mbGlnaHRTZXJ2aWNlJ1xuaW1wb3J0IHtcbiAgYm9va2luZ1NhdmVkZCxcbiAgZmxpZ2h0SVNWYWxpZCxcbiAgZmxpZ2h0Tm90VmFsaWQsXG4gIGdldEZsaWdodERhdGEsXG4gIGdldFNhdmVkQm9va2luZ0ZhaWxlZCxcbiAgcG5yQ3JlYXRlZCxcbiAgcG5yQ3JlYXRpb25GYWlsZWQsXG4gIHJlcXVlc3RGbGlnaHRGYWlsZWQsXG4gIHNhdmVCb29raW5nRmFpbGVkLFxuICBzYXZlZEJvb2tpbmdSZWMsXG59IGZyb20gJy4uL2FjdGlvbnMvZmxpZ2h0QWN0aW9ucydcblxuZXhwb3J0IGZ1bmN0aW9uKiBmbGlnaHRTYWdhKHBheWxvYWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZ2V0RmxpZ2h0U2VydmljZSwgcGF5bG9hZClcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2VcbiAgICB5aWVsZCBwdXQoZ2V0RmxpZ2h0RGF0YShkYXRhKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQocmVxdWVzdEZsaWdodEZhaWxlZChlcnJvcikpXG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiogZmxpZ2h0VmFsaWRhdGlvbihwYXlsb2FkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNoZWNrRmxpZ2h0VmFsaWRhdGlvbiwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXQoZmxpZ2h0SVNWYWxpZChyZXNwb25zZSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KGZsaWdodE5vdFZhbGlkKGVycm9yKSlcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiBwbnJDcmVhdGlvbihwYXlsb2FkKSB7XG4gIGNvbnNvbGUubG9nKHBheWxvYWQpXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNyZWF0ZVBuclNlcnZpY2UsIHBheWxvYWQpXG4gICAgeWllbGQgcHV0KHBuckNyZWF0ZWQocmVzcG9uc2UpKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChwbnJDcmVhdGlvbkZhaWxlZChlcnJvci5tZXNzYWdlKSlcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiBib29raW5nQ3JlYXRpb24ocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChjcmVhdGVCb29raW5nU2VydmljZSwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXQoYm9va2luZ1NhdmVkZChyZXNwb25zZSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHNhdmVCb29raW5nRmFpbGVkKGVycm9yLm1lc3NhZ2UpKVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24qIGdldFNhdmVkQm9va2luZyhwYXlsb2FkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGdldEJvb2tpbmdTZXJ2aWNlLCBwYXlsb2FkKVxuICAgIHlpZWxkIHB1dChzYXZlZEJvb2tpbmdSZWMocmVzcG9uc2UpKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChnZXRTYXZlZEJvb2tpbmdGYWlsZWQoZXJyb3IpKVxuICB9XG59XG4iLCIvL2luIHRoaXMgZmlsZSB3ZSBpbXBvcnQgb3VyIHNhZ2EuanNcbmltcG9ydCB7IGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgd2F0Y2hVc2VyQXV0aGVudGljYXRpb24gZnJvbSAnLi93YXRjaGVycydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHN0YXJ0Rm9ybWFuKCkge1xuICB5aWVsZCBmb3JrKHdhdGNoVXNlckF1dGhlbnRpY2F0aW9uKVxufVxuIiwiaW1wb3J0IHsgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IHtcbiAgZGVsZXRlT2ZmZXJTdWNjZXNzLFxuICBvZmZlckNyZWF0ZWRTdWNjZXNzLFxuICBvZmZlcnNSZWMsXG4gIHVwZGF0ZU9mZmVyU3VjY2Vzcyxcbn0gZnJvbSAnLi4vYWN0aW9ucy9vZmZlcnNBY3Rpb25zJ1xuaW1wb3J0IHtcbiAgY3JlYXRlT2ZmZXJTZXJpdmUsXG4gIGRlbGV0ZU9mZmVyU2VyaXZlLFxuICBnZXRvZmZlcnNTZXJ2aWNlLFxuICB1cGRhdGVPZmZlclNlcml2ZSxcbn0gZnJvbSAnLi4vc2VydmljZXMvb2ZmZXJTZXJ2aWNlJ1xuXG5leHBvcnQgZnVuY3Rpb24qIG9mZmVyc1NhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChnZXRvZmZlcnNTZXJ2aWNlLCBwYXlsb2FkKVxuICAgIHlpZWxkIHB1dChvZmZlcnNSZWMocmVzcG9uc2UpKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvclxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24qIGNyZWF0ZU9mZmVyU2FnYShwYXlsb2FkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNyZWF0ZU9mZmVyU2VyaXZlLCBwYXlsb2FkKVxuICAgIHlpZWxkIHB1dChvZmZlckNyZWF0ZWRTdWNjZXNzKHJlc3BvbnNlKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiBkZWxldGVPZmZlclNhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChkZWxldGVPZmZlclNlcml2ZSwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXQoZGVsZXRlT2ZmZXJTdWNjZXNzKHJlc3BvbnNlKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiB1cGRhdGVPZmZlclNhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbCh1cGRhdGVPZmZlclNlcml2ZSwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXQodXBkYXRlT2ZmZXJTdWNjZXNzKHJlc3BvbnNlKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHV0LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IHtcbiAgY3JlYXRlUGFja2FnZVN1Y2Nlc3MsXG4gIGRlbGV0ZVBhY2thZ2VGYWlsZWQsXG4gIGRlbGV0ZVBhY2tnZVN1Y2NlcyxcbiAgcGFja2FnZUNyZWF0aW9uRmFpbGVkLFxuICBwYWNrYWdlUmVjLFxuICBwYWNrYWdlUmVjRmFpbGVkLFxuICB1cGRhdGVQYWNrYWdlRmFpbGVkLFxuICB1cGRhdGVQYWNrYWdlU3VjY2Vzcyxcbn0gZnJvbSAnLi4vYWN0aW9ucy9wYWNrYWdlc0FjdGlvbidcbmltcG9ydCB7XG4gIGNyZWF0ZVBhY2thZ2VzU2VydmljZSxcbiAgZGVsZXRlUGFja2FnZXNTZXJ2aWNlLFxuICBnZXRQYWNrYWdlc1NlcnZpY2UsXG4gIHVwZGF0ZVBhY2thZ2VzU2VydmljZSxcbn0gZnJvbSAnLi4vc2VydmljZXMvcGFja2FnZVNlcnZpY2UnXG5cbmV4cG9ydCBmdW5jdGlvbiogcGFja2FnZVNhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChnZXRQYWNrYWdlc1NlcnZpY2UsIHBheWxvYWQpXG4gICAgeWllbGQgcHV0KHBhY2thZ2VSZWMocmVzcG9uc2UpKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dChwYWNrYWdlUmVjRmFpbGVkKGVycm9yLm1lc3NhZ2UpKVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24qIGNyZWF0ZVBhY2thZ2VTYWdhKHBheWxvYWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoY3JlYXRlUGFja2FnZXNTZXJ2aWNlLCBwYXlsb2FkKVxuICAgIHlpZWxkIHB1dChjcmVhdGVQYWNrYWdlU3VjY2VzcyhyZXNwb25zZSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHBhY2thZ2VDcmVhdGlvbkZhaWxlZChlcnJvci5tZXNzYWdlKSlcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiBkZWxldGVQYWNrYWdlU2FnYShwYXlsb2FkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGRlbGV0ZVBhY2thZ2VzU2VydmljZSwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXQoZGVsZXRlUGFja2dlU3VjY2VzKHJlc3BvbnNlKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoZGVsZXRlUGFja2FnZUZhaWxlZChlcnJvci5tZXNzYWdlKSlcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiB1cGRhdGVQYWNrYWdlU2FnYShwYXlsb2FkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHVwZGF0ZVBhY2thZ2VzU2VydmljZSwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXQodXBkYXRlUGFja2FnZVN1Y2Nlc3MsIHJlc3BvbnNlKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh1cGRhdGVQYWNrYWdlRmFpbGVkKGVycm9yKSlcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuIiwiLy90aGlzIGZpbGUgd2lsbCBjb250YWluIG91ciBhY3Rpb25zLCBhbmQgYXBpIHRoYXQgZ29ubmEgZGlzcGF0Y2hpbmcgYSByZWR1Y2VyXG5pbXBvcnQgeyBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQge1xuICBnZXRUb2tlblNlcnZpY2UsXG4gIGxvZ2luVXNlclNlcnZpY2UsXG4gIHJlZ2lzdGVyVXNlclNlcnZpY2UsXG4gIHNldFBhc3N3b3JkU2VydmljZSxcbiAgdXBkYXRlUGFzc3dvcmRTZXJ2aWNlLFxuICB2ZXJpZnlFbWFpbFNlcnZpY2UsXG4gIHZlcmlmeU90cFNlcnZpY2UsXG59IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uU2VydmljZSdcbmltcG9ydCB7XG4gIGxvZ2luRmFpbGVkLFxuICBsb2dpblN1Y2Nlc3MsXG4gIGxvZ291dCxcbiAgc2V0UGFzc1N1Y2Nlc3MsXG4gIHNldFBhc3N3b3JkRmFpbGVkLFxuICB0b2tlblJlY2VpdmVkLFxuICB0b2tlblJlY0ZhaWxlZCxcbiAgdmVyaWZ5RW1haWxGYWlsZWQsXG4gIHZlcmlmeUVtYWlsU3VjY2VzcyxcbiAgdmVyaWZ5T3RwRmFpbGVkLFxuICB2ZXJpZnlPVFBTdWNjZXNzLFxufSBmcm9tICcuLi9hY3Rpb25zL2F1dGhlbnRpY2F0aW9uJ1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy91c2VyQWN0aW9ucydcblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRUb2tlblNhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRva2VuUmVjID0geWllbGQgY2FsbChnZXRUb2tlblNlcnZpY2UsIHBheWxvYWQpXG4gICAgY29uc3QgZGF0YSA9IHRva2VuUmVjXG4gICAgeWllbGQgcHV0KHRva2VuUmVjZWl2ZWQoZGF0YSkpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHRva2VuUmVjRmFpbGVkKGVycm9yKSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGxvZ2luU2FnYShwYXlsb2FkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGxvZ2luVXNlclNlcnZpY2UsIHBheWxvYWQpXG4gICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlXG4gICAgeWllbGQgcHV0KGxvZ2luU3VjY2VzcyhkYXRhKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiB0eXBlcy5VU0VSX0xPR0lOX0ZBSUwsIGVycm9yIH0pXG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiogdmVyaWZ5RW1haWxTYWdhKHBheWxvYWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHZlcmlmeUVtYWlsU2VydmljZSwgcGF5bG9hZClcbiAgICBjb25zdCBkYXRhID0gcmVzXG4gICAgeWllbGQgcHV0KHZlcmlmeUVtYWlsU3VjY2VzcyhkYXRhKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQodmVyaWZ5RW1haWxGYWlsZWQoZXJyb3IpKVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24qIHZlcmlmeU90cFNhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbCh2ZXJpZnlPdHBTZXJ2aWNlLCBwYXlsb2FkKVxuICAgIHlpZWxkIHB1dCh2ZXJpZnlPVFBTdWNjZXNzKHJlc3BvbnNlKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQodmVyaWZ5T3RwRmFpbGVkKHJlc3BvbnNlLmVycm9yKSlcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiBzZXRQYXNzd29yZFNhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHBhc3MgPSB5aWVsZCBjYWxsKHNldFBhc3N3b3JkU2VydmljZSwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXQoc2V0UGFzc1N1Y2Nlc3MocGFzcykpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHNldFBhc3N3b3JkRmFpbGVkKGVycm9yKSlcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uKiB1cGRhdGVQYXNzd29yZFNhZ2EocGF5bG9hZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHVwZGF0ZVBhc3MgPSB5aWVsZCBjYWxsKHVwZGF0ZVBhc3N3b3JkU2VydmljZSwgcGF5bG9hZClcbiAgICB5aWVsZCBwdXRbeyB0eXBlOiB0eXBlcy5VUERBVEVfUEFTU1dPUkQsIHVwZGF0ZVBhc3MgfV1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGxvZ091dFNhZ2EoKSB7XG4gIHlpZWxkIHB1dChsb2dvdXQoKSlcbn1cbiIsImltcG9ydCB7IHRha2VMYXRlc3QsIHRha2UgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9hY3Rpb25zL3VzZXJBY3Rpb25zJ1xuaW1wb3J0ICogYXMgdHlwZXNzIGZyb20gJy4uL2FjdGlvbnMvZmxpZ2h0QWN0aW9ucydcbmltcG9ydCAqIGFzIHR5cGVlcyBmcm9tICcuLi9hY3Rpb25zL29mZmVyc0FjdGlvbnMnXG5pbXBvcnQgKiBhcyB0eXBwZXMgZnJvbSAnLi4vYWN0aW9ucy9wYWNrYWdlc0FjdGlvbidcbmltcG9ydCB7XG4gIGdldFRva2VuU2FnYSxcbiAgbG9naW5TYWdhLFxuICBsb2dPdXRTYWdhLFxuICBzZXRQYXNzd29yZFNhZ2EsXG4gIHVwZGF0ZVBhc3N3b3JkU2FnYSxcbiAgdmVyaWZ5RW1haWxTYWdhLFxuICB2ZXJpZnlPdHBTYWdhLFxufSBmcm9tICcuLi9zYWdhcy91c2VyU2FnYSdcbmltcG9ydCB7XG4gIGJvb2tpbmdDcmVhdGlvbixcbiAgZmxpZ2h0U2FnYSxcbiAgZmxpZ2h0VmFsaWRhdGlvbixcbiAgZ2V0U2F2ZWRCb29raW5nLFxuICBwbnJDcmVhdGlvbixcbn0gZnJvbSAnLi9mbGlnaHRTYWdhJ1xuaW1wb3J0IHtcbiAgY3JlYXRlT2ZmZXJTYWdhLFxuICBkZWxldGVPZmZlclNhZ2EsXG4gIG9mZmVyc1NhZ2EsXG4gIHVwZGF0ZU9mZmVyU2FnYSxcbn0gZnJvbSAnLi9vZmZlcnNTYWdhJ1xuaW1wb3J0IHtcbiAgY3JlYXRlUGFja2FnZVNhZ2EsXG4gIGRlbGV0ZVBhY2thZ2VTYWdhLFxuICBwYWNrYWdlU2FnYSxcbiAgdXBkYXRlUGFja2FnZVNhZ2EsXG59IGZyb20gJy4vcGFja2FnZXNTYWdhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogd2F0Y2hVc2VyQXV0aGVudGljYXRpb24oKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QodHlwZXMuR0VUX1RPS0VOLCBnZXRUb2tlblNhZ2EpXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwZXMuVVNFUl9MT0dJTl9SRVFVRVNULCBsb2dpblNhZ2EpXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwZXNzLlJFUVVFU1RfRkxJR0hUX0RBVEEsIGZsaWdodFNhZ2EpXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwZXNzLkZMSUdIVF9SRVZBTElEQVRFLCBmbGlnaHRWYWxpZGF0aW9uKVxuICB5aWVsZCB0YWtlTGF0ZXN0KHR5cGVzcy5DUkVBVEVfUE5SLCBwbnJDcmVhdGlvbilcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBlc3MuU0FWRV9CT09LSU5HLCBib29raW5nQ3JlYXRpb24pXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwZXNzLkdFVF9TQVZFX0JPT0tJTkcsIGdldFNhdmVkQm9va2luZylcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBlcy5WRVJJRllfRU1BSUwsIHZlcmlmeUVtYWlsU2FnYSlcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBlcy5DT05GSVJNX09UUCwgdmVyaWZ5T3RwU2FnYSlcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBlcy5TRVRfUEFTU1dPUkQsIHNldFBhc3N3b3JkU2FnYSlcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBlcy5VUERBVEVfUEFTU1dPUkQsIHVwZGF0ZVBhc3N3b3JkU2FnYSlcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBlZXMuUkVBRF9PRkZFUiwgb2ZmZXJzU2FnYSlcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBwZXMuUkVBRF9QQUNLQUdFUywgcGFja2FnZVNhZ2EpXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwcGVzLkNSRUFURV9QQUNLQUdFUywgY3JlYXRlUGFja2FnZVNhZ2EpXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwcGVzLkRFTEVURV9QQUNLQUdFUywgZGVsZXRlUGFja2FnZVNhZ2EpXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwcGVzLlVQREFURV9QQUNLQUdFUywgdXBkYXRlUGFja2FnZVNhZ2EpXG4gIHlpZWxkIHRha2VMYXRlc3QodHlwZWVzLkNSRUFURV9PRkZFUiwgY3JlYXRlT2ZmZXJTYWdhKVxuICB5aWVsZCB0YWtlTGF0ZXN0KHR5cGVlcy5ERUxFVEVfT0ZGRVIsIGRlbGV0ZU9mZmVyU2FnYSlcbiAgeWllbGQgdGFrZUxhdGVzdCh0eXBlZXMuVVBEQVRFX09GRkVSLCB1cGRhdGVPZmZlclNhZ2EpXG4gIHlpZWxkIHRha2UodHlwZXMuVVNFUl9MT0dPVVQsIGxvZ091dFNhZ2EpXG5cbiAgY29uc29sZS5sb2coJ0hlbGxvIGNvZGVyIGZyb20gd2F0Y2hlcnMhIScpXG59XG4iLCJpbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW5TZXJ2aWNlID0gKHJlcXVlc3QpID0+IHtcbiAgY29uc3QgR0VUX1RPS0VOX0FQSSA9ICdodHRwczovL2FwaS1jcnQuY2VydC5oYXZhaWwuc2FicmUuY29tL3YyL2F1dGgvdG9rZW4nXG5cbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtwcm9jZXNzLmVudi5yZXN0X2NyZWRlbnRpYWxzfWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSxcbiAgICBib2R5OiByZXF1ZXN0LnRva2VuLFxuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZldGNoKEdFVF9UT0tFTl9BUEksIHBhcmFtZXRlcnMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZlciByZXNwb25zZSB3aXRoIEVycm9yJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb25cbiAgICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSwge1xuICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgIH0pXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlclNlcnZpY2UgPSAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBMT0dJTl9VU0VSX0FQSSA9ICdodHRwczovL290YS1zdHJ1Y3R1cmVkLmhlcm9rdWFwcC5jb20vYXBpL2F1dGgvbG9naW4nXG5cbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdC51c2VyKSxcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBmZXRjaChMT0dJTl9VU0VSX0FQSSwgcGFyYW1ldGVycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHJlc3BvbnNlIHdpdGggRXJyb3InKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShqc29uKSlcbiAgICAgICAgcmV0dXJuIGpzb25cbiAgICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdG9hc3QuZXJyb3IoZXJyb3IubWVzc2FnZSwge1xuICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgIH0pXG4gICAgcmV0dXJuIGVycm9yXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZlcmlmeUVtYWlsU2VydmljZSA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IFZFUklGWV9VU0VSX0FQSSA9ICdodHRwczovL290YS1zdHJ1Y3R1cmVkLmhlcm9rdWFwcC5jb20vYXBpL2F1dGgvc2lnbnVwJ1xuICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmVtYWlsKSxcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBmZXRjaChWRVJJRllfVVNFUl9BUEksIHBhcmFtZXRlcnMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIGZyb20gU2VydmVyIFJlc3BvbnNlJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb25cbiAgICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdG9hc3QuZXJyb3IoZXJyb3IubXNnLCB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHZlcmlmeU90cFNlcnZpY2UgPSAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBWRVJJRllfT1RQX1VSTCA9ICdodHRwczovL290YS1zdHJ1Y3R1cmVkLmhlcm9rdWFwcC5jb20vYXBpL2F1dGgvb3RwX3ZlcidcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5vdHApLFxuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZldGNoKFZFUklGWV9PVFBfVVJMLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBmcm9tIFNlcnZlciBSZXNwb25zZScpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICB9KVxuICAgIHJldHVybiBlcnJvclxuICB9XG59XG5leHBvcnQgY29uc3Qgc2V0UGFzc3dvcmRTZXJ2aWNlID0gKHJlcXVlc3QpID0+IHtcbiAgY29uc3QgU0VUX1BBU1NXT1JEX1VSTCA9XG4gICAgJ2h0dHBzOi8vb3RhLXN0cnVjdHVyZWQuaGVyb2t1YXBwLmNvbS9hcGkvYXV0aC9zZXRfcGFzcydcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXNzd29yZCksXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZmV0Y2goU0VUX1BBU1NXT1JEX1VSTCwgcGFyYW1ldGVycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZnJvbSBTZXJ2ZXIgUmVzcG9uc2UnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICByZXR1cm4ganNvblxuICAgICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlLCB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBhc3N3b3JkU2VydmljZSA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IFVQREFURV9QQVNTV09SRF9VUkwgPVxuICAgICdodHRwczovL290YS1zdHJ1Y3R1cmVkLmhlcm9rdWFwcC5jb20vYXBpL2F1dGgvdXBfcGFzcydcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5wYXNzd29yZCksXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZmV0Y2goVVBEQVRFX1BBU1NXT1JEX1VSTCwgcGFyYW1ldGVycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZnJvbSBTZXJ2ZXIgUmVzcG9uc2UnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICByZXR1cm4ganNvblxuICAgICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlLCB7XG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgfSlcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuIiwiaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5jbGFzcyBBdXRoZW50aWNhdGlvbk1vZGVsIHtcbiAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgdGhpcy5zZWNyZXQgPSBwYXJhbXMuc2VjcmV0XG4gICAgdGhpcy5hcGlFbmRQb2ludCA9IHBhcmFtcy5hcGlFbmRQb2ludFxuICB9XG5cbiAgZ2V0IGFjY2Vzc1Rva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLmFjY2Vzc190b2tlblxuICB9XG5cbiAgYXN5bmMgcmVhZFJlcXVlc3QoZ2V0RmxpZ2h0cykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmFzaWMgJHt0aGlzLnNlY3JldH1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBxcy5zdHJpbmdpZnkoe1xuICAgICAgICAgIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICAgIHJldHVybiBhd2FpdCBmZXRjaChgJHt0aGlzLmFwaUVuZFBvaW50fS92Mi9hdXRoL3Rva2VuYCwgcGFyYW1ldGVycylcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICByZXR1cm4gZ2V0RmxpZ2h0cyhqc29uLmFjY2Vzc190b2tlbilcbiAgICAgICAgfSlcblxuICAgICAgLy8gdGhpcy5yZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBBdXRoZW50aWNhdGlvbiByZXNwb25zZSBlcnJvciAke2Vycm9yLnN0YXR1c0NvZGV9YClcbiAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZXJyb3IuZXJyb3IpKVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEF1dGhlbnRpY2F0aW9uTW9kZWxcbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmNvbnN0IEF1dGhlbnRpY2F0aW9uTW9kZWwgPSByZXF1aXJlKCcuL2F1dGhlbnRpY2F0aW9uX21vZGVsJylcblxuZXhwb3J0IGNvbnN0IGdldEZsaWdodFNlcnZpY2UgPSBhc3luYyAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBGTElHSFRfU0VBUkNIX0FQSSA9IGBodHRwczovL2FwaS1jcnQuY2VydC5oYXZhaWwuc2FicmUuY29tL3Y0LjIuMC9zaG9wL2ZsaWdodHM/bW9kZT1saXZlYFxuXG4gIGNvbnN0IGF1dGhNb2RlbCA9IG5ldyBBdXRoZW50aWNhdGlvbk1vZGVsKHtcbiAgICBhcGlFbmRQb2ludDogJ2h0dHBzOi8vYXBpLWNydC5jZXJ0LmhhdmFpbC5zYWJyZS5jb20nLFxuICAgIHNlY3JldDogcHJvY2Vzcy5lbnYucmVzdF9jcmVkZW50aWFscyxcbiAgfSlcbiAgY29uc3QgYWJjID0gYXdhaXQgYXV0aE1vZGVsLnJlYWRSZXF1ZXN0KGFzeW5jIChhY2Nlc3NUb2tlbikgPT4ge1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5kYXRhLmRhdGFhKSxcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKEZMSUdIVF9TRUFSQ0hfQVBJLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgcmVzcG9uc2VkIHdpdGggRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9YClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb25cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gICAgICB9KVxuICB9KVxuXG4gIHJldHVybiBhYmNcbn1cbmV4cG9ydCBjb25zdCBjaGVja0ZsaWdodFZhbGlkYXRpb24gPSBhc3luYyAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBDSEVDS19WQUxJREFUSU9OID1cbiAgICAnaHR0cHM6Ly9hcGktY3J0LmNlcnQuaGF2YWlsLnNhYnJlLmNvbS92NC9zaG9wL2ZsaWdodHMvcmV2YWxpZGF0ZSdcblxuICBjb25zdCBhdXRoTW9kZWwgPSBuZXcgQXV0aGVudGljYXRpb25Nb2RlbCh7XG4gICAgYXBpRW5kUG9pbnQ6ICdodHRwczovL2FwaS1jcnQuY2VydC5oYXZhaWwuc2FicmUuY29tJyxcbiAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LnJlc3RfY3JlZGVudGlhbHMsXG4gIH0pXG4gIGNvbnN0IGZsaWdodFZhbCA9IGF3YWl0IGF1dGhNb2RlbC5yZWFkUmVxdWVzdChhc3luYyAoYWNjZXNzVG9rZW4pID0+IHtcbiAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmZsaWdodERhdGEpLFxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goQ0hFQ0tfVkFMSURBVElPTiwgcGFyYW1ldGVycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIHJlc3BvbnNlZCB3aXRoIEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlLCB7XG4gICAgICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxuICAgICAgfSlcbiAgfSlcblxuICByZXR1cm4gZmxpZ2h0VmFsXG59XG5leHBvcnQgY29uc3QgY3JlYXRlUG5yU2VydmljZSA9IGFzeW5jIChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IENSRUFURV9QTlIgPVxuICAgICdodHRwczovL2FwaS1jcnQuY2VydC5oYXZhaWwuc2FicmUuY29tL3YyLjQuMC9wYXNzZW5nZXIvcmVjb3Jkcz9tb2RlPWNyZWF0ZSdcbiAgY29uc3QgYXV0aE1vZGVsID0gbmV3IEF1dGhlbnRpY2F0aW9uTW9kZWwoe1xuICAgIGFwaUVuZFBvaW50OiAnaHR0cHM6Ly9hcGktY3J0LmNlcnQuaGF2YWlsLnNhYnJlLmNvbScsXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5yZXN0X2NyZWRlbnRpYWxzLFxuICB9KVxuICBjb25zdCBwbnIgPSBhd2FpdCBhdXRoTW9kZWwucmVhZFJlcXVlc3QoYXN5bmMgKGFjY2Vzc1Rva2VuKSA9PiB7XG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnBuclJlcXVlc3QpLFxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goQ1JFQVRFX1BOUiwgcGFyYW1ldGVycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIHJlc3BvbnNlZCB3aXRoIEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5tZXNzYWdlLCB7XG4gICAgICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxuICAgICAgfSlcbiAgfSlcblxuICByZXR1cm4gcG5yXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVCb29raW5nU2VydmljZSA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IFNBVkVfQk9PS0lOR19BUEkgPSBgaHR0cHM6Ly9vdGEtc3RydWN0dXJlZC5oZXJva3VhcHAuY29tL2FwaS9ib29raW5nL3NhdmVfYm9va2luZ2BcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5zYXZlQm9va2luZyksXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZmV0Y2goU0FWRV9CT09LSU5HX0FQSSwgcGFyYW1ldGVycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHJlc3BvbnNlIHdpdGggRXJyb3InKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICByZXR1cm4ganNvblxuICAgICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Qm9va2luZ1NlcnZpY2UgPSAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBHRVRfQk9PS0lOR19BUEkgPSBgaHR0cHM6Ly9vdGEtc3RydWN0dXJlZC5oZXJva3VhcHAuY29tL2FwaS9ib29raW5nL2dldF9ib29raW5nYFxuICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmJvb2tpbmdNYWlsKSxcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBmZXRjaChHRVRfQk9PS0lOR19BUEksIHBhcmFtZXRlcnMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZlciByZXNwb25zZSB3aXRoIEVycm9yJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb25cbiAgICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yXG4gIH1cbn1cbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmV4cG9ydCBjb25zdCBnZXRvZmZlcnNTZXJ2aWNlID0gKCkgPT4ge1xuICBjb25zdCBHRVRfT0ZGRVJfQVBJID0gYGh0dHBzOi8vb3RhLXN0cnVjdHVyZWQuaGVyb2t1YXBwLmNvbS9hcGkvb2ZmZXIvcmVhZF9vZmZlcmBcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBmZXRjaChHRVRfT0ZGRVJfQVBJLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uc2Ugd2l0aCBFcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVPZmZlclNlcml2ZSA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IENSRUFURV9PRkZFUl9BUEkgPSBgaHR0cHM6Ly9vdGEtc3RydWN0dXJlZC5oZXJva3VhcHAuY29tL2FwaS9vZmZlci9jcmVhdGVfb2ZmZXJgXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3Qub2ZmZXIpLFxuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZldGNoKENSRUFURV9PRkZFUl9BUEksIHBhcmFtZXRlcnMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZlciByZXNwb25zZSB3aXRoIEVycm9yJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb25cbiAgICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBkZWxldGVPZmZlclNlcml2ZSA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IERFTEVURV9PRkZFUl9BUEkgPSBgaHR0cHM6Ly9vdGEtc3RydWN0dXJlZC5oZXJva3VhcHAuY29tL2FwaS9vZmZlci9kZWxldGVfb2ZmZXJgXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3Qub2ZmZXJJZCksXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZmV0Y2goREVMRVRFX09GRkVSX0FQSSwgcGFyYW1ldGVycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIHJlc3BvbnNlIHdpdGggRXJyb3InKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKGpzb24ubXNnLCB7XG4gICAgICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4ganNvblxuICAgICAgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3JcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVwZGF0ZU9mZmVyU2VyaXZlID0gKHJlcXVlc3QpID0+IHtcbiAgY29uc3QgVVBEQVRFX09GRkVSX0FQSSA9IGBodHRwczovL290YS1zdHJ1Y3R1cmVkLmhlcm9rdWFwcC5jb20vYXBpL29mZmVyL3VwZGF0ZV9vZmZlcmBcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdC5vZmZlclVwZGF0ZUlkKSxcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBmZXRjaChVUERBVEVfT0ZGRVJfQVBJLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uc2Ugd2l0aCBFcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoanNvbi5tc2csIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICB9KVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cbiIsImltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5cbmV4cG9ydCBjb25zdCBnZXRQYWNrYWdlc1NlcnZpY2UgPSAoKSA9PiB7XG4gIGNvbnN0IEdFVF9QQUNLQUdFU19BUEkgPSBgaHR0cHM6Ly9vdGEtc3RydWN0dXJlZC5oZXJva3VhcHAuY29tL2FwaS9wYWNrYWdlL3JlYWRfcGFja2BcbiAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBmZXRjaChHRVRfUEFDS0FHRVNfQVBJLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uc2Ugd2l0aCBFcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICB9KVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhY2thZ2VzU2VydmljZSA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IENSRUFURV9QQUNLQUdFX0FQSSA9IGBodHRwczovL290YS1zdHJ1Y3R1cmVkLmhlcm9rdWFwcC5jb20vYXBpL3BhY2thZ2UvY3JlYXRlX3BhY2tgXG4gIGNvbnN0IHBhcmFtZXRlcnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QuY3JlYXRlUGFja2FnZSksXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZmV0Y2goQ1JFQVRFX1BBQ0tBR0VfQVBJLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uc2Ugd2l0aCBFcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICB9KVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBkZWxldGVQYWNrYWdlc1NlcnZpY2UgPSAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBERUxFVEVfUEFDS0FHRV9BUEkgPSBgaHR0cHM6Ly9vdGEtc3RydWN0dXJlZC5oZXJva3VhcHAuY29tL2FwaS9wYWNrYWdlL2RlbGV0ZV9wYWNrYFxuICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnBhY2thZ2VJRCksXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZmV0Y2goREVMRVRFX1BBQ0tBR0VfQVBJLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uc2Ugd2l0aCBFcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoanNvbi5tc2csIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICB9KVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB1cGRhdGVQYWNrYWdlc1NlcnZpY2UgPSAocmVxdWVzdCkgPT4ge1xuICBjb25zdCBVUERBVEVfUEFDS0FHRV9BUEkgPSBgaHR0cHM6Ly9vdGEtc3RydWN0dXJlZC5oZXJva3VhcHAuY29tL2FwaS9wYWNrYWdlL3VwZGF0ZV9wYWNrYFxuICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnVwZGF0ZVBhY2thZ2VJZCksXG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gZmV0Y2goVVBEQVRFX1BBQ0tBR0VfQVBJLCBwYXJhbWV0ZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgcmVzcG9uc2Ugd2l0aCBFcnJvcicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoanNvbi5tc2csIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBqc29uXG4gICAgICB9KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRvYXN0LmVycm9yKGVycm9yLm1lc3NhZ2UsIHtcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICB9KVxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlXG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJ1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3JlZHV4L3NhZ2FzL2luZGV4J1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VyIGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXInXG5cbmxldCB1c2VyTG9nZ2VkSW5cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHVzZXJMb2dnZWRJbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpXG4gICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpKVxuICAgIDoge31cbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyTG9naW46IHVzZXJMb2dnZWRJbixcbn1cblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIGNvbWJpbmVSZWR1Y2VyLFxuICBpbml0aWFsU3RhdGUsXG4gIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSlcbilcbnNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=