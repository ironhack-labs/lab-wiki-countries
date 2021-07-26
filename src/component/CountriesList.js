import React, { Component } from 'react';
import Country from './Country.js'
import CountriesDb from '../countries.json';

class CountriesList extends Component {

    state = {
        CountriesDb,
    }


    render() {
        return (
            <ul className="list-group m-4">
                {this.state.CountriesDb.map((element, index) => <Country key = {index} name = {element.name.official} countryCode = {element.cca3} countryFlag = {element.cca2} />)}
            </ul>

        )
    }
};

export default CountriesList;