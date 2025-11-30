<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { images_length, listOfNames } from '@/store/AlbumConstants'

function setUpImages() {
  const images = []
  for (var i = 1; i - 1 < images_length; i++) {
    images.push({
      src: `../src/images/album/album_${i}.jpg`,
      label: `${listOfNames[i]} from Unsplash`,
      id: i,
    })
  }
  return images
}
</script>

<template>
  <RouterView />
  <div class="image-row">
    <RouterLink
      class="image-block"
      v-for="image in setUpImages()"
      :to="{ name: 'EnlargedPicture', params: { id: image.id } }"
    >
      <img :src="image.src" />
      <h3>{{ image.label }}</h3>
    </RouterLink>
  </div>
</template>

<style>
@import url('../styles/images.css');
</style>
