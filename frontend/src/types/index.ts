export interface IMovie {
  id: number
  title?: string
  description?: string
  year?: number
  releaseDate?: string
  runtime?: number
  rating?: number
  mpaaRating?: string
  genres?: Record<string, string>
}

export interface IGenre {
  genreName?: string
}

export interface IMovieGenre {
  genre?: IGenre
}
