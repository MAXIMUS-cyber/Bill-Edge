"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Calculator.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/Calculator.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Calculator = ()=>{\n    _s();\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [num1, setNum1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [num2, setNum2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toggleDarkMode = ()=>{\n        setIsDarkMode((prevMode)=>!prevMode);\n        document.documentElement.classList.toggle(\"dark\");\n    };\n    function calculateSum() {\n        const n1 = parseFloat(num1);\n        const n2 = parseFloat();\n        setResult();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gradient-to-r \".concat(isDarkMode ? \"from-gray-800 via-gray-700 to-gray-600\" : \"from-purple-500 via-pink-500 to-red-500\", \" min-h-screen flex items-center justify-center\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white \".concat(isDarkMode ? \"via-gray-700\" : \"\", \" p-8 rounded-lg shadow-lg w-full md:max-w-md\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-6 text-center \".concat(isDarkMode ? \"text-white\" : \"text-gray-800\"),\n                        children: \"Calculator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"num1\",\n                                className: \"text-lg font-semibold \".concat(isDarkMode ? \"text-gray-300\" : \"text-gray-800\"),\n                                children: \"Number 1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"num1\",\n                                value: num1,\n                                onChange: (e)=>setNum1(e.target.value),\n                                className: \"w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg \".concat(isDarkMode ? \"dark:bg-gray-700\" : \"\"),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"num2\",\n                                className: \"text-lg font-semibold \".concat(isDarkMode ? \"text-gray-300\" : \"text-gray-800\"),\n                                children: \"Number 2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"num2\",\n                                value: num2,\n                                onChange: (e)=>setNum2(e.target.value),\n                                className: \"w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg \".concat(isDarkMode ? \"dark:bg-gray-700\" : \"\"),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: calculateSum,\n                        className: \"w-full bg-gradient-to-r \".concat(isDarkMode ? \"from-gray-600 to-gray-500\" : \"from-purple-600 to-pink-600\", \" text-white font-semibold rounded-lg py-3 mt-6 transition duration-300 ease-in-out hover:\").concat(isDarkMode ? \"from-gray-700 to-gray-600\" : \"from-purple-700 to-pink-700\"),\n                        children: \"Calculate Sum\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 text-center \".concat(isDarkMode ? \"text-gray-300\" : \"text-gray-700\"),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-4 right-4 z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleDarkMode,\n                    className: \"text-lg cursor-pointer \".concat(isDarkMode ? \"text-yellow-500\" : \"text-gray-800\"),\n                    children: isDarkMode ? \"☀️\" : \"\\uD83C\\uDF19\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Calculator, \"+m664nVl/dA7WiekaMH6DLKq/h0=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYWxjdWxhdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUM7QUFDUDtBQUkxQixNQUFNRSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFFckMsTUFBTVcsaUJBQWlCO1FBQ3JCUCxjQUFjLENBQUNRLFdBQWEsQ0FBQ0E7UUFDN0JDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUM7SUFDNUM7SUFFQSxTQUFTQztRQUNQLE1BQU1DLEtBQUtDLFdBQVdkO1FBQ3RCLE1BQU1lLEtBQUtEO1FBQ1hUO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ1c7UUFBS0MsV0FBVyxvQkFBcUgsT0FBakduQixhQUFZLDJDQUEyQywyQ0FBMEM7OzBCQUNwSSw4REFBQ29CO2dCQUFJRCxXQUFXLFlBQTZDLE9BQWpDbkIsYUFBYSxpQkFBaUIsSUFBRzs7a0NBQzNELDhEQUFDcUI7d0JBQUdGLFdBQVcsdUNBQW1GLE9BQTVDbkIsYUFBYSxlQUFlO2tDQUFtQjs7Ozs7O2tDQUNyRyw4REFBQ29CO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQU1DLFNBQVE7Z0NBQU9KLFdBQVcseUJBQXdFLE9BQS9DbkIsYUFBYSxrQkFBa0I7MENBQW1COzs7Ozs7MENBQzVHLDhEQUFDd0I7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU96QjtnQ0FDUDBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFFBQVEwQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQ3ZDUixXQUFXLGtHQUF1SSxPQUFyQ25CLGFBQWEscUJBQXFCO2dDQUMvSStCLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ1g7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FBTUMsU0FBUTtnQ0FBT0osV0FBVyx5QkFBd0UsT0FBL0NuQixhQUFhLGtCQUFrQjswQ0FBbUI7Ozs7OzswQ0FDNUcsOERBQUN3QjtnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsT0FBT3ZCO2dDQUNQd0IsVUFBVSxDQUFDQyxJQUFNeEIsUUFBUXdCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDdkNSLFdBQVcsa0dBQXVJLE9BQXJDbkIsYUFBYSxxQkFBcUI7Z0NBQy9JK0IsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDQzt3QkFDQ0MsU0FBU25CO3dCQUNUSyxXQUFXLDJCQUErTG5CLE9BQXBLQSxhQUFhLDhCQUE4QiwrQkFBOEIsNkZBQW9LLE9BQXpFQSxhQUFhLDhCQUE4QjtrQ0FDdFA7Ozs7OztrQ0FHRCw4REFBQ29CO3dCQUFJRCxXQUFXLG9CQUFtRSxPQUEvQ25CLGFBQWEsa0JBQWtCO2tDQUNoRU07Ozs7Ozs7Ozs7OzswQkFHTCw4REFBQ2M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNhO29CQUNDQyxTQUFTekI7b0JBQ1RXLFdBQVcsMEJBRVYsT0FEQ25CLGFBQWEsb0JBQW9COzhCQUdsQ0EsYUFBYSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQjtHQWhFTUQ7S0FBQUE7QUFrRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0NhbGN1bGF0b3IudHN4PzgzZmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7U3VtfSBmcm9tICcuL1N1bSdcclxuaW1wb3J0IHsgcGFyc2UgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XHJcblxyXG5jb25zdCBDYWxjdWxhdG9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0RhcmtNb2RlLCBzZXRJc0RhcmtNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbnVtMSwgc2V0TnVtMV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbnVtMiwgc2V0TnVtMl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNEYXJrTW9kZSgocHJldk1vZGUpID0+ICFwcmV2TW9kZSk7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gY2FsY3VsYXRlU3VtKCl7XHJcbiAgICBjb25zdCBuMSA9IHBhcnNlRmxvYXQobnVtMSlcclxuICAgIGNvbnN0IG4yID0gcGFyc2VGbG9hdCgpXHJcbiAgICBzZXRSZXN1bHQoKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtgYmctZ3JhZGllbnQtdG8tciAke2lzRGFya01vZGUgP1wiZnJvbS1ncmF5LTgwMCB2aWEtZ3JheS03MDAgdG8tZ3JheS02MDBcIiA6IFwiZnJvbS1wdXJwbGUtNTAwIHZpYS1waW5rLTUwMCB0by1yZWQtNTAwXCJ9IG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJnLXdoaXRlICR7aXNEYXJrTW9kZSA/IFwidmlhLWdyYXktNzAwXCIgOiBcIlwifSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIG1kOm1heC13LW1kYH0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YHRleHQtNHhsIGZvbnQtYm9sZCBtYi02IHRleHQtY2VudGVyICR7aXNEYXJrTW9kZSA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWdyYXktODAwXCJ9YH0+Q2FsY3VsYXRvcjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm51bTFcIiBjbGFzc05hbWU9e2B0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgJHtpc0RhcmtNb2RlID8gXCJ0ZXh0LWdyYXktMzAwXCIgOiBcInRleHQtZ3JheS04MDBcIn1gfT5OdW1iZXIgMTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGlkPVwibnVtMVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtudW0xfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE51bTEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgYm9yZGVyLWItMiBib3JkZXItZ3JheS00MDAgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDAgcHgtNCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LWxnICR7aXNEYXJrTW9kZSA/IFwiZGFyazpiZy1ncmF5LTcwMFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtMlwiIGNsYXNzTmFtZT17YHRleHQtbGcgZm9udC1zZW1pYm9sZCAke2lzRGFya01vZGUgPyBcInRleHQtZ3JheS0zMDBcIiA6IFwidGV4dC1ncmF5LTgwMFwifWB9Pk51bWJlciAyPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJudW0yXCJcclxuICAgICAgICAgICAgdmFsdWU9e251bTJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtMihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTQwMCBmb2N1czpib3JkZXItcHVycGxlLTUwMCBweC00IHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtbGcgJHtpc0RhcmtNb2RlID8gXCJkYXJrOmJnLWdyYXktNzAwXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2NhbGN1bGF0ZVN1bX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBiZy1ncmFkaWVudC10by1yICR7aXNEYXJrTW9kZSA/IFwiZnJvbS1ncmF5LTYwMCB0by1ncmF5LTUwMFwiIDogXCJmcm9tLXB1cnBsZS02MDAgdG8tcGluay02MDBcIn0gdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgcHktMyBtdC02IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOiR7aXNEYXJrTW9kZSA/IFwiZnJvbS1ncmF5LTcwMCB0by1ncmF5LTYwMFwiIDogXCJmcm9tLXB1cnBsZS03MDAgdG8tcGluay03MDBcIn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENhbGN1bGF0ZSBTdW1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG10LTYgdGV4dC1jZW50ZXIgJHtpc0RhcmtNb2RlID8gXCJ0ZXh0LWdyYXktMzAwXCIgOiBcInRleHQtZ3JheS03MDBcIn1gfT5cclxuICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0xMFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhcmtNb2RlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1sZyBjdXJzb3ItcG9pbnRlciAke1xyXG4gICAgICAgICAgICBpc0RhcmtNb2RlID8gXCJ0ZXh0LXllbGxvdy01MDBcIiA6IFwidGV4dC1ncmF5LTgwMFwiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNEYXJrTW9kZSA/IFwi4piA77iPXCIgOiBcIvCfjJlcIn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlYWN0IiwiQ2FsY3VsYXRvciIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwibnVtMSIsInNldE51bTEiLCJudW0yIiwic2V0TnVtMiIsInJlc3VsdCIsInNldFJlc3VsdCIsInRvZ2dsZURhcmtNb2RlIiwicHJldk1vZGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNhbGN1bGF0ZVN1bSIsIm4xIiwicGFyc2VGbG9hdCIsIm4yIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Calculator.tsx\n"));

/***/ })

});