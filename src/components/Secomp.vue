<template>
  <div id="app">
    <Event title="O EVENTO" />

    <Cronograma id="cronograma" />

    <Campeonato id="campeonato" />
  </div>
</template>

<script>
import Event from "./Header.vue";
import Cronograma from "./Cronograma.vue";
import Campeonato from "./Campeonato.vue";

export default {
  name: "Secomp",
  components: {
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
