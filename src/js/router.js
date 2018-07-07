import Index from "../components/index.vue";
import About from "../components/about.vue";
import Spec from "../components/spec.vue";

export default {
  routes: [
    {
      path: "/index",
      component: Index
    },
    {
      path: "/spec",
      component: Spec
    },
    {
      path: "/about",
      component: About
    }
  ]
};
