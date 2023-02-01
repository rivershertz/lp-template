<template>
  <section>
    <MainWidth class="">
      <h2></h2>
      <div class="grid">
        <Plan
          v-for="plan in plans"
          :data="plan"
        />
      </div>
    </MainWidth>
  </section>
</template>
<script setup>
  import Plan from "./Plan.vue";
  import MainWidth from "../blocks/MainWidth.vue";

  const plans = [
    {
      title: "",
      img: "",
      alt: "",
      list: [],
    },
  ];
</script>
