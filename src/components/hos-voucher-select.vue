<template>
  <div>
    <Nav-List :navList="navList" v-on:toPage="toPage" :size="'average'"></Nav-List>
  </div>
</template>
<script>
import NavList from '@/components/NavList'
import { getItem, setItem } from '@/utils/store'
import { getVoucherList } from '@/service/voucher.service'
export default {
  data: function () {
    return {
      navList: [
        {
          imgSrc: this.constant.LOCAL_IMG + 'hospital_icon.png',
          name: '',
          url: 'hospitalSelect'
        },
        {
          imgSrc: this.constant.LOCAL_IMG + 'card_icon.png',
          name: '无',
          url: 'voucherSelect'
        }
      ],
      hosInfo: {},
      voucherList: []
    }
  },
  onLoad () {
    this.refresh()
  },
  onShow () {
    this.refresh()
  },
  components: {
    NavList
  },
  computed: {
    originImgUrl () {
      return this.constant.LOCAL_IMG
    }
  },
  methods: {
    refresh () {
      this.hosInfo = getItem('selectedHospital')
      this.navList[0].name = this.hosInfo.hospitalName
      let v = getItem('selectedVoucher')
      //  获取电子健康卡
      if (v) {
        this.navList[1].name = '电子健康卡/' + v.holderName + this.$utils.doutted(v.cardNo)
      } else {
        this.getVoucherInfo()
      }
    },
    toPage (e) {
      if (this.navList[1].name === '无' && e === 'voucherSelect') return
      this.$emit('select', e)
    },
    getVoucherInfo () {
      getVoucherList().then((res) => {
        if (res.result === this.constant.RESULT_SUCCESS) {
          // this.voucherList = res.data;
          if (res.data.length > 0) {
            this.navList[1].name = '电子健康卡/' + res.data[0].holderName + this.$utils.doutted(res.data[0].cardNo)
            setItem('selectedVoucher', res.data[0])
          } else {
            this.navList[1].name = '无'
            this.$utils.showToast('请先绑定电子健康卡')
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
