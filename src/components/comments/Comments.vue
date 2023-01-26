<template>
  <section class="bg-gray px-8 pt-[76px] text-primary">
    <div
      class="max-w-main mx-auto flex flex-col-reverse items-center flex-wrap lg:flex-row lg:gap-60"
    >
      <div class="flex-auto sm:w-full md:w-[600px] lg:w-[400px] self-end">
        <img
          src=""
          alt=""
          class=""
        />
      </div>
      <div class="flex-auto sm:w-full lg:w-[480px] pb-10">
        <h2
          class="text-[45px] lg:text-xl leading-xl font-medium max-w-[480px]"
        ></h2>
        <p class="md:text-sm sm:text-xs font-bold mt-5">
          {{ comments?.length }}
        </p>
        <div>
          <Comment
            v-for="review in comments"
            :name="review.name"
            :comment="review.comment"
            :key="review.name"
            class="mt-5"
          />
        </div>
        <Form
          @submitComment="submitComment"
          :key="key"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import Comment from "./Comment.vue";
  import { ref, onMounted } from "vue";
  import Form from "./CommentForm.vue";
  import Admin from "@utt/lp-comments-manager";

  const key = ref(0);
  const comments = ref(null);

  onMounted(async () => {
    const data = await Admin.getAdminComments();
    comments.value = data;
  });

  const submitComment = async (newComment) => {
    newComment.source = window.location.href;
    const res = await Admin.postComment(newComment);
    if (res.status === 200) {
      key.value += 1;
    }
  };
</script>
