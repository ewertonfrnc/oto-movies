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
    },
    add({ commit }: ActionContext, movie: TMDBMovie) {
      const favMovie = { id: movie.id, title: movie.title }
      commit('addToFavorites', favMovie)
    },
    remove({ commit }: ActionContext, movie: TMDBMovie) {
      commit('removeFromFavorites', movie)
    }
  },
  mutations: {
    addToFavorites(state, favMovie) {
      state.favorites = [favMovie, ...state.favorites]
    },
    removeFromFavorites(state, movie) {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== movie.id)
    }
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
