<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of RecommendList"
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" />

        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      RecommendList: [
        {
          id: "1",
          imgUrl:
            "http://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/7d9b233c71cad13ded0013f9c9cec635.jpg",
          title: "【跟团游】热卖|体验三峡人家",
          desc: "清江画廊、两坝一峡游轮过船闸、三峡大坝三日游",
        },
        {
          id: "2",
          imgUrl:
            "http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          title: "【跟团游】热卖|体验三峡人家",
          desc: "清江画廊、两坝一峡游轮过船闸、三峡大坝三日游",
        },
        {
          id: "3",
          imgUrl:
            "http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          title: "【跟团游】热卖|体验三峡人家",
          desc: "清江画廊、两坝一峡游轮过船闸、三峡大坝三日游",
        },
        {
          id: "4",
          imgUrl:
            "http://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
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
.item
    display:flex
    overflow:hidden
    height 1.9rem
    // background:red
    .item-img
        width 1.7rem
        height 1.7rem
        padding:.1rem
     .item-info
        flex:1
        padding:.1rem
        min-width:0
        .item-title
            line-height .54rem
            font-size:.32rem
            ellipsis()

        .item-desc
            line-height:.4rem
            color:#ccc
            ellipsis()

        .item-button
            line-height:.44rem
            margin-top:.16rem
            background #ff9300
            padding:0 .2rem
            border-radius:.06rem
            color:#fff
</style>
