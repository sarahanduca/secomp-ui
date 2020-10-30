<template>
  <div id="evento">
    <b-container class="w-100">
      <b-row align-h="right">
        <b-col>
          <h2 class="text-right" v-if="!expired">
            {{ displayDays }} DIAS E {{ displayHours }} HORAS
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
  data: () => ({
    displayDays: 0,
    displayHours: 0,
    expired: false
  }),
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2020, 10, 1, 0, 0, 0, 0);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);

        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      });
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
/* #desc {
  z-index: 99;
  background-image: url("../../assets/losango.svg");
  background-repeat: no-repeat;
  background-position-y: -210px;
  background-position-x: -150px;
} */
</style>
