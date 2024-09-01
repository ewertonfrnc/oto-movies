<template>
  <div class="navigator">
    <button v-show="route.name === 'details'" class="btn btn__rounded" @click="router.push('/')">
      &lsaquo;
    </button>
    <h1>{{ label }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

type Props = { label: string }
const { label } = defineProps<Props>()

const route = useRoute()
const router = useRouter()
</script>

<style scoped lang="scss">
.navigator {
  display: flex;
  align-items: center;
  gap: 14px;
}
</style>
