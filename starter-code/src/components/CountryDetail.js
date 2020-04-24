import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import './CountryDetails.css';

class CountryDetails extends Component {
    getCountryName = (cca3) => {
        const country = countries.find(country => country.cca3 === cca3);

        return country.name.common;
    }

    render() {
        const { params } = this.props.match;
        const foundCountry = countries.find(country => country.cca3 === params.id);
        
        return (
            <div className='CountryDetails'>
                <h2 className='CountryDetails-h2'>{foundCountry.name.common}</h2>
                <hr className='CountryDetails-hr'></hr>
                <div className='CountryDetails-row'>
                    <div className='CountryDetails-first-column'>Capital</div>
                    <div>{foundCountry.capital}</div>
                </div>
                <hr className='CountryDetails-hr'></hr>
                <div className='CountryDetails-row'>
                    <div className='CountryDetails-first-column'>Area</div>
                    <div>{foundCountry.area} km<sup>2</sup></div>
                </div>
                <hr className='CountryDetails-hr'></hr>
                <div className='CountryDetails-row'>
                    <div className='CountryDetails-first-column'>Borders</div>
                    <ul>
                        {foundCountry.borders.map((cca3, index) => (
                            <li key={index}><Link to={`/${cca3}`}>{this.getCountryName(cca3)}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default CountryDetails;