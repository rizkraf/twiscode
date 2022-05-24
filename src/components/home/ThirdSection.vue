<script setup>
import { testimonial } from "../../stores/testimonial.js";
</script>

<template>
  <section
    class="container flex flex-col items-center justify-center py-10 lg:px-20 lg:py-20 xl:px-52"
  >
    <h2
      class="mb-10 text-center text-4xl font-semibold text-black-light md:w-1/2"
    >
      Our Customers are our biggest fans
    </h2>
    <div class="mb-5 flex flex-wrap items-center justify-center gap-4">
      <div v-for="testi in testimonial.image" :key="testi">
        <img :src="testi.name" alt="" />
      </div>
    </div>
    <button class="text-sm text-[#5E5B5B]">see More</button>
  </section>
</template>
