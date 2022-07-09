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

      <ul>
        {data?.movies.map((m) => (
          <li key={m.id}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
