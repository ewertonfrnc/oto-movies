<template>
  <div class="empty">
    <img src="../assets/img/zombie.svg" alt="" />
    <p>Não há filmes favoritados</p>

    <button class="btn" @click="router.push('/')">Página inicial</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="scss">
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  img {
    width: 200px;
  }
}
</style>
