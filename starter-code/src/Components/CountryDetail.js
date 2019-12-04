import React from 'react';
import countries from '../countries.json'

import { Link } from 'react-router-dom'


const CountryDetail = (props) => {


    const getCountry = id => countries.find(oneCountry => oneCountry.cca3 === id)
    const foundCountry = getCountry(props.match.params.cca3)

    return (
        <div>
        <h1>{foundCountry.name.official}</h1>
        <table class="table">
        <thead></thead>
        <tbody>
            <tr>
            <td>Capital</td>
            <td>{foundCountry.capital}</td>
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
                {foundCountry.borders.map(elm => 
                <li><Link to={elm}>{elm}</Link></li>
                )}


            </td>
            </tr>
        </tbody>
        </table>
        </div>
        )
        }


export default CountryDetail;
