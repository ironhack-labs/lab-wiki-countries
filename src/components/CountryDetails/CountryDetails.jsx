import React from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails({ country }) {
  
  const { alpha3Code } = useParams()
  console.log(alpha3Code)

  return (
    <div>
      <div className="card">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha3Code}.png`} className="card-img-top" alt="countryPicture" />
        <div className="card-body">
          <h5 className="card-title">{country.name}</h5>
          <p className="card-text">Capital  {country.capital}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Area {country.area}</li>
          <li className="list-group-item">Borders {country.borders}</li>
        </ul>
      </div>
    </div>
  )
}

export default CountryDetails