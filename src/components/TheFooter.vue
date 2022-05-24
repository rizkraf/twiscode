<script setup>
import { ref } from "vue";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import email from "../assets/icons/email.svg";

const companies = ref([
  { name: "Work", url: "/work" },
  { name: "Service", url: "/service" },
  { name: "Team", url: "/team" },
  { name: "Contact", url: "/contact" },
]);

const contacts = ref([
  {
    icon: facebook,
    title: "Twiscode",
    url: "https://www.facebook.com/twiscode/",
  },
  {
    icon: instagram,
    title: "Twiscode",
    url: "https://www.instagram.com/twiscode/",
  },
  {
    icon: email,
    title: "andree@twiscode.com",
    url: "mailto:andree@twiscode.com",
  },
]);
</script>

<template>
  <footer class="font-poppins">
    <div class="container flex flex-col justify-between py-8 md:flex-row">
      <div class="mb-8 w-full sm:max-w-[360px] md:mb-0">
        <h3 class="mb-5 text-2xl font-semibold">Location</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.040929418534!2d112.748146!3d-7.2681035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x84a7521f5f8cc186!2sTwiscode%20Digital%20Agency!5e0!3m2!1sid!2sid!4v1653353647365!5m2!1sid!2sid"
          width="100%"
          height="148"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="mb-8 basis-1/4 md:mb-0">
        <h3 class="mb-5 text-2xl font-semibold">Company</h3>
        <ul>
          <li
            class="text-sm font-medium text-gray-light"
            :class="index !== 3 ? 'mb-2' : ''"
            v-for="(company, index) in companies"
            :key="company"
          >
            <span>- </span
            ><RouterLink
              :to="company.url"
              class="transition duration-300 ease-in-out hover:text-black"
              >{{ company.name }}</RouterLink
            >
          </li>
        </ul>
      </div>
      <div>
        <h3 class="mb-6 text-2xl font-semibold">Contact Us</h3>
        <div
          class="flex"
          :class="index !== 2 ? 'mb-5' : ''"
          v-for="(contact, index) in contacts"
          :key="contact"
        >
          <img class="mr-5" :src="contact.icon" alt="" />
          <a
            class="text-sm font-medium text-gray-light transition duration-300 ease-in-out hover:text-black"
            :href="contact.url"
            >{{ contact.title }}</a
          >
        </div>
      </div>
    </div>
    <hr />
    <div class="container py-6">
      <h6 class="font-semibold text-black-light">
        Twiscode Pte. Ltd. | PT. Dapur Rumah Sejahtera
      </h6>
    </div>
  </footer>
</template>
