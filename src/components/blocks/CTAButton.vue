<template>
  <button
    class="bg-white px-10 py-3 hover:bg-yellow-400 lg:mt-14 md:mt-10 sm:mt-6"
  >
    {{ text }}
  </button>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>
