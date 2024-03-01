<template>
  <div>
    <div class="relative max-w-7xl justify-items-center">
      <div>
        <h1 class="text-3xl text-center font-bold lg:text-4xl text-white mb-5">
          All projects
        </h1>
        <p class="max-w-4xl text-xl mx-auto text-white">
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
  "https://content.charlesisa.dev/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&include=tags"
);

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
