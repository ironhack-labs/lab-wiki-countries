// Iteration 1.4 | CountryDetails component

import React from 'react'
import countries from '../countries.json'


const CountryDetails = (props) => {

    const country = countries.find((elm) => elm.cca3 === props.match.params.cca3)

    return (
        <>
            <h1>{country.name.common}</h1>
            <hr />
            <div className="container">
                <div className="row justify-content-between">
                    <h6>Capital</h6>
                    <p>{country.capital}</p>
                </div>
                <hr />
                <div className="row justify-content-between">
                    <h6>Area</h6>
                    <p>{country.area} km^2</p>
                </div>
                <hr />
                <div className="row justify-content-between">
                    <h6>Borders</h6>

                    <ul>
                        {country.borders.map((element, idx) => {

                            const borderCountry = countries.find((elm) => elm.cca3 === element)

                            return (
                                <li key={idx}>{borderCountry.name.common}</li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default CountryDetails
