<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api'

const router = useRouter()

const name = ref('')
const picture = ref('')
const link = ref('')
const ingredients = ref([])
const units = ['g', 'mg', 'ml']

async function save() {
  await api.createRecipe({
    name: name.value,
    picture: picture.value,
    link: link.value,
    ingredients: ingredients.value
  })
  cancel()
}

function cancel() {
  router.push({ name: 'settings' })
}

function addNewIngredient() {
  ingredients.value.push({ name: '', amount: 0, unit: '' })
}
</script>

<template>
  <v-main>
    <v-btn to="/settings"> <v-icon icon="mdi-chevron-left" /> Zurück zu Einstellungen </v-btn>
    <v-form>
      <div class="field">
        <v-text-field v-model="name" label="Name" />
      </div>
      <div class="field">
        <v-text-field v-model="picture" label="Bild" />
      </div>
      <div class="field">
        <v-text-field v-model="link" label="Link" />
      </div>
      <div class="field">
        <v-table
          ><thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Anzahl</th>
              <th class="text-left">Einheit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ingredient in ingredients" :key="ingredient.name">
              <td><v-text-field v-model="ingredient.name" /></td>
              <td><v-text-field v-model="ingredient.amount" pattern="[0-9]*" /></td>
              <td><v-select v-model="ingredient.unit" :items="units" /></td>
            </tr></tbody
        ></v-table>
        <v-btn @click="addNewIngredient">+</v-btn>
      </div>

      <div>
        <v-btn @click.prevent.default="save">Speichern</v-btn>
        <v-btn @click.prevent.default="cancel">Abbrechen</v-btn>
      </div>
    </v-form>
  </v-main>
</template>

<style>
form,
.field {
  display: grid;
}
form {
  padding-top: 0.5rem;
  gap: 1rem;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
