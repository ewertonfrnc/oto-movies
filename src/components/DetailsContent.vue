<template>
  <div class="details">
    <div class="details__info">
      <div>
        <img
          class="details__poster"
          :src="`${BASE_TMDB_IMAGE_URL}/${movie.poster_path}`"
          :alt="`Poster do filme ${movie.title}`"
        />
      </div>

      <div class="details__specs">
        <div class="details__title">
          <h2>{{ movie.title }}</h2>
          <small>{{ movie.tagline }}</small>
        </div>

        <p class="details__data">
          <span>🎭 Gênero:</span>
          <span>{{ genres }}</span>
        </p>

        <p class="details__data">
          <span>🎬 Lançamento:</span>
          <span>{{ formatDate(movie.release_date) }}</span>
        </p>

        <p class="details__data">
          <span>💰 Receita:</span>
          <span>{{ formatCurrency(movie.revenue) }}</span>
        </p>
      </div>
    </div>

    <div class="details__additional">
      <h3>Sinopse</h3>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

import { formatCurrency, formatDate } from '@/utils/formatters.utils'
import { BASE_TMDB_IMAGE_URL } from '@/utils/tmdb.utils'
import { computed } from 'vue'

type Props = { movie: TMDBMovie }
const { movie } = defineProps<Props>()

const genres = computed(() => {
  const { genres } = movie

  if (genres && genres.length) {
    return genres.map((genre) => genre.name).join(', ')
  }

  return 'N/A'
})
</script>

<style scoped lang="scss">
@import '@/assets/styles/abstracts/variables.scss';

.details {
  position: relative;
  margin-top: 16px;

  &__poster {
    height: 250px;
    border-radius: 8px;
    //border: 1px solid $black-primary;
    overflow: hidden;

    &--img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__info {
    padding: 16px;
    border-radius: 8px;
    background-color: $black-secondary;
    display: flex;
    gap: 16px;
  }

  &__specs {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__data {
    display: flex;
    flex-direction: column;

    span:first-child {
      font-weight: bold;
    }
  }

  &__additional {
    padding: 16px;
    border-radius: 8px;
    margin-top: 8px;
    background-color: $black-secondary;
  }
}
</style>
