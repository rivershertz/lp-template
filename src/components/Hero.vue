<template>
  <section>
    <MainWidth
      class="bg-[url('./images/placeholder.jpg')] bg-center bg-no-repeat bg-cover h-screen max-h-[1080px] flex items-center"
    >
      <h1>Hero title</h1>
      <p>anything else</p>
      <img
        src="/images/placeholder.jpg"
        alt="placeholder"
        class="max-w-md mt-10 shadow-xl"
      />
      <CTAButton text="button text" class="block text-center bg-green-500" />
    </MainWidth>
  </section>
</template>

<script setup>
import CTAButton from './blocks/CTAButton.vue';
import MainWidth from './blocks/MainWidth.vue';
import GridTwoP from './blocks/GridTwoP.vue';
</script>
