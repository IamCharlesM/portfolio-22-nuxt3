<template>
  <div class="grid gap-4 py-10 lg:h-screen lg:grid-cols-8 lg:grid-rows-7">
    <!--  -->
    <div
      class="col-span-full grid grid-cols-1 gap-4 lg:row-span-3 lg:grid-cols-6 lg:grid-rows-2"
    >
      <!-- ANCHOR Section name -->
      <div
        class="flex flex-col rounded-3xl p-4 text-6xl lg:col-span-4 lg:row-span-full lg:grid lg:grid-cols-2 lg:self-center lg:text-9xl"
        :id="sectionTitle.toLowerCase()"
      >
        {{ sectionTitle }}
        <div class="h-52 w-auto border-b-8 border-success">
          <img
            src="../public/content.png"
            alt="peep crouching"
            class="mx-auto h-full"
          />
        </div>
      </div>
      <div class="rounded-3xl bg-base-300 p-4 lg:col-span-2 lg:row-span-2">
        <!-- ANCHOR Section CTA -->
        <div
          class="flex-flex-col my-auto content-center space-y-8 text-2xl lg:space-y-4 lg:text-2xl"
        >
          <p v-if="sectionTitle == 'Projects'">
            Dive into some of the projects I've steered. From the ground up,
            I've developed systems that not only perform but also deliver on the
            promise of better user engagement. Check out how I used technologies
            like Django, React, and AWS to transform ideas into digital
            realities.
          </p>
          <p v-else>
            Each project has its own story, and here’s where I tell them. Delve
            into detailed case studies showcasing my process, the challenges
            faced, and the innovative strategies I employed to deliver robust
            digital solutions for clients like Chitown Champions and Platas
            Auto.
          </p>
          <NuxtLink to="/project" class="btn btn-primary w-1/2"
            >See full portfolio</NuxtLink
          >
        </div>
      </div>
    </div>

    <!-- ANCHOR Main content -->
    <div
      class="col-span-full flex grid-rows-2 flex-col gap-4 lg:row-span-4 lg:grid lg:grid-cols-8 lg:grid-rows-4"
      :class="{ 'lg:order-last': alt, '': !alt }"
    >
      <!-- ANCHOR Main bottom box -->
      <div
        class="relative h-60 content-end rounded-3xl bg-cover bg-center p-4 lg:col-span-6 lg:row-span-full lg:grid lg:h-auto"
        :style="{ 'background-image': `url(${post.feature_image})` }"
      >
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 rounded-3xl bg-gradient-to-t from-info via-info via-40% to-transparent lg:bg-gradient-to-r"
        ></div>
        <!-- Content -->
        <div class="relative grid self-end">
          <span class="text-xl font-semibold lg:text-5xl">
            {{ post.title }}</span
          >
        </div>
      </div>

      <!-- ANCHOR Small boxes to the right -->
      <div
        class="row-span-1 grid grid-rows-2 gap-4 lg:col-span-2 lg:row-span-full lg:grid-cols-2 lg:grid-rows-4"
      >
        <div
          class="row-span-1 rounded-3xl p-4 text-xl lg:col-span-full lg:row-span-2"
          :class="{ 'bg-info ': alt, 'text-info-300 bg-success': !alt }"
        >
          {{ post.custom_excerpt }}
        </div>
        <NuxtLink
          v-if="sectionTitle == 'Projects'"
          :to="`/project/${post.slug}`"
          class="row-span-1 rounded-3xl border-4 border-neutral bg-base-200 p-4 text-3xl lg:col-span-full lg:row-span-2"
        >
          <div class="flex flex-col">
            <div>See the Code in Action</div>
            <div class="h-full">
              <client-only>
                <Vue3Lottie
                  animationLink="https://lottie.host/44b44d7e-918a-4fd7-93e4-05192098e222/NkyyUzsZx5.json"
                  loop
                  autoplay
                  background="transparent"
                  speed="1"
                  class="!mx-0 !w-full translate-y-0 self-end lg:block lg:!h-60 lg:!w-fit lg:-translate-y-8"
                />
              </client-only>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink
          v-else
          class="row-span-1 rounded-3xl border-4 border-neutral bg-base-200 p-4 text-3xl lg:col-span-full lg:row-span-2"
          :to="`/project/${post.slug}`"
        >
          <div class="fex flex-col font-semibold">
            <div>Discover the Stories Behind the Screens</div>
            <div class="h-full">
              <client-only>
                <Vue3Lottie
                  animationLink="https://lottie.host/44b44d7e-918a-4fd7-93e4-05192098e222/NkyyUzsZx5.json"
                  loop
                  autoplay
                  background="transparent"
                  speed="1"
                  class="!mx-0 !w-full translate-y-0 self-end lg:block lg:!h-60 lg:!w-fit lg:-translate-y-16"
                />
              </client-only>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["type", "title", "alt"]);

const alt = props.alt;

const sectionTitle = props.title;

// console.log(props.type);

const { data, pending, error } = await useFetch(
  `https://content.charlesisa.dev/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&filter=featured%3Atrue%2Btags%3A${props.type}`,
);

// console.log(data.value.posts[1]);

const post = data.value.posts[0];

// console.log(post);
// Error handling
if (error.value) {
  console.error("Fetch error:", error.value);
}
</script>
