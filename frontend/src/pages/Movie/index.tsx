import { useParams } from 'react-router-dom'

import useData from '@/hooks/use-data'
import { IMovieResponse } from '@/types'

export default function Movie() {
  let { id } = useParams()
  const [loading, error, data] = useData<IMovieResponse>(`/v1/movie/${id}`, 'GET')

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        Error: <code>{error}</code>
      </div>
    )
  }

  const movie = data?.movie

  if (!movie) {
    return (
      <div>
        Error: <code>No movie was found</code>
      </div>
    )
  }
  if (movie.genres) {
    movie.genres = Object.values(movie.genres)
  } else {
    movie.genres = []
  }
  return (
    <>
      <h2>
        Movie {movie?.title} ({movie?.year})
      </h2>

      <div className="float-left mt-1">
        <small>Rating: {movie.mpaaRating}</small>
      </div>

      <div className="float-right mt-1">
        {movie.genres.map((m) => (
          <span
            key={m}
            className="mr-1 inline-block rounded bg-gray-600 p-1 text-center align-baseline text-sm font-semibold leading-none"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="clearfix"></div>

      <hr className="my-2 w-full border-t-2" />

      <table className="mb-4 w-full max-w-full table-auto border-collapse bg-transparent">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Title:</strong>
            </td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Description:</strong>
            </td>
            <td>{movie.description}</td>
          </tr>
          <tr>
            <td>
              <strong>Runtime:</strong>
            </td>
            <td>{movie.runtime}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
