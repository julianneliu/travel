<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item, key) of cities"
      :key="key"
      @click="handleLetterClick"
    >
      {{ key }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
      //   console.log(e.target.innerText);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
    display:flex
    flex-direction column
    justify-content center
    position:absolute
    top:1.58rem
    right:0
    bottom:0
    width:.4rem
    // background:red
    .item
        text-align center
        line-height .4rem
        color:$bgColor
</style>
