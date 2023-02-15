<template>
  <MainWidth class="mt-12">
    <form class="" @submit.prevent="$emit('submitComment', newComment)">
      <div class="flex flex-col">
        <h3 class=""></h3>
        <input
          type="text"
          placeholder="Name"
          class="input-field mb-5"
          v-model="newComment.name"
        />
        <textarea
          placeholder="Comment"
          class="input-field"
          rows="4"
          v-model="newComment.comment"
        ></textarea>
      </div>
      <button type="submit" class="btn-primary btn-solid mt-6">Submit</button>
    </form>
  </MainWidth>
</template>

<script setup>
import { ref } from 'vue';
import MainWidth from '../blocks/MainWidth.vue';

const newComment = ref({
  name: '',
  comment: '',
  approved: false,
});
</script>
