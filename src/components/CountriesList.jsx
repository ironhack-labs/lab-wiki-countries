import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import countries from  '../countries.json';
import './CountriesList.css'

function CountriesList(props) {

    return (
        <div className="col-3">
            <ul className="list-group c-list">
                {countries.map((country) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/country/${country.cca3}`} className="c-li">
                                    
                                {country.flag} {country.name.common}
                                </Link>
                            </li>
                        )
                })}
            </ul>
        </div>
  )
}
 
export default CountriesList;