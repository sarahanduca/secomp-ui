<template>
  <b-navbar
    sticky="xs"
    class="mx-0 w-100"
    toggleable="lg"
    type="dark"
    variant="success"
  >
    <b-navbar-brand to="/" class="">
      <img src="../assets/secompBranca.png" width="45" alt="Logo SECOMP" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto text-center">
        <b-nav-item to="/">PALESTRAS</b-nav-item>
        <b-nav-item to="/">WORKSHOPS</b-nav-item>
        <b-nav-item to="/">CAMPEONATO</b-nav-item>
        <b-nav-item to="/">SORTEIO</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-button variant="dark">Inscreva-se</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
* {
  font-family: Bebas Neue, cursive;
  font-size: 16pt;
}
.bg-success {
  background-color: #296016 !important;
}
// div {
//   background-color: ;
// }
// .navbar {
//   overflow: hidden;
//   background-color: #296016;
//   display: flex;
//   align-items: center;
//   width: 80%;
//   margin: auto;
// }

// .menuMiddle {
//   display: flex;
//   background-color: #296016;
//   margin: auto;
// }

// .menuMiddle p {
//   font-size: 30px;
//   font-family: Bebas Neue, cursive;
//   color: #ffffff;
//   padding: 0px 20px;
// }

// .navbar .inscrever p {
//   color: #ffffff;
//   font-family: Bebas Neue, cursive;
//   font-size: 30px;
//   position: relative;
//   right: 15px;
// }

// .navbar .inscrever {
//   background-color: #296016;
// }

// @media (max-width: 1000px) {
//   .menuMiddle p {
//     font-size: 20px;
//   }

//   .navbar .inscrever p {
//     font-size: 20px;
//   }
// }

// @media (max-width: 781px) {
//   .menuMiddle {
//     display: none;
//   }

//   .inscrever {
//     display: none;
//   }

//   img {
//     position: relative;
//     left: 43%;
//   }
// }
</style>
