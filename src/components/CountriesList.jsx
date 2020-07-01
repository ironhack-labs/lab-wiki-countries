import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import './CountriesList.css';
import './CountryDetail.css';
import countries from '../data/countries';
import CountryDetail from './CountryDetail';

export default class CountriesList extends Component {
    render() {
        return (
        <div className="CountriesList">
            {
                countries.length === 0 ? <h4>Loading...</h4> : 
                countries.map((country) =>
                    <Link to={`/countries/detail/${country.cca2}`}>{country.name.common}</Link>
                )
            }
            <div className="CountryDetail">
                <Route path="/countries/detail/:id" component={CountryDetail} />
            </div>
        </div>
        )
    }
}
