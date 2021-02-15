import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import "./assets/styles/reset.css";
// 1像素边框
import "./assets/styles/border.css";
//click延迟3秒
import fastclick from "fastclick";

Vue.config.productionTip = false;
fastclick.attach(document.body);
Vue.use(Router);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
