<template>
  <section>
    <MainWidth>
      <h2>Info section</h2>
      <GridTwoP class="mt-8 lg:gap-60 sm:gap-30">
        <template #left>
          <div>
            <p class="font-bold">This is standard grid 2 cols</p>
            <p v-for="text in textsLext">{{ text }}</p>
          </div>
        </template>
        <template #right>
          <div>
            <p>anything else</p>
            <p v-for="text in textsRight">{{ text }}</p>
          </div>
        </template>
      </GridTwoP>
      <CTAButton text="button" class="block mx-auto" />
      <FlexGridTwoC class="mt-10 items-center flex-wrap-reverse">
        <template #left>
          <p class="font-bold">This is flex grid 2 cols</p>
          <p v-for="text in textsLext" class="mb-4 last-of-type:mb-0">
            {{ text }}
          </p>
        </template>
        <template #right>
          <img src="/images/placeholder.jpg" alt="placeholder"
        /></template>
      </FlexGridTwoC>
      <FlexGridTwoC class="mt-10 items-center">
        <template #left>
          <img src="/images/placeholder.jpg" alt="placeholder" />
        </template>
        <template #right>
          <p v-for="text in textsLext" class="mb-4 last-of-type:mb-0">
            {{ text }}
          </p></template
        >
      </FlexGridTwoC>
    </MainWidth>
  </section>
</template>

<script setup>
import CTAButton from './blocks/CTAButton.vue';
import MainWidth from './blocks/MainWidth.vue';
import GridTwoP from './blocks/GridTwoP.vue';
import FlexGridTwoC from './blocks/FlexGridTwoC.vue';

const textsLext = [
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
];
const textsRight = [
  'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
];
</script>
