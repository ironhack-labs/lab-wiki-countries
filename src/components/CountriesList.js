import React, { Component } from 'react';
import countries from '../countries.json';
import {  Link } from 'react-router-dom';



class CountriesList extends Component {

    state = {
        countries: countries
    }

    render() {

    return (
        <div>
          <h1>WikiCountries</h1>
          {this.state.countries.map((country) => {
            return (
                 <div key={country.cca3}>
                <h3> <Link to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
                </h3>
                </div>
                )
        }
        )
        }  
        </div>   
)
}
}
export default CountriesList