import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
    const countryId = props.match.params.id;
    const country = props.countries.find(country => country.cca3 === countryId)

    const borders = country.borders.map(border => {
        let borderCountry = props.countries.find(country => country.cca3 === border)
            return <li key={borderCountry.cca3}><Link to={`/${borderCountry.cca3}`}>{borderCountry.name.common}</Link></li>
    })

    return (
        <div className="col-7">
            <h1>{country.name.official}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: '30%'}}>Capital</td>
                    <td>{country.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td> {country.area} km<sup>2</sup>
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
