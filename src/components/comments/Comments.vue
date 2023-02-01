<template>
  <section>
    <MainWidth>
      <h2></h2>
      <div class="">
        <div class="">
          <img
            src=""
            alt=""
            class=""
          />
        </div>
        <div class="">
          <p class="">{{ comments?.length }} Comments</p>
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
    </MainWidth>
  </section>
</template>

<script setup>
  import MainWidth from "../blocks/MainWidth.vue";
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
