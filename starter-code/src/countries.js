import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class Countries extends Component {

  selectCountry = (event) => {
  var selectedCountryObject = this.props.countries.filter((country) => country.name.common.includes(event.currentTarget.childNodes[1].textContent));
  var newCountry = {
    country: selectedCountryObject[0].name.common,
    capital: selectedCountryObject[0].capital[0],
    area: selectedCountryObject[0].area,
    borders: selectedCountryObject[0].borders
  }
  this.props.addObject(newCountry);
  console.log(newCountry)
  }

  render() {
    var countriesResult = this.props.countries.map((country, index)=> <li key={index} onClick={this.selectCountry} className="list-group-item list-group-item-action"><span>{country.flag}</span><span>{country.name.common}</span></li>)
    
    var countryBorders = this.props.country.borders
   
    
    
    return (
      <div>
        <div className="header"><h2>Wiki countries</h2></div>
        <div className="flex">
          <div className="list-group col1-3">
            <ul>
              {countriesResult}
            </ul>
          </div>
          <div className="list-group col2-3 left-align">
            <h1 className="sticky-60">{this.props.country.country}</h1>
            <div className="flex-left sticky-120">
              <table>
                <tr>
                  <td>Capital</td>
                  <td>{this.props.country.capital}</td> 
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{this.props.country.area}</td>
                </tr>
                <tr>
                  <td className="borders">Borders</td>
                  <td>
                    <ul className="border-list">
                      {countryBorders}   
                    </ul>
                  </td>
                </tr>
              </table>


            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Countries;