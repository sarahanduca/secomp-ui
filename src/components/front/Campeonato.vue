<template>
  <div>
    <b-container>
      <b-row class=" w-100 mx-0">
        <b-col>
          <h1 class="text-light tittle">Campeonato</h1>
        </b-col>
      </b-row>
      <b-row class="w-100 mx-0">
        <b-col class="cards-list">
          <div class="card 1">
            <div class="card_image">
              <img src="../../assets/valorant.png" />
            </div>
            <div class="card_title"></div>
            <h2>VALORANT</h2>
          </div>
        </b-col>
        <b-col class="cards-list">
          <div class="card 2">
            <div class="card_image">
              <img src="../../assets/leagueoflegends.png" />
            </div>
            <div class="card_title"></div>
            <h2>LEAGUE OF LEGENDS</h2>
          </div>
        </b-col>

        <b-col class="cards-list">
          <div class="card 3">
            <div class="card_image">
              <img src="../../assets/csgo.png" />
            </div>
            <div class="card_title"></div>
            <h2>CS:GO</h2>
          </div>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mb-5 w-100 mx-0">
        <b-col class="info">
          <h2 class="mt-5">CAMPEONATO DE JOGOS</h2>
          <h4>COMO E QUEM PODE PARTICIPAR?</h4>
          <p>
            A Semana da Computação é um evento Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. A Semana da Computação é um evento Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mx-0 w-100">
        <b-col class="title-award">
          <h2>PRÊMIOS</h2>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mx-0 w-100">
        <b-col class="cards-list-award">
          <div class="card 5">
            <div class="card_image"><img src="../../assets/steam50.png" /></div>
            <div class="card_title"></div>
            <div class="podio text-center">
              <h4>1° Colocado - R$ <span>50,00</span> Steam</h4>
            </div>
          </div>
        </b-col>
        <b-col class="cards-list-award">
          <div class="card 4">
            <div class="card_image"><img src="../../assets/steam20.png" /></div>
            <div class="card_title"></div>
            <div class="podio text-center">
              <h4>2° Colocado - R$ <span>20,00</span> Steam</h4>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row align-h="center" class="mx-0 w-100 text-light text-center">
        <b-col>
          <p>*Para mais detalhes confira nossas redes sociais*</p>
        </b-col>
      </b-row>
      <b-row align-h="center" class="w-100 mx-0 my-4 text-center">
        <b-col>
          <b-button id="campeonato-inscr" size="lg" variant="success" href="#"
            >Inscrever minha equipe!</b-button
          >
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
export default {};
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
#campeonato-inscr:focus {
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
  font-size: 25px;
  position: relative;
  top: 28px;
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
  height: 450px;
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
