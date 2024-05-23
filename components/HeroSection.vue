<template>
  <div class="flex h-fit flex-col gap-4 lg:grid lg:grid-cols-8 lg:gap-4">
    <div
      class="my-auto flex flex-col gap-4 rounded-3xl bg-base-300 p-4 lg:col-span-8 lg:row-span-2 lg:grid lg:grid-cols-3 lg:grid-rows-3"
    >
      <h1
        class="col-span-2 row-start-1 self-center text-2xl font-semibold lg:text-5xl"
      >
        Hello World, I'm Here to Make Yours Easier!
      </h1>
      <div class="h-52 w-auto rounded-3xl bg-success lg:hidden">
        <img
          src="../public/Open Peeps - Sitting.png"
          alt="peep sitting to the left"
          class="mx-auto h-full"
        />
      </div>
      <p class="row-start-2 text-xl lg:text-2xl">
        Whether it's jazzing up a janky old website or building a digital
        presence from scratch, I've been cracking codes and crafting creative
        solutions in Chicago's web scene. Let’s explore how we can elevate your
        project together.
      </p>

      <div
        class="row-start-3 hidden h-52 w-auto rounded-3xl bg-success lg:block"
      >
        <img
          src="../public/Open Peeps - Sitting.png"
          alt="peep sitting to the left"
          class="mx-auto h-full"
        />
      </div>

      <div
        class="col-start-2 row-span-2 row-start-2 hidden w-auto rounded-full bg-info lg:block"
      >
        <img
          src="../public/standing.png"
          alt="peep standing in the center"
          class="mx-auto h-full"
        />
      </div>

      <div class="col-start-3 row-span-2 row-start-2 hidden w-auto lg:block">
        <img
          src="../public/button-sit.png"
          alt="peep sitting on a button"
          class="float-right h-full lg:-translate-x-10 lg:-translate-y-12"
        />
      </div>
      <span class="col-start-3 row-start-3">
        <a
          href="https://www.linkedin.com/in/forcharles/"
          target="_blank"
          class=""
          ><button class="btn btn-primary btn-wide">Let's talk Tech!</button>
        </a></span
      >
    </div>

    <FeauredBento title="Projects" />
    <FeauredBento title="Stories" />
  </div>
</template>

<script setup></script>
