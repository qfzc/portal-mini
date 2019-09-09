import { post } from '@/utils/request'

//  获取医院可挂号的科室列表，包括一级科室和二级科室
export function getRegisterDept (params) {
  return post('/portal/register/dept', {data: params})
}
//  挂号时获取排班医生的信息列表
export function getRegisterDoct (params) {
  return post('/portal/register/doct', {data: params})
}
//  挂号时获取医生的实时排班列表
export function getRegisterScheduling (params) {
  return post('/portal/register/scheduling', {data: params})
}
// 挂号确认
export function getRegisterLock (params) {
  return post('/portal/register/lock', {data: params})
}
// 取消挂号
export function getRegisterUnlock (params) {
  return post('/portal/register/unlock', {data: params})
}
// 获取挂号列表
export function getRegisterList (params) {
  return post('/portal/register/list', {data: params})
}
// 退号
export function getRegisterRefund (params) {
  return post('/portal/register/refund', {data: params})
}
