import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IMovie } from '@/types'

export default function Movie() {
  let { id } = useParams()
  const [movie, setMovie] = useState<IMovie | null>(null)

  useMemo(() => setMovie({ id: Number(id), title: `Movie ${id}`, runtime: 150 }), [id])

  return (
    <>
      <h2>Movie {movie?.title}</h2>

      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Title:</strong>
            </td>
            <td>{movie?.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Runtime:</strong>
            </td>
            <td>{movie?.runtime}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
