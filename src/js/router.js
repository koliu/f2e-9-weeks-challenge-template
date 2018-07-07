import Index from "../components/index.vue";
import About from "../components/about.vue";

export default {
  routes: [
    {
      path: "/index",
      component: Index
    },
    {
      path: "/about",
      component: About
    }
  ]
};
