import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountryDetails extends Component {

    getCountryById = countryId => countries.find(country => country.cca3 === countryId)

    render() {

        const countryId = this.props.match.params.countryId;
        const country = this.getCountryById(countryId)
        console.log(country)

        const borderingCountries = country.borders.map(border => {
            let borderingCountry = this.getCountryById(border)
            return <li><Link to={`/countries/${borderingCountry.cca3}`}>{borderingCountry.name.common}</Link></li>
        })
        
        
        
        
        return (
            <div class="col-7">
                <h1>{country.name.common}</h1>
                <table class="table">
                    <tr>
                        <td style={{width: '30%'}}>Capital</td>
                        <td>country.capital</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {borderingCountries}
                    </ul>
                    </td>
                </tr>
                </table>
            </div>
        )
    }
}
