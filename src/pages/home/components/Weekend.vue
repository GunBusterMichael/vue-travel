<template>
  <div>
    <div class="title">周末去哪儿</div>

    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          title: '北京-三亚 5 天自由行',
          desc: '含往返飞机票(含税)+4晚住宿'
        }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          title: '石家庄苍岩山风景区',
          desc: '电影中的世外桃源'
        }, {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
          title: '石家庄苍岩山风景区',
          desc: '电影中的世外桃源'
        }]
      }
    }
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

  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
      width 100%
  .item-info
    padding $recommendItemPadding
    min-width 0  // 此样式配合 ellipsis() 才能让文字溢出后显示 ...
    .item-title
      line-height .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>