<template>
  <b-container fluid class="camp">
    <h3>Campeonato</h3>
  </b-container>
</template>

<script>
export default {
  name: "Cronograma"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Varela+Round&display=swap");
@import "../../assets/styles/custom.scss";

::before .camp {
  background: $secomp-verde;
}

.camp {
  font-family: "Bebas Neue", cursive;
  color: #ffffff;
  background-image: url(../../assets/fundoCamp.svg);
  background-size: cover;
  position: relative;
  top: -6rem;
  background-repeat: no-repeat;
  height: 1600px;
  margin: 0 auto;
}

h3 {
  font-size: 48px;
  margin-right: 20rem;
  padding: 4rem;
}
</style>
