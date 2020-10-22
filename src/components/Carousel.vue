<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicator
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide text="Segunda-feira"></b-carousel-slide>
      <b-carousel-slide text="Terça-feira"></b-carousel-slide>
      <b-carousel-slide text="Quarta-feira"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
