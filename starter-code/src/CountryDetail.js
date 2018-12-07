import React, { Component } from 'react'
import './country.css'


export default class CountryDetail extends Component {
  showInfo = (event)=> {
    var CountryPicked =  this.props.countries.filter((country)=> country.name.common.includes(event.target.childNodes[1].textContent))
    var countryObject = {
      country: CountryPicked[0].name.common,
      borders: CountryPicked[0].borders.join(', '),
      capital: CountryPicked[0].capital[0],
      area: CountryPicked[0].area
    }
    this.props.addInfo(countryObject)
  }

  render() {
    var Countries = this.props.countries.map((country)=><div className="countryContainer"><li onClick={this.showInfo}><span className="flag">{country.flag}</span>{country.name.common}</li></div>)
    return (
      <div className="container">
        <ul>
          {Countries}
        </ul>
      </div>
    )
  }
}
