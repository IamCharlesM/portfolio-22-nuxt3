<template>
  <div class="">
    <div v-if="pending" class="flex flex-row space-x-5">
      <!-- Display an empty div if data is null -->
      <ImageLoader class="" />
      <ImageLoader class="" />
      <ImageLoader class="" />
      <ImageLoader class="" />
    </div>
    <div
      v-else
      v-for="post in data.posts"
      :key="post.id"
      class="card min-w-fit bg-base-300 shadow-xl"
    >
      <NuxtLink :to="'project/' + post.slug">
        <figure>
          <!--  ANCHOR image and alt text -->
          <img
            class="h-60"
            :src="post.feature_image"
            :alt="post.feature_image_alt"
          />
        </figure>
        <div class="card-body">
          <!-- ANCHOR Post title -->
          <h2
            v-if="isWithinOneMonth(post.published_at)"
            class="card-title text-white"
          >
            {{ post.title }}
            <div class="badge text-yellow-600">NEW</div>
          </h2>
          <p class="text-white">{{ post.excerpt }}</p>
          <div class="card-actions justify-end">
            <div v-for="tag in post.tags" :key="tag.id">
              <div
                v-if="tag.visibility === 'public'"
                class="badge badge-outline text-yellow-600"
              >
                {{ tag.name }}
              </div>
              <span v-else class="hidden"></span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data, pending, error } = await useFetch(
  "https://content.charlesisa.dev/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&include=tags",
);
if (error.value) {
  console.error("Fetch error:", error.value);
}

const isWithinOneMonth = (publishedOn) => {
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  // Parse the publishedOn string into a Date object
  const publishedDate = new Date(publishedOn);

  return publishedDate >= oneMonthAgo && publishedDate <= today;
};

// Call the function with a sample date
// console.log(data.value.posts[0].published_at);
</script>
