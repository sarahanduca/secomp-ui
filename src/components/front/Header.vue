<template>
  <div id="evento">
    <b-container class="w-100">
      <b-row align-h="end" class="w-100 mx-0">
        <b-col>
          <h2 class="text-right" v-if="!expired">
            {{ daysLeft }} DIAS E {{ hoursLeft }} HORAS
          </h2>
          <h2 v-else>Aproveite a SECOMP</h2>
        </b-col>
      </b-row>
      <b-row class="w-100 mx-0">
        <b-col id="desc">
          <h1 class="mb-5">O EVENTO</h1>

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
export default {
  name: "Header",
  data() {
    return {
      secomp: new Date(1605495600000),
      hours: "2"
    };
  },
  computed: {
    daysLeft() {
      const today = new Date().getTime();
      const delta = this.secomp - today;
      console.log(this.secomp);

      return Math.floor(delta / 86_400_000);
    },
    hoursLeft() {
      const today = new Date().getTime();
      const delta = this.secomp - today;
      console.log(this.secomp);

      return Math.floor((delta % 86_400_000) / 3_600_000);
    },
    expired() {
      return this.secomp < Date.now();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: Bebas Neue, cursive;
}
h1 {
  font-size: 64px;
  color: #296016;
}
p {
  color: #7a7a7a;
}
h2 {
  color: #dddddd;
}
#top-section-border {
  width: 100%;
  height: 5em;
}
#evento {
  padding-top: 6em;
}
</style>
