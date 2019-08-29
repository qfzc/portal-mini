var config = require('../../config')
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
}
// "appid": "wxcb91c7947e62f7dd",
