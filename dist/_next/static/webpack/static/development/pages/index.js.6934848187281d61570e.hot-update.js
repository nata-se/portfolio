webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Contact/contact-style.js":
/*!*********************************************!*\
  !*** ./components/Contact/contact-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  var _formBox, _btnArea;\n\n  return {\n    sentNote: {\n      backgroundColor: '#ffffff',\n      border: '16px solid',\n      borderImageSource: \"linear-gradient(120deg, \".concat(theme.palette.secondary.main, \", \").concat(theme.palette.primary.main, \")\"),\n      borderImageSlice: 1,\n      borderTop: 0,\n      borderRight: 0,\n      color: 'grey',\n      boxShadow: ' 6px -8px rgba(0, 0, 0, 0.2)',\n      paddingTop: '40px',\n      width: \"80%\",\n      height: \"40%\",\n      position: 'absolute',\n      zIndex: 30,\n      animation: \"$NoteUp 800ms ease-out \"\n    },\n    \"@keyframes NoteUp\": {\n      \"0%\": {\n        // opacity: 0,\n        transform: \"rotateX(90deg)\"\n      },\n      \"100%\": {\n        // opacity: 1,\n        transform: \"rotateX(0deg)\"\n      }\n    },\n    formWrap: {\n      position: 'relative'\n    },\n    formBox: (_formBox = {\n      padding: theme.spacing(2)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_formBox, theme.breakpoints.up('sm'), {\n      padding: theme.spacing(7)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_formBox, '&:before', {\n      content: '\"\"',\n      left: -16,\n      bottom: -16,\n      width: '45%',\n      height: '30%',\n      border: '16px solid',\n      borderImageSource: \"linear-gradient(120deg, \".concat(theme.palette.secondary.main, \", \").concat(theme.palette.primary.main, \")\"),\n      borderImageSlice: 1,\n      borderTop: 0,\n      borderRight: 0,\n      position: 'absolute'\n    }), _formBox),\n    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      textAlign: 'left',\n      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark\n    }, theme.breakpoints.down('xs'), {\n      top: theme.spacing(3),\n      position: 'relative'\n    }),\n    input: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      width: '100%',\n      marginBottom: theme.spacing(5)\n    }, theme.breakpoints.down('xs'), {\n      marginBottom: theme.spacing(3)\n    }),\n    form: {\n      textAlign: 'left',\n      position: 'relative'\n    },\n    btnArea: (_btnArea = {\n      display: 'flex',\n      justifyContent: 'space-between',\n      margin: theme.spacing(0, 0, 3)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btnArea, theme.breakpoints.up('sm'), {\n      margin: theme.spacing(3, 0, 0)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btnArea, '& span', {\n      '& a': {\n        textDecoration: 'none !important',\n        color: theme.palette.secondary.main\n      }\n    }), _btnArea)\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QvY29udGFjdC1zdHlsZS5qcz9jOTFlIl0sIm5hbWVzIjpbImNvbnRhY3RTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJzZW50Tm90ZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImJvcmRlckltYWdlU291cmNlIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJwcmltYXJ5IiwiYm9yZGVySW1hZ2VTbGljZSIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiY29sb3IiLCJib3hTaGFkb3ciLCJwYWRkaW5nVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInpJbmRleCIsImFuaW1hdGlvbiIsInRyYW5zZm9ybSIsImZvcm1XcmFwIiwiZm9ybUJveCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsImNvbnRlbnQiLCJsZWZ0IiwiYm90dG9tIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJ0eXBlIiwibGlnaHQiLCJkYXJrIiwiZG93biIsInRvcCIsImlucHV0IiwibWFyZ2luQm90dG9tIiwiZm9ybSIsImJ0bkFyZWEiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSxTQUFLO0FBRXpDQyxZQUFRLEVBQUU7QUFDUkMscUJBQWUsRUFBRSxTQURUO0FBRVJDLFlBQU0sRUFBRSxZQUZBO0FBR1JDLHVCQUFpQixvQ0FBNkJKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxTQUFkLENBQXdCQyxJQUFyRCxlQUE4RFAsS0FBSyxDQUFDSyxPQUFOLENBQWNHLE9BQWQsQ0FBc0JELElBQXBGLE1BSFQ7QUFJUkUsc0JBQWdCLEVBQUUsQ0FKVjtBQUtSQyxlQUFTLEVBQUUsQ0FMSDtBQU1S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UEssRUFPSztBQUNSLGFBQU87QUFDTG9CLHNCQUFjLEVBQUUsaUJBRFg7QUFFTGhDLGFBQUssRUFBRVosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDO0FBRjFCO0FBREMsS0FQTDtBQTFFa0MsR0FBTDtBQUFBLENBQU4sQ0FBaEM7QUEwRmVULDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250YWN0L2NvbnRhY3Qtc3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgY29udGFjdFN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcblxuICBzZW50Tm90ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgIGJvcmRlcjogJzE2cHggc29saWQnLFxuICAgIGJvcmRlckltYWdlU291cmNlOiBgbGluZWFyLWdyYWRpZW50KDEyMGRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSwgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0pYCxcbiAgICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICAgIGJvcmRlclRvcDogMCxcbiAgICBib3JkZXJSaWdodDogMCxcbiAgICBjb2xvcjogJ2dyZXknLFxuICAgIGJveFNoYWRvdzonIDZweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgcGFkZGluZ1RvcDogJzQwcHgnLFxuICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgIGhlaWdodDogXCI0MCVcIixcbiAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgIHpJbmRleDogMzAsXG4gICAgYW5pbWF0aW9uOiBgJE5vdGVVcCA4MDBtcyBlYXNlLW91dCBgXG4gIH0sXG4gIFwiQGtleWZyYW1lcyBOb3RlVXBcIjoge1xuICAgIFwiMCVcIjoge1xuICAgICAgLy8gb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGVYKDkwZGVnKVwiXG4gICAgfSxcbiAgICBcIjEwMCVcIjoge1xuICAgICAgLy8gb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGVYKDBkZWcpXCJcbiAgICB9XG4gIH0sXG5cblxuXG5cblxuICBmb3JtV3JhcDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIGZvcm1Cb3g6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBsZWZ0OiAtMTYsXG4gICAgICBib3R0b206IC0xNixcbiAgICAgIHdpZHRoOiAnNDUlJyxcbiAgICAgIGhlaWdodDogJzMwJScsXG4gICAgICBib3JkZXI6ICcxNnB4IHNvbGlkJyxcbiAgICAgIGJvcmRlckltYWdlU291cmNlOiBgbGluZWFyLWdyYWRpZW50KDEyMGRlZywgJHt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSwgJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn0pYCxcbiAgICAgIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gICAgICBib3JkZXJUb3A6IDAsXG4gICAgICBib3JkZXJSaWdodDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfVxuICB9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9XG4gIH0sXG4gIGlucHV0OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9XG4gIH0sXG4gIGZvcm06IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgYnRuQXJlYToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAwLCAzKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMClcbiAgICB9LFxuICAgICcmIHNwYW4nOiB7XG4gICAgICAnJiBhJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfVxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0U3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Contact/contact-style.js\n");

/***/ })

})