<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconarrow-left-bold back-icon"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconsearch"></span>
      输入城市景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont iconjiantouarrow486"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header {
  display: flex;
  line-height: 0.86rem;
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
    padding-left:0.2rem
  flex: 1;
  height: 0.62rem;
  line-height: 0.62rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}
.header-right {
  width: 1.24rem;
  float: right;
  text-align: center;
}
</style>
