<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{$store.state.city}}
        <span class="iconfont arrow-icon">&#xe62b;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style lang="stylus" scoped>
  /* 引入 stylus 全局变量 */
  @import "~styles/varibles.styl"

  /* 1rem = html的font-size = 50px */
  .header
    display: flex
    height: $headerHeight
    background: $bgColor  // 引用变量
    color: #fff
    height: $headerHeight
    line-height $headerHeight
    // padding-top .1rem
    .header-left
      width $backIconWidth
      // float: left
      .back-icon
        text-align center
        font-size: $backIconFontSize
    .header-input
      flex: 1
      color: #ccc
      background-color #fff
      border-radius: .1rem
      height: .64rem
      line-height .64rem
      margin-top .11rem
      padding-left .2rem
    .header-right
      padding: 0 .2rem 0 .2rem
      // float: right
      text-align: center
      color #fff
      .arrow-icon
        font-size: .24rem
        margin-left -.02rem
</style>