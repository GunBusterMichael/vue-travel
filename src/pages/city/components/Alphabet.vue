<template>
  <ul class="list border-left">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handleLetterClick"
      @touchmove.prevent="handleTouchMove"
    >
      {{ item }}
    </li>
    <!-- 通过添加.prevent 阻止手指移动的默认事件。这样，在拖动字母检索时，整个页面不会跟着拖动 -->
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  data() {
    return {
      /*
          touchStatus
            1. 作用
              存储当前手指在 Alphabet 上触摸的状态。
            2. 状态
              2.1 true
                当前手指正在触摸 Alphabet。
              2.2 false
                当前手指没有触摸 Alphabet。
        */
      // touchStatus: false,

      /* header 与 search 的高度（px） */
      headerAndSearchPxHeight: 79,

      /* 一个 letter 的高度（px） */
      letterHeight: 20,

      /* Alphabet 中 A 的顶部距离 Alphabet 组件（当前组件）顶部的距离（不带单位） */
      startY: 0,

      /* 防抖计时器 */
      timer: null,
    };
  },
  updated() {
    /*
        最开始传递到该组件的数据 cities 为空数组 {}。
        当 axios 请求到数据后，cities 会进行更新，city 页面会显示城市信息。
        在数据更新后，获取 A 距离当前组件顶部的距离。
        这样能够保证，在数据不进行更新时，只会获取一次 startY，提升性能。
      */
    /*
        获取 Alphabet 中 A 的顶部距离 Alphabet 组件（当前组件）顶部的距离（不带单位）。
        offsetTop：元素距离有定位的父级元素 border 的距离。如果父元素没有定位或没有父元素，则以 body 为准。
      */
    this.startY = this.$refs["A"][0].offsetTop; // A 距离当前组件上 border 的距离为 74 px，返回值为数字 74
  },
  computed: {
    /* 取出 cities 中的字母索引 */
    letters() {
      const letters = [];
      for (const key in this.cities) {
        letters.push(key);
      }
      return letters;
    },
  },
  methods: {
    emitLetterChange(selectedLetter) {
      this.$emit("change", selectedLetter);
    },

    handleLetterClick(e) {
      /*
          e.target.innerText 是当前被点击的字母（A、B、C、D、E...），
          将字母传递到父组件 city 中，经由 city 传递给 list 组件。
          change 是将值传给父组件的事件名，e.target.innerText 是事件传递的信息。
        */
      // this.$emit('change', e.target.innerText)
      this.emitLetterChange(e.target.innerText);
    },

    /* 当手指触摸 Alphabet 时，将 Alphabet 赋值为 true */
    // handleTouchStart () {
    //   this.touchStatus = true
    // },

    /* 处理手指滑动 Alphabet 时要进行的运算 */
    /*
      对滑动操作进行节流：
        初始化计时器为 timer 为 null。
        如果从未创建过计时器，则创建一个 10ms 后处理手指滑动 alphabet 事件的计时器。
        如果在 10ms 内，手指又进行了滑动，则取消执行上一次滑动错所创建的计时器，并创立一个新的计时器。
        等价于 ==》》 如果在 10ms 的间隔内进行了滑动，则重新计时，
        直到停止滑动 10ms 后，处理手指滑动 alphabet 事件。
    */
    handleTouchMove(e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        /* 获取手指距离 Alphabet 组件（当前组件）顶部的距离（不带单位） */
        const touchY = e.touches[0].clientY - this.headerAndSearchPxHeight;

        /* 计算当前手指滑动到了哪一个字母上 */
        let index = Math.floor((touchY - this.startY) / this.letterHeight);

        if (index >= 0 && index < this.letters.length) {
          this.emitLetterChange(this.letters[index]);
        }
      }, 8);
    },

    /* 当手指离开 Alphabet 时，将 Alphabet 赋值为 false */
    // handleTouchEnd () {
    //   this.touchStatus = false
    // }
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

/* 设置 border.css 左边框的颜色 */
.border-left
  &:before
    border-color: #ccc;

.list
  position: absolute;
  right: 0;
  bottom: 0;
  top: $headerHeight + $searchHeight;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: $alphabetWidth;
  background: #fff;

  .item
    text-align: center;
    line-height: 0.4rem;
</style>