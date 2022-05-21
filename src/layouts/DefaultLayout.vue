<script setup>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<template>
  <div class="bg-white">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>
