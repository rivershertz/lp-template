<template>
  <section>
    <MainWidth
      class="bg-center bg-no-repeat bg-cover h-screen max-h-[1080px] flex items-center"
    >
      <h1></h1>
      <p></p>
      <CTAButton text="hero button" class="btn-hero" />
    </MainWidth>
  </section>
</template>

<script setup>
import CTAButton from './blocks/CTAButton.vue';
import MainWidth from './blocks/MainWidth.vue';
</script>
