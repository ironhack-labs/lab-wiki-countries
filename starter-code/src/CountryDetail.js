import React from 'react';
import countrydata from "./countries.json";
import {Link} from "react-router-dom"


class CountryDetail extends React.Component {
    constructor() {
        super()

        this.state = {
            country: countrydata
        }
    }

    render() {
        let country = this.state.country.find(el => el.cca3 === this.props.match.params.id)
        console.log(country)
        console.log(country.name.common)
        return (
            <div className="countrydetailoverview"> 
                
                <div className="country">
                    <h1>{country.name.common}</h1>            
                </div>
            
                <div className="capital">
                    <h2>Capital: {country.capital} </h2>
                </div>

                <div className="area">
                    <h2>Area: {country.area} sq. km</h2>
                </div>

                <div className="borders">
                    <h2>Borders:
                    
                    
                    
                    </h2>                 
                </div>

            </div>
        )
    }
}

export default CountryDetail