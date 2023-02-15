<template>
  <a class="btn-primary" href="">
    {{ text }}
  </a>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>
