webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Contact/contact-style.js":
/*!*********************************************!*\
  !*** ./components/Contact/contact-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  var _formBox, _btnArea;\n\n  return {\n    sentNote: {\n      backgroundColor: '#ffffff',\n      border: '8px solid',\n      borderImageSource: \"linear-gradient(120deg, \".concat(theme.palette.secondary.main, \", \").concat(theme.palette.primary.main, \")\"),\n      borderImageSlice: 1,\n      // borderTop: 0,\n      // borderRight: 0,\n      color: 'grey',\n      paddingTop: '40px',\n      width: \"80%\",\n      height: \"40%\",\n      position: 'absolute',\n      zIndex: 30,\n      animation: \"$NoteUp 800ms ease-out \"\n    },\n    \"@keyframes NoteUp\": {\n      \"0%\": {\n        // opacity: 0,\n        transform: \"rotateX(90deg)\"\n      },\n      \"100%\": {\n        // opacity: 1,\n        transform: \"rotateX(0deg)\"\n      }\n    },\n    formWrap: {\n      position: 'relative'\n    },\n    formBox: (_formBox = {\n      padding: theme.spacing(2)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_formBox, theme.breakpoints.up('sm'), {\n      padding: theme.spacing(7)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_formBox, '&:before', {\n      content: '\"\"',\n      left: -16,\n      bottom: -16,\n      width: '45%',\n      height: '30%',\n      border: '16px solid',\n      borderImageSource: \"linear-gradient(120deg, \".concat(theme.palette.secondary.main, \", \").concat(theme.palette.primary.main, \")\"),\n      borderImageSlice: 1,\n      borderTop: 0,\n      borderRight: 0,\n      position: 'absolute'\n    }), _formBox),\n    title: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      textAlign: 'left',\n      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark\n    }, theme.breakpoints.down('xs'), {\n      top: theme.spacing(3),\n      position: 'relative'\n    }),\n    input: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      width: '100%',\n      marginBottom: theme.spacing(5)\n    }, theme.breakpoints.down('xs'), {\n      marginBottom: theme.spacing(3)\n    }),\n    form: {\n      textAlign: 'left',\n      position: 'relative'\n    },\n    btnArea: (_btnArea = {\n      display: 'flex',\n      justifyContent: 'space-between',\n      margin: theme.spacing(0, 0, 3)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btnArea, theme.breakpoints.up('sm'), {\n      margin: theme.spacing(3, 0, 0)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_btnArea, '& span', {\n      '& a': {\n        textDecoration: 'none !important',\n        color: theme.palette.secondary.main\n      }\n    }), _btnArea)\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (contactStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QvY29udGFjdC1zdHlsZS5qcz9jOTFlIl0sIm5hbWVzIjpbImNvbnRhY3RTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJzZW50Tm90ZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImJvcmRlckltYWdlU291cmNlIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJwcmltYXJ5IiwiYm9yZGVySW1hZ2VTbGljZSIsImNvbG9yIiwicGFkZGluZ1RvcCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJhbmltYXRpb24iLCJ0cmFuc2Zvcm0iLCJmb3JtV3JhcCIsImZvcm1Cb3giLCJwYWRkaW5nIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJjb250ZW50IiwibGVmdCIsImJvdHRvbSIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJ0eXBlIiwibGlnaHQiLCJkYXJrIiwiZG93biIsInRvcCIsImlucHV0IiwibWFyZ2luQm90dG9tIiwiZm9ybSIsImJ0bkFyZWEiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSxTQUFLO0FBRXpDQyxZQUFRLEVBQUU7QUFDUkMscUJBQWUsRUFBRSxTQURUO0FBRVJDLFlBQU0sRUFBRSxXQUZBO0FBR1JDLHVCQUFpQixvQ0FBNkJKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxTQUFkLENBQXdCQyxJQUFyRCxlQUE4RFAsS0FBSyxDQUFDSyxPQUFOLENBQWNHLE9BQWQsQ0FBc0JELElBQXBGLE1BSFQ7QUFJUkUsc0JBQWdCLEVBQUUsQ0FKVjtBQUtSO0FBQ0E7QUFDQUMsV0FBSyxFQUFFLE1BUEM7QUFRUkMsZ0JBQVUsRUFBRSxNQVJKO0FBU1JDLFdBQUssRUFBRSxLQVRDO0FBVVJDLFlBQU0sRUFBRSxLQVZBO0FBV1JDLGNBQVEsRUFBQyxVQVhEO0FBWVJDLFlBQU0sRUFBRSxFQVpBO0FBYVJDLGVBQVM7QUFiRCxLQUYrQjtBQWlCekMseUJBQXFCO0FBQ25CLFlBQU07QUFDSjtBQUNBQyxpQkFBUyxFQUFFO0FBRlAsT0FEYTtBQUtuQixjQUFRO0FBQ047QUFDQUEsaUJBQVMsRUFBRTtBQUZMO0FBTFcsS0FqQm9CO0FBZ0N6Q0MsWUFBUSxFQUFFO0FBQ1JKLGNBQVEsRUFBRTtBQURGLEtBaEMrQjtBQW1DekNLLFdBQU87QUFDTEMsYUFBTyxFQUFFcEIsS0FBSyxDQUFDcUIsT0FBTixDQUFjLENBQWQ7QUFESiwyR0FFSnJCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRkksRUFFeUI7QUFDNUJILGFBQU8sRUFBRXBCLEtBQUssQ0FBQ3FCLE9BQU4sQ0FBYyxDQUFkO0FBRG1CLEtBRnpCLHVHQUtMLFVBTEssRUFLTztBQUNWRyxhQUFPLEVBQUUsSUFEQztBQUVWQyxVQUFJLEVBQUUsQ0FBQyxFQUZHO0FBR1ZDLFlBQU0sRUFBRSxDQUFDLEVBSEM7QUFJVmQsV0FBSyxFQUFFLEtBSkc7QUFLVkMsWUFBTSxFQUFFLEtBTEU7QUFNVlYsWUFBTSxFQUFFLFlBTkU7QUFPVkMsdUJBQWlCLG9DQUE2QkosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBQXJELGVBQThEUCxLQUFLLENBQUNLLE9BQU4sQ0FBY0csT0FBZCxDQUFzQkQsSUFBcEYsTUFQUDtBQVFWRSxzQkFBZ0IsRUFBRSxDQVJSO0FBU1ZrQixlQUFTLEVBQUUsQ0FURDtBQVVWQyxpQkFBVyxFQUFFLENBVkg7QUFXVmQsY0FBUSxFQUFFO0FBWEEsS0FMUCxZQW5Da0M7QUFzRHpDZSxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLE1BRFI7QUFFSHBCLFdBQUssRUFBRVYsS0FBSyxDQUFDSyxPQUFOLENBQWMwQixJQUFkLEtBQXVCLE1BQXZCLEdBQWdDL0IsS0FBSyxDQUFDSyxPQUFOLENBQWNHLE9BQWQsQ0FBc0J3QixLQUF0RCxHQUE4RGhDLEtBQUssQ0FBQ0ssT0FBTixDQUFjRyxPQUFkLENBQXNCeUI7QUFGeEYsT0FHRmpDLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JZLElBQWxCLENBQXVCLElBQXZCLENBSEUsRUFHNkI7QUFDOUJDLFNBQUcsRUFBRW5DLEtBQUssQ0FBQ3FCLE9BQU4sQ0FBYyxDQUFkLENBRHlCO0FBRTlCUCxjQUFRLEVBQUU7QUFGb0IsS0FIN0IsQ0F0RG9DO0FBOER6Q3NCLFNBQUssRUFBRTtBQUNMeEIsV0FBSyxFQUFFLE1BREo7QUFFSHlCLGtCQUFZLEVBQUVyQyxLQUFLLENBQUNxQixPQUFOLENBQWMsQ0FBZDtBQUZYLE9BR0ZyQixLQUFLLENBQUNzQixXQUFOLENBQWtCWSxJQUFsQixDQUF1QixJQUF2QixDQUhFLEVBRzZCO0FBQzlCRyxrQkFBWSxFQUFFckMsS0FBSyxDQUFDcUIsT0FBTixDQUFjLENBQWQ7QUFEZ0IsS0FIN0IsQ0E5RG9DO0FBcUV6Q2lCLFFBQUksRUFBRTtBQUNKUixlQUFTLEVBQUUsTUFEUDtBQUVKaEIsY0FBUSxFQUFFO0FBRk4sS0FyRW1DO0FBeUV6Q3lCLFdBQU87QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsb0JBQWMsRUFBRSxlQUZYO0FBR0xDLFlBQU0sRUFBRTFDLEtBQUssQ0FBQ3FCLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBSEgsMkdBSUpyQixLQUFLLENBQUNzQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpJLEVBSXlCO0FBQzVCbUIsWUFBTSxFQUFFMUMsS0FBSyxDQUFDcUIsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFEb0IsS0FKekIsdUdBT0wsUUFQSyxFQU9LO0FBQ1IsYUFBTztBQUNMc0Isc0JBQWMsRUFBRSxpQkFEWDtBQUVMakMsYUFBSyxFQUFFVixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkM7QUFGMUI7QUFEQyxLQVBMO0FBekVrQyxHQUFMO0FBQUEsQ0FBTixDQUFoQztBQXlGZVQsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3QvY29udGFjdC1zdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBjb250YWN0U3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuXG4gIHNlbnROb3RlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgYm9yZGVyOiAnOHB4IHNvbGlkJyxcbiAgICBib3JkZXJJbWFnZVNvdXJjZTogYGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICR7dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0sICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59KWAsXG4gICAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgICAvLyBib3JkZXJUb3A6IDAsXG4gICAgLy8gYm9yZGVyUmlnaHQ6IDAsXG4gICAgY29sb3I6ICdncmV5JyxcbiAgICBwYWRkaW5nVG9wOiAnNDBweCcsXG4gICAgd2lkdGg6IFwiODAlXCIsXG4gICAgaGVpZ2h0OiBcIjQwJVwiLFxuICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgekluZGV4OiAzMCxcbiAgICBhbmltYXRpb246IGAkTm90ZVVwIDgwMG1zIGVhc2Utb3V0IGBcbiAgfSxcbiAgXCJAa2V5ZnJhbWVzIE5vdGVVcFwiOiB7XG4gICAgXCIwJVwiOiB7XG4gICAgICAvLyBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVgoOTBkZWcpXCJcbiAgICB9LFxuICAgIFwiMTAwJVwiOiB7XG4gICAgICAvLyBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZVgoMGRlZylcIlxuICAgIH1cbiAgfSxcblxuXG5cblxuXG4gIGZvcm1XcmFwOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgZm9ybUJveDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg3KSxcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGxlZnQ6IC0xNixcbiAgICAgIGJvdHRvbTogLTE2LFxuICAgICAgd2lkdGg6ICc0NSUnLFxuICAgICAgaGVpZ2h0OiAnMzAlJyxcbiAgICAgIGJvcmRlcjogJzE2cHggc29saWQnLFxuICAgICAgYm9yZGVySW1hZ2VTb3VyY2U6IGBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSlgLFxuICAgICAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgICAgIGJvcmRlclRvcDogMCxcbiAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9XG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH1cbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKVxuICAgIH1cbiAgfSxcbiAgZm9ybToge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBidG5BcmVhOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDAsIDMpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAwKVxuICAgIH0sXG4gICAgJyYgc3Bhbic6IHtcbiAgICAgICcmIGEnOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSAhaW1wb3J0YW50JyxcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RTdHlsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Contact/contact-style.js\n");

/***/ })

})