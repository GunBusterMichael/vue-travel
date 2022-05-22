<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont">&#xe626;</span>{{gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-if="isShowGallary"
        @closeGallary="handleCloseGallary"
      ><!-- @子组件传值到父组件的事件名='子组件传值事件被触发后，父组件要使用的事件' -->
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  import FadeAnimation from 'common/fade/FadeAnimation'

  export default {
    name: "DetailBanner",
    components: {
      CommonGallary,
      FadeAnimation
    },
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array,
    },
    data () {
      return {
        isShowGallary: false,
      }
    },
    methods: {
      /* 点击 Banner 的图片时，显示画廊 */
      handleBannerClick () {
        this.isShowGallary = true
      },

      /* 点击画廊组件时，关闭画廊 */
      handleCloseGallary () {
        this.isShowGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55% // 相对于父级盒子（整个组件宽度）宽度的 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      display flex
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      /* 添加图片底部渐变色 */
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        /* 用 margin 和 padding 进行定位 */
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .26rem
        .iconfont
          font-size: .26rem
          padding-right .1rem
</style>