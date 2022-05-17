<template>
  <div class="icons">
    <div class="icon">
      <img
        class="icon-img"
        src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png"
        alt="酒店"
      />
      <div class="icon-content">酒店</div>
    </div>
    <div class="icon">
      <img
        class="icon-img"
        src="https://s.qunarzz.com/homenode/images/touchheader/hotel.png"
        alt="酒店"
      />
      <div class="icon-content">酒店</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
};
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"

.icons
  width 100%
  height 50%
  margin-top .15rem

  // 使用 grid 布局，两行四列
  display grid
  grid-template-columns 25% 25% 25% 25%
  // row-gap: .1rem
  // column-gap .1rem
  .icon-img
    // 让 img 左右居中显示
    display: block
    margin: 0 auto

    width 1.1rem
  .icon-content
    height .5rem
    line-height .5rem
    text-align center
    color $darkTextColor
</style>