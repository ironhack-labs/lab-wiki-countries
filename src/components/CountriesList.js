import React from 'react'
import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
    return (
        <div className="list-style">
            {countries.map(country => {
                return <li key={country.name.common}><Link to={`/countries/${country.cca3}`}  >{country.name.common} {country.flag}</Link></li>
            })}
        </div>
    )
}
