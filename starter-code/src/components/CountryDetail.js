import React from 'react';
import { Link } from "react-router-dom";
import countries from "../countries.json"

class CountryDetail extends React.Component {
    state = {
        countryData: countries
    }
    render(){
        let country = this.state.countryData.find(country => country.cca3 === this.props.match.params.code)
        return (
            <div className="container">
                <h1>{country.name.common}</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area} km <sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map(borders => {
                                        let borderCountry = this.state.countryData.find(country => country.cca3 === borders).name.common
                                        return (
                                            <li>
                                                <Link to={`/country-detail/${borders}`}>{borderCountry}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CountryDetail;