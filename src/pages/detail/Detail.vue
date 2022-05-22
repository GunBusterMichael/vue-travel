<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
  import DetailBanner from './components/Banner.vue'
  import DetailHeader from './components/Header.vue'
  import DetailList from './components/List.vue'
  import axios from 'axios'

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        list: []
      }
    },
    methods: {
      getDetailInfo () {
        axios.get('/mock/detail.json', {
          params: {
            /*
              这个 id 是由 recommend 组件传递到路由的，告诉路由要跳转到与被点击的 recommend 组件 id 值对应的 detail 组件。
              detail 组件通过 this.$route.params.id 获取到自己的 id 值，并用 id 值获取自己的后台数据。
            */
            id: this.$route.params.id
          }
        }).then(this.handleGetDataSucc)
      },
      handleGetDataSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      }
    },
    activated () {
      this.getDetailInfo()
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>