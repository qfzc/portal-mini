<template>
  <div class="hospitalSelect container">

      <div class="mask" v-if="showArea" @click="showArea = false">
        <div class="hosArea" >
          <div class="title">请选择您要导航去的院区</div>
          <ul class="hosList">
            <li v-for="(item,i) in hosAreaList" :key="i" @click="selectArea(item)">
              {{item.areaName}}
            </li>
          </ul>
        </div>
      </div>

    <!-- <div class="search-bar">
      <icon class="searchicon" type="search" size="16" />
      <input type="text" placeholder="请输入您要搜索的医院" confirm-type="search" placeholder-class="holderStyle" v-model="searchKey" v-on:input="search" @blur="inputBlur">
    </div> -->

    <hisHospital v-on:toPage="toContinue"></hisHospital>

    <div v-if="hospitalList.length >0" >
      <div class="hos-list row row-center" v-for="(item,index) in hospitalList" :key="index" @click="selectHospital(item)">
        <div class="hos-logo"><img :src="item.logo?item.logo: constant.LOCAL_IMG + 'hos-def-logo.png'" alt=""></div>
        <div class="hos-info">
          <p>{{item.name}}</p>
          <p>{{item.levelDesc}}</p>
          <p>{{item.address}}</p>
        </div>
        <div class="hos-location"><img :src="constant.LOCAL_IMG + 'more-arrow.png'" alt=""></div>
      </div>
    </div>
    <no-record :condition="hospitalList.length === 0" :tips="'抱歉，暂无医院列表信息'"></no-record>
  </div>
</template>
<script>
import hisHospital from '@/components/hisHospital'
import NavList from '@/components/NavList'
import NoRecord from '@/components/NoRecord'
import { getHospitalByArea, getHospitalArea } from '@/service/hospital.service'
import { setItem } from '@/utils/store'
export default {
  data: function () {
    return {
      waitUrl: '',
      hospitalList: [],
      searchKey: '',
      showArea: false,
      hosAreaList: [],
      tempHosInfo: {}
    }
  },
  components: {
    hisHospital,
    NavList,
    NoRecord
  },
  onShow () {
    //  获取传过来的区域id及待进入的页面url
    let q = this.$root.$mp.query
    this.waitUrl = q.waitUrl
    if (q.id) {
      this.getHospitalList(q.id)
    }
  },
  methods: {
    selectArea (item) {
      setItem('selectedHospital', this.tempHosInfo)
      setItem('selectedArea', item)
      this.go(item.areaId)
    },
    inputBlur () {
      if (this.searchKey !== '' && this.searchKey.length > 0) {
        this.search()
      } else {
        this.hospitalList = this.$store.getters.getHospitalList
      }
    },
    search (e) {
      if (this.searchKey === '' || this.searchKey === undefined || this.searchKey.length === 0) {
        this.hospitalList = this.$store.getters.getHospitalList
        return
      }
      this.$utils.throttle(this.formatHosList, 1000, 1000)()
    },
    formatHosList () {
      // if(this.hospitalList.length === 0) return
      let temp = []
      let key = this.searchKey
      let lists = this.$store.getters.getHospitalList
      for (let i = 0; i < lists.length; i++) {
        if (lists[i].name.indexOf(key) >= 0) {
          temp.push(lists[i])
        }
      }
      this.hospitalList = temp
    },
    //  选择医院
    async selectHospital (item) {
      //  将选择的医院信息保存在本地
      // setItem('selectedHospital',item)
      //  查询是否有区域
      let areaList = await getHospitalArea({
        orgId: item.orgId,
        hospitalId: item.id
      })
      if (areaList.resultCode === this.constant.RESULT_SUCCESS) {
        //  todo 显示区域列表(如果有的话) ,目前还没做
        if (areaList.data.length > 1) {
          //  todo
          this.hosAreaList = areaList.data
          this.showArea = true
          this.tempHosInfo = item
        } else if (areaList.data.length === 1) {
          setItem('selectedHospital', item)
          setItem('selectedArea', areaList.data[0])
          // if(!!areaList.data && areaList.data.length > 0){
          //   setItem('selectedArea',areaList.data[0])
          //   areaId = areaList.data[0].areaId
          // }else{
          //   areaId = item.areaLevel
          // }
          //  todo 根据不同的路径 返回方式不一样
          // if(this.waitUrl === 'noredirect'){
          //   this.$utils.back(2)
          //   return
          // }
          let areaId = areaList.data[0].areaId
          this.go(areaId)
          // mpvue.redirectTo({
          //   url: '../' + this.waitUrl +'/main?areaId=' + areaId
          // })
        } else {
          this.$utils.showToast('暂未找到院区')
        }
      }
    },
    go (areaId) {
      if (this.waitUrl === 'noredirect') {
        this.$utils.back(2)
        return
      }
      let url = '../' + this.waitUrl + '/main'
      if (areaId) {
        url = url + '?areaId=' + areaId
      }
      mpvue.redirectTo({
        url: url
      })
    },
    //  获取医院列表
    async getHospitalList (id) {
      let data = {
        areaLevel: id,
        orgId: '1001'
      }
      let res = await getHospitalByArea(data)
      if (res.resultCode === '1') {
        this.hospitalList = res.data
        //  将数据保存在vuex中
        this.$store.commit('setHospitalList', res.data)
      }
    },
    toContinue (e) {
      this.go()
      // mpvue.redirectTo({
      //   url: '../'+ this.waitUrl+'/main'
      // })
    }
  }
}
</script>
<style lang="scss" scoped>
// transform: translateX(.6rem);
// transition: transform .3s cubic-bezier(.645,.045,.355,1);
.hospitalSelect{
  .search-bar{
    height: 50px;
    background: #fff;
    input{
      height: 32px;
      margin: 9px 15px;
      border: 1px solid #D6D6D6;
      border-radius: 5px;
      background: #EFF2F5;
      display: inline-block;
      width: 315px;
      font-size: 13px;
      // text-align: center;
      padding-left: 30px;
    }
    .searchicon{
      position:absolute;
      margin:18px 0;
      left:25px;
    }
  }
  .holderStyle{
    color: #999;
    font-size: 13px;
  }
  .hos-list{
    background: #fff;
    height: 60px;
    position: relative;
    box-shadow:0px 1px 2px 0px rgba(81,168,236,0.2);
    margin-bottom: 2px;
    .hos-logo{
      padding: 0 15px;
      img{
        width: 34px;
        height: 34px;
      }
    }
    .hos-info{
      p:nth-child(1){
        color: #111;
        font-size: 15px;
        line-height: 16px;
      }
      p:nth-child(2),p:nth-child(3){
        color: #666666;
        font-size: 13px;
        line-height: 14px;
      }
    }
    .hos-location{
      position: absolute;
      right: 30px;
      img{
        width: 16px;
        height: 21px;
      }
    }
  }
  .mask{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: #3b3b3b;
    opacity: .8;
  }
  .hosArea{
    background: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 999;
    .title{
      color: #51A8EC;
      font-size: 15px;
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
    }
    .hosList{
      height: 180px;
      overflow: auto;
      padding: 0 15px;
      li{
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
        margin-bottom: 10px;
        box-shadow:0px 1px 2px 0px rgba(81,168,236,0.2);
        color: #333;
        font-size: 15px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
      }
    }
  }
}
</style>

