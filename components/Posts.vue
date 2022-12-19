<template>
  <div>
    <div v-if="pending">
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
      class="card w-96 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          class="h-48"
          :src="post.feature_image"
          :alt="post.feature_image_alt"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ post.title }}
          <div class="badge">NEW</div>
        </h2>
        <p>{{ post.excerpt }}</p>
        <div class="card-actions justify-end">
          <div v-for="tag in post.tags" :key="tag.id">
            <span
              v-if="tag.visibility === 'public'"
              class="badge badge-outline"
              >{{ tag.name }}</span
            >
            <span v-else class="hidden"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const { data, pending } = useLazyFetch(
      "https://content.charlesis.me/ghost/api/content/posts/?key=5d8b3cdb92a539dede4ee744a0&include=tags"
    );
    console.log(data);
    return {
      data,
      pending,
    };
  },
};
</script>
