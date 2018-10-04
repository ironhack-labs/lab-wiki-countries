import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import countriesJson from '../countries.json'

console.log(countriesJson[0].name.official);
const CountryDetail = ({name, path}) => {
    return (
        <a href={path} className="list-group-item list-group-item-action">{name}</a>
    )
}

export default CountryDetail;