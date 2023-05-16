<script setup>
import { useCommonStore } from '../stores/common'
const commonStore = useCommonStore()
</script>

<template>
  <div>
    <v-alert
      v-if="commonStore.isDeviceOffline.value"
      density="compact"
      text="Die App ist nur eingeschränkt funktionsfähig"
      title="Ihr Gerät is offline"
      type="warning"
    ></v-alert>
  </div>
</template>

<style scoped>
div {
  /* margin-bottom: 0.5rem; */
}
</style>
