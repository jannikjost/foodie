<script setup>
import { ref, onMounted } from 'vue'
import Api from '../api'

const favorites = ref([])

onMounted(async () => {
  favorites.value = await Api.getFavorites()
})
</script>

<template>
  <main>
    {{ favorites }}
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
