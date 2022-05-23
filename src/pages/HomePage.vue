<script setup>
import { ref } from "vue";
import { testimonial } from "../stores/testimonial.js";
import { team } from "../stores/team.js";
import mdi_android from "../assets/icons/mdi_android.svg";
import mdi_web from "../assets/icons/mdi_web.svg";
import mdi_view_quilt from "../assets/icons/mdi_view_quilt.svg";

const products = ref([
  {
    icon: mdi_android,
    title: "Mobile Application",
    detail: `Building mobile applications is never easy. P2P lending app?
              Logistic App? E-Commerce App? We have done them all. Done
              them all well. Done them all fast.`,
  },
  {
    icon: mdi_web,
    title: "Web Application",
    detail: `We can build any web applications you need.
              A personal blog? Company Profile? E-commerce?
              or any specific functionalities ? We got you covered!
              We have a strong team of web developers that can
              follow your stack and needs.`,
  },
  {
    icon: mdi_view_quilt,
    title: "UI/UX Design",
    detail: `All things are designed. A few things are designed well.
              We try to elevate your ideas with great UI/UX design,
              suited to your taste, addressing the right pain points.`,
  },
]);
</script>

<template>
  <main class="overflow-hidden font-poppins">
    <section class="bg-[#F8F8F8] pt-10 pb-10 lg:pb-0">
      <div
        class="container flex flex-col justify-between lg:flex-row lg:items-center"
      >
        <!-- Header Text Section -->
        <div class="order-2 lg:order-1 lg:basis-[30%]">
          <h1
            class="mb-10 text-5xl font-semibold leading-[4.5rem] text-black-light lg:text-[4rem]"
          >
            We Code We Deliver
          </h1>
          <!-- Button Text -->
          <div class="flex items-center">
            <!-- Button -->
            <div class="mr-5">
              <button
                class="h-10 w-10 rounded-full bg-[#9FD685] p-2 shadow-lg shadow-[#9FD685]/100"
              >
                <img
                  class="h-full w-full text-white"
                  src="@/assets/icons/mdi_play_arrow.svg"
                  alt=""
                />
              </button>
            </div>
            <!-- Text After Button -->
            <div class="basis-4/4">
              <p class="font-light text-black-light">
                Twiscode specializes in developing high-performing mobile and
                web applications.
              </p>
            </div>
          </div>
        </div>
        <!-- Header Image Section -->
        <div class="order-1 mb-8 lg:order-2 lg:mb-0">
          <img
            class="w-full"
            src="@/assets/images/header-section-image.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <section class="container py-10 lg:px-20 lg:pt-32 lg:pb-20 xl:px-52">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <div>
          <div class="relative overflow-hidden rounded-xl drop-shadow-xl">
            <img
              src="../assets/images/section-1-image.png"
              alt="section-1-image"
            />
            <div class="absolute top-0 right-0 bg-white px-8 py-4">
              <a
                class="hover:text-gray-ligth text-black transition duration-300 ease-in-out"
                href="#"
                >View Detail</a
              >
            </div>
          </div>
        </div>
        <div class="mt-6 md:basis-[40%] lg:mt-0 lg:basis-[45%]">
          <div>
            <h2 class="mb-7 text-4xl font-semibold text-black-light lg:ml-7">
              What We Do?
            </h2>
            <div>
              <div
                v-for="(product, index) in products"
                :key="index"
                class="flex items-start"
                :class="index !== 2 ? 'mb-5' : ''"
              >
                <img :src="product.icon" alt="" class="mr-5 mt-[2px]" />
                <div>
                  <h6 class="mb-1 text-sm font-semibold text-black-light">
                    {{ product.title }}
                  </h6>
                  <p class="text-xs font-normal leading-6 text-[#5E5B5B]">
                    {{ product.detail }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container py-10 lg:py-20 lg:pr-0 lg:pl-20 xl:pl-52">
      <div class="relative flex">
        <div
          class="left-0 top-20 z-10 w-full bg-white p-8 drop-shadow-xl md:p-12 lg:absolute lg:w-[50%]"
        >
          <h2 class="mb-4 text-4xl font-semibold text-black-light">
            How We Work
          </h2>
          <p class="mb-4 font-medium text-gray-light">
            Let's discuss what projects you have in mind
          </p>
          <button
            class="bg-[#4A4A4A] px-6 py-4 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-[#606060]"
          >
            Let’s Have a Coffee
          </button>
        </div>
        <img
          class="relative z-0 hidden lg:left-[24.5rem] lg:block"
          src="../assets/images/section-2-image.png"
          alt=""
        />
      </div>
    </section>

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
  </main>
</template>
