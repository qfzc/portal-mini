require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(289);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_55180a30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(297);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-55180a30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_55180a30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/departDoctor/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-55180a30", Component.options)
  } else {
    hotAPI.reload("data-v-55180a30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 290:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tabs__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_register_service__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_store__ = __webpack_require__(17);



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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      waitUrl: '',
      tab: [{ name: '按科室' }, { name: '按医生' }],
      tips: '输入二级科室',
      devAvaHeight: 0,
      areaId: '',
      deptInfo: [{ children: [] }],
      docList: [],
      flag: 0,
      tabIndex: 0
    };
  },
  components: {
    tabs: __WEBPACK_IMPORTED_MODULE_3__components_tabs__["a" /* default */]
  },
  onLoad: function onLoad() {
    var devInfo = global.mpvue.getSystemInfoSync();
    var area = Object(__WEBPACK_IMPORTED_MODULE_5__utils_store__["a" /* getItem */])('selectedArea');
    this.devAvaHeight = devInfo.windowHeight - 110;
    //  获取传过来的区域id及待进入的页面url
    var q = this.$root.$mp.query;
    this.areaId = q.areaId ? q.areaId : area.areaId;
    if (this.areaId) {
      this.getHospitalDept();
    }
  },

  methods: {
    changeTab: function changeTab(e) {
      if (this.tabIndex === e) return;
      this.tabIndex = e;
      this.tips = e === 0 ? '输入二级科室' : '输入医生姓名';
      e === 0 ? this.getHospitalDept() : this.getDocInfo();
    },
    getDocInfo: function getDocInfo() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var hosInfo, data, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                hosInfo = Object(__WEBPACK_IMPORTED_MODULE_5__utils_store__["a" /* getItem */])('selectedHospital');
                data = {
                  orgId: hosInfo.orgId,
                  hospitalId: hosInfo.id,
                  areaId: _this.areaId
                };
                _context.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_4__service_register_service__["a" /* getDoctorInHos */])(data);

              case 4:
                res = _context.sent;

                if (res.resultCode === '1') {
                  _this.docList = res.data.length > 100 ? res.data.slice(0, 90) : res.data;
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getHospitalDept: function getHospitalDept() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var hosInfo, data, res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                hosInfo = Object(__WEBPACK_IMPORTED_MODULE_5__utils_store__["a" /* getItem */])('selectedHospital');
                data = {
                  hospitalId: hosInfo.id,
                  orgId: hosInfo.orgId,
                  areaId: _this2.areaId
                };
                _context2.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_4__service_register_service__["b" /* getRegisterDept */])(data);

              case 4:
                res = _context2.sent;

                if (res.resultCode === '1') {
                  _this2.deptInfo = res.data;
                }

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    toPage: function toPage(item, type) {
      //  重置挂号时间
      this.$store.commit('setRegDate', null);
      if (type === 1) {
        //  跳转到该科室所有医生排班
        global.mpvue.navigateTo({
          url: '../dateDoctorSchedule/main?deptId=' + item.deptId + '&areaId=' + this.areaId
        });
      } else {
        //  跳转到该医生排班
        var hosInfo = Object(__WEBPACK_IMPORTED_MODULE_5__utils_store__["a" /* getItem */])('selectedHospital');
        // let price = (item.fee / 100).toFixed(2)
        var params = {
          orgId: hosInfo.orgId,
          hospitalId: hosInfo.id,
          areaId: this.areaId,
          deptId: item.deptId,
          regDate: new Date().format('yyyy-MM-dd'),
          doctId: item.doctId,
          rankId: item.rankId
        };
        global.mpvue.navigateTo({
          url: '../timeSchedule/main?params=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(params) + '&item=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(item)
        });
      }
    }
  }
});

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ca91a60_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_tabs_vue__ = __webpack_require__(295);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(293)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ca91a60"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_tabs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4ca91a60_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_tabs_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ca91a60", Component.options)
  } else {
    hotAPI.reload("data-v-4ca91a60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 293:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    tabArr: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      flag: 0
    };
  },
  methods: {
    changeTab: function changeTab(index) {
      this.flag = index;
      this.$emit('changeTab', index);
    }
  }
});

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "area"
  }, [_c('div', {
    staticClass: "pro-tab"
  }, _vm._l((_vm.tabArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tab-item",
      class: {
        'tab-active': _vm.flag === index
      },
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeTab(index)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4ca91a60", esExports)
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getHospitalByArea */
/* unused harmony export getHospitalArea */
/* harmony export (immutable) */ __webpack_exports__["b"] = getRegisterDept;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDoctorInHos;
/* unused harmony export getDoctorWork */
/* unused harmony export getTimeTable */
/* unused harmony export getTimeSchedules */
/* unused harmony export getDocInfo */
/* unused harmony export registLock */
/* unused harmony export applyOrder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(45);


//  根据区域查询医院列表
function getHospitalByArea(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/hospital/list', params);
}
//  获取区域列表
function getHospitalArea(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/hospital/areas', params);
}
//  获取科室列表
function getRegisterDept(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/register/dept', params);
}
// 获取医院下所有医生列表
function getDoctorInHos(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/hospital/docts', params);
}
//  获取医生排班
function getDoctorWork(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/register/doct', params);
}
/* 获取日期列表 */
function getTimeTable(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/register/date', params);
}
/* 获取实时排班 */
function getTimeSchedules(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/register/scheduling', params);
}
//  获取医生信息
function getDocInfo(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* get */])('/app/hospital/doctInfo', params);
}
/* 挂号锁号 */
function registLock(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["b" /* post */])('/app/register/lock', params);
}
// 生成缴费订单
function applyOrder(params) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["b" /* post */])('/app/pay/order', params);
}

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "depart"
  }, [_c('tabs', {
    attrs: {
      "tabArr": _vm.tab,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "changeTab": _vm.changeTab
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "search-bar"
  }, [_c('button', [_c('icon', {
    staticClass: "searchicon",
    attrs: {
      "type": "search",
      "size": "16"
    }
  }), _vm._v("\n      " + _vm._s(_vm.tips) + "\n    ")], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabIndex === 0),
      expression: "tabIndex === 0"
    }],
    staticClass: "departArea row",
    style: ({
      height: _vm.devAvaHeight + 'px'
    })
  }, [_c('div', {
    staticClass: "col row left"
  }, _vm._l((_vm.deptInfo), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "col content",
      class: {
        active: _vm.flag === index
      },
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.flag = index
        }
      }
    }, [_vm._v(_vm._s(item.deptName))])
  })), _vm._v(" "), _c('div', {
    staticClass: "col row right"
  }, _vm._l((_vm.deptInfo[_vm.flag].children), function(subItem, i) {
    return _c('div', {
      key: i,
      staticClass: "col content",
      attrs: {
        "eventid": '2_' + i
      },
      on: {
        "click": function($event) {
          _vm.toPage(subItem, 1)
        }
      }
    }, [_vm._v(_vm._s(subItem.deptName))])
  }))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tabIndex === 1),
      expression: "tabIndex === 1"
    }],
    staticClass: "doctor"
  }, _vm._l((_vm.docList), function(item, i) {
    return _c('div', {
      key: i,
      staticClass: "row row-center doc-list",
      attrs: {
        "eventid": '3_' + i
      },
      on: {
        "click": function($event) {
          _vm.toPage(item, 2)
        }
      }
    }, [_c('div', {
      staticClass: "doc-logo"
    }, [_c('img', {
      attrs: {
        "src": item.avatar ? item.avatar : 'http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/83869d8140e8f25380db41c58d98b7ea.png',
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "doc-info"
    }, [_c('p', [_vm._v(_vm._s(item.rank) + " " + _vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.dept))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.doctDesc ? item.doctDesc : '暂无介绍'))])], 1), _vm._v(" "), _vm._m(0, true)])
  }))], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "doc-arrow"
  }, [_c('img', {
    attrs: {
      "src": "http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/37e778c2403c279680a2a4b4e63f2dbb.png",
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
     require("vue-hot-reload-api").rerender("data-v-55180a30", esExports)
  }
}

/***/ })

},[288]);