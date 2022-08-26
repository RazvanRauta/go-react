import { Link } from 'react-router-dom'

import useData from '@/hooks/use-data'
import { IAllMoviesResponse } from '@/types'

export default function Movies() {
  const [loading, error, data] = useData<IAllMoviesResponse>(`/v1/movies`, 'GET')

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

  return (
    <>
      <h2>Choose a movie</h2>

      <div className="mb-0 flex flex-col rounded border border-gray-300 pl-0">
        {data?.movies.map((m) => (
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
