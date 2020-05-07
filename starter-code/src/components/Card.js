import React from 'react'

const Card = ({ name, capital, area, borders }) => {
  return (
    <div>
      <h1>{name.common}</h1>
      <hr />
      <h3>Capital: {capital}</h3>
      <hr />
      <h3>Area: {area}km</h3>
      <hr />
      <h3>Borders:</h3>
      <ul>
        {borders.map((ele) => (
          <li>{ele}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card