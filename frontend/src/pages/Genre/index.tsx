import { Link, useLocation, useParams } from 'react-router-dom'

import useData from '@/hooks/use-data'
import { IAllMoviesResponse } from '@/types'

export default function Genre() {
  let { id } = useParams()
  const { state } = useLocation()
  const { genreName } = state as Record<'genreName', 'string'>

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
    return (
      <div>
        No movies <strong>{genreName}</strong> genre
      </div>
    )
  }

  return (
    <>
      <h2>Genre: {genreName} </h2>

      <div className="mb-0 flex flex-col rounded border border-gray-300 pl-0">
        {movies.map((m) => (
          <Link
            key={m.id}
            className="w-fill relative -mb-px block border border-r-0 border-l-0 border-gray-300 py-3 px-6 no-underline hover:bg-gray-300 hover:underline"
            to={`/movie/${m.id}`}
          >
            {m.title}
          </Link>
        ))}
      </div>
    </>
  )
}
