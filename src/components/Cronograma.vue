<template>
  <b-container>
    <h1>Cronograma</h1>
    <h3>Palestras</h3>
    <b-container fluid class="car"> <Carousel /></b-container>
  </b-container>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  name: "Cronograma",
  components: { Carousel },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Varela+Round&display=swap");
@import "../assets/styles/custom.scss";
div {
  font-family: $titulo;
  color: #ffffff;
  background-image: url(../assets/fundoCro.svg);
  background-repeat: no-repeat;
  height: 1260px;
  margin: 0 auto;
}
h1 {
  margin-top: 143px;
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
.car {
  margin: 0 auto;

  height: 400px;
}
</style>
