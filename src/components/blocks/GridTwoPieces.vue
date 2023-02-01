<template>
  <div class="flex flex-wrap lg:gap-60 sm:gap-30">
    <div class="flex-auto w-[550px]">
      <slot name="left" />
    </div>
    <div class="flex-auto w-[550px]">
      <slot name="right" />
    </div>
  </div>
</template>
