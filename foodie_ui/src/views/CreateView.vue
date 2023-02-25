<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../api'

const router = useRouter()

const name = ref('')
const picture = ref('')
const link = ref('')

async function save() {
  await api.createRecipe({ name: name.value, picture: picture.value, link: link.value })
  cancel()
}

function cancel() {
  router.push({ name: 'settings' })
}
</script>

<template>
  <main>
    <RouterLink to="/settings"
      ><font-awesome-icon icon="chevron-left" /> Zurück zu Einstellungen</RouterLink
    >
    <form>
      <div class="field">
        <label for="name">Name</label>
        <input id="name" v-model="name" />
      </div>
      <div class="field">
        <label for="picture">Bild</label>
        <input id="picture" v-model="picture" />
      </div>
      <div class="field">
        <label for="link">Link</label>
        <input id="link" v-model="link" />
      </div>

      <div>
        <button @click.prevent.default="save">Speichern</button>
        <button @click.prevent.default="cancel">Abbrechen</button>
      </div>
    </form>
  </main>
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
