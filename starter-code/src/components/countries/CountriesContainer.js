import React, { Component } from 'react';
import CountriesList from './CountriesList';
import countries from '../../countries.json'

export default class CountriesContainer extends Component {
    state = {
        countries
    }

    render() {
        const {countries} = this.state
        return (
            <div>
                {countries.map((country, i) => (
                        <CountriesList country={country} key={i}/>
                ))}
            </div>
        )
    }
}
