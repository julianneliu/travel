<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconarrow-left-bold back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconsearch"></span>
      输入城市景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.doubleCity }}
        <span class="iconfont iconjiantouarrow486"></span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["city"]),
    ...mapGetters(["doubleCity"]),
  },
  props: {},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header {
  display: flex;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
}
.header-left {
  width: 0.64rem;
  float: left;
  .back-icon{
      text-align:center
      font-size:.4rem;
  }
}
.header-input {
    padding-left:0.1rem
  flex: 1;
  height: 0.62rem;
  line-height: 0.62rem;
  margin-top: 0.18rem;
  margin-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}
.header-right {
  min-width: 1.04rem;
  padding:.1rem;
  float: right;
  text-align: center;
  color:white
}
</style>
