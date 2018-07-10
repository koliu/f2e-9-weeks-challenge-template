import resetCSS from "../css/reset.css";
import style from "../css/main.scss";
// import axios from "./axios.min.js";
import Vue from "vue";
import VueRouter from "vue-router";
import routerConfig from "./router";

/* vue components */
import App from "../app.vue";

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
