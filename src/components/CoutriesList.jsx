import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
    
    return (
        <ul>
            {props.countries.map((country) => {
                return (
                    <li key={country.cca3}>
                        <Link to={`/countries/${country.cca3}`}>{country.name.official}</Link>
                    </li>
                );
            })}
        </ul>
    )
}

export default CountriesList;