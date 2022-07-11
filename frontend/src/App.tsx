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
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>

        <div className="flex flex-wrap">
          <div className="pr-4 pl-4 md:w-1/5">
            <nav>
              <ul className="mb-0 flex flex-col rounded border border-gray-300 pl-0">
                <li className="relative -mb-px block border border-r-0 border-l-0 border-gray-300 py-3 px-6 no-underline">
                  <Link className="no-underline hover:underline" to="/">
                    Home
                  </Link>
                </li>
                <li className="relative -mb-px block border border-r-0 border-l-0 border-gray-300 py-3 px-6 no-underline">
                  <Link className="no-underline hover:underline" to="/categories">
                    Categories
                  </Link>
                </li>
                <li className="relative -mb-px block border border-r-0 border-l-0 border-gray-300 py-3 px-6 no-underline">
                  <Link className="no-underline hover:underline" to="/movies">
                    Movies
                  </Link>
                </li>
                <li className="relative -mb-px block border border-r-0 border-l-0 border-gray-300 py-3 px-6 no-underline">
                  <Link className="no-underline hover:underline" to="/admin">
                    Manage Catalogue
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="pr-4 pl-4 md:w-4/5">
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
