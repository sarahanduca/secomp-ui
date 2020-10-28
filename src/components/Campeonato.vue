<template>
<b-container>
  <div class="camp">
  <h1>Campeonato</h1>
  <div class="cards-list">
  
  <div class="card 1">
    <div class="card_image"> <img src="../assets/valorant.png" /> </div>
    <div class="card_title title-white">
    </div>
    <h2>VALORANT</h2>
  </div>

  <div class="card 2">
  <div class="card_image">
    <img src="../assets/leagueoflegends.png" />
    </div>
  <div class="card_title title-white">
  </div>
  <h2>LEAGUE OF LEGENDS</h2>
</div>

<div class="card 3">
  <div class="card_image">
    <img src="../assets/csgo.png" />
  </div>
  <div class="card_title title-white">
  </div>
  <h2>CS:GO</h2>
</div>
  
  <!-- <div class="card 4">
  <div class="card_image">
    <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
    </div>
  <div class="card_title title-black">
    <p>Card Title</p>
  </div>
  </div> -->

</div>
<div class="info">
  <h2>CAMPEONATO DE JOGOS</h2>
  <h4>COMO E QUEM PODE PARTICIPAR?</h4>
  <p>A Semana da Computação é um evento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. A Semana da Computação é um evento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</div>

<div class="title-award">
    <h2>PRÊMIOS</h2>
    <img src="../assets/Rectangle.png" alt="">
</div>

<div class="cards-list-award">
  <div class="card 5">
    <div class="card_image"> <img src="../assets/steam50.png" /> </div>
    <div class="card_title title-white">
    </div>
    <div class="podio">
  <h2>1° Colocado - </h2>
  <h4>R$</h4>
  <h3>50,00</h3>
  <h4>Steam</h4>
</div>
  </div>
  
  <div class="card 4">
    <div class="card_image"> <img src="../assets/steam20.png" /> </div>
    <div class="card_title title-white">
    </div>
    <div class="podio">
  <h2>2° Colocado - </h2>
  <h4>R$</h4>
  <h3>20,00</h3>
  <h4>Steam</h4>
</div>
  </div>

</div>
<p>*Para mais detalhes confira nossas redes sociais*</p>
</div>
</b-container>
</template>

<script>

export default {  
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-size: 40px;
  font-family: Bebas Neue, cursive;
  display: flex;
  justify-content: center;
  color: #ffffff;
  padding: 0px 20px;
}

.camp {
  background-color: #151515;
}

.title-award h2 {
  color: #A358CE;
  font-family: Bebas Neue, cursive;
  font-size: 64px;
}
.title-award img {
  position: relative;
  left: 10px;
  top: 15px;
  width: 69px;
  height: 65px;
}

.title-award {
  display: flex;
  justify-content: center;
}

.info h2 {
  margin-top: 100px;
  color: #A358CE;
  font-family: Bebas Neue, cursive;
  font-size: 64px;
  position: relative;
  left: 20px;
}

.info h4 {
  font-size: 36px;
  font-family: Bebas Neue, cursive;
  color: #878787;
  position: relative;
  left: 20px;
}

.info p {
  margin-top: 40px;
  font-size: 18px;
  font-family: Bebas Neue, cursive;
  color: #7a7a7a;
  text-align: justify;
  margin: 20px;
}

.podio {
  display: flex;
  justify-content: center;
}

.podio h2 {
  font-family: Bebas Neue, cursive;
  font-size: 25px;
  color: #7a7a7a;
  position: relative;
  top: 25px;
}

.podio h4 {
  font-family: Bebas Neue, cursive;
  color: #7a7a7a;
  font-size: 25px;
  margin: 10px;
  position: relative;
  top: 35px;
}

.podio h3 {
  font-family: Bebas Neue, cursive;
  color: #A358CE;
  font-size: 25px;
  position: relative;
  top: 25px;
}

p {
  font-family: Bebas Neue, cursive;
  color: #7a7a7a;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin: 30px;
}

.cards-list h2 {
  font-family: Bebas Neue, cursive;
  color: #7a7a7a;
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
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.cards-list .card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
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
  text-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25);
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}


@media (max-width: 700px) {
  .podio h4 {
    font-size: 20px;
  }

  .podio h2 {
    font-size: 20px;
  }

  .podio h3 {
    font-size: 20px;
  }

  .cards-list h2 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }
}

@media (max-width: 450px) {
  .podio h4 {
    font-size: 15px;
  }

  .podio h2 {
    font-size: 15px;
  }

  .podio h3 {
    font-size: 15px;
  }
}
</style>
