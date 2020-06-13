import React from 'react';
import { NavLink } from 'react-router-dom';
import  countries  from '../countries.json';

export default function CountriesList() {
    return (
        <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>            
            {countries.map((eachCountry) => {
                const flag = `https://www.countryflags.io/${eachCountry.cca2}/flat/64.png`
                return(
                        <div class="list-group">
                            <NavLink class="list-group-item list-group-item-action" to={`/countries/${eachCountry.cca3}`}>
                                <img style={{width:'84px'}} src={flag} alt='country-flag'/>
                                 {eachCountry.name.common}
                            </NavLink>
                        </div>
                )
                })}
        </div>
    )
}