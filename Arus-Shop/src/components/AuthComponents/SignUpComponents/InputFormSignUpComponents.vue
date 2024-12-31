<template>
  <div class="flex-1 flex flex-col gap-8 box-border">
    <div
      class="relative w-full border-b-2 flex flex-col justify-end text-lg h-12"
    >
      <label :class="emailClass">Email</label>
      <input
        class="w-full h-full bg-transparent outline-none pt-4"
        type="text"
        v-model="email"
        @focus="handleClick('Email')"
        @input="updateLabelPosition()"
        @blur="resetLabelPosition('Email')"
      />
    </div>
    <div
      class="relative w-full border-b-2 flex flex-col justify-end text-lg h-12"
    >
      <label :class="phoneClass">Số điện thoại</label>
      <input
        class="w-full h-full bg-transparent outline-none pt-4"
        type="text"
        v-model="phone"
        @focus="handleClick('Số điện thoại')"
        @input="updateLabelPosition()"
        @blur="resetLabelPosition('Số điện thoại')"
      />
    </div>
    <div
      class="relative w-full border-b-2 flex flex-col justify-end text-lg h-12"
    >
      <label :class="fullnameClass">Tên đầy đủ</label>
      <input
        class="w-full h-full bg-transparent outline-none pt-4"
        type="text"
        v-model="fullname"
        @focus="handleClick('Tên đầy đủ')"
        @input="updateLabelPosition()"
        @blur="resetLabelPosition('Tên đầy đủ')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const phone = ref("");
const fullname = ref("");

const emailClass = ref(
  "absolute top-3 left-0 text-gray-500 transition-all duration-500"
);
const phoneClass = ref(
  "absolute top-3 left-0 text-gray-500 transition-all duration-500"
);
const fullnameClass = ref(
  "absolute top-3 left-0 text-gray-500 transition-all duration-500"
);

function updateLabelPosition() {
  emailClass.value = email.value
    ? "absolute -top-6 left-0 text-color transition-all duration-500"
    : "absolute top-3 left-0 text-gray-500 transition-all duration-500";
  phoneClass.value = phone.value
    ? "absolute -top-6 left-0 text-color transition-all duration-500"
    : "absolute top-3 left-0 text-gray-500 transition-all duration-500";
  fullnameClass.value = fullname.value
    ? "absolute -top-6 left-0 text-color transition-all duration-500"
    : "absolute top-3 left-0 text-gray-500 transition-all duration-500";
}

function handleClick(label: string) {
  switch (label) {
    case "Email":
      emailClass.value =
        "absolute -top-6 left-0 text-color transition-all duration-500";
      break;
    case "Số điện thoại":
      phoneClass.value =
        "absolute -top-6 left-0 text-color transition-all duration-500";
      break;
    case "Tên đầy đủ":
      fullnameClass.value =
        "absolute -top-6 left-0 text-color transition-all duration-500";
      break;
  }
}

function resetLabelPosition(label: string) {
  switch (label) {
    case "Email":
      emailClass.value = email.value
        ? "absolute -top-6 left-0 text-color transition-all duration-500"
        : "absolute top-3 left-0 text-gray-500 transition-all duration-500";
      break;
    case "Số điện thoại":
      phoneClass.value = phone.value
        ? "absolute -top-6 left-0 text-color transition-all duration-500"
        : "absolute top-3 left-0 text-gray-500 transition-all duration-500";
      break;
    case "Tên đầy đủ":
      fullnameClass.value = fullname.value
        ? "absolute -top-6 left-0 text-color transition-all duration-500"
        : "absolute top-3 left-0 text-gray-500 transition-all duration-500";
      break;
  }
}
</script>

<style scoped>
.absolute {
  position: absolute;
}
.top-3 {
  top: 0.75rem;
}
.left-0 {
  left: 0;
}
.-top-6 {
  top: -1.5rem;
}

.text-color {
  color: rgba(59, 130, 246, var(--tw-bg-opacity, 1));
}

.text-gray-500 {
  color: #6b7280;
}
.transition-all {
  transition-property: all;
}
.duration-500 {
  transition-duration: 500ms;
}
</style>
