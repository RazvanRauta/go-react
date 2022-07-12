import { Link, useParams } from 'react-router-dom'

import useData from '@/hooks/use-data'
import { IAllMoviesResponse } from '@/types'

export default function Genre() {
  let { id } = useParams()
  const [loading, error, data] = useData<IAllMoviesResponse>(`/v1/movies/${id}`, 'GET')

  if (loading) {
    return <div>Loading..</div>
  }

  if (error) {
    return (
      <div>
        Error: <code>{error}</code>
      </div>
    )
  }

  const movies = data?.movies

  if (!movies) {
    return <div>No movies with this Genre</div>
  }

  return (
    <>
      <h2>Choose a movie</h2>

      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <Link className="no-underline hover:underline" to={`/movie/${m.id}`}>
              {m.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
