import React, {Component} from 'react';
import countries from '../countries.json'
import CountryBorderLink from './CountryBorderLink'

export default class CountryDetail extends Component{
  // constructor(props){
  //   super();
  //   let cca3 = props.match.params.cca3
  //   let country = countries.filter(e => e.cca3.includes(cca3))[0];
  //   let name = country.name.official
  //   let capital = country.capital[0]
  //   let area = country.area
  //   let borders = country.borders
  //   console.log(country)
  //   this.state = {
  //     countryId: cca3,
  //     name,
  //     capital,
  //     area,
  //     borders,
  //     countryInfo: country
  //   }
  //   console.log(this.state)
  // }

  

  render(){
    let cca3 = this.props.match.params.cca3
    let country = countries.filter(e => e.cca3.includes(cca3))[0];
    let name = country.name.official
    let capital = country.capital[0]
    let area = country.area
    let borders = country.borders
    
    return (
      <div className="column section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          <div className="is-divider"/>
          <div className="columns">
            <p className="column has-text-weight-bold is-size-4">Capital</p>
            <p className="column has-text-weight-light is-size-4">{capital}</p>
          </div>
          <div className="is-divider"/>
          <div className="columns">
            <p className="column has-text-weight-bold is-size-4">Area</p>
            <p className="column has-text-weight-light is-size-4">{area} km<sup>2</sup></p>
          </div>
          <div className="is-divider"/>
          <div className="columns">
            <p className="column has-text-weight-bold is-size-4">Borders</p>
            <div className="column">
              {borders.map(e => <CountryBorderLink cca3={e} key={e}/>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

