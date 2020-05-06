import React from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom'
const CountryDetails = props => {
    const foundCountry = countries.find(elm => props.match.params.cca3 === elm.cca3)
    return (
        <>
            <div className="col-7">
                <h1>{foundCountry.name.common}</h1>
                <hr />
                <h4>Capital: {foundCountry.capital}</h4>
                <hr />
                <h4>Area: {foundCountry.area} Km2</h4>
                <hr />
                <ul>Borders: {foundCountry.borders.map((elm, idx) =>
                    <li key={idx}> <Link className="list-group-item list-group-item-action" key={idx} to={elm}> {countries.find((country) => country.cca3 === elm).name.common} </Link> </li>)}
                </ul>
            </div>
        </>
    )
}
export default CountryDetails