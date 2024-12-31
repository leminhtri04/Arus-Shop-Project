import { createRouter, createWebHistory } from "vue-router";
import UserTemplate from "../template/userTemplate/UserTemplate.vue";
import HomeClient from "../Page/User/Home/HomeClient.vue";
import More from "../Page/More/More.vue";
import HomeAdmin from "../Page/Admin/Home/HomeAdmin.vue";
import AuthTemplate from "../template/authTemplate/AuthTemplate.vue";
import SignInPage from "../Page/Auth/SignInPage/SignInPage.vue";
import SignUpPage from "../Page/Auth/SignUpPage/SignUpPage.vue";

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
    path: "/auth",
    component: AuthTemplate,
    children: [
      {
        path: "dang-ky",
        component: SignUpPage,
      },
      {
        path: "dang-nhap",
        component: SignInPage,
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
  routes: routes,
});

export default router;
