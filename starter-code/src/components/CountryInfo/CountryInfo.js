import React, { Component } from 'react'
import Countries from '../../countries.json'

export default class CountryInfo extends Component {

  filterCountry = (countries, countryId) => {
    return countries.filter(country => {
      return country.cca3 ===countryId;
    });
  };
render() {

let chosenCountry=this.filterCountry(Countries,this.props.match.params.id) 
  console.log(this.props.match.params.id)
  
return (
    
  <div>
    <h1>{chosenCountry[0].name.common}</h1>
    <p>Capital {chosenCountry[0].capital}</p>
    <p>Area {chosenCountry[0].area}</p>
    <ul>Borders></ul>
        <li>{chosenCountry[0].borders}</li>
  </div>
)
}

}
