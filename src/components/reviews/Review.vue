<template>
  <div
    class="bg-[#F3F6FB] rounded-2xl max-w-[450px] md:p-8 sm:p-3 grid justify-items-center gap-5"
  >
    <img
      :src="data.img"
      :alt="data.alt"
    />
    <h3 class="md:text-lg sm:text-md">{{ data.title }}</h3>
    <p>{{ data.text }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      img: String,
      alt: String,
      title: String,
      text: String,
    },
  });
</script>
