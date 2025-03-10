require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([7],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(299);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_88c4fcc8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(308);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(300)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-88c4fcc8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_88c4fcc8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/hospitalArea/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88c4fcc8", Component.options)
  } else {
    hotAPI.reload("data-v-88c4fcc8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 300:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hisHospital__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NavList__ = __webpack_require__(130);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      navList: [{
        imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/7799fa0f40cf02ec80db911489062db2.png',
        name: '市级医院',
        url: '1'
      }, {
        imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/7e2db8f940edfadb8092a05016fa6ced.png',
        name: '区县医院',
        url: '2'
      }, {
        imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/1184c2a34041b73d800a8992935975e6.png',
        name: '社区医院',
        url: '3'
      }],
      waitUrl: ''
    };
  },
  components: {
    hisHospital: __WEBPACK_IMPORTED_MODULE_0__components_hisHospital__["a" /* default */],
    NavList: __WEBPACK_IMPORTED_MODULE_1__components_NavList__["a" /* default */]
  },
  onLoad: function onLoad() {
    //  接收要进入的页面url
    var q = this.$root.$mp.query;
    this.waitUrl = q.waitUrl ? q.waitUrl : 'departDoctor';
  },

  methods: {
    toContinue: function toContinue() {
      if (this.waitUrl === 'noredirect') {
        this.$utils.back();
        return;
      }
      global.mpvue.redirectTo({
        url: '../' + this.waitUrl + '/main'
      });
    },
    toPage: function toPage(e) {
      //  跳转到对应的界面
      if (e) {
        //  选择了区域,将值传入选择二级医院页面
        global.mpvue.navigateTo({
          url: '../hospitalSelect/main?id=' + e + '&waitUrl=' + this.waitUrl
        });
      }
    }
  }
});

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hospitalSelect container"
  }, [_c('hisHospital', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "toPage": _vm.toContinue
    }
  }), _vm._v(" "), _c('Nav-List', {
    attrs: {
      "navList": _vm.navList,
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "toPage": _vm.toPage
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-88c4fcc8", esExports)
  }
}

/***/ })

},[298]);