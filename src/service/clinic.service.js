import { post } from '@/utils/request'

// 查询待缴费记录
export function getClinicUnpay (params) {
  return post('/portal/clinic/unpay', {data: params})
}
// 查询已缴费记录
export function getClinicPaid (params) {
  return post('/portal/clinic/paid', {data: params})
}
// 查询排队信息
export function getClinicQueueInfo (params) {
  return post('/portal/clinic/queueInfo', {data: params})
}
