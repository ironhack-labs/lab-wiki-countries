import React, { Component } from 'react'
import queryString from 'query-string'
import countries from '../countries.json'
import CountriesList from './CountriesList'

import { Switch, Route, Redirect, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


const CountryDetails = props => {

    //console.log(' props desde el componente App:', props)

    const cca3 = props.match.params.cca3
    const detailsCountry = countries.find(countries => countries.cca3 === cca3)


    return (
        <>
            <h1>{detailsCountry.name.common} </h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{detailsCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{detailsCountry.area}
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>

                                {detailsCountry.borders.map(elm => <Link to={elm.cca3}>
                                    <li> {elm} </li>
                                </ Link>)}


                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )


}

export default CountryDetails