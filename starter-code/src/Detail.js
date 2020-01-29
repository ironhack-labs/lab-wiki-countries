import React, { Component } from 'react';
import countries from './countries';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default class Detail extends Component {
    //  constructor(props) {
    //super(props)

    //}

    render() {
        let myCountry = countries.filter(country => this.props.match.params.id === country.cca3)[0];
        const countryByCode = (code) => countries.filter(country => country.cca3 === code)[0].name.common

        console.log(myCountry);
        return (
            <div className="flex" style={{width: "30%"}}>
                <div className="col-7">
                    <h1>{myCountry.name.official}</h1><hr />

                    <div className="row">
                        <div className="col-6 left">
                            <h2>Capital: </h2>
                        </div>
                        <div className="col-6 right">
                            <h2>{myCountry.capital}</h2>
                        </div>
                        <div className="col-6 left">
                            <h2>Area: </h2>
                        </div>
                        <div className="col-6 right">
                            <h2>{myCountry.area} km²</h2>
                        </div>
                        <div className="col-6 left">
                            <h3> Borders: </h3>
                        </div>
                        <div className="col-6 right">
                            <ul>{myCountry.borders.map((bordersItem, idx) =>
                                <li key={idx}><Link to={`/${bordersItem}`}>{countryByCode(bordersItem)}</Link></li>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
