<template>
  <div>
    <header>
      <img
        src="../assets/logosecomp.svg"
        alt="logo SECOMP"
        class="logo_secomp"
        width="497"
        height="440"
      />
      <img
        src="../assets/5edicao.svg"
        alt="5ta Edição"
        class="5ed"
        width="73"
        height="160"
      />
    </header>
    <main>
      <h1>{{ title }}</h1>
      <p1
        >A SECOMP é um evento promovido pelo Departamento de Informática da
        Universidade Estatual de Maringá. Atualmente estamos na quinta edição da
        nossa Semana da Computação, que ocorre anualmente.<br />
        Este evento promove palestras e workshops a todos aqueles com interesse
        na área de TI, não necessariamente estudantes academicos dos cursos de
        Ciencia da Computação ou Informática ou qualquer outro da UEM ou
        qualquer Universidade. É um evento aberto para todos</p1
      >
    </main>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    width: 100%;
    height: 586px;
  }
  header {
    padding-top: 37px;
    margin: 0 auto;
    width: 1366px;
    height: 586px;
    display: flex;
    justify-content: space-between;
    background-image: url(../assets/headerbg.svg);
    background-repeat: no-repeat;
  }
</style>
