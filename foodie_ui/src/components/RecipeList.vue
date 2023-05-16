<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import Api from '../api'

const props = defineProps({
  recipes: Array
})

const emits = defineEmits(['update'])

const router = useRouter()

function openRecipe(recipe) {
  router.push({ name: 'details', params: { id: recipe.id } })
}

async function addToFavorites(recipe) {
  recipe.favorite = !recipe.favorite
  await Api.updateRecipe(recipe)
  emits('update')
}

async function deleteRecipe(id) {
  await Api.deleteRecipe(id)
  emits('update')
}
</script>

<template>
  <ul>
    <li v-for="recipe in props.recipes" :id="recipe.id">
      <v-card class="recipe_card" @click="openRecipe(recipe)">
        <v-card-title>
          <v-card class="btn-group">
            <v-btn
              size="small"
              :icon="recipe.favorite ? 'mdi-heart' : 'mdi-heart-outline'"
              :class="{ favorite__icon: recipe.favorite }"
              @click.stop="addToFavorites(recipe)"
            ></v-btn>
            <v-btn size="small" icon="mdi-pencil"></v-btn>
            <v-btn size="small" icon="mdi-delete" @click.stop="deleteRecipe(recipe.id)"></v-btn>
          </v-card>
        </v-card-title>
        <v-card-subtitle>{{ recipe.name }}</v-card-subtitle>
        <div class="card-body">
          <img class="img" :src="recipe.picture" />
          <div class="nutrition_facts_wrapper" v-if="recipe.nutritionFacts">
            <!-- <p>Energie {{ recipe.nutritionFacts.calories }} kcal</p> -->
            <v-card>
              <v-list class="nutrition_facts" lines="one">
                <v-list-item
                  title="Carbs"
                  :subtitle="recipe.nutritionFacts.carbohydrate"
                ></v-list-item>
                <v-list-item
                  title="Protein"
                  :subtitle="recipe.nutritionFacts.protein"
                ></v-list-item>
                <v-list-item title="Fat" :subtitle="recipe.nutritionFacts.fat"></v-list-item>
              </v-list>
            </v-card>
          </div>
        </div>
      </v-card>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  overflow: auto;
  height: 100%;
}
li {
  margin-bottom: 2rem;
}
.v-card {
  background-color: #e2dcfe;
  border-radius: 8px;
}
.v-card-title {
  display: flex;
  justify-content: flex-end;
}
.v-card-subtitle {
  padding: 1rem 1rem;
  opacity: inherit;
  font-size: 1.25rem;
  font-weight: bold;
}
.btn-group {
  background-color: #6345fe;
  padding: 0.25rem;
}
.btn-group > :nth-child(3) {
  margin: 0 0.5rem;
}
.card-body {
  display: flex;
  flex-direction: column;
}
.card-body > div {
  flex-grow: 1;
}
.img {
  clip-path: circle();
  width: 100px;
  height: 100px;
  margin: 0 0.5rem 0.5rem;
}
.favorite__icon {
  color: red;
}
.nutrition_facts_wrapper {
  padding: 0.75rem;
}
.nutrition_facts {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.nutrition_facts > * {
  display: flex;
  align-content: center;
}
</style>
