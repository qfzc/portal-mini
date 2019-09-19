<template>
  <div class="his-hospital" v-if="flag">
    <div class="his-content">
      <span>上次选择:</span>
      <span> {{selectHosInfo.hospitalName}}({{selectHosInfo.areaName}})</span>
      <span @click="toPage(selectHosInfo)">继续 <img :src="originImgUrl + 'more-arrow.png'" alt=""></span>
    </div>
  </div>
</template>
<script>
import { getItem } from '@/utils/store'
export default {
  data: function () {
    return {
      selectHosInfo: false,
      flag: false
    }
  },
  computed: {
    originImgUrl () {
      return this.constant.LOCAL_IMG
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
    toPage (item) {
      this.$emit('toPage', item)
    }
  }
}
</script>
<style lang="scss" scoped>
  .his-hospital{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #3272C9;
    // padding: 0 15px;
    font-size: 15px;
    position: relative;
    background: #E0EDFA;
    .his-content{
      padding: 0 15px;
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

