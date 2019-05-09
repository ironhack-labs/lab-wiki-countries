import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ name, flag, id }) {
  return (
    <div>
      <Link
        className="list-group-item list-group-item-action"
        to={`/card/${id}`}
      >
        🇦{flag} {name}
      </Link>
    </div>
  )
}
