import { getItem, setItem } from './store'
import { systemAuthorize } from '@/service/user.service'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
fly.config.baseURL = 'http://114.115.204.39:8165/'
// fly.config.baseURL = 'http://148.70.16.29:7003/api'
fly.config.headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}
export function get (url, options) {
  return new Promise((resolve, reject) => {
    fly.get(url, options)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
export function post (url, options) {
  return new Promise((resolve, reject) => {
    fly.post(url, options)
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

//  添加请求拦截器
fly.interceptors.request.use(request => {
  mpvue.showLoading({
    title: '加载中',
    icon: 'loading',
    mask: true
  })
  if (getItem('accessToken')) {
    request.headers['Access-Token'] = getItem('accessToken')
  }
  let t = getItem('token') || ''
  t && (request.body['tokenId'] = t)
  request.body['channel'] = '7'
  //  给所有请求添加自定义header
  // request.headers['channel'] = '7'
  // request.headers['timestamp'] = String(new Date().getTime())
  // let t = getItem('token') || ''
  // let h = getItem('selectedHospital')
  // if (t) {
  //   request.headers['tokenId'] = t
  // }
  // if (h) {
  //   request.headers['hospitalId'] = h.id
  // }
  //  给所有请求添加自定义header
  // request.headers['timestamp']= String(new Date().getTime())
  return request
})
//  添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  async response => {
    setTimeout(() => {
      mpvue.hideLoading()
    }, 300)
    if (response.data.result === '8') {
      //  accessToken 过期,重新请求授权
      let authInfo = await systemAuthorize()
      if (authInfo.result === '1') {
        setItem('accessToken', authInfo.data.accessToken)
      }
      return false
    }
    if (response.data.result !== '1') {
      mpvue.showToast({
        title: response.data.message || '服务异常,请稍后再试',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    //  只将请求结果的data字段返回
    return response.data
  },
  () => {
    mpvue.hideLoading()
    // mpvue.showModal('提示', '服务错误，请稍后再试', () => {}, () => {}, false)
    mpvue.showModal({
      title: '提示',
      content: '服务错误，请稍后再试',
      showCancel: false,
      success (res) {

      }
    })
  }
)
