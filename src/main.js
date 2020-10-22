import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueCookies from 'vue-cookies';
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Auth from './components/PetMasterAuth.vue';
import Secomp from './components/Secomp.vue';

Vue.use(BootstrapVue);
Vue.use(VueCookies);
Vue.use(VueRouter)


Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Secomp },
    { path: '/petmaster', component: Auth },
  ]
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
