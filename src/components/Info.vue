<template>
  <section>
    <h2></h2>
    <p v-for="text in texts">{{ text }}</p>
  </section>
</template>

<script setup>
  const texts = [];
</script>
