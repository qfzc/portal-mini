import Vue from 'vue'
import App from './App'
import store from '@/store/store'
import utils from '@/utils'
import consts from '@/utils/consts'

Vue.config.productionTip = false
Vue.prototype.$store = store // vuex
Vue.prototype.$utils = utils
Vue.prototype.constant = consts
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
