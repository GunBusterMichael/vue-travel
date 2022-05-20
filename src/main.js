// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入 fastclick 库，解决移动端点击300ms延迟问题
import fastClick from 'fastclick'
// 引入能让所有手机显示效果一致的 css 文件
import 'styles/reset.css'
// 引入解决 1px border 问题的 css 文件
import 'styles/border.css'
// 引入 iconfont 字体图标
import 'styles/iconfont.css'
// 引入轮播图插件 vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入轮播图插件的 css 文件
require('swiper/dist/css/swiper.css')

Vue.config.productionTip = false
// 使用 fastClick 库
fastClick.attach(document.body)
// 使用 vue-awesome-swiper 插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
