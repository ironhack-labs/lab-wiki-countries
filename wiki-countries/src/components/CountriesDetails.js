import React from "react"
import countries from './countries.json'
import { Link } from "react-router-dom"

const CountriesDetails = (props) => {

    const params = props.match.params.cca3
    const country = countries.find(elm => elm.cca3 === params)

    return (
        <div className='col-5'>
            <h1>{country.name.common}</h1>
            <h3>Capital</h3>
            <p>{country.capital}</p>
            <hr />
            <h3>Area</h3>
            <p>{country.area}</p>
            <hr />
            <h3>Borders</h3>
            {country.borders.map((borderCountry, index) => {
                const border = countries.find(elm => elm.cca3 === borderCountry)

                return (
                    <Link key={country} to={`${border.cca3}`}>{border.flag}{border.name.common}</Link>
                )
            })}
            <hr />

        </div>

    )
}


export default CountriesDetails