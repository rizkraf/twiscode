<script setup></script>

<template>
  <main class="font-poppins">
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
  </main>
</template>
