import React, { Component } from 'react';
import countries from '../../countries.json';
import { Switch, Route, Link } from 'react-router-dom';

const CountryDetail = (props) => {

    const getCountryData = (code) => {
        
        let myCountry = Object.values(countries).filter(item => item.cca3 == code);
        return myCountry;

    }
    const getBorder = (country) => {
    
        let myBorders = countries.filter(item => country[0].borders.includes(item.cca3) );
        return myBorders;
    }
    const country = getCountryData(props.match.params.code);
    const borders = getBorder(country);

    return (

        <div>
            <h1>{country[0].name.common}</h1>
            <hr />
            <div><span>Capital </span><span>{country[0].capital}</span></div>
            <hr />
            <div><span>Area </span><span>{country[0].area}</span></div>
            <hr />
            <div><span>Borders </span>
                <ul>
                    {borders.map(item => <li><Link to={`/${item.cca3}`}>{item.name.common}</Link></li>)}
                </ul>
            </div>
        </div>


    )
}

export default CountryDetail;
