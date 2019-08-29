<template>
  <div class="about">
    <div class="about-content">
      <div>
        <div class="logo">
          <img src="" alt="">
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
import { linkUser } from '@/service/api.service'
import { setItem } from '@/utils/store'
export default {
  data: function () {
    return {
      info: {},
      path: '',
      code: '',
      callback: null
    }
  },
  components: {
    // NavBar
  },
  computed: {
    // customTop () {
    //   return this.$utils.getCustomeHeigth()
    // }
  },
  onLoad () {
    // let q = this.$root.$mp.query
    // q.callback && (this.callback = q.callback)
    this.toLogin()
  },
  methods: {
    toLogin () {
      let _this = this
      wx.login({
        success (res) {
          if (res.code) {
            _this.code = res.code
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    },
    async getuserinfo (e) {
      if (e.mp.detail.errMsg !== 'getUserInfo:ok') {
        this.$utils.back()
        return
      }
      //  调用解密接口,创建新用户,本地保存用户信息
      let userInfo = e.mp.detail.userInfo
      let params = {
        nickname: userInfo.nickName,
        js_code: this.code,
        avatar: userInfo.avatarUrl
      }
      let res = await linkUser(params)
      if (res.code === 1) {
        //  保存用户id
        userInfo.userId = res.data
        setItem('userId', res.data)
        setItem('userInfo', userInfo)
        this.$store.commit('setUserInfo', userInfo)
      }
      let callback = this.$store.state.callback
      if (callback) {
        callback()
        // eval(this.callback)
      } else {
        this.$utils.back()
      }
      // let toPath = this.path ? this.path : 'main'
      // let type = toPath === 'main' ? 3 : 2
      // this.$utils.navigateTo(toPath, {}, type)
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
        width: 135px;
        height: 111px;
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
    }
  }
}
</style>

