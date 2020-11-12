import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const Countrieslist = (props) => {
 
    

    return (
      <div className="list-group">
      <ul>
      {countries.map((country, index) => {
        return (
          <Link to={`/country/${country.cca3}`}>
          <li className="listElement" key={country.cca3}>
            <h3>{country.flag}</h3>
            <h3>{country.name.common}</h3>
          </li>
          </Link>
            
          )
      })}
      </ul>
    </div>
    )
}


export default Countrieslist;