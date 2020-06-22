import React from 'react';
import '../App.css';
import Countries from './../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
    return (
        <div className="list-group">
            {
                Countries.map((country, index)=>(
                    <Link to={`/country/${country.cca3}`} style={{ textDecoration: 'none' }} key={`${index}:${country.name.common}`}>
                        <div className="list-group-item list-group-item-action">
                            <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} srcSet={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt=""/>
                            <div className="country-name">{country.name.common}</div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default CountriesList;


