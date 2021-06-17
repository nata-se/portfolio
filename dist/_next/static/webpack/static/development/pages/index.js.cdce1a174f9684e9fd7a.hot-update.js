webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Contact/contact-style.js":
/*!*********************************************!*\
  !*** ./components/Contact/contact-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  var _formBox, _btnArea;\n\n  return {\n    sentNote: {\n      backgroundColor: 'blue',\n      width: 100,\n      height: 100,\n      position: 'absolute',\n      animation: \"$myEffect 3000ms \"\n    },\n    animatedItemExiting: {\n      animation: \"$myEffectExit 3000ms \",\n      opacity: 0,\n      transform: \"translateY(-200%)\"\n    },\n    \"@keyframes myEffect\": {\n      \"0%\": {\n        opacity: 0,\n        transform: \"translateY(-200%)\"\n      },\n      \"100%\": {\n        opacity: 1,\n        transform: \"translateY(0)\"\n      }\n    },\n    \"@keyframes myEffectExit\": {\n      \"0%\": {\n        opacity: 1,\n        transform: \"translateY(0)\"\n      },\n      \"100%\": {\n        opacity: 0,\n        transform: \"translateY(-200%)\"\n      }\n    },\n    \"@keyframes NoteUp\": {\n      \"0%\": {\n        opacity: 0,\n        transform: \"translateX(90deg)\"\n      },\n      \"100%\": {\n        opacity: 1,\n        transform: \"translateX(0deg)\"\n      }\n    },\n    formWrap: {\n      position: 'relative'\n    },\n    formBox: (_formBox = {\n      padding: theme.spacing(2)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_formBox, theme.breakpoints.up('sm'), {\n      padding: theme.spacing(7)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_formBox, '&:before', {\n      content: '\"\"',\n      left: -16,\n      bottom: -16,\n      width: '45%',\n      height: '30%',\n      border: '16px solid',\n      borderImageSource: \"linear-gradient(120deg, \".concat(theme.palette.secondary.main, \", \").concat(theme.palette.primary.main, \")\"),\n      borderImageSlice: 1,\n      borderTop: 0,\n      borderRight: 0,\n      position: 'absolute'\n    }), _formBox),\n    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      textAlign: 'left',\n      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark\n    }, theme.breakpoints.down('xs'), {\n      top: theme.spacing(3),\n      position: 'relative'\n    }),\n    input: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      width: '100%',\n      marginBottom: theme.spacing(5)\n    }, theme.breakpoints.down('xs'), {\n      marginBottom: theme.spacing(3)\n    }),\n    form: {\n      textAlign: 'left',\n      position: 'relative'\n    },\n    btnArea: (_btnArea = {\n      display: 'flex',\n      justifyContent: 'space-between',\n      margin: theme.spacing(0, 0, 3)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btnArea, theme.breakpoints.up('sm'), {\n      margin: theme.spacing(3, 0, 0)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btnArea, '& span', {\n      '& a': {\n        textDecoration: 'none !important',\n        color: theme.palette.secondary.main\n      }\n    }), _btnArea)\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QvY29udGFjdC1zdHlsZS5qcz9jOTFlIl0sIm5hbWVzIjpbImNvbnRhY3RTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJzZW50Tm90ZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJhbmltYXRpb24iLCJhbmltYXRlZEl0ZW1FeGl0aW5nIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImZvcm1XcmFwIiwiZm9ybUJveCIsInBhZGRpbmciLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsImNvbnRlbnQiLCJsZWZ0IiwiYm90dG9tIiwiYm9yZGVyIiwiYm9yZGVySW1hZ2VTb3VyY2UiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsInByaW1hcnkiLCJib3JkZXJJbWFnZVNsaWNlIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJ0aXRsZSIsInRleHRBbGlnbiIsImNvbG9yIiwidHlwZSIsImxpZ2h0IiwiZGFyayIsImRvd24iLCJ0b3AiLCJpbnB1dCIsIm1hcmdpbkJvdHRvbSIsImZvcm0iLCJidG5BcmVhIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUE7O0FBQUEsU0FBSztBQUV6Q0MsWUFBUSxFQUFFO0FBQ1JDLHFCQUFlLEVBQUUsTUFEVDtBQUVSQyxXQUFLLEVBQUUsR0FGQztBQUdSQyxZQUFNLEVBQUUsR0FIQTtBQUlSQyxjQUFRLEVBQUMsVUFKRDtBQUtSQyxlQUFTO0FBTEQsS0FGK0I7QUFTekNDLHVCQUFtQixFQUFFO0FBQ25CRCxlQUFTLHlCQURVO0FBRW5CRSxhQUFPLEVBQUUsQ0FGVTtBQUduQkMsZUFBUyxFQUFFO0FBSFEsS0FUb0I7QUFjekMsMkJBQXVC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LENBSkksRUFJeUI7QUFDNUIyQixZQUFNLEVBQUUxQyxLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBRG9CLEtBSnpCLHVHQU9MLFFBUEssRUFPSztBQUNSLGFBQU87QUFDTDhCLHNCQUFjLEVBQUUsaUJBRFg7QUFFTGIsYUFBSyxFQUFFOUIsS0FBSyxDQUFDcUIsT0FBTixDQUFjQyxTQUFkLENBQXdCQztBQUYxQjtBQURDLEtBUEw7QUExRmtDLEdBQUw7QUFBQSxDQUFOLENBQWhDO0FBMEdlekIsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3QvY29udGFjdC1zdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBjb250YWN0U3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuXG4gIHNlbnROb3RlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgIGFuaW1hdGlvbjogYCRteUVmZmVjdCAzMDAwbXMgYFxuICB9LFxuICBhbmltYXRlZEl0ZW1FeGl0aW5nOiB7XG4gICAgYW5pbWF0aW9uOiBgJG15RWZmZWN0RXhpdCAzMDAwbXMgYCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC0yMDAlKVwiXG4gIH0sXG4gIFwiQGtleWZyYW1lcyBteUVmZmVjdFwiOiB7XG4gICAgXCIwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTIwMCUpXCJcbiAgICB9LFxuICAgIFwiMTAwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoMClcIlxuICAgIH1cbiAgfSxcbiAgXCJAa2V5ZnJhbWVzIG15RWZmZWN0RXhpdFwiOiB7XG4gICAgXCIwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoMClcIlxuICAgIH0sXG4gICAgXCIxMDAlXCI6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtMjAwJSlcIlxuICAgIH1cbiAgfSxcbiAgXCJAa2V5ZnJhbWVzIE5vdGVVcFwiOiB7XG4gICAgXCIwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoOTBkZWcpXCJcbiAgICB9LFxuICAgIFwiMTAwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMGRlZylcIlxuICAgIH1cbiAgfSxcblxuXG5cblxuXG4gIGZvcm1XcmFwOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgZm9ybUJveDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg3KSxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGxlZnQ6IC0xNixcbiAgICAgIGJvdHRvbTogLTE2LFxuICAgICAgd2lkdGg6ICc0NSUnLFxuICAgICAgaGVpZ2h0OiAnMzAlJyxcbiAgICAgIGJvcmRlcjogJzE2cHggc29saWQnLFxuICAgICAgYm9yZGVySW1hZ2VTb3VyY2U6IGBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSlgLFxuICAgICAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgICAgIGJvcmRlclRvcDogMCxcbiAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9XG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH1cbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKVxuICAgIH1cbiAgfSxcbiAgZm9ybToge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBidG5BcmVhOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDAsIDMpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAwKVxuICAgIH0sXG4gICAgJyYgc3Bhbic6IHtcbiAgICAgICcmIGEnOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSAhaW1wb3J0YW50JyxcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RTdHlsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Contact/contact-style.js\n");

/***/ })

})