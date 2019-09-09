import { post } from '@/utils/request'

// 生成缴费订单
export function createPayOrder (params) {
  return post('/portal/pay/order', {data: params})
}
// 订单同步
export function getPaySync (params) {
  return post('/portal/pay/sync', {data: params})
}
// 获取支付配置
export function getPayConfig (params) {
  return post('/portal/pay/config', {data: params})
}
// 获取订单信息
export function getOrderInfo (params) {
  return post('/portal/order/info', {data: params})
}
// 订单撤销
export function OrderUndo (params) {
  return post('/portal/pay/undo', {data: params})
}
// 获取健康钱包链接
export function getPayHealthyWallet (params) {
  return post('/portal/pay/healthyWallet', {data: params})
}
// 查询是否开通健康钱包
export function getIsOpenHealthyWallet (params) {
  return post('/portal/pay/isOpenHealthyWallet', {data: params})
}
