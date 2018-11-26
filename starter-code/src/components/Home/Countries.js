import React from 'react';
import {NavLink} from "react-router-dom";

const Countries = ({countries}) => (
    <div className="list-group">
        {countries.map(country => <NavLink exact to={`/countries/${country.cca3}`} key={country.cca3} className="list-group-item list-group-item-action">{country.name.common}</NavLink>)}
    </div>
);

export default Countries;