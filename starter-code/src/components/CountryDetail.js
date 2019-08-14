import React from 'react';

import countries from '../countries.json'

const CountryDetail = props => {

  const getCountry = (cca3) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3
    }
    return countries.find(theCountry)
  }

  const foundCountry = getCountry(props.match.params.cca3)
  const borders = foundCountry.borders


  const getCapital = (code) => {
      const theCapital = oneCapital => {
        return oneCapital.cca3 === code
        // return oneCapital.name.common
   
      }
      return countries.find(theCapital)
  }

    return (
      <div className="col-5">

          <h2>{foundCountry.name.common}</h2>
          <hr></hr>
          <div className="flex">
            <p>Capital</p>
            <p>{foundCountry.capital}</p>
          </div>  
            <hr></hr>
          <div className="flex">  
            <p>Area</p>
            <p>{foundCountry.area} km2</p>
          </div>  
            <hr></hr>
          <div className="flex">  
            <p>Borders</p>

            <ul>
              {
                borders.map((code, idx) => {
                  return (                  
                    <li key={idx}>{getCapital(code).name.common}</li>
                  )
                })
              }
            </ul>
          </div>      
      </div>
    )
  
}

export default CountryDetail