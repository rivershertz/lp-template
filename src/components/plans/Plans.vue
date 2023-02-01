<template>
  <section>
    <MainWidth class="bg-green-400">
      <h2>Plans section</h2>
      <div class="grid">
        <Plan v-for="plan in plans" :data="plan" />
      </div>
    </MainWidth>
  </section>
</template>
<script setup>
import Plan from './Plan.vue';
import MainWidth from '../blocks/MainWidth.vue';

const plans = [
  {
    title: '',
    img: '',
    alt: '',
    list: [],
  },
];
</script>
