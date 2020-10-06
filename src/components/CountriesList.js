import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom';


export default function CountriesList() {
    return (
        <div class="list-style">
            {countries.map(country => {
                return <li><Link to={country.cca3} activeClassName="selected" >{country.name.common} {country.flag}</Link></li>
            })}

        </div>
    )
}
