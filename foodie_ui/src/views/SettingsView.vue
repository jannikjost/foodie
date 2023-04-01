<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const versionText = PACKAGE_NAME + ' @ ' + APP_VERSION
</script>

<template>
  <v-main>
    <v-btn :to="{ name: 'settings_create' }"> Neues Rezept hinzufügen </v-btn>
    <div>
      {{ versionText }}
      <a href="https://github.com/" target="_blank">github</a>
    </div>
  </v-main>
</template>

<style scoped></style>
