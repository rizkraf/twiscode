<script setup>
import { ref } from "vue";
import { MenuIcon, XIcon } from "@heroicons/vue/solid";

const navs = ref([
  { name: "Home", url: "/" },
  { name: "Work", url: "/work" },
  { name: "Service", url: "/service" },
  { name: "Our Customer", url: "/our-customer" },
  { name: "Team", url: "/team" },
  { name: "Career", url: "/career" },
  { name: "Contact", url: "/contact" },
]);

const isNavOpen = ref(false);

const navOpen = () => {
  isNavOpen.value = !isNavOpen.value;
};
</script>

<template>
  <header class="font-poppins shadow-sm">
    <nav class="container py-3 lg:flex lg:items-center lg:justify-between">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div>
          <RouterLink to="/">
            <img src="../assets/images/logo-twiscode.png" alt="logo-twiscode" />
          </RouterLink>
        </div>
        <!-- Hamburger Menu -->
        <div>
          <button @click="navOpen" class="block lg:hidden">
            <XIcon v-if="isNavOpen" class="h-8 w-8" />
            <MenuIcon v-else class="h-8 w-8" />
          </button>
        </div>
      </div>
      <!-- Navlink -->
      <div :class="isNavOpen ? 'block' : 'hidden'" class="lg:flex">
        <div class="text-sm font-medium text-black lg:flex">
          <RouterLink
            v-for="(nav, index) in navs"
            :key="index"
            :to="nav.url"
            class="my-4 block transition duration-300 ease-in-out hover:text-[#9F9F9F] lg:my-0"
            :class="index == 6 ? 'lg:ml-4' : 'lg:mx-4'"
            exact-active-class="underline decoration-black decoration-1 underline-offset-8"
          >
            {{ nav.name }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
