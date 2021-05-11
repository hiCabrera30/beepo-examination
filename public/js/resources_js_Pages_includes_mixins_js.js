(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_includes_mixins_js"],{

/***/ "./resources/js/Pages/includes/mixins.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/includes/mixins.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mixins": () => (/* binding */ mixins)
/* harmony export */ });
var mixins = {
  methods: {
    inititalizePageTitle: function inititalizePageTitle() {
      if (this.pageTitle) {
        document.title = this.pageTitle;
      }
    },
    displayValidationErrors: function displayValidationErrors(refs, error) {
      for (var field in error) {
        if (refs[field]) {
          refs[field].error = error[field];
        }
      }
    }
  },
  mounted: function mounted() {
    this.inititalizePageTitle();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mixins);


/***/ })

}]);