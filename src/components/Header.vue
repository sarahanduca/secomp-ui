<template>
  <b-container fluid id="head">
    <b-navbar
      align="center"
      fixed="top"
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand href="#head"
        ><img
          src="../assets/secompBranca.png"
          alt="logo SECOMP"
          class="logo_secomp"
          width="98"
          height="82"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Palestras</b-nav-item>
          <b-nav-item href="#">Workshops</b-nav-item>
          <b-nav-item href="#">Campeonato</b-nav-item>
          <b-nav-item href="#">Sorteio</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <main>
      <h1>{{ title }}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sed
        ullam fuga, perferendis possimus alias tempora nisi cupiditate labore
        dignissimos quisquam aut eos eius repellendus at, enim, unde optio
        inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Enim nemo facere totam repellat dicta dolor cupiditate recusandae,
        corporis dolore nihil maxime ipsa eius delectus nesciunt neque! Mollitia
        quae ab temporibus! Maiores aliquam odit corporis vel quasi, voluptate,
        blanditiis earum quas libero voluptatibus ratione unde accusantium, illo
        a hic nam dignissimos? A, praesentium exercitationem est explicabo
        laudantium modi aliquid ad laborum. Reiciendis autem deserunt accusamus
        praesentium quibusdam a quidem, voluptatem eaque numquam reprehenderit
        cum magnam error vero aperiam dolorem facilis excepturi soluta minus
        deleniti esse. Cumque aliquid veritatis error. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Nulla provident magni ex quasi,
        magnam esse neque blanditiis? Facilis quidem aspernatur veritatis quod
        doloribus expedita ipsa repudiandae. Repellat illo minima voluptatum.
        Placeat omnis blanditiis accusantium dolores voluptatum officia earum
        incidunt, dolore voluptatibus atque maxime quisquam sequi iure a dolorum
        pariatur ea aliquid possimus quasi qui rerum? Necessitatibus, atque
        repudiandae.
      </p>
    </main>
  </b-container>
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
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Varela+Round&display=swap");
@import "../assets/styles/custom.scss";
main {
  text-align: left;
  margin: 0 auto;
  margin-top: 10rem;
  height: 435px;
}
h1 {
  font-family: $titulo;
  color: $secomp-verde;
  font-size: 64px;
}

main p {
  font-family: $texto;
  font-size: 1.6rem;
  padding-top: 1rem;
  height: 250px;
}
</style>
