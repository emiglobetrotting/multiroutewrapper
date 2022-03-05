import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("../components/Dashboard.vue" as string),
  },
  {
    path: "/dashboard",
    component: () => import("../components/Dashboard.vue" as string),
  },
  {
    path: "/add-new-requests",
    component: () => import("../components/AddNewRequests.vue" as string),
  },
  {
    path: "/settings",
    component: () => import("../components/Settings.vue" as string),
  },
  {
    path: "/generate-reports",
    component: () => import("../components/GenerateReports.vue" as string),
  },
  {
    path: "/kpi-measurement",
    component: () => import("../components/KPIMeasurement.vue" as string),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
