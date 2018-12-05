import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CountryDetail from "./components/CountryDetail"
import InfoCountry from "./components/InfoCountry"
import CountriesJson from "./countries.json";
import 'bootstrap/dist/css/bootstrap.css';
import './components/countryDetails.css'
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor () {
    super()
    this.state = {
      countries: CountriesJson
    }
  }


  render() {
    return (
      <div className="App">

        <Switch>
        <Route exact path='/:cca3' component={InfoCountry}/>
         <InfoCountry countries={CountriesJson}/>
        
        </Switch>


 
    {this.state.countries.map((country, idx) => {
      return < CountryDetail pais={country} idx={idx}/>
      
    })}
   
      </div>
    );
  }
}

export default App;
