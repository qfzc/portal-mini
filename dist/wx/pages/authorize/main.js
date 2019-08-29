require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(268);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f6fc16ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(287);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(269)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f6fc16ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f6fc16ac_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/authorize/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6fc16ac", Component.options)
  } else {
    hotAPI.reload("data-v-f6fc16ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 269:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_store__ = __webpack_require__(17);


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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      info: {},
      path: '',
      code: '',
      callback: null
    };
  },
  components: {
    // NavBar
  },
  computed: {
    // customTop () {
    //   return this.$utils.getCustomeHeigth()
    // }
  },
  onLoad: function onLoad() {
    // let q = this.$root.$mp.query
    // q.callback && (this.callback = q.callback)
    this.toLogin();
  },

  methods: {
    toLogin: function toLogin() {
      var _this = this;
      wx.login({
        success: function success(res) {
          if (res.code) {
            _this.code = res.code;
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    },
    getuserinfo: function getuserinfo(e) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var userInfo, params, res, callback;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.mp.detail.errMsg !== 'getUserInfo:ok')) {
                  _context.next = 3;
                  break;
                }

                _this2.$utils.back();
                return _context.abrupt('return');

              case 3:
                //  调用解密接口,创建新用户,本地保存用户信息
                userInfo = e.mp.detail.userInfo;
                params = {
                  nickname: userInfo.nickName,
                  js_code: _this2.code,
                  avatar: userInfo.avatarUrl
                };
                _context.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* linkUser */])(params);

              case 7:
                res = _context.sent;

                if (res.code === 1) {
                  //  保存用户id
                  userInfo.userId = res.data;
                  Object(__WEBPACK_IMPORTED_MODULE_3__utils_store__["b" /* setItem */])('userId', res.data);
                  Object(__WEBPACK_IMPORTED_MODULE_3__utils_store__["b" /* setItem */])('userInfo', userInfo);
                  _this2.$store.commit('setUserInfo', userInfo);
                }
                callback = _this2.$store.state.callback;

                if (callback) {
                  callback();
                  // eval(this.callback)
                } else {
                  _this2.$utils.back();
                }
                // let toPath = this.path ? this.path : 'main'
                // let type = toPath === 'main' ? 3 : 2
                // this.$utils.navigateTo(toPath, {}, type)

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linkUser;
/* unused harmony export getSlide */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(45);


//  关联用户
function linkUser(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["b" /* post */])('/user/link', params);
}
//  获取slide
function getSlide() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/slide/list');
}

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about"
  }, [_c('div', {
    staticClass: "about-content"
  }, [_c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "area"
  }, [_c('h4', [_vm._v("该程序将获取以下授权")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("· 获得您的公开信息（昵称头像等）")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "authorize-btn"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.getuserinfo
    }
  }, [_vm._v("同意授权")])], 1)])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f6fc16ac", esExports)
  }
}

/***/ })

},[267]);