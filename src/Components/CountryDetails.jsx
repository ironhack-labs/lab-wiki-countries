import React, { Component } from 'react';
import countriesJSON from '../countries.json';
import {Link} from 'react-router-dom';

class CountryDetails extends Component {
    render() {
        const countryId = this.props.match.params.cca3

        const foundCountry = countriesJSON.find((country) => country.cca3 === countryId)

        return (
            <div className="details">
                <h1>{foundCountry.name.common}</h1>
                <div className="detailsList">
                    <p>Capital</p>
                    <p>{foundCountry.capital[0]}</p>
                </div>
                <div className="detailsList">
                    <p>Area</p>
                    <p>{foundCountry.area}</p>
                </div>
                <div className="borders">
                    <p>Borders</p>
                    <ul>
                        {foundCountry.borders.map((border)=>{
                            const foundBorder = countriesJSON.find((country)=>country.cca3 === border);
                            return(
                                <li key={border}>
                                    <Link to={`/country/${border}`}>{foundBorder.name.common}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CountryDetails
