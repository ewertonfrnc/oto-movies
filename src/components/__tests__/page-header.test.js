import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useRoute } from 'vue-router'

import PageHeader from '@/components/PageHeader.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: vi.fn()
  }))
}))

describe('PageHeader.vue', () => {
  test('render label', () => {
    useRoute.mockImplementationOnce(() => ({
      name: 'favorites'
    }))

    const label = 'Favoritos'
    const wrapper = mount(PageHeader, { props: { label } })

    expect(wrapper.find('h1').text()).toBe(label)
  })
})
