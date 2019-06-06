import React from 'react';
import { Link } from 'react-router-dom'
import countries from '../countries.json';

export const listCountries = () => {

    return (
        <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
            {countries.map((eachCountry,idx) =>{
                return (
                <Link key={idx} to={eachCountry.cca3} className="list-group-item list-group-item-action">{eachCountry.name.common}</Link>
                )
            })}

            </div>
          </div>
        </div>
        </div>
    )
}
