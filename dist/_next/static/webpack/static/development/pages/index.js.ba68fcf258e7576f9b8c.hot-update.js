webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/About/about-style.js":
/*!*****************************************!*\
  !*** ./components/About/about-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar gold = '#D6BD96';\nvar aboutStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  var _about, _reward, _figure, _item, _photo;\n\n  return {\n    root: {\n      position: 'relative',\n      '& > div': Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, theme.breakpoints.down('xs'), {\n        padding: 0\n      })\n    },\n    about: (_about = {\n      display: 'flex',\n      flexDirection: 'column-reverse'\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_about, theme.breakpoints.up('md'), {\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_about, theme.breakpoints.down('sm'), {\n      textAlign: 'center',\n      '& > h5': {\n        fontSize: 18,\n        lineHeight: '28px',\n        marginTop: theme.spacing(7)\n      }\n    }), _about),\n    line: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      borderTop: 0,\n      borderLeft: 0,\n      height: 40,\n      width: 'calc(100% - 130px)',\n      border: '2px solid',\n      borderImageSource: \"linear-gradient(120deg, \".concat(theme.palette.secondary.main, \", \").concat(theme.palette.primary.main, \")\"),\n      borderImageSlice: 1,\n      position: 'relative',\n      marginTop: theme.spacing(2)\n    }, theme.breakpoints.down('md'), {\n      display: 'none'\n    }),\n    reward: (_reward = {\n      flex: 1,\n      display: 'flex',\n      justifyContent: 'space-between'\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_reward, theme.breakpoints.up('md'), {\n      padding: theme.spacing(0.5, 7, 0, 0)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_reward, theme.breakpoints.down('xs'), {\n      overflow: 'auto'\n    }), _reward),\n    item: (_item = {\n      textAlign: 'center',\n      color: gold,\n      margin: theme.spacing(1)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_item, theme.breakpoints.up('xs'), {\n      margin: theme.spacing(2)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_item, theme.breakpoints.down('xs'), {\n      paddingLeft: theme.spacing(1),\n      paddingRight: theme.spacing(1)\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_item, '& figure', (_figure = {\n      height: 70,\n      margin: theme.spacing(0, 0, 2)\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_figure, theme.breakpoints.down('sm'), {\n      height: 50\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_figure, '& img', {\n      height: '100%'\n    }), _figure)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_item, '& p', Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      fontFamily: 'Times New Roman'\n    }, theme.breakpoints.down('sm'), {\n      fontSize: 16\n    })), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_item, '& h5', Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      fontWeight: theme.typography.fontWeightMedium,\n      textTransform: 'uppercase'\n    }, theme.breakpoints.down('sm'), {\n      fontSize: 16\n    })), _item),\n    photo: (_photo = {\n      position: 'relative',\n      marginTop: -140,\n      background: theme.palette.common.white,\n      width: 270,\n      height: 345\n    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_photo, theme.breakpoints.down('sm'), {\n      width: 200,\n      minHeight: 200,\n      height: 'auto',\n      marginLeft: 'auto',\n      marginRight: 'auto'\n    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_photo, '& figure', {\n      margin: 0,\n      '& img': {\n        width: '100%',\n        minHeight: '100%'\n      }\n    }), _photo),\n    frame: {\n      position: 'absolute',\n      width: '90%',\n      left: '5%',\n      top: theme.spacing(2),\n      height: '105%',\n      border: '2px solid',\n      borderImageSource: \"linear-gradient(120deg, \".concat(theme.palette.secondary.main, \", \").concat(theme.palette.primary.main, \")\"),\n      borderImageSlice: 1,\n      zIndex: 10\n    },\n    socmed: {\n      display: 'flex',\n      justifyContent: 'space-evenly',\n      margin: \"\".concat(theme.spacing(4), \"px auto\"),\n      maxWidth: 600,\n      '& button': {\n        margin: theme.spacing(1, 2),\n        width: 36,\n        height: 36,\n        '& i': {\n          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark\n        }\n      },\n      '& i': {\n        fontSize: 22\n      }\n    }\n  };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (aboutStyles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Fib3V0L2Fib3V0LXN0eWxlLmpzPzAyMDkiXSwibmFtZXMiOlsiZ29sZCIsImFib3V0U3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBvc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJkb3duIiwicGFkZGluZyIsImFib3V0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ1cCIsImp1c3RpZnlDb250ZW50IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsImxpbmUiLCJib3JkZXJUb3AiLCJib3JkZXJMZWZ0IiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJib3JkZXJJbWFnZVNvdXJjZSIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwicHJpbWFyeSIsImJvcmRlckltYWdlU2xpY2UiLCJyZXdhcmQiLCJmbGV4Iiwib3ZlcmZsb3ciLCJpdGVtIiwiY29sb3IiLCJtYXJnaW4iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRNZWRpdW0iLCJ0ZXh0VHJhbnNmb3JtIiwicGhvdG8iLCJiYWNrZ3JvdW5kIiwiY29tbW9uIiwid2hpdGUiLCJtaW5IZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmcmFtZSIsImxlZnQiLCJ0b3AiLCJ6SW5kZXgiLCJzb2NtZWQiLCJtYXhXaWR0aCIsInR5cGUiLCJsaWdodCIsImRhcmsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLElBQU1BLElBQUksR0FBRyxTQUFiO0FBRUEsSUFBTUMsV0FBVyxHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQTs7QUFBQSxTQUFLO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFLFVBRE47QUFFSiwrR0FDR0YsS0FBSyxDQUFDRyxX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QUUsSUFIRDtBQUlMQyxTQUFHLEVBQUVsRCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLENBSkE7QUFLTEksWUFBTSxFQUFFLE1BTEg7QUFNTEUsWUFBTSxFQUFFLFdBTkg7QUFPTEMsdUJBQWlCLG9DQUE2QnRCLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkMsSUFBckQsZUFBOER6QixLQUFLLENBQUN1QixPQUFOLENBQWNHLE9BQWQsQ0FBc0JELElBQXBGLE1BUFo7QUFRTEUsc0JBQWdCLEVBQUUsQ0FSYjtBQVNMd0IsWUFBTSxFQUFFO0FBVEgsS0ExR2dDO0FBcUh2Q0MsVUFBTSxFQUFFO0FBQ043QyxhQUFPLEVBQUUsTUFESDtBQUVORyxvQkFBYyxFQUFFLGNBRlY7QUFHTnVCLFlBQU0sWUFBS2pDLEtBQUssQ0FBQ2UsT0FBTixDQUFjLENBQWQsQ0FBTCxZQUhBO0FBSU5zQyxjQUFRLEVBQUUsR0FKSjtBQUtOLGtCQUFZO0FBQ1ZwQixjQUFNLEVBQUVqQyxLQUFLLENBQUNlLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBREU7QUFFVkssYUFBSyxFQUFFLEVBRkc7QUFHVkQsY0FBTSxFQUFFLEVBSEU7QUFJVixlQUFPO0FBQ0xhLGVBQUssRUFBRWhDLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBYytCLElBQWQsS0FBdUIsTUFBdkIsR0FBZ0N0RCxLQUFLLENBQUN1QixPQUFOLENBQWNHLE9BQWQsQ0FBc0I2QixLQUF0RCxHQUE4RHZELEtBQUssQ0FBQ3VCLE9BQU4sQ0FBY0csT0FBZCxDQUFzQjhCO0FBRHRGO0FBSkcsT0FMTjtBQWFOLGFBQU87QUFDTDVDLGdCQUFRLEVBQUU7QUFETDtBQWJEO0FBckgrQixHQUFMO0FBQUEsQ0FBTixDQUE5QjtBQXdJZWQsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Fib3V0L2Fib3V0LXN0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5jb25zdCBnb2xkID0gJyNENkJEOTYnO1xuXG5jb25zdCBhYm91dFN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmID4gZGl2Jzoge1xuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIHBhZGRpbmc6IDBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGFib3V0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgJyYgPiBoNSc6IHtcbiAgICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg3KVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbGluZToge1xuICAgIGJvcmRlclRvcDogMCxcbiAgICBib3JkZXJMZWZ0OiAwLFxuICAgIGhlaWdodDogNDAsXG4gICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAxMzBweCknLFxuICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXG4gICAgYm9yZGVySW1hZ2VTb3VyY2U6IGBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAke3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59LCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufSlgLFxuICAgIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICByZXdhcmQ6IHtcbiAgICBmbGV4OiAxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMC41LCA3LCAwLCAwKSxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICAgIH1cbiAgfSxcbiAgaXRlbToge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IGdvbGQsXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSlcbiAgICB9LFxuICAgICcmIGZpZ3VyZSc6IHtcbiAgICAgIGhlaWdodDogNzAsXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMCwgMiksXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgfSxcbiAgICAgICcmIGltZyc6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYgcCc6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNlxuICAgICAgfVxuICAgIH0sXG4gICAgJyYgaDUnOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgICBmb250U2l6ZTogMTZcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBwaG90bzoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpblRvcDogLTE0MCxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICB3aWR0aDogMjcwLFxuICAgIGhlaWdodDogMzQ1LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIG1pbkhlaWdodDogMjAwLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gICAgfSxcbiAgICAnJiBmaWd1cmUnOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICAnJiBpbWcnOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZnJhbWU6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzkwJScsXG4gICAgbGVmdDogJzUlJyxcbiAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgaGVpZ2h0OiAnMTA1JScsXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICBib3JkZXJJbWFnZVNvdXJjZTogYGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICR7dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbn0sICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59KWAsXG4gICAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgICB6SW5kZXg6IDEwLFxuICB9LFxuICBzb2NtZWQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuICAgIG1hcmdpbjogYCR7dGhlbWUuc3BhY2luZyg0KX1weCBhdXRvYCxcbiAgICBtYXhXaWR0aDogNjAwLFxuICAgICcmIGJ1dHRvbic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAyKSxcbiAgICAgIHdpZHRoOiAzNixcbiAgICAgIGhlaWdodDogMzYsXG4gICAgICAnJiBpJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAgIH1cbiAgICB9LFxuICAgICcmIGknOiB7XG4gICAgICBmb250U2l6ZTogMjJcbiAgICB9XG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0U3R5bGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/About/about-style.js\n");

/***/ })

})