import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../../countries.json';

const CountriesList = () => {
    return (

        <div className="col-5" style={{}} >

            <div className="list-group">

                <ul>
                    {countries.map((country, idx) => (

                        <li key={idx}>
                            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
                        </li>

                    ))}

                </ul>

            </div>

        </div>
    );
}

export default CountriesList;
