import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {

    state = {
        countryList: countries,

    }
    render() {
        return (
            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                <div className="list-group">
                    <ul>
                        {this.state.countryList.map((oneCountry, index) => {
                            return <li key={oneCountry.cca3}>
                                <Link to={`/${oneCountry.cca3}`} >{oneCountry.flag} {oneCountry.name.common}</Link>
                            </li>
                        })}
                    </ul>
                </div>


            </div>
        )
    }
}

