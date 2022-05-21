<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    选择城市
  </div>
</template>

<script>
  export default {
    name: "CityHeader",
    
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"

  .header
    background: $bgColor
    height: $headerHeight
    line-height $headerHeight
    text-align: center
    color: #fff
    font-size: $headerFontSize
    position relative
    .back-icon
      /*
        需要利用“子绝父相”，才能让 back-icon 显示出来
      */
      position absolute
      left 0
      top 0
      font-size $backIconFontSize
      color #fff
      width $backIconWidth
</style>