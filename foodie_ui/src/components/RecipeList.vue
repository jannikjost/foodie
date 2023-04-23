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
