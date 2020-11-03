<template>
  <div id="div-cronograma">
    <b-container>
      <b-row class="mx-0 w-100 text-light">
        <b-col>
          <h1 class="">Cronograma</h1>
        </b-col>
      </b-row>
      <b-row class="mx-0 w-100 text-light">
        <b-col>
          <b-tabs
            content-class="mt-3"
            pills
            fill
            active-nav-item-class="bg-dark text-light"
          >
            <b-tab title="16/11" active title-link-class="text-light">
              <b-table
                :items="d16"
                :fields="fields"
                class="text-light text-center"
              ></b-table>
            </b-tab>
            <b-tab title="17/11" title-link-class="text-light">
              <b-table
                :items="d17"
                :fields="fields"
                class="text-light text-center"
              ></b-table>
            </b-tab>
            <b-tab title="18/11" title-link-class="text-light">
              <b-table
                :items="d18"
                :fields="fields"
                class="text-light text-center"
              ></b-table>
            </b-tab>
            <b-tab title="19/11" title-link-class="text-light">
              <b-table
                :items="d19"
                :fields="fields"
                class="text-light text-center"
              ></b-table>
            </b-tab>
            <b-tab title="20/11" title-link-class="text-light">
              <b-table
                :items="d20"
                :fields="fields"
                class="text-light text-center"
              ></b-table>
            </b-tab>
            <b-tab title="21/11" title-link-class="text-light">
              <b-table :items="d21" class="text-light text-center"></b-table>
            </b-tab>
            <b-tab title="22/11" title-link-class="text-light">
              <b-table :items="d22" class="text-light text-center"></b-table>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <svg
      id="top-section-border"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill="#151515" points="0,101 0,0 101,101" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Cronograma",
  data() {
    return {
      fields: ["hora", "palestra"],
      d16: [
        {
          hora: "18h - 18h30",
          palestra: "Cerimônia de abertura",
        },
        {
          hora: "18h30 - 20h",
          palestra:
            "Linnyer: Manna_team: a maior rede de ensino, pesquisa, extensão e inovação em IoT",
        },
        {
          hora: "20h - 21h",
          palestra:
            "Alan (eureka) Case EurekaLabs: Aplicação de IA para reconhecimento de câncer de mama.",
        },
        {
          hora: "21h - 22h",
          palestra:
            "Rafael Bastos (Dumativa): A Carreira de Jogos no Brasil - O que é necessário saber pra trabalhar ou ter sua equipe de jogos",
        },
      ],
      d17: [
        {
          hora: "18h - 19h",
          palestra: "Prof. Dr. Anderson Rocha (IC-Unicamp/ IA)",
        },
        {
          hora: "19h - 20h",
          palestra: "Izabella Mundim Brito (Itaú Unibanco)",
        },
        {
          hora: "20h - 21h",
          palestra:
            "Nathalia Borges (Dumativa):  As diferenças na programação de Negócios X Jogos",
        },
        {
          hora: "21h - 22h",
          palestra: "Guilherme Puglia (Google)",
        },
      ],
      d18: [
        {
          hora: "18h - 20h",
          palestra:
            "Mesa Redonda - Camila Stefani Innecco (DB1), Estêvão Gondim (Mandic), Ricardo Henrique (Eureka), Vinicius Camargo (Amazon)",
        },
        {
          hora: "20h - 21h",
          palestra:
            "Pedro Rocha (aiqfome): aiqfome: de 30k a 2m de pedidos/mês, o que mudou?",
        },
        {
          hora: "21h - 22h",
          palestra:
            "Gustavo Zanoni: Reconhecimento de Padrões: do Início ao Fim",
        },
      ],
      d19: [
        {
          hora: "18h - 19h",
          palestra:
            "Marcela Monteiro Montenegro Gallo (Mandic): IA - Hands-on na AWS",
        },
        {
          hora: "19h - 20h",
          palestra:
            "Ricardo Satin (Matera): Modelos de recomendação para apoiar o processo de aprendizado ",
        },
        {
          hora: "20h - 21h",
          palestra:
            "Thiago Moraes (aiqfome): da universidade para o mercado de trabalho",
        },
        {
          hora: "21h - 22h",
          palestra:
            "Mariana Soder: Um Overview dos Métodos Tradicionais e Modernos de PLN",
        },
      ],
      d20: [
        {
          hora: "18h - 19h",
          palestra:
            "Giovanni Ferraz de Oliveira (Mandic): Cibersegurança no trabalho remoto",
        },
        {
          hora: "19h - 20h",
          palestra:
            "Ricardo Satin (Matera): LGPD e os cuidados do desenvolvedor",
        },
        {
          hora: "20h - 21h",
          palestra:
            "Felipe Cousin (aiqfome): aiqentrega: os desafios do lançamento de um novo produto no mercado",
        },
        {
          hora: "21h - 22h",
          palestra:
            "Charbel Abbas e João Sabino (Sancor Seguros): Como implementar segurança continua no desenvolvimento de software",
        },
      ],
      d21: [
        {
          hora: "15h - 16h",
          campeonato: "Campeonato de Valorant - Final jogo 1",
        },
        {
          hora: "16h - 17h",
          campeonato: "Campeonato de Valorant - Final jogo 2",
        },
        {
          hora: "17h - 18h",
          campeonato: "Campeonato de Valorant - Final jogo 3",
        },
        {
          hora: "18h - 19h",
          campeonato: "Campeonato de Counter Strike: GO - Final jogo 1",
        },
        {
          hora: "19h - 20h",
          campeonato: "Campeonato de Counter Strike: GO - Final jogo 2",
        },
        {
          hora: "20h - 21h",
          campeonato: "Campeonato de Counter Strike: GO - Final jogo 3",
        },
      ],
      d22: [
        {
          hora: "15h - 16h",
          campeonato: "Campeonato de LOL - Final jogo 1",
        },
        {
          hora: "16h - 17h",
          campeonato: "Campeonato de LOL - Final jogo 2",
        },
        {
          hora: "17h - 18h",
          campeonato: "Campeonato de LOL - Final jogo 3",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/styles/custom.scss";
* {
  font-family: $titulo;
}
h1 {
  font-size: 64px;
  color: #151515;
  text-transform: uppercase;
}
#div-cronograma {
  background-color: #296016;
}
#top-section-border {
  height: 5em;
  width: 100%;
}
.bg-dark {
  background-color: #151515 !important;
}
a.bg-dark:focus {
  background-color: #151515 !important;
}
</style>
