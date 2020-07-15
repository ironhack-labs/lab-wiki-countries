import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const CountryDetail = (props) => { 

    const idCountry = props.match.params.id
    const countrySelected = props.countries.filter(country => idCountry == country.cca3)
    //const borderCountries = props.countries.filter(country => countrySelected)

    return (

        <div>
            <div class="col-7">
                <h1>{countrySelected.name.official}</h1>
                <table class="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{countrySelected.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{countrySelected.area} km
                    <sup></sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    <li><Link to="/AND">Andorra</Link></li>
                                    <li><Link to="/BEL">Belgium</Link></li>
                                    <li><Link to="/DEU">Germany</Link></li>
                                    <li><Link to="/ITA">Italy</Link></li>
                                    <li><Link to="/LUX">Luxembourg</Link></li>
                                    <li><Link to="/MCO">Monaco</Link></li>
                                    <li><Link to="/ESP">Spain</Link></li>
                                    <li><Link to="/CHE">Switzerland</Link></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

