import React, { Component } from 'react'
import countries from '../../countries.json'
export default class CountryInfo extends Component {
filterCountry = (countries, countryId) => {
        return countries.filter(country => {
          return country.cca3 ===countryId;
        });
      };
    render() {
    let chosenCountry=this.filterCountry(countries,this.props.match.params.id) 
      console.log(this.props.match.params.id)
      console.log(chosenCountry[0].borders)
        
    return (
        
      <div>
        <h1>{chosenCountry[0].name.common}</h1>
        <p>Capital {chosenCountry[0].capital}</p>
        <p>Area {chosenCountry[0].area} km2</p>
        <ul>Borders </ul>
            <li>{chosenCountry[0].borders}</li>
           
      </div>
    )
  }
  
}
