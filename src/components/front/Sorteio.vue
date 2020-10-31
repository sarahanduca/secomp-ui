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
          <h1 class="text-center pb-3">FAQ</h1>
        </b-col>
      </b-row>

      <b-row class="faq mx-0 w-100 text-center" align-h="center">
        <b-col>
          <h2>Quem pode participar?</h2>
          <p>
            Qualquer inscrito da SECOMP está automaticamente participando do
            sorteio, então fique atento ao Instagram do evento (@secompuem) onde
            os nome serão sorteados.
          </p>
        </b-col>
        <b-col>
          <h2>Quando e onde será o sorteio?</h2>
          <p>
            Os sorteios serão realizados diaramente no <em>Instagram</em> do
            evento (@secompuem) e os participantes serão avisados após as
            palestras sobre os horários de sorteio do dia.
          </p>
        </b-col>
        <b-col>
          <h2>Como será entregue?</h2>
          <p>
            Entraremos em contato com o vencedor para a retirada do prêmio na
            UEM, quem não puder ir até a Universidade terá que arcar com o frete
            de entrega.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Sorteio",
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/custom.scss";
* {
  font-family: $titulo;
  color: #151515;
}
.info h1 {
  text-decoration: underline;
}

.faq h2 {
  text-transform: uppercase;
  /* min-width: 300px; */
}

.image {
  background-color: #296016;
}

.sorteio h1 {
  text-transform: uppercase;
  font-size: 68px;
  color: #151515;
}

.cards-list .card {
  margin: 30px auto;
  width: 200px;
  height: 200px;
  border-radius: 150px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.041),
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
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.075),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}
</style>
