import { post } from '@/utils/request'

// 获取用户就诊凭证
export function getVoucherList (params) {
  return post('/portal/voucher/list', {data: params})
}
// 获取健康卡二维码
export function getVoucherQrcode (params) {
  return post('/portal/voucher/qrcode', {data: params})
}
//  发送短信验证码
export function getVoucherSend (params) {
  return post('/portal/voucher/send', {data: params})
}
// 添加就诊凭证
export function getVoucherAdd (params) {
  return post('/portal/voucher/add', {data: params})
}
// 关联电子健康卡
export function getVoucherAssociate (params) {
  return post('/portal/voucher/associate', {data: params})
}
// 解绑就诊凭证
export function getVoucherUnbind (params) {
  return post('/portal/voucher/unbind', {data: params})
}
