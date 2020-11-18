import React from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

const CountriesList = () => {
    return(
        <div>
            <h2>Countries</h2>
            
            {countries.map((eachCountry, idx) => {
                return(
                    <div key={eachCountry.cca3}>
                        <span>{eachCountry.flag}</span>
                        <h3><Link to={`/countries/${eachCountry.cca3}`}>{eachCountry.cca3}</Link></h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;