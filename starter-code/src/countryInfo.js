import React from 'react';
import './countryInfo.css';
import countryData from './countries.json'
import { Link } from "react-router-dom";

const CountryInfo = props => {
    const countryId = props.match.params.id
    const country = countryData.find(el => {
        return el.cca3 === countryId;
    });



    return (
        <div className="col-7">
            <h1>{country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="capital">Capital</td>
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
                                {country.borders.map(el => {
                                    const borderCountry = countryData.find(country => {
                                        return country.cca3 === el
                                    })
                                    return (
                                        <li key={el}><Link to={`/${el}`}>{borderCountry.name.common}</Link></li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default CountryInfo