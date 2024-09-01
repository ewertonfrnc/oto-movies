<template>
  <main>
    <h1>Favoritos</h1>

    <div v-if="!favorites.length">
      <p>Não há filmes favoritados</p>
    </div>

    <div v-else>
      <button @click.prevent="clearFavorites">Limpar lista</button>

      <TransitionGroup name="list">
        <div v-for="fav in favorites" :key="fav.id">
          <p>{{ fav.title }}</p>
          <button @click.prevent="removeFavorite(fav)">Remover</button>
        </div>
      </TransitionGroup>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, type ComputedRef } from 'vue'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

const store = useStore()

const favorites: ComputedRef<TMDBMovie[]> = computed(() => store.state.favorites)

function clearFavorites() {
  store.dispatch('clear')
}

function removeFavorite(movie) {
  store.dispatch('remove', movie)
}
</script>
