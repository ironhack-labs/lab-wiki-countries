import React, { Component } from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
    
    render() {
        const { params } = this.props.match;
        const showCountry = countries.find(oneCountry => oneCountry.cca3 === params.cca3);

        const borderObjects = showCountry.borders.map(cca3 => { return <Link to={`/CountryDetail/${cca3}`} >{countries.find(borderCountry => borderCountry.cca3 === cca3).name.common}</Link>} )
        
        return (
            <div>
                <h1>{showCountry.name.common}</h1>
                <p>Capital: {showCountry.capital}</p>
                <p>Area: {showCountry.area} km²</p>
                <p>Borders: {borderObjects}</p>
            </div>
        )
    }
}

