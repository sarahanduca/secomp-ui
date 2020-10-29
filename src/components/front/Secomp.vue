<template>
  <div id="app">
    <b-button variant="light" v-b-modal.incricao to="inscricao">
      Inscrever-se
    </b-button>
    <b-modal
      class="h-100"
      id="incricao"
      title="Inscrição"
      hide-footer
      scrollable
      @hidden="increveShow"
    >
      <router-view></router-view>
    </b-modal>

    <Event title="O EVENTO" />

    <Cronograma id="cronograma" />

    <Campeonato id="campeonato" />
  </div>
</template>

<script>
import Event from "./Header.vue";
import Cronograma from "./Cronograma.vue";
import Campeonato from "./Campeonato.vue";

export default {
  name: "Secomp",
  components: {
    Event,
    Cronograma,
    Campeonato
  },
  methods: {
    increveShow: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/custom.scss";
// div {
//   background: $secomp-preto;
// }
</style>
