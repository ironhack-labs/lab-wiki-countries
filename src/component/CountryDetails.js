import React, { Component } from 'react';
import CountriesDb from '../countries.json';
import Borders from './Borders';


class CountryDetails extends Component {
    render() {

        const urlCode = this.props.match.params.code
        const selectedCountryArr = CountriesDb.filter((element) => element.cca3 === urlCode);
        const codeBorders = selectedCountryArr[0].borders.map((element) => element );
        const fullNameBorders = CountriesDb.filter((element) => codeBorders.includes(element.cca3));

        // - Those are here just to help understand each step above - //
        /*
        console.log(selectedCountryArr)
        console.log(codeBorders)
        console.log(fullNameBorders.map((element) => element.name.official));
        */

        return (
            <ul>
                <li>{selectedCountryArr[0].name.official}</li>
                <li>{selectedCountryArr[0].capital}</li>
                <li>{selectedCountryArr[0].area} Km2</li>
                <ul>
                    {fullNameBorders.map((element, index) =>
                    <Borders key = {index} name = {element.name.official} countryCode = {element.cca3} />)}
                </ul>
            </ul>
        )
    }
};

export default CountryDetails;
