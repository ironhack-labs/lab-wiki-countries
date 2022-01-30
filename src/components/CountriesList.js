import React from 'react';
import { Link } from 'react-router-dom'
import data from '../countries.json'


const CountriesList = (props) => {
    return (
        <ul>
            {data.map((country) => <li><Link to= {`/${country.alpha3Code}`}>{country.name.common}</Link></li>)}
            
            
        </ul>
    )
}

export default CountriesList;