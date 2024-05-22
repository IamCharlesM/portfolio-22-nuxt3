<template>
  <div class="md: w-full px-4 md:px-10">
    <div class="space-y-4 md:space-y-0">
      <!-- ANCHOR Main content -->
      <HeroSection />
      <!-- ANCHOR Skills loop -->

      <ContentSection type="front-end-development" title="Projects" />

      <ContentSection type="hash-projects" title="Stories" :alt="true" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "project" });

const { data, pending } = useFetch(
  "https://content.charlesisa.dev/ghost/api/content/tags/?key=5d8b3cdb92a539dede4ee744a0",
);

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
