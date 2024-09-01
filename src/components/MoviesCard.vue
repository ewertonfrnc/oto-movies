<template>
  <div class="card">
    <div class="card__header">
      <p>{{ movie.title }}</p>
    </div>

    <div class="card__details">
      <p>{{ movie.vote_average }}</p>
      <p>{{ movie.vote_count }}</p>
      <p>{{ movie.popularity }}</p>
    </div>

    <div class="card__footer">
      <button type="button" @click="handleNavigation(movie.id)">Detalhes</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

type Props = { movie: TMDBMovie }
const { movie } = defineProps<Props>()

const router = useRouter()

function handleNavigation(movieId: number): void {
  router.push(`/movie/${movieId}`)
}
</script>

<style scoped lang="scss">
@import '../assets/styles/abstracts/variables';

.card {
  padding: 16px;
  min-height: 200px;
  border-radius: 8px;
  background-color: $black-secondary;
}
</style>
