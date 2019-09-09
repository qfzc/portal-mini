import { post } from '@/utils/request'

// 获取科室信息
export function getHospitalDept (params) {
  return post('/portal/hospital/dept', {data: params})
}
// 获取医生信息
export function getHospitalDoct (params) {
  return post('/portal/hospital/doct', {data: params})
}
// 获取医生列表
export function getHospitalDocts (params) {
  return post('/portal/hospital/docts', {data: params})
}
// 获取医院列表
export function getHospitalList (params) {
  return post('/portal/hospital/list', {data: params})
}
