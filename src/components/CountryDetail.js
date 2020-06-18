import React from 'react';
import {Link} from 'react-router-dom'
import countries from '../countries.json'


export default class CountryDetail extends React.Component {

    state = {
        countries: countries
    }

    countryCode = (code) => {
        return this.state.countries.filter((country) => {
            return country.cca3 === code
        })[0]
    }

    render() {
        const countryIdCode = this.props.match.params.cc3;
        const country = this.countryCode(countryIdCode)

        return(
        <div>
            <h1>{country.name.official}</h1>

            <table>
                <tr>
                    <td>Capital</td>
                    <td>{country.capital[0]}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{country.area}</td>
                </tr>
                <tr>
                    <td>Border</td>
                    <td>
                        <ul>
                            {
                                country.border.map((country, i) => {
                                    return (
                                        <li key={i}>
                                            {this.countryCode(country).name.official}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </td>
                </tr>
            </table>
        </div> 
    
        )}
    }

