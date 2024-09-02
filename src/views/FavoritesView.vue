<template>
  <main>
    <PageHeader label="Favoritos" />

    <FavoritesEmpty v-if="!favorites.length" />

    <div v-else>
      <div class="btn-container">
        <button class="btn" @click.prevent="clearFavorites">Limpar lista</button>
      </div>

      <MoviesListing :movies="favorites" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, type ComputedRef } from 'vue'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import MoviesListing from '@/components/MoviesListing.vue'
import PageHeader from '@/components/PageHeader.vue'
import FavoritesEmpty from '@/components/FavoritesEmpty.vue'

const store = useStore()

const favorites: ComputedRef<TMDBMovie[]> = computed(() => store.state.favorites)

function clearFavorites() {
  store.dispatch('clear')
}
</script>

<style scoped lang="scss">
.btn-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
}
</style>
