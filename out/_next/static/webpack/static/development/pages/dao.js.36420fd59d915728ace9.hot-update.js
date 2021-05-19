webpackHotUpdate("static/development/pages/dao.js",{

/***/ "./projects/projectsJS/DaoQuotes/DaoApp.js":
/*!*************************************************!*\
  !*** ./projects/projectsJS/DaoQuotes/DaoApp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DaoApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.scss */ \"./projects/projectsJS/DaoQuotes/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _imagesDao_dao_hanzi_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imagesDao/dao_hanzi.gif */ \"./projects/projectsJS/DaoQuotes/imagesDao/dao_hanzi.gif\");\n/* harmony import */ var _imagesDao_dao_hanzi_gif__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_imagesDao_dao_hanzi_gif__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _daoText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./daoText */ \"./projects/projectsJS/DaoQuotes/daoText.js\");\n/* harmony import */ var _Divination_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Divination.js */ \"./projects/projectsJS/DaoQuotes/Divination.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/natalia/Development/portfolio/projects/projectsJS/DaoQuotes/DaoApp.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // import daoFlip from './images/dao_flip.gif'\n// const daoHanzi = \"../../../public/images/dao/dao_hanzi.gif\"\n// const daoFlip = \"/images/dao/dao_flip.gif\"\n\n\n\n\nvar DaoApp = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DaoApp, _React$Component);\n\n  var _super = _createSuper(DaoApp);\n\n  function DaoApp() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DaoApp);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      isEnglish: true,\n      dataSource: _daoText__WEBPACK_IMPORTED_MODULE_10__[\"tao\"]\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLangChange\", function (event) {\n      event.preventDefault();\n\n      _this.setState({\n        isEnglish: !_this.state.isEnglish,\n        dataSource: !_this.state.isEnglish ? _daoText__WEBPACK_IMPORTED_MODULE_10__[\"tao\"] : _daoText__WEBPACK_IMPORTED_MODULE_10__[\"taoChn\"]\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DaoApp, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          isEnglish = _this$state.isEnglish,\n          dataSource = _this$state.dataSource;\n      var header = isEnglish ? 'Divination through DAO DE JING quotes' : '通过占卜 道德静语录';\n      var message = isEnglish ? '中文' : 'Engish';\n      var appstyle = {\n        backgroundImage: \"url(\\\"/images/projects/dao/dao_flip.gif\\\")\"\n      }; //`url(${img})`\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n        className: \"app\",\n        style: appstyle,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n        className: \"section left\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"img\", {\n        className: \"img-left\",\n        src: \"/images/projects/dao/dao_hanzi.gif\",\n        alt: \"Dao Hanzi\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n        className: \"section main\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 7\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"header\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"a\", {\n        href: \"#\",\n        onClick: this.handleLangChange,\n        className: \"lang_btn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }\n      }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      }, \" \", header)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"article\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Divination_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        isEnglish: isEnglish,\n        dataSource: dataSource,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"div\", {\n        className: \"section right\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(\"img\", {\n        className: \"img-right\",\n        src: \"/images/projects/dao/dao_flip.gif\",\n        alt: \"Dao Hanzi\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }\n      })));\n    }\n  }]);\n\n  return DaoApp;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm9qZWN0cy9wcm9qZWN0c0pTL0Rhb1F1b3Rlcy9EYW9BcHAuanM/NmRiZiJdLCJuYW1lcyI6WyJEYW9BcHAiLCJpc0VuZ2xpc2giLCJkYXRhU291cmNlIiwidGFvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwic3RhdGUiLCJ0YW9DaG4iLCJoZWFkZXIiLCJtZXNzYWdlIiwiYXBwc3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJoYW5kbGVMYW5nQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0NBR0E7QUFFQTtBQUNBOztBQUVBO0FBRUE7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNYO0FBQ05DLGVBQVMsRUFBRyxJQUROO0FBRU5DLGdCQUFVLEVBQUVDLDZDQUFHQTtBQUZULEs7OzJOQUtXLFVBQUNDLEtBQUQsRUFBVztBQUM1QkEsV0FBSyxDQUFDQyxjQUFOOztBQUVBLFlBQUtDLFFBQUwsQ0FBYztBQUNaTCxpQkFBUyxFQUFHLENBQUMsTUFBS00sS0FBTCxDQUFXTixTQURaO0FBRVpDLGtCQUFVLEVBQUUsQ0FBQyxNQUFLSyxLQUFMLENBQVdOLFNBQVosR0FBd0JFLDZDQUF4QixHQUE4QkssZ0RBQU1BO0FBRnBDLE9BQWQ7QUFJRCxLOzs7Ozs7O1dBRUQsa0JBQVM7QUFBQSx3QkFDMkIsS0FBS0QsS0FEaEM7QUFBQSxVQUNDTixTQURELGVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxVQURaLGVBQ1lBLFVBRFo7QUFHUCxVQUFNTyxNQUFNLEdBQUdSLFNBQVMsR0FBRyx1Q0FBSCxHQUE2QyxZQUFyRTtBQUVBLFVBQU1TLE9BQU8sR0FBR1QsU0FBUyxHQUFHLElBQUgsR0FBVSxRQUFuQztBQUVBLFVBQU1VLFFBQVEsR0FBRztBQUFFQyx1QkFBZTtBQUFqQixPQUFqQixDQVBPLENBUVA7O0FBRUEsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBcUIsYUFBSyxFQUFFRCxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUVJO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBMEIsV0FBRyxFQUFDLG9DQUE5QjtBQUFtRSxXQUFHLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBRkosZUFLQTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0E7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLGVBQU8sRUFBRSxLQUFLRSxnQkFBMUI7QUFBNEMsaUJBQVMsRUFBQyxVQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWtFSCxPQUFsRSxDQURBLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFPRCxNQUFQLENBRkYsQ0FESixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ0UsMkRBQUMsdURBQUQ7QUFBWSxpQkFBUyxFQUFFUixTQUF2QjtBQUFrQyxrQkFBVSxFQUFFQyxVQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FMSixDQUxBLGVBY0k7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFHLEVBQUMsbUNBQS9CO0FBQW1FLFdBQUcsRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FkSixDQURGO0FBb0JEOzs7O0VBN0NpQ1ksNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3Byb2plY3RzL3Byb2plY3RzSlMvRGFvUXVvdGVzL0Rhb0FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9BcHAuc2NzcydcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgZGFvSGFuemkgZnJvbSAnLi9pbWFnZXNEYW8vZGFvX2hhbnppLmdpZidcbi8vIGltcG9ydCBkYW9GbGlwIGZyb20gJy4vaW1hZ2VzL2Rhb19mbGlwLmdpZidcblxuLy8gY29uc3QgZGFvSGFuemkgPSBcIi4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvZGFvL2Rhb19oYW56aS5naWZcIlxuLy8gY29uc3QgZGFvRmxpcCA9IFwiL2ltYWdlcy9kYW8vZGFvX2ZsaXAuZ2lmXCJcblxuaW1wb3J0IHsgdGFvLCB0YW9DaG4gfSBmcm9tICcuL2Rhb1RleHQnXG5cbmltcG9ydCBEaXZpbmF0aW9uIGZyb20gJy4vRGl2aW5hdGlvbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFvQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNFbmdsaXNoOiAgdHJ1ZSxcbiAgICBkYXRhU291cmNlOiB0YW8sXG4gIH1cblxuICBoYW5kbGVMYW5nQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0VuZ2xpc2g6ICAhdGhpcy5zdGF0ZS5pc0VuZ2xpc2gsXG4gICAgICBkYXRhU291cmNlOiAhdGhpcy5zdGF0ZS5pc0VuZ2xpc2ggPyB0YW8gOiB0YW9DaG4sXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHsgICAgXG4gICAgY29uc3QgeyBpc0VuZ2xpc2gsIGRhdGFTb3VyY2UgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGhlYWRlciA9IGlzRW5nbGlzaCA/ICdEaXZpbmF0aW9uIHRocm91Z2ggREFPIERFIEpJTkcgcXVvdGVzJyA6ICfpgJrov4fljaDljZwg6YGT5b636Z2Z6K+t5b2VJ1xuICAgIFxuICAgIGNvbnN0IG1lc3NhZ2UgPSBpc0VuZ2xpc2ggPyAn5Lit5paHJyA6ICdFbmdpc2gnXG5cbiAgICBjb25zdCBhcHBzdHlsZSA9IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiL2ltYWdlcy9wcm9qZWN0cy9kYW8vZGFvX2ZsaXAuZ2lmXCIpYCB9XG4gICAgLy9gdXJsKCR7aW1nfSlgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCIgc3R5bGU9e2FwcHN0eWxlfSA+XG4gICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gbGVmdFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctbGVmdFwiIHNyYz1cIi9pbWFnZXMvcHJvamVjdHMvZGFvL2Rhb19oYW56aS5naWZcIiBhbHQ9XCJEYW8gSGFuemlcIj48L2ltZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBtYWluXCI+XG4gICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFuZ0NoYW5nZX0gY2xhc3NOYW1lPVwibGFuZ19idG5cIj57bWVzc2FnZX08L2E+XG4gICAgICAgICAgICA8aDE+IHsgaGVhZGVyIH08L2gxPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPERpdmluYXRpb24gaXNFbmdsaXNoPXtpc0VuZ2xpc2h9IGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHJpZ2h0XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1yaWdodFwiIHNyYz1cIi9pbWFnZXMvcHJvamVjdHMvZGFvL2Rhb19mbGlwLmdpZlwiIGFsdD1cIkRhbyBIYW56aVwiPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./projects/projectsJS/DaoQuotes/DaoApp.js\n");

/***/ })

})