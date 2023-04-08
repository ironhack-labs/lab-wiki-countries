import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({ countries }) {
  return (
    <div className="col-5 d-flex flex-column" style={{maxHeight: '90vh', overflow: 'scroll'}}>
      <div className="list-group">
        {countries.map((country) => (
            <Link key={country.name.common} className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}>
            <img className='mx-2' src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.alpha2Code} />
              {country.name.common}
            </Link>
          ))}    
      </div>
    </div>
  )
}

export default CountriesList