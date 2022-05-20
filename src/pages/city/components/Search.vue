<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="请输入城市名或拼音"
        v-model="query"
      >
    </div>
    <div class="search-res" ref="searchResArea" v-show="query">
      <ul>
        <li
          class="search-res-item border-bottom"
          v-for="item in resList"
          :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-res-item border-bottom" v-show="isNoMatchingRes">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  /* 导入滑动模块 */
  import Bscroll from 'better-scroll'

  export default {
    name: "CitySearch",
    props: {
      cities: Object
    },
    data () {
      return {
        /* query 是用户输入的查询内容 */
        query: '',

        /*
          resList 是根据用户输入的内容，查询到的城市数据
          数据结构：
            [
              {
                "id": 56,
                "spell": "aba",
                "name": "阿坝"
              },
              {
                "id": 57,
                "spell": "akesu",
                "name": "阿克苏"
              }
            ]
        */
        resList: [],

        /*
          timer 是节流器
            节流的对象：
              根据用户输入的内容，对 cities 进行遍历，查找到符合用户输入的数据。
        */
        timer: null,

        /*
          isNoMatchingRes
            1. 含义
              是否没有找到符合用户搜索内容的数据。
            2. 状态
              如果没有找到符合用户搜索内容的数据，即 resList.length == 0，则返回 true；
              如果找到了符合用户搜索内容的数据，即 resList.length != 0，则返回 false。
            3. 作用
              决定是否显示“没有找到匹配数据”。
        */
        isNoMatchingRes: false
      }
    },
    watch: {
      /* 监听用户输入的数据的变化，并遍历所有的城市名，查找符合用户输入的城市 */
      query () {
        /* 节流函数：100ms 未改变输入内容后，再查找符合用户输入的城市 */
        if (!this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          /* 建立一个空数组 res，用于暂时存放符合要求的数据 */
          let res = []
          /* 按照检索字母（A、B、C...）遍历 cities 对象 */
          for (const key in this.cities) {
            /* 遍历检索字母相同的城市 */
            this.cities[key].forEach(value => {
              /* 判断城市的中文名和拼音中是否存在用户所输入的数据 */
              if (value.name.indexOf(this.query) > -1 || value.spell.indexOf(this.query) > -1) {
                /*
                  将符合条件的城市对象加入到 res 数组中。
                  城市对象数据结构：
                  {
                    "id": 56,
                    "spell": "aba",
                    "name": "阿坝"
                  }
                */
                res.push(value)
              }
            })
          }
          /* 将res 赋值给 data 函数中的 resList */
          this.resList = res
          /*
            判断是否找到了符合要求的数据
              如果没有找到数据，this.resList.length == 0 的返回值为 true；
              如果找到了数据，this.resList.length == 0 的返回值为 false。
          */
          this.isNoMatchingRes = this.resList.length == 0
        }, 100)
      }
    },

    /* 在 mounted 生命周期函数中激活滑动模块 */
    mounted () {
      /*
        如果符合要求的城市过多，在一页中放不下，
        用户可以滑动符合要求的城市。
      */
      this.Bscroll = new Bscroll(this.$refs.searchResArea)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"

  .search
    background $bgColor
    height $searchHeight
    padding: 0 .1rem
    .search-input
      box-sizing: border-box
      width 100%
      height .62rem
      line-height .62rem
      text-align: center
      border-radius: .06rem
      padding: 0 .1rem
      color #666
  .search-res
    z-index: 1
    overflow: hidden
    position: absolute
    top: $headerHeight + $searchHeight
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-res-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>