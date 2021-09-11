import countries from '../../countries.json';
import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default function CountriesList({ countries })  {

    return(
      <div className='CountriesList'>
        <ul>
        {countries.map((country) => (
          <li className='list' key={country.name.common}>
            <Link to={`/countries/${country.cca3}`} className='list-list'>
              <p>{country.name.common}</p>
            </Link>
          </li>
        ))}
        </ul>
      </div>
      
    )
  
}

