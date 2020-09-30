import React, { Component } from 'react'

// Styles
import './App.css'

// Router
import { Switch, Route } from "react-router-dom"

// Countries data
import countriesData  from '../countries.json'

// Layout Components
import Navbar from './layout/Navbar'

// Custom Components
import CountriesList from './pages/CountriesList'
import CountryDetails from './pages/CountryDetails'

class App extends Component {

  constructor() {
    super()
    this.state = { countries: countriesData }
  }

  render() {

    return (

      <>
        <div className="App">
          <Navbar />
          
          <div className="container">
            <div className="row">
              
              <CountriesList countriesData={this.state.countries} />
              
              <Switch>
                <Route
                  path="/:country"
                  render={props => <CountryDetails {...props} countriesData={this.state.countries} />} />
              </Switch>

            </div>
          </div>
        </div>

      </>

    )

  }

}

export default App;
