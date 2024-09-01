export type TMDBGenre = {
  id: number
  name: string
}

export type TMDBCollection = {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export type TMDBProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type TMDBProductionCountry = {
  iso_3166_1: string
  name: string
}

export type TMDBSpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

export type TMDBMovie = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection?: TMDBCollection
  budget: number
  genres: TMDBGenre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: TMDBProductionCompany[]
  production_countries: TMDBProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: TMDBSpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
