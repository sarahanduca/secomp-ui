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
            <div class="card_image"><img src="../../assets/lenda.jpg" alt="sorteio lenda do heroi"/></div>
          </div>
        </b-col>
        <b-col>
          <div class="card 2">
            <div class="card_image">
              <img src="../../assets/adesivomandic.png" alt="sorteio adesivo mandic"/>
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
            os nomes serão sorteados.
          </p>
        </b-col>
        <b-col>
          <h2>Quando e onde será o sorteio?</h2>
          <p>
            Os sorteios serão realizados diariamente no Instagram do evento
            (@secompuem) e os participantes serão avisados durante as palestras
            sobre os horários de sorteio do dia.
          </p>
        </b-col>
        <b-col>
          <h2>Como será entregue?</h2>
          <p>
            A entrega do prêmio será feita na sala do PET-Informática, na
            Universidade Estadual de Maringá ou, às custas do sorteado, no
            endereço por ele informado.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <svg
      id="top-section-border"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill="#ffffff" points="0,101 0,0 101,101" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Sorteio"
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/custom.scss";
* {
  font-family: $titulo;
  color: #151515;
}
.info h1 {
  text-transform: uppercase;
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
