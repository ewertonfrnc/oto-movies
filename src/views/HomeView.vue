<template>
  <main>
    <h1>HOME</h1>

    <div class="movies">
      <div v-for="movie in movies" :key="movie.id">
        <p>{{ movie.title }}</p>
        <p>{{ movie.vote_average }}</p>
        <p>{{ movie.vote_count }}</p>
        <p>{{ movie.popularity }}</p>
        <button type="button" @click="handleNavigation(movie.id)">Detalhes</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

const router = useRouter()
const store = useStore()

const movies = ref<TMDBMovie[]>([])
const totalPages = ref<number>(0)

function handleNavigation(movieId: number): void {
  router.push(`/movie/${movieId}`)
}

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
