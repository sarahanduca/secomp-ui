<template>
  <b-container>
    <div class="event">
      <div class="title">
        <h1> O EVENTO </h1>
        <h2 v-if="!expired"> {{displayDays}} DIAS E {{displayHours}} HORAS</h2>
        <h2 v-else>Aproveite a SECOMP</h2>
      </div>
      
      <p>A Semana da Computação é um evento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. A Semana da Computação é um evento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
    </div>  
  </b-container>
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
    _minutes(){
      return this._seconds * 60;
    },
    _hours(){
      return this._minutes *60;
    },
    _days(){
      return this._hours *24;
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),
    showRemaining(){
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2020, 10, 2, 10, 10, 10, 10);
        const distance = end.getTime() - now.getTime();

        if(distance < 0){
          clearInterval(timer);
          this.expired = true;
          return
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);

        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.event .title {
  display: flex;
  font-family: Bebas Neue, cursive;
}
.event .title h1 {
  color: #296016;
  position: relative;
  left: 40px;
  padding-top: 40px;
  font-size: 78px;
}

.event .title h2 {
  color: #dddddd;
  margin-left: auto;
  position: relative;
  right: 50px;
  font-size: 72px;
}

.event p {
  color: #7a7a7a;
  margin: 20px;
  text-align: justify;
  
}
</style>
