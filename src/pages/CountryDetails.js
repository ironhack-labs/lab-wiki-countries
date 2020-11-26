import React from 'react'
import dataCountries from '../countries.json'

function CountryDetails(props) {
  const countries = [...dataCountries]
  const country = countries.filter(elm => elm.cca3 === props.match.params.cca3)[0]
  console.log(country.name.common)

  return (
    <div>
      <h1>
        {country.name.common}
      </h1>
      <hr/>
      <div className="row">
        <div className="col">
        Capital:
        </div>
        <div className="col">
        {country.capital}
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col">
        Area:
        </div>
        <div className="col">
        {country.area}
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col">
        Borders:
        </div>
        <div className="col">
        <ul>
          {country.borders.map(elm => 
            <li>{elm}</li>
          )}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails