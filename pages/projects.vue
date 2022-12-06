<template lang="">
  <div class="container mx-auto">
    <div class="text-red">hello</div>
    <pre>    {{ data }}  </pre>
  </div>
</template>
<script setup>
const { data } = await useAsyncData("home", () => queryContent("/").findOne());
</script>
<style lang=""></style>
