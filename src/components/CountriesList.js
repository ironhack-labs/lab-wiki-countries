import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './../countries.json';
import { Link } from 'react-router-dom'

function CountriesList () {

    return (
        <div className="container">
    Hi, I am CountriesList:<br />
{countries.map(c => <li key={c.cca3}><Link to={"/country-detail/" + c.cca3}>{c.name.common}</Link></li>)}
        </div>
    )

}

export default CountriesList;