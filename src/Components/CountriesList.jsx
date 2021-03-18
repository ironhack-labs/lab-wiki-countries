import React, { Component } from 'react';
import countriesJSON from '../countries.json';
import {Link} from 'react-router-dom';

class CountriesList extends Component {
    render() {
        return (
            <div className="countriesList">
                {countriesJSON.map((country)=>{
                    return(
                        <div key={country.cca3}>
                            <Link to={`/country/${country.cca3}`} > {country.flag} {country.name.common}</Link>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default CountriesList
