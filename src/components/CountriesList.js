import React from 'react';
import { Link } from "react-router-dom";
import countries from '../countries.json';

function CountriesList(props) {
    return <div>
        {countries.map((country) => (
            <div className="column" key={country.cca3}>
                <Link to={`/countries/${country.cca3}`}>
                    <p>{country.name.official}</p>
                </Link>
            </div>
        ))}
    </div>

}

export default CountriesList; 