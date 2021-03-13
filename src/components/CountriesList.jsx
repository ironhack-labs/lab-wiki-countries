import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json'

class CountriesList extends Component {
    state = {
        countries: []
    };

    componentDidMount () {
        this.setState({
            countries: countries
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.countries.map(country => (
                        <li key={country.cca3}>
                            <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>{' '}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CountriesList