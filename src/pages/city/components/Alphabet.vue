<template>
  <ul class="list border-left">
    <li class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"

  /* 设置 border.css 左边框的颜色 */
  .border-left
    &:before
      border-color: #ccc

  .list
    position absolute
    right 0
    bottom 0
    top $headerHeight + $searchHeight
    display: flex
    flex-direction: column
    justify-content: center
    width: $alphabetWidth

    .item
      text-align: center
      line-height .4rem
</style>