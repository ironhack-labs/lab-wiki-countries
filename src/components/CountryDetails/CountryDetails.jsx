import React from 'react'
import { useParams } from 'react-router-dom'

function CountryDetails({ countries }) {

  const { alpha3Code } = useParams()

  return (
    <div>
      {countries.filter(country => country.alpha3Code.includes(alpha3Code)).map(country =>
        <div className="card m-3" key={country.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} className="card-img-top" alt="countryPicture" />
          <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <p className="card-text">Capital  {country.capital}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Area {country.area}</li>
            <li className="list-group-item">Borders </li>
          </ul>
        </div>
      )
      }
    </div>
  )
}

export default CountryDetails