<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false,
      }
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (pages[page] === undefined) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

/*
  因为 .swiper-container 被设定为 overflow: hidden;
  所以，为了能让分页器在 swiper 容器外显示，需要将 overflow 
*/
.icons >>> .swiper-container
  overflow inherit
.icons
  /*
    利用 padding-bottom 设置盒子高度，
    子盒子可以显示在 padding 中。
    设置 height: 0 防止子盒子撑开父盒子，
    同时默认 box-sizing为content-box，
    所以 padding 值可以生效。
  */
  /* 防止页面抖动时，可以不用 overflow: hidden; */
  height: 0;
  padding-bottom: 55%;
  .swiper-pagination
    bottom -.36rem

  .icon
    position: relative;
    overflow: hidden;
    height: 0;
    float: left; // 让每一个 icon 左浮动
    width: 25%; // icon 宽度为页面宽度的 25%
    padding-bottom: 25%; // icon 高度为页面宽度的 25%

    .icon-img
      position: absolute;
      /* 让包裹 icon 图标的 div 上左右边框贴着 icon 的边框 */
      top: 0;
      left: 0;
      right: 0;
      /* 让包裹 icon 图标的 div 下边框距离 icon 下边框 .44rem，为下方文字预留空间 */
      bottom: $iconDescHeight;
      box-sizing: border-box;
      padding: $spacing; // 设置图片间距
      padding-bottom 0

      .icon-img-content
        height: 100%; // 让图片尽量充满包裹它的 .icon-img 盒子
        /* 让图片在 .icon-img 中居中显示 */
        display: block;
        margin: 0 auto;

    .icon-desc
      /* 让 icon 底部文字位于 icon 盒子底部 */
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0rem;
      height: $iconDescHeight;
      line-height: $iconDescHeight;
      text-align: center;
      color: $darkTextColor;
      ellipsis()
</style>