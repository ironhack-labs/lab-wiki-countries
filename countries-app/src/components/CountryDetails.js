import React from 'react'

import { Link } from 'react-router-dom'

import countries from '../countries.json';

const CountryDetails = props => {
    const { country } = props.match.params;
    console.log(country)
    const foundCountry = countries.find((elm) => elm.cca3 === country);

    return (
        <div className="col-7">

            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{foundCountry.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{foundCountry.area} km
                <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {foundCountry.borders.map((elm,idx) => <li key={idx}><Link to={`/${elm}`}>{elm}</Link></li>)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails