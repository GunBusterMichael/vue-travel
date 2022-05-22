<template>
  <div>
    <router-link to="/" class="header-abs" v-if="!isShowFixed">
      <div class="iconfont abs-back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" :style="opacityStyle" v-else>
      <router-link to="/">
        <div class="iconfont fixed-back-icon">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data () {
      return {
        /* 透明样式 */
        opacityStyle: {
          opacity: 0
        },

        /* 是否渲染 fixed，默认为 false */
        isShowFixed: false,

        /* 开始渐隐渐显 fixed 的起始 px 值 */
        startOpacityFixedPx: 60,

        /* fixed 结束渐隐渐显时的 px 值 */
        finishOpacityFixedPx: 140
      }
    },
    methods: {
      /*
        header-fixed 默认隐藏。
        当页面被向下滑动到 60px 后，header-fixed 被渲染，opacity 设定为 0（透明），并开始渐隐渐显动画；
        当页面被向下滑动到 140px 后，header-fixed 完全显现（opacity 为 1）。
      */
      handleScroll () {
        /* 保存当前页面的滚动距离 */
        const top = document.documentElement.scrollTop
        /* 如果滚动距离超过 60 px */
        if (top > 60) {
          /* 将 fixed 渲染到页面上，将 abs 从 DOM 中删除 */
          this.isShowFixed = true
          /*
            计算透明值。
              就算透明值大于 1 也没关系。
                透明值大于 1 时，标签将完全显示，和透明值等于 1 时的效果一致。
          */
          let opacity = (top - this.startOpacityFixedPx) / (this.finishOpacityFixedPx - this.startOpacityFixedPx)
          /* 将计算好的透明值设定为透明样式的样式值 */
          this.opacityStyle = {
            opacity
          }
        } else {
          /* 如果滚动距离小于等于 60 px，则将 fixed 从 DOM 中删除，将 abs 渲染到页面上 */
          this.isShowFixed = false
        }
      }
    },

    /* 当被 keep-alive 缓存的组件被激活时调用。 */
    activated () {
      /*
        在组件被展示时，为 window 全局变量注册页面滚动事件。
        只要页面滚动了，就调用 this.handleScroll 方法，来判断如何显示 header-fixed
      */
      // console.log('ac');
      window.addEventListener('scroll', this.handleScroll)
    },
    /* 当被 keep-alive 缓存的组件失活时调用。 */
    deactivated () {
      /*
        浏览器会为每一个窗口提供一个 window 全局变量。
          因为这些组件都处于一个窗口中，所以在一个组件中注册了全局事件后，在别的页面中也会执行这个全局事件。
          所以在该组件失活时，要将在该组件中注册的全局事件解绑。
      */
      // console.log('deac');
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"

  .header-abs
    position absolute
    left .2rem
    top .2rem
    height .8rem
    width .8rem
    text-align center
    line-height .8rem
    background-color rgba(0, 0, 0, .8)
    border-radius .4rem
    .abs-back-icon
      font-size: $backIconFontSize
      color #fff
  .header-fixed
    position: fixed
    top 0
    left 0
    right 0
    z-index 2
    background $bgColor
    height .86rem
    line-height .86rem
    text-align center
    font-size: $headerFontSize
    color: #fff
    .fixed-back-icon
      color: #fff
      position absolute
      top 0
      left 0
      width $backIconWidth
      font-size $backIconFontSize
</style>