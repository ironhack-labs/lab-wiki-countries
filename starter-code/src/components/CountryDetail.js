import React from 'react';
//import './CountryDetail.css';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountryDetail extends React.Component {

    filterCountry = (countries, countrycca3) => {
        return countries.filter((country) => {
            return country.cca3 === countrycca3
        })
    }

    render() {

        let filteredCountry = this.filterCountry(countries, this.props.match.params.cca3)[0]
       
        let borders = filteredCountry.borders.map((country, index)=>{
            return <li key={index}><Link to={`/CountryDetail/${country}`}>{country}</Link></li>
        })

        return (
            <div className="country-detail list-group col-7">
                <h1>{filteredCountry.name.common}</h1>
                <div className="capital list-group-item">
                    <h4 className="col-3">Capital</h4>
                    <h4 className="col-4">{filteredCountry.capital}</h4>
                </div>
                <div className="area list-group-item">
                    <h4 className="col-3">Area</h4>
                    <h4 className="col-4">{filteredCountry.area}</h4>
                </div>
                <div className="area list-group-item">
                    <h4 className="col-3">Borders</h4>
                    <h4 className="col-4"><ul>{borders}</ul></h4>
                </div>
            </div>
        )
    }
}