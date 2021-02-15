<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperList: [
        {
          id: "1",
          imgUrl:
            "http://imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg",
        },
        {
          id: "2",
          imgUrl:
            "http://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg",
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        keyboardControl: true,
        mousewheelControl: true,
        loop: true,
        slidesPerView: "auto",
        loopedSlides: 2,
        // Some Swiper option/callback...
      },
    };
  },
  //   computed: {
  //     swiper() {
  //       return this.$refs.mySwiper.$swiper;
  //     },
  //   },
  //   mounted() {
  //     console.log("Current Swiper instance object", this.swiper);
  //     this.swiper.slideTo(2, 2000, true);
  //   },
};
</script>

<style lang="stylus" scoped>
.swiper-img
    width:100%
</style>
