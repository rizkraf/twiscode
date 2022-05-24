<script setup>
import { career } from "../stores/career";
</script>

<template>
  <main class="font-poppins">
    <div class="bg-[#F8F8F8] py-12">
      <h2 class="text-center text-4xl font-medium">Career</h2>
    </div>
    <section class="container py-10">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="karir in career.state"
          :key="karir"
          class="flex flex-col items-center rounded-lg bg-white p-10 drop-shadow"
        >
          <h6 class="mb-10 text-lg font-semibold text-black-light">
            {{ karir.title }}
          </h6>
          <img :src="karir.image" alt="" />
          <RouterLink
            class="mb-5 mt-10 box-border w-full rounded-full bg-[#4A4A4A] py-3 text-center text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#606060]"
            :to="karir.url"
            >Apply</RouterLink
          >
          <RouterLink
            :to="karir.url"
            class="text-sm font-semibold text-[#4A4A4A] transition duration-300 ease-in-out hover:text-[#9F9F9F]"
            >See Detail</RouterLink
          >
        </div>
      </div>
    </section>
  </main>
</template>
