<template>
  <div class="max-w-main mx-auto">
    <form
      class=""
      @submit.prevent="$emit('submitComment', newComment)"
    >
      <div class="">
        <h3 class=""></h3>
        <input
          type="text"
          placeholder="Name"
          class=""
          v-model="newComment.name"
        />
        <textarea
          placeholder="Comment"
          class=""
          rows="4"
          v-model="newComment.comment"
        ></textarea>
      </div>
      <button
        type="submit"
        class=""
      ></button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  const newComment = ref({
    name: "",
    comment: "",
    approved: false,
  });
</script>
