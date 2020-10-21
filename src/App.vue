<template>
  <div id="app">
    <Event title="O EVENTO" />
  </div>
</template>

<script>
import Event from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Event,
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
