<template>
  <div class="wrapper">
    <!-- 如果 list 不为空数组（即请求到了轮播图数据），则显示轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="slide pic">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        // 让轮播图小圆点生效
        pagination: '.swiper-pagination',
        // 允许循环轮播
        loop: true,
        // 自动播放
        autoplay: 3000,
        autoplayDisableOnInteraction : false,
        observer: true,
        observeParents: true
      },
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    },
  },
  methods: {
    /* 解决路由跳转后，首页 swiper 不轮播的问题 */
    refreshSwiper () {
      if (this.$refs.mySwiper) {
        const swiper = this.$refs.mySwiper.swiper
        /* 重新初始化 swiper */
        swiper.init()
        /* 停止自动轮播 */
        swiper.stopAutoplay()
        /* 启动自动轮播 */
        swiper.startAutoplay()
      }
    }
  },
  activated () {
    this.refreshSwiper()
  }
};
</script>

<style lang="stylus" scoped>
  /*
    因为要在局部组件中修改第三方组件库 VueAwesomeSwiper 的样式，所以要进行样式穿透 >>>

    小圆点所处的 <div class="swiper-pagination" slot="pagination"></div> 是 Swiper 组件的子组件，

    .swiper-pagination-bullet-active 是子组件的属性。

    但由于 scoped，导致当前样式只能用于当前 Swiper 组件中，无法用于包括子组件在内的其他组件。

    在使用穿透 >>> 后，Swiper 中的特定样式就能被运用在子组件之中。

    <!-- ! 注意：允许穿透的样式会被穿透到所有子组件中。
  */
  // 修改当前被轮播到的图片，所对应的小圆点的颜色
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  // 修改小圆点的位置
  .wrapper >>> .swiper-pagination
    bottom: .1rem
  .wrapper
    /*
			padding 的百分比基于父级元素的宽度。
				如果父级元素没有设置宽度，则基于浏览器宽度。
		*/
    overflow: hidden
    width 100%  // 将 wrapper 的宽度设置为整个页面的宽度
    height 0  // 高度的百分比以父级元素为准
    padding-bottom 30.47%  // 底部 padding 的高度为 .wrapper 宽度（即页面宽度）的 30.47%，即图片高度/宽度
    .swiper-img
      width 100%
</style>