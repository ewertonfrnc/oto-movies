import api from '@/services/api.service'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

export type TMDBApiResponse = {
  page: number
  results: TMDBMovie[]
  total_results: number
  total_pages: number
}

class MoviesService {
  async loadTopRatedMovies(page: number): Promise<TMDBApiResponse> {
    const { data } = await api().get('/movie/top_rated', {
      params: { language: 'pt-BR', page }
    })

    return data
  }

  async loadMovieDetails(id: string): Promise<TMDBMovie> {
    const { data } = await api().get(`/movie/${id}`, {
      params: { language: 'pt-BR' }
    })

    return data
  }
}

export default new MoviesService()
