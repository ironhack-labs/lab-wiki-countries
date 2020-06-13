import React from 'react';
import Countries from '../countries.json';
import { NavLink } from 'react-router-dom';

function CountriesList(){
    return(
        <div>
            <h2>Countries</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-5 overflow">
                    <div className="list-group"></div>
                        {Countries.map(country => {
                            return(
                                <div key={country.cca3}>
                                    <NavLink to={`/${country.cca3}`}>
                                    {country.flag} 
                                    {country.name.common}</NavLink>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>

    )
}

export default CountriesList;