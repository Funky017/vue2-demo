import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/components/Register.vue'
import Main from '@/views/Main.vue'
import MemberList from "@/views/Member/MemberList";
import MemberLevel from "@/views/Member/MemberLevel";
import NotFound from "@/views/NotFound";
Vue.use(VueRouter)

export const routes = [
  {path: '/login',component: () =>import('@/views/Login')},
  {path: '/success',component: () =>import('@/views/success')},
  {path: '/error',component: () =>import('@/views/error')},
  {
    path: '/register',
    name: Register,
    component: Register
  },
  {path: '/login1',component: () =>import('@/views/Login1')},
  {
    // 首页，嵌套路由
    path: '/main/:name',
    name: 'Main',
    component: Main,
    children:[
      {
        // 会员列表
        path: '/member/list',
        name: 'MemberList',
        component: MemberList,
      },
      {
        // 会员等级
        path: '/member/level/:id',
        name: 'MemberLevel',
        component: MemberLevel,
        props:true
      }
    ]
  },
  {
    path:'/goMain/:name',
    redirect: '/main/:name'   // 重定向
  },
  {
    path: '*',
    component: NotFound
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})


