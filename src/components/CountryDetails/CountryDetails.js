import React from 'react'
import countries from './../../countries.json';
import { Link } from 'react-router-dom';

function CountryDetails(props) {

    const countryId = props.match.params.countryid;


    const detailCountry = countries.find((country) => {
        return country.cca3 === countryId
    })
    console.log(detailCountry)

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <h1>{detailCountry.name.official}</h1> 
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h3>Capital</h3>
                    </td>
                    <td>
                        <h3>{detailCountry.capital[0]}</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Area</h3>
                    </td>
                    <td>
                        <h3>{detailCountry.area} km2</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h3>Borders</h3>
                    </td>
                    <td>
                        <h3>
                            <ul>
                                {detailCountry.borders.map((countryBorder, i) => {
                                    const detailCountryCode = countries.find((country)=>{
                                        return countryBorder === country.cca3
                                    })
                                    return (
                                        <li>
                                            <Link to={`/countrydetails/${countryBorder}`}>
                                {detailCountryCode.name.official}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </h3>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default CountryDetails;