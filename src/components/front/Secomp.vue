<template>
  <div class="w-100">
    <NavBar />

    <Event />

    <Cronograma />

    <Campeonato />

    <Sorteio />
    <!-- <Submit /> -->
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Event from "./Header.vue";
import Cronograma from "./Cronograma.vue";
import Campeonato from "./Campeonato.vue";
// import Submit from "./Submit.vue"
import Sorteio from "./Sorteio.vue";

export default {
  name: "Secomp",
  components: {
    NavBar,
    Event,
    Cronograma,
    Campeonato,
    Sorteio
    // Submit,
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/custom.scss";
</style>
