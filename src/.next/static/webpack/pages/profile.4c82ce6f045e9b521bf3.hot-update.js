webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "../node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");




var Picture = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "profile__Picture",
  componentId: "sc-1jeyod7-0"
})(["border-radius:50%;border:3px solid white;width:100px;"]);
_c = Picture;
var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "profile__StyledContainer",
  componentId: "sc-1jeyod7-1"
})(["overflow:hidden;"]);
_c2 = StyledContainer;
var StyledLi = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "profile__StyledLi",
  componentId: "sc-1jeyod7-2"
})(["text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]);
_c3 = StyledLi;

function Profile(_ref) {
  var user = _ref.user;
  console.log(user);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(StyledContainer, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h2", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Picture, {
        src: user.picture,
        alt: user.displayName
      }), " Hello, ", user.displayName]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
      children: "This is what we know about you:"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
      children: Object.keys(user).map(function (key) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(StyledLi, {
          children: [key, ": ", user[key].toString()]
        }, key);
      })
    })]
  });
}

_c4 = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Picture");
$RefreshReg$(_c2, "StyledContainer");
$RefreshReg$(_c3, "StyledLi");
$RefreshReg$(_c4, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiUGljdHVyZSIsInN0eWxlZCIsImltZyIsIlN0eWxlZENvbnRhaW5lciIsImRpdiIsIlN0eWxlZExpIiwibGkiLCJQcm9maWxlIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwaWN0dXJlIiwiZGlzcGxheU5hbWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkRBQWI7S0FBTUYsTztBQU1OLElBQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBckI7TUFBTUQsZTtBQUdOLElBQU1FLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSxrRUFBZDtNQUFNRCxROztBQU1OLFNBQVNFLE9BQVQsT0FBc0M7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1CO0FBQ2xDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLHNCQUNJLCtEQUFDLGVBQUQ7QUFBQSw0QkFDSTtBQUFBLDhCQUNJLDhEQUFDLE9BQUQ7QUFBUyxXQUFHLEVBQUVBLElBQUksQ0FBQ0csT0FBbkI7QUFBNEIsV0FBRyxFQUFFSCxJQUFJLENBQUNJO0FBQXRDLFFBREosY0FDa0VKLElBQUksQ0FBQ0ksV0FEdkU7QUFBQSxNQURKLGVBSUk7QUFBQTtBQUFBLE1BSkosZUFLSTtBQUFBLGdCQUNNQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sSUFBWixFQUFrQk8sR0FBbEIsQ0FBc0IsVUFBQUMsR0FBRztBQUFBLDRCQUN2QiwrREFBQyxRQUFEO0FBQUEscUJBQXFCQSxHQUFyQixRQUE0QlIsSUFBSSxDQUFDUSxHQUFELENBQUosQ0FBVUMsUUFBVixFQUE1QjtBQUFBLFdBQWVELEdBQWYsQ0FEdUI7QUFBQSxPQUF6QjtBQUROLE1BTEo7QUFBQSxJQURKO0FBYUg7O01BZlFULE87QUFpQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNGM4MmNlNmYwNDVlOWI1MjFiZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQcm9wc1VzZXJ9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1Byb3BzVXNlclwiO1xyXG5cclxuY29uc3QgUGljdHVyZSA9IHN0eWxlZC5pbWdgXHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcbmNvbnN0IFN0eWxlZExpID0gc3R5bGVkLmxpYFxyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSh7IHVzZXIgfTogUHJvcHNVc2VyKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPFBpY3R1cmUgc3JjPXt1c2VyLnBpY3R1cmV9IGFsdD17dXNlci5kaXNwbGF5TmFtZX0gLz4gSGVsbG8sIHt1c2VyLmRpc3BsYXlOYW1lfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cD5UaGlzIGlzIHdoYXQgd2Uga25vdyBhYm91dCB5b3U6PC9wPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7IE9iamVjdC5rZXlzKHVzZXIpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRMaSBrZXk9e2tleX0+e2tleX06IHt1c2VyW2tleV0udG9TdHJpbmcoKX08L1N0eWxlZExpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9TdHlsZWRDb250YWluZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=