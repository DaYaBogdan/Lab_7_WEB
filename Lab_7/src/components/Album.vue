<script setup>
import { RouterLink, RouterView } from 'vue-router'
import EnlargedPicture from './EnlargedPicture.vue'

const images_length = 15
const listOfNames = [
  'Mak',
  'Sebastian Schuster',
  'Yuri Krupenin',
  'Tomasz Brengos',
  'Alissa Schilling',
  'Shana Van Roosbroek',
  'Evgeni Tcherkasski',
  'Jonas Degener',
  'Leongsan',
  'Jonny Gios',
  'Christian Cueni',
  'Emma Swoboda',
  'Leongsan',
  'Clay Banks',
  'Louis Droege',
]

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
