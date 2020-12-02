import React, { Component } from 'react'
import './App.css';
import Navbar from './components/NavBar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

class App extends Component {

  state = {
    countries: []
  }

  getAllCountries(){
    axios.get("https://restcountries.eu/rest/v2/all")
    .then((response) => {
      return this.setState({
        countries: response.data
      })
    })
  }

  componentDidMount(){
    return this.getAllCountries()
  }

  render(){
    return (
        <div className="App">
          <Navbar />
          <div class="container">
            <div class="row">
              <CountriesList allCountries={this.state.countries} />
              <Switch>
                <Route path="/:countrycode" component={CountryDetails}/>  
              </Switch>
            </div>
          </div>
        </div>
    );
  }
 
}

export default App;