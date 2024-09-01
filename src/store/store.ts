import { type ActionContext, createLogger, createStore } from 'vuex'
import MoviesService from '@/services/movies.service'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

const debug = import.meta.env.DEV
export const store = createStore({
  state() {
    return { favorites: [] }
  },
  actions: {
    async loadMovies(state: ActionContext, page: number): Promise<TMDBMovie[]> {
      const { results, total_pages } = await MoviesService.loadTopRatedMovies(page)
      return { results, total_pages }
    },
    async loadMovie(state: ActionContext, movieId: string) {
      return await MoviesService.loadMovieDetails(movieId)
    },
    clear({ commit }: ActionContext) {
      commit('clearFavorites')
    },
    add({ commit }: ActionContext, movie: TMDBMovie) {
      commit('addToFavorites', movie)
    },
    remove({ commit }: ActionContext, movie: TMDBMovie) {
      commit('removeFromFavorites', movie)
    }
  },
  mutations: {
    clearFavorites(state) {
      state.favorites = []
    },
    addToFavorites(state, movie: TMDBMovie) {
      state.favorites = [movie, ...state.favorites]
    },
    removeFromFavorites(state, movie: TMDBMovie) {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== movie.id)
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
