<template>
  <div
    class="col-span-full row-span-2 flex flex-col rounded-3xl border-4 border-neutral bg-base-300 bg-cover bg-center p-4 lg:col-span-4 lg:row-span-3 lg:grid"
  >
    <div v-if="title == 'Projects'" class="mb-4 flex h-full flex-row lg:mb-0">
      <div class="flex h-full flex-col">
        <h2 class="mb-4 text-xl font-bold lg:mb-auto lg:text-4xl">
          Explore my technical achievements, from coding solutions to software
          applications.
        </h2>
        <a href="#projects" class="lg:mb-10"
          ><button class="btn btn-outline btn-secondary">
            Featured Project
          </button></a
        >
      </div>
      <client-only>
        <div class="flex items-end">
          <Vue3Lottie
            animationLink="https://lottie.host/eadcd280-95d3-4450-af5c-0d8a3bc8910c/xoa9LGUeFK.json"
            loop
            autoplay
            background="transparent"
            speed="1"
            class="!mx-0 !ml-auto !w-28 translate-y-8 self-end lg:block lg:!h-fit lg:!w-fit lg:-translate-y-0"
          />
        </div>
      </client-only>
    </div>

    <div class="mb-4 flex h-full flex-row lg:mb-0" v-else>
      <div class="flex h-full flex-col">
        <h2 class="mb-4 text-xl font-bold lg:mb-auto lg:text-4xl">
          Read the stories behind my projects, highlighting challenges,
          breakthroughs, and lessons learned.
        </h2>
        <a href="#stories" class="lg:mb-10"
          ><button class="btn btn-outline btn-secondary">
            Featured Story
          </button></a
        >
      </div>
      <client-only>
        <div class="flex items-end">
          <Vue3Lottie
            animationLink="https://lottie.host/f7e6c55e-1e2e-4ec7-a89e-1e14a5a1560b/hqEyvRr4mq.json"
            loop
            autoplay
            background="transparent"
            speed="1"
            class="!mx-0 !ml-auto !w-28 translate-y-14 self-end lg:block lg:!h-fit lg:!w-fit lg:-translate-y-0"
          />
        </div>
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { Vue3Lottie } from "vue3-lottie";
defineProps(["title"]);
</script>
