import React, { Component } from 'react'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import jsonCountries from './countries.json';

import { Switch, Route, } from 'react-router-dom';


import './App.css'


class App extends Component {

  constructor() {
    super()

    this.state = {
      countries: []
    }

  }

  componentDidMount = () => {
    console.log("HE TERMINADO DE MONTARME")

    this.setState({
      countries: jsonCountries
    })

  }


  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={jsonCountries} />
            <Switch>
              <Route path="/country-details/:cca3" render={(props) => <CountryDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App
