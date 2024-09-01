<template>
  <main>
    <h1>Favoritos</h1>

    <div v-if="!favorites.length">
      <p>Não há filmes favoritados</p>
    </div>

    <div v-else>
      <button @click.prevent="clearFavorites">Limpar lista</button>

      <MoviesListing :movies="favorites" />

      <!--      <TransitionGroup name="list">-->
      <!--        <div v-for="movie in favorites" :key="movie.id">-->
      <!--          <MoviesCard :movie="movie" />-->
      <!--          <button @click.prevent="removeFavorite(movie)">Remover</button>-->
      <!--        </div>-->
      <!--      </TransitionGroup>-->
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, type ComputedRef } from 'vue'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import MoviesCard from '@/components/MoviesCard.vue'
import MoviesListing from '@/components/MoviesListing.vue'

const store = useStore()

const favorites: ComputedRef<TMDBMovie[]> = computed(() => store.state.favorites)

function clearFavorites() {
  store.dispatch('clear')
}

function removeFavorite(movie) {
  store.dispatch('remove', movie)
}
</script>
