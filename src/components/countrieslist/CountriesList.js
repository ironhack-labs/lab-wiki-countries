import React, { Component } from 'react';
import './CountriesList.css'
import CountryDetails from '../countrydetails/CountryDetails';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
    
    fullList = () =>
    this.props.countries.map((country, i) => {
        return( 
                <li key={country.cca3}>
                    {country.flag + " " + " " + " "} 
                    <Link to ={`/country-details/${country.cca3}`}>
                        {country.name.official}
                    </Link>
                </li>
        )
    });

    render() {
        // console.log(this.props.match)
        return (
            <div>
                    <ul>{this.fullList()}</ul>
            </div>
        )
    }
}


