import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'
import { BASE_TMDB_IMAGE_URL } from '@/utils/tmdb.utils.ts'
import { formatCurrency, formatDate } from '@/utils/formatters.utils'

import DetailsContent from '@/components/DetailsContent.vue'

const mockMovie = {
  id: 569094,
  title: 'Homem-Aranha: Através do Aranhaverso',
  tagline: 'É como você usa a máscara que importa.',
  popularity: 252.462,
  release_date: '2023-05-31',
  vote_average: 8.357,
  vote_count: 6714,
  backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
  poster_path: '/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg',
  overview:
    'Miles Morales retorna para o próximo capítulo da saga do Aranhaverso, uma aventura épica que transportará o Homem-Aranha em tempo integral e amigável do bairro do Brooklyn através do Multiverso para unir forças com Gwen Stacy e uma nova equipe de Homens-Aranha para enfrentar com um vilão mais poderoso do que qualquer coisa que eles já encontraram.',
  genres: [
    { id: 16, name: 'Animação' },
    { id: 28, name: 'Ação' },
    { id: 12, name: 'Aventura' },
    { id: 878, name: 'Ficção científica' }
  ]
}

describe('DetailsContent.vue', () => {
  test('should render the movie title and tagline', () => {
    const wrapper = mount(DetailsContent, {
      props: { movie: mockMovie }
    })

    const title = wrapper.find('.details__title h2')
    const tagline = wrapper.find('.details__title small')

    expect(title.text()).toBe(mockMovie.title)
    expect(tagline.text()).toBe(mockMovie.tagline)
  })

  test('should render the correct movie poster', () => {
    const wrapper = mount(DetailsContent, {
      props: { movie: mockMovie }
    })

    const img = wrapper.find('.details__poster')
    expect(img.attributes('src')).toBe(`${BASE_TMDB_IMAGE_URL}/${mockMovie.poster_path}`)
    expect(img.attributes('alt')).toBe(`Poster do filme ${mockMovie.title}`)
  })

  test('should correctly format and display genres', () => {
    const wrapper = mount(DetailsContent, {
      props: { movie: mockMovie }
    })

    const genres = wrapper.find('.details__data--genres')
    expect(genres.text()).toBe(mockMovie.genres.map((genre) => genre.name).join(', '))
  })

  test('should display "N/A" for genres if genres are not provided', () => {
    const wrapper = mount(DetailsContent, {
      props: { movie: { ...mockMovie, genres: [] } }
    })

    const genres = wrapper.find('.details__data--genres')
    expect(genres.text()).toBe('N/A')
  })

  test('should correctly format and display the release date', () => {
    const wrapper = mount(DetailsContent, {
      props: { movie: mockMovie }
    })

    const releaseDate = wrapper.find('.details__data--release')
    expect(releaseDate.text()).toBe(formatDate(mockMovie.release_date))
  })

  test('should correctly format and display the revenue', () => {
    const wrapper = mount(DetailsContent, {
      props: { movie: mockMovie }
    })

    const revenue = wrapper.find('.details__data--revenue')
    expect(revenue.text()).toBe(formatCurrency(mockMovie.revenue))
  })

  test('should render the movie overview', () => {
    const wrapper = mount(DetailsContent, {
      props: { movie: mockMovie }
    })

    const overview = wrapper.find('.details__additional p')
    expect(overview.text()).toBe(mockMovie.overview)
  })
})
