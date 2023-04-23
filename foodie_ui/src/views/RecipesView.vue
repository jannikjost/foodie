<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRecipesStore } from '../stores/recipeStore'
import Api from '../api'

const router = useRouter()
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

function openRecipe(recipe) {
  router.push({ name: 'details', params: { id: recipe.id } })
}

async function addToFavorites(recipe) {
  recipe.favorite = !recipe.favorite
  await Api.updateRecipe(recipe)
  // TODO - improve to not get everything
  await applyFilter(filter.value)
}

async function deleteRecipe(id) {
  await Api.deleteRecipe(id)
  // TODO - improve to not get everything
  await applyFilter(filter.value)
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
    <ul>
      <li v-for="recipe in recipesStore.currentRecipes" :id="recipe.id">
        <v-card @click="openRecipe(recipe)">
          <v-card-title>
            {{ recipe.name }}
            <div class="btn-group">
              <v-btn
                size="small"
                :icon="recipe.favorite ? 'mdi-heart' : 'mdi-heart-outline'"
                :class="{ favorite__icon: recipe.favorite }"
                @click.stop="addToFavorites(recipe)"
              ></v-btn>
              <v-btn size="small" icon="mdi-pencil"></v-btn>
              <v-btn size="small" icon="mdi-delete" @click.stop="deleteRecipe(recipe.id)"></v-btn>
            </div>
          </v-card-title>
          <div class="card-body">
            <img class="img" :src="recipe.picture" />
            <div>test</div>
          </div>
        </v-card>
      </li>
    </ul>
  </v-main>
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
.v-card-title {
  display: flex;
  justify-content: space-between;
}
.btn-group > :first-child {
  margin-right: 0.5rem;
}
.card-body {
  display: flex;
  flex-direction: row;
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
</style>
