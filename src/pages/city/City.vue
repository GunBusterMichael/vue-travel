<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
        cities: {}
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
    },
    mounted () {
      this.getCityInfo()
    }
  }
</script>

<style scoped>
  
</style>