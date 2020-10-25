<template>
  <b-container class="cro">
    <h1>Cronograma</h1>
    <h3>Palestras</h3>
  </b-container>
</template>

<script>
export default {
  name: "Cronograma",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Varela+Round&display=swap");
@import "../assets/styles/custom.scss";
.cro {
  font-family: $titulo;
  color: #000000;
  background-image: url(../assets/fundoCro.svg);

  height: 1260px;
  margin: 0 auto;
}
h1 {
  margin-left: 895px;
  margin-right: 150px;
  font-size: 64px;
  letter-spacing: 0.1em;
}
h3.palestra {
  margin-top: 93px;
  font-size: 48px;
  margin-right: 903px;
  margin-left: 299px;
}
h3.workshop {
  margin-top: 400px;
  font-size: 48px;
  margin-right: 903px;
  margin-left: 299px;
}
</style>
