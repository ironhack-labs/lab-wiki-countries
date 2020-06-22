import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList(props) {


  return (
    <div className="list-group">
        {countries.map((country, index) => (
            <Link
                to={`/countries/${country.cca3}`}
                className="list-group-item list-group-item-action"
                key={country.cca3}
            >   
                <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt=""/>
                {country.name.common}
            </Link>
        ))}
    </div>
  );
}

export default CountriesList;
