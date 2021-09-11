import countries from '../../countries.json';
import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';

export default class CountriesList extends React.Component {

  render() {
    return(
      <ul>
        <li>
          <Link to={`/countries/${countries.cca3}`}>
            {countries.map((country) => (
              <div key={country.name.common} {...country}>
                <h4>{country.name.common}</h4>
              </div>
            ))}
          </Link>
        </li>
      </ul>
      
    )
  }
}

