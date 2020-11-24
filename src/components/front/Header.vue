<template>
  <div id="">
    <b-container class="w-100" id="evento">
      <b-row class="w-100 mx-0 pb-4">
        <b-col id="desc">
          <h1 class="mb-5">O Evento</h1>

          <p class="pt-5">
            A Semana da Computação, carinhosamente chamada de SECOMP, é um
            evento que ocorre uma vez por ano na UEM (Universidade Estadual de
            Maringá) e é promovido pelo Departamento de Informática, o DIN. A
            SECOMP 2020 será a quarta edição do evento e acontecerá nos dias 16,
            17, 18, 19, 20, 21 e 22 de novembro de 2020. As inscrições são
            gratuitas e todos podem participar! A programação inclui palestras,
            painéis de discussões, campeonato de jogos e sorteios, tudo isto com
            o intuito de levar tecnologia e informação aos participantes.
            Confira a programação aqui pelo site. Quando você fizer sua
            inscrição, irá receber um e-mail com mais detalhes sobre o evento e
            convidamos você a participar do
            <a
              class="discord"
              target="_blank"
              href="https://discord.gg/8C96FdecKu"
              >Discord</a
            >
            da IV SECOMP e ficar por dentro de qualquer atualização, ou tirar
            suas dúvidas. Aproveite!
          </p>
          <p>
            A SECOMP será transmitida no youtube e na twitch, você pode
            acessá-los abaixo
          </p>
        </b-col>
      </b-row>
      <b-row class="w-100 mx-0 my-2" align-h="end" align-v="center">
        <a href="https://www.twitch.tv/petinformaticauem">
          <b-img src="../../assets/twitch.svg" width="80px" class="mr-4" />
        </a>
        <a href="https://www.youtube.com/channel/UC1CqEvbKvvduWi5RuMoRR9w">
          <b-img src="../../assets/youtube.svg" width="80px" class="mr-4" />
        </a>
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
    return {};
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/styles/custom.scss";
* {
  font-family: $titulo;
}
.discord {
  color: #296016;
  text-decoration: underline;
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
