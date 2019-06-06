import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';



//no lo entiendo
const countryDetails = (props) => {

  const getCountry = (id) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    }
    return countries.find(theCountry)
  };



  const foundCountry = getCountry(props.match.params.id)


  const borderCountry = foundCountry.borders.map(elm => {
    return getCountry(elm)
  })


  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <h3>Capital <span>{foundCountry.capital}</span></h3>
      <hr></hr>
      <h3>Area</h3><h3>{foundCountry.area}</h3>
      <h3>Borders</h3>
      <ul>
        {borderCountry.map((eachBorder) => {
          return <li><Link to={`/country/${eachBorder}`} key={eachBorder}>{eachBorder.name.common}</Link></li>
        })}
      </ul>




      <Link to='/'>Back</Link>
    </div >
  )
}

export default countryDetails;