import { createRouter, createWebHistory } from "vue-router";
import Home from './'

const routes = [
  {
    path: "/",
    component: UserTemplate,
    children: [
      {
        path: "",
        component: c,
      },
      {
        path: "trang-chu",
        component: Home,
      },
    ],
  },
  {
    path: "/admin",
    component: UserTemplate,
    children: [
      {
        path: "",
        component: HomeAdmin,
      },
      {
        path: "trang-chu-quan-tri",
        component: HomeAdmin,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageMore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
