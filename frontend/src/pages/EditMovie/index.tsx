import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import useData from '@/hooks/use-data'
import { IMovie, IMovieResponse } from '@/types'

export default function EditMovie() {
  // let { id } = useParams()
  // const [loading, error, data] = useData<IMovieResponse>(`/v1/movie/${id}`, 'GET')
  const [inputs, setInputs] = useState<IMovie>({
    id: 0,
    description: '',
    mpaaRating: '',
    rating: 0,
    releaseDate: '',
    runtime: 0,
  })

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   return (
  //     <div>
  //       Error: <code>{error}</code>
  //     </div>
  //   )
  // }

  // const movie = data?.movie

  // if (!movie) {
  //   return (
  //     <div>
  //       Error: <code>No movie was found</code>
  //     </div>
  //   )
  // }

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault()

    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      title: { value: string }
      password: { value: string }
    }
    console.log(target.title.value, inputs)
  }

  return (
    <div>
      <h2>Add/Edit Movie</h2>
      <hr />

      <form method="post" onSubmit={handleSubmit}>
        <div className="my-8 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="hidden"
              id="id"
              name="id"
              value={inputs.id}
              onChange={handleChange}
            />
            <label className="block">
              <span className="font-semibold text-gray-700">Title</span>
              <input
                type="text"
                className="form-input mt-1 block w-full"
                placeholder="Insert Title"
                id="title"
                name="title"
                value={inputs.title}
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">Release Date</span>
              <input
                type="date"
                className="form-input mt-1 block w-full"
                placeholder="Add release date"
                id="releaseDate"
                name="releaseDate"
                value={inputs.releaseDate}
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">Runtime</span>
              <input
                type="number"
                className="form-input mt-1 block w-full"
                placeholder="Add runtime"
                id="runtime"
                name="runtime"
                value={inputs.runtime}
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">Rating</span>
              <input
                type="number"
                className="form-input mt-1 block w-full"
                placeholder="Add rating"
                id="rating"
                name="rating"
                value={inputs.rating}
                onChange={handleChange}
              />
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">MPAA Rating</span>
              <select
                className="form-select mt-1 block w-full"
                value={inputs.mpaaRating}
                onChange={handleChange}
                name="mpaaRating"
              >
                <option>Choose...</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG13">PG13</option>
                <option value="R">R</option>
                <option value="NC17">NC17</option>
              </select>
            </label>
            <label className="block">
              <span className="font-semibold text-gray-700">Description</span>
              <textarea
                className="form-textarea mt-1 block w-full"
                placeholder="Add Description"
                id="description"
                name="description"
                rows={3}
                value={inputs.description}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <hr className="w-full border-t-2" />
        <button className="pointer-events-auto mt-8 rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500">
          Save
        </button>
      </form>
    </div>
  )
}
