import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import countriesArr from '../countries.json'
import Navbar from './navbar/Navbar'
import CountriesList from './countries-list/CountriesList'
import Details from './country-details/CountryDetails'


class App extends Component {
  constructor () {
    super()
    this.state = {
      countries: ''
    }
  }

  componentDidMount = () => {
    console.log('Se montó la App')
    this.setState({ countries: countriesArr })
  }

  render() {
    return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
        <CountriesList />
        <Switch>
          <Route path='/:code' render={props => <Details { ...props } />} />
        </Switch>
        </div>
      </div>
    </>
  )
  }
}


export default App;