<template>
  <div class="flex flex-col h-screen w-full space-y-8">
    <div class="h-2/6 flex flex-col md:flex-row md:space-x-4">
      <!-- ANCHOR Section name -->
      <div class="w-full md:w-3/5 p-4 rounded-3xl text-9xl">
        {{ sectionTitle }}
      </div>
      <div class="w-full md:w-2/5 bg-red-50 rounded-3xl p-4">
        <!-- ANCHOR Section CTA -->
        <div class="flex flex-col text-2xl">
          <p v-if="sectionTitle == 'Projects'">
            Dive into the technical side of my work! The Projects section
            showcases a variety of technical achievements, from intricate coding
            solutions to robust software applications. Each project is
            meticulously detailed to highlight the challenges faced, the
            solutions developed, and the technologies employed. It's a deep dive
            into the nitty-gritty of my professional journey.
          </p>
          <p v-else>
            Explore the stories behind my work! The Stories section is a
            collection of articles that detail my professional journey, from the
            challenges faced to the solutions developed. Each story is
            meticulously detailed to highlight the challenges faced, the
            solutions developed, and the technologies employed. It's a deep dive
            into the nitty-gritty of my professional journey.
          </p>
          <button class="btn btn-primary w-1/2">See full portfolio</button>
        </div>
      </div>
    </div>
    <div class="h-3/6 w-full flex flex-col md:flex-row md:space-x-8">
      <!-- ANCHOR Main bottom box -->
      <div
        class="md:w-4/5 rounded-3xl p-4 bg-cover bg-center relative"
        :style="{ 'background-image': `url(${post.feature_image})` }"
      >
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-indigo-500 via-sky-500 via-40% to-transparent rounded-3xl"
        ></div>
        <!-- Content -->
        <div class="relative h-full">
          <span class="align-bottom"> {{ post.title }}</span>
        </div>
      </div>

      <!-- ANCHOR Small boxes to the right -->
      <div class="flex flex-col md:w-1/5 space-y-4">
        <div class="h-1/2 bg-slate-300 rounded-3xl p-4">
          {{ post.custom_excerpt }}
        </div>
        <div class="h-1/2 bg-slate-400 rounded-3xl p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          totam porro minima voluptatem delectus, quis laborum laudantium eum
          molestiae mollitia similique earum animi enim tempore velit dolor
          doloribus magnam perspiciatis.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["type", "title"]);

const sectionTitle = props.title;

const { data, pending, error } = await useFetch(
  `https://content.charlesisa.dev/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&filter=featured%3Atrue%2Btags%3A${props.type}`
);

// console.log(data.value.posts[1]);

const post = data.value.posts[0];

console.log(post);
// Error handling
if (error.value) {
  console.error("Fetch error:", error.value);
}
</script>
