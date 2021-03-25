import React from 'react';
import { NavLink } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
    return (
        <div className='list-group'>
            {countries.map(country => {
                return (
                    <NavLink 
                    className='list-group-item' 
                    key={country.cca3} to={`/countries/${country.cca3}`}>
                        <div>
                        <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country}/>
                        </div>
                        
                        {country.name.common}
                    </NavLink>
                )
            })}
        </div>
    )
}