import resetCSS from "../css/reset.css";
import style from "../css/main.scss";
// import Vue from "./vue.js";
// import axios from "./axios.min.js";
import Vue from "vue";
import VueRouter from "vue-router";
import routerConfig from "./router";

/* vue components */
import App from "../app.vue";
import about from "../components/about.vue";

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
