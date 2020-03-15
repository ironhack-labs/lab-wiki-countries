import React from 'react';
import { Link } from 'react-router-dom';
import { InvalidCountry } from './InvalidCountryCode';

export const CountryDetail = ({ country, getDetails }) => {

    return <div className="col-7">
        {
            country ? <>
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Capital</td>
                            <td>{country.capital.length && country.capital[0] !== '' ? country.capital : 'N/A'}</td>
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
                                    {
                                        country.borders.length ? country.borders.map((countryCode, i) => (
                                            <li key={i}>
                                                <Link to={`/${countryCode}`}>{getDetails(countryCode)}</Link>
                                            </li>
                                        )) : 'N/A'
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </> :
                <InvalidCountry />
        }
    </div>
}