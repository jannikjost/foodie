<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const versionText = PACKAGE_NAME + ' @ ' + APP_VERSION
</script>

<template>
  <main>
    <RouterLink :to="{ name: 'settings_create' }">Neues Rezept hinzufügen</RouterLink>
    <div>
      {{ versionText }}
      <a href=""><font-awesome-icon :icon="['fab', 'github']" /></a>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
