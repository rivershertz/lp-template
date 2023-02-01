<template>
  <div class="">
    <h3 class="">{{ data.title }}</h3>
    <img class="" :src="data.img" :alt="data.alt" />
    <p class="" v-for="item in data.list">
      {{ item }}
    </p>
    <CTAButton text="button" />
  </div>
</template>

<script setup>
import CTAButton from '../blocks/CTAButton.vue';
const props = defineProps({
  data: {
    type: Object,
    title: String,
    img: String,
    alt: String,
    list: {
      type: Array,
      item: String,
    },
  },
});
</script>
