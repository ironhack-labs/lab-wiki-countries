
import './App.css';
import Navbar from './components/Navbar';
import { Route} from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
// import countries from './countries.json'
import React, { Component } from 'react'

export default class App extends Component {
 
  render() {
    return (
      <div>
      <Navbar />
      

      <div className="container">
        <div className="row">
          <CountriesList/>
          <Route exact path="/:countryCode" component={CountryDetails}/>
        </div>
      </div>
    </div>
    )
  }


}

