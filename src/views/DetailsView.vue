<template>
  <main>
    <div>
      <button @click="back">Voltar</button>
      <h1>Detalhes</h1>
    </div>

    <div v-if="!movie">Carregando...</div>

    <div v-else>
      <p>{{ movie.title }}</p>
      <p>{{ movie.tagline }}</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

const store = useStore()
const route = useRoute()
const router = useRouter()

const movie = ref<TMDBMovie>(null)

function back() {
  router.push('/')
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
