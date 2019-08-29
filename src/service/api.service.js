import { get, post } from '@/utils/request'

//  关联用户
export function linkUser (params) {
  return post('/user/link', params)
}
//  获取slide
export function getSlide () {
  return get('/slide/list')
}
