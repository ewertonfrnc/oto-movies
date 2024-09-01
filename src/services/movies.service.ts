// movies.service.ts
import api from '@/services/api.service'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

type TMDBApiResponse = {
  page: number
  results: TMDBMovie[]
  total_results: number
  total_pages: number
}

class MoviesService {
  async loadTopRatedMovies(): Promise<TMDBApiResponse> {
    const { data } = await api().get('/movie/top_rated', {
      params: { language: 'pt-BR' }
    })

    return data
  }
}

export default new MoviesService()
