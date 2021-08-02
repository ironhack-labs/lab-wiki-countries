import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CountryDetails extends Component{
    selectCountryByCode = (code) =>{
        return this.props.countries.filter(
          (eachCountry) => eachCountry.cca3 === code
        )[0];
    }
    render(){
       const selectedCountry = this.selectCountryByCode(
         this.props.match.params.code
        );
        return (
            
            <div>                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h1>{selectedCountry.name.common}</h1></li>
                    <li className="list-group-item"><b>Capital:</b> {selectedCountry.capital}</li>
                    <li className="list-group-item"><b>Area:</b> {selectedCountry.area} Km²</li>
                    <li className="list-group-item"><b>Borders:</b> 
                    <ul>
                     {selectedCountry.borders.map((borderCode) => {
                         const borderCountry = this.selectCountryByCode(borderCode)
                         return <li><Link to={`/country-details/${borderCode}`}>{borderCountry.name.common}</Link></li>
                     })} 
                    </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CountryDetails;