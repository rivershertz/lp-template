<template>
  <div
    class="w-full bg-white md:p-5 sm:p-3 md:space-x-24 lg:pl-[45px] flex md:flex-row sm:flex-col sm:items-center md:items-start rounded-20"
  >
    <div class="w-full flex sm:flex-col md:flex-row md:items-center">
      <h3
        class="sm:text-xs sm:text-center md:text-left font-bold capitalize w-full md:max-w-[130px] md:mr-[30px]"
      >
        {{ name }}
      </h3>
      <p class="sm:text-xs leading-xs sm:mt-5 md:mt-0">
        {{ comment }}
      </p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
    comment: String,
  });
</script>
