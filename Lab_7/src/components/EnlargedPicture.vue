<script>
export default {
  props: ['id'],
  methods: {
    redirect() {
      this.$router.go(-1)
    },
    back() {},
    next() {},
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
