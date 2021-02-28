import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
    return (
        <div>
            {countries.filter(country => country.cca3 === props.match.params.id).map(country => (
                <div>
                    <h1>{country.name.common}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{country.area} km²</td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {country.borders.map(borderCountry => (
                                            <li>
                                            <Link key={borderCountry} to={`/countrydetails/${borderCountry}`} className="list-group-item list-group-item-action">{countries.filter(country => country.cca3 === borderCountry).map(country => (<a href="#">{country.name.common}</a> ))}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
            ))}
        </div>
    )
}


