import Vue from 'vue'
import App from './App'
import store from './store'
import * as filters from '@/common/filter'

Vue.config.productionTip = false

App.mpType = 'app'

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  ...App,
  store
})
app.$mount()
