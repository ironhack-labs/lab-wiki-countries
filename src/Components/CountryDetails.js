import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CountryDetails extends Component {
    render() {
        let getCountry = cca3 => this.props.countries.find(obj => obj.cca3 === cca3);
        const {params} = this.props.match;
        const country = getCountry(params.cca3)
        return (
                <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital[0]}</p>
                <p>Area: {country.area} km2</p>
                <p>Borders:</p>
                <ul>
                    {country.borders.map((border, index)=>{
                        let borderCountry = getCountry(border)
                        return (<li key={index}><Link to={`/countries/${border}`}>{borderCountry.name.common}</Link></li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default CountryDetails
