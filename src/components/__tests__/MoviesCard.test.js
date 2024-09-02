import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import MoviesCard from '@/components/MoviesCard.vue'

import { BASE_TMDB_IMAGE_URL } from '@/utils/tmdb.utils.ts'
import { decimalToPercentage, formatNumber } from '@/utils/formatters.utils.ts'

const movie = {
  id: 569094,
  popularity: 252.462,
  release_date: '2023-05-31',
  title: 'Homem-Aranha: Através do Aranhaverso',
  vote_average: 8.357,
  vote_count: 6714,
  backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
  poster_path: '/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg'
}

describe('MoviesCard.vue', () => {
  test('renders movies title', () => {
    const wrapper = mount(MoviesCard, {
      props: { movie },
      stubs: ['router-link']
    })

    expect(wrapper.find('h4').text()).toBe(movie.title)
  })

  test('renders movie poster and backdrop images', () => {
    const wrapper = mount(MoviesCard, {
      props: { movie }
    })

    const posterImg = wrapper.find('.card__poster--img')
    const backdropImg = wrapper.find('.card__backdrop--img')

    expect(posterImg.exists()).toBe(true)
    expect(backdropImg.exists()).toBe(true)

    expect(posterImg.attributes('src')).toContain(`${BASE_TMDB_IMAGE_URL}/${movie.poster_path}`)
    expect(backdropImg.attributes('src')).toContain(`${BASE_TMDB_IMAGE_URL}/${movie.backdrop_path}`)
  })

  test('renders movie average rating', () => {
    const wrapper = mount(MoviesCard, {
      props: { movie }
    })

    const ratingElement = wrapper.find('.card__text--average')
    expect(ratingElement.text()).toContain(decimalToPercentage(movie.vote_average))
  })

  test('renders movie vote count', () => {
    const wrapper = mount(MoviesCard, {
      props: { movie }
    })

    const voteCountElement = wrapper.find('.card__text--count')
    expect(voteCountElement.text()).toContain(formatNumber(movie.vote_count))
  })

  test('renders movie popularity', () => {
    const wrapper = mount(MoviesCard, {
      props: { movie }
    })

    const voteCountElement = wrapper.find('.card__text--popularity')
    expect(voteCountElement.text()).toContain(formatNumber(movie.popularity))
  })
})
