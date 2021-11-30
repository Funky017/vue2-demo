import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/icons'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 全局配置
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,   // 使用路由配置
  store,    // 使用vuex进行状态管理
  render: h => h(App)
}).$mount('#app')
