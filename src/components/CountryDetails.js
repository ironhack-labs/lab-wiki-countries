import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json'

const CountryDetails = props => {
    const country = countries.find(country => country.cca3 === props.match.params.cca3)

    if (!country) {
        return <div>Country not found</div>
    }

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => {
                                    const borderLink = countries.find(country => country.cca3 === border)
                                    return (
                                        <li key={border}><Link to={`/country/${borderLink.cca3}`}>{borderLink.name.common}</Link></li>)
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails