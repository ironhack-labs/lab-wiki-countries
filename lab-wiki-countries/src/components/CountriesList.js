import React from 'react';
import { Link } from 'react-router-dom';
import countries from './countries.json';
import './CountriesList.css'

const CountriesList = () => {
  return (

    <div className="col-5" style={{}} >
        <div>
            <ul>
                {countries.map((country, idx) => (
                    <li className="list" key={idx}>
                        <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default CountriesList