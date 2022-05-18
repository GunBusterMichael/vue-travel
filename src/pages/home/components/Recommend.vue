<template>
  <div>
    <div class="title">热销推荐</div>

    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-desc">{{item.desc}}</div>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      list: Array
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';

  .title
    margin-top $spacing
    line-height .8rem
    background #eee
    text-indent: .2rem

  .item
    overflow: hidden
    display: flex
    height: 1.9rem

    .item-img
      width 1.7rem
      padding $recommendItemPadding
    
    .item-info
      flex: 1
      padding $recommendItemPadding
      min-width 0  // 此样式配合 ellipsis() 才能让文字溢出后显示 ...
      display: flex
      flex-direction: column
      justify-content: space-between

      .item-title
        line-height .54rem
        font-size: .32rem
        ellipsis()

      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()

      .item-button
        background: #ff9300
        color #fff
        border-radius: .1rem
        padding: .03rem .1rem .03rem .1rem
        margin-top .15rem
        line-height: .44rem
        width: 1.6rem
</style>