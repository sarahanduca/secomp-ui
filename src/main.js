import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueCookies from 'vue-cookies';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
