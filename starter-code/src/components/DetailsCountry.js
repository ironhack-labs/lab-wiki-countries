import React, { Component } from 'react';
import countriesList from '../countries.json';
import { Link } from 'react-router-dom';

export default class DetailsCountry extends Component {
    render() {
        let country = countriesList.find(country => country.cca3 === this.props.match.params.id);
        let borderCountry = country.borders.map(border => countriesList.find(count => count.cca3 === border));
        return (
            <div className="col-7">
                <h1>{country.name.common}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{ "width": "30%" }}>Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>{country.area + `km`}
                            <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {borderCountry.map(border => {
                                        return (
                                            <li key={border.cca3}><Link to={`/` + border.cca3} >
                                            {border.name.common}</Link></li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}