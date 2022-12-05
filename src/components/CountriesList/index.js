import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const CountriesList = ({countries}) => {
  return (
    <div className='col-5 overflow-auto list' >
      {countries.map(({alpha3Code, alpha2Code, name, _id}) => {
        return (
          <div className='card countries' key={_id} >
            <Link to={`/${alpha3Code}`} >
              <img 
              src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`} 
              alt={`${name.common} flag`} 
              />
              <p>{name.common}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default CountriesList