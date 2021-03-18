import React from 'react';
import countriesJSON from './../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
    const countryCca3 = props.match.params.id;

    const foundCountry = countriesJSON.find((country) => country.cca3 === countryCca3);

    return (
        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {foundCountry.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {foundCountry.borders.map(border => {
                            const borderName = countriesJSON.find((country) => country.cca3 === border).name.common;
                            return <li key={border}><Link to={`/${border}`}>{borderName}</Link></li>
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
