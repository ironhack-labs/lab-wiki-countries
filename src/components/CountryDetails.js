
import React from 'react'
import { Link } from 'react-router-dom'


import './CountryDetails.css'

import countries from '../countries.json'


const CountryDetails = ({ name, cca3, capital, area, borders }) => {

    return (
        <div className="col-7">
            {countries.map((elm, idx) =>
                <div key={idx}>
                    <h1>{elm.name.common}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{elm.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{elm.area} km
                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {elm.borders.map(border => <li><Link to={`/details/${border}`}> {border}</Link> </li>
                                        )}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default CountryDetails