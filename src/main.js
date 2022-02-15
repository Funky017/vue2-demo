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

// 使用Vuex + axios，全局配置不需要了
// 全局配置
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// 每次路由跳转之前执行
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');
  // 登出：清空
  if (to.path == '/logout') {
    sessionStorage.clear();
    next({path:'/login1'})
  } else if (to.path == '/login1') {
    if (isLogin != null) {
      next({path:'/main'})
    }
  } else if(isLogin == null) {
    next({path:'/login1'})
  }
  next();
})

new Vue({
  router,   // 使用路由配置
  store,    // 使用vuex进行状态管理
  render: h => h(App)
}).$mount('#app')
