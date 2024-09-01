<template>
  <main>
    <h1>HOME</h1>

    <div class="movies">
      <MoviesCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import MoviesCard from '@/components/MoviesCard.vue'

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
