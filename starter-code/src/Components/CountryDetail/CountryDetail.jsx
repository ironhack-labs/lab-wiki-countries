import React, { Component } from 'react';
import Countries from "../../countries.json";
import './CountryDetail.css';
import { Link, Switch, Route } from 'react-router-dom';

export default class CountryDetail extends Component {
    render() {
        const { params } = this.props.match
        const Country = Countries.filter(country => country.cca3 === params.cca3)[0]
        console.log(Country)
        const borders = Country.borders.map(border => Countries.filter(country => country.cca3 === border)[0]);

        return (
            <div className="CountryDetail">
                <h1>{Country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Capital</td>
                            <td>{Country.capital}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{Country.area} km
                    <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {borders.map(border => <li><Link to={`/${border.cca3}`}>{border.name.common}</Link></li>)}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
