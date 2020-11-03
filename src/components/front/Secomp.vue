<template>
  <div class="w-100">
    <NavBar />

    <b-modal id="modal-inscricao" title="Inscrição" hide-footer scrollable>
      <router-view></router-view>
    </b-modal>

    <Event />

    <Cronograma />

    <Campeonato id="campeonato" />

    <Sorteio id="sorteio" />

    <Rodape />
    <!-- <Submit /> -->
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import Event from "./Header.vue";
import Cronograma from "./Cronograma.vue";
import Campeonato from "./Campeonato.vue";
// import Submit from "./Submit.vue"
import Sorteio from "./Sorteio.vue";
import Rodape from "./Rodape.vue";

export default {
  name: "Secomp",
  components: {
    NavBar,
    Event,
    Cronograma,
    Campeonato,
    Sorteio,
    Rodape
    // Submit,
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/custom.scss";
</style>
