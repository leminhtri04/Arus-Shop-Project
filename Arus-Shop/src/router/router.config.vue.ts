import { createRouter, createWebHistory } from "vue-router";
import UserTemplate from "../template/userTemplate/UserTemplate.vue";
import HomeClient from "../Page/User/Home/HomeClient.vue";
import More from "../Page/More/More.vue";
import HomeAdmin from "../Page/Admin/Home/HomeAdmin.vue";

const routes = [
  {
    path: "/",
    component: UserTemplate,
    children: [
      {
        path: "",
        component: HomeClient,
      },
      {
        path: "trang-chu",
        component: HomeClient,
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
    component: More,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
