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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/signup/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup/index.js":
/*!*******************************!*\
  !*** ./pages/signup/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-otp-input */ "react-otp-input");
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/authentication */ "./redux/actions/authentication.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\flight380-Mar12-master\\pages\\signup\\index.js";







function index() {
  var _verification$respons19, _verification$respons20, _verification$respons21, _verification$respons22;

  const {
    0: otp,
    1: setOtp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: emaill,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: showEmail,
    1: setShowEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: showOTP,
    1: setShowOTP
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showPass,
    1: setShowPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: passwordShown,
    1: setPasswordShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const verification = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.verification);
  const {
    loading,
    error,
    msg
  } = verification;

  const handleChange = otp => {
    console.log('otp', otp);
    setOtp(otp);
  };

  const onSubmitEmail = e => {
    e.preventDefault();

    if (!emaill) {
      console.log('if condition');
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('Please fill the required field', {
        position: 'bottom-right'
      });
    } else {
      console.log('useremail', emaill);
      const data = {
        user_email: emaill,
        Signup: 'true'
      };
      dispatch(Object(_redux_actions_authentication__WEBPACK_IMPORTED_MODULE_6__["verifyEmail"])(data));
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _verification$respons, _verification$respons2, _verification$respons3, _verification$respons4, _verification$respons7, _verification$respons8, _verification$respons11, _verification$respons12, _verification$respons15, _verification$respons16;

    console.log('verify email error', verification === null || verification === void 0 ? void 0 : (_verification$respons = verification.responsee) === null || _verification$respons === void 0 ? void 0 : (_verification$respons2 = _verification$respons.email) === null || _verification$respons2 === void 0 ? void 0 : _verification$respons2.msg);

    if ((verification === null || verification === void 0 ? void 0 : (_verification$respons3 = verification.responsee) === null || _verification$respons3 === void 0 ? void 0 : (_verification$respons4 = _verification$respons3.email) === null || _verification$respons4 === void 0 ? void 0 : _verification$respons4.msg) === 'User Already exists') {
      var _verification$respons5, _verification$respons6;

      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(verification === null || verification === void 0 ? void 0 : (_verification$respons5 = verification.responsee) === null || _verification$respons5 === void 0 ? void 0 : (_verification$respons6 = _verification$respons5.email) === null || _verification$respons6 === void 0 ? void 0 : _verification$respons6.msg, {
        position: 'bottom-right'
      });
    } else if ((verification === null || verification === void 0 ? void 0 : (_verification$respons7 = verification.responsee) === null || _verification$respons7 === void 0 ? void 0 : (_verification$respons8 = _verification$respons7.email) === null || _verification$respons8 === void 0 ? void 0 : _verification$respons8.msg) === 'Check OTP') {
      var _verification$respons9, _verification$respons10;

      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success(verification === null || verification === void 0 ? void 0 : (_verification$respons9 = verification.responsee) === null || _verification$respons9 === void 0 ? void 0 : (_verification$respons10 = _verification$respons9.email) === null || _verification$respons10 === void 0 ? void 0 : _verification$respons10.msg, {
        position: 'bottom-right'
      });
      setShowEmail(false);
      setShowOTP(true);
    }

    if ((verification === null || verification === void 0 ? void 0 : (_verification$respons11 = verification.responsee) === null || _verification$respons11 === void 0 ? void 0 : (_verification$respons12 = _verification$respons11.otp) === null || _verification$respons12 === void 0 ? void 0 : _verification$respons12.msg) === 'Enter the correct OTP') {
      var _verification$respons13, _verification$respons14;

      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(verification === null || verification === void 0 ? void 0 : (_verification$respons13 = verification.responsee) === null || _verification$respons13 === void 0 ? void 0 : (_verification$respons14 = _verification$respons13.otp) === null || _verification$respons14 === void 0 ? void 0 : _verification$respons14.msg, {
        position: 'bottom-right'
      });
    } else if ((verification === null || verification === void 0 ? void 0 : (_verification$respons15 = verification.responsee) === null || _verification$respons15 === void 0 ? void 0 : (_verification$respons16 = _verification$respons15.otp) === null || _verification$respons16 === void 0 ? void 0 : _verification$respons16.msg) === 'OTP verfied') {
      var _verification$respons17, _verification$respons18;

      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success(verification === null || verification === void 0 ? void 0 : (_verification$respons17 = verification.responsee) === null || _verification$respons17 === void 0 ? void 0 : (_verification$respons18 = _verification$respons17.otp) === null || _verification$respons18 === void 0 ? void 0 : _verification$respons18.msg, {
        position: 'bottom-right'
      });
      setShowOTP(false);
      setShowPass(true);
    }
  }, [verification === null || verification === void 0 ? void 0 : (_verification$respons19 = verification.responsee) === null || _verification$respons19 === void 0 ? void 0 : (_verification$respons20 = _verification$respons19.email) === null || _verification$respons20 === void 0 ? void 0 : _verification$respons20.msg, verification === null || verification === void 0 ? void 0 : (_verification$respons21 = verification.responsee) === null || _verification$respons21 === void 0 ? void 0 : (_verification$respons22 = _verification$respons21.otp) === null || _verification$respons22 === void 0 ? void 0 : _verification$respons22.msg]);

  const confirmOTP = e => {
    e.preventDefault();

    if (!otp) {
      console.log('if condition');
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('Please fill the required field', {
        position: 'bottom-right'
      });
    } else {
      console.log('otp', otp);
      const data = {
        user_email: emaill,
        OTP: otp
      };
      dispatch(Object(_redux_actions_authentication__WEBPACK_IMPORTED_MODULE_6__["verifyOTP"])(data));
    }
  };

  const confirmPass = e => {
    e.preventDefault();

    if (!password) {
      console.log('if condition');
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('Please fill the required field', {
        position: 'bottom-right'
      });
    } else {
      const data = {
        user_email: emaill,
        user_password: password,
        Signup: 'true'
      };
      dispatch(Object(_redux_actions_authentication__WEBPACK_IMPORTED_MODULE_6__["setPass"])(data));
      router.push('/auth');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "breadcrumb-outer text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "breadcrumb-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "Register Page"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            "aria-label": "breadcrumb",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "breadcrumb",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "breadcrumb-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "breadcrumb-item active",
                "aria-current": "page",
                children: "Register Page"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "section-overlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "login",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "login-form d-flex justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                className: "col-md-4",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-xs-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-title",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                      children: "Register"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "Enter your details to be a member."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, this), showEmail ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group col-xs-12",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Enter Email:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      type: "email",
                      className: "form-control",
                      id: "email",
                      value: emaill,
                      onChange: e => setEmail(e.target.value),
                      placeholder: "abc@xyz.com",
                      autoComplete: "email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 143,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-xs-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "comment-btn d-flex justify-content-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: onSubmitEmail,
                        type: "click",
                        className: "btn-blue btn-red",
                        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CircularProgress"], {
                          size: 24
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 163,
                          columnNumber: 31
                        }, this) : 'Sign Up'
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 21
                }, this) : null, showOTP ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group col-xs-12",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Enter OTP:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_otp_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
                      value: otp,
                      onChange: handleChange,
                      numInputs: 4,
                      separator: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: "-"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 38
                      }, this),
                      inputStyle: {
                        width: '100%'
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 177,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-xs-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "comment-btn d-flex justify-content-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: confirmOTP,
                        type: "click",
                        className: "btn-blue btn-red",
                        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CircularProgress"], {
                          size: 24
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 31
                        }, this) : 'Confirm OTP'
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 187,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 174,
                  columnNumber: 21
                }, this) : null, showPass ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "form-group col-xs-6",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                      children: "Enter Password :"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                      name: "password",
                      label: "Enter Password",
                      type: passwordShown ? 'text' : 'password',
                      value: password,
                      onChange: e => setPassword(e.target.value),
                      autoComplete: "current-Password",
                      className: "form-control",
                      id: "password",
                      placeholder: "Enter Password"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 25
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                      className: "pass-wrapperr fa fa-eye",
                      onClick: togglePasswordVisiblity
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 23
                  }, this), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-xs-12",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "comment-btn d-flex justify-content-center",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                        onClick: confirmPass,
                        type: "click",
                        className: "btn-blue btn-red",
                        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CircularProgress"], {
                          size: 24
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 230,
                          columnNumber: 31
                        }, this) : 'Register'
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 224,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 21
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-otp-input":
/*!**********************************!*\
  !*** external "react-otp-input" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-otp-input");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbnVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvYXV0aGVudGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vdHAtaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaW5kZXgiLCJvdHAiLCJzZXRPdHAiLCJ1c2VTdGF0ZSIsImVtYWlsbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNob3dFbWFpbCIsInNldFNob3dFbWFpbCIsInNob3dPVFAiLCJzZXRTaG93T1RQIiwic2hvd1Bhc3MiLCJzZXRTaG93UGFzcyIsInBhc3N3b3JkU2hvd24iLCJzZXRQYXNzd29yZFNob3duIiwidG9nZ2xlUGFzc3dvcmRWaXNpYmxpdHkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidmVyaWZpY2F0aW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsIm1zZyIsImhhbmRsZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9hc3QiLCJwb3NpdGlvbiIsImRhdGEiLCJ1c2VyX2VtYWlsIiwiU2lnbnVwIiwidmVyaWZ5RW1haWwiLCJ1c2VFZmZlY3QiLCJyZXNwb25zZWUiLCJlbWFpbCIsInN1Y2Nlc3MiLCJjb25maXJtT1RQIiwiT1RQIiwidmVyaWZ5T1RQIiwiY29uZmlybVBhc3MiLCJ1c2VyX3Bhc3N3b3JkIiwic2V0UGFzcyIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwiZ2V0VG9rZXJBY3Rpb24iLCJ0b2tlbiIsInR5cGUiLCJ0eXBlcyIsInRva2VuUmVjZWl2ZWQiLCJ0b2tlblJlYyIsInRva2VuUmVjRmFpbGVkIiwibG9naW5Vc2VyQWN0aW9uIiwidXNlciIsImxvZ2luU3VjY2VzcyIsImxvZ2luRmFpbGVkIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlVTRVJfTE9HT1VUIiwidmVyaWZ5RW1haWxTdWNjZXNzIiwidmVyaWZ5RW1haWxGYWlsZWQiLCJ2ZXJpZnlPVFBTdWNjZXNzIiwidmVyaWZ5T3RwRmFpbGVkIiwic2V0UGFzc1N1Y2Nlc3MiLCJzZXRQYXNzd29yZEZhaWxlZCIsInVwZGF0ZVBhc3N3b3JkIiwiR0VUX1RPS0VOIiwiVE9LRU5fUkVDRUlWRUQiLCJUT0tFTl9SRUNFSVZFRF9GQUlMRUQiLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0ZBSUwiLCJVU0VSX1JFR0lTVEVSX1JFUVVFU1QiLCJVU0VSX1JFR0lTVEVSX1NVQ0NFU1MiLCJVU0VSX1JFR0lTVEVSX0ZBSUwiLCJWRVJJRllfRU1BSUwiLCJWRVJJRllfRU1BSUxfU1VDQ0VTUyIsIlZFUklGWV9FTUFJTF9GQUlMIiwiQ09ORklSTV9PVFAiLCJDT05GSVJNX09UUF9TVUNDRVNTIiwiT1RQX0NPTkZJUk1BVElPTl9GQUlMIiwiU0VUX1BBU1NXT1JEIiwiU0VUX1BBU1NXT1JEX1NVQ0NFU1MiLCJTRVRfUEFTU1dPUkRfRkFJTCIsIlVQREFURV9QQVNTV09SRCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsc0RBQVEsQ0FBQyxFQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXFCRixzREFBUSxDQUFDLEVBQUQsQ0FBbkM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDSyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qk4sc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNPLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCUixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJWLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDVyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DWixzREFBUSxDQUFDLEtBQUQsQ0FBbEQ7O0FBRUEsUUFBTWEsdUJBQXVCLEdBQUcsTUFBTTtBQUNwQ0Qsb0JBQWdCLENBQUNELGFBQWEsR0FBRyxLQUFILEdBQVcsSUFBekIsQ0FBaEI7QUFDRCxHQUZEOztBQUdBLFFBQU1HLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0YsWUFBbEIsQ0FBaEM7QUFDQSxRQUFNO0FBQUVHLFdBQUY7QUFBV0MsU0FBWDtBQUFrQkM7QUFBbEIsTUFBMEJMLFlBQWhDOztBQUNBLFFBQU1NLFlBQVksR0FBSTFCLEdBQUQsSUFBUztBQUM1QjJCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUI1QixHQUFuQjtBQUNBQyxVQUFNLENBQUNELEdBQUQsQ0FBTjtBQUNELEdBSEQ7O0FBSUEsUUFBTTZCLGFBQWEsR0FBSUMsQ0FBRCxJQUFPO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBSSxDQUFDNUIsTUFBTCxFQUFhO0FBQ1h3QixhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FJLDBEQUFLLENBQUNSLEtBQU4sQ0FBWSxnQ0FBWixFQUE4QztBQUM1Q1MsZ0JBQVEsRUFBRTtBQURrQyxPQUE5QztBQUdELEtBTEQsTUFLTztBQUNMTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCekIsTUFBekI7QUFDQSxZQUFNK0IsSUFBSSxHQUFHO0FBQ1hDLGtCQUFVLEVBQUVoQyxNQUREO0FBRVhpQyxjQUFNLEVBQUU7QUFGRyxPQUFiO0FBSUFwQixjQUFRLENBQUNxQixpRkFBVyxDQUFDSCxJQUFELENBQVosQ0FBUjtBQUNEO0FBQ0YsR0FmRDs7QUFnQkFJLHlEQUFTLENBQUMsTUFBTTtBQUFBOztBQUNkWCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ1IsWUFBbEMsYUFBa0NBLFlBQWxDLGdEQUFrQ0EsWUFBWSxDQUFFbUIsU0FBaEQsb0ZBQWtDLHNCQUF5QkMsS0FBM0QsMkRBQWtDLHVCQUFnQ2YsR0FBbEU7O0FBQ0EsUUFBSSxDQUFBTCxZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLHNDQUFBQSxZQUFZLENBQUVtQixTQUFkLDRHQUF5QkMsS0FBekIsa0ZBQWdDZixHQUFoQyxNQUF3QyxxQkFBNUMsRUFBbUU7QUFBQTs7QUFDakVPLDBEQUFLLENBQUNSLEtBQU4sQ0FBWUosWUFBWixhQUFZQSxZQUFaLGlEQUFZQSxZQUFZLENBQUVtQixTQUExQixxRkFBWSx1QkFBeUJDLEtBQXJDLDJEQUFZLHVCQUFnQ2YsR0FBNUMsRUFBaUQ7QUFDL0NRLGdCQUFRLEVBQUU7QUFEcUMsT0FBakQ7QUFHRCxLQUpELE1BSU8sSUFBSSxDQUFBYixZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLHNDQUFBQSxZQUFZLENBQUVtQixTQUFkLDRHQUF5QkMsS0FBekIsa0ZBQWdDZixHQUFoQyxNQUF3QyxXQUE1QyxFQUF5RDtBQUFBOztBQUM5RE8sMERBQUssQ0FBQ1MsT0FBTixDQUFjckIsWUFBZCxhQUFjQSxZQUFkLGlEQUFjQSxZQUFZLENBQUVtQixTQUE1QixzRkFBYyx1QkFBeUJDLEtBQXZDLDREQUFjLHdCQUFnQ2YsR0FBOUMsRUFBbUQ7QUFDakRRLGdCQUFRLEVBQUU7QUFEdUMsT0FBbkQ7QUFHQXpCLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FFLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFBVSxZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLHVDQUFBQSxZQUFZLENBQUVtQixTQUFkLCtHQUF5QnZDLEdBQXpCLG9GQUE4QnlCLEdBQTlCLE1BQXNDLHVCQUExQyxFQUFtRTtBQUFBOztBQUNqRU8sMERBQUssQ0FBQ1IsS0FBTixDQUFZSixZQUFaLGFBQVlBLFlBQVosa0RBQVlBLFlBQVksQ0FBRW1CLFNBQTFCLHVGQUFZLHdCQUF5QnZDLEdBQXJDLDREQUFZLHdCQUE4QnlCLEdBQTFDLEVBQStDO0FBQzdDUSxnQkFBUSxFQUFFO0FBRG1DLE9BQS9DO0FBR0QsS0FKRCxNQUlPLElBQUksQ0FBQWIsWUFBWSxTQUFaLElBQUFBLFlBQVksV0FBWix1Q0FBQUEsWUFBWSxDQUFFbUIsU0FBZCwrR0FBeUJ2QyxHQUF6QixvRkFBOEJ5QixHQUE5QixNQUFzQyxhQUExQyxFQUF5RDtBQUFBOztBQUM5RE8sMERBQUssQ0FBQ1MsT0FBTixDQUFjckIsWUFBZCxhQUFjQSxZQUFkLGtEQUFjQSxZQUFZLENBQUVtQixTQUE1Qix1RkFBYyx3QkFBeUJ2QyxHQUF2Qyw0REFBYyx3QkFBOEJ5QixHQUE1QyxFQUFpRDtBQUMvQ1EsZ0JBQVEsRUFBRTtBQURxQyxPQUFqRDtBQUdBdkIsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQUUsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDtBQUNGLEdBeEJRLEVBd0JOLENBQUNRLFlBQUQsYUFBQ0EsWUFBRCxrREFBQ0EsWUFBWSxDQUFFbUIsU0FBZix1RkFBQyx3QkFBeUJDLEtBQTFCLDREQUFDLHdCQUFnQ2YsR0FBakMsRUFBc0NMLFlBQXRDLGFBQXNDQSxZQUF0QyxrREFBc0NBLFlBQVksQ0FBRW1CLFNBQXBELHVGQUFzQyx3QkFBeUJ2QyxHQUEvRCw0REFBc0Msd0JBQThCeUIsR0FBcEUsQ0F4Qk0sQ0FBVDs7QUEwQkEsUUFBTWlCLFVBQVUsR0FBSVosQ0FBRCxJQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7O0FBQ0EsUUFBSSxDQUFDL0IsR0FBTCxFQUFVO0FBQ1IyQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FJLDBEQUFLLENBQUNSLEtBQU4sQ0FBWSxnQ0FBWixFQUE4QztBQUM1Q1MsZ0JBQVEsRUFBRTtBQURrQyxPQUE5QztBQUdELEtBTEQsTUFLTztBQUNMTixhQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CNUIsR0FBbkI7QUFDQSxZQUFNa0MsSUFBSSxHQUFHO0FBQ1hDLGtCQUFVLEVBQUVoQyxNQUREO0FBRVh3QyxXQUFHLEVBQUUzQztBQUZNLE9BQWI7QUFJQWdCLGNBQVEsQ0FBQzRCLCtFQUFTLENBQUNWLElBQUQsQ0FBVixDQUFSO0FBQ0Q7QUFDRixHQWZEOztBQWdCQSxRQUFNVyxXQUFXLEdBQUlmLENBQUQsSUFBTztBQUN6QkEsS0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUksQ0FBQzFCLFFBQUwsRUFBZTtBQUNic0IsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBSSwwREFBSyxDQUFDUixLQUFOLENBQVksZ0NBQVosRUFBOEM7QUFDNUNTLGdCQUFRLEVBQUU7QUFEa0MsT0FBOUM7QUFHRCxLQUxELE1BS087QUFDTCxZQUFNQyxJQUFJLEdBQUc7QUFDWEMsa0JBQVUsRUFBRWhDLE1BREQ7QUFFWDJDLHFCQUFhLEVBQUV6QyxRQUZKO0FBR1grQixjQUFNLEVBQUU7QUFIRyxPQUFiO0FBS0FwQixjQUFRLENBQUMrQiw2RUFBTyxDQUFDYixJQUFELENBQVIsQ0FBUjtBQUNBaEIsWUFBTSxDQUFDOEIsSUFBUCxDQUFZLE9BQVo7QUFDRDtBQUNGLEdBaEJEOztBQWtCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQVMsZUFBUyxFQUFDLDhCQUFuQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFLLDBCQUFXLFlBQWhCO0FBQUEsbUNBQ0U7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsaUJBQWQ7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFJRTtBQUFJLHlCQUFTLEVBQUMsd0JBQWQ7QUFBdUMsZ0NBQWEsTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFnQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW1CRTtBQUFTLGVBQVMsRUFBQyxPQUFuQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQywwQ0FBZjtBQUFBLHFDQUNFO0FBQU0seUJBQVMsRUFBQyxVQUFoQjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFPR3pDLFNBQVMsZ0JBQ1I7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsc0JBQWY7QUFBQSw0Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQ0UsMEJBQUksRUFBQyxPQURQO0FBRUUsK0JBQVMsRUFBQyxjQUZaO0FBR0Usd0JBQUUsRUFBQyxPQUhMO0FBSUUsMkJBQUssRUFBRUosTUFKVDtBQUtFLDhCQUFRLEVBQUcyQixDQUFELElBQU8xQixRQUFRLENBQUMwQixDQUFDLENBQUNtQixNQUFGLENBQVNDLEtBQVYsQ0FMM0I7QUFNRSxpQ0FBVyxFQUFDLGFBTmQ7QUFPRSxrQ0FBWSxFQUFDO0FBUGY7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsZUFhRTtBQUFLLDZCQUFTLEVBQUMsV0FBZjtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQywyQ0FBZjtBQUFBLDZDQUNFO0FBQ0UsK0JBQU8sRUFBRXJCLGFBRFg7QUFFRSw0QkFBSSxFQUFDLE9BRlA7QUFHRSxpQ0FBUyxFQUFDLGtCQUhaO0FBQUEsa0NBS0dOLE9BQU8sZ0JBQ04scUVBQUMsa0VBQUQ7QUFBa0IsOEJBQUksRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURNLEdBR047QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURRLEdBOEJOLElBckNOLEVBdUNHZCxPQUFPLGdCQUNOO0FBQUEsMENBQ0U7QUFBSyw2QkFBUyxFQUFDLHNCQUFmO0FBQUEsNENBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsZUFFRSxxRUFBQyxzREFBRDtBQUNFLDJCQUFLLEVBQUVULEdBRFQ7QUFFRSw4QkFBUSxFQUFFMEIsWUFGWjtBQUdFLCtCQUFTLEVBQUUsQ0FIYjtBQUlFLCtCQUFTLGVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSmI7QUFLRSxnQ0FBVSxFQUFFO0FBQUV5Qiw2QkFBSyxFQUFFO0FBQVQ7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQVdFO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsMkNBQ0U7QUFBSywrQkFBUyxFQUFDLDJDQUFmO0FBQUEsNkNBQ0U7QUFDRSwrQkFBTyxFQUFFVCxVQURYO0FBRUUsNEJBQUksRUFBQyxPQUZQO0FBR0UsaUNBQVMsRUFBQyxrQkFIWjtBQUFBLGtDQUtHbkIsT0FBTyxnQkFDTixxRUFBQyxrRUFBRDtBQUFrQiw4QkFBSSxFQUFFO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRE0sR0FHTjtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRE0sR0E0QkosSUFuRU4sRUFvRUdaLFFBQVEsZ0JBQ1A7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMscUJBQWY7QUFBQSw0Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixlQUVFO0FBQ0UsMEJBQUksRUFBQyxVQURQO0FBRUUsMkJBQUssRUFBQyxnQkFGUjtBQUdFLDBCQUFJLEVBQUVFLGFBQWEsR0FBRyxNQUFILEdBQVksVUFIakM7QUFJRSwyQkFBSyxFQUFFUixRQUpUO0FBS0UsOEJBQVEsRUFBR3lCLENBQUQsSUFBT3hCLFdBQVcsQ0FBQ3dCLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0MsS0FBVixDQUw5QjtBQU1FLGtDQUFZLEVBQUMsa0JBTmY7QUFPRSwrQkFBUyxFQUFDLGNBUFo7QUFRRSx3QkFBRSxFQUFDLFVBUkw7QUFTRSxpQ0FBVyxFQUFDO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixlQWFFO0FBQ0UsK0JBQVMsRUFBQyx5QkFEWjtBQUVFLDZCQUFPLEVBQUVuQztBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLEVBa0JTLEdBbEJULGVBbUJFO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsMkNBQ0U7QUFBSywrQkFBUyxFQUFDLDJDQUFmO0FBQUEsNkNBQ0U7QUFDRSwrQkFBTyxFQUFFOEIsV0FEWDtBQUVFLDRCQUFJLEVBQUMsT0FGUDtBQUdFLGlDQUFTLEVBQUMsa0JBSFo7QUFBQSxrQ0FLR3RCLE9BQU8sZ0JBQ04scUVBQUMsa0VBQUQ7QUFBa0IsOEJBQUksRUFBRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURNLEdBR047QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFETyxHQW9DTCxJQXhHTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBJRCxDOzs7Ozs7Ozs7Ozs7QUN0UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU02QixjQUFjLEdBQUlDLEtBQUQsSUFBVztBQUN2QyxTQUFPO0FBQ0xDLFFBQUksRUFBRUMsc0RBREQ7QUFFTEYsU0FGSztBQUdMOUIsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNaUMsYUFBYSxHQUFJQyxRQUFELElBQWM7QUFDekMsU0FBTztBQUNMSCxRQUFJLEVBQUVDLDJEQUREO0FBRUxFO0FBRkssR0FBUDtBQUlELENBTE07QUFNQSxNQUFNQyxjQUFjLEdBQUlsQyxLQUFELElBQVc7QUFDdkMsU0FBTztBQUNMOEIsUUFBSSxFQUFFQyxrRUFERDtBQUVML0I7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1tQyxlQUFlLEdBQUlDLElBQUQsSUFBVTtBQUN2QyxTQUFPO0FBQ0xOLFFBQUksRUFBRUMsK0RBREQ7QUFFTEssUUFGSztBQUdMckMsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNc0MsWUFBWSxHQUFJRCxJQUFELElBQVU7QUFDcEMsU0FBTztBQUNMTixRQUFJLEVBQUVDLCtEQUREO0FBRUxLLFFBRks7QUFHTHJDLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTXVDLFdBQVcsR0FBSXRDLEtBQUQsSUFBVztBQUNwQyxTQUFPO0FBQ0w4QixRQUFJLEVBQUVDLDREQUREO0FBRUwvQixTQUZLO0FBR0xELFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBUUEsTUFBTXdDLE1BQU0sR0FBRyxNQUFNO0FBQzFCQyxjQUFZLENBQUNDLFVBQWIsQ0FBd0IsVUFBeEI7QUFDQSxTQUFPO0FBQ0xYLFFBQUksRUFBRUMsd0RBQWlCVztBQURsQixHQUFQO0FBR0QsQ0FMTTtBQU1BLE1BQU03QixXQUFXLEdBQUlHLEtBQUQsSUFBVztBQUNwQyxTQUFPO0FBQ0xjLFFBQUksRUFBRUMseURBREQ7QUFFTGYsU0FGSztBQUdMakIsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNNEMsa0JBQWtCLEdBQUkzQixLQUFELElBQVc7QUFDM0MsU0FBTztBQUNMYyxRQUFJLEVBQUVDLGlFQUREO0FBRUxmLFNBRks7QUFHTGpCLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTTZDLGlCQUFpQixHQUFJNUMsS0FBRCxJQUFXO0FBQzFDLFNBQU87QUFDTDhCLFFBQUksRUFBRUMsOERBREQ7QUFFTC9CLFNBRks7QUFHTEQsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNcUIsU0FBUyxHQUFJNUMsR0FBRCxJQUFTO0FBQ2hDLFNBQU87QUFDTHNELFFBQUksRUFBRUMsd0RBREQ7QUFFTHZELE9BRks7QUFHTHVCLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTThDLGdCQUFnQixHQUFJckUsR0FBRCxJQUFTO0FBQ3ZDLFNBQU87QUFDTHNELFFBQUksRUFBRUMsZ0VBREQ7QUFFTHZELE9BRks7QUFHTHVCLFdBQU8sRUFBRTtBQUhKLEdBQVA7QUFLRCxDQU5NO0FBT0EsTUFBTStDLGVBQWUsR0FBSTlDLEtBQUQsSUFBVztBQUN4QyxTQUFPO0FBQ0w4QixRQUFJLEVBQUVDLGtFQUREO0FBRUwvQjtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBTUEsTUFBTXVCLE9BQU8sR0FBSTFDLFFBQUQsSUFBYztBQUNuQyxTQUFPO0FBQ0xpRCxRQUFJLEVBQUVDLHlEQUREO0FBRUxsRCxZQUZLO0FBR0xrQixXQUFPLEVBQUU7QUFISixHQUFQO0FBS0QsQ0FOTTtBQU9BLE1BQU1nRCxjQUFjLEdBQUlsRSxRQUFELElBQWM7QUFDMUMsU0FBTztBQUNMaUQsUUFBSSxFQUFFQyxpRUFERDtBQUVMbEQsWUFGSztBQUdMa0IsV0FBTyxFQUFFO0FBSEosR0FBUDtBQUtELENBTk07QUFPQSxNQUFNaUQsaUJBQWlCLEdBQUloRCxLQUFELElBQVc7QUFDMUMsU0FBTztBQUNMOEIsUUFBSSxFQUFFQyw4REFERDtBQUVML0I7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU1BLE1BQU1pRCxjQUFjLEdBQUlwRSxRQUFELElBQWM7QUFDMUMsU0FBTztBQUNMaUQsUUFBSSxFQUFFQyw0REFERDtBQUVMbEQ7QUFGSyxHQUFQO0FBSUQsQ0FMTSxDOzs7Ozs7Ozs7Ozs7QUMvR1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTXFFLFNBQVMsR0FBRyxXQUFsQjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTWIsV0FBVyxHQUFHLGFBQXBCO0FBRUEsTUFBTWMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QixDOzs7Ozs7Ozs7OztBQ3RCUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NpZ251cC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgT3RwSW5wdXQgZnJvbSAncmVhY3Qtb3RwLWlucHV0J1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICBzZXRQYXNzLFxuICB2ZXJpZnlFbWFpbCxcbiAgdmVyaWZ5T1RQLFxufSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2F1dGhlbnRpY2F0aW9uJ1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcywgTGluayB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3QgW290cCwgc2V0T3RwXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZW1haWxsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Nob3dFbWFpbCwgc2V0U2hvd0VtYWlsXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtzaG93T1RQLCBzZXRTaG93T1RQXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc2hvd1Bhc3MsIHNldFNob3dQYXNzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcGFzc3dvcmRTaG93biwgc2V0UGFzc3dvcmRTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2libGl0eSA9ICgpID0+IHtcbiAgICBzZXRQYXNzd29yZFNob3duKHBhc3N3b3JkU2hvd24gPyBmYWxzZSA6IHRydWUpXG4gIH1cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudmVyaWZpY2F0aW9uKVxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBtc2cgfSA9IHZlcmlmaWNhdGlvblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob3RwKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ290cCcsIG90cClcbiAgICBzZXRPdHAob3RwKVxuICB9XG4gIGNvbnN0IG9uU3VibWl0RW1haWwgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghZW1haWxsKSB7XG4gICAgICBjb25zb2xlLmxvZygnaWYgY29uZGl0aW9uJylcbiAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UgZmlsbCB0aGUgcmVxdWlyZWQgZmllbGQnLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyZW1haWwnLCBlbWFpbGwpXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1c2VyX2VtYWlsOiBlbWFpbGwsXG4gICAgICAgIFNpZ251cDogJ3RydWUnLFxuICAgICAgfVxuICAgICAgZGlzcGF0Y2godmVyaWZ5RW1haWwoZGF0YSkpXG4gICAgfVxuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3ZlcmlmeSBlbWFpbCBlcnJvcicsIHZlcmlmaWNhdGlvbj8ucmVzcG9uc2VlPy5lbWFpbD8ubXNnKVxuICAgIGlmICh2ZXJpZmljYXRpb24/LnJlc3BvbnNlZT8uZW1haWw/Lm1zZyA9PT0gJ1VzZXIgQWxyZWFkeSBleGlzdHMnKSB7XG4gICAgICB0b2FzdC5lcnJvcih2ZXJpZmljYXRpb24/LnJlc3BvbnNlZT8uZW1haWw/Lm1zZywge1xuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodmVyaWZpY2F0aW9uPy5yZXNwb25zZWU/LmVtYWlsPy5tc2cgPT09ICdDaGVjayBPVFAnKSB7XG4gICAgICB0b2FzdC5zdWNjZXNzKHZlcmlmaWNhdGlvbj8ucmVzcG9uc2VlPy5lbWFpbD8ubXNnLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgIH0pXG4gICAgICBzZXRTaG93RW1haWwoZmFsc2UpXG4gICAgICBzZXRTaG93T1RQKHRydWUpXG4gICAgfVxuICAgIGlmICh2ZXJpZmljYXRpb24/LnJlc3BvbnNlZT8ub3RwPy5tc2cgPT09ICdFbnRlciB0aGUgY29ycmVjdCBPVFAnKSB7XG4gICAgICB0b2FzdC5lcnJvcih2ZXJpZmljYXRpb24/LnJlc3BvbnNlZT8ub3RwPy5tc2csIHtcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHZlcmlmaWNhdGlvbj8ucmVzcG9uc2VlPy5vdHA/Lm1zZyA9PT0gJ09UUCB2ZXJmaWVkJykge1xuICAgICAgdG9hc3Quc3VjY2Vzcyh2ZXJpZmljYXRpb24/LnJlc3BvbnNlZT8ub3RwPy5tc2csIHtcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20tcmlnaHQnLFxuICAgICAgfSlcbiAgICAgIHNldFNob3dPVFAoZmFsc2UpXG4gICAgICBzZXRTaG93UGFzcyh0cnVlKVxuICAgIH1cbiAgfSwgW3ZlcmlmaWNhdGlvbj8ucmVzcG9uc2VlPy5lbWFpbD8ubXNnLCB2ZXJpZmljYXRpb24/LnJlc3BvbnNlZT8ub3RwPy5tc2ddKVxuXG4gIGNvbnN0IGNvbmZpcm1PVFAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICghb3RwKSB7XG4gICAgICBjb25zb2xlLmxvZygnaWYgY29uZGl0aW9uJylcbiAgICAgIHRvYXN0LmVycm9yKCdQbGVhc2UgZmlsbCB0aGUgcmVxdWlyZWQgZmllbGQnLCB7XG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvdHAnLCBvdHApXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1c2VyX2VtYWlsOiBlbWFpbGwsXG4gICAgICAgIE9UUDogb3RwLFxuICAgICAgfVxuICAgICAgZGlzcGF0Y2godmVyaWZ5T1RQKGRhdGEpKVxuICAgIH1cbiAgfVxuICBjb25zdCBjb25maXJtUGFzcyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgY29uc29sZS5sb2coJ2lmIGNvbmRpdGlvbicpXG4gICAgICB0b2FzdC5lcnJvcignUGxlYXNlIGZpbGwgdGhlIHJlcXVpcmVkIGZpZWxkJywge1xuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbS1yaWdodCcsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1c2VyX2VtYWlsOiBlbWFpbGwsXG4gICAgICAgIHVzZXJfcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBTaWdudXA6ICd0cnVlJyxcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoKHNldFBhc3MoZGF0YSkpXG4gICAgICByb3V0ZXIucHVzaCgnL2F1dGgnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYnJlYWRjcnVtYi1vdXRlciB0ZXh0LWNlbnRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdicmVhZGNydW1iLWNvbnRlbnQnPlxuICAgICAgICAgICAgPGgyPlJlZ2lzdGVyIFBhZ2U8L2gyPlxuICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPSdicmVhZGNydW1iJz5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nYnJlYWRjcnVtYic+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYnJlYWRjcnVtYi1pdGVtJz5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy8nPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdicmVhZGNydW1iLWl0ZW0gYWN0aXZlJyBhcmlhLWN1cnJlbnQ9J3BhZ2UnPlxuICAgICAgICAgICAgICAgICAgUmVnaXN0ZXIgUGFnZVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLW92ZXJsYXknPjwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdsb2dpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0xMic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbi1mb3JtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2NvbC1tZC00Jz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS10aXRsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgPGgyPlJlZ2lzdGVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5FbnRlciB5b3VyIGRldGFpbHMgdG8gYmUgYSBtZW1iZXIuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAge3Nob3dFbWFpbCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCBjb2wteHMtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVudGVyIEVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nYWJjQHh5ei5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnQtYnRuIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0RW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4tYmx1ZSBidG4tcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1NpZ24gVXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAge3Nob3dPVFAgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAgY29sLXhzLTEyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbnRlciBPVFA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdHBJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3RwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBudW1JbnB1dHM9ezR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcj17PHNwYW4+LTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTEyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LWJ0biBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb25maXJtT1RQfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2NsaWNrJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuLWJsdWUgYnRuLXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17MjR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb25maXJtIE9UUCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAge3Nob3dQYXNzID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWdyb3VwIGNvbC14cy02Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbnRlciBQYXNzd29yZCA6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VudGVyIFBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtwYXNzd29yZFNob3duID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdjdXJyZW50LVBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwYXNzLXdyYXBwZXJyIGZhIGZhLWV5ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGFzc3dvcmRWaXNpYmxpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudC1idG4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29uZmlybVBhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4tYmx1ZSBidG4tcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXsyNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1JlZ2lzdGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi91c2VyQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IGdldFRva2VyQWN0aW9uID0gKHRva2VuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuR0VUX1RPS0VOLFxuICAgIHRva2VuLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB0b2tlblJlY2VpdmVkID0gKHRva2VuUmVjKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVE9LRU5fUkVDRUlWRUQsXG4gICAgdG9rZW5SZWMsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB0b2tlblJlY0ZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlRPS0VOX1JFQ0VJVkVEX0ZBSUxFRCxcbiAgICBlcnJvcixcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyQWN0aW9uID0gKHVzZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5VU0VSX0xPR0lOX1JFUVVFU1QsXG4gICAgdXNlcixcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzID0gKHVzZXIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5VU0VSX0xPR0lOX1NVQ0NFU1MsXG4gICAgdXNlcixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbGVkID0gKGVycm9yKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVVNFUl9MT0dJTl9GQUlMLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySW5mbycpXG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVVNFUl9MT0dPVVQsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB2ZXJpZnlFbWFpbCA9IChlbWFpbCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlZFUklGWV9FTUFJTCxcbiAgICBlbWFpbCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgdmVyaWZ5RW1haWxTdWNjZXNzID0gKGVtYWlsKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuVkVSSUZZX0VNQUlMX1NVQ0NFU1MsXG4gICAgZW1haWwsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB2ZXJpZnlFbWFpbEZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlZFUklGWV9FTUFJTF9GQUlMLFxuICAgIGVycm9yLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgY29uc3QgdmVyaWZ5T1RQID0gKG90cCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLkNPTkZJUk1fT1RQLFxuICAgIG90cCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9XG59XG5leHBvcnQgY29uc3QgdmVyaWZ5T1RQU3VjY2VzcyA9IChvdHApID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5DT05GSVJNX09UUF9TVUNDRVNTLFxuICAgIG90cCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHZlcmlmeU90cEZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLk9UUF9DT05GSVJNQVRJT05fRkFJTCxcbiAgICBlcnJvcixcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHNldFBhc3MgPSAocGFzc3dvcmQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5TRVRfUEFTU1dPUkQsXG4gICAgcGFzc3dvcmQsXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHNldFBhc3NTdWNjZXNzID0gKHBhc3N3b3JkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZXMuU0VUX1BBU1NXT1JEX1NVQ0NFU1MsXG4gICAgcGFzc3dvcmQsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBzZXRQYXNzd29yZEZhaWxlZCA9IChlcnJvcikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGVzLlNFVF9QQVNTV09SRF9GQUlMLFxuICAgIGVycm9yLFxuICB9XG59XG5leHBvcnQgY29uc3QgdXBkYXRlUGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlcy5VUERBVEVfUEFTU1dPUkQsXG4gICAgcGFzc3dvcmQsXG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBHRVRfVE9LRU4gPSAnR0VUX1RPS0VOJ1xuZXhwb3J0IGNvbnN0IFRPS0VOX1JFQ0VJVkVEID0gJ1RPS0VOX1JFQ0VJVkVEJ1xuZXhwb3J0IGNvbnN0IFRPS0VOX1JFQ0VJVkVEX0ZBSUxFRCA9ICdUT0tFTl9SRUNFSVZFRF9GQUlMRUQnXG5cbmV4cG9ydCBjb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSAnVVNFUl9MT0dJTl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9ICdVU0VSX0xPR0lOX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgVVNFUl9MT0dJTl9GQUlMID0gJ1VTRVJfTE9HSU5fRkFJTCdcbmV4cG9ydCBjb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcblxuZXhwb3J0IGNvbnN0IFVTRVJfUkVHSVNURVJfUkVRVUVTVCA9ICdVU0VSX1JFR0lTVEVSX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgVVNFUl9SRUdJU1RFUl9TVUNDRVNTID0gJ1VTRVJfUkVHSVNURVJfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBVU0VSX1JFR0lTVEVSX0ZBSUwgPSAnVVNFUl9SRUdJU1RFUl9GQUlMJ1xuXG5leHBvcnQgY29uc3QgVkVSSUZZX0VNQUlMID0gJ1ZFUklGWV9FTUFJTCdcbmV4cG9ydCBjb25zdCBWRVJJRllfRU1BSUxfU1VDQ0VTUyA9ICdWRVJJRllfRU1BSUxfU1VDQ0VTUydcbmV4cG9ydCBjb25zdCBWRVJJRllfRU1BSUxfRkFJTCA9ICdWRVJJRllfRU1BSUxfRkFJTCdcbmV4cG9ydCBjb25zdCBDT05GSVJNX09UUCA9ICdDT05GSVJNX09UUCdcbmV4cG9ydCBjb25zdCBDT05GSVJNX09UUF9TVUNDRVNTID0gJ0NPTkZJUk1fT1RQX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgT1RQX0NPTkZJUk1BVElPTl9GQUlMID0gJ09UUF9DT05GSVJNQVRJT05fRkFJTCdcbmV4cG9ydCBjb25zdCBTRVRfUEFTU1dPUkQgPSAnU0VUX1BBU1NXT1JEJ1xuZXhwb3J0IGNvbnN0IFNFVF9QQVNTV09SRF9TVUNDRVNTID0gJ1NFVF9QQVNTV09SRF9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IFNFVF9QQVNTV09SRF9GQUlMID0gJ1NFVF9QQVNTV09SRF9GQUlMJ1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVNTV09SRCA9ICdVUERBVEVfUEFTU1dPUkQnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdHAtaW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=