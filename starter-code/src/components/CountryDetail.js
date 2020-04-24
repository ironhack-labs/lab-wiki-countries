import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


function CountryDetail(props) {

    const getCountry = id => countries.find(obj => obj.cca3 === id);

    const { params } = props.match;

    const foundCountry = getCountry(params.id);

    return (
        <div>
            <h1>{foundCountry.name.common}</h1>
            <h2>Capital: {foundCountry.capital}</h2>
            <h2>Area: {foundCountry.area}KM2</h2>
            <h2>Borders: </h2>
            {foundCountry.borders.map((eachCountry, index) => {
                return( <li key={index}><Link to={getCountry(eachCountry).cca3}>{getCountry(eachCountry).name.common}</Link></li>)
        })}
        </div>
    )
}

export default CountryDetail;