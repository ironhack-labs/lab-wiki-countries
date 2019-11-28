import React from 'react';
import countries from '../countries.json';
// import { Link } from 'react-router-dom';

const CountryDetail = props => {
    const id = props.match.params.id;

const country = countries.find(el => {
    return el.cca3 === id;
})


return (
    <div className='col-7'>
        <h1>{country.name.common}</h1>
        <table>
            <thead></thead>
            <tbody>
                <tr>
        <td  style={{width: '30%'}}>Capital</td> 
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