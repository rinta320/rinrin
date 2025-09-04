import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // ← Vuex ストアを読み込む

Vue.config.productionTip = false;

new Vue({
  router,
  store, // ← ストアをアプリに組み込む
  render: h => h(App),
}).$mount("#app");


