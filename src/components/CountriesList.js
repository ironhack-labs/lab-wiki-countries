import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {


    render() {

        const countriesList = countries.map(country => {
            return <a class="list-group-item list-group-item-action"><Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
            </a>
        })

        return (
            <>
                <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                    <div class="list-group">
                        {countriesList}
                    </div>
                </div>
            </>
            )
        
    }
}
