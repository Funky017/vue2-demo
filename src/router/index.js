import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register.vue'
Vue.use(VueRouter)

export const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {path: '/login',component: () =>import('@/views/Login')},
  {path: '/login1',component: () =>import('@/views/Login1')},
  {path: '/success',component: () =>import('@/views/success')},
  {path: '/error',component: () =>import('@/views/error')},
  {
    path: '/register',
    name: Register,
    component: Register
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})


