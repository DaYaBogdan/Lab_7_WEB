<script>
import { images_length } from '@/store/AlbumConstants'

export default {
  props: ['id'],
  methods: {
    redirect() {
      this.$router.push({ name: 'Album' })
    },
    back() {
      const newId = this.id == 1 ? images_length : Number(this.id) - 1
      this.$router.push({ name: 'EnlargedPicture', params: { id: newId } })
    },
    next() {
      const newId = this.id == images_length ? 1 : Number(this.id) + 1
      this.$router.push({ name: 'EnlargedPicture', params: { id: newId } })
    },
  },
}
</script>

<template>
  <div class="background">
    <img :src="`../src/images/album/album_${this.id}.jpg`" />
    <button class="close-button" style="width: 5.5%" @click="redirect">close</button>
    <div class="album-buttons">
      <button style="width: 10%" @click="back">previous</button>
      <button style="width: 10%" @click="next">next</button>
    </div>
  </div>
</template>

<style>
@import url('../styles/buttons.css');
@import url('../styles/images.css');
</style>
