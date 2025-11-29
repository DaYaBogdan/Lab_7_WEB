<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const seconds = computed(() => store.getters.getSeconds)

onMounted(() => (seconds.value == 0 ? store.dispatch('triggerCounter') : ''))
</script>

<template>
  <h2>{{ seconds }}</h2>
</template>

<style>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
