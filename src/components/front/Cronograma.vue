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
          hora: "18h30 - 19h30",
          palestra: "Abertura - Linnyer"
        },
        {
          hora: "21h30 - 22h30",
          palestra: "Rafael Bastos (Dumativa)"
        }
      ],
      d17: [
        {
          hora: "18h30 - 19h30",
          palestra: "Prof. Dr. Anderson Rocha (IC-Unicamp/ IA)"
        },
        {
          hora: "19h30 - 20h30",
          palestra: "Izabella Mundim Brito (Itaú Unibanco)"
        },
        {
          hora: "20:30 - 21h30",
          palestra: "Nathalia Borges (Dumativa)"
        }
      ],
      d18: [
        {
          hora: "18h30 - 19h30",
          palestra:
            "Mesa Redonda - Estêvão Gondim (Mandic), Vinicius Camargo (Amazon), Camila Stefani Innecco (DB1)"
        }
      ],
      d19: [
        {
          hora: "18h30 - 19h30",
          palestra:
            "Marcela Monteiro Montenegro Gallo (Mandic): IA - Hands-on na AWS"
        },
        {
          hora: "19h30 - 20h30",
          palestra:
            "Ricardo Satin (Matera): Modelos de recomendação para apoiar o processo de aprendizado "
        }
      ],
      d20: [
        {
          hora: "18h30 - 19h30",
          palestra:
            "Giovanni Ferraz de Oliveira (Mandic): Cibersegurança no trabalho remoto"
        },
        {
          hora: "19h30 - 20h30",
          palestra:
            "Ricardo Satin (Matera): LGPD e os cuidados do desenvolvedor"
        }
      ],
      d21: [
        {
          hora: "13h30 - 18h30",
          campeonato: "Campeonato de Valorant "
        },
        {
          hora: "18h30 - 22h00",
          campeonato: "Campeonato de Counter Strike: GO"
        }
      ],
      d22: [
        {
          hora: "13h30 - 18h30",
          campeonato: "Campeonato de League of Legends "
        }
      ]
    };
  }
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
