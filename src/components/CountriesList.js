import React from 'react';
import countries from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountriesList() {
    return (
        <div>
            <h2>Countries</h2>
            {countries.map((eachCountry) => {
                return (
                    <div class="container">
                    <div class="col" key={eachCountry.cca3}>
                    <div class="row">
                            <NavLink to={`/countries/${eachCountry.cca3}`}>
                            <img src={`https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`} alt={`${eachCountry.name} flag`} />
                            {eachCountry.name.common}
                            </NavLink>
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CountriesList;