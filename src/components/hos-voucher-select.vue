<template>
  <div>
    <Nav-List :navList="navList" v-on:toPage="toPage" :size="'average'"></Nav-List>
  </div>
</template>
<script>
import NavList from "@/components/NavList";
import { getItem, setItem } from '@/utils/store'
import { getVoucherList } from '@/service/api.service'
export default {
  data: function(){
    return {
      navList: [
        {
          imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/04/01/24336eb240b6ef9f807103e1b8bc982c.png',
          name: "",
          url: "hospitalArea"
        },
        {
          imgSrc: 'http://bmob-cdn-20712.b0.upaiyun.com/2019/04/01/84969f31406fa9fe8072dfc9636ca398.png',
          name: "无",
          url: "voucherSelect"
        }
      ],
      hosInfo: {},
      voucherList: []
    }
  },
  onLoad(){
    this.refresh()
  },
  onShow(){
   this.refresh()
  },
  components: {
    NavList
  },
  methods: {
    refresh(){
      this.hosInfo = getItem('selectedHospital')
      this.navList[0].name = this.hosInfo.name
      let v = getItem('selectedVoucher')
      //  获取电子健康卡
      if(v){
        this.navList[1].name = '电子健康卡/' + v.holderName + this.$utils.doutted(v.cardNo)
      }else{
        this.getVoucherInfo()
      }
    },
    toPage(e){
      if(this.navList[1].name === '无' && e === 'voucherSelect') return
      this.$emit('select',e)
    },
    getVoucherInfo(){
      getVoucherList().then((res) => {
        if (res.resultCode === '1') {
          // this.voucherList = res.data;
          if(res.data.length > 0){
            this.navList[1].name = '电子健康卡/' + res.data[0].holderName + this.$utils.doutted(res.data[0].cardNo)
            setItem('selectedVoucher',res.data[0])
          }else{
            this.navList[1].name = '无'
            this.$utils.showToast('请先绑定电子健康卡')
          }
        }
      });
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
