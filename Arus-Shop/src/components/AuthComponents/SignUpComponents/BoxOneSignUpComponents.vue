<template>
  <div class="w-full h-full flex items-center justify-center">
    <from
      class="raleway-text p-10 box-border w-[650px] flex flex-col gap-10 h-auto"
    >
      <IntroduceSignUpComponents />
      <InputFormSignUpComponents />
      <ButtonSignUpComponents />
    </from>
  </div>
</template>

<script setup lang="ts">
import ButtonSignUpComponents from "./ButtonSignUpComponents.vue";
import InputFormSignUpComponents from "./InputFormSignUpComponents.vue";
import IntroduceSignUpComponents from "./IntroduceSignUpComponents.vue";
</script>

<style lang="scss" scoped></style>
