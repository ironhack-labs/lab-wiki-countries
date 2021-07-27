import React, { Component } from 'react';
import Country from './Country.js'
import Countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';

class CountriesList extends Component {
    state = {
        Countries,
    }
    render() {

        return (
            <ul className="list-group">
                {this.state.Countries.map((element, index) => <Country key={index} name={element.name.official} countryCode={element.cca3} countryFlag={element.cca2} />)}
            </ul>
        )
    }
}

export default CountriesList;