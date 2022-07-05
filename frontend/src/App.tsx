import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

const Admin = React.lazy(() => import('@/components/Admin'))
const Home = React.lazy(() => import('@/components/Home'))
const Movies = React.lazy(() => import('@/components/Movies'))
const Movie = React.lazy(() => import('@/components/Movie'))
const CategoryPage = React.lazy(() => import('@/components/CategoryPage'))
const Categories = React.lazy(() => import('@/components/Categories'))

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
            <Routes>
              <Route
                path="/"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Home />
                  </React.Suspense>
                }
              />
              <Route
                path="/movies"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Movies />
                  </React.Suspense>
                }
              />
              <Route
                path="/movies/:id"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Movie />
                  </React.Suspense>
                }
              />

              <Route
                path="/categories"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <CategoryPage />
                  </React.Suspense>
                }
              />
              <Route
                path="/categories/drama"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Categories title={`drama`} />
                  </React.Suspense>
                }
              />
              <Route
                path="/categories/comedy"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Categories title={`comedy`} />
                  </React.Suspense>
                }
              />
              <Route
                path="/admin"
                element={
                  <React.Suspense fallback={<>...</>}>
                    <Admin />
                  </React.Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
