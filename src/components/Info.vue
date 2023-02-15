<template>
  <section>
    <MainWidth>
      <h2></h2>
      <GridTwoPieces class="">
        <template #left>
          <div class="">
            <p class=""></p>
            <p v-for="text in textsLeft">{{ text }}</p>
          </div>
        </template>
        <template #right>
          <div class="">
            <p></p>
            <p v-for="text in textsRight">{{ text }}</p>
          </div>
        </template>
      </GridTwoPieces>
      <CTAButton text="button" class="btn-outlined" />
      <GridTwoPieces class="">
        <template #left>
          <p class=""></p>
          <p v-for="text in textsLeft" class="">
            {{ text }}
          </p>
        </template>
        <template #right> <img src="" alt="" /></template>
      </GridTwoPieces>
      <GridTwoPieces class="">
        <template #left>
          <img src="" alt="" />
        </template>
        <template #right>
          <p v-for="text in textsLeft" class="">
            {{ text }}
          </p></template
        >
      </GridTwoPieces>
    </MainWidth>
  </section>
</template>

<script setup>
import CTAButton from './blocks/CTAButton.vue';
import MainWidth from './blocks/MainWidth.vue';
import GridTwoPieces from './blocks/GridTwoPieces.vue';
</script>
