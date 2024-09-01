<template>
  <RouterLink :to="`/movie/${movie.id}`" class="card">
    <div class="card__header">
      <figure class="card__backdrop">
        <img
          class="card__backdrop--img"
          :src="`${BASE_TMDB_IMAGE_URL}/${movie.backdrop_path}`"
          :alt="`Poster do filme ${movie.title}`"
        />
      </figure>

      <figure class="card__poster">
        <img
          class="card__poster--img"
          :src="`${BASE_TMDB_IMAGE_URL}/${movie.poster_path}`"
          :alt="`Poster do filme ${movie.title}`"
        />
      </figure>
    </div>

    <div class="card__details">
      <h4 class="card__subheading">{{ movie.title }}</h4>

      <div class="card__data">
        <span class="card__icon">🌟 Média dos votos</span>
        <span> {{ decimalToPercentage(movie.vote_average) }} </span>
      </div>

      <div class="card__data">
        <span class="card__icon">👥 Total de votos</span>
        <span> {{ formatNumber(movie.vote_count) }} </span>
      </div>

      <div class="card__data">
        <span class="card__icon">🔥 Popularidade</span>
        <span> {{ movie.popularity }} </span>
      </div>

      <div class="card__data">
        <span class="card__icon">🎬 Lançamento</span>
        <span> {{ formatDate(movie.release_date) }} </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import { BASE_TMDB_IMAGE_URL } from '@/utils/tmdb.utils'
import { decimalToPercentage, formatDate, formatNumber } from '../utils/formatters.utils'

type Props = { movie: TMDBMovie }
const { movie } = defineProps<Props>()

const router = useRouter()
const route = useRoute()

function handleNavigation(movieId: number): void {
  router.push(`/movie/${movieId}`)
}
</script>

<style scoped lang="scss">
@import '../assets/styles/abstracts/variables';

.card {
  cursor: pointer;
  padding-bottom: 16px;
  min-height: 200px;
  border-radius: 8px;
  background-color: $black-secondary;
  transition: 0.3s ease;
  overflow: hidden;
  color: $text-color-primary;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }

  &__header {
    position: relative;
  }

  &__backdrop {
    position: relative;
    clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);

    &--img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__poster {
    height: 100px;
    border-radius: 8px;
    border: 1px solid $black-primary;
    overflow: hidden;

    position: absolute;
    bottom: 0px;
    right: 10px;

    &--img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &__details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    //grid-row-gap: 17.5px;
    //grid-column-gap: 20px;
    gap: 20px;
    //justify-items: center;
    padding: 5px 20px;
  }

  &__subheading {
    //font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    grid-column: 1 / -1;
  }

  &__text {
    grid-column: 1 / -1;
    font-size: 15px;
    font-style: italic;
    margin-top: -10px;
    margin-bottom: 7.5px;
  }

  &__data {
    //font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 7px;

    span:nth-child(2) {
      font-size: 15px;
    }
  }

  &__icon {
    font-weight: bold;
    font-size: 12px;
  }

  &__footer {
  }
}
</style>
