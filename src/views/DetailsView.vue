<template>
  <main>
    <h1>Detalhes</h1>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute()
const movie = ref(null)

function loadMovie() {}

onMounted(() => {
  loadMovie()
})
</script>
