import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Api from '../api'

export const useRecipesStore = defineStore('recipes', () => {
  const currentRecipes = ref([])

  async function getRecipeById(id) {
    const recipeInCache = currentRecipes.value.find((recipe) => {
      return recipe.id === id
    })
    if (!recipeInCache) {
      return await Api.getRecipeById(id)
    }

    return recipeInCache
  }

  return { currentRecipes, getRecipeById }
})
