import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Countries from './countries.json'

import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import Navbar from "./components/Navbar";

import React, {Component} from 'react'
import axios from "axios";



class App extends Component { 

  state = {
    countries: []
  }

  componentDidMount = async () => {
    let response = await axios.get("https://restcountries.eu/rest/v2/all")
    this.setState({
      countries: response.data
    })
  }

  render() {
    if(this.state.countries.length === 0){
      return (
        <div>
            Oopsie no countries were found
        </div>)
    }
      <Switch>
        <div>
          <Navbar />
          <CountriesList countries={this.state.countries}/>
          <Route path={'/countries/:countryID'} component={CountryDetails} ></Route>
        </div>
      </Switch>
  }
}

export default App;
