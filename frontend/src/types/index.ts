export interface IMovie {
  id: number
  title?: string
  description?: string
  year?: number
  releaseDate?: string
  runtime?: number
  rating?: number
  mpaaRating?: string
  genres?: Record<string, string> | string[]
}

export interface IGenre {
  genreName?: string
  id: number
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

export interface IAllGenresResponse {
  genres?: IGenre[]
}
