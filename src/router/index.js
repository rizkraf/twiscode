import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomePage from "../pages/HomePage.vue";
import CareerPage from "../pages/CareerPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "DefaultLayout",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "HomePage",
          component: HomePage,
        },
        {
          path: "career",
          name: "CareerPage",
          component: CareerPage,
        },
      ],
    },
  ],
});

export default router;
