import { post } from '@/utils/request'

// 查询患者的住院信息
export function getInpatientInfo (params) {
  return post('/portal/inpatient/info', {data: params})
}
// 查询住院预交金的充值记录
export function getInpatientRechargeList (params) {
  return post('/portal/inpatient/rechargeList', {data: params})
}
// 查询住院清单
export function getInpatientBill (params) {
  return post('/portal/inpatient/bill', {data: params})
}
