import { Link } from 'react-router-dom'

import useData from '@/hooks/use-data'
import { IAllGenresResponse } from '@/types'

export default function Genres() {
  const [loading, error, data] = useData<IAllGenresResponse>(`/v1/genres`, 'GET')

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

  const genres = data?.genres
  return (
    <div>
      <h2>Genres</h2>

      <ul>
        {genres &&
          genres.map((gen) => (
            <li key={gen.id}>
              <Link to={`/genre/${gen.id}`} state={{ genreName: gen.genreName }}>
                {gen.genreName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
