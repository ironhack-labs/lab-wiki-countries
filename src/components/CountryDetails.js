import React, { Component } from 'react';
import countries from '../countries.json';
import 'bootstrap/dist/css/bootstrap.css';

class CountryDetails extends Component {

    render() {
        const codeCountry = this.props.match.params.code
        const selectedCountry = countries.filter((element) => element.cca3 === codeCountry)

        return (
            <ul>
                <li>{selectedCountry[0].name.official}</li>
                <li>{selectedCountry[0].capital}</li>
                <li>{selectedCountry[0].area} Km2</li>
                <ul>
                    <li>{selectedCountry}</li>
                </ul>
            </ul>

        )
    }
}

export default CountryDetails;

