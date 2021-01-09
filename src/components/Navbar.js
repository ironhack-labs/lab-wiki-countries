import React from 'react';
import CountriesList from '../components/CountriesList.js';
import { Route, Link, Switch } from 'react-router-dom';
import CountryDetails from '../components/CountryDetails.js';

// props.countires= what is inside countries.json

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <h1>LAB - WikiCountries</h1>
                <ul className="countrieslist">
                    <CountriesList />
                </ul>
            </div>
        )
    }
}

export default Navbar