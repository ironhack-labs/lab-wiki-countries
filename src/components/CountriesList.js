import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'

export default function CountriesList(props){
  let countriesArray = [...props.countries]

  return (
    <div className='list-group'>

      {countriesArray.map(country => (
        <button key={country.cca3} className='list-group-item list-group-item-action'>
          <Link to={`/${country.cca3}`}>
            {country.flag}&nbsp;&nbsp;{country.name.common}
          </Link>
        </button>
      ))}

    </div>
  )
}