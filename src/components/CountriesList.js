// Iteration 1.3 | CountriesList component

import React from 'react'
import { Link } from 'react-router-dom'
import countries from '../countries.json'
import 'bootstrap/dist/css/bootstrap.css'


const CountriesList = () => {
    return (
        <div className="list-group">
            {countries.map((eachCountry, idx) => {
                return (
                    <Link key={idx} to={`/countries/${eachCountry.cca3}`} className="list-group-item list-group-item-action">
                        {eachCountry.flag}
                        {eachCountry.name.common}
                    </Link>
                )
            })}
        </div>
    )
}


export default CountriesList