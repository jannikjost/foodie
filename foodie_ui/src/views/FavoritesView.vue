<script setup>
import { ref, onMounted } from 'vue'
import Api from '../api'
import RecipeList from '../components/RecipeList.vue'

const favorites = ref([])
const loading = ref(true)

onMounted(async () => {
  loading.value = true
  favorites.value = await Api.getFavorites()
  loading.value = false
})

async function updateFavorites() {
  loading.value = true
  favorites.value = await Api.getFavorites()
  loading.value = false
}
</script>

<template>
  <v-main v-if="loading">
    <!-- TODO loading animation -->
    <h1>Loading</h1>
  </v-main>
  <v-main v-else-if="favorites.length">
    <RecipeList :recipes="favorites" @update="updateFavorites" />
  </v-main>
  <v-main v-else>
    <p>Du hast aktuell keine Favoriten</p>
  </v-main>
</template>
