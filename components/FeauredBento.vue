<template>
  <div
    class="bg-red-600 h-full flex md:w-1/2 rounded-3xl bg-cover bg-center p-4"
  >
    <div v-if="title == 'Projects'">
      <h2 class="text-white text-4xl w-3/4 font-bold">
        Explore my technical achievements, from coding solutions to software
        applications.
      </h2>
      <button class="btn btn-square btn-lg">text</button>
    </div>
    <div v-else>
      <h2 class="text-white text-4xl w-3/4 font-bold">
        Read the stories behind my projects, highlighting challenges,
        breakthroughs, and lessons learned.
      </h2>
      <button class="btn btn-square btn-lg">text</button>
    </div>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>
