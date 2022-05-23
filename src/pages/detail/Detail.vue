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
  import getDetailInfo from 'network/api/detail'

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
      async initDetail () {
        /*
          在 Home 中的 Recommend 组件中，有许多的推荐景点。
          点击这些景点后，会展示对应的 detail 组件。
          detail 组件根据被点击的景点的 id 来获取相应景点的数据。
          景点 id 通过 Recommend 组件中的 :to="'/detail/' + item.id" 传递到路由中。
          路由会将页面跳转到 /detail/0001（0001是id）中，显示 detail 组件。
          detail 组件通过 $route.params.id 获取当前通过路由传递过来的 id 值，并通过 id 值从后端获取对应数据。
        */
        const params = {
          id: this.$route.params.id
        }
        const data = await getDetailInfo(params)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    },
    activated () {
      this.initDetail()
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>