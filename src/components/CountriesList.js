import React, { Component } from 'react';
import data from '../countries.json';
import {Link} from 'react-router-dom';

export default class CountriesList extends Component {
    render() {
        const list = data.map(country => {
            return(
                <ul>
                    <Link to={`/country/${country.cca3}`}>
                        <li key={country.cca3}>{country.name.common}</li>
                    </Link>
                </ul>
            )
        })

        return (
            <div>
                {list}
            </div>
        )
    }
}
