<template>
  <main>
    <div>
      <button @click="back">Voltar</button>
      <h1>Detalhes</h1>
    </div>

    <div v-if="!movie">Carregando...</div>

    <div v-else>
      <button @click.prevent="handleFavoriteStatus(movie)">
        {{ isFav ? 'Remover' : 'Favoritar' }}
      </button>

      <hr />

      <p>title: {{ movie.title }}</p>
      <p>tagline: {{ movie.tagline }}</p>
      <p>overview: {{ movie.overview }}</p>
      <p>release_date: {{ movie.release_date }}</p>
      <p>genre_ids: {{ movie.genres }}</p>
      <p>budget: {{ movie.budget }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

const store = useStore()
const route = useRoute()
const router = useRouter()
const isFav = ref(false)

const favorites = computed(() => store.state.favorites)

const movie = ref<TMDBMovie>(null)

function back() {
  router.push('/')
}

watch([favorites, movie], () => {
  if (movie.value) {
    const idx = favorites.value.findIndex((fav) => fav.id === movie.value.id)
    isFav.value = idx >= 0
  }
})

function handleFavoriteStatus(movie): void {
  if (isFav.value) {
    store.dispatch('remove', movie)
  } else {
    store.dispatch('add', movie)
  }
}

async function loadMovie() {
  try {
    movie.value = await store.dispatch('loadMovie', route.params.movieId)
  } catch (e) {
    console.log('err', e)
  }
}

onMounted(() => {
  loadMovie()
})
</script>
