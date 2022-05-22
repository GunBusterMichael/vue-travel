<template>
  <!--
    .self：事件只作用在元素本身，不做用于子元素
      用这个后缀实现：
        点击 gallary 黑色背景时，关闭 gallary；
        点击 swiper 区域时，不关闭 gallary。
  -->
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="gallary-pic">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Gallary",
    data () {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true,
          // loop: true
        }
      }
    },
    props: {
      imgs: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('closeGallary', false)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    background-color #000
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    display flex
    flex-direction column
    justify-content center
    z-index: 99
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -.5rem
</style>