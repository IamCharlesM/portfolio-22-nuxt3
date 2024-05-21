<template>
  <div class="hero min-h-screen max-w-screen overflow-x-clip">
    <div class="w-screen min-h-screen my-5">
      <div class="mx-5 lg:mx-20">
        <!-- ANCHOR Main content -->
        <HeroSection />
        <!-- ANCHOR Skills loop -->
        <ContentSection type="front-end-development" title="Projects" />
        <ContentSection type="hash-projects" title="Stories" />
        <div class="flex flex-col space-y-5 overflow-auto">
          <div class="flex flex-row space-x-5">
            <p class="text-yellow-600">// Most recent posts</p>
            <span class="text-yellow-600 lg:hidden">Swipe 👉🏿</span>
          </div>

          <Posts
            class="flex flex-row space-x-4 overflow-x-auto md:grid md:grid-cols-4 md:gap-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

definePageMeta({ layout: "project" });

const { data, pending } = useFetch(
  "https://content.charlesisa.dev/ghost/api/content/tags/?key=5d8b3cdb92a539dede4ee744a0"
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
