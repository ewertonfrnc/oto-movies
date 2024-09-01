<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Filmes</RouterLink>
    <RouterLink to="/favorites">Favorits</RouterLink>
  </header>

  <RouterView />
</template>
