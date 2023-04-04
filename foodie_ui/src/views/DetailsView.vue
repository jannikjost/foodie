<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRecipesStore } from '../stores/recipeStore'

const route = useRoute()
const recipesStore = useRecipesStore()

const recipe = ref({})

onMounted(async () => {
  recipe.value = await recipesStore.getRecipeById(route.params.id)
})
</script>

<template>
  <v-btn to="/recipes"> <v-icon icon="mdi-chevron-left" /> Zurück </v-btn>
  <main v-if="recipe">
    <h1>{{ recipe.name }}</h1>
    <img :src="recipe.picture" :alt="'picture of recipe ' + recipe.name" />
    <div></div>
    <section v-if="recipe.nutritionFacts">
      <h2>Nährwerte</h2>
      <div class="nutritionFacts-wrapper">
        <p>{{ recipe.nutritionFacts.calories }}</p>
        <p>{{ recipe.nutritionFacts.fat }}</p>
        <p>{{ recipe.nutritionFacts.carbohydrate }}</p>
        <p>{{ recipe.nutritionFacts.protein }}</p>
      </div>
    </section>
    <section v-if="recipe.ingredients">
      <h2>Zutaten</h2>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
          <p>{{ ingredient.name }}: {{ ingredient.amount }}{{ ingredient.unit }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
img {
  width: 100%;
  height: 150px;
}
ul {
  list-style: none;
}
.nutritionFacts-wrapper {
  display: flex;
  justify-content: space-around;
}
</style>
