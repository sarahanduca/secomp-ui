<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand>
        <img src="../../assets/secompBranca.png" width="45" alt="Logo SECOMP" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Inscritos</b-nav-item>
          <b-nav-item href="#">Disparos</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-btn variant="dark">Sair</b-btn>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="h-100 w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetMaster",
  data() {
    return {};
  }
};
</script>

<style scoped></style>
