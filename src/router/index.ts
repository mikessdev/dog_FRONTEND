import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DogsView from "../views/DogsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dogs",
      name: "dogs",
      component: DogsView,
    },
  ],
});

export default router;
