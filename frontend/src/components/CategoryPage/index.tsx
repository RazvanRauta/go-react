import { Link, useLocation } from 'react-router-dom'

export default function CategoryPage() {
  const { pathname } = useLocation()

  return (
    <div>
      <h2>Categories</h2>

      <ul>
        <li>
          <Link className="no-underline hover:underline" to={`${pathname}/comedy`}>
            Comedy
          </Link>
        </li>
        <li>
          <Link className="no-underline hover:underline" to={`${pathname}/drama`}>
            Drama
          </Link>
        </li>
      </ul>
    </div>
  )
}
