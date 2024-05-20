<template>
  <div
    class="bg-red-600 h-full flex md:w-1/2 rounded-3xl bg-cover bg-center"
    :style="{ 'background-image': `url(${image})` }"
  >
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ab
    dignissimos molestiae, quis repellat eum quia vel commodi et reprehenderit
    suscipit provident? Deleniti ipsa reprehenderit dolore expedita! Quibusdam,
    sint fugit!
  </div>
</template>

<script setup>
defineProps(["image"]);
</script>
