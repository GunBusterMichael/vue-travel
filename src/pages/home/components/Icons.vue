<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconsList: [
        {
          id: "0001",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0002",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0003",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0004",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0005",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0006",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0007",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0008",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0009",
          imgUrl: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
      ],
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
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

.icons
  /*
    利用 padding-bottom 设置盒子高度，
    子盒子可以显示在 padding 中。
    设置 height: 0 防止子盒子撑开父盒子
  */
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

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
      padding: 0.3rem; // 设置图片间距
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