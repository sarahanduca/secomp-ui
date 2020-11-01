<template>
  <div class="h-100 petmaster">
    <b-navbar toggleable="lg" type="dark" variant="success" sticky>
      <b-navbar-brand to="/petmaster">
        <img src="../../assets/secompBranca.png" width="45" alt="Logo SECOMP" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="text-center">
          <b-nav-item to="/petmaster">Inscritos</b-nav-item>
          <!-- <b-nav-item to="/petmaster/disparos">Disparos</b-nav-item> -->
          <!-- <b-nav-item to="/petmaster/compositor">Compositor</b-nav-item> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-btn variant="dark" @click="logout">Sair</b-btn>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="h-100 w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AuthService from "../../services/auth.js";
export default {
  name: "PetMaster",
  data() {
    return {};
  },
  methods: {
    logout: function() {
      AuthService.logout();
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.bg-success {
  background-color: #296016 !important;
}
</style>
