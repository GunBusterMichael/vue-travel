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
  import getHomeInfo from 'network/api/home.js'

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
        weekendList: [],
        lastCity: ''
      }
    },
    methods: {
      async initHome () {
        // 向这个网站发送请求 http://localhost:8080/mock/index.json?city=beijing
        const params = {
          city: this.$store.state.city
        }
        /*
          getHomeInfo 返回一个 axios 实例，
          await 会等 axios 实例（promise）实例执行完后，将返回的数据赋值给 data。
        */
        const data = await getHomeInfo(params)
        // console.log(data);
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    },

    /*
      由于开启了 keep-alive，导致重新返回 Home 后，不会重新渲染 Home，将 Home 重新挂载到 DOM 上，
        而是将第一次渲染出来的 Home DOM 保存，再次进入 Home 时，直接将保存的 DOM 加载到页面上。
        所以不会调用 mounted 方法，不会根据新选择的 city 进行 axios 请求。
      所以，要将上一次选择的 city 存储为 this.lastCity。
    */
    mounted () {
      this.lastCity = this.$store.state.city
      this.initHome()
    },
    /*
      在开启了 keep-alive 后，组件被重新加载时，会产生一个新的生命周期函数 activated。
      在生命周期函数 activated 中判断，当前城市是否与之前的城市相同。
      如果不相同，则重新发送 axios 请求，并将当前城市保存为上一个城市。
    */
    /*
      如果开启了 keep-alive，在第一次加载组件时，会调用 mounted 和 activated。
      如果再次加载，之前加载过的组件，则只会调用 activated 方法。
    */
    activated () {
      if (this.lastCity !== this.$store.state.city) {
        this.lastCity = this.$store.state.city
        this.initHome()
      }
    }
  }
</script>

<style scoped>
  
</style>