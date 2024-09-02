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
          <span class="details__data--genres">{{ genres }}</span>
        </p>

        <p class="details__data">
          <span>🎬 Lançamento:</span>
          <span class="details__data--release">{{ formatDate(movie.release_date) }}</span>
        </p>

        <p class="details__data">
          <span>💰 Receita:</span>
          <span class="details__data--revenue">{{ formatCurrency(movie.revenue) }}</span>
        </p>
      </div>
    </div>

    <div class="details__additional">
      <h3>Sinopse</h3>
      <p>{{ movie.overview }}</p>
    </div>

    <div class="details__backdrop">
      <img
        :src="`${BASE_TMDB_IMAGE_URL}/${movie.backdrop_path}`"
        :alt="`Poster do filme ${movie.title}`"
      />
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
@import '@/assets/styles/abstracts/mixin.scss';

.details {
  position: relative;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  &__poster {
    height: 250px;
    border-radius: 8px;
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

    @include respond(phone) {
      flex-direction: column;
      align-items: center;
    }
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
    background-color: $black-secondary;
  }

  &__backdrop {
    overflow: hidden;
    border-radius: 8px;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
