<template>
    <div class="app">
        <div class="app-content">
            <div class="banner" v-if="showVoucherList">
                <img :src="constant.LOCAL_IMG + 'banner.png'" alt="">
                <button @click="toPage('checkInformation')"></button>
            </div>
            <!-- 绑卡之后的样式 -->
            <!-- <div v-else class="banner-content">
                <swiper :options="swiperOption" ref="mySwiper" class="swiper-item" v-if="voucherList.length>0">
                    <swiper-slide v-for="(voucher, index) in voucherList" :key="index">
                        <div class="swiper-item-content">
                            <voucher-item :voucher="voucher" class="swiper-voucher"
                                          v-on:selected="selectVoucher(voucher, index, $event)"></voucher-item>
                        </div>
                    </swiper-slide>
                </swiper>

                <div class="add-voucher">
                    <button @click="toPage('checkInformation')">+添加电子健康卡</button>
                </div>
            </div> -->
        </div>

        <div class="index-content">
            <menu-list :type="'mainService'"></menu-list>
            <menu-list :type="'multipleService'"></menu-list>
            <menu-list :type="'hospitalService'"></menu-list>
            <menu-list :type="'otherService'"></menu-list>
            <div class="user-btn">
                <button @click="toPage('userCenter')">前往个人中心></button>
            </div>
        </div>
        <!-- <open-data type="userAvatarUrl"></open-data> -->
        <!-- <open-data type="userNickName"></open-data> -->
    </div>
</template>
<script>
    import MenuList from '@/components/MenusList'
    import { systemAuthorize, login } from '@/service/user.service'
    import { setItem, getItem } from '@/utils/store'
    // import queryVoucher from 'voucher.service'
    // import VoucherItem from '../voucher/HealthCardItem'

    export default {
      data: function () {
        return {
          voucherList: [],
          showVoucherList: false,
          userInfo: {}
        }
      },
      components: {
        MenuList
      },
      // 从自定义菜单中点击进入是获取code
      async onLoad () {
        let auth = await systemAuthorize()
        if (auth.result === this.constant.RESULT_SUCCESS) {
          setItem('accessToken', auth.data.accessToken)
        }
        const u = getItem('userInfo')
        let params = {
          code: '',
          loginType: '3',
          extraMap: {
            encryptedData: u.encryptedData,
            iv: u.iv,
            rawData: u.rawData,
            signature: u.signature
          }
        }
        wx.login({
          success (res) {
            if (res.code) {
              params.code = res.code
              login(params).then(result => {
                setItem('token', result.tokenId)
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
        // this.getVoucherList()
      },
      methods: {

      }
    }
</script>
<style lang="scss" scoped>
    $fontFamilyMedium: PingFang-SC-Medium;
    $fontFamilyBold: PingFang-SC-Bold;
    .app {
        background: #EDEEF2;
    }
    .banner {
        height: 90px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        button {
            position: absolute;
            height: 36px;
            right: 8px;
            width: 40%;
            bottom: 20px;
            background: transparent;
        }
    }
    .banner-content {
        background: #fff;
        padding-top: 10px;
    }
    .user-btn {
        padding: 0 15px;
        margin-bottom: 10px;
        button {
            height: 44px;
            background: linear-gradient(270deg, rgba(61, 134, 255, 1), rgba(113, 190, 255, 1));
            border-radius: 8px;
            width: 100%;
            font-size: 18px;
            font-family: PingFang-SC-Medium;
            font-weight: 400;
            color: #fff;
        }
    }
    .add-voucher {
        text-align: center;
        margin-top: -12px;
        z-index: 99999999;
        position: relative;
        button {
            width: 80%;
            height: 34px;
            color: #619cff;
            font-size: 16px;
            font-family: $fontFamilyBold;
            border-radius: 17px;
            background: #fff;
            box-shadow: 0 0 20px rgba(58, 151, 255, .3);
            font-weight: bold;
        }
    }
</style>
