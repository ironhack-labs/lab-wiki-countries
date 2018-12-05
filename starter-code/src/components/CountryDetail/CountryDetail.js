import React, { Component } from 'react'
import countries from '../../countries.json'



export default class CountryDetail extends Component {

  filterCountries = (countries, countrycca32) => {
    return countries.filter((country) => {
      console.log(countrycca32);
      console.log(country)
      return country.cca3 === countrycca32
    })
  }

  render() {

    let chosenCountry = this.filterCountries(countries, this.props.match.params.cca3)
    console.log(chosenCountry)
    return (
      <div>
        <p>The chosen project has this id: {this.props.match.params.cca3}</p>
        {
          chosenCountry.map((country, index) => {
            return (
              
                <h1>{country.name.common}</h1>
            
            )
          })
        }
      </div>
    )
  }
}
