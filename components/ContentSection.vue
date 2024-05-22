<template>
  <div class="grid gap-4 md:h-screen md:grid-cols-8 md:grid-rows-8">
    <!--  -->
    <div
      class="col-span-full grid grid-cols-1 gap-4 md:row-span-3 md:grid-cols-6 md:grid-rows-2"
    >
      <!-- ANCHOR Section name -->
      <div
        class="row-span-1 rounded-3xl p-4 text-6xl md:col-span-4 md:row-span-full md:text-9xl"
      >
        {{ sectionTitle }}
      </div>
      <div class="rounded-3xl bg-base-300 p-4 md:col-span-2 md:row-span-2">
        <!-- ANCHOR Section CTA -->
        <div class="text-2xl">
          <p v-if="sectionTitle == 'Projects'">
            Dive into some of the projects I've steered. From the ground up,
            I've developed systems that not only perform but also deliver on the
            promise of better user engagement. Check out how I used technologies
            like Django, React, and AWS to transform ideas into digital
            realities.
          </p>
          <span v-else>
            Each project has its own story, and here’s where I tell them. Delve
            into detailed case studies showcasing my process, the challenges
            faced, and the innovative strategies I employed to deliver robust
            digital solutions for clients like Chitown Champions and Platas
            Auto.
          </span>
          <NuxtLink to="/project" class="btn btn-primary w-1/2"
            >See full portfolio</NuxtLink
          >
        </div>
      </div>
    </div>

    <!-- ANCHOR Main content -->
    <div
      class="col-span-full grid grid-rows-2 gap-4 md:grid-cols-8 md:grid-rows-4"
      :class="{ 'md:order-last': alt, '': !alt }"
    >
      <!-- ANCHOR Main bottom box -->
      <div
        class="relative row-span-1 grid content-end rounded-3xl bg-cover bg-center p-4 md:col-span-6 md:row-span-full"
        :style="{ 'background-image': `url(${post.feature_image})` }"
      >
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 rounded-3xl bg-gradient-to-t from-info via-info via-40% to-transparent md:bg-gradient-to-r"
        ></div>
        <!-- Content -->
        <div class="relative grid self-end">
          <span class="text-xl font-semibold md:text-5xl">
            {{ post.title }}</span
          >
        </div>
      </div>

      <!-- ANCHOR Small boxes to the right -->
      <div
        class="row-span-1 grid grid-rows-2 gap-4 md:col-span-2 md:row-span-full md:grid-cols-2 md:grid-rows-4"
      >
        <div
          class="row-span-1 rounded-3xl p-4 md:col-span-full md:row-span-2"
          :class="{ 'bg-info ': alt, 'text-info-300 bg-secondary': !alt }"
        >
          {{ post.custom_excerpt }}
        </div>
        <NuxtLink
          v-if="sectionTitle == 'Projects'"
          :to="post.url"
          class="row-span-1 rounded-3xl bg-base-200 p-4 text-3xl md:col-span-full md:row-span-2"
        >
          <div>See the Code in Action lorem</div>
        </NuxtLink>
        <NuxtLink
          v-else
          class="row-span-1 rounded-3xl bg-base-200 p-4 text-3xl md:col-span-full md:row-span-2"
          :to="post.url"
        >
          <div>Discover the Stories Behind the Screens</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["type", "title", "alt"]);

const alt = props.alt;

const sectionTitle = props.title;

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
