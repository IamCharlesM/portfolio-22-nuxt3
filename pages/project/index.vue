<template>
  <div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          From the blog
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <posts
        class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "project" });
const { data, pending } = useLazyFetch(
  "https://content.charlesis.me/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&include=tags"
);
</script>
