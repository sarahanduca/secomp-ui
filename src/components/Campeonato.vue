<template>
  <b-container fluid class="camp">
    <h3>Campeonato</h3>
  </b-container>
</template>

<script>
export default {
  name: "Cronograma",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Varela+Round&display=swap");
.camp {
  font-family: "Bebas Neue", cursive;
  color: #ffffff;
  background-image: url(../assets/fundoCamp.svg);
  background-size: cover;
  position: relative;

  background-repeat: no-repeat;

  height: 1600px;
  margin: 0 auto;
}

h3 {
  margin-top: 93px;
  font-size: 48px;
  margin-right: 903px;
  margin-left: 299px;
}
</style>
