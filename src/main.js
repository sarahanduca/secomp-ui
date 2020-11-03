import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import IconsPlugin from "bootstrap-vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Auth from "./components/organizacao/PetMasterAuth.vue";
import Secomp from "./components/front/Secomp.vue";
import Form from "./components/front/Form.vue";
import PetMaster from "./components/organizacao/PetMaster.vue";
import Erro from "./components/organizacao/Erro.vue";
import Inscritos from "./components/organizacao/Inscritos.vue";
import Detalhes from "./components/organizacao/Detalhes.vue";
import Disparos from "./components/organizacao/Disparos.vue";
import Compositor from "./components/organizacao/Compositor.vue";
import Desinscreve from "./components/front/Desinscreve.vue";

import AuthService from "./services/auth.js";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  base: "/secomp/",
  routes: [
    {
      path: "/",
      component: Secomp,
      children: [
        {
          path: "inscricao",
          component: Form
        }
      ]
    },
    {
      path: "/desinscreve",
      component: Desinscreve,
      props: route => ({ id: route.query.id, token: route.query.token })
    },
    { path: "/erro", component: Erro },
    {
      path: "/login",
      component: Auth,
      beforeEnter: (to, from, next) => {
        AuthService.already_logged()
          .then(logged => {
            if (logged) {
              next("/petmaster");
            } else {
              next();
            }
          })
          .catch(() => {
            next("/erro");
          });
      }
    },
    {
      path: "/petmaster",
      component: PetMaster,
      beforeEnter: (to, from, next) => {
        AuthService.already_logged()
          .then(logged => {
            if (logged) {
              next();
            } else {
              next("/login");
            }
          })
          .catch(() => {
            next("/erro");
          });
      },
      children: [
        {
          path: "",
          component: Inscritos
        },
        {
          path: "inscrito",
          component: Detalhes,
          props: route => ({ id: route.query.id })
        },
        {
          path: "disparos",
          component: Disparos
        },
        {
          path: "compositor",
          component: Compositor
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if ("https:" == document.location.protocol) {
    next();
  } else {
    next(false);
    window.open(process.env.VUE_APP_API_URL + to.fullPath, "_self");
  }
}),
  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
