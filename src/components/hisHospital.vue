<template>
  <div class="his-hospital" v-if="flag">
    <div class="his-content">
      <span>上次选择:</span>
      <span> {{selectHosInfo.name}}</span>
      <span @click="toPage">继续 <img src="http://bmob-cdn-20712.b0.upaiyun.com/2019/03/14/01f7edc4408d6f5e80cb437c51830356.png" alt=""></span>
    </div>
  </div>
</template>
<script>
import { getItem } from '@/utils/store'
export default {
  data: function () {
    return {
      selectHosInfo: {},
      flag: false
    }
  },
  mounted () {
    let temp = getItem('selectedHospital')
    if (temp) {
      this.selectHosInfo = temp
      this.flag = true
    }
  },
  onShow () {
    let temp = getItem('selectedHospital')
    if (temp) {
      this.selectHosInfo = temp
      this.flag = true
    }
  },
  methods: {
    toPage () {
      this.$emit('toPage', this.selectHosInfo)
    }
  }
}
</script>
<style lang="scss" scoped>
  .his-hospital{
    height: 40px;
    line-height: 40px;
    color: #3272C9;
    padding: 0 15px;
    font-size: 15px;
    position: relative;
    background: #E0EDFA;
    .his-content{
      span:nth-child(3){
        float: right;
        img{
          width: 7px;
          height: 12px;
        }
      }
    }
  }
</style>

