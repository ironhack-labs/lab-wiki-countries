import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'

const CountriesList = () => {
    return (
        <div>
            
            <ul>
            {countries.map(country => <li><Link to={`/country/${country.cca3}`}>{country.name.common}</Link></li>)}
            </ul>
        </div>
    )
}

export default CountriesList
