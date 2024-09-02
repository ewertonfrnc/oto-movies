import { describe, test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import MoviesListing from '@/components/MoviesListing.vue'
import MoviesCard from '@/components/MoviesCard.vue'

vi.mock('@/components/MoviesCard.vue', () => ({
  default: { render: () => {} }
}))

describe('MovieListing.vue', () => {
  test('should render movies based on props', () => {
    const movies = [
      {
        id: 569094,
        popularity: 252.462,
        release_date: '2023-05-31',
        title: 'Homem-Aranha: Através do Aranhaverso',
        vote_average: 8.357,
        vote_count: 6714
      },
      {
        id: 157336,
        popularity: 207.271,
        release_date: '2014-11-05',
        title: 'Interestelar',
        vote_average: 8.44,
        vote_count: 35071
      }
    ]
    const wrapper = mount(MoviesListing, {
      props: { movies },
      global: { stubs: ['router-link'] }
    })

    expect(wrapper.findAllComponents(MoviesCard)).toHaveLength(movies.length)
  })
})
