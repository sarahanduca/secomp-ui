<template>
  <div>
    <Event title="O EVENTO" />

    <Cronograma />

    <Campeonato />  
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

<style>
</style>
