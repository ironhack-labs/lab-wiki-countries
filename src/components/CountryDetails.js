import React from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';


function CountryDetails(props) {

    const countryId = props.match.params.countryid
    const foundCountry = countries.find((country) => {
        return country.cca3 === countryId
    })
    return (
        <div>
            <div className="col-7">
                <h1>{foundCountry.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
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
                                    {foundCountry.borders.map((countryBorder, i) => {
                                        const foundCountryCode = countries.find((country) => {
                                            console.log('country', countryBorder)
                                            return countryBorder === country.cca3
                                        })
                                        console.log('foundCountryCode', foundCountryCode)
                                        return (
                                            <li>
                                                <Link to={`/countrydetails/${countryBorder}`}> {foundCountryCode.name.official}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default CountryDetails

