<template>
  <div class="image">
    <b-container>
      <b-row class="w-100 mx-0 text-light" align-h="center">
        <b-col class="sorteio">
          <h1>Sorteios</h1>
        </b-col>
      </b-row>
      <b-row class="cards-list w-100 mx-0">
        <b-col>
          <div class="card 1">
            <div class="card_image"><img src="../../assets/redbull.jpg" /></div>
          </div>
        </b-col>
        <b-col>
          <div class="card 2">
            <div class="card_image">
              <img src="../../assets/sorteio.png" />
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="card 3">
            <div class="card_image">
              <img src="../../assets/sorteio2.jpg" />
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row class="w-100 mx-0 info">
        <b-col>
          <h1 class="text-center">FAQ</h1>
        </b-col>
      </b-row>

      <b-row class="faq mx-0 w-100 text-center" align-h="center">
        <b-col>
          <h2>QUEM PODE PARTICIPAR?</h2>
          <p>
            Ipsam sit itaque incidunt aliquid vero id iusto. Harum voluptatem
            nihil delectus fugit ut id officiis. Natus nihil est numquam nihil
            blanditiis alias ut. Vitae aut rerum omnis amet cumque. Vel harum
            error et saepe exercitationem itaque voluptatum. Ex molestias ut
            culpa autem
          </p>
        </b-col>
        <b-col>
          <h2>QUANDO QUE SERÁ O SORTEIO?</h2>
          <p>
            Ipsam sit itaque incidunt aliquid vero id iusto. Harum voluptatem
            nihil delectus fugit ut id officiis. Natus nihil est numquam nihil
            blanditiis alias ut. Vitae aut rerum omnis amet cumque. Vel harum
            error et saepe exercitationem itaque voluptatum. Ex molestias ut
            culpa autem
          </p>
        </b-col>
        <b-col>
          <h2>COMO QUE ELE VAI SER ENTREGUE?</h2>
          <p>
            Ipsam sit itaque incidunt aliquid vero id iusto. Harum voluptatem
            nihil delectus fugit ut id officiis. Natus nihil est numquam nihil
            blanditiis alias ut. Vitae aut rerum omnis amet cumque. Vel harum
            error et saepe exercitationem itaque voluptatum. Ex molestias ut
            culpa autem
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Sorteio"
};
</script>

<style scoped>
* {
  font-family: Bebas Neue, cursive;
  color: #151515;
}
.info h1 {
  text-decoration: underline;
}
.image {
  background-color: #296016;
}

.sorteio h1 {
  font-size: 68px;
  color: #151515;
}

.cards-list .card {
  margin: 30px auto;
  width: 200px;
  height: 200px;
  border-radius: 150px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  border: none;
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

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}
</style>
