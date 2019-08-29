require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(310);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d6eaa4b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(318);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(311)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d6eaa4b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1d6eaa4b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/hospitalSelect/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d6eaa4b", Component.options)
  } else {
    hotAPI.reload("data-v-1d6eaa4b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hisHospital__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_NavList__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_NoRecord__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_hospital_service__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_store__ = __webpack_require__(17);


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






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      waitUrl: '',
      hospitalList: [],
      searchKey: '',
      showArea: false,
      hosAreaList: [],
      tempHosInfo: {}
    };
  },
  components: {
    hisHospital: __WEBPACK_IMPORTED_MODULE_2__components_hisHospital__["a" /* default */],
    NavList: __WEBPACK_IMPORTED_MODULE_3__components_NavList__["a" /* default */],
    NoRecord: __WEBPACK_IMPORTED_MODULE_4__components_NoRecord__["a" /* default */]
  },
  onShow: function onShow() {
    //  获取传过来的区域id及待进入的页面url
    var q = this.$root.$mp.query;
    this.waitUrl = q.waitUrl;
    if (q.id) {
      this.getHospitalList(q.id);
    }
  },

  methods: {
    selectArea: function selectArea(item) {
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_store__["b" /* setItem */])('selectedHospital', this.tempHosInfo);
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_store__["b" /* setItem */])('selectedArea', item);
      this.go(item.areaId);
    },
    inputBlur: function inputBlur() {
      if (this.searchKey !== '' && this.searchKey.length > 0) {
        this.search();
      } else {
        this.hospitalList = this.$store.getters.getHospitalList;
      }
    },
    search: function search(e) {
      if (this.searchKey === '' || this.searchKey === undefined || this.searchKey.length === 0) {
        this.hospitalList = this.$store.getters.getHospitalList;
        return;
      }
      this.$utils.throttle(this.formatHosList, 1000, 1000)();
    },
    formatHosList: function formatHosList() {
      // if(this.hospitalList.length === 0) return
      var temp = [];
      var key = this.searchKey;
      var lists = this.$store.getters.getHospitalList;
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].name.indexOf(key) >= 0) {
          temp.push(lists[i]);
        }
      }
      this.hospitalList = temp;
    },

    //  选择医院
    selectHospital: function selectHospital(item) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var areaList, areaId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_5__service_hospital_service__["a" /* getHospitalArea */])({
                  orgId: item.orgId,
                  hospitalId: item.id
                });

              case 2:
                areaList = _context.sent;

                if (areaList.resultCode === _this.constant.RESULT_SUCCESS) {
                  //  todo 显示区域列表(如果有的话) ,目前还没做
                  if (areaList.data.length > 1) {
                    //  todo
                    _this.hosAreaList = areaList.data;
                    _this.showArea = true;
                    _this.tempHosInfo = item;
                  } else if (areaList.data.length === 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_6__utils_store__["b" /* setItem */])('selectedHospital', item);
                    Object(__WEBPACK_IMPORTED_MODULE_6__utils_store__["b" /* setItem */])('selectedArea', areaList.data[0]);
                    // if(!!areaList.data && areaList.data.length > 0){
                    //   setItem('selectedArea',areaList.data[0])
                    //   areaId = areaList.data[0].areaId
                    // }else{
                    //   areaId = item.areaLevel
                    // }
                    //  todo 根据不同的路径 返回方式不一样
                    // if(this.waitUrl === 'noredirect'){
                    //   this.$utils.back(2)
                    //   return
                    // }
                    areaId = areaList.data[0].areaId;

                    _this.go(areaId);
                    // mpvue.redirectTo({
                    //   url: '../' + this.waitUrl +'/main?areaId=' + areaId
                    // })
                  } else {
                    _this.$utils.showToast('暂未找到院区');
                  }
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    go: function go(areaId) {
      if (this.waitUrl === 'noredirect') {
        this.$utils.back(2);
        return;
      }
      var url = '../' + this.waitUrl + '/main';
      if (areaId) {
        url = url + '?areaId=' + areaId;
      }
      global.mpvue.redirectTo({
        url: url
      });
    },

    //  获取医院列表
    getHospitalList: function getHospitalList(id) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var data, res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = {
                  areaLevel: id,
                  orgId: '1001'
                };
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_5__service_hospital_service__["b" /* getHospitalByArea */])(data);

              case 3:
                res = _context2.sent;

                if (res.resultCode === '1') {
                  _this2.hospitalList = res.data;
                  //  将数据保存在vuex中
                  _this2.$store.commit('setHospitalList', res.data);
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    toContinue: function toContinue(e) {
      this.go();
      // mpvue.redirectTo({
      //   url: '../'+ this.waitUrl+'/main'
      // })
    }
  }
});

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_NoRecord_vue__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_24408518_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_NoRecord_vue__ = __webpack_require__(316);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(314)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24408518"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_NoRecord_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_24408518_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_NoRecord_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/NoRecord.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NoRecord.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24408518", Component.options)
  } else {
    hotAPI.reload("data-v-24408518", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 314:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

// const existData = function (data) {
//   if (data === this.constant.ARRAY_CLEAN) {
//     return true
//   }

//   if (typeof data === 'boolean') {
//     return data
//   } else if (data instanceof Array) {
//     return data.length !== 0
//   } else {
//     return !!data
//   }
// }
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    condition: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    tips: {
      type: String,
      default: function _default() {
        return '没有找到相关数据';
      }
    }
  },
  data: function data() {
    return {
      isShow: false,
      origin: []
    };
  }
  // watch: {
  //   condition (val) {
  //     this.isShow = !existData.call(this, val)
  //   }
  // }

});

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.condition),
      expression: "condition"
    }],
    staticClass: "noData-pic"
  }, [_c('p', {
    staticClass: "noData-text"
  }, [_vm._v(_vm._s(_vm.tips))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24408518", esExports)
  }
}

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getHospitalByArea;
/* harmony export (immutable) */ __webpack_exports__["a"] = getHospitalArea;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(45);


//  根据区域查询医院列表
function getHospitalByArea(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/hospital/list', params);
}
//  获取区域列表
function getHospitalArea(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/hospital/areas', params);
}

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hospitalSelect container"
  }, [(_vm.showArea) ? _c('div', {
    staticClass: "mask",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showArea = false
      }
    }
  }, [_c('div', {
    staticClass: "hosArea"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("请选择您要导航去的院区")]), _vm._v(" "), _c('ul', {
    staticClass: "hosList"
  }, _vm._l((_vm.hosAreaList), function(item, i) {
    return _c('li', {
      key: i,
      attrs: {
        "eventid": '0_' + i
      },
      on: {
        "click": function($event) {
          _vm.selectArea(item)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.areaName) + "\n          ")])
  }))], 1)]) : _vm._e(), _vm._v(" "), _c('hisHospital', {
    attrs: {
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "toPage": _vm.toContinue
    }
  }), _vm._v(" "), (_vm.hospitalList.length > 0) ? _c('div', _vm._l((_vm.hospitalList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "hos-list row row-center",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.selectHospital(item)
        }
      }
    }, [_c('div', {
      staticClass: "hos-logo"
    }, [_c('img', {
      attrs: {
        "src": item.logo ? item.logo : _vm.constant.LOCAL_IMG + 'hos-def-logo.png',
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "hos-info"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.levelDesc))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.address))])], 1), _vm._v(" "), _c('div', {
      staticClass: "hos-location"
    }, [_c('img', {
      attrs: {
        "src": _vm.constant.LOCAL_IMG + 'more-arrow.png',
        "alt": ""
      }
    })])])
  })) : _vm._e(), _vm._v(" "), _c('no-record', {
    attrs: {
      "condition": _vm.hospitalList.length === 0,
      "tips": '抱歉，暂无医院列表信息',
      "mpcomid": '1'
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
     require("vue-hot-reload-api").rerender("data-v-1d6eaa4b", esExports)
  }
}

/***/ })

},[309]);