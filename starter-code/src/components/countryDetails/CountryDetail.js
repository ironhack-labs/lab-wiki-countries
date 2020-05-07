import React from 'react'
import countries from '../../countries.json'

import { Link } from 'react-router-dom'
// import queryString from 'query-string'

const CountryDetail = (props) => {

    const country = countries.find(country => country.cca3 === props.match.params.cca3)

    return (
        <>
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: 30 + '%' }}>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => {
                                    const countryInfo = countries.find(country => country.cca3 === border)
                                    return (
                                        <li key={countryInfo.cca3}>
                                            <Link
                                                to={`/${countryInfo.cca3}`}>
                                                {countryInfo.name.common}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CountryDetail