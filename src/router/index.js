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
    /*
      :id 接收 recommend 组件传来的 id 参数
      点击某个推荐的时候，会按照它的 id 值，进行路由跳转，跳转到 detail 组件
    */
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

export default new Router({
  routes,

  /* 让页面切换的时候始终回到最顶部 */
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
