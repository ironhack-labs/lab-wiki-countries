import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
    
    const countryId=props.match.params.cca3;
    
    const selectedCountry= countries.find(country=>country.cca3===countryId)
    // console.log(selectedCountry)
    
    return (
        <div className="country-details">
            <h1>{selectedCountry.name.common}</h1>
            <table class="table">
                <tr>
                    <td>Capital</td>
                    <td>{selectedCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{selectedCountry.area} km<sup>2</sup></td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                         {
                            selectedCountry.borders.map(border=>
                            (
                                <li>
                                    <Link to={`/countries/${border}`}>
                                        {countries.find(country=>country.cca3===border).name.common}
                                    </Link>
                                </li>
                            ))
                         }
                      </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}
