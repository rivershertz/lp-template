<template>
  <section>
    <h2></h2>
    <div class="grid">
      <Plan
        v-for="plan in plans"
        :data="plan"
      />
    </div>
  </section>
</template>
<script setup>
  import Plan from "./Plan.vue";

  const plans = [
    {
      title: "",
      img: "",
      alt: "",
      list: [],
    },
  ];
</script>
