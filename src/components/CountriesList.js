import React from 'react';
import countries from '../countries.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

const CountriesList = () => {
    console.log(countries)
    return (
    <ul className="list-group">
        {countries.map(country => {
        return (
            <li className="list-group-item" key={country.cca3}>
             <Link to={"/country/" + country.cca3}>{country.flag} {country.name.common}</Link>
            </li>
        )
    }) }
    </ul>
    )
};

export default CountriesList;