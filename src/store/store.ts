import { createLogger, createStore } from 'vuex'

const debug = import.meta.env.DEV
export const store = createStore({
  state() {
    return { favorites: [] }
  },
  actions: {},
  mutations: {},
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
