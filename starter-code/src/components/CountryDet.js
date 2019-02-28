import React, { Component } from 'react'


export default class CountryDetail extends Component {
    state = {
        countries: [...this.props.countries]
    };
};
    render() {
        return (
            <div>
                <h3>{country.name.common}</h3>
            </div>
        )
    }
