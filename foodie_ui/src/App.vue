<script setup>
import OfflineBanner from './components/OfflineBanner.vue'
import { useCommonStore } from './stores/common'
const commonStore = useCommonStore()

window.addEventListener('online', () => commonStore.setIsDeviceOffline(false))
window.addEventListener('offline', () => commonStore.setIsDeviceOffline(true))
</script>

<template>
  <v-app>
    <OfflineBanner />
    <router-view />
    <v-bottom-navigation>
      <v-btn to="/">
        <v-icon icon="mdi-home" />
      </v-btn>
      <v-btn to="/recipes">
        <v-icon icon="mdi-format-list-bulleted" />
      </v-btn>
      <v-btn to="/favorites">
        <v-icon icon="mdi-heart-outline" />
      </v-btn>
      <v-btn to="/planner">
        <v-icon icon="mdi-calendar-today" />
      </v-btn>
      <v-btn to="/settings">
        <v-icon icon="mdi-cog" />
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style>
#app {
  height: calc(100vh - 56px) !important;
}
.v-application__wrap {
  min-height: 0vh !important;
}
.v-main {
  max-height: 100% !important;
  padding-bottom: 0px !important;
}
.v-bottom-navigation {
  background-color: #f3f3f3 !important;
}
</style>
