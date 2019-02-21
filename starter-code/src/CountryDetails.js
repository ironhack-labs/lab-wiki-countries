import React from 'react';

import Countries from './countries.json'

const CountryDetails = (props) => {
console.log(props)
  // this gets at the ID that is in the browser bar at /projects/:ID
  const id = props.match.params.id;
  // this finds the project from your hardcoded data using that id
  const foundCountry = Countries.find((p) => p.cca3 === id)
 

  return (
    <div>
      <h2>{foundCountry.name.common}</h2>
      <h3>Capital: {foundCountry.capital}</h3>
      <p>Area: {foundCountry.area}</p>
      <p>Flag: {foundCountry.flag}</p>
    </div>
  )
}



export default CountryDetails