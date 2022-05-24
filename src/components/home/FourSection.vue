<script setup>
import { team } from "../../stores/team.js";
</script>

<template>
  <section class="container py-10 lg:px-20 xl:px-52">
    <h2
      class="mb-10 text-center text-4xl font-semibold text-black-light md:mb-16"
    >
      Our Team
    </h2>
    <div class="flex flex-col items-center justify-around md:flex-row">
      <div
        class="mb-10 flex flex-col items-center md:mb-0"
        :class="[
          index == 0 ? 'order-3 mb-0 md:order-1' : '',
          index == 1 ? 'order-1 md:order-2' : '',
          index == 2 ? 'order-2 md:order-3' : '',
        ]"
        v-for="(tim, index) in team.detail"
        :key="tim"
      >
        <img
          :src="tim.image"
          class="mb-5 h-52 w-52 md:h-auto md:w-auto"
          alt=""
        />
        <h3 class="mb-2 text-2xl font-semibold text-black-light">
          {{ tim.name }}
        </h3>
        <h3 class="text-2xl font-semibold text-gray-light">
          {{ tim.role }}
        </h3>
      </div>
    </div>
  </section>
</template>
