import React from 'react'
import countries from '../countries.json'


const CountryDetails = ({match, location, history}) => {
    const country = countries.filter(country => {
        return country.cca3 === match.params.id
    })
    console.log(country)

    return (
        <div className="column">
            <h1 className="title is-2">{country[0].name.official}</h1>
            <p> <b>Capital:</b> {country[0].capital}</p>
            <hr/>
            <p> <b>Area:</b> {country[0].area}</p>
            <hr/>
            <p> <b>Borders:</b> <li>{country[0].borders}</li></p>
            <hr/>
        </div>
    )
}

export default CountryDetails
