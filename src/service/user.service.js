import { post } from '@/utils/request'

/**
 * 用户登录
 * @param {} params
 */
export function login (params) {
  return post('portal/user/login', {data: params})
}
/**
 * 获取个人信息
 * @param {*} params
 */
export function getUserInfo (params) {
  return post('portal/user/info', {data: params})
}
/**
 * 系统授权
 * @param {*} params
 */
export function systemAuthorize () {
  let params = { username: 'gwi', password: '123456' }
  return post('portal/system/authorize', {data: params})
}
