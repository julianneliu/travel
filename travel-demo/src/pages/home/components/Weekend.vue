<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of RecommendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      RecommendList: [
        {
          id: "1",
          imgUrl:
            "https://imgs.qunarzz.com/vs_ceph_b2c_001/1c470f51-b273-49b0-8e63-cd58db4b8c5c.jpg_r_390x260x95_dc5d9647.jpg",
          title: "【跟团游】热卖|体验三峡人家",
          desc: "清江画廊、两坝一峡游轮过船闸、三峡大坝三日游",
        },
        {
          id: "2",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg",
          title: "【跟团游】热卖|体验三峡人家",
          desc: "清江画廊、两坝一峡游轮过船闸、三峡大坝三日游",
        },
        {
          id: "3",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg",
          title: "【跟团游】热卖|体验三峡人家",
          desc: "清江画廊、两坝一峡游轮过船闸、三峡大坝三日游",
        },
        {
          id: "4",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/5a11974656794b4715156501be10c1b7.jpg",
          title: "【跟团游】热卖|体验三峡人家",
          desc: "清江画廊、两坝一峡游轮过船闸、三峡大坝三日游",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.recommend-title{
    margin-top:.2rem
    line-height 0.8rem
    background:#eee;
    text-indent:.2rem
}
.item-img-wrapper
    overflow:hidden
    height:0
    padding-bottom:33.9%
    .item-img
        width:100%
 .item-info
        padding:.1rem

    .item-title
        line-height .54rem
        font-size:.32rem
        ellipsis()

    .item-desc
        line-height:.4rem
        color:#ccc
        ellipsis()
</style>
