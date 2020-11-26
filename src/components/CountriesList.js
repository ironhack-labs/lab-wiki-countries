import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';

const CountriesList = () => {
    return (
        <div className="column">
            <ul>
            {countries.map(country => <li><Link to={`/country/${country.cca3}`}>{country.name.common}</Link></li>)}
            </ul>
        </div>
    )
}

export default CountriesList
