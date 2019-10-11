import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'lib-flexible/flexible.js'
import * as axios from './common/utils/http';
import "./assets/less/global.less"
import {hybrid} from './common/app'

Vue.prototype.$hybrid = hybrid
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
