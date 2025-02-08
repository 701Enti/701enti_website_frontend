import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aim",
    name: "aim",
    component: HomeView,
  },
  {
    path: "/read",
    name: "read",
    component: HomeView,
  },
  {
    path: "/comment",
    name: "comment",
    component: HomeView,
  },
  {
    path: "/experiment",
    name: "experiment",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
