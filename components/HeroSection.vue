<template>
  <div class="flex flex-col h-screen w-full space-y-8">
    <div class="flex w-full h-3/6 bg-slate-400 rounded-3xl">
      <p class="inline-block align-middle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div
      class="h-2/6 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0"
    >
      <FeauredBento
        v-for="post in data.posts && data.posts.slice(0, 2)"
        :key="post.id"
        :image="post.feature_image"
      />
    </div>
  </div>
</template>

<script setup>
const { data, pending } = useFetch(
  "https://content.charlesisa.dev/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&include=tags"
);
</script>
