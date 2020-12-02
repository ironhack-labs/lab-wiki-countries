import React from 'react';
import countries from './countries.json'
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {

    const params = props.match.params.cca3
    const country = countries.find(elm => elm.cca3 === params)

    return(
        <>
            <div class="col-7">
                <h1>{ country.name.common}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td styles="width: 30%;">Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} km<sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map((elm => <li key={elm}><Link to={elm}>{elm}</Link></li>))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default CountryDetails