import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000/api/web",
});

http.interceptors.request.use(
  (config) => {
    if (sessionStorage.token) {
      config.headers.Authorization = "Bearer " + sessionStorage.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err);
    console.log(err.data);
    return Promise.reject(err);
  }
);
Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
