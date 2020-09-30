import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import CountriesList from './components/countries-list/CountriesList';
import countriesDB from './countries.json'

import MainNavbar from './components/navbar/Navbar'
import CountryDetails from './components/country-details/CountryDetails'

class App extends Component {

  constructor() {

    super()
    this.state = { countries: [] }
  }

  componentDidMount() {

    this.setState({ countries: countriesDB })
  }

  render() {

    return (

      <>

        <MainNavbar />

        <main>

          <div className='row'>

            <div className='col-6'>

              <CountriesList countriesDB={countriesDB} />

            </div>

            <div className='col-6'>

              <Switch>
                <Route path='/:cca3' render={props => <CountryDetails {...props} countriesDB={countriesDB} />} />
              </Switch>

            </div>

          </div>

        </main>

      </>

    )

  }
}

export default App;
