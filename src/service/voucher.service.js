import { get, post } from '@/utils/request'
export default {
  getVoucherList () {
    return get('/app/voucher/list')
  },
  verifyBizContent (params) {
    return post('/app/voucher/verify', params)
  },
  sendVerifyCode (params) {
    return post('/app/voucher/send', params)
  },
  addVoucherCard (params) {
    return post('/app/voucher/add', params)
  },
  deleteVoucherCard (params) {
    return post('/app/voucher/del', params)
  },
  getVoucherQrCode (params) {
    return post('/app/cust/gateway/dynamicCode', params)
  },
  getCardPackOrderId (params) {
    return post('/app/cust/gateway/cardPackOrderId', params)
  },
  bindCardWithHealthCode (params) {
    return post('/app/cust/gateway/associateCard', params)
  },
  getCCBHealthyWallet (params) {
    return post('/app/cust/gateway/healthyWallet', params)
  },
  getCCBHealthyWalletOpenStatus (params) {
    return post('/app/cust/gateway/isOpenHealthyWallet', params)
  }
}
