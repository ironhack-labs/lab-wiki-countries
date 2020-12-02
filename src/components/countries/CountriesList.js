import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import './CountriesList.css';

const CountriesList = () => {
    return (

        <div>
            <div class="list-group">
                <ul>
                    {countries.map((oneCountry, idx) => (
                        <li key={idx}>
                            <Link to={`/countries/${oneCountry.cca3}`}>{oneCountry.name.common}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CountriesList;