import Index from "../components/index.vue";
import About from "../components/about.vue";
import Spec from "../components/spec.vue";

export default {
  routes: [{
      path: "/",
      component: Index,
      alias: "/index"
    },
    {
      path: "/spec",
      component: Spec
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "*",
      component: () =>
        import ("../components/404.vue"),
      alias: "/404"
    }
  ]
};
