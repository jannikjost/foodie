<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Api from '../api'

const router = useRouter()
const newestRecipes = ref([])
const loading = ref(true)

onMounted(async () => {
  updateNewestRecipes()
})

async function updateNewestRecipes() {
  loading.value = true
  newestRecipes.value = await Api.getNewestRecipes()
  loading.value = false
}

async function load() {
  newestRecipes.value = await Api.getNewestRecipes()
}

function openRecipe(recipe) {
  router.push({ name: 'details', params: { id: recipe.id } })
}
</script>

<template>
  <v-main v-if="loading">
    <!-- TODO loading animation -->
    <h1>Loading</h1>
  </v-main>
  <v-main v-else>
    <div class="newest">
      <v-card>
        <v-card-title>
          <h3>Neuste Rezepte</h3>
          <v-btn variant="text"><router-link to="/recipes">alle</router-link></v-btn>
        </v-card-title>
        <div class="card-body">
          <div>
            <ul>
              <li v-for="recipe in newestRecipes">
                <img class="img" :src="recipe.picture" />
                <h3>{{ recipe.name }}</h3>
              </li>
            </ul>
          </div>
        </div>
      </v-card>
    </div>
  </v-main>
</template>

<style scoped>
#app {
  padding: 0;
}

.newest {
  background-color: #f2f2f2;
  width: 100%;
}
.v-card-title {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.img {
  clip-path: circle();
  width: 100px;
  height: 100px;
  margin: 0 0.5rem 0.5rem;
}
</style>
