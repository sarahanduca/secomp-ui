<template>
  <b-navbar class="mx-0 w-100" toggleable="lg" type="dark" variant="success">
    <b-navbar-brand to="/" class="">
      <img src="../../assets/secompBranca.png" width="45" alt="Logo SECOMP" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto text-center">
        <b-nav-item to="/" @click="scroll('#div-cronograma')">
          CRONOGRAMA
        </b-nav-item>
        <b-nav-item to="/" @click="scroll('#campeonato')"
          >CAMPEONATO</b-nav-item
        >
        <b-nav-item to="/" @click="scroll('#sorteio')">SORTEIO</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-button variant="dark" v-b-modal.modal-inscricao to="/inscricao"
          >Inscreva-se</b-button
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    scroll(elem) {
      this.$parent.$el.querySelector(elem).scrollIntoView();
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: Bebas Neue, cursive;
  font-size: 16pt;
}
.bg-success {
  background-color: #296016 !important;
}
</style>
