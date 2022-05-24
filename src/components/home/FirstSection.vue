<script setup>
import { ref } from "vue";
import mdi_android from "../../assets/icons/mdi_android.svg";
import mdi_web from "../../assets/icons/mdi_web.svg";
import mdi_view_quilt from "../../assets/icons/mdi_view_quilt.svg";

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
  <section class="container py-10 lg:px-20 lg:pt-32 lg:pb-20 xl:px-52">
    <div class="flex flex-col items-center justify-between md:flex-row">
      <div>
        <div class="relative overflow-hidden rounded-xl drop-shadow-xl">
          <img
            src="../../assets/images/section-1-image.png"
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
          <h2
            class="mb-7 text-center text-4xl font-semibold text-black-light lg:ml-7 lg:text-left"
          >
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
</template>
