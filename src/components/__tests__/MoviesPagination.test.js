import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

import MoviesPagination from '@/components/MoviesPagination.vue'

describe('MoviesPagination.vue', () => {
  const createWrapper = (props = {}) => {
    return mount(MoviesPagination, {
      props: {
        maxVisibleButtons: 5,
        totalPages: 10,
        currentPage: 1,
        ...props
      }
    })
  }

  test('disables the first and previous buttons on the first page', () => {
    const wrapper = createWrapper({ currentPage: 1 })

    const firstButton = wrapper.find('.pagination__item--first')
    const prevButton = wrapper.find('.pagination__item--previous')

    expect(firstButton.attributes('disabled')).toBeDefined()
    expect(prevButton.attributes('disabled')).toBeDefined()
  })

  test('disables the next and last buttons on the last page', () => {
    const wrapper = createWrapper({ currentPage: 10 })

    const nextButton = wrapper.find('.pagination__item--next')
    const lastButton = wrapper.find('.pagination__item--last')

    expect(nextButton.attributes('disabled')).toBeDefined()
    expect(lastButton.attributes('disabled')).toBeDefined()
  })

  test('emits "pagechanged" event when a page button is clicked', async () => {
    const wrapper = createWrapper({ currentPage: 2 })

    // Select first btn "1"
    const pageButton = wrapper.findAll('.pagination__item button')[2]
    await pageButton.trigger('click')

    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')[0]).toEqual([1])
  })

  test('emits "pagechanged" event when the next button is clicked', async () => {
    const wrapper = createWrapper({ currentPage: 5 })

    const nextButton = wrapper.find('.pagination__item--next')
    await nextButton.trigger('click')

    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')[0]).toEqual([6])
  })

  test('emits "pagechanged" event when the previous button is clicked', async () => {
    const wrapper = createWrapper({ currentPage: 5 })

    const prevButton = wrapper.find('.pagination__item--previous')
    await prevButton.trigger('click')

    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')[0]).toEqual([4])
  })

  test('emits "pagechanged" event when the first button is clicked', async () => {
    const wrapper = createWrapper({ currentPage: 5 })

    const firstButton = wrapper.find('.pagination__item--first')
    await firstButton.trigger('click')

    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')[0]).toEqual([1])
  })

  test('emits "pagechanged" event when the last button is clicked', async () => {
    const wrapper = createWrapper({ currentPage: 5 })

    const lastButton = wrapper.find('.pagination__item--last')
    await lastButton.trigger('click')

    expect(wrapper.emitted('pagechanged')).toBeTruthy()
    expect(wrapper.emitted('pagechanged')[0]).toEqual([10])
  })

  test('should apply active class to the current page button', () => {
    const wrapper = createWrapper({ currentPage: 3 })

    const activeButton = wrapper.find('.pagination__item button.active')
    expect(activeButton.text()).toBe('3')
  })
})
