<template>
  <div class="list infinite-list" ref="wrapper" style="overflow:auto">
    <div>
      <div class="area">
        <div class="title" border-topbottom>当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title" border-topbottom>热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div
        class="area scroll-content"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title scroll-item" border-topbottom>{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String,
  },
  methods: {
    jump(index) {
      let target = document.querySelector(".scroll-content");
      let scrollItems = document.querySelectorAll(".scroll-item");

      // 判断滚动条是否滚动到底部
      if (target.scrollHeight <= target.scrollTop + target.clientHeight) {
        this.activeStep = index;
      }
      //   let total = scrollItems[index].offsetTop - scrollItems[0].offsetTop; // 锚点元素距离其offsetParent(这里是body)顶部的距离(待滚动的距离)
      scrollItems[index].scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        // console.log(this.letter.charCodeAt());
        let index = this.letter.charCodeAt() - 65;
        this.jump(index);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-topbottom
    &:before
        border-color:#ccc
    &:after
        border-color:#ccc
.border-bottom
    &:before
        border-color:#ccc
.list
    overflow:hidden
    position:absolute
    top 1.68rem
    left 0
    right 0
    bottom 0
    // background red
.title
    line-height:.44rem
    background:#eee
    padding-left:.2rem
    color:#666
    font-size:.26rem
.button-list
    overflow:hidden
    padding 0.1rem .6rem .1rem .1rem
    .button-wrapper
        float:left
        width:33.33%
        .button
            margin 0.1rem
            padding .1rem 0
            text-align:center
            border:.02rem solid #ccc
            border-radius:.06rem
.item-list
    .item
        line-height:.76rem
        padding-left:.2rem
</style>
