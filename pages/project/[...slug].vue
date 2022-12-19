<template>
  <div>
    <div v-if="pending">...loading</div>
    <div
      v-for="(post, index) in data.posts"
      :key="index"
      class="hero-content text-center flex flex-col"
    >
      <h1 class="text-3xl text-center font-bold lg:text-4xl text-white">
        {{ post.title }}
      </h1>

      <h3>Last updated {{ formattedDate }}</h3>
      <div>
        <img
          :src="post.feature_image"
          :alt="post.feature_image_alt"
          class="mb-5"
        />
        <div class="">
          <span v-for="(tag, index) in post.tags" :key="index" class="">
            <span class="badge badge-outline m-1">{{ tag.name }}</span>
          </span>
        </div>
      </div>
      <div v-html="post.html" class="prose text-white lg:prose-xl"></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "project" });
const route = useRoute();
let slug = route.params.slug[0];
const { data, pending } = await useFetch(
  `https://content.charlesis.me/ghost/api/content/posts/slug/${slug}/?key=5d8b3cdb92a539dede4ee744a0&include=tags`
);

const dateString = data._value.posts[0].updated_at;

// ANCHOR Create a new Date object from the date string
const date = new Date(dateString);

// ANCHOR Use the toLocaleDateString method to format the date
const formattedDate = date.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
</script>

<style scoped>
:deep(p) {
  text-align: left;
}

:deep(.kg-bookmark-description) {
  text-align: left;
}
</style>
