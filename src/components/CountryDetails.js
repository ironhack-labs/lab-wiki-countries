import React from 'react';
// import countries from "../countries.json"
import {Link} from "react-router-dom";

export default function CountryDetails(props) {

    const countryId = props.match.params.id; // Component can now read id from CountriesList URL

    const country = props.countries.find(element => element.cca3 === countryId);

    const borders = country.borders.map(border => {
        let borderCountry = props.countries.find(country => country.cca3 === border)

        return <li key={border}><Link to={`/countries/${border}`}>{borderCountry.name.official}</Link></li>
    })

    return (
        <div>
            <h1>{country.name.common}</h1>
            <table className="table"> 
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                        {country.area} km<sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {borders}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 
