import React, { Component } from 'react';
import CountriesDb from '../countries.json';
import { RouteComponentProps } from 'react-router-dom';


class CountryDetails extends Component {
    render() {

        const code = this.props.match.params.code
        const selectedCountryArr = CountriesDb.filter((element) => element.cca3 === code);
        const selectedCountryBordersArr = selectedCountryArr.map((element) => element.borders);
        
        return (
            <ul>
                <li>{selectedCountryArr[0].name.official}</li>
                <li>{selectedCountryArr[0].capital}</li>
                <li>{selectedCountryArr[0].area} Km2</li>
                <ul>
                    <li>{selectedCountryBordersArr}</li>
                </ul>
            </ul>
        )
    }
};

export default CountryDetails;
