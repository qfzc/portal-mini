import { get, post } from '@/utils/request'

//  根据区域查询医院列表
export function getHospitalByArea (params) {
  return get('/app/hospital/list', params)
}
//  获取区域列表
export function getHospitalArea (params) {
  return get('/app/hospital/areas', params)
}
//  获取科室列表
export function getRegisterDept (params) {
  return get('/app/register/dept', params)
}
// 获取医院下所有医生列表
export function getDoctorInHos (params) {
  return get('/app/hospital/docts', params)
}
//  获取医生排班
export function getDoctorWork (params) {
  return get('/app/register/doct', params)
}
/* 获取日期列表 */
export function getTimeTable (params) {
  return get('/app/register/date', params)
}
/* 获取实时排班 */
export function getTimeSchedules (params) {
  return get('/app/register/scheduling', params)
}
//  获取医生信息
export function getDocInfo (params) {
  return get('/app/hospital/doctInfo', params)
}
/* 挂号锁号 */
export function registLock (params) {
  return post('/app/register/lock', params)
}
// 生成缴费订单
export function applyOrder (params) {
  return post('/app/pay/order', params)
}
