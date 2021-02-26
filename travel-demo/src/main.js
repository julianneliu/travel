import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import "./assets/styles/reset.css";
// 1像素边框
import "./assets/styles/border.css";
//click延迟3秒
import fastclick from "fastclick";
import "./assets/styles/iconfont.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vuex from "vuex";
import store from "./store";
// import "default-passive-events";

Vue.use(Vuex);
Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.use(Router);
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
