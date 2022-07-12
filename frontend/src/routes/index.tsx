import React from 'react'

const Admin = React.lazy(() => import('@/components/Admin'))
const Home = React.lazy(() => import('@/components/Home'))
const Movies = React.lazy(() => import('@/components/Movies'))
const Movie = React.lazy(() => import('@/components/Movie'))
const Genres = React.lazy(() => import('@/components/Genres'))
const Genre = React.lazy(() => import('@/components/Genre'))

export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_ID: '/movie/:id',
  GENRES: '/genres',
  GENRES_ID: '/genre/:id',
  ADMIN: '/admin',
}

export const routes = [
  { path: ROUTES.HOME, element: Home },
  { path: ROUTES.MOVIES, element: Movies },
  { path: ROUTES.MOVIE_ID, element: Movie },
  { path: ROUTES.GENRES, element: Genres },
  { path: ROUTES.GENRES_ID, element: Genre },
  { path: ROUTES.ADMIN, element: Admin },
]

export const protectedRoutes = []
