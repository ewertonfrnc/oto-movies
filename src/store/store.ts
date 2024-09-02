import { type ActionContext, createLogger, createStore } from 'vuex'
import MoviesService, { type TMDBApiResponse } from '@/services/movies.service'
import type { TMDBMovie } from '@/interfaces/movie.interfaces'

type State = {
  favorites: TMDBMovie[]
}

const debug = import.meta.env.DEV
export const store = createStore<State>({
  state() {
    return { favorites: [] }
  },
  actions: {
    async loadMovies(state: ActionContext<State, State>, page: number): Promise<TMDBApiResponse> {
      return await MoviesService.loadTopRatedMovies(page)
    },
    async loadMovie(state: ActionContext<State, State>, movieId: string): Promise<TMDBMovie> {
      return await MoviesService.loadMovieDetails(movieId)
    },
    clear({ commit }: ActionContext<State, State>) {
      commit('clearFavorites')
    },
    add({ commit }: ActionContext<State, State>, movie: TMDBMovie) {
      commit('addToFavorites', movie)
    },
    remove({ commit }: ActionContext<State, State>, movie: TMDBMovie) {
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
