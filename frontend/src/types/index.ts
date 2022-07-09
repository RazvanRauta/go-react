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

export interface IAllMoviesResponse {
  movies: IMovie[]
}

export interface IMovieResponse {
  movie: IMovie
}

export interface IErrorResponse {
  error: { message?: string }
}
