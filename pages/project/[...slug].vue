<template>
  <main>
    <ContentRenderer v-if="project" :value="project" />
  </main>
</template>

<script setup>
// ANCHOR get slug
const slug = useRoute().params.slug.toString().replace(/,/g, "/");

// Render page based on slug
const { data: project } = await useAsyncData(slug, () => {
  return queryContent(slug).findOne();
});
</script>
