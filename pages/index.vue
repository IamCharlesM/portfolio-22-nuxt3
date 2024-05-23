<template>
  <div class="scroll-smooth px-4">
    <div class="flex flex-col space-y-4 lg:space-y-0">
      <!-- ANCHOR Main content -->
      <HeroSection />

      <ContentSection type="api" title="Projects" />

      <ContentSection type="hash-stories" title="Stories" :alt="true" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "project" });

const pages = ref([
  {
    property: "home",
    to: "/",
  },
  {
    property: "projects",
    to: "/project",
  },
]);

const socials = ref([
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/forcharles/",
    icon: "mdi:linkedin",
  },
  {
    name: "Github",
    link: "https://github.com/IamCharlesM/",
    icon: "mdi:github",
  },
]);
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
