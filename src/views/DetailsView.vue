<template>
  <main>
    <PageHeader label="Detalhes" />

    <div v-if="!movie">Carregando...</div>

    <div v-else>
      <div class="btn-container">
        <button class="btn" @click.prevent="handleFavoriteStatus(movie)">
          {{ isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos' }}
        </button>
      </div>

      <DetailsContent :movie="movie" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'
import PageHeader from '@/components/PageHeader.vue'
import DetailsContent from '@/components/DetailsContent.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()
const isFav = ref(false)

const favorites = computed(() => store.state.favorites)

const movie = ref<TMDBMovie>(null)

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

<style scoped lang="scss">
.btn-container {
  display: flex;
  justify-content: flex-end;
}
</style>
