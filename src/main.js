import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as axios from './common/utils/http';
import "./assets/less/global.less"
import 'ant-design-vue/dist/antd.css'

Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
