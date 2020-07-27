import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const CountriesList = props => {

    const listCountries = props.data.map(country => {
        const borders = props.data.filter(filteringCountry => country.borders.indexOf(filteringCountry.alpha3Code) !== -1)
        return (
            <div key={country.name}>
                <Link to={{pathname: `/country/${country.alpha3Code}`, state: {country: country, borders: borders, countries: props.data} }} >{country.name}</Link>
            </div>
        )
    })

    return (
        <div style={{height:"100vh",overflowY:"scroll"}}>
            <h1>Listado de paises</h1>
            {listCountries}
        </div>
    )
}

export default CountriesList