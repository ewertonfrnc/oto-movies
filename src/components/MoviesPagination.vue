<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">&laquo;</button>
    </li>

    <li class="pagination__item">
      <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">&lsaquo;</button>
    </li>

    <li v-for="page in pages" :key="page.name" class="pagination__item">
      <button
        type="button"
        :disabled="page.isDisabled"
        @click="onClickPage(page.name)"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <li class="pagination__item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">&rsaquo;</button>
    </li>

    <li class="pagination__item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">&raquo;</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

type Props = {
  maxVisibleButtons?: number
  totalPages: number
  currentPage: number
}

const props = defineProps<Props>()
const { maxVisibleButtons, totalPages, currentPage } = toRefs(props)

const emit = defineEmits<{ (e: 'pagechanged', page: number): void }>()

const startPage = computed(() => {
  if (totalPages.value <= (maxVisibleButtons.value ?? 3)) {
    return 1
  }

  if (currentPage.value <= Math.floor((maxVisibleButtons.value ?? 3) / 2)) {
    return 1
  }

  if (currentPage.value >= totalPages.value - Math.floor((maxVisibleButtons.value ?? 3) / 2)) {
    return totalPages.value - (maxVisibleButtons.value ?? 3) + 1
  }

  return currentPage.value - Math.floor((maxVisibleButtons.value ?? 3) / 2)
})

const pages = computed(() => {
  const visiblePages = Array.from(
    { length: Math.min(maxVisibleButtons.value ?? 3, totalPages.value - startPage.value + 1) },
    (_, index) => startPage.value + index
  )

  return visiblePages.map((page) => ({
    name: page,
    isDisabled: page === currentPage.value
  }))
})

const isInFirstPage = computed(() => currentPage.value === 1)
const isInLastPage = computed(() => currentPage.value === totalPages.value)

function onClickFirstPage(): void {
  emitPageChange(1)
}

function onClickPreviousPage(): void {
  emitPageChange(currentPage.value - 1)
}

function onClickPage(page: number): void {
  emitPageChange(page)
}

function onClickNextPage(): void {
  emitPageChange(currentPage.value + 1)
}

function onClickLastPage(): void {
  emitPageChange(totalPages.value)
}

function isPageActive(page: number): boolean {
  return currentPage.value === page
}

function emitPageChange(page: number): void {
  emit('pagechanged', page)
}
</script>

<style scoped lang="scss">
@import 'src/assets/styles/abstracts/variables';

.pagination {
  list-style: none;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  gap: 1rem;

  &__item {
    display: inline-block;

    button {
      cursor: pointer;
      height: 40px;
      width: 40px;
      border: none;
      border-radius: 50%;
      font-family: inherit;
      transition: 0.3s ease;
      font-size: inherit;

      &:not(:disabled) {
        background-color: $black-secondary;
        color: inherit;
      }

      &:not(:disabled):hover {
        background-color: $pink-primary;
      }

      &:disabled {
        border: none;
      }
    }
  }
}

.active {
  background-color: $pink-primary;
}
</style>
