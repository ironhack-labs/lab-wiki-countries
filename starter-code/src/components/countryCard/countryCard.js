import React from 'react'
import './countryCard.css'

const CountryCard = ({name, flag}) => {
  return (
    <article>
      <p>{flag}</p>
      <p>{name}</p>
    </article>
  )
}

export default CountryCard
