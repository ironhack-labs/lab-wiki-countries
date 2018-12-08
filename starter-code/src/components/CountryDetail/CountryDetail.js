import React from 'react';
import './CountryDetail.css';
import countries from '../../countries.json'
import { Link } from 'react-router-dom';

class CountryDetail extends React.Component {

    filterCountry = (countries, countrycca3) => {
        return countries.filter((country)=> {
            return country.cca3 === countrycca3
        })
    }

    render(){

        let filteredCountry = this.filterCountry(countries, this.props.match.params.cca3)
        console.log (filteredCountry);
        return (
            <div className="country-detail col-7">
                <h1>{filteredCountry[0].name.common}</h1>
            </div>
        )
    }
}

export default CountryDetail;