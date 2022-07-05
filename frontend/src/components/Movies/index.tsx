import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { IMovie } from '@/types'

export default function Movies() {
  const [movies, setMovies] = useState<IMovie[]>([])

  useMemo(
    () =>
      setMovies([
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' },
      ]),
    []
  )

  return (
    <>
      <h2>Choose a movie</h2>

      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
