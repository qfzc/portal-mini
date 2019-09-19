<template>
  <div class="developing">
    <div class="tip-img"><img :src="originImgUrl + 'yemian-bg.png'" alt=""></div>
    <p>功能正在努力建设中!</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {

    }
  },
  computed: {
    originImgUrl () {
      return this.constant.LOCAL_IMG
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.developing{
  .tip-img{
    text-align: center;
    padding-top: 40px;
    img{
      width: 111px;
      height: 115px;
      display: block;
      margin: 0 auto;
    }
  }
  p{
    color: #222;
    font-size: 15px;
    text-align: center;
    margin-top: 20px;
  }
}
</style>

