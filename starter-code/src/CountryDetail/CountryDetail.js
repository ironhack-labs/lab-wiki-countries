import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CountryDetail.css"
import Borders from '../Borders/Borders.js';


class CountryDetail extends Component {
    render() {
        return (
            <div className="col-7">
                <div>
                    <h1>{this.props.name}</h1>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>
                                <td>{this.props.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>{this.props.area} km
                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul>
                                        {this.props.borders.map(border => (
                                            <Borders border={border}></Borders>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
export default CountryDetail;
