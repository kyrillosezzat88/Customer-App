import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import CustomerDetails from "../views/CustomerDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/customer/:id",
      name: "customer",
      component: CustomerDetails,
    },
  ],
});

export default router;
