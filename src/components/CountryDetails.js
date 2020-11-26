import React, {useState} from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

const CountryDetails = (props) => {
    const c=[...countries]
    let cca3Props= props.match.params.cca3
    let info= c.find(({cca3}) => cca3 === cca3Props)
    console.log(info)
    // setCountries(info)
  

    return (
        <div>
        <h1> CountryDetails:</h1>
          <h1>Name:{info.name.common}</h1>
          <p>Cca3: {props.match.params.cca3} </p>
          <p>Capital:{info.capital}</p>
          <p>Area: {info.area}</p>
          {info.borders.map(border=> (
              <li key={border}>
                  <Link to={`/${border}`}>
                  {(c.find(({cca3})=>cca3 === border)).name.common}
                 </Link>
              </li>
          ))}
        </div>
    )
}
export default CountryDetails