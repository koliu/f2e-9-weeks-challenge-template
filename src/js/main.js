import resetCSS from "../css/reset.css";
import style from "../css/main.scss";
import Vue from "./vue.js";
// import axios from "./axios.min.js";

/* vue components */
import about from "../components/about.vue";

Vue.filter("formatCurrency", n => new Intl.NumberFormat().format(n));

new Vue({
  el: "#app",
  data: {
    showAbout: true,
  },
  components: {
    about
  },
  methods: {
    hideAbout() {
      this.showAbout = false;
    }
  },
  computed: {
  },
  created() {}
});
