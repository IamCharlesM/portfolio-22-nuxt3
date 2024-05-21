<template>
  <div
    class="bg-base-300 rounded-3xl bg-cover bg-center p-4 col-span-full md:col-span-4 row-span-2 md:row-span-3"
  >
    <div v-if="title == 'Projects'">
      <h2 class="text-white text-xl md:text-4xl font-bold">
        Explore my technical achievements, from coding solutions to software
        applications.
      </h2>
      <button class="btn btn-square btn-lg">text</button>
    </div>
    <div v-else>
      <h2 class="text-white text-xl md:text-4xl font-bold">
        Read the stories behind my projects, highlighting challenges,
        breakthroughs, and lessons learned.
      </h2>
      <button class="btn btn-square md:btn-lg">text</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>
