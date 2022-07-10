import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

import { routes } from '@/routes'

const NotFound = React.lazy(() => import('@/components/NotFound'))

const routeComponents = [
  ...routes.map(({ path, element, title }, key) => {
    const Element = element as React.FC<{ title?: string }>
    return <Route path={path} element={<Element title={title} />} key={key} />
  }),
  // ...protectedRoutes.map(({ path, element }, key) => (
  //   <ProtectedRoute key={key} path={path} element={element} />
  // )),
  <Route path="*" element={<NotFound />} key={'404-page'} />,
]

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/categories">Categories</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-10">
            <React.Suspense fallback={<>Loading...</>}>
              <Routes>{routeComponents}</Routes>
            </React.Suspense>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
