<template>
  <div id="app">
    <!-- <Event title="O EVENTO" />

    <Cronograma />

    <Campeonato /> -->
    <Auth />
  </div>
</template>

<script>
// import Event from "./components/Header.vue";
// import Cronograma from "./components/Cronograma.vue";
// import Campeonato from "./components/Campeonato.vue";
import Auth from "./components/PetMasterAuth.vue"

export default {
  name: "App",
  components: {
    // Event,
    // Cronograma,
    // Campeonato,
    Auth
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}
html, body {
  height: 100%;
}
</style>
