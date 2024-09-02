<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const favorites = computed(() => store.state.favorites)
</script>

<template>
  <header class="header">
    <RouterLink to="/">Filmes</RouterLink>
    <RouterLink to="/favorites" class="header__link">
      <span>Favoritos</span>
      <Transition name="fade">
        <span v-if="favorites.length" class="badge">{{ favorites.length }}</span>
      </Transition>
    </RouterLink>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
@import 'assets/styles/abstracts/variables';

.header {
  &__link {
    position: relative;
  }
}

.badge {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  padding: 10px;
  background-color: $pink-primary;
  font-size: 12px;
  display: grid;
  place-content: center;

  position: absolute;
  top: 0;
  right: -10px;
}
</style>
