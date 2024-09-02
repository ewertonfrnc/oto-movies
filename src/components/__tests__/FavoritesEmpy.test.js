import { mount } from '@vue/test-utils'
import { describe, test, expect, vi } from 'vitest'

import FavoritesEmpty from '@/components/FavoritesEmpty.vue'

const pushMock = vi.fn()
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: pushMock
  })
}))

describe('EmptyState.vue', () => {
  test('renders the correct content', () => {
    const wrapper = mount(FavoritesEmpty)

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/src/assets/img/zombie.svg')

    const message = wrapper.find('p')
    expect(message.text()).toBe('Não há filmes favoritados')

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Página inicial')
  })

  test('navigates to the home page on button click', async () => {
    const wrapper = mount(FavoritesEmpty)

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(pushMock).toHaveBeenCalledTimes(1)
    expect(pushMock).toHaveBeenCalledWith('/')
  })
})
