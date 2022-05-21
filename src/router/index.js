import Vue from 'vue'
import Router from 'vue-router'

// 懒加载组件：用到组件时再加载相关 JS 代码
const Home = () => import('@/pages/home/Home.vue')
const City = () => import('@/pages/city/City.vue')
const Detail = () => import('@/pages/detail/Detail.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

export default new Router({
  routes
})
