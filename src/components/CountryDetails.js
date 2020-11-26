import React from 'react'
import countries from '../countries.json'

const CountryDetails = (props) => {
    const country = countries.filter(country => {
        return country.cca3 === props.match.params.id
    })
    console.log(country)

    return (
        <div className="column">
            <h1 className="title is-1">{country[0].name.common}</h1>
        </div>
    )
}

export default CountryDetails
