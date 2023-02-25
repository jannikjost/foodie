<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

  <footer>
    <nav>
      <RouterLink to="/"> <font-awesome-icon icon="house" /></RouterLink>
      <RouterLink to="/recipes"><font-awesome-icon icon="list" /></RouterLink>
      <RouterLink to="/favorites"><font-awesome-icon icon="heart" /></RouterLink>
      <RouterLink to="/Settings"><font-awesome-icon icon="gear" /></RouterLink>
    </nav>
  </footer>
</template>

<style scoped>
main {
  flex-grow: 1;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: end;
}
</style>
