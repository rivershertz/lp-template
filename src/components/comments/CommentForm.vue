<template>
  <div class="max-w-main mx-auto">
    <form
      class="mt-5 flex flex-col items-center"
      @submit.prevent="$emit('submitComment', newComment)"
    >
      <div
        class="bg-[#FFFFFF4D] rounded-20 flex flex-col w-full px-[32px] py-[23px] drop-shadow-3xl"
      >
        <h3 class="text-md mb-[29px]">Add comment</h3>
        <input
          type="text"
          placeholder="Name"
          class="md:py-2.5 md:px-5 sm:p-2 outline-0 rounded-10 placeholder-primary text-xs"
          v-model="newComment.name"
        />
        <textarea
          placeholder="Comment"
          class="mt-5 outline-0 md:py-2.5 md:px-5 sm:p-2 rounded-10 placeholder-primary text-xs"
          rows="4"
          v-model="newComment.comment"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full max-w-[508px] mx-auto block px-2.5 py-4 whitespace rounded-20 font-semibold text-center capitalize md:text-md sm:text-xs text-white bg-primary hover:bg-yellow mt-10"
      ></button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const newComment = ref({
  name: '',
  comment: '',
  approved: false,
});
</script>
