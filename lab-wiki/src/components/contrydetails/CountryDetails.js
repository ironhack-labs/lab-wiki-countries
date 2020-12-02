import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../../countries.json'

const CountryDetails = (props) => {

    const countryArr = countries.filter(country => country.cca3 === props.match.params.country)
    const country = countryArr[0]
    return (
        <div >
             <h1>{country.name.common}</h1>
             <table class="table">
             <tbody>
             <tr>
            <h5>Capital</h5>
            <p>{country.capital}</p>
            </tr>
            <tr>
            <td>Area</td>
            <td>{country.area} km <sup>2</sup>
                </td>
            </tr>
            <tr>

            <h5>Borders</h5>
            <ul>
                {country.borders.map(elm =>
                    <li key={elm}><Link to={elm}>{elm}</Link></li>
                )}

            </ul> 
            </tr>
            </tbody>
        </table>
        </div>
    )

}

export default CountryDetails 