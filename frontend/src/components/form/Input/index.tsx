import React from 'react'

type Props = {}

export default function Input({}: Props) {
  return (
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
  )
}
