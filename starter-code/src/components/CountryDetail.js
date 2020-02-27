import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
    render() {
        const borders = this.props.country.borders.map(border => {
            const borderInfo = this.props.findFnc(border);
            return <li><Link to={`/${borderInfo.cca3}`}>{borderInfo.name.common}</Link></li>
        })
        return (
            <React.Fragment>
                <h1>{this.props.country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="capital">Capital</td>
                            <td>{this.props.country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{this.props.country.area} km
                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {borders}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}