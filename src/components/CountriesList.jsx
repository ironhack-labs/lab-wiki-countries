import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import countries from '../data/countries';
import CountryDetail from './CountryDetail';

export default class CountriesList extends Component {
    render() {
        return (
        <div className="countries">
            {
                countries.map((country) =>
                <div>
                    <Link to={`/countries/detail/${country.cca2}`}>{country.name.official}</Link>
                </div>
                )
            }
            <Route path="/countries/detail/:id"component={CountryDetail} />
        </div>
        )
    }
}
