import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CountriesList = ({countries}) => {
    return (
        <div>
            <h1>Countries</h1>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code} className="col-5 list-column"> 
                        <div className="list-group">
                            <NavLink to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" height="20" width="25"/>{country.name.common}
                            </NavLink>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CountriesList;