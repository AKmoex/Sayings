import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import List from "../views/List.vue";
import Add from "../views/Add.vue";

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
      { path: "/sayings/add", name: "Add", component: Add },
      {
        path: "/sayings/list",
        name: "List",
        component: List,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
