import { type ActionContext, createLogger, createStore } from 'vuex'
import MoviesService from '@/services/movies.service'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

const debug = import.meta.env.DEV
export const store = createStore({
  state() {
    return { favorites: [] }
  },
  actions: {
    async loadMovies(): Promise<TMDBMovie[]> {
      const { results, total_pages } = await MoviesService.loadTopRatedMovies()
      return { results, total_pages }
    },
    async loadMovie(state: ActionContext, movieId: string) {
      return await MoviesService.loadMovieDetails(movieId)
    }
  },
  mutations: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
