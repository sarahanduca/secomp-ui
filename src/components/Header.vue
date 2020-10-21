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
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Varela+Round&display=swap");
div {
  width: 100%;
  height: 586px;
}
header {
  padding-top: 37px;
  padding: 37px 98px;
  margin: 0 auto;
  width: 1366px;
  height: 586px;
  display: flex;
  justify-content: space-between;
  background-image: url(../assets/headerbg.svg);
  background-repeat: no-repeat;
}
h1 {
  font-family: "Bebas Neue", cursive;
  color: #84d06a;
  font-size: 64px;
}
main {
  margin: 0 auto;
  width: 1155px;
  height: 435px;
}
main p {
  font-family: "Varela Round", sans-serif;
  font-size: 16px;
  padding-top: 62px;

  height: 250px;
  margin: 0 auto;
  text-align: center;
}
</style>
