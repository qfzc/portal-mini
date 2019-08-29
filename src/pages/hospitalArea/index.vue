<template>
  <div class="hospitalSelect container">
    <hisHospital v-on:toPage="toContinue"></hisHospital>
    <Nav-List :navList="navList" v-on:toPage="toPage" ></Nav-List>
  </div>
</template>
<script>
import hisHospital from '@/components/hisHospital'
import NavList from '@/components/NavList'
export default {
  data: function () {
    return {
      navList: [
        {
          imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/7799fa0f40cf02ec80db911489062db2.png',
          name: '市级医院',
          url: '1'
        },
        {
          imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/7e2db8f940edfadb8092a05016fa6ced.png',
          name: '区县医院',
          url: '2'
        },
        {
          imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/03/28/1184c2a34041b73d800a8992935975e6.png',
          name: '社区医院',
          url: '3'
        }
      ],
      waitUrl: ''
    }
  },
  components: {
    hisHospital,
    NavList
  },
  onLoad () {
    //  接收要进入的页面url
    let q = this.$root.$mp.query
    this.waitUrl = q.waitUrl ? q.waitUrl : 'departDoctor'
  },
  methods: {
    toContinue () {
      if (this.waitUrl === 'noredirect') {
        this.$utils.back()
        return
      }
      mpvue.redirectTo({
        url: '../' + this.waitUrl + '/main'
      })
    },
    toPage (e) {
      //  跳转到对应的界面
      if (e) {
        //  选择了区域,将值传入选择二级医院页面
        mpvue.navigateTo({
          url: '../hospitalSelect/main?id=' + e + '&waitUrl=' + this.waitUrl
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

