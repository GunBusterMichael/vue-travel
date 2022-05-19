<template>

  <!--
    list 的宽高即为本组件的宽高。
    如果内容超过本组件宽高，即可触发 better-scroll。
  -->
  <div class="list border-right" ref="wrapper">

    <!-- 将需要滚动的内容放到一个标签中 -->
    <div class="content">

      <!-- 当前城市 -->
      <div class="area">
        <!-- class border-topbottom 可以添加上下边框 -->
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
  
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
  
      <!-- 按照字母分类排序的城市列表 -->
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: "CityList",
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  
  /* 设置 border.css 上下边框的颜色 */
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  
  /* 设置 border.css 下边框的颜色 */
  .border-bottom
    &:before
      border-color: #ccc

  .list
    overflow: hidden  // 防止内容滚动时，内容会被上滑到 header 和 search 上
    position absolute  // 让包裹整个组件的 div 绝对定位
    /* 利用 top right bottom left 设定绝对定位元素的宽高 */
    top $headerHeight + $searchHeight  // 顶部让出 header 和 search 的高度
    right $alphabetWidth  // 右边留出竖状字母索引的宽度
    bottom 0
    left 0

    .title
      line-height .54rem
      background #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem

    .button-list
      display: flex
      flex-wrap: wrap
      justify-content: flex-start
      padding .1rem .6rem .1rem .1rem
      /*
        botton-list 的左 padding 为 .1rem，
        botton 的左 margin 为 .1rem，
        加起来，botton 距离页面左边的间距为 .2rem。
      */

      .button-wrapper
        width 33.33%

        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem

    .item-list
      .item
        line-height: .76rem
        color #666
        padding-left .2rem
</style>