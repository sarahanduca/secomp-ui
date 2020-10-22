<template>
  <div id="app">
    <Event title="O EVENTO" />

    <Cronograma />
  </div>
</template>

<script>
import Event from "./components/Header.vue";
import Cronograma from "./components/Cronograma.vue";

export default {
  name: "App",
  components: {
    Event,
    Cronograma,
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
}
</style>
