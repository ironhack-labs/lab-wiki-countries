import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({ countries }) {
  if (!countries) {
    return <></>
  }
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country, index) => (
          <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action d-flex flex-column justify-content-cente align-items-center" key={country.name.official} style={{ textAlign: 'center' }}>
            <img key={country.alpha2Code} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' />
            {country.name.official}</Link>
        ))}
      </div>
    </div>

  )
}

export default CountriesList