require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(320);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9d9bad5a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(326);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(321)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9d9bad5a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9d9bad5a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d9bad5a", Component.options)
  } else {
    hotAPI.reload("data-v-9d9bad5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 321:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MenusList__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_store__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// import queryVoucher from 'voucher.service'
// import VoucherItem from '../voucher/HealthCardItem'

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      voucherList: [],
      showVoucherList: false
    };
  },
  components: {
    MenuList: __WEBPACK_IMPORTED_MODULE_0__components_MenusList__["a" /* default */]
  },
  // 从自定义菜单中点击进入是获取code
  onLoad: function onLoad() {
    wx.login({
      success: function success(res) {
        if (res.code) {
          console.log(res.code);
          Object(__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* login */])({ loginType: '3', code: res.code }).then(function (result) {
            console.log(result);
            Object(__WEBPACK_IMPORTED_MODULE_2__utils_store__["b" /* setItem */])('token', result.tokenId);
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
    // this.getVoucherList()
  },

  methods: {}
});

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('div', {
    staticClass: "app-content"
  }, [(_vm.showVoucherList) ? _c('div', {
    staticClass: "banner"
  }, [_c('img', {
    attrs: {
      "src": _vm.constant.LOCAL_IMG + 'banner.png',
      "alt": ""
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.toPage('checkInformation')
      }
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "index-content"
  }, [_c('menu-list', {
    attrs: {
      "type": 'mainService',
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('menu-list', {
    attrs: {
      "type": 'multipleService',
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('menu-list', {
    attrs: {
      "type": 'hospitalService',
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('menu-list', {
    attrs: {
      "type": 'otherService',
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user-btn"
  }, [_c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.toPage('userCenter')
      }
    }
  }, [_vm._v("前往个人中心>")])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9d9bad5a", esExports)
  }
}

/***/ })

},[319]);