import { createApp } from 'vue'
import App from './App.vue'
import Vue from "../node_modules/vue"
import VueRouter from "../node_modules/vue-router"
import PersonalCabinet from "@/components/PersonalCabinet"

createApp(App).mount('#app')

const routes = [
  {
    path: "/personal",
    component: PersonalCabinet,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");