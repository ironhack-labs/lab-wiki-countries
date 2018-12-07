import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryDetail from './CountryDetail';
class App extends Component {

state = {
  isLoaded: false,
  data: [],
  currentInfo: {}
}



  componentDidMount(){
    fetch('http://206.189.7.127/countries/', {withCredential: true})
    .then((result) => result.json())
    .then((result)=> {
      this.setState({
            isLoaded: true,
            data: result
          });
          
    })
  }

  addInfo = (countryObject) =>{
    this.setState({currentInfo: countryObject})
   debugger
  }

  render() {
    var currentCountry = this.state.currentInfo;
    return (
      <div className="App">
        <CountryDetail addInfo={this.addInfo} countries={this.state.data} />
        <h1>{currentCountry.country}</h1>
        <h2>Capital: {currentCountry.capital}</h2>
        <h2>Borders: {currentCountry.borders}</h2>
        <h2>Area: {currentCountry.area} km2</h2>
      </div>
    );
  }
}

export default App;
