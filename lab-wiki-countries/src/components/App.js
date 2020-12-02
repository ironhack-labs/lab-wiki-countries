import './App.css';
import React, { Component } from 'react'
import NavBar from './navbar/NavBar'
import CountriesList from './countries-list/Countries-list'
import CountryDetails from './country-details/Country-Details'
import Countries from '../countries.json'
import { Route } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      countries: ''

    }
  }
  componentDidMount = () => this.setState({ countries: Countries })

  render() {

    return (
      <div className="App" >
        <NavBar />

        <div className="container">
          <div className="row">

            <CountriesList />
            <Route path="/:Detail" exact render={props => <CountryDetails {...props} />} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
