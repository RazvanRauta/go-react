import useData from '@/hooks/use-data'
import { IAllGenresResponse } from '@/types'

export default function Genres() {
  const [loading, error] = useData<IAllGenresResponse>(`/v1/genres`, 'GET')

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
    <div>
      <h2>Genres</h2>
    </div>
  )
}
