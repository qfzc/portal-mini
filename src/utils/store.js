//  兼容浏览器和微信本地存储
// import util from './index'

export function setItem (key, value) {
  try {
    wx.setStorageSync(key, value)
  } catch (e) {
    window.localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value
    )
  }
}

export function getItem (key) {
  try {
    let value = wx.getStorageSync(key)
    if (value) {
      return value
    }
  } catch (e) {
    let value = window.localStorage.getItem(key)
    if (value) {
      return value
    }
  }
}

export function removeItem (key) {
  try {
    wx.removeStorageSync(key)
  } catch (e) {
    window.localStorage.removeItem(key)
  }
}
export function clearItem () {
  try {
    wx.clearStorageSync()
  } catch (e) {
    window.localStorage.clear()
  }
}
