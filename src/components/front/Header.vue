<template>
  <div id="">
    <b-container class="w-100" id="evento">
      <b-row class="w-100 mx-0">
        <b-col id="desc">
          <h1 class="mb-5">O Evento</h1>

          <p class="pt-5">
            A Semana da Computação, carinhosamente chamada de SECOMP, é um
            evento que ocorre uma vez por ano na UEM (Universidade Estadual de
            Maringá) e é promovido pelo Departamento de Informática, o DIN. A
            SECOMP 2020 será a quarta edição do evento e acontecerá nos dias 16,
            17, 18, 19 e 20 de novembro, totalmente gratuita e aberta para
            qulaquer um, serão dias composto por palestras, painéis de
            discussões, campeonato de jogos, e sorteios, tudo isto com o intuito
            de levar a tecnologia e informação a quem quiser participar. Você
            pode conferir nosso cronograma aqui pelo site, mas caso faça
            inscrição, receberá um e-mail com mais detalhes sobre o evento e um
            link para participar do nosso servidor no Discord e assim ficar por
            dentro de qualquer atualização. Aproveite!
          </p>
        </b-col>
      </b-row>
      <b-row
        align-h="center"
        class="d-flex d-lg-none w-100 mt-3 mx-0 text-center"
        v-if="!expired"
      >
        <b-col>
          <b-button
            size="lg"
            variant="success"
            v-b-modal.modal-inscricao
            to="/inscricao"
            >Inscreva-se</b-button
          >
        </b-col>
      </b-row>
      <b-row align-h="end" class="w-100 mx-0 pt-4">
        <b-col class="mr-5">
          <h2 class="text-right " v-if="!expired">
            FALTAM <span>{{ daysLeft }}</span> DIA<span
              class="light"
              v-if="daysLeft != 1"
              >S</span
            >
            E <span>{{ hoursLeft }}</span> HORA<span
              class="light"
              v-if="hoursLeft != 1"
              >S</span
            >
          </h2>
        </b-col>
      </b-row>
    </b-container>
    <svg
      id="top-section-border"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill="#296016" points="0,101 0,0 101,101" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      secomp: new Date(1605495600000),
      hours: "2",
    };
  },
  computed: {
    daysLeft() {
      const today = new Date().getTime();
      const delta = this.secomp - today;

      return Math.floor(delta / 86_400_000);
    },
    hoursLeft() {
      const today = new Date().getTime();
      const delta = this.secomp - today;

      return Math.floor((delta % 86_400_000) / 3_600_000);
    },
    expired() {
      return this.secomp < Date.now();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/styles/custom.scss";
* {
  font-family: $titulo;
}
h1 {
  font-size: 58px;
  color: #296016;
}
p {
  color: #aaaaaa;
}
h2 {
  font-size: 64px;
  color: #aaaaaa;
}
.light {
  color: #aaaaaa;
}
h2 span {
  color: #296016;
}
#top-section-border {
  width: 100%;
  height: 5em;
}
#evento {
  padding-top: 6em;
}

#evento {
  background-image: url("../../assets/los.svg");
  background-repeat: no-repeat;
  background-position-x: -4px;
  background-position-y: -54px;
}
.btn-success {
  border-color: #296016 !important;
  background-color: #296016 !important;
}
.btn-success:focus {
  box-shadow: 0 0 0 0.2rem #296016;
}
</style>
