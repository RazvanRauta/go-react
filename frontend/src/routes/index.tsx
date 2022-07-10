import React from 'react'

const Admin = React.lazy(() => import('@/components/Admin'))
const Home = React.lazy(() => import('@/components/Home'))
const Movies = React.lazy(() => import('@/components/Movies'))
const Movie = React.lazy(() => import('@/components/Movie'))
const CategoryPage = React.lazy(() => import('@/components/CategoryPage'))
const Categories = React.lazy(() => import('@/components/Categories'))

export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_ID: '/movies/:id',
  CATEGORIES: '/categories',
  CATEGORIES_DRAMA: '/categories/drama',
  CATEGORIES_COMEDY: '/categories/comedy',
  ADMIN: '/admin',
}

export const routes = [
  { path: ROUTES.HOME, element: Home },
  { path: ROUTES.MOVIES, element: Movies },
  { path: ROUTES.MOVIE_ID, element: Movie },
  { path: ROUTES.CATEGORIES, element: CategoryPage },
  { path: ROUTES.CATEGORIES_DRAMA, element: Categories, title: 'drama' },
  { path: ROUTES.CATEGORIES_COMEDY, element: Categories, title: 'comedy' },
  { path: ROUTES.ADMIN, element: Admin },
]

export const protectedRoutes = []
