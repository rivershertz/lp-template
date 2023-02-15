<template>
  <div class="">
    <div class="comment-boxed">
      <h3 class="">
        {{ name }}
      </h3>
      <p class="">
        {{ comment }}
      </p>
      <p class="">
        {{ date }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  comment: String,
  date: String,
});
</script>
