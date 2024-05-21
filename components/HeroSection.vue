<template>
  <div class="grid grid-cols-1 md:grid-cols-8 grid-rows-8 gap-4 h-screen">
    <div
      class="col-span-full row-span-4 rounded-3xl bg-base-300 flex flex-col px-4"
    >
      <h1 class="inline-block align-middle text-2xl font-semibold md:text-6xl">
        Hello World, I'm Here to Make Yours Easier!
      </h1>
      <p class="text-xl md:text-2xl">
        Whether it's jazzing up a janky old website or building a digital
        presence from scratch, I've been cracking codes and crafting creative
        solutions in Chicago's web scene. Let’s explore how we can elevate your
        project together.
      </p>

      <button class="btn btn-primary">Let's talk Tech!</button>
    </div>

    <FeauredBento title="Projects" />
    <FeauredBento title="Stories" />
  </div>
</template>

<script setup></script>
