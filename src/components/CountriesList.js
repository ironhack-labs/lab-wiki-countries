import React from 'react';
import countries from '../countries';
import {NavLink} from 'react-router-dom';

function CountryList(props){

    return(
        <div className="list-group">
            {countries.map((eachCountry) => {
                return(
                    <NavLink 
                        key={eachCountry.cca3}
                        className="list-group-item list-group-item-action" 
                        to={`/${eachCountry.cca3}`}
                    > 
                        {eachCountry.flag}   {eachCountry.name.official}
                    </NavLink>
                )
            })}
        </div>
    )
}
export default CountryList;