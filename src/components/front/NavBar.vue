<template>
  <b-navbar class="mx-0 w-100" toggleable="lg" type="dark" variant="success">
    <b-navbar-brand to="/" class="">
      <img src="../../assets/secompBranca.png" width="45" alt="Logo SECOMP" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-auto text-center">
        <b-nav-item to="/" @click="scroll('#div-cronograma')">
          Cronograma
        </b-nav-item>
        <b-nav-item to="/" @click="scroll('#campeonato')"
          >Campeonato</b-nav-item
        >
        <b-nav-item to="/" @click="scroll('#sorteio')">Sorteio</b-nav-item>
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/custom.scss";
* {
  font-family: $titulo;
  font-size: 16pt;
  text-transform: uppercase;
}
.bg-success {
  background-color: #296016 !important;
}
</style>
