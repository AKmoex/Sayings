import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import List from "../views/List.vue";
import Add from "../views/Add.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      { path: "/admin/sayings/add", name: "Add", component: Add },
      {
        path: "/admin/sayings/list",
        name: "List",
        component: List,
      },
      {
        path: "/admin/sayings/add/:id",
        component: Add,
        props: true,
      },
    ],
  },
  {
    path: "/login",
    name: Login,
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
