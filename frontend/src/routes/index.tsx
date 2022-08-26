import React from 'react'

const Admin = React.lazy(() => import('@/pages/Admin'))
const Home = React.lazy(() => import('@/pages/Home'))
const Movies = React.lazy(() => import('@/pages/Movies'))
const Movie = React.lazy(() => import('@/pages/Movie'))
const Genres = React.lazy(() => import('@/pages/Genres'))
const Genre = React.lazy(() => import('@/pages/Genre'))
const EditMovie = React.lazy(() => import('@/pages/EditMovie'))

export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_ID: '/movie/:id',
  GENRES: '/genres',
  GENRES_ID: '/genre/:id',
  ADMIN: '/admin',
  ADD_MOVIE: '/admin/add',
}

export const routes = [
  { path: ROUTES.HOME, element: Home },
  { path: ROUTES.MOVIES, element: Movies },
  { path: ROUTES.MOVIE_ID, element: Movie },
  { path: ROUTES.GENRES, element: Genres },
  { path: ROUTES.GENRES_ID, element: Genre },
  { path: ROUTES.ADMIN, element: Admin },
  { path: ROUTES.ADD_MOVIE, element: EditMovie },
]

export const protectedRoutes = []
