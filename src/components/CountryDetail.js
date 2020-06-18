import React from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'

export default class CountryDetail extends React.Component {

    state = {
        countries: countries
    }

    getCountryForCode = (code) => {
        return this.state.countries.filter((country) => {
            return country.cca3 === code
        })[0]
    }

    render() {
        const countryCode = this.props.match.params.cca3; //AFG
        const country = this.getCountryForCode(countryCode)

        return (
            <div>
                <h1>{country.name.official}</h1>
                <hr />
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
                                    country.borders.map((country, index) => {
                                        return (
                                            <li key={index}>{this.getCountryForCode(country).name.official}</li>
                                        )
                                    })
                                }
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}