import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {

    return (
        <div>
    {countries.map((eachCountry, index) =>{
    return (
        <div className="list-group" key={eachCountry.cca3}>
            <Link className="list-group-item list-group-item-action" to={`/${eachCountry.cca3}`}>{eachCountry.flag}{eachCountry.name.common}</Link>
        </div>
        );
      })}
        </div>
    );
};

export default CountriesList;