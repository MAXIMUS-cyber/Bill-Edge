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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Calculator = ()=>{\n    _s();\n    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [num1, setNum1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [num2, setNum2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toggleDarkMode = ()=>{\n        setIsDarkMode((prevMode)=>!prevMode);\n        document.documentElement.classList.toggle(\"dark\");\n    };\n    function calculateSum() {\n        const n1 = parseFloat(num1);\n        const n2 = parseFloat(num2);\n        const res = n1 + n2;\n        setResult();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-gradient-to-r \".concat(isDarkMode ? \"from-gray-800 via-gray-700 to-gray-600\" : \"from-purple-500 via-pink-500 to-red-500\", \" min-h-screen flex items-center justify-center\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white \".concat(isDarkMode ? \"via-gray-700\" : \"\", \" p-8 rounded-lg shadow-lg w-full md:max-w-md\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold mb-6 text-center \".concat(isDarkMode ? \"text-white\" : \"text-gray-800\"),\n                        children: \"Calculator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"num1\",\n                                className: \"text-lg font-semibold \".concat(isDarkMode ? \"text-gray-300\" : \"text-gray-800\"),\n                                children: \"Number 1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"num1\",\n                                value: num1,\n                                onChange: (e)=>setNum1(e.target.value),\n                                className: \"w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg \".concat(isDarkMode ? \"dark:bg-gray-700\" : \"\"),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"num2\",\n                                className: \"text-lg font-semibold \".concat(isDarkMode ? \"text-gray-300\" : \"text-gray-800\"),\n                                children: \"Number 2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                id: \"num2\",\n                                value: num2,\n                                onChange: (e)=>setNum2(e.target.value),\n                                className: \"w-full border-b-2 border-gray-400 focus:border-purple-500 px-4 py-2 focus:outline-none text-lg \".concat(isDarkMode ? \"dark:bg-gray-700\" : \"\"),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: calculateSum,\n                        className: \"w-full bg-gradient-to-r \".concat(isDarkMode ? \"from-gray-600 to-gray-500\" : \"from-purple-600 to-pink-600\", \" text-white font-semibold rounded-lg py-3 mt-6 transition duration-300 ease-in-out hover:\").concat(isDarkMode ? \"from-gray-700 to-gray-600\" : \"from-purple-700 to-pink-700\"),\n                        children: \"Calculate Sum\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6 text-center \".concat(isDarkMode ? \"text-gray-300\" : \"text-gray-700\"),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-4 right-4 z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: toggleDarkMode,\n                    className: \"text-lg cursor-pointer \".concat(isDarkMode ? \"text-yellow-500\" : \"text-gray-800\"),\n                    children: isDarkMode ? \"☀️\" : \"\\uD83C\\uDF19\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kumarswapnil\\\\Documents\\\\BillE\\\\BILLE5\\\\bille5\\\\src\\\\app\\\\components\\\\Calculator.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Calculator, \"+m664nVl/dA7WiekaMH6DLKq/h0=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYWxjdWxhdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUM7QUFDUDtBQUkxQixNQUFNRSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0osK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFFckMsTUFBTVcsaUJBQWlCO1FBQ3JCUCxjQUFjLENBQUNRLFdBQWEsQ0FBQ0E7UUFDN0JDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUM7SUFDNUM7SUFFQSxTQUFTQztRQUNQLE1BQU1DLEtBQUtDLFdBQVdkO1FBQ3RCLE1BQU1lLEtBQUtELFdBQVdaO1FBQ3RCLE1BQU1jLE1BQU1ILEtBQUtFO1FBQ2pCVjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNZO1FBQUtDLFdBQVcsb0JBQXFILE9BQWpHcEIsYUFBWSwyQ0FBMkMsMkNBQTBDOzswQkFDcEksOERBQUNxQjtnQkFBSUQsV0FBVyxZQUE2QyxPQUFqQ3BCLGFBQWEsaUJBQWlCLElBQUc7O2tDQUMzRCw4REFBQ3NCO3dCQUFHRixXQUFXLHVDQUFtRixPQUE1Q3BCLGFBQWEsZUFBZTtrQ0FBbUI7Ozs7OztrQ0FDckcsOERBQUNxQjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFNQyxTQUFRO2dDQUFPSixXQUFXLHlCQUF3RSxPQUEvQ3BCLGFBQWEsa0JBQWtCOzBDQUFtQjs7Ozs7OzBDQUM1Ryw4REFBQ3lCO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxPQUFPMUI7Z0NBQ1AyQixVQUFVLENBQUNDLElBQU0zQixRQUFRMkIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUN2Q1IsV0FBVyxrR0FBdUksT0FBckNwQixhQUFhLHFCQUFxQjtnQ0FDL0lnQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNYO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQU1DLFNBQVE7Z0NBQU9KLFdBQVcseUJBQXdFLE9BQS9DcEIsYUFBYSxrQkFBa0I7MENBQW1COzs7Ozs7MENBQzVHLDhEQUFDeUI7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU94QjtnQ0FDUHlCLFVBQVUsQ0FBQ0MsSUFBTXpCLFFBQVF5QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQ3ZDUixXQUFXLGtHQUF1SSxPQUFyQ3BCLGFBQWEscUJBQXFCO2dDQUMvSWdDLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ0M7d0JBQ0NDLFNBQVNwQjt3QkFDVE0sV0FBVywyQkFBK0xwQixPQUFwS0EsYUFBYSw4QkFBOEIsK0JBQThCLDZGQUFvSyxPQUF6RUEsYUFBYSw4QkFBOEI7a0NBQ3RQOzs7Ozs7a0NBR0QsOERBQUNxQjt3QkFBSUQsV0FBVyxvQkFBbUUsT0FBL0NwQixhQUFhLGtCQUFrQjtrQ0FDaEVNOzs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNlO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDYTtvQkFDQ0MsU0FBUzFCO29CQUNUWSxXQUFXLDBCQUVWLE9BRENwQixhQUFhLG9CQUFvQjs4QkFHbENBLGFBQWEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLL0I7R0FqRU1EO0tBQUFBO0FBbUVOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DYWxjdWxhdG9yLnRzeD84M2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1N1bX0gZnJvbSAnLi9TdW0nXHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG5cclxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0SXNEYXJrTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW251bTEsIHNldE51bTFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW251bTIsIHNldE51bTJdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgIHNldElzRGFya01vZGUoKHByZXZNb2RlKSA9PiAhcHJldk1vZGUpO1xyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVN1bSgpe1xyXG4gICAgY29uc3QgbjEgPSBwYXJzZUZsb2F0KG51bTEpXHJcbiAgICBjb25zdCBuMiA9IHBhcnNlRmxvYXQobnVtMilcclxuICAgIGNvbnN0IHJlcyA9IG4xICsgbjJcclxuICAgIHNldFJlc3VsdCgpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e2BiZy1ncmFkaWVudC10by1yICR7aXNEYXJrTW9kZSA/XCJmcm9tLWdyYXktODAwIHZpYS1ncmF5LTcwMCB0by1ncmF5LTYwMFwiIDogXCJmcm9tLXB1cnBsZS01MDAgdmlhLXBpbmstNTAwIHRvLXJlZC01MDBcIn0gbWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyYH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctd2hpdGUgJHtpc0RhcmtNb2RlID8gXCJ2aWEtZ3JheS03MDBcIiA6IFwiXCJ9IHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgbWQ6bWF4LXctbWRgfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGV4dC00eGwgZm9udC1ib2xkIG1iLTYgdGV4dC1jZW50ZXIgJHtpc0RhcmtNb2RlID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtZ3JheS04MDBcIn1gfT5DYWxjdWxhdG9yPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibnVtMVwiIGNsYXNzTmFtZT17YHRleHQtbGcgZm9udC1zZW1pYm9sZCAke2lzRGFya01vZGUgPyBcInRleHQtZ3JheS0zMDBcIiA6IFwidGV4dC1ncmF5LTgwMFwifWB9Pk51bWJlciAxPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgaWQ9XCJudW0xXCJcclxuICAgICAgICAgICAgdmFsdWU9e251bTF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TnVtMShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTQwMCBmb2N1czpib3JkZXItcHVycGxlLTUwMCBweC00IHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtbGcgJHtpc0RhcmtNb2RlID8gXCJkYXJrOmJnLWdyYXktNzAwXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJudW0yXCIgY2xhc3NOYW1lPXtgdGV4dC1sZyBmb250LXNlbWlib2xkICR7aXNEYXJrTW9kZSA/IFwidGV4dC1ncmF5LTMwMFwiIDogXCJ0ZXh0LWdyYXktODAwXCJ9YH0+TnVtYmVyIDI8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cIm51bTJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bnVtMn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROdW0yKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktNDAwIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwIHB4LTQgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC1sZyAke2lzRGFya01vZGUgPyBcImRhcms6YmctZ3JheS03MDBcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17Y2FsY3VsYXRlU3VtfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXIgJHtpc0RhcmtNb2RlID8gXCJmcm9tLWdyYXktNjAwIHRvLWdyYXktNTAwXCIgOiBcImZyb20tcHVycGxlLTYwMCB0by1waW5rLTYwMFwifSB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcm91bmRlZC1sZyBweS0zIG10LTYgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6JHtpc0RhcmtNb2RlID8gXCJmcm9tLWdyYXktNzAwIHRvLWdyYXktNjAwXCIgOiBcImZyb20tcHVycGxlLTcwMCB0by1waW5rLTcwMFwifWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2FsY3VsYXRlIFN1bVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbXQtNiB0ZXh0LWNlbnRlciAke2lzRGFya01vZGUgPyBcInRleHQtZ3JheS0zMDBcIiA6IFwidGV4dC1ncmF5LTcwMFwifWB9PlxyXG4gICAgICAgICAge3Jlc3VsdH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB6LTEwXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWxnIGN1cnNvci1wb2ludGVyICR7XHJcbiAgICAgICAgICAgIGlzRGFya01vZGUgPyBcInRleHQteWVsbG93LTUwMFwiIDogXCJ0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0RhcmtNb2RlID8gXCLimIDvuI9cIiA6IFwi8J+MmVwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUmVhY3QiLCJDYWxjdWxhdG9yIiwiaXNEYXJrTW9kZSIsInNldElzRGFya01vZGUiLCJudW0xIiwic2V0TnVtMSIsIm51bTIiLCJzZXROdW0yIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwidG9nZ2xlRGFya01vZGUiLCJwcmV2TW9kZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2FsY3VsYXRlU3VtIiwibjEiLCJwYXJzZUZsb2F0IiwibjIiLCJyZXMiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Calculator.tsx\n"));

/***/ })

});