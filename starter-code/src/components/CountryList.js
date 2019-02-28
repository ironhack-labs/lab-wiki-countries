import React from "react"
import { Link } from "react-router-dom"

export default function({ countries }) {
  return countries.map(c => {
    return (
      <Link
        to={`/${c.cca3}`}
        className="list-group-item list-group-item-action"
        key={c.cca3}
      >
        {c.flag}
        {c.name.common}
      </Link>
    )
  })
}
