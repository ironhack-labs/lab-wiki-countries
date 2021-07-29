import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList ({countries}) {


    return (
            <div className="list-group">
                {countries.map(country => 
                    <Link  key={country.cca3} className="list-group-item" to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>                    
                    )}
            </div>
        )
}


export default CountriesList