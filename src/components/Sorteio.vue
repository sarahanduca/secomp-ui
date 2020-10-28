<template>
    <div class="image">
    <b-container>
  <div class="sorteio">
      <h2>Sorteios</h2>
  <div class="cards-list">
  
    <div class="card 1">
        <div class="card_image"> <img src="../assets/redbull.jpg" /> </div>
        <div class="card_title title-white">
        </div>
    </div>

        <div class="card 2">
        <div class="card_image">
            <img src="../assets/sorteio.png" />
        </div>
        <div class="card_title title-white">
        </div>
        </div>
        <div class="card 1">
            <div class="card_image"> <img src="../assets/sorteio2.jpg" /> </div>
            <div class="card_title title-white">
            </div>
        </div>
    </div>  
</div>

<div class="info">
    <h1>FAQ</h1>
    <div class="perguntas">
    <div class="pergunta1">   
    <h2>QUEM PODE PARTICIPAR?</h2>
    <div class="resposta">
        <h4>R:</h4>
        <p>pipipopo</p>
    </div>
    </div> 
    
    <div class="pergunta2">
    <h2>QUANDO QUE SERÁ O SORTEIO?</h2>
    <div class="resposta">
        <h4>R:</h4>
        <p>pipipopo</p>
    </div>
    </div>
    
    <div class="pergunta3">
    <h2>COMO QUE ELE VAI SER ENTREGUE?</h2>
    <div class="resposta">
        <h4>R:</h4>
        <p>pipipopo</p>
    </div>
    </div>

    </div>
</div>
</b-container>
</div>
</template>

<script>
export default {
    name: "Sorteio",
}
</script>

<style scoped>

.info h1 {
    font-family: Bebas Neue, cursive;
    margin: 40px 0 10px 30px;
    text-decoration: underline;
    text-align: center;
}

.info h2 {
    font-family: Bebas Neue, cursive;
    margin: 10px 0 0 30px;
    /* text-align: justify; */
}

.info .perguntas {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.info .resposta {
    display: flex;
    margin-left: 30px;
    flex-wrap: wrap;
}

.info .resposta h4 {
    font-family: Bebas Neue, cursive;
    font-size: 25px;
    position: relative;
    bottom: 10px;
    text-align: justify;
    
}
.info .resposta p {
    font-family: Bebas Neue, cursive;
    font-size: 20px;
    margin-left: 10px;
    text-align: justify;
}

.image {
    background-image: url(../assets/fundoroxo.svg);
    background-position: center -300px;
    box-shadow: 3px 3px 30px #000000;
}

.sorteio h2 {
    display: flex;
    /* margin: 20px; */
    justify-content: center;
    color: #ffffff;
    font-family: Bebas Neue, cursive;
    font-size: 68px;
    text-shadow: 3px 3px 30px #000000;
}

.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.cards-list .card {
  margin: 30px auto;
  width: 200px;
  height: 200px;
  border-radius: 150px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 150px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 150px;
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

@media (max-width: 600px) {
.info .perguntas {
    display: flex;
    justify-content: unset;
}
}
</style>