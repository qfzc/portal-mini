require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_consts__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_consts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_consts__);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* default */]; // vuex
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$utils = __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.constant = __WEBPACK_IMPORTED_MODULE_4__utils_consts___default.a;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(135);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33934bec", Component.options)
  } else {
    hotAPI.reload("data-v-33934bec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    // 判断用户是否授权
    // let _this = this
    // wx.getSetting({
    //   success (res) {
    //     console.log(!res.authSetting['scope.userInfo'])
    //     if (!res.authSetting['scope.userInfo']) {
    //       // wx.hideTabBar()
    //       wx.reLaunch({
    //         url: 'authorize'
    //       })
    //       // _this.$utils.navigateTo('authorize', {}, 2)
    //     }
    //   }
    // })
  },
  log: function log() {
    console.log("log at:" + Date.now());
  }
});

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(137);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
var devInfo = global.mpvue.getSystemInfoSync();
var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    mapHeight: devInfo.windowHeight - 42,
    travelName: '',
    travelDate: [],
    tabIndex: 0,
    fromIndex: false
  },
  mutations: {
    calHeight: function calHeight(state) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 42;

      var obj = state;
      obj.mapHeight = devInfo.windowHeight - value;
    },
    setTabIndex: function setTabIndex(state, value) {
      state.tabIndex = value;
    },
    setFromIndex: function setFromIndex(state, value) {
      state.fromIndex = value;
    }
  },
  getters: {
    getTabIndex: function getTabIndex(state) {
      return state.tabIndex;
    },
    getFromIndex: function getFromIndex(state) {
      return state.fromIndex;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);



function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
}

// export function formatTime (date) {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()

//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   const t1 = [year, month, day].map(formatNumber).join('/')
//   const t2 = [hour, minute, second].map(formatNumber).join(':')

//   return `${t1} ${t2}`
// }

// export default {
//   formatNumber,
//   formatTime
// }

var utils = {

  /**
   * 计算天数
   * @param {开始时间} startDate
   * @param {结束时间} endDate
   */
  formatDate: function formatDate(startDate, endDate) {
    var _this = this;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(resolve, reject) {
        var days, curTime, arr, i, temp;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / 86400000 + type;
                curTime = new Date(startDate).getTime();
                arr = [];
                i = 0;

              case 4:
                if (!(i < days)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 7;
                return _this.formatTime(new Date(curTime + i * 86400000));

              case 7:
                temp = _context.sent;

                arr.push(temp.curDate);

              case 9:
                i++;
                _context.next = 4;
                break;

              case 12:
                resolve(arr);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
  },

  /**
   * 转换时间
   * @param {当前时间} date
   */
  formatTime: function formatTime(date, mode) {
    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve) {
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      // const t1 = [year, month, day].map(formatNumber).join('/')
      // const t2 = [hour, minute, second].map(formatNumber).join(':')
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      if (mode === 'picker') {
        var res = year + '-' + month + '-' + day;
        resolve(res);
        return;
      }
      var t1 = month + '月' + day + '日';
      var t2 = [hour, minute].map(formatNumber).join(':');
      var t3 = second;
      var timeObj = {
        curDate: t1,
        curTime: t2,
        curSec: t3
      };
      resolve(timeObj);
    });
  },

  /**
   * 模块弹框
   * @param {弹框标题} title
   * @param {弹框内容} content
   * @param {确认后回调函数} callback
   * @param {取消后回调函数} fail
   * @param {是否显示取消按钮} showCancel
   */
  showModal: function showModal(title, content, callback, fail) {
    var showCancel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    global.mpvue.showModal({
      title: title,
      content: content,
      showCancel: showCancel,
      success: function success(res) {
        if (res.confirm) {
          callback();
        } else if (res.cancel) {
          fail();
        }
      }
    });
  },

  /**
   * 显示提示
   * @param {提示的标题} title
   * @param {提示的icon 默认无} icon
   */
  showToast: function showToast(title) {
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';

    global.mpvue.showToast({
      title: title,
      icon: icon,
      duration: 2000
    });
    setTimeout(function () {
      global.mpvue.hideToast();
    }, 2000);
  },
  throttle: function throttle(func, wait, mustRun) {
    var timeout = void 0;
    var startTime = new Date();
    return function () {
      var context = this;
      var args = arguments;
      var curTime = new Date();
      clearTimeout(timeout);
      if (curTime - startTime >= mustRun) {
        func.apply(context, args);
        startTime = curTime;
      } else {
        timeout = setTimeout(func, wait);
      }
    };
  },

  /**
   * 返回
   * @param {返回的级数--默认为1级} delta
   */
  back: function back() {
    var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    global.mpvue.navigateBack({
      delta: delta
    });
  },

  /**
   * 页面导航
   * @param {页面名称} name
   * @param {参数} params
   * @param {是否关闭当前页面 1: 不关闭} type
   */
  navigateTo: function navigateTo(name, params) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var url = '/pages/' + name + '/main';
    var param = '';
    if (params) {
      for (var key in params) {
        param = param + key + '=' + params[key] + '&';
      }
      url = url + '?' + param.substr(0, param.length - 1);
    }
    if (type === 1) {
      global.mpvue.navigateTo({
        url: url
      });
    } else if (type === 2) {
      global.mpvue.redirectTo({
        url: url
      });
    } else {
      global.mpvue.switchTab({
        url: url
      });
    }
  },

  /**
   * 获取当前位置
   */
  getLocation: function getLocation() {
    return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
      global.mpvue.getLocation({
        type: 'gcj02',
        success: function success(res) {
          resolve(res);
        },
        fail: function fail(e) {
          reject(e);
        }
      });
    });
  },

  /**
   * 动态设置标题
   * @param {标题} title
   */
  setBarTitle: function setBarTitle(title) {
    wx.setNavigationBarTitle({
      title: title
    });
  },

  /**
   * 显示大图
   * @param {当前图片的地址} current
   * @param {图片数组} arrs
   */
  showBigImg: function showBigImg() {
    var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var arrs = arguments[1];

    global.mpvue.previewImage({
      current: arrs[current],
      urls: arrs
    });
  },

  /**
   * 动态设置导航栏的颜色
   * @param {设置的颜色} color
   */
  setNavBarColor: function setNavBarColor() {
    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#C7E0EF';

    global.mpvue.setNavigationBarColor({
      backgroundColor: color
    });
  },

  /**
   * 获取设备状态栏的高度
   */
  getStatusBarHeight: function getStatusBarHeight() {
    return global.mpvue.getSystemInfoSync()['statusBarHeight'];
  },
  getCustomeHeigth: function getCustomeHeigth() {
    var sysInfo = global.mpvue.getSystemInfoSync();
    var isIos = sysInfo.system.indexOf('iOS') > -1;
    var statusHeight = sysInfo['statusBarHeight'];
    if (isIos) {
      return statusHeight + 42;
    } else {
      return statusHeight + 46;
    }
  },

  /**
   * 使用微信内置地图查看位置
   *  */
  openLocation: function openLocation(latitude, longitude, name, address) {
    var scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 18;

    global.mpvue.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: scale,
      name: name,
      address: address
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(168);
module.exports = {
  LOCAL_IMG: config.dev.REDIRECT_URL + config.dev.IMG_FILE_PATH,
  JSON_CLEAN: {},
  ARRAY_CLEAN: [],
  RESULT_SUCCESS: '1',
  RESULT_FAILED: '2',
  RESULT_EXCEPTION: '3',
  ORG_ID: '1001', // 写死的机构ID
  REPEAT_REGISTER_ERROR_CODE: '11031329', // 重复挂号约定错误码

  // 业务类型
  BUSI_TYPE: {
    REGISTRATION_PAYMENT: '1006', // 挂号缴费
    OUT_PATIENT_PAYMENT: '1301', // 门诊缴费
    IN_PATIENT_RECHARGE_PAYMENT: '1502' // 住院预缴金充值
  },

  // 订单类型
  ORDER_TYPE: {
    REGISTRATION_TYPE: 1, // 挂号
    OUT_PATIENT_TYPE: 2 // 门诊处方
  },

  // 订单状态
  ORDER_STATUS: {
    UN_PAYMENT: '1', // 未支付
    PAYING: '2', // 支付中
    ALREADY_PAYMENT: '3', // 已支付
    ALREADY_CANCEL: '4', // 已撤销
    RETUNING_FEE: '5', // 退费中
    ALREADY_RETUNEED: '6', // 已退费
    PAY_FAILED: '7', // 支付失败(明确失败)
    PAY_EXCEPTION: '8', // 支付异常(网络问题)
    RETUNED_FAILED: '9', // 退费失败(明确失败)
    RETUNED_EXCEPTION: '10' // 退费异常(网络问题)
  },

  // 挂号支付状态
  REGISTERED_PAY_STATUS: {
    UNPAY_UNABLE_PAY: '1', // 未支付(不可支付)
    UNPAY_ENABLE_PAY: '2', // 未支付(可支付)
    PAID_UNABLE_RETURN_FEE: '3', // 已支付(不可退费)
    PAID_ENABLE_RETURN_FEE: '4', // 已支付(可退费)
    RETURNED_FEE_NUM: '5', // 已退费(已退号)
    RETURNED_FEE_WITHOUT_NUM: '6' // 已退号(未退费)
  },

  // 挂号业务状态
  REGISTERED_BUSI_STATUS: {
    STOP_UN_NOTIFICATION: '1', // 停诊未通知
    STOP_NOTIFICATION: '2', // 停诊已通知
    INVALID: '3', // 失约作废
    RESERVED: '4', // 已预约
    CANCELED: '5', // 已取消
    REPORTED: '6', // 已报到
    CALLED: '7', // 已叫号
    FINISHED: '8', // 已完成
    REFUNDED: '9' // 已退号
  },
  // 医院ID
  HOSPITAL_ID: {
    FYBJ: '1005', // 妇幼保健
    ZXJH: '1007', // 中西结合
    JKSC: '3001', // 健康四川
    CDFY: '1056', // 成大附医
    CDFN: '1055' // 成都妇女儿童
  },

  // 调用方式
  INVOKE_TYPE: {
    APP_INVOKE: '1', // app
    WAP_INVOKE: '2', // wap
    QR_INVOKE: '3', // 扫码
    NATIVE_INVOKE: '4', // native
    H5_INVOKE: '5' // H5
  },

  // 医院跳转方式
  JUMP_TYPE: {
    IN_LINK: '1', // 内部链接
    OUT_LINK: '2' // 外部链接
  },

  // 支付渠道
  PAY_TYPE: {
    WX_PAY: '4', // app
    ALI_PAY: '5', // wap
    UNION_PAY: '7', // 扫码
    HB_PAY: '12', // 和包支付
    SELF_PAY: '8' // 和包支付
  },

  // 支付渠道
  CARD_TYPE: {
    ID_CARD: '3', // 二代身份证
    HEALTH_CARD: '4' // 电子健康卡
  },

  /*
  1、未办理住院手续
  2、住院中
  3、办理出院结算
  4、出院
  */
  // 住院状态
  INPATIENT_STATUS: {
    NO_IN_HOS: '1',
    IN_HOS_ING: '2',
    OUT_HOS_ING: '3',
    FINISH_OUT_HOS: '4'
  },

  // 智能分诊
  TRIAGE: {
    // 人群 1男 2女 3儿童
    CROWD: {
      MAN: '1',
      WOMAN: '2',
      CHILDREN: '3'
    },
    // 正面反面 1正面 0背面
    DIRECT: {
      FRONT: '1',
      BACK: '0'
    },
    // 显示头部 1头部 0非头部
    HEAD: {
      YES: '1',
      NO: '0'
    }
  },
  LAB_HIGH_LOW_FLAG: {
    OK: '1',
    HIGH: '2',
    LOW: '3'
  },
  DEPT_SORT_TYPE: {
    REGISTER: 1,
    DISTANCE: 2,
    SATISFACTION: 3
  },
  TX_CODE: {
    WALLET: 'YYJK01',
    PAY: 'YYJK02'
  },
  // 医院缴费业务的通知状态
  NOTIFY_STATUS: {
    INIT: '1', // HIS未通知，初始状态
    EXCEPTION: '2', // HIS通知异常，状态未知
    RETURN_FAIL: '3', // HIS通知成功，返回失败，需要退费
    RETURN_SUCCESS: '4' // HIS通知成功，返回成功，业务完成
  },
  QB_FLAG: {
    OPEN: '0',
    NOT_OPEN: '1'
  },

  /*
  线上登录方式：
      1短信验证码登录
      2密码登录
      3微信授权码登录
      4微信unionId登录
   */
  ONLINE_LOGIN_TYPE: {
    VERIFICATION_CODE: '1',
    USER_PASSWORD: '2',
    WECHAT_CODE: '3',
    WECHAT_UNIONID: '4'
  }
  // "appid": "wxcb91c7947e62f7dd",

};

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// see http://vuejs-templates.github.io/webpack for documentation.
var path = __webpack_require__(169)
var fileExtConfig = {
    swan: {
        template: 'swan',
        script: 'js',
        style: 'css',
        platform: 'swan'
    },
    tt: {
        template: 'ttml',
        script: 'js',
        style: 'ttss',
        platform: 'tt'
    },
    wx: {
        template: 'wxml',
        script: 'js',
        style: 'wxss',
        platform: 'wx'
    },
    my: {
        template: 'axml',
        script: 'js',
        style: 'acss',
        platform: 'my'
    }
}
// var fileExt = fileExtConfig[process.env.PLATFORM]
var fileExt = fileExtConfig['wx']

module.exports = {
  build: {
    env: __webpack_require__(94),
    index: path.resolve(__dirname, `../dist/${fileExt.platform}/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist/${fileExt.platform}`),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: Object({"NODE_ENV":"development","REDIRECT_URL":"https://csmh.hngwmt.com/base","IMG_FILE_PATH":"/archive/resource/img/"}).npm_config_report,
    fileExt: fileExt,
    REDIRECT_URL: "https://csmh.hngwmt.com/base",
    IMG_FILE_PATH: "/archive/resource/img/"
  },
  dev: {
    env: __webpack_require__(171),
    port: 8080,
    // 在小程序开发者工具中不需要自动打开浏览器
    autoOpenBrowser: false,
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    fileExt: fileExt,
    REDIRECT_URL: "https://csmh.hngwmt.com/base",
    IMG_FILE_PATH: "/archive/resource/img/"
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(172)
var prodEnv = __webpack_require__(94)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  REDIRECT_URL: '"https://csmh.hngwmt.com/base"',
  IMG_FILE_PATH: '"/archive/resource/img/"'
})


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = {
  NODE_ENV: '"production"',
  REDIRECT_URL: '"https://csmh.hngwmt.com/base"',
  IMG_FILE_PATH: '"/archive/resource/img/"'
}


/***/ })

},[132]);