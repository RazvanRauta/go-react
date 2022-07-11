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

  return (
    <>
      <h2>Movie {data?.movie?.title}</h2>

      <table className="mb-4 w-full max-w-full table-auto border-collapse bg-transparent">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Title:</strong>
            </td>
            <td>{data?.movie?.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Runtime:</strong>
            </td>
            <td>{data?.movie?.runtime}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
