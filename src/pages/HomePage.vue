<script setup>
import { ref } from "vue";
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
            class="mb-10 text-6xl font-semibold leading-[4.5rem] text-black-light lg:text-[4rem]"
          >
            We Code We Deliver
          </h1>
          <!-- Button Text -->
          <div class="flex items-center">
            <!-- Button -->
            <div class="mr-5">
              <button
                class="h-8 w-8 rounded-full bg-[#9FD685] p-1 shadow-lg shadow-[#9FD685]/100"
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

    <section class="container py-10 lg:px-20 lg:py-32 xl:px-52">
      <div class="flex flex-col items-center justify-between md:flex-row">
        <div>
          <div class="relative overflow-hidden rounded-xl drop-shadow-xl">
            <img
              src="../assets/images/section-1-image.png"
              alt="section-1-image"
            />
            <div class="absolute top-0 right-0 bg-white px-8 py-4">
              <a
                class="text-black transition duration-300 ease-in-out hover:text-[#9F9F9F]"
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
                v-for="product in products"
                :key="product"
                class="mb-5 flex items-start"
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

    <section class="container py-10 lg:py-32 lg:pr-0 lg:pl-20 xl:pl-52">
      <div class="relative flex">
        <div
          class="left-0 z-10 w-full bg-white p-8 drop-shadow-xl md:p-12 lg:absolute lg:w-[50%]"
        >
          <h2 class="mb-4 text-4xl font-semibold text-black-light">
            How We Work
          </h2>
          <p class="mb-4 font-medium text-[#9F9F9F]">
            Let's discuss what projects you have in mind
          </p>
          <button
            class="bg-[#4A4A4A] px-6 py-4 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-[#606060]"
          >
            Let’s Have a Coffee
          </button>
        </div>
        <img
          class="relative z-0 hidden lg:left-[24.5rem] lg:-top-20 lg:block"
          src="../assets/images/section-2-image.png"
          alt=""
        />
      </div>
    </section>
  </main>
</template>
