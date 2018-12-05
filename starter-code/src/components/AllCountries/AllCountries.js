import React, { Component } from 'react';
import countryList from "../../countries.json"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default class AllCountries extends Component {
    constructor() {
        super()
        this.state = {
            countries: countryList
        }
    }
    render() {
        return (
            <div className="allCountries">
                <div className="container"></div>
                <div className="row">
                    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                        <div className="list-group">
                            {this.state.countries.map((country) => {
                                return (
                                    <div className="list-group-item list-group-item-action">
                                        <Link to={country.cca3}>{country.flag} {country.name.common} </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

