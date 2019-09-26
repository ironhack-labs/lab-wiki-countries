import React from 'react'
import data from '../countries.json'

// import data from '../countries.json'


const CountryDetail = props => {
  const id = props.match.params.id;

  console.log(id)
  let singleCountry = data.find(obj => obj.cca3 === id)
  return (
    <>
      <h1>{singleCountry.name.official}</h1>
    </>
  )
}

export default CountryDetail
