<template>
  <div v-show="condition" class="noData-pic">
    <p class="noData-text">{{tips}}</p>
  </div>
</template>
<script>
// const existData = function (data) {
//   if (data === this.constant.ARRAY_CLEAN) {
//     return true
//   }

//   if (typeof data === 'boolean') {
//     return data
//   } else if (data instanceof Array) {
//     return data.length !== 0
//   } else {
//     return !!data
//   }
// }
export default {
  props: {
    condition: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    tips: {
      type: String,
      default: function () {
        return '没有找到相关数据'
      }
    }
  },
  data () {
    return {
      isShow: false,
      origin: []
    }
  }
  // watch: {
  //   condition (val) {
  //     this.isShow = !existData.call(this, val)
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.noData-pic {
  background: url($main-img-url + 'Norecord.png')
    no-repeat top center;
  background-size: 111px 111px;
  margin: 150rpx auto 0 auto;
  width: 100%;
}
.noData-text {
  font-size: 18px;
  color: #333333;
  /*font-weight: bold;*/
  text-align: center;
  padding-top: 260rpx;
}
</style>
