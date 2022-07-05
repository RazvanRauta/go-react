export interface IMovie {
  id: number
  title?: string
  description?: string
  year?: number
  releaseDate?: string
  runtime?: number
  rating?: number
  mpaaRating?: string
  createdAt?: string
  updatedAt?: string
}

export interface IGenre {
  id: number
  genreName?: string
  createdAt?: string
  updatedAt?: string
}

export interface IMovieGenre {
  id: number
  movieID?: number
  genreID?: number
  genre?: IGenre
  createdAt?: string
  updatedAt?: string
}
