<template>
  <main>
    <PageHeader label="Filmes" />

    <div v-if="!movies.length">Carregando...</div>

    <MoviesListing v-else :movies="movies" />
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import MoviesListing from '@/components/MoviesListing.vue'
import PageHeader from '@/components/PageHeader.vue'

const store = useStore()

const movies = ref<TMDBMovie[]>([])
const totalPages = ref<number>(0)

async function loadMovies() {
  try {
    const { results, total_pages } = await store.dispatch('loadMovies')
    movies.value = results
    totalPages.value = total_pages
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  loadMovies()
})
</script>
