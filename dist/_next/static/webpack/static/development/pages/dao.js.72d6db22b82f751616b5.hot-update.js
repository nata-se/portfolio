webpackHotUpdate("static/development/pages/dao.js",{

/***/ "./projects/projectsJS/DaoQuotes/Divination.js":
/*!*****************************************************!*\
  !*** ./projects/projectsJS/DaoQuotes/Divination.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Divination; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _divination_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./divination.scss */ \"./projects/projectsJS/DaoQuotes/divination.scss\");\n/* harmony import */ var _divination_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_divination_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_images_dao_again_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/images/dao/again.gif */ \"./public/images/dao/again.gif\");\n/* harmony import */ var _public_images_dao_again_gif__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_images_dao_again_gif__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _daoText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./daoText */ \"./projects/projectsJS/DaoQuotes/daoText.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/natalia/Development/portfolio/projects/projectsJS/DaoQuotes/Divination.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar initialState = {\n  askAquestion: true,\n  chapterNum: -1,\n  poem: null,\n  showEntirePoem: false\n};\n\nvar Divination = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Divination, _React$Component);\n\n  var _super = _createSuper(Divination);\n\n  function Divination() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Divination);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", initialState);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleClick\", function (event) {\n      event.preventDefault();\n\n      _this.setState({\n        askAquestion: false\n      }); // is it english or chinese\n      // const source = this.props.isEnglish\n      //     ? tao\n      //     : taoChn\n\n\n      var source = _this.props.dataSource; //choose a chapter\n\n      var index = Math.random() * source.length;\n      var rounded = Math.floor(index);\n      var passage = source[rounded];\n      var _passage$passage = passage.passage,\n          chapterNum = _passage$passage.chapterNum,\n          poem = _passage$passage.poem; //choose a quote\n\n      var chozenPoem = poem.split('</br>');\n      var indexQuote = Math.random() * (chozenPoem.length - 1);\n      var roundedQuote = Math.floor(indexQuote);\n      var poemIndexes = [roundedQuote // roundedQuote + 1,\n      ];\n\n      _this.setState({\n        chapterNum: chapterNum,\n        poem: poem.split('</br>'),\n        poemIndexes: poemIndexes\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleShowPoem\", function () {\n      _this.setState({\n        showEntirePoem: true\n      });\n\n      _this.setState({\n        askAquestion: false\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"resetAll\", function () {\n      _this.setState(_objectSpread({}, initialState));\n\n      _this.handleClick();\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Divination, [{\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (prevProps.isEnglish !== this.props.isEnglish) {\n        this.setState(_objectSpread({}, initialState));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          askAquestion = _this$state.askAquestion,\n          poem = _this$state.poem,\n          poemIndexes = _this$state.poemIndexes,\n          showEntirePoem = _this$state.showEntirePoem;\n      var shouldShowButton = poem && !showEntirePoem;\n      var questMessage = this.props.isEnglish ? 'Make a question out of your doubts' : '问一个问题';\n      var revealBtnMessage = this.props.isEnglish ? 'Reveal a quote...' : '显示报价...';\n      var contextBtnMessage = this.props.isEnglish ? 'This quote in chapter' : '本章引用';\n      var againBtnMessage = this.props.isEnglish ? 'Start again' : '重新开始';\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        className: \"divination\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 13\n        }\n      }, askAquestion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        className: \"question\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 25\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"h3\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 29\n        }\n      }, \" \", questMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"a\", {\n        href: \"#\",\n        onClick: this.handleClick,\n        className: \"reveal_btn\",\n        alt: \"click         to see Dao quote\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 29\n        }\n      }, revealBtnMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        className: \"quoteContainer\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        className: \"quoteBlock\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }\n      }, poem && poem.map(function (line, index) {\n        var isCurrentLineSelected = poemIndexes.includes(index);\n        var shouldShowLine = isCurrentLineSelected || showEntirePoem;\n        var className = shouldShowLine ? \"poem-line show\" : \"poem-line\";\n\n        if (showEntirePoem && isCurrentLineSelected) {\n          className = className + \" highlight\";\n        }\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n          key: index,\n          className: className,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 40\n          }\n        }, line);\n      })), shouldShowButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        className: \"details\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 29\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"a\", {\n        className: \"reveal_btn\",\n        onClick: this.handleShowPoem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 5\n        }\n      }, contextBtnMessage)), !askAquestion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"div\", {\n        className: \"again_btn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 29\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"a\", {\n        href: \"#\",\n        onClick: this.resetAll,\n        className: \"zen_btn\",\n        alt: \"new quote from Dao\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 29\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(\"img\", {\n        className: \"try_again\",\n        src: \"/public/images/dao/again.gif\",\n        alt: \"try again\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 33\n        }\n      }), \" \", againBtnMessage))));\n    }\n  }]);\n\n  return Divination;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wcm9qZWN0cy9wcm9qZWN0c0pTL0Rhb1F1b3Rlcy9EaXZpbmF0aW9uLmpzPzA0OTQiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiYXNrQXF1ZXN0aW9uIiwiY2hhcHRlck51bSIsInBvZW0iLCJzaG93RW50aXJlUG9lbSIsIkRpdmluYXRpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJzb3VyY2UiLCJwcm9wcyIsImRhdGFTb3VyY2UiLCJpbmRleCIsIk1hdGgiLCJyYW5kb20iLCJsZW5ndGgiLCJyb3VuZGVkIiwiZmxvb3IiLCJwYXNzYWdlIiwiY2hvemVuUG9lbSIsInNwbGl0IiwiaW5kZXhRdW90ZSIsInJvdW5kZWRRdW90ZSIsInBvZW1JbmRleGVzIiwiaGFuZGxlQ2xpY2siLCJwcmV2UHJvcHMiLCJpc0VuZ2xpc2giLCJzdGF0ZSIsInNob3VsZFNob3dCdXR0b24iLCJxdWVzdE1lc3NhZ2UiLCJyZXZlYWxCdG5NZXNzYWdlIiwiY29udGV4dEJ0bk1lc3NhZ2UiLCJhZ2FpbkJ0bk1lc3NhZ2UiLCJtYXAiLCJsaW5lIiwiaXNDdXJyZW50TGluZVNlbGVjdGVkIiwiaW5jbHVkZXMiLCJzaG91bGRTaG93TGluZSIsImNsYXNzTmFtZSIsImhhbmRsZVNob3dQb2VtIiwicmVzZXRBbGwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxjQUFZLEVBQUUsSUFERztBQUVqQkMsWUFBVSxFQUFFLENBQUMsQ0FGSTtBQUdqQkMsTUFBSSxFQUFFLElBSFc7QUFJakJDLGdCQUFjLEVBQUU7QUFKQyxDQUFyQjs7SUFPcUJDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ1RMLFk7O3NOQVFNLFVBQUNNLEtBQUQsRUFBWTtBQUN0QkEsV0FBSyxDQUFDQyxjQUFOOztB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Q0F2QlosRUE2QlksQ0FBQzlCLFlBQUQsaUJBQ0E7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDQTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQVksZUFBTyxFQUFFLEtBQUt1QyxRQUExQjtBQUFvQyxpQkFBUyxFQUFDLFNBQTlDO0FBQXdELFdBQUcsRUFBQyxvQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFHLEVBQUMsOEJBQS9CO0FBQThELFdBQUcsRUFBQyxXQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosT0FDMEZSLGVBRDFGLENBREEsQ0E5QlosQ0FWSixDQURKO0FBbURIOzs7O0VBNUhtQ1MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL3Byb2plY3RzL3Byb2plY3RzSlMvRGFvUXVvdGVzL0RpdmluYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZGl2aW5hdGlvbi5zY3NzJztcbmltcG9ydCB6ZW4gZnJvbSAnLi4vLi4vLi4vcHVibGljL2ltYWdlcy9kYW8vYWdhaW4uZ2lmJztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdGFvLCB0YW9DaG4gfSBmcm9tICcuL2Rhb1RleHQnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhc2tBcXVlc3Rpb246IHRydWUsXG4gICAgY2hhcHRlck51bTogLTEsXG4gICAgcG9lbTogbnVsbCxcbiAgICBzaG93RW50aXJlUG9lbTogZmFsc2UsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpdmluYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGlmIChwcmV2UHJvcHMuaXNFbmdsaXNoICE9PSB0aGlzLnByb3BzLmlzRW5nbGlzaCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLmluaXRpYWxTdGF0ZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+ICB7IFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhc2tBcXVlc3Rpb246IGZhbHNlIH0pXG4vLyBpcyBpdCBlbmdsaXNoIG9yIGNoaW5lc2VcbiAgICAgICAgLy8gY29uc3Qgc291cmNlID0gdGhpcy5wcm9wcy5pc0VuZ2xpc2hcbiAgICAgICAgLy8gICAgID8gdGFvXG4gICAgICAgIC8vICAgICA6IHRhb0NoblxuXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZVxuXG4vL2Nob29zZSBhIGNoYXB0ZXJcbiAgICAgICAgY29uc3QgaW5kZXggICA9IE1hdGgucmFuZG9tKCkgKiAoc291cmNlLmxlbmd0aClcbiAgICAgICAgY29uc3Qgcm91bmRlZCA9IE1hdGguZmxvb3IoaW5kZXgpXG4gXG5cbiAgICAgICAgY29uc3QgcGFzc2FnZSA9IHNvdXJjZVtyb3VuZGVkXVxuICAgICAgICBcbiAgICAgICAgY29uc3QgeyBjaGFwdGVyTnVtLCBwb2VtIH0gPSBwYXNzYWdlLnBhc3NhZ2VcblxuICBcbiAgICAgICAgLy9jaG9vc2UgYSBxdW90ZVxuICAgICAgICAgICAgY29uc3QgY2hvemVuUG9lbSAgID0gcG9lbS5zcGxpdCgnPC9icj4nKVxuICAgICAgICAgICAgY29uc3QgaW5kZXhRdW90ZSAgID0gTWF0aC5yYW5kb20oKSAqIChjaG96ZW5Qb2VtLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBjb25zdCByb3VuZGVkUXVvdGUgPSBNYXRoLmZsb29yKGluZGV4UXVvdGUpXG5cbiAgICAgICAgICAgIGNvbnN0IHBvZW1JbmRleGVzID0gW1xuICAgICAgICAgICAgICAgIHJvdW5kZWRRdW90ZSxcbiAgICAgICAgICAgICAgICAvLyByb3VuZGVkUXVvdGUgKyAxLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGFwdGVyTnVtLFxuICAgICAgICAgICAgICAgIHBvZW06IHBvZW0uc3BsaXQoJzwvYnI+JyksXG4gICAgICAgICAgICAgICAgcG9lbUluZGV4ZXMsXG4gICAgICAgICAgICB9KSAgICAgICAgICAgIFxuICAgIH1cblxuICBcblxuICAgIGhhbmRsZVNob3dQb2VtID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0VudGlyZVBvZW06IHRydWUgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFza0FxdWVzdGlvbjogZmFsc2UgfSlcbiAgICB9XG5cbiAgICByZXNldEFsbCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLmluaXRpYWxTdGF0ZSB9KVxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrKClcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFza0FxdWVzdGlvbiwgcG9lbSwgcG9lbUluZGV4ZXMsIHNob3dFbnRpcmVQb2VtIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgY29uc3Qgc2hvdWxkU2hvd0J1dHRvbiA9IHBvZW0gJiYgIXNob3dFbnRpcmVQb2VtXG5cbiAgICAgICAgY29uc3QgcXVlc3RNZXNzYWdlID0gdGhpcy5wcm9wcy5pc0VuZ2xpc2ggPyAnTWFrZSBhIHF1ZXN0aW9uIG91dCBvZiB5b3VyIGRvdWJ0cycgOiAn6Zeu5LiA5Liq6Zeu6aKYJ1xuXG4gICAgICAgIGNvbnN0IHJldmVhbEJ0bk1lc3NhZ2UgPSB0aGlzLnByb3BzLmlzRW5nbGlzaCA/ICdSZXZlYWwgYSBxdW90ZS4uLicgOiAn5pi+56S65oql5Lu3Li4uJ1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHRCdG5NZXNzYWdlID0gdGhpcy5wcm9wcy5pc0VuZ2xpc2ggPyAnVGhpcyBxdW90ZSBpbiBjaGFwdGVyJyA6ICfmnKznq6DlvJXnlKgnXG5cbiAgICAgICAgY29uc3QgYWdhaW5CdG5NZXNzYWdlID0gdGhpcy5wcm9wcy5pc0VuZ2xpc2ggPyAnU3RhcnQgYWdhaW4nIDogJ+mHjeaWsOW8gOWniydcblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmluYXRpb25cIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFza0FxdWVzdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiB7IHF1ZXN0TWVzc2FnZSB9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cInJldmVhbF9idG5cIiBhbHQ9XCJjbGljayAgICAgICAgIHRvIHNlZSBEYW8gcXVvdGVcIj57IHJldmVhbEJ0bk1lc3NhZ2UgfTwvYT4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVvdGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdW90ZUJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9lbSAmJiBwb2VtLm1hcCgobGluZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50TGluZVNlbGVjdGVkID0gcG9lbUluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2hvd0xpbmUgPSBpc0N1cnJlbnRMaW5lU2VsZWN0ZWQgfHwgc2hvd0VudGlyZVBvZW1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gc2hvdWxkU2hvd0xpbmUgPyBcInBvZW0tbGluZSBzaG93XCIgOiBcInBvZW0tbGluZVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3dFbnRpcmVQb2VtICYmIGlzQ3VycmVudExpbmVTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgXCIgaGlnaGxpZ2h0XCIgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+eyBsaW5lIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRTaG93QnV0dG9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICA8YSBjbGFzc05hbWU9XCJyZXZlYWxfYnRuXCIgb25DbGljaz17dGhpcy5oYW5kbGVTaG93UG9lbX0+e2NvbnRleHRCdG5NZXNzYWdlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhc2tBcXVlc3Rpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdhaW5fYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnJlc2V0QWxsfSBjbGFzc05hbWU9XCJ6ZW5fYnRuXCIgYWx0PVwibmV3IHF1b3RlIGZyb20gRGFvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidHJ5X2FnYWluXCIgc3JjPVwiL3B1YmxpYy9pbWFnZXMvZGFvL2FnYWluLmdpZlwiIGFsdD1cInRyeSBhZ2FpblwiPjwvaW1nPiB7YWdhaW5CdG5NZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./projects/projectsJS/DaoQuotes/Divination.js\n");

/***/ })

})