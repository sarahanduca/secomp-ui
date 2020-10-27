<template>
  <div>
    <NavBar />

    <Event />

    <Cronograma />

    <Campeonato />  
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Event from "./Header.vue";
import Cronograma from "./Cronograma.vue";
import Campeonato from "./Campeonato.vue";


export default {
  name: "Secomp",
  components: {
    NavBar,
    Event,
    Cronograma,
    Campeonato,
  },
};
</script>

<style lang="scss">
@import "../assets/styles/custom.scss";

div {
  background: $secomp-preto;
}
</style>
