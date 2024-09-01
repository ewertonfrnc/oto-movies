<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <RouterLink to="/">Filmes</RouterLink>
    <RouterLink to="/favorites">Favoritos</RouterLink>
  </header>

  <RouterView />
</template>
