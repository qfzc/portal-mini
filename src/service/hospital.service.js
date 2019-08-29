import { get } from '@/utils/request'

//  根据区域查询医院列表
export function getHospitalByArea (params) {
  return get('/app/hospital/list', params)
}
//  获取区域列表
export function getHospitalArea (params) {
  return get('/app/hospital/areas', params)
}
