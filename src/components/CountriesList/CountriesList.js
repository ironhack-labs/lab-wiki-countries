import { Link } from 'react-router-dom';
import countries from '../../countries.json'
import React, { Component } from 'react';

export default class CountriesList extends Component {
    state = {
        countries: countries
    }
    render() {
        return (
        <div>
            {countries.map((element) => {
            return (
            <div className="col-5">
                <div className="list-group">
                <Link
                    key={element.cca3}
                    to={`/${element.cca3}`}
                    className="list-group-item list-group-item-action"
                >
                    {element.name.official}
                </Link>
                </div>
            </div>
            );
        })}
        </div>
        );
    }
}
