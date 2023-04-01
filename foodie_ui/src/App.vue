<template>
  <v-app>
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
</style>
