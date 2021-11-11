import { createRouter, createWebHistory } from "vue-router";

import navRoutes from "@/router/nav-routes.js";
import otherRoutes from "@/router/other-routes.js";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...navRoutes, ...otherRoutes],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
