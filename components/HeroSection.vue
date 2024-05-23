<template>
  <div
    class="flex h-full grid-cols-1 grid-rows-8 flex-col gap-4 space-y-4 lg:grid lg:h-screen lg:grid-cols-8 lg:space-y-0"
  >
    <div
      class="col-span-full row-span-4 my-auto flex flex-col gap-4 rounded-3xl bg-base-300 p-4 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:py-0"
    >
      <h1
        class="col-span-2 row-start-1 inline-block content-center align-middle text-2xl font-semibold lg:text-5xl"
      >
        Hello World, I'm Here to Make Yours Easier!
      </h1>
      <p class="row-start-2 text-xl lg:text-2xl">
        Whether it's jazzing up a janky old website or building a digital
        presence from scratch, I've been cracking codes and crafting creative
        solutions in Chicago's web scene. Let’s explore how we can elevate your
        project together.
      </p>
      <span class="col-start-3 row-start-3 content-center"
        ><button class="btn btn-primary btn-wide">
          Let's talk Tech!
        </button></span
      >
    </div>

    <FeauredBento title="Projects" />
    <FeauredBento title="Stories" />
  </div>
</template>

<script setup></script>
