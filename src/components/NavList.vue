<template>
  <div class="navigator">
    <ul>
      <li v-for="(item, index) in navList" :key="index" @click="toPage(item.url)" :class="{hasBotBor:flag,small:size === 'small',medium: size === 'medium',average: size === 'average'}">
        <div class="navigator-area" :class="{averageImg: size === 'average'}">
          <img v-if="item.imgSrc" :src="item.imgSrc" alt>
          <p>{{item.name}}</p>
        </div>
        <div class="navigator-icon">
          <img v-if="flag" :src="originImgUrl + 'more-arrow.png'" alt>
          <img v-else :src="originImgUrl + 'more-arrow.png'" alt>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    navList: {
      type: Array,
      default: function () {
        return []
      }
    },
    flag: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    size: {
      type: String,
      default: function () {
        return 'big'
      }
    }
  },
  computed: {
    originImgUrl () {
      return this.constant.LOCAL_IMG
    }
  },
  methods: {
    toPage (url) {
      this.$emit('toPage', url)
    }
  }
}
</script>
<style lang="scss" scoped>
.navigator{
    background: #fff;
    margin: 5px 0 0 0;
    ul{
      li{
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        justify-content: space-between;
        border-bottom: 1px solid #eaeaea;
        &:last-child{
          border: 0;
        }
        .navigator-area{
          display: flex;
          align-items: center;
          img{
            width: 25px;
            height: 25px;
          }
          p{
            padding-left: 12px;
            font-size: 15px;
            color: #111;
          }
        }
        .navigator-icon{
          img{
            width:10px;
            height:12px;
          }
        }

      }
      .small{
        height: 30px;
      }
      .medium{
        height: 50px;
      }
      .average{
        height: 40px;
      }
      .averageImg{
        img{
          width: 20px !important;
          height: 20px !important;
        }
      }
    }
    .hasBotBor{
      border-bottom: 1px solid #eaeaea !important;
    }
  }
</style>


