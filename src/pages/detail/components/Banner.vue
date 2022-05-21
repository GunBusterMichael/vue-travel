<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="bannerImg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont">&#xe626;</span>39</div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-if="isShowGallary"
      @closeGallary="handleCloseGallary"
    ><!-- @子组件传值到父组件的事件名='子组件传值事件被触发后，父组件要使用的事件' -->
    </common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name: "DetailBanner",
    components: {
      CommonGallary
    },
    data () {
      return {
        isShowGallary: false,
        imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'],
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
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
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