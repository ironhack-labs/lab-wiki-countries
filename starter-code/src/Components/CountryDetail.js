import React from 'react';
import countries from '../countries.json';
// import { Link } from 'react-router-dom';

const CountryDetail = props => {
    const id = props.match.params.id;

const country = countries.find(el => {
    return el.cca3 === id;
})


return (
    <div>
        <h1>{country.name.common}</h1>
        <table>
            <thead></thead>
            <tbody>
                <tr>
        <td>Capital</td> 
        <td>{country.capital}</td>
        <td>Area</td>
        <td>{country.area}</td>
        <td>Borders </td>
        <td>{country.borders}</td>
        </tr>
        </tbody>
        </table>
    </div>
)


}



export default CountryDetail;