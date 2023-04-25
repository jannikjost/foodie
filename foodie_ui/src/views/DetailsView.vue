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

function copy(ingredients) {
  const transformedIngredients = formatIngredients(ingredients)
  navigator.clipboard.writeText(transformedIngredients)
}

function formatIngredients(ingredients) {
  const formattedString = ingredients.reduce((stringToBuild, ingredient) => {
    stringToBuild += ingredient.name + ': ' + ingredient.amount + ingredient.unit + '\n'
    return stringToBuild
  }, '')
  return formattedString
}
</script>

<template>
  <v-main>
    <v-btn to="/recipes"> <v-icon icon="mdi-chevron-left" /> Zurück </v-btn>
    <v-card v-if="recipe">
      <h1>{{ recipe.name }}</h1>
      <img :src="recipe.picture" :alt="'picture of recipe ' + recipe.name" />
      <div></div>
      <section v-if="recipe.nutritionFacts">
        <h2>Nährwerte</h2>
        <v-list class="nutrition_facts" lines="one">
          <v-list-item
            title="Kalorien"
            :subtitle="recipe.nutritionFacts.calories + 'kcal'"
          ></v-list-item>
          <v-list-item title="Fett" :subtitle="recipe.nutritionFacts.fat + 'g'"></v-list-item>
          <v-list-item
            title="Kohlenhydrate"
            :subtitle="recipe.nutritionFacts.carbohydrate + 'g'"
          ></v-list-item>
          <v-list-item
            title="Eiweiss"
            :subtitle="recipe.nutritionFacts.protein + 'g'"
          ></v-list-item>
        </v-list>
      </section>
      <v-menu location="top">
        <template v-slot:activator="{ props }">
          <section v-if="recipe.ingredients" v-bind="props">
            <h2>Zutaten für {{ recipe.servings }} Portionen</h2>
            <ul>
              <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
                <p>{{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.name }}</p>
              </li>
            </ul>
          </section>
        </template>

        <v-list class="copy_action">
          <v-list-item title="Zutaten kopieren" @click="copy(recipe.ingredients)"> </v-list-item>
        </v-list>
      </v-menu>
    </v-card>
  </v-main>
</template>

<style scoped>
.v-card {
  margin-top: 0.5rem;
  height: 100%;
  padding: 0.5rem;
  overflow: auto;
  height: 100%;
}
img {
  width: 100%;
  height: 150px;
}
ul {
  list-style: none;
}

.nutrition_facts {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.copy_action {
  display: flex;
  justify-content: center;
}
</style>
