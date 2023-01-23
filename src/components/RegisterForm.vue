<template>
  <Form
    ref="form"
    class="flex flex-col max-w-[500px] rounded-3xl bg-white p-8 text-black shadow-lg"
    :class="styles"
    :initial-values="initialValues"
    :initial-errors="initialErrors"
    v-slot="{ meta }"
    @submit="handleSubmit"
  >
    <div class="flex md:flex-row md:space-y-0">
      <div class="relative mr-auto">
        <Field
          name="firstName"
          class="border-b w-full"
          :placeholder="t('form.first-name')"
          :rules="Length"
        />
        <ErrorMessage
          name="firstName"
          class="error"
        />
      </div>
      <div class="relative">
        <Field
          name="lastName"
          class="border-b w-full"
          :placeholder="t('form.last-name')"
          :rules="Length"
        />
        <ErrorMessage
          name="lastName"
          class="error"
        />
      </div>
    </div>

    <div class="relative">
      <Field
        name="email"
        type="email"
        class="border-b w-full"
        :placeholder="t('form.email')"
        :rules="Email"
      />

      <ErrorMessage
        name="email"
        class="error"
      />
    </div>
    <Field
      name="phone"
      type="phone"
      v-slot="{ value, errorMessage, handleChange, meta }"
      :rules="Phone"
    >
      <div class="relative">
        <vue-tel-input
          name="phone"
          :modelValue="value"
          @update:modelValue="handleChange"
          mode="international"
          class="placeholder:text-ellipsis"
          :validCharactersOnly="true"
          :inputOptions="{ placeholder: t('form.phone') }"
          @country-changed="countryChange"
        />
        <span
          class="error"
          :class="{ hidden: !meta.dirty }"
          >{{ errorMessage }}</span
        >
      </div>
    </Field>

    <div class="relative">
      <Field
        name="terms"
        type="checkbox"
        :rules="Checkbox"
        v-slot="{ field }"
      >
        <label
          for="terms"
          class="flex flex-wrap space-x-2 justify-center"
        >
          <input
            type="checkbox"
            name="terms"
            v-bind="field"
          />
          <p>{{ t("form.terms-part-1") }}</p>
          <a
            href="#"
            class="text-blue-300"
            >{{ t("form.terms-part-2") }}</a
          >
        </label>
      </Field>
      <ErrorMessage
        name="terms"
        class="absolute top-[100%] left-[50%] -translate-x-[50%] text-xs text-red-400"
        :class="{ hidden: !meta.dirty }"
      />
    </div>

    <button
      type="submit"
      class="h-10 w-full bg-[#fcc801] hover:cursor-pointer leading-10 rounded-md"
      id="submitForm"
      style="text-align: center"
      :disabled="!meta.valid"
      :class="{ 'opacity-30 hover:cursor-auto': !meta.valid }"
    >
      {{ isSubmitting ? t("form.loading") : t("form.submit") }}
    </button>
  </Form>
</template>

<script setup>
  import { VueTelInput } from "vue-tel-input";
  import "vue-tel-input/dist/vue-tel-input.css";
  import { ref, onMounted } from "vue";
  import { Form, Field, ErrorMessage, configure } from "vee-validate";
  import { Checkbox, Email, Length, Phone } from "../register-form/validators";
  import { isPopupOpen } from "../store.js";
  import { t } from "i18next";
  import { postLead } from "../register-form/postLead";
  const props = defineProps({
    styles: String,
  });
  const isSubmitting = ref(false);
  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
  });
  const form = ref(null);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    terms: false,
  };
  const initialErrors = {
    terms: "You must agree to the terms and conditions",
  };
  const body = ref({
    url: "",
    email: "",
    fname: "",
    lname: "",
    phone: null,
    country: "Brazil",
    referral: "zh",
    bCode: 9846,
    cid: null,
    token: "19JkiAVyEeMyyGitaDueWccDgl-0xF9NC7xlYYbyh2H",
  });
  function countryChange(value) {
    body.value.country = value.name.split(" (")[0];
  }
  onMounted(async () => {
    body.value.url = globalThis.location.href;
    const locale = globalThis.location.pathname.replace(/\//g, "");
    if (locale === "pt") {
      body.value.cid = 293;
      body.value.country = "Brazil";
    } else if (locale === "ru") {
      body.value.cid = 292;
    } else {
      body.value.cid = 291;
    }
  });
  const handleSubmit = async (values, { resetForm }) => {
    isSubmitting.value = true;
    const { firstName, lastName, email, phone } = values;
    body.value.fname = firstName;
    body.value.lname = lastName;
    body.value.email = email;
    body.value.phone = phone;
    const res = await postLead(body.value);
    if (res.status === 200) {
      isSubmitting.value = false;
      resetForm();
      isPopupOpen.set(true);
    }
  };
</script>

<style>
  .vue-tel-input {
    border: none;
    border-bottom: 1px solid rgba(46, 46, 46, 0.2);
    background-color: #fff;
  }
  .vue-tel-input:focus-within {
    box-shadow: none;
    border-bottom: 1px solid rgba(46, 46, 46, 0.2);
    background-color: #fff;
  }
  input:focus {
    outline: none;
  }
  input[placeholder] {
    text-overflow: ellipsis;
  }
  input::-moz-placeholder {
    text-overflow: ellipsis;
  }
  input:-moz-placeholder {
    text-overflow: ellipsis;
  }
  input:-ms-input-placeholder {
    text-overflow: ellipsis;
  }
  .error {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: left;
    color: rgb(248 113 113);
  }
</style>
