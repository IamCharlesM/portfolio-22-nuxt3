<template>
  <div class="mx-auto px-4">
    <div class="relative max-w-7xl justify-items-center">
      <div>
        <h1 class="mb-5 text-center text-3xl font-bold text-white lg:text-4xl">
          All projects
        </h1>
        <p class="mx-auto max-w-4xl text-xl text-white">
          Welcome to my projects webpage! Here you will find a selection of my
          past and current projects, ranging from personal hobbies to
          professional work. I hope you find something that interests you, and
          feel free to contact me if you have any questions or would like to
          collaborate on a project.
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
const { data, pending } = useFetch(
  "https://content.charlesisa.dev/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&include=tags",
);

console.log(data.value.posts[1]);

useHead({
  title: "All projects",
  meta: [
    {
      name: "description",
      content: "I'm legit including this so Google doesnt't yell at me.",
    },
  ],
});
</script>
