import React from 'react'
import countriesJSON from '../countries.json'
import { Link } from "react-router-dom"

const CountriesList = () => {
        return (
            <div>
            <ul>
                {countriesJSON.map((country) => {
                    return (
                        <div key={country.cca3}>
                        <Link to={`/countries/${country.cca3}`}>
                        <li>
                            <p><img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt=""/> {country.name.common}</p>
                        </li>
                        </Link>
                        </div>
                    )
                })}
            </ul>
          </div>
        )
}

export default CountriesList
