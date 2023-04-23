<script setup>
import { ref, onMounted } from 'vue'
import { useRecipesStore } from '../stores/recipeStore'
import RecipeList from '../components/RecipeList.vue'
import Api from '../api'

const recipesStore = useRecipesStore()

const filter = ref('')

onMounted(async () => {
  try {
    recipesStore.currentRecipes = await Api.getFilteredRecipes()
  } catch (err) {
    console.error(err)
  }
})

async function applyFilter(value) {
  try {
    recipesStore.currentRecipes = await Api.getFilteredRecipes(value)
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <v-main>
    <v-text-field
      v-model="filter"
      label=""
      append-inner-icon="mdi-magnify"
      variant="solo"
      @update:modelValue="applyFilter($event)"
    ></v-text-field>
    <RecipeList :recipes="recipesStore.currentRecipes" @update="applyFilter" />
  </v-main>
</template>
