<template>
  <div>
    <b-container>
      <b-row class="w-100 mx-0">
        <b-col>
          <h1 class="text-light tittle">Campeonato</h1>
        </b-col>
      </b-row>
      <b-row class="w-100 mx-0">
        <b-col class="cards-list">
          <div class="card">
            <div class="card_image" @click="vava">
              <img src="../../assets/valorant.png" alt="valorant"/>
            </div>
            <div class="card_title"></div>
            <h2>VALORANT</h2>
          </div>
        </b-col>
        <b-col class="cards-list">
          <div class="card 2">
            <div class="card_image" @click="lolzinho">
              <img src="../../assets/leagueoflegends.png" alt="league of legends"/>
            </div>
            <div class="card_title"></div>
            <h2>LEAGUE OF LEGENDS</h2>
          </div>
        </b-col>

        <b-col class="cards-list">
          <div class="card 3">
            <div class="card_image" @click="csgo">
              <img src="../../assets/csgo.png" alt="cs:go"/>
            </div>
            <div class="card_title"></div>
            <h2>CS:GO</h2>
          </div>
        </b-col>
      </b-row>
      <b-row align-h="center" class="w-100 mx-0 my-4 text-center text-light">
        <b-col>
          <h3>Clique nos cards para se inscrever!</h3>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mb-5 w-100 mx-0">
        <b-col class="info">
          <h2 class="mt-5">CAMPEONATO DE JOGOS</h2>
          <h4>COMO E QUEM PODE PARTICIPAR?</h4>
          <p>
            O Campeonato de Jogos da Quarta Edição da SECOMP será composto por
            três jogos: Valorant, League of Legends e CS:GO ao longo dos dias 21
            e 22 de novembro. A equipe participante não precisa ter nenhum
            membro inscrito na SECOMP. As inscrições podem ser realizadas
            clicando nos cards acima e a nossa equipe entrará em contato com
            mais informações.
          </p>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mx-0 w-100">
        <b-col class="title-award">
          <h2>PRÊMIOS</h2>
        </b-col>
      </b-row>
      <b-row align-h="center" class="pb-5 mx-0 w-100">
        <b-col class="cards-list-award">
          <div class="card 4">
            <div class="card_image"><img src="../../assets/medalhadeouro.png" alt="medalha de ouro"/></div>
            <div class="card_title"></div>
            <div class="pt-5 podio text-center">
              <h4>
                1° Lugar: R$ 140,00 +<br>
                4 Packs Red Bull
              </h4>
              <!-- <h4>2° Colocado - R$ <span>20,00</span> Steam</h4> -->
            </div>
          </div>
        </b-col>
        <b-col class="cards-list-award">
          <div class="card 5">
            <div class="card_image">
              <img src="../../assets/medalhadeprata.png" alt="medalha de prata"/>
            </div>
            <div class="card_title"></div>
            <div class="pt-5 podio text-center">
              <h4>
                2° Lugar: R$ 60,00 +<br>
                2 Packs Red Bull
              </h4>
              <!-- <h4>1° Colocado - R$ <span>50,00</span> Steam</h4> -->
            </div>
          </div>
        </b-col>
        <b-col class="cards-list-award">
          <div class="card 4">
            <div class="card_image"><img src="../../assets/medalhadebronze.png" alt="medalha de bronze"/></div>
            <div class="card_title"></div>
            <div class="pt-5 podio text-center">
              <h4>
                2° Lugar: R$ 20,00 +<br>
                2 Packs Red Bull
              </h4>
              <!-- <h4>2° Colocado - R$ <span>20,00</span> Steam</h4> -->
            </div>
          </div>
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
  name: "Campeonato",
  methods: {
    vava() {
      window.open("https://forms.gle/Ch91DJoEu2RKHTMW6");
    },
    lolzinho() {
      window.open("https://forms.gle/zDg6oA4UmhBp3tHY8");
    },
    csgo() {
      window.open("https://forms.gle/qBbmThNh82zFRC2K8");
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
#campeonato-inscr {
  background-color: #a358ce;
  border-color: #a358ce;
}
#campeonato-inscr:focus,
#campeonato-inscr:hover {
  box-shadow: 0 0 0 0.2rem #a358ce;
}

#top-section-border {
  width: 100%;
  height: 5em;
}

.tittle {
  font-size: 64px;
  text-transform: uppercase;
}
.title-award h2 {
  color: #a358ce;
  font-size: 64px;
}

.info h2 {
  color: #a358ce;
  font-size: 64px;
}

.info h4 {
  font-size: 36px;
  color: #525252;
}

.info p {
  color: #aaaaaa;
}

.podio h4 {
  color: #f8f9fa;
  font-size: 1.2rem;
  position: relative;
  top: 33px;
}
.podio span {
  color: #a358ce;
}

.cards-list h2 {
  color: #f8f9fa;
  display: flex;
  justify-content: center;
  position: relative;
  top: 30px;
}

.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.cards-list-award {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.cards-list-award .card {
  margin: 30px auto;
  width: 300px;
  height: 400px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  border: none;
}

.cards-list .card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  border: none;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 20px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
  text-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25);
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}
</style>
