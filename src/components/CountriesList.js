import React from 'react'

import { Link } from 'react-router-dom'

import countries from '../countries.json';


export default function CountriesList() {
    return (
        <div className="columns">
        {countries.map(country => (
            <div key={country.cca3} className="column">
                <Link to={`/countries/${country.cca3}`}>
                    <span>{country.name.common}</span>
                </Link>
            </div>
        ))}
        </div>
    )
}
