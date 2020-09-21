import React from 'react'
import {Link} from 'react-router-dom'
import countries from '../countries.json'

const CountriesList = () => {
    return (
        <div>
            {countries.map((country, index) => {
                return (
                    <div key={index}>
                        <h2><Link to={country.cca3}>{country.name.common}</Link></h2>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList
