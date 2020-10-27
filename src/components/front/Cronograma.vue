<template>
  <b-container fluid id="cronograma">
    <h1>Cronograma</h1>
    <h3>Palestras</h3>
    <div class="cronograma-palestra" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >Accordion 1</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text
              >I start opened because <code>visible</code> is
              <code>true</code></b-card-text
            >
            <b-card-text>{{ segunda }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            >Accordion 2</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ terça }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info"
            >Accordion 3</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ quarta }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <h3>Workshop</h3>
    <div class="cronograma-workshop" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info"
            >Accordion 1</b-button
          >
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <b-card-text
              >I start opened because <code>visible</code> is
              <code>true</code></b-card-text
            >
            <b-card-text>{{ segunda }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info"
            >Accordion 2</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ terça }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info"
            >Accordion 3</b-button
          >
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ quarta }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <Card class="card2" />
  </b-container>
</template>

<script>
export default {
  name: "Cronograma",
  data() {
    return {
      segunda: `
         9AM: pipipi
        `,
      terça: `
         Seila meu broder
        `,
      quarta: `
         Mais alguma coisa aqui
        `
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Varela+Round&display=swap");
@import "../../assets/styles/custom.scss";

#cronograma {
  width: 75%;
  box-sizing: border-box;
  font-family: $titulo;
  color: #ffffff;
  background: $secomp-verde;
  margin: 0 auto;
  height: 100vh;
}
::before {
  background-image: url("../../assets/diagonalGrande.svg");
}
h1 {
  padding-top: 3rem;
  font-size: 64px;
  letter-spacing: 0.1em;
}
h3 {
  font-size: 48px;
  margin-right: 20rem;
  padding: 4rem;
}
</style>
