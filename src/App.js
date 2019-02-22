import React, { Component } from 'react';
import logo from './logo.svg';
import Country from './components/Country';
import CountryDescription from './components/CountryDescription';
import countries from './data/countries.json';
import './App.css';

class App extends Component {
  countryArr = countries.map(country => country)
  countryFound = []
  state = {
    countryList: this.countryArr,
    countryInfo: "",

  }
  findCountry = (value) => {
     this.countryFound = this.countryArr.find((element)=> element.name.official === value)
    
  }
  handleClick = (e) => {

    this.setState({
      countryInfo: e.target.value,
    })
    this.findCountry(e.target.value)



  }
  render() {

    return (
      <div className="App">
        <div className="countries">
          {this.countryArr.map(country => {
            return <Country key={`${country.cioc}-${country.name.official}`} handleClick={this.handleClick} value={country.name.official}> {country.flag} {country.name.official} </Country>
          }
          )
          }
        </div>
        {this.state.countryInfo !== ""?
        <CountryDescription capital={this.countryFound.capital} area={this.countryFound.area} borders={this.countryFound.borders} >{this.state.countryInfo}</CountryDescription> : ""
        }
        </div>
    );
  }
}

export default App;
