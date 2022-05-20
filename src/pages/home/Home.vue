<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  import axios from 'axios'

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      /* 利用 axios 请求数据 */
      getHomeInfo () {
        /* 
          在 config/index.js 中，
            用 proxyTable 进行代理，
            将以 /api 开头的请求代理到 /static/mock 上。
        */
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      /* 处理请求到的数据 */
      getHomeInfoSucc (res) {
        res = res.data  // 将真正需要的 data 数据赋值到 res 中
        /* 
          ret 若为 true，则代表返回数据成功。
            下面的 if 用来判断 ret 是否为 true，并且 data 不为空值。
        */
        if (res.ret && res.data) {
          const data = res.data  // 将请求过来的，包含页面数据的 data 赋值到 data 中
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted () {
      this.getHomeInfo()
    }
  }
</script>

<style scoped>
  
</style>