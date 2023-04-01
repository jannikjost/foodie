import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const deviceOffline = ref(false)

  const isDeviceOffline = computed(() => deviceOffline)

  function setIsDeviceOffline(value) {
    deviceOffline.value = value;
  }

  return { isDeviceOffline, setIsDeviceOffline }
})
