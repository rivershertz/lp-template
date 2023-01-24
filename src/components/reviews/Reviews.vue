<template>
  <section class="max-w-main mx-auto px-2 py-10">
    <Carousel
      :items-to-show="1"
      :wrap-around="true"
      class="max-w-[700px] mx-auto md:mt-10 sm:mt-5"
    >
      <Slide
        v-for="slide in slides"
        :key="slide"
      >
        <Review :data="slide" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<script setup>
  import Review from "./Review.vue";
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Navigation, Slide } from "vue3-carousel";

  const slides = [];
</script>
