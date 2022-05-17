<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
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
  data() {
    return {
      swiperOption: {
        // 让轮播图小圆点生效
        pagination: '.swiper-pagination',
        // 允许循环轮播
        loop: true,
        // 自动播放
        autoplay: 3000,
      },
      // 设置轮播图列表
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg'
      }, {
        id: '0002',
        imgUrl: 'https://ad-dapp-osscp.qunarzz.com/ad_dapp_oss_oper/7603042338b1215e3e8c5a32fce67933.jpg'
      }]
    }
  }
};
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
  .wrapper
    overflow: hidden
    width 100%  // 将 wrapper 的宽度设置为整个页面的宽度
    height 0  // 高度的百分比以父级元素为准
    padding-bottom 30.47%  // 底部 padding 的高度为 width 的 30.47%，即图片高度/宽度
    .swiper-img
      width 100%
</style>