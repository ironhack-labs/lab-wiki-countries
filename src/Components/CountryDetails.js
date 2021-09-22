import { computeHeadingLevel } from '@testing-library/dom'
import React from 'react'
import { Link } from 'react-router-dom'

import CountriesDetails from './../countries.json'


export default function CountryDetails(props) {

    const { cca3 } = props.match.params
    const foundCountry = CountriesDetails.find(country => country.cca3 === cca3)

    const displayBorder = () => {
        return (
            foundCountry.borders.map((borderCountries, idx) => {
                const borderName = CountriesDetails.find(e => borderCountries === e.cca3)
                return (
                    <Link to={`/country-details/${borderCountries}`}><li key={idx}>{borderName.name.common}</li></Link>
                )
            })
        )
    }

    return (
        <section className="col-6">
            {foundCountry &&
                <div >
                    <h1>{foundCountry.name.common}</h1>
                    <hr />
                    <p> Capital: {foundCountry.capital}</p>
                    <hr />
                    <p>Area: {foundCountry.area}</p>
                    <hr />
                    <div className="row">
                        <p className="col-6">Borders: </p>
                        <ul className="col-6">
                            {displayBorder()}
                        </ul>
                    </div>

                </div>
            }
        </section>

    )
}
