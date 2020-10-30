<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./assets/styles/custom.scss";

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  background-color: #151515;
}
html,
body {
  background-color: #151515;
  height: 100%;
  font-family: $titulo, Avenir, Helvetica, Arial, sans-serif;
}
.bg-dark {
  background-color: #151515 !important;
}
.btn-dark {
  background-color: #151515 !important;
}
</style>
