<template>
  <main>
    <PageHeader label="Filmes" />

    <div v-if="!movies.length">Carregando...</div>

    <template v-else>
      <MoviesPagination
        :total-pages="totalPages"
        :current-page="currentPage"
        :max-visible-buttons="4"
        @pagechanged="onPageChange"
      />

      <MoviesListing :movies="movies" />

      <div class="btn-container">
        <button class="btn" @click="toTop">Voltar ao topo</button>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import MoviesListing from '@/components/MoviesListing.vue'
import PageHeader from '@/components/PageHeader.vue'
import MoviesPagination from '@/components/MoviesPagination.vue'

const store = useStore()

const movies = ref<TMDBMovie[]>([])
const totalPages = ref<number>(0)
const currentPage = ref<number>(1)

function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

function onPageChange(page: number): void {
  currentPage.value = page
  loadMovies(currentPage.value)
}

async function loadMovies(page: number) {
  try {
    const { results, total_pages } = await store.dispatch('loadMovies', page)
    movies.value = results
    totalPages.value = total_pages
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  loadMovies(currentPage.value)
})
</script>

<style scoped lang="scss">
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
</style>
