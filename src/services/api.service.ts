import axios from 'axios'

const { VITE_TMDB_BASE_URL, VITE_TMDB_TOKEN } = import.meta.env

export default function api() {
  return axios.create({
    baseURL: VITE_TMDB_BASE_URL,
    headers: {
      Authorization: `Bearer ${VITE_TMDB_TOKEN}`
    }
  })
}
