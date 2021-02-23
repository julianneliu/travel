<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        // autoplay: false,
        pagination: {
          el: ".swiper-pagination",
        },
        keyboardControl: true,
        mousewheelControl: true,
        loop: true,
        slidesPerView: "auto",
        loopedSlides: 2,
      },
      //   iconList: [
      //     {
      //       id: "1",
      //       imgUrl: "http://s.qunarzz.com/homenode/images/touchheader/hotel.png",
      //       desc: "酒店",
      //     },
      //     {
      //       id: "2",
      //       imgUrl: "http://s.qunarzz.com/homenode/images/touchheader/flight.png",
      //       desc: "机票",
      //     },
      //     {
      //       id: "3",
      //       imgUrl: "http://s.qunarzz.com/homenode/images/touchheader/train.png",
      //       desc: "火车票",
      //     },
      //     {
      //       id: "4",
      //       imgUrl:
      //         "http://s.qunarzz.com/homenode/images/touchheader/package.png",
      //       desc: "度假",
      //     },
      //     {
      //       id: "5",
      //       imgUrl: "http://s.qunarzz.com/homenode/images/touchheader/piao.png",
      //       desc: "景点门票",
      //     },
      //     {
      //       id: "6",
      //       imgUrl:
      //         "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
      //       desc: "海外酒店",
      //     },
      //     {
      //       id: "7",
      //       imgUrl:
      //         "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
      //       desc: "低价机票",
      //     },
      //     {
      //       id: "8",
      //       imgUrl:
      //         "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
      //       desc: "船票",
      //     },
      //     {
      //       id: "9",
      //       imgUrl:
      //         "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
      //       desc: "自由行",
      //     },
      //   ],
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
    height:0;
    padding-bottom:50%;
.icons
    margin-top:.1rem
.icon
        overflow:hidden
        position:relative
        float:left
        width:25%
        height:0
        padding-bottom:25%

    .icon-img
            position:absolute
            top:0
            left:0
            right:0
            bottom 0.44rem
            box-sizing:border-box
            padding:.1rem

            .icon-img-content
                display:block
                margin:0 auto
                height:100%
    .icon-desc
            position:absolute
            left:0
            right:0
            bottom 0
            height 0.44rem
            line-height:.44rem
            text-align:center
            color:$darkTextColor
            ellipsis()
</style>
