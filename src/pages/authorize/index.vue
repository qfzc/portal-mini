<template>
  <div class="about">
    <div class="about-content" v-if="showAuthorize">
      <div>
        <div class="logo">
          <img src="/static/images/navigation_logo.png" alt="">
        </div>
        <div class="area">
          <h4>该程序将获取以下授权</h4>
          <ul>
            <li>· 获得您的公开信息（昵称头像等）</li>
          </ul>
        </div>
        <div class="authorize-btn">
          <button open-type="getUserInfo" @getuserinfo="getuserinfo">同意授权</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setItem } from '@/utils/store'
export default {
  data: function () {
    return {
      info: {},
      path: '',
      code: '',
      callback: null,
      showAuthorize: false
    }
  },
  created () {
    // 判断用户是否授权
    let _this = this
    wx.getSetting({
      success (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.reLaunch({
            url: '/pages/index/main'
          })
        } else {
          _this.showAuthorize = true
        }
      }
    })
  },
  methods: {
    async getuserinfo (e) {
      if (e.mp.detail.errMsg !== 'getUserInfo:ok') return
      // 本地保存用户信息
      let userInfo = e.mp.detail
      setItem('userInfo', userInfo)
      //  跳转到首页
      wx.reLaunch({
        url: '/pages/index/main'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  &-content{
    position: absolute;
    top: 64px;
    width: 100%;
    .logo{
      padding: 13px 0 19px 0;
      text-align: center;
      img{
        width: 128px;
        height: 29px;
      }
    }
    .area{
      padding: 0 27px 0 28px;
      h4{
        color: $main_color;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        font-size: 16px;
        padding-bottom: 15px;
      }
      ul li,p{
        color: #c6c6c6;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
  .authorize-btn{
    padding: 125px 27px 0 28px;
    button{
      height: 50px;
      color: #fff;
      background: #038C73;
      font-size: inherit;
    }
  }
}
</style>

