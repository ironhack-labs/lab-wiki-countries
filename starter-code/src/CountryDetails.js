import React, { Component } from 'react';
import Country from "./countries.json"
import { Switch, Route, Link } from 'react-router-dom';





const CountryDetail = (props) => {

    const id = props.match.params.cca3

    const foundCountry = Country.find((p) => p.cca3 === id)

    const border = foundCountry.borders.map((border) => {
        return <li><Link to = {"/" + {border}}>{border}</Link></li>
    })
    return (

        <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{foundCountry.area} km
                <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {border}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default CountryDetail

