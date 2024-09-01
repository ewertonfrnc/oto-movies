<template>
  <div class="movies">
    <MoviesCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import MoviesCard from '@/components/MoviesCard.vue'

type Props = { movies: TMDBMovie[] }
const { movies } = defineProps<Props>()
</script>

<style scoped lang="scss">
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}
</style>
