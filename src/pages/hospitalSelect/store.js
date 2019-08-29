// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hospitalList: []
  },
  mutations: {
    setHospitalList: (state, value) => {
      const obj = state
      obj.hospitalList = value
    }
  },
  getters: {
    getHospitalList: (state) => {
      return state.hospitalList
    }
  }
})

export default store
