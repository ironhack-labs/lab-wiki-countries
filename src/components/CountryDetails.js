import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = props => {
    const country = countries.find((elm) => elm.cca3 === props.match.params.cca3)
    return (
        <div className="col-7">
            <h1>{country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital}</td>
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
                            {country.borders.map((country, idx) => {
                                const border = countries.find((element) => element.cca3 = country);
                                return (
                                    <li key={idx}>
                                        <Link to={`/countries/${border.cca3}`}>{border.name.common}</Link>
                                    </li>
                                )
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails