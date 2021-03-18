import React from 'react'
import countriesJSON from '../countries.json'

const CountryDetails = (props) => {
    const countryID = props.match.params.cca3
    const foundCountry = countriesJSON.find((country) => country.cca3 === countryID)

        return (
            <div className="countryDiv">

                <h1>{foundCountry.name.common}</h1>
                <hr/>
                <div className="countryRow">
                <p>Capital</p> <p>{foundCountry.capital}</p>
                </div>
                <hr/>
                <div className="countryRow">
                <p>Area</p> <p>{foundCountry.area} km2</p>
                </div>
                <hr/>
                <div className="countryRow">
                <p>Borders</p>
                <div>

                {foundCountry.borders.map((country) => {
                    return (
                            <p key={country}>{country}</p>
                    )
                })}

                </div>
                </div>

            </div>
        )
}

export default CountryDetails
