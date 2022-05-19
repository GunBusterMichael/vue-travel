<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    >
    </city-list>
    <!--
      监听 alphabet 组件传值事件 change，
      在 change 事件被触发后，调用该组件（city）的方法 handleLetterClick
    -->
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    >
    </city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from './components/Header.vue'
  import CitySearch from './components/Search.vue'
  import CityList from './components/List.vue'
  import CityAlphabet from './components/Alphabet.vue'

  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data () {
      return {
        /* 保存热门城市数据 */
        hotCities: [],

        /* 保存以拼音首字母分类的城市数据 */
        cities: {},

        /* 保存从子组件 alphabet 传来的，当前被点击的字母 */
        letter: ''
      }
    },
    methods: {
      // 封装 axios 请求
      getCityInfo () {
        axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      },

      // letter 为子组件传递过来的值（被点击的字母）
      handleLetterChange (letter) {
        this.letter = letter
      }
    },

    /* 在该组件被挂载到 DOM 上时，向服务器请求数据 */
    mounted () {
      this.getCityInfo()
    }
  }
</script>

<style scoped>
  
</style>